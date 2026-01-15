<script lang="ts">
    const programs = [
        {
            id: "pemula",
            type: "PROGRAM",
            badge: "Fundamental",
            badgeColor: "orange",
            title: "Full Body 30 Hari",
            titleDesktop: "Program Pemula",
            description:
                "Latihan dasar pondasi otot untuk pemula yang ingin hasil maksimal.",
            descriptionDesktop:
                "Panduan dasar untuk Anda yang baru memulai perjalanan gym.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
            buttonText: "BACA PANDUAN",
            buttonTextDesktop: "MULAI PROGRAM",
        },
        {
            id: "tutorial",
            type: "VIDEO",
            badge: "Tutorial",
            badgeColor: "primary",
            title: "Tutorial Squat Benar",
            description:
                "Hindari cidera lutut dengan teknik squat yang sempurna.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format",
            buttonText: "TONTON VIDEO",
            isVideo: true,
        },
        {
            id: "nutrisi",
            type: "NUTRISI",
            badge: "Nutrisi",
            badgeColor: "green",
            title: "Pre-Workout Food",
            description:
                "Rekomendasi makanan penambah energi sebelum latihan berat.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format",
            buttonText: "BACA ARTIKEL",
        },
        {
            id: "lanjutan",
            type: "PROGRAM",
            badge: "Advanced",
            badgeColor: "blue",
            title: "Program Lanjutan",
            titleDesktop: "Program Lanjutan",
            description:
                "Tingkatkan performa dengan latihan intensitas tinggi.",
            descriptionDesktop:
                "Tingkatkan performa dengan latihan intensitas tinggi.",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600",
            buttonText: "MULAI PROGRAM",
            buttonTextDesktop: "MULAI PROGRAM",
        },
    ];
</script>

