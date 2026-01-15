import { writable } from 'svelte/store';

// Types
export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

// Create auth store
const createAuthStore = () => {
    const { subscribe, set, update } = writable<AuthState>({
        isLoggedIn: false,
        user: null,
    });

    // Load from localStorage on init (client-side only)
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('bisaBugar_auth');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                set(parsed);
            } catch (e) {
                console.error('Failed to parse auth state:', e);
            }
        }
    }

    return {
        subscribe,

        login: (email: string, password: string): { success: boolean; message: string } => {
            // Check if user exists in localStorage
            const users = getStoredUsers();
            const user = users.find(u => u.email === email);

            if (!user) {
                return { success: false, message: 'Email tidak terdaftar' };
            }

            // Simple password check (in real app, use proper hashing)
            if (user.password !== password) {
                return { success: false, message: 'Password salah' };
            }

            const authState: AuthState = {
                isLoggedIn: true,
                user: { id: user.id, name: user.name, email: user.email },
            };

            set(authState);
            localStorage.setItem('bisaBugar_auth', JSON.stringify(authState));

            return { success: true, message: 'Login berhasil!' };
        },

        register: (name: string, email: string, password: string): { success: boolean; message: string } => {
            const users = getStoredUsers();

            // Check if email already exists
            if (users.some(u => u.email === email)) {
                return { success: false, message: 'Email sudah terdaftar' };
            }

            // Create new user
            const newUser = {
                id: crypto.randomUUID(),
                name,
                email,
                password, // In real app, hash this!
            };

            users.push(newUser);
            localStorage.setItem('bisaBugar_users', JSON.stringify(users));

            // Auto-login after register
            const authState: AuthState = {
                isLoggedIn: true,
                user: { id: newUser.id, name: newUser.name, email: newUser.email },
            };

            set(authState);
            localStorage.setItem('bisaBugar_auth', JSON.stringify(authState));

            return { success: true, message: 'Pendaftaran berhasil!' };
        },

        logout: () => {
            set({ isLoggedIn: false, user: null });
            localStorage.removeItem('bisaBugar_auth');
        },
    };
};

// Helper to get stored users
function getStoredUsers(): Array<{ id: string; name: string; email: string; password: string }> {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem('bisaBugar_users');
    if (!stored) return [];

    try {
        return JSON.parse(stored);
    } catch {
        return [];
    }
}

export const auth = createAuthStore();

// Booking store
export interface Booking {
    id: string;
    name: string;
    coach: string;
    date: string;
    time: string;
    createdAt: string;
}

const createBookingStore = () => {
    const { subscribe, set, update } = writable<Booking[]>([]);

    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('bisaBugar_bookings');
        if (stored) {
            try {
                set(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse bookings:', e);
            }
        }
    }

    return {
        subscribe,

        add: (booking: Omit<Booking, 'id' | 'createdAt'>): Booking => {
            const newBooking: Booking = {
                ...booking,
                id: crypto.randomUUID(),
                createdAt: new Date().toISOString(),
            };

            update(bookings => {
                const updated = [...bookings, newBooking];
                localStorage.setItem('bisaBugar_bookings', JSON.stringify(updated));
                return updated;
            });

            return newBooking;
        },
    };
};

export const bookings = createBookingStore();

// Class registration store
export interface ClassRegistration {
    id: string;
    userId: string;
    className: string;
    day: string;
    time: string;
    registeredAt: string;
}

const createClassStore = () => {
    const { subscribe, set, update } = writable<ClassRegistration[]>([]);

    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('bisaBugar_classes');
        if (stored) {
            try {
                set(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse classes:', e);
            }
        }
    }

    return {
        subscribe,

        register: (registration: Omit<ClassRegistration, 'id' | 'registeredAt'>): ClassRegistration => {
            const newReg: ClassRegistration = {
                ...registration,
                id: crypto.randomUUID(),
                registeredAt: new Date().toISOString(),
            };

            update(regs => {
                const updated = [...regs, newReg];
                localStorage.setItem('bisaBugar_classes', JSON.stringify(updated));
                return updated;
            });

            return newReg;
        },

        isRegistered: (userId: string, className: string, day: string): boolean => {
            let registered = false;
            const unsub = subscribe(regs => {
                registered = regs.some(r =>
                    r.userId === userId && r.className === className && r.day === day
                );
            });
            unsub();
            return registered;
        },
    };
};

export const classRegistrations = createClassStore();

// Promo claims store
export interface PromoClaim {
    id: string;
    userId: string;
    promoName: string;
    claimedAt: string;
}

const createPromoStore = () => {
    const { subscribe, set, update } = writable<PromoClaim[]>([]);

    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('bisaBugar_promos');
        if (stored) {
            try {
                set(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse promos:', e);
            }
        }
    }

    return {
        subscribe,

        claim: (userId: string, promoName: string): PromoClaim => {
            const newClaim: PromoClaim = {
                id: crypto.randomUUID(),
                userId,
                promoName,
                claimedAt: new Date().toISOString(),
            };

            update(claims => {
                const updated = [...claims, newClaim];
                localStorage.setItem('bisaBugar_promos', JSON.stringify(updated));
                return updated;
            });

            return newClaim;
        },

        hasClaimed: (userId: string, promoName: string): boolean => {
            let claimed = false;
            const unsub = subscribe(claims => {
                claimed = claims.some(c => c.userId === userId && c.promoName === promoName);
            });
            unsub();
            return claimed;
        },
    };
};

export const promoClaims = createPromoStore();
