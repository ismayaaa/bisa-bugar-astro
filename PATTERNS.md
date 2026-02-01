# BisaBugar - Design Patterns Implementation

This document explains the design patterns implemented in the BisaBugar gym web application to demonstrate architectural concepts for our report.

## 📋 Overview

The BisaBugar prototype now includes a fully functional booking system that demonstrates three key design patterns:

1. **Singleton Pattern** - Database Manager
2. **Facade Pattern** - Booking Facade  
3. **Observer Pattern** - Event Bus

All functionality is client-side using localStorage as a mock database, with no real backend required.

## 🏗️ Architecture

### 1. Singleton Pattern (`src/lib/database.ts`)

**Location**: `src/lib/database.ts`

**Purpose**: Ensures a single point of access to all data operations.

**Implementation**:
```typescript
class DatabaseManager {
  private static instance: DatabaseManager;
  
  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }
}
```

**Key Features**:
- Centralized data management using localStorage
- Handles class schedules, bookings, and member data
- Provides methods like `getClasses()`, `saveBooking()`, `cancelBooking()`
- Initializes default data on first load
- Thread-safe singleton implementation

**Usage Example**:
```typescript
const db = DatabaseManager.getInstance();
const classes = db.getClasses('SENIN');
const booking = db.saveBooking(bookingData);
```

### 2. Facade Pattern (`src/lib/booking.ts`)

**Location**: `src/lib/booking.ts`

**Purpose**: Simplifies complex booking workflows behind a single interface.

**Implementation**:
```typescript
class BookingFacade {
  public async bookClass(request: BookingRequest): Promise<BookingResult> {
    // 1. Validate membership
    // 2. Check availability  
    // 3. Create booking
    // 4. Update schedule
    // 5. Trigger events
  }
}
```

**Key Features**:
- Coordinates multiple subsystems (Database, Events, Validation)
- Single method call for complex booking operations
- Handles membership validation, availability checks, and error handling
- Publishes events for real-time updates
- Provides clean API for UI components

**Usage Example**:
```typescript
const facade = BookingFacade.getInstance();
const result = await facade.bookClass({
  classId: 'class_001',
  memberId: 'member_001'
});
```

### 3. Observer Pattern (`src/lib/events.ts`)

**Location**: `src/lib/events.ts`

**Purpose**: Enables real-time-like notifications and UI updates.

**Implementation**:
```typescript
class EventBus {
  public subscribe(eventType: BookingEventType, callback: Function): string
  public publish(eventType: BookingEventType, data: any): void
  public unsubscribe(observerId: string): boolean
}
```

**Key Features**:
- Publish-subscribe event system
- Decouples components from direct dependencies
- Supports multiple observers per event type
- Event types: `BOOKING_CREATED`, `BOOKING_CANCELLED`, `SCHEDULE_UPDATED`, `CLASS_FULL`
- Error handling for observer callbacks

**Usage Example**:
```typescript
const eventBus = EventBus.getInstance();

// Subscribe to events
eventBus.subscribe(BookingEventType.BOOKING_CREATED, (event) => {
  showToast('Booking successful!', 'success');
});

// Publish events
eventBus.publish(BookingEventType.BOOKING_CREATED, { booking, classSchedule });
```

## 🎯 Interactive Features

### "Jadwal Kelas Hari Ini" Section

**Location**: `src/components/sections/Schedule.svelte`

**Features**:
- **Real-time Data**: Loads from DatabaseManager singleton
- **Booking States**: Shows "Daftar", "TERDAFTAR", or "PENUH" based on availability
- **Confirmation Modal**: Uses `ConfirmModal.svelte` for booking confirmation
- **Event Updates**: Subscribes to EventBus for real-time UI updates
- **Persistence**: Bookings persist across page refreshes via localStorage

**User Flow**:
1. User clicks "Daftar" on available class
2. Confirmation modal appears with class details
3. User confirms booking
4. BookingFacade processes the request
5. UI updates immediately to show "TERDAFTAR"
6. Toast notification appears via EventBus
7. Data persists in localStorage

### Booking Personal Trainer Modal

**Location**: `src/components/ui/BookingModal.svelte`

**Fixed Issues**:
- ✅ Dark theme dropdown styling
- ✅ White text on dark background for options
- ✅ Proper hover and focus states
- ✅ Consistent with app theme

## 🧪 Testing Guide

### Manual Testing Steps

1. **Test Booking Flow**:
   - Navigate to "Jadwal Kelas Hari Ini" section
   - Click "Daftar" on an available class (e.g., Zumba Fitness)
   - Confirm booking in modal
   - Verify button changes to "TERDAFTAR"
   - Refresh page - booking should persist

2. **Test Full Classes**:
   - Try booking a class marked "PENUH" (Body Pump)
   - Verify button is disabled
   - Check that no booking is created

3. **Test Duplicate Booking**:
   - Try booking the same class twice
   - Verify error message appears
   - Check that duplicate booking is prevented

4. **Test Dropdown Styling**:
   - Open "Booking Personal Trainer" modal
   - Click trainer dropdown
   - Verify dark background with white text
   - Check hover states work properly

5. **Test Event System**:
   - Open browser console
   - Perform booking actions
   - Observe event logs in console
   - Verify toast notifications appear

### Data Persistence

All data is stored in localStorage:
- `bisabugar_classes`: Class schedule data
- `bisabugar_bookings`: User bookings  
- `bisabugar_members`: Member information

To reset data, run in browser console:
```javascript
localStorage.clear();
location.reload();
```

## 🔧 Technical Details

### Dependencies

No new dependencies were added. The implementation uses:
- **Astro** (existing)
- **Svelte 5** (existing) 
- **TypeScript** (existing)
- **localStorage API** (browser native)

### File Structure

```
src/
├── lib/
│   ├── database.ts      # Singleton: DatabaseManager
│   ├── booking.ts       # Facade: BookingFacade  
│   ├── events.ts        # Observer: EventBus
│   └── stores.ts        # Existing Svelte stores
├── components/
│   ├── sections/
│   │   └── Schedule.svelte     # Interactive schedule
│   └── ui/
│       ├── BookingModal.svelte  # Fixed dropdown styling
│       └── ConfirmModal.svelte  # New confirmation modal
└── pages/
    └── index.astro       # Main page
```

### Browser Compatibility

The implementation works in all modern browsers that support:
- ES6+ (classes, async/await)
- localStorage API
- CSS custom properties
- Svelte 5 compilation targets

## 🎉 Acceptance Checklist

- ✅ Clicking "Daftar" on available class results in successful booking
- ✅ UI updates immediately and persists after refresh  
- ✅ Notifications triggered through Observer pattern
- ✅ Booking logic centralized in Facade pattern
- ✅ Database access centralized in Singleton pattern
- ✅ Dropdown styling fixed with dark theme
- ✅ No real backend required - all client-side
- ✅ Existing UI/visual style maintained

## 🚀 Future Enhancements

Potential improvements for production:
- Real backend API integration
- User authentication system
- Advanced filtering and search
- Calendar integration
- Email/SMS notifications
- Payment processing
- Admin dashboard

The current implementation provides a solid foundation demonstrating clean architecture patterns while maintaining simplicity and performance.
