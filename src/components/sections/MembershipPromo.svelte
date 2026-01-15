<script lang="ts">
    // No script needed - pure presentational component
</script>

<section id="membership" class="membership">
    <div class="container membership-content">
        <!-- Left: Promo Text -->
        <div class="promo-text">
            <h2 class="promo-title">
                Penawaran <br />Membership Khusus
            </h2>
            <p class="promo-description">
                Gabung menjadi member bulan ini dan dapatkan akses penuh ke
                seluruh fasilitas gym dan kelas tutorial eksklusif.
            </p>

            <div class="promo-badge">
                <p class="promo-discount">Diskon 20%</p>
                <p class="promo-validity">
                    Untuk Member Baru • Hingga 31 Januari 2025
                </p>
            </div>

            <button class="promo-cta">AMBIL PROMO SEKARANG</button>
        </div>

        <!-- Right: Pricing Cards -->
        <div class="pricing-grid">
            <!-- Monthly -->
            <div class="pricing-card pricing-card-light">
                <h3 class="pricing-tier">Bulanan</h3>
                <p class="pricing-price">250K</p>
                <ul class="pricing-features">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="check-icon check-green"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Akses Gym
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="check-icon check-green"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        3 Kelas/Minggu
                    </li>
                </ul>
            </div>

            <!-- Yearly -->
            <div class="pricing-card pricing-card-dark">
                <div class="pricing-popular">Terpopuler</div>
                <h3 class="pricing-tier">Tahunan</h3>
                <p class="pricing-price">2.4jt</p>
                <ul class="pricing-features">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="check-icon check-orange"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Akses 24/7
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="check-icon check-orange"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Free Merchandise
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<style>
    .membership {
        display: none;
        padding: 6rem 0;
        background: var(--color-primary);
        color: white;
    }

    @media (min-width: 1024px) {
        .membership {
            display: block;
        }
    }

    .membership-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    /* Promo Text */
    .promo-title {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }

    .promo-description {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .promo-badge {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .promo-discount {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .promo-validity {
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.7);
    }

    .promo-cta {
        padding: 1rem 2.5rem;
        background: white;
        color: var(--color-primary);
        font-size: 1.125rem;
        font-weight: 800;
        border-radius: 0.75rem;
        box-shadow: var(--shadow-xl);
        transition: all 0.15s;
    }

    .promo-cta:hover {
        transform: scale(1.05);
    }

    /* Pricing Grid */
    .pricing-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    .pricing-card {
        padding: 2rem;
        border-radius: 1.5rem;
        box-shadow: var(--shadow-xl);
        position: relative;
        overflow: hidden;
    }

    .pricing-card-light {
        background: white;
        color: #111827;
    }

    .pricing-card-light .pricing-tier {
        color: #111827;
    }

    .pricing-card-light .pricing-price {
        color: #111827;
    }

    .pricing-card-dark {
        background: #111827;
        color: white;
    }

    .pricing-popular {
        position: absolute;
        top: 0;
        right: 0;
        background: #f97316;
        color: white;
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 0.25rem 0.75rem;
        border-bottom-left-radius: 0.5rem;
    }

    .pricing-tier {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .pricing-price {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }

    .pricing-features {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .pricing-features li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
    }

    .pricing-card-light .pricing-features li {
        color: var(--color-text-tertiary);
    }

    .pricing-card-dark .pricing-features li {
        color: #9ca3af;
    }

    .check-icon {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
    }

    .check-green {
        color: #22c55e;
    }

    .check-orange {
        color: #f97316;
    }
</style>
