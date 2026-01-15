<script lang="ts">
    import { bookingModalOpen } from "../../lib/stores";

    function openBooking() {
        bookingModalOpen.open();
    }
</script>

<!-- Mobile Quick Booking -->
<section class="quick-booking-mobile">
    <div class="container">
        <!-- Big Booking Button -->
        <button class="booking-button" onclick={openBooking}>
            <div class="booking-button-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <span>BOOKING MUDAH SEKARANG</span>
        </button>

        <!-- Info Grid -->
        <div class="info-grid">
            <!-- Jadwal Kelas -->
            <div class="info-card">
                <div class="info-number">16</div>
                <h3 class="info-title">Jadwal Kelas</h3>
                <p class="info-subtitle">Kelas Aktif Hari Ini</p>
            </div>

            <!-- Personal Trainer -->
            <div class="info-card">
                <div class="info-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <h3 class="info-title">Personal Trainer</h3>
                <p class="info-subtitle">Pilih Coach Favorit</p>
            </div>
        </div>
    </div>
</section>

<!-- Desktop Quick Booking -->
<section class="quick-booking-desktop">
    <div class="container">
        <div class="booking-card">
            <div class="booking-info">
                <div class="booking-info-icon booking-info-icon-orange">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <div>
                    <h3 class="booking-info-title">Jadwal Kelas</h3>
                    <p class="booking-info-subtitle">16 Kelas Aktif Hari Ini</p>
                </div>
            </div>

            <div class="booking-divider"></div>

            <div class="booking-info">
                <div class="booking-info-icon booking-info-icon-blue">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
                        />
                    </svg>
                </div>
                <div>
                    <h3 class="booking-info-title">Personal Trainer</h3>
                    <p class="booking-info-subtitle">
                        Pilih pelatih & atur sesi
                    </p>
                </div>
            </div>

            <button class="booking-card-button" onclick={openBooking}>
                BOOKING MUDAH SEKARANG
            </button>
        </div>
    </div>
</section>

<style>
    /* ===== Mobile Quick Booking ===== */
    .quick-booking-mobile {
        display: block;
        padding: 1.5rem 0;
    }

    @media (min-width: 1024px) {
        .quick-booking-mobile {
            display: none;
        }
    }

    .booking-button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 1.25rem;
        background: var(--color-text-primary);
        color: var(--color-text-inverse);
        font-size: 1.125rem;
        font-weight: 700;
        border-radius: 1.5rem;
        box-shadow: var(--shadow-xl);
        transition: all 0.15s;
        margin-bottom: 1rem;
    }

    :global(.dark-mode) .booking-button {
        background: white;
        color: #0f172a;
    }

    @media (min-width: 768px) {
        .booking-button {
            padding: 1.5rem;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
        }
    }

    .booking-button:hover {
        transform: scale(0.99);
    }

    .booking-button:active {
        transform: scale(0.98);
    }

    .booking-button-icon {
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s;
    }

    .booking-button:hover .booking-button-icon {
        background: rgba(255, 255, 255, 0.3);
    }

    .booking-button-icon svg {
        width: 1.25rem;
        height: 1.25rem;
        color: #fb923c;
    }

    :global(.dark-mode) .booking-button-icon svg {
        color: var(--color-primary);
    }

    /* Info Grid */
    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    @media (min-width: 768px) {
        .info-grid {
            gap: 1.5rem;
        }
    }

    .info-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1.5rem;
        background: var(--color-surface);
        border: 1px solid var(--color-border-light);
        border-radius: 2rem;
        height: 10rem;
        box-shadow: var(--shadow-sm);
        transition: all 0.15s;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .info-card {
            padding: 2rem;
            height: 12rem;
        }
    }

    .info-card:hover {
        box-shadow: var(--shadow-md);
    }

    .info-number {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--color-primary);
        margin-bottom: 0.5rem;
        transition: transform 0.15s;
    }

    @media (min-width: 768px) {
        .info-number {
            font-size: 3rem;
        }
    }

    .info-card:hover .info-number {
        transform: scale(1.1);
    }

    .info-icon {
        width: 3.5rem;
        height: 3.5rem;
        background: #dbeafe;
        color: #2563eb;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.75rem;
        transition: transform 0.15s;
    }

    .info-card:hover .info-icon {
        transform: rotate(6deg);
    }

    .info-icon svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .info-title {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    @media (min-width: 768px) {
        .info-title {
            font-size: 1.125rem;
        }
    }

    .info-subtitle {
        font-size: 0.75rem;
        color: var(--color-text-tertiary);
    }

    @media (min-width: 768px) {
        .info-subtitle {
            font-size: 0.875rem;
        }
    }

    /* ===== Desktop Quick Booking ===== */
    .quick-booking-desktop {
        display: none;
        position: relative;
        z-index: 10;
        margin-top: -3rem;
    }

    @media (min-width: 1024px) {
        .quick-booking-desktop {
            display: block;
        }
    }

    .booking-card {
        display: grid;
        grid-template-columns: 1fr auto 1fr auto;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
        background: var(--color-surface);
        border-radius: 1.5rem;
        box-shadow: var(--shadow-2xl);
        border: 1px solid var(--color-border-light);
    }

    .booking-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .booking-info-icon {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .booking-info-icon-orange {
        background: #fed7aa;
        color: var(--color-primary);
    }

    .booking-info-icon-blue {
        background: #dbeafe;
        color: #2563eb;
    }

    .booking-info-icon svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .booking-info-title {
        font-size: 1.125rem;
        font-weight: 700;
    }

    .booking-info-subtitle {
        font-size: 0.875rem;
        color: var(--color-text-tertiary);
    }

    .booking-divider {
        width: 1px;
        height: 3rem;
        background: var(--color-border-light);
    }

    .booking-card-button {
        padding: 1rem 2rem;
        background: var(--color-primary);
        color: white;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 0.75rem;
        box-shadow: var(--shadow-primary);
        transition: all 0.15s;
        white-space: nowrap;
    }

    .booking-card-button:hover {
        background: var(--color-primary-hover);
    }
</style>
