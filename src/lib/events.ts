/**
 * Bisa Bugar - Event Bus (Observer Pattern)
 * Centralized event system for real-time-like notifications and UI updates
 */

// Event types for our booking system
export enum BookingEventType {
  BOOKING_CREATED = 'BOOKING_CREATED',
  BOOKING_CANCELLED = 'BOOKING_CANCELLED', 
  SCHEDULE_UPDATED = 'SCHEDULE_UPDATED',
  CLASS_FULL = 'CLASS_FULL',
  MEMBERSHIP_VALIDATED = 'MEMBERSHIP_VALIDATED'
}

// Event data interface
export interface BookingEvent {
  type: BookingEventType;
  data: any;
  timestamp: Date;
}

// Observer interface
export interface EventObserver {
  id: string;
  eventType: BookingEventType;
  callback: (event: BookingEvent) => void;
}

// Singleton Event Bus
class EventBus {
  private static instance: EventBus;
  private observers: Map<BookingEventType, EventObserver[]> = new Map();

  private constructor() {
    // Initialize observer arrays for each event type
    Object.values(BookingEventType).forEach(eventType => {
      this.observers.set(eventType, []);
    });
  }

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  // Subscribe to events
  public subscribe(eventType: BookingEventType, callback: (event: BookingEvent) => void): string {
    const observerId = `observer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const observer: EventObserver = {
      id: observerId,
      eventType,
      callback
    };

    const observers = this.observers.get(eventType) || [];
    observers.push(observer);
    this.observers.set(eventType, observers);

    return observerId;
  }

  // Unsubscribe from events
  public unsubscribe(observerId: string): boolean {
    for (const [eventType, observers] of this.observers.entries()) {
      const index = observers.findIndex(obs => obs.id === observerId);
      if (index !== -1) {
        observers.splice(index, 1);
        this.observers.set(eventType, observers);
        return true;
      }
    }
    return false;
  }

  // Publish events
  public publish(eventType: BookingEventType, data: any): void {
    const event: BookingEvent = {
      type: eventType,
      data,
      timestamp: new Date()
    };

    const observers = this.observers.get(eventType) || [];
    observers.forEach(observer => {
      try {
        observer.callback(event);
      } catch (error) {
        console.error(`Error in observer ${observer.id}:`, error);
      }
    });
  }

  // Get all observers for debugging
  public getObservers(): Map<BookingEventType, EventObserver[]> {
    return new Map(this.observers);
  }

  // Clear all observers
  public clearObservers(): void {
    Object.values(BookingEventType).forEach(eventType => {
      this.observers.set(eventType, []);
    });
  }
}

export default EventBus;
