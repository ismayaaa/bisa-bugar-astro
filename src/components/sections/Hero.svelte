<script lang="ts">
    // No script needed - pure presentational component
</script>

<!-- Mobile Hero (side-by-side layout) -->
<section id="home" class="hero-mobile">
    <div class="container hero-mobile-content">
        <!-- Left: Text -->
        <div class="hero-text">
            <span class="hero-badge">New Platform</span>
            <h1 class="hero-title">
                SOLUSI <br /> FITNESS <br />
                <span class="text-gradient">TERINTEGRASI</span>
            </h1>
            <p class="hero-description">
                Platform edukasi gym #1. Raih target tubuh idealmu dengan
                panduan profesional dan jadwal fleksibel.
            </p>
            <div class="hero-buttons">
                <a href="#program" class="btn-primary">MULAI SEKARANG</a>
                <a href="#membership" class="btn-secondary">LIHAT PROMO</a>
            </div>
        </div>

        <!-- Right: Image -->
        <div class="hero-image-container">
            <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
                alt="Gym interior dengan peralatan fitness modern"
                class="hero-image"
                loading="eager"
            />
            <div class="hero-image-overlay"></div>
            <!-- Status Badge -->
            <div class="hero-status">
                <span class="status-dot">
                    <span class="status-ping"></span>
                    <span class="status-core"></span>
                </span>
                <p class="status-text">Gym Open: 06:00 - 22:00</p>
            </div>
        </div>
    </div>
</section>

<!-- Desktop Hero (full-width background) -->
<section class="hero-desktop">
    <div class="hero-desktop-bg"></div>
    <div class="container hero-desktop-content">
        <div class="hero-desktop-text">
            <h1 class="hero-desktop-title">
                SOLUSI FITNESS <br />
                <span class="text-orange">TERINTEGRASI</span>
            </h1>
            <p class="hero-desktop-description">
                Raih target tubuh idealmu dengan panduan profesional, tutorial
                gerakan yang benar, dan akses ke komunitas bugar.
            </p>
            <div class="hero-desktop-buttons">
                <a href="#program" class="btn-cta">
                    <span>MULAI SEKARANG</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="btn-icon"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a href="#membership" class="btn-glass">LIHAT PROMO</a>
            </div>
        </div>
    </div>
</section>

<style>
    /* ===== Mobile Hero ===== */
    .hero-mobile {
        display: block;
        padding: 2rem 0;
    }

    @media (min-width: 1024px) {
        .hero-mobile {
            display: none;
        }
    }

    .hero-mobile-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media (min-width: 768px) {
        .hero-mobile-content {
            gap: 2rem;
        }
    }

    .hero-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (min-width: 768px) {
        .hero-text {
            gap: 1.5rem;
        }
    }

    .hero-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background: rgba(234, 88, 12, 0.1);
        color: var(--color-primary);
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border-radius: 9999px;
        width: fit-content;
    }

    :global(.dark-mode) .hero-badge {
        background: rgba(234, 88, 12, 0.2);
    }

    @media (min-width: 768px) {
        .hero-badge {
            font-size: 0.75rem;
        }
    }

    .hero-title {
        font-size: 1.875rem;
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -0.025em;
    }

    @media (min-width: 768px) {
        .hero-title {
            font-size: 3rem;
        }
    }

    .text-gradient {
        background: linear-gradient(
            135deg,
            var(--color-primary) 0%,
            #dc2626 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-description {
        font-size: 0.75rem;
        color: var(--color-text-tertiary);
        line-height: 1.6;
        max-width: 20rem;
    }

    @media (min-width: 768px) {
        .hero-description {
            font-size: 1rem;
        }
    }

    .hero-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding-top: 0.5rem;
    }

    @media (min-width: 640px) {
        .hero-buttons {
            flex-direction: row;
        }
    }

    .btn-primary {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background: var(--color-primary);
        color: white;
        font-size: 0.875rem;
        font-weight: 700;
        text-align: center;
        border-radius: 1rem;
        box-shadow: 0 10px 25px -5px rgba(234, 88, 12, 0.3);
        transition: all 0.15s;
    }

    @media (min-width: 768px) {
        .btn-primary {
            padding: 1rem 1.5rem;
            font-size: 1rem;
        }
    }

    .btn-primary:hover {
        background: var(--color-primary-hover);
        color: white;
    }

    .btn-secondary {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border: 2px solid var(--color-text-primary);
        color: var(--color-text-primary);
        font-size: 0.875rem;
        font-weight: 700;
        text-align: center;
        border-radius: 1rem;
        transition: all 0.15s;
    }

    @media (min-width: 768px) {
        .btn-secondary {
            padding: 1rem 1.5rem;
            font-size: 1rem;
        }
    }

    .btn-secondary:hover {
        background: var(--color-bg-secondary);
        color: var(--color-text-primary);
    }

    /* Hero Image */
    .hero-image-container {
        flex: 1;
        height: 16rem;
        border-radius: 2rem;
        overflow: hidden;
        position: relative;
        box-shadow: var(--shadow-2xl);
        transition: transform 0.5s;
    }

    @media (min-width: 768px) {
        .hero-image-container {
            height: 20rem;
        }
    }

    .hero-image-container:hover {
        transform: scale(1.02);
    }

    .hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .hero-image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    }

    .hero-status {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.75rem;
    }

    .status-dot {
        position: relative;
        width: 0.75rem;
        height: 0.75rem;
    }

    .status-ping {
        position: absolute;
        inset: 0;
        background: #22c55e;
        border-radius: 9999px;
        opacity: 0.75;
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    @keyframes ping {
        75%,
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    .status-core {
        position: absolute;
        inset: 0;
        background: #22c55e;
        border-radius: 9999px;
    }

    .status-text {
        color: white;
        font-size: 0.75rem;
        font-weight: 700;
    }

    /* ===== Desktop Hero ===== */
    .hero-desktop {
        display: none;
        position: relative;
        height: 37.5rem;
    }

    @media (min-width: 1024px) {
        .hero-desktop {
            display: flex;
            align-items: center;
        }
    }

    .hero-desktop-bg {
        position: absolute;
        inset: 0;
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920");
        background-size: cover;
        background-position: center;
    }

    .hero-desktop-content {
        position: relative;
        z-index: 1;
    }

    .hero-desktop-text {
        max-width: 48rem;
    }

    .hero-desktop-title {
        font-size: 3.75rem;
        font-weight: 800;
        line-height: 1.1;
        color: white;
        margin-bottom: 1.5rem;
    }

    .text-orange {
        color: #f97316;
    }

    .hero-desktop-description {
        font-size: 1.25rem;
        color: #d1d5db;
        margin-bottom: 2.5rem;
        max-width: 36rem;
    }

    .hero-desktop-buttons {
        display: flex;
        gap: 1rem;
    }

    .btn-cta {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2.5rem;
        background: var(--color-primary);
        color: white;
        font-size: 1.125rem;
        font-weight: 700;
        border-radius: 0.75rem;
        box-shadow: var(--shadow-xl);
        transition: all 0.15s;
    }

    .btn-cta:hover {
        background: var(--color-primary-hover);
        color: white;
    }

    .btn-icon {
        width: 1.25rem;
        height: 1.25rem;
    }

    .btn-glass {
        display: inline-flex;
        align-items: center;
        padding: 1rem 2.5rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 2px solid white;
        color: white;
        font-size: 1.125rem;
        font-weight: 700;
        border-radius: 0.75rem;
        transition: all 0.15s;
    }

    .btn-glass:hover {
        background: rgba(255, 255, 255, 0.2);
        color: white;
    }
</style>
