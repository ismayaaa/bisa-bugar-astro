/**
 * Bisa Bugar - Booking Facade (Facade Pattern)
 * Simplified interface for complex booking workflows
 */

import DatabaseManager, { ClassSchedule, Booking, Member } from './database';
import EventBus, { BookingEventType, BookingEvent } from './events';

// Booking request interface
export interface BookingRequest {
  classId: string;
  memberId: string;
  memberName?: string;
}

// Booking result interface
export interface BookingResult {
  success: boolean;
  booking?: Booking;
  message: string;
  error?: string;
}

// Membership validation result
export interface MembershipValidationResult {
  isValid: boolean;
  membershipType: string;
  message: string;
}

// Facade class that coordinates the booking workflow
class BookingFacade {
  private static instance: BookingFacade;
  private db: DatabaseManager;
  private eventBus: EventBus;

  private constructor() {
    this.db = DatabaseManager.getInstance();
    this.eventBus = EventBus.getInstance();
  }

  public static getInstance(): BookingFacade {
    if (!BookingFacade.instance) {
      BookingFacade.instance = new BookingFacade();
    }
    return BookingFacade.instance;
  }

  /**
   * Main booking method - coordinates the entire booking workflow
   */
  public async bookClass(request: BookingRequest): Promise<BookingResult> {
    try {
      // Step 1: Validate membership
      const membershipValidation = this.validateMembership(request.memberId);
      if (!membershipValidation.isValid) {
        return {
          success: false,
          message: membershipValidation.message
        };
      }

      // Step 2: Check class availability
      const classSchedule = this.db.getClassById(request.classId);
      if (!classSchedule) {
        return {
          success: false,
          message: 'Kelas tidak ditemukan'
        };
      }

      if (!classSchedule.available) {
        // Publish class full event
        this.eventBus.publish(BookingEventType.CLASS_FULL, {
          classId: request.classId,
          className: classSchedule.className
        });

        return {
          success: false,
          message: 'Kelas sudah penuh'
        };
      }

      // Step 3: Check if already booked
      if (this.db.isClassBooked(request.classId, request.memberId)) {
        return {
          success: false,
          message: 'Anda sudah terdaftar di kelas ini'
        };
      }

      // Step 4: Create booking
      const member = this.db.getMemberById(request.memberId);
      const booking = this.db.saveBooking({
        classId: request.classId,
        memberId: request.memberId,
        memberName: request.memberName || member?.name || 'Unknown Member',
        status: 'confirmed'
      });

      // Step 5: Publish events
      this.eventBus.publish(BookingEventType.BOOKING_CREATED, {
        booking,
        classSchedule
      });

      this.eventBus.publish(BookingEventType.SCHEDULE_UPDATED, {
        classId: request.classId,
        newBookedSlots: classSchedule.bookedSlots + 1
      });

      return {
        success: true,
        booking,
        message: `Berhasil mendaftar kelas ${classSchedule.className}`
      };

    } catch (error) {
      console.error('Booking error:', error);
      return {
        success: false,
        message: 'Terjadi kesalahan saat melakukan pendaftaran',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Cancel booking method
   */
  public async cancelClass(bookingId: string, memberId: string): Promise<BookingResult> {
    try {
      const bookings = this.db.getBookings(memberId);
      const booking = bookings.find(b => b.id === bookingId && b.status === 'confirmed');

      if (!booking) {
        return {
          success: false,
          message: 'Booking tidak ditemukan atau sudah dibatalkan'
        };
      }

      const success = this.db.cancelBooking(bookingId);
      if (!success) {
        return {
          success: false,
          message: 'Gagal membatalkan booking'
        };
      }

      const classSchedule = this.db.getClassById(booking.classId);

      // Publish events
      this.eventBus.publish(BookingEventType.BOOKING_CANCELLED, {
        booking,
        classSchedule
      });

      this.eventBus.publish(BookingEventType.SCHEDULE_UPDATED, {
        classId: booking.classId,
        newBookedSlots: classSchedule ? classSchedule.bookedSlots - 1 : 0
      });

      return {
        success: true,
        booking: { ...booking, status: 'cancelled' },
        message: `Berhasil membatalkan kelas ${classSchedule?.className || ''}`
      };

    } catch (error) {
      console.error('Cancel booking error:', error);
      return {
        success: false,
        message: 'Terjadi kesalahan saat membatalkan pendaftaran',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get available classes for a specific day
   */
  public getAvailableClasses(day: string, memberId?: string): ClassSchedule[] {
    const classes = this.db.getClasses(day);
    
    if (memberId) {
      // Mark classes as booked if member is already registered
      return classes.map(cls => ({
        ...cls,
        isBookedByMember: this.db.isClassBooked(cls.id, memberId)
      }));
    }

    return classes;
  }

  /**
   * Get member's bookings
   */
  public getMemberBookings(memberId: string): Booking[] {
    return this.db.getBookings(memberId);
  }

  /**
   * Validate membership (mocked validation)
   */
  private validateMembership(memberId: string): MembershipValidationResult {
    const member = this.db.getMemberById(memberId);
    
    if (!member) {
      return {
        isValid: false,
        membershipType: 'none',
        message: 'Member tidak ditemukan'
      };
    }

    if (!member.isActive) {
      return {
        isValid: false,
        membershipType: member.membershipType,
        message: 'Keanggotaan tidak aktif'
      };
    }

    // Mock validation: all active members can book
    this.eventBus.publish(BookingEventType.MEMBERSHIP_VALIDATED, {
      memberId,
      membershipType: member.membershipType
    });

    return {
      isValid: true,
      membershipType: member.membershipType,
      message: 'Membership valid'
    };
  }

  /**
   * Check if user can book a specific class
   */
  public canBookClass(classId: string, memberId: string): {
    canBook: boolean;
    reason: string;
  } {
    const classSchedule = this.db.getClassById(classId);
    if (!classSchedule) {
      return { canBook: false, reason: 'Kelas tidak ditemukan' };
    }

    if (!classSchedule.available) {
      return { canBook: false, reason: 'Kelas sudah penuh' };
    }

    if (this.db.isClassBooked(classId, memberId)) {
      return { canBook: false, reason: 'Anda sudah terdaftar di kelas ini' };
    }

    const membershipValidation = this.validateMembership(memberId);
    if (!membershipValidation.isValid) {
      return { canBook: false, reason: membershipValidation.message };
    }

    return { canBook: true, reason: 'Bisa melakukan pendaftaran' };
  }
}

export default BookingFacade;
