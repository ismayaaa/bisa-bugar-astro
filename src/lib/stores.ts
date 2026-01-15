/**
 * Bisa Bugar - Svelte Stores
 * Global state management for theme and modals
 */

import { writable } from 'svelte/store';

/**
 * Theme store - manages dark mode state
 */
function createThemeStore() {
    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        toggle: () => update(dark => !dark),
        setDark: () => set(true),
        setLight: () => set(false),
        set
    };
}

export const isDarkMode = createThemeStore();

/**
 * Booking modal store - manages modal visibility
 */
function createModalStore() {
    const { subscribe, set } = writable(false);

    return {
        subscribe,
        open: () => set(true),
        close: () => set(false),
        toggle: () => { },
        set
    };
}

export const bookingModalOpen = createModalStore();

/**
 * Toast notification store
 */
interface ToastState {
    visible: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
}

function createToastStore() {
    const { subscribe, set, update } = writable<ToastState>({
        visible: false,
        message: '',
        type: 'success'
    });

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return {
        subscribe,
        show: (message: string, type: ToastState['type'] = 'success', duration = 3000) => {
            if (timeoutId) clearTimeout(timeoutId);

            set({ visible: true, message, type });

            timeoutId = setTimeout(() => {
                update(state => ({ ...state, visible: false }));
            }, duration);
        },
        hide: () => {
            if (timeoutId) clearTimeout(timeoutId);
            update(state => ({ ...state, visible: false }));
        }
    };
}

export const toast = createToastStore();

/**
 * Mobile menu store
 */
export const mobileMenuOpen = writable(false);

/**
 * Active schedule day store
 */
export const activeScheduleDay = writable('SENIN');
