/**
 * Bisa Bugar - Breakpoint Detection Utility
 * SSR-safe breakpoint detection for responsive rendering
 */

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Check if window is available (client-side only)
 */
export function isBrowser(): boolean {
    return typeof window !== 'undefined';
}

/**
 * Get current window width (returns 0 on server)
 */
export function getWindowWidth(): number {
    if (!isBrowser()) return 0;
    return window.innerWidth;
}

/**
 * Check if current width is at or above a breakpoint
 */
export function isBreakpoint(breakpoint: BreakpointKey): boolean {
    if (!isBrowser()) return false;
    return window.innerWidth >= BREAKPOINTS[breakpoint];
}

/**
 * Check if current view is mobile (below md breakpoint)
 */
export function isMobile(): boolean {
    if (!isBrowser()) return true; // Default to mobile for SSR
    return window.innerWidth < BREAKPOINTS.md;
}

/**
 * Check if current view is tablet (md to lg)
 */
export function isTablet(): boolean {
    if (!isBrowser()) return false;
    const width = window.innerWidth;
    return width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
}

/**
 * Check if current view is desktop (lg and above)
 */
export function isDesktop(): boolean {
    if (!isBrowser()) return false;
    return window.innerWidth >= BREAKPOINTS.lg;
}

/**
 * Create a media query listener
 * @param query - CSS media query string
 * @param callback - Function to call when match changes
 * @returns cleanup function
 */
export function createMediaQueryListener(
    query: string,
    callback: (matches: boolean) => void
): () => void {
    if (!isBrowser()) return () => { };

    const mediaQuery = window.matchMedia(query);
    callback(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => callback(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
}

/**
 * Create a breakpoint listener
 * @param breakpoint - Breakpoint key
 * @param callback - Function to call when breakpoint match changes
 * @returns cleanup function
 */
export function createBreakpointListener(
    breakpoint: BreakpointKey,
    callback: (matches: boolean) => void
): () => void {
    return createMediaQueryListener(
        `(min-width: ${BREAKPOINTS[breakpoint]}px)`,
        callback
    );
}