<!-- Mobile: Horizontal Scroll Programs -->
<section id="program" class="programs-mobile">
    <div class="container">
        <div class="section-header-mobile">
            <div class="section-indicator"></div>
            <h2 class="section-title-mobile">Program & Tips</h2>
            <span class="scroll-hint">Geser &gt;</span>
        </div>

        <div class="programs-scroll">
            {#each programs.slice(0, 3) as program}
                <article class="program-card-mobile">
                    <div
                        class="program-image-container"
                        class:has-play={program.isVideo}
                    >
                        <img
                            src={program.image}
                            alt={program.title}
                            class="program-image"
                            loading="lazy"
                        />
                        <div class="program-overlay"></div>
                        <span
                            class="program-badge"
                            class:badge-program={program.type === "PROGRAM"}
                            class:badge-video={program.type === "VIDEO"}
                            class:badge-nutrisi={program.type === "NUTRISI"}
                        >
                            {program.type}
                        </span>
                        {#if program.isVideo}
                            <div class="play-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        {/if}
                    </div>
                    <div class="program-content">
                        <h3 class="program-title">{program.title}</h3>
                        <p class="program-description">{program.description}</p>
                        <button
                            class="program-button"
                            class:button-primary={program.isVideo}
                        >
                            {program.buttonText}
                        </button>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- Desktop: Grid Programs -->
<section class="programs-desktop">
    <div class="container">
        <div class="section-header-desktop">
            <div>
                <h2 class="section-title-desktop">Program Latihan</h2>
                <p class="section-subtitle-desktop">
                    Dibuat khusus untuk berbagai tingkat pengalaman.
                </p>
            </div>
            <a href="#" class="view-all-link">
                <span>Lihat Semua Program</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </div>

        <div class="programs-grid">
            {#each [programs[0], programs[3]] as program}
                <article class="program-card-desktop">
                    <img
                        src={program.image}
                        alt={program.titleDesktop || program.title}
                        class="program-image-desktop"
                        loading="lazy"
                    />
                    <div class="program-content-desktop">
                        <span
                            class="program-badge-desktop"
                            class:badge-orange={program.badgeColor === "orange"}
                            class:badge-blue={program.badgeColor === "blue"}
                        >
                            {program.badge}
                        </span>
                        <h3 class="program-title-desktop">
                            {program.titleDesktop || program.title}
                        </h3>
                        <p class="program-description-desktop">
                            {program.descriptionDesktop || program.description}
                        </p>
                        <button class="program-button-desktop">
                            {program.buttonTextDesktop || program.buttonText}
                        </button>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    /* ===== Mobile Programs ===== */
    .programs-mobile {
        display: block;
        padding: 2.5rem 0;
    }

    @media (min-width: 1024px) {
        .programs-mobile {
            display: none;
        }
    }

    .section-header-mobile {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        padding: 0 0.25rem;
    }

    .section-indicator {
        width: 0.25rem;
        height: 1.5rem;
        background: var(--color-primary);
        border-radius: 9999px;
    }

    .section-title-mobile {
        flex: 1;
        font-size: 1.25rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: -0.025em;
    }

    @media (min-width: 768px) {
        .section-title-mobile {
            font-size: 1.5rem;
        }
    }

    .scroll-hint {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--color-primary);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .programs-scroll {
        display: flex;
        gap: 1.25rem;
        overflow-x: auto;
        padding-bottom: 1.5rem;
        scroll-snap-type: x mandatory;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .programs-scroll::-webkit-scrollbar {
        display: none;
    }

    .program-card-mobile {
        flex-shrink: 0;
        width: 18rem;
        background: var(--color-surface);
        border: 1px solid var(--color-border-light);
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: var(--shadow-lg);
        scroll-snap-align: center;
        transition: all 0.3s;
    }

    @media (min-width: 768px) {
        .program-card-mobile {
            width: 20rem;
        }
    }

    .program-card-mobile:hover {
        box-shadow: var(--shadow-xl);
    }

    .program-image-container {
        position: relative;
        height: 10rem;
        overflow: hidden;
    }

    @media (min-width: 768px) {
        .program-image-container {
            height: 12rem;
        }
    }

    .program-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.7s;
    }

    .program-card-mobile:hover .program-image {
        transform: scale(1.1);
    }

    .program-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.2);
        transition: background 0.3s;
    }

    .program-card-mobile:hover .program-overlay {
        background: rgba(0, 0, 0, 0.1);
    }

    .has-play .program-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    .program-badge {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        padding: 0.375rem 0.75rem;
        font-size: 0.625rem;
        font-weight: 700;
        border-radius: 9999px;
        box-shadow: var(--shadow-sm);
    }

    .badge-program {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(4px);
        color: var(--color-text-primary);
    }

    .badge-video {
        background: var(--color-primary);
        color: white;
    }

    .badge-nutrisi {
        background: #16a34a;
        color: white;
    }

    .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3rem;
        height: 3rem;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .play-button svg {
        width: 1rem;
        height: 1rem;
        color: white;
        margin-left: 0.125rem;
    }

    .program-content {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .program-title {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.3;
    }

    .program-description {
        font-size: 0.875rem;
        color: var(--color-text-tertiary);
        line-height: 1.6;
    }

    .program-button {
        margin-top: 0.75rem;
        padding: 0.75rem;
        background: var(--color-bg-secondary);
        color: var(--color-text-primary);
        font-size: 0.75rem;
        font-weight: 700;
        border-radius: 0.75rem;
        transition: all 0.15s;
    }

    .program-button:hover {
        background: var(--color-primary);
        color: white;
    }

    .button-primary {
        background: var(--color-primary);
        color: white;
    }

    .button-primary:hover {
        background: var(--color-primary-hover);
    }

    /* ===== Desktop Programs ===== */
    .programs-desktop {
        display: none;
        padding: 6rem 0;
    }

    @media (min-width: 1024px) {
        .programs-desktop {
            display: block;
        }
    }

    .section-header-desktop {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 3rem;
    }

    .section-title-desktop {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }

    .section-subtitle-desktop {
        color: var(--color-text-tertiary);
    }

    .view-all-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-primary);
        font-weight: 700;
    }

    .view-all-link svg {
        width: 0.875rem;
        height: 0.875rem;
    }

    .programs-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
    }

    .program-card-desktop {
        display: flex;
        height: 16rem;
        background: var(--color-surface);
        border: 1px solid var(--color-border-light);
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: var(--shadow-xl);
        transition: all 0.3s;
    }

    .program-card-desktop:hover {
        transform: translateY(-8px);
        box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .program-image-desktop {
        width: 50%;
        object-fit: cover;
    }

    .program-content-desktop {
        width: 50%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .program-badge-desktop {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0.5rem;
    }

    .badge-orange {
        color: var(--color-primary);
    }

    .badge-blue {
        color: #2563eb;
    }

    .program-title-desktop {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }

    .program-description-desktop {
        font-size: 0.875rem;
        color: var(--color-text-tertiary);
        margin-bottom: 1.5rem;
    }

    .program-button-desktop {
        padding: 0.625rem 1rem;
        background: var(--color-text-primary);
        color: var(--color-text-inverse);
        font-weight: 700;
        border-radius: 0.5rem;
        transition: all 0.15s;
        width: fit-content;
    }

    .program-button-desktop:hover {
        background: #000;
    }
</style>
