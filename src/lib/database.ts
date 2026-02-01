/**
 * Bisa Bugar - Database Manager (Singleton Pattern)
 * Centralized data management using localStorage as mock database
 */

// Types for our data structures
export interface ClassSchedule {
  id: string;
  time: string;
  className: string;
  coach: string;
  duration: string;
  capacity: number;
  bookedSlots: number;
  available: boolean;
  day: string;
}

export interface Booking {
  id: string;
  classId: string;
  memberId: string;
  memberName: string;
  bookingTime: Date;
  status: 'confirmed' | 'cancelled';
}

export interface Member {
  id: string;
  name: string;
  email: string;
  membershipType: 'basic' | 'premium' | 'vip';
  isActive: boolean;
}

// Singleton Database Manager
class DatabaseManager {
  private static instance: DatabaseManager;
  private readonly STORAGE_KEYS = {
    CLASSES: 'bisabugar_classes',
    BOOKINGS: 'bisabugar_bookings', 
    MEMBERS: 'bisabugar_members'
  };

  private constructor() {
    this.initializeData();
  }

  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  private initializeData(): void {
    // Only initialize on client-side
    if (typeof window === 'undefined') {
      return;
    }

    // Initialize classes if not exists
    if (!localStorage.getItem(this.STORAGE_KEYS.CLASSES)) {
      const defaultClasses: ClassSchedule[] = [
        {
          id: 'class_001',
          time: '07:00',
          className: 'Zumba Fitness',
          coach: 'Coach Aniq',
          duration: '60 Menit',
          capacity: 20,
          bookedSlots: 0,
          available: true,
          day: 'SENIN'
        },
        {
          id: 'class_002', 
          time: '09:00',
          className: 'Power Yoga',
          coach: 'Coach Ismaya',
          duration: '45 Menit',
          capacity: 15,
          bookedSlots: 0,
          available: true,
          day: 'SENIN'
        },
        {
          id: 'class_003',
          time: '17:00',
          className: 'Body Pump',
          coach: 'Coach Leon',
          duration: '60 Menit',
          capacity: 25,
          bookedSlots: 25,
          available: false,
          day: 'SENIN'
        },
        // Add classes for other days
        {
          id: 'class_004',
          time: '07:00',
          className: 'HIIT Cardio',
          coach: 'Coach Leon',
          duration: '45 Menit',
          capacity: 20,
          bookedSlots: 8,
          available: true,
          day: 'SELASA'
        },
        {
          id: 'class_005',
          time: '09:00',
          className: 'Pilates',
          coach: 'Coach Ismaya',
          duration: '60 Menit',
          capacity: 12,
          bookedSlots: 12,
          available: false,
          day: 'SELASA'
        },
        {
          id: 'class_006',
          time: '17:00',
          className: 'CrossFit',
          coach: 'Coach Aniq',
          duration: '60 Menit',
          capacity: 15,
          bookedSlots: 3,
          available: true,
          day: 'SELASA'
        }
      ];
      localStorage.setItem(this.STORAGE_KEYS.CLASSES, JSON.stringify(defaultClasses));
    }

    // Initialize bookings if not exists
    if (!localStorage.getItem(this.STORAGE_KEYS.BOOKINGS)) {
      localStorage.setItem(this.STORAGE_KEYS.BOOKINGS, JSON.stringify([]));
    }

    // Initialize members if not exists
    if (!localStorage.getItem(this.STORAGE_KEYS.MEMBERS)) {
      const defaultMembers: Member[] = [
        {
          id: 'member_001',
          name: 'John Doe',
          email: 'john@example.com',
          membershipType: 'premium',
          isActive: true
        }
      ];
      localStorage.setItem(this.STORAGE_KEYS.MEMBERS, JSON.stringify(defaultMembers));
    }
  }

  // Class Schedule Methods
  public getClasses(day?: string): ClassSchedule[] {
    if (typeof window === 'undefined') return [];
    const classes = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.CLASSES) || '[]');
    return day ? classes.filter((c: ClassSchedule) => c.day === day) : classes;
  }

  public getClassById(classId: string): ClassSchedule | null {
    if (typeof window === 'undefined') return null;
    const classes = this.getClasses();
    return classes.find(c => c.id === classId) || null;
  }

  public updateClass(classId: string, updates: Partial<ClassSchedule>): boolean {
    if (typeof window === 'undefined') return false;
    const classes = this.getClasses();
    const index = classes.findIndex(c => c.id === classId);
    
    if (index !== -1) {
      classes[index] = { ...classes[index], ...updates };
      localStorage.setItem(this.STORAGE_KEYS.CLASSES, JSON.stringify(classes));
      return true;
    }
    return false;
  }

  // Booking Methods
  public getBookings(memberId?: string): Booking[] {
    if (typeof window === 'undefined') return [];
    const bookings = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.BOOKINGS) || '[]');
    return memberId ? bookings.filter((b: Booking) => b.memberId === memberId) : bookings;
  }

  public saveBooking(booking: Omit<Booking, 'id' | 'bookingTime'>): Booking {
    if (typeof window === 'undefined') {
      throw new Error('Cannot save booking on server side');
    }
    
    const bookings = this.getBookings();
    const newBooking: Booking = {
      ...booking,
      id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      bookingTime: new Date()
    };
    
    bookings.push(newBooking);
    localStorage.setItem(this.STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    
    // Update class booked slots
    const classItem = this.getClassById(booking.classId);
    if (classItem) {
      this.updateClass(booking.classId, {
        bookedSlots: classItem.bookedSlots + 1,
        available: classItem.bookedSlots + 1 < classItem.capacity
      });
    }
    
    return newBooking;
  }

  public cancelBooking(bookingId: string): boolean {
    if (typeof window === 'undefined') return false;
    const bookings = this.getBookings();
    const bookingIndex = bookings.findIndex(b => b.id === bookingId);
    
    if (bookingIndex !== -1) {
      const booking = bookings[bookingIndex];
      booking.status = 'cancelled';
      
      localStorage.setItem(this.STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
      
      // Update class booked slots
      const classItem = this.getClassById(booking.classId);
      if (classItem && classItem.bookedSlots > 0) {
        this.updateClass(booking.classId, {
          bookedSlots: classItem.bookedSlots - 1,
          available: true
        });
      }
      
      return true;
    }
    return false;
  }

  public isClassBooked(classId: string, memberId: string): boolean {
    if (typeof window === 'undefined') return false;
    const bookings = this.getBookings(memberId);
    return bookings.some(b => b.classId === classId && b.status === 'confirmed');
  }

  // Member Methods
  public getMembers(): Member[] {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.MEMBERS) || '[]');
  }

  public getMemberById(memberId: string): Member | null {
    if (typeof window === 'undefined') return null;
    const members = this.getMembers();
    return members.find(m => m.id === memberId) || null;
  }

  // Utility Methods
  public clearAllData(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.STORAGE_KEYS.CLASSES);
    localStorage.removeItem(this.STORAGE_KEYS.BOOKINGS);
    localStorage.removeItem(this.STORAGE_KEYS.MEMBERS);
    this.initializeData();
  }
}

export default DatabaseManager;
