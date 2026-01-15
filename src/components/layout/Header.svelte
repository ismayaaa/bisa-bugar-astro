<script lang="ts">
    import ThemeToggle from "../ui/ThemeToggle.svelte";
    import { mobileMenuOpen } from "../../lib/stores";

    let menuOpen = $state(false);

    mobileMenuOpen.subscribe((open) => {
        menuOpen = open;
    });

    function toggleMenu() {
        menuOpen = !menuOpen;
        mobileMenuOpen.set(menuOpen);
    }

    function closeMenu() {
        menuOpen = false;
        mobileMenuOpen.set(false);
    }

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#program", label: "Program" },
        { href: "#jadwal", label: "Jadwal" },
        { href: "#tutorial", label: "Tutorial" },
        { href: "#artikel", label: "Artikel" },
    ];
</script>

<header class="header">
    <nav class="nav container" aria-label="Main navigation">
        <!-- Logo -->
        <a href="#home" class="logo" aria-label="Bisa Bugar - Home">
            <div class="logo-icon">BB</div>
            <span class="logo-text">BisaBugar</span>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="nav-links">
            {#each navLinks as link}
                <a href={link.href} class="nav-link">{link.label}</a>
            {/each}
        </div>

        <!-- Actions -->
        <div class="nav-actions">
            <!-- Search (Desktop) -->
            <div class="search-bar hide-mobile-lg">
                <svg
                    class="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clip-rule="evenodd"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Cari jadwal/tutorial..."
                    class="search-input"
                    aria-label="Cari jadwal atau tutorial"
                />
            </div>

            <!-- Compact Search (Mobile/Tablet) -->
            <div class="search-compact hide-desktop-lg">
                <svg
                    class="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clip-rule="evenodd"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Cari..."
                    class="search-input-compact"
                    aria-label="Cari"
                />
            </div>

            <!-- Theme Toggle -->
            <ThemeToggle />

            <!-- Auth Buttons (Desktop) -->
            <div class="auth-buttons hide-mobile">
                <button class="btn-login">LOGIN</button>
                <button class="btn-register">DAFTAR</button>
            </div>

            <!-- Login Button (Mobile) -->
            <button class="btn-login-mobile hide-desktop">LOGIN</button>

            <!-- Hamburger Menu (Tablet) -->
            <button
                class="hamburger hide-desktop"
                onclick={toggleMenu}
                aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={menuOpen}
            >
                {#if menuOpen}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd"
                        />
                    </svg>
                {/if}
            </button>
        </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    {#if menuOpen}
        <div class="mobile-menu">
            <div class="mobile-menu-links">
                {#each navLinks as link}
                    <a
                        href={link.href}
                        class="mobile-menu-link"
                        onclick={closeMenu}
                    >
                        {link.label}
                    </a>
                {/each}
            </div>
            <div class="mobile-menu-auth">
                <button class="btn-login-outline">LOGIN</button>
                <button class="btn-register-mobile">DAFTAR</button>
            </div>
        </div>
    {/if}
</header>

<style>
    .header {
        position: sticky;
        top: 0;
        z-index: var(--z-sticky);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--color-border-light);
        box-shadow: var(--shadow-sm);
    }

    :global(.dark-mode) .header {
        background: rgba(15, 23, 42, 0.95);
        border-bottom-color: var(--color-border);
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    /* Logo */
    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .logo-icon {
        width: 2.5rem;
        height: 2.5rem;
        background: var(--color-primary);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 900;
        font-size: 0.875rem;
        box-shadow: 0 4px 12px -2px rgba(234, 88, 12, 0.3);
        transform: rotate(-2deg);
        transition: transform 0.2s;
    }

    .logo:hover .logo-icon {
        transform: rotate(0);
    }

    .logo-text {
        font-size: 1.25rem;
        font-weight: 800;
        color: var(--color-primary);
    }

    /* Desktop Nav Links */
    .nav-links {
        display: none;
        gap: 2rem;
    }

    @media (min-width: 1024px) {
        .nav-links {
            display: flex;
        }
    }

    .nav-link {
        font-weight: 600;
        color: var(--color-text-secondary);
        transition: color 0.15s;
        position: relative;
    }

    .nav-link:hover {
        color: var(--color-primary);
    }

    .nav-link::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-primary);
        transition: width 0.2s;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    /* Actions */
    .nav-actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    /* Search Bar (Desktop) */
    .search-bar {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--color-bg-secondary);
        border-radius: 9999px;
        padding: 0.5rem 1rem;
    }

    .search-icon {
        width: 1rem;
        height: 1rem;
        color: var(--color-text-muted);
        flex-shrink: 0;
    }

    .search-input {
        width: 12rem;
        font-size: 0.875rem;
        color: var(--color-text-primary);
    }

    .search-input::placeholder {
        color: var(--color-text-muted);
    }

    /* Compact Search (Mobile) */
    .search-compact {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--color-bg-secondary);
        border-radius: 9999px;
        padding: 0.5rem 0.75rem;
    }

    .search-input-compact {
        width: 5rem;
        font-size: 0.875rem;
        color: var(--color-text-primary);
    }

    /* Auth Buttons */
    .auth-buttons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .btn-login {
        padding: 0.5rem 1rem;
        font-weight: 700;
        color: var(--color-text-secondary);
        transition: color 0.15s;
    }

    .btn-login:hover {
        color: var(--color-primary);
    }

    .btn-register {
        padding: 0.625rem 1.5rem;
        background: var(--color-primary);
        color: white;
        border-radius: 9999px;
        font-weight: 700;
        box-shadow: var(--shadow-primary);
        transition: all 0.15s;
    }

    .btn-register:hover {
        background: var(--color-primary-hover);
        transform: translateY(-1px);
    }

    .btn-login-mobile {
        padding: 0.625rem 1.25rem;
        background: var(--color-text-primary);
        color: var(--color-text-inverse);
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 700;
        box-shadow: var(--shadow-md);
    }

    :global(.dark-mode) .btn-login-mobile {
        background: white;
        color: #0f172a;
    }

    /* Hamburger */
    .hamburger {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-secondary);
        transition: color 0.15s;
    }

    .hamburger:hover {
        color: var(--color-primary);
    }

    .hamburger svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    /* Mobile Menu */
    .mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--color-surface);
        border-top: 1px solid var(--color-border-light);
        box-shadow: var(--shadow-xl);
        padding: 1.5rem;
        animation: slideDown 0.2s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-0.5rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .mobile-menu-links {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .mobile-menu-link {
        padding: 0.75rem 0;
        font-weight: 600;
        color: var(--color-text-secondary);
        border-bottom: 1px solid var(--color-border-light);
        transition: color 0.15s;
    }

    .mobile-menu-link:hover {
        color: var(--color-primary);
    }

    .mobile-menu-auth {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1.5rem;
    }

    .btn-login-outline {
        width: 100%;
        padding: 0.75rem;
        font-weight: 700;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 0.75rem;
        transition: all 0.15s;
    }

    .btn-login-outline:hover {
        background: var(--color-primary);
        color: white;
    }

    .btn-register-mobile {
        width: 100%;
        padding: 0.75rem;
        background: var(--color-primary);
        color: white;
        font-weight: 700;
        border-radius: 0.75rem;
        box-shadow: var(--shadow-primary);
    }

    /* Responsive display utilities */
    .hide-mobile {
        display: none;
    }

    .hide-desktop {
        display: flex;
    }

    .hide-mobile-lg {
        display: none;
    }

    .hide-desktop-lg {
        display: flex;
    }

    @media (min-width: 640px) {
        .hide-mobile {
            display: flex;
        }

        .hide-desktop {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        .hamburger {
            display: none;
        }

        .btn-login-mobile {
            display: none;
        }
    }

    @media (min-width: 1280px) {
        .hide-mobile-lg {
            display: flex;
        }

        .hide-desktop-lg {
            display: none;
        }
    }
</style>
