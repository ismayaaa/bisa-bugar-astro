<script lang="ts">
    const tutorials = [
        {
            id: "benchpress",
            title: "Cara Bench Press",
            focus: "Fokus: Dada & Triceps",
            image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: "squat",
            title: "Teknik Squat",
            focus: "Fokus: Kaki & Glutes",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: "deadlift",
            title: "Posisi Deadlift",
            focus: "Fokus: Punggung & Hamstring",
            image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=400&auto=format&fit=crop",
        },
        {
            id: "curl",
            title: "Dumbbell Curl",
            focus: "Fokus: Bicep",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400",
        },
    ];
</script>

<section id="tutorial" class="tutorials">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Tutorial Gerakan</h2>
            <p class="section-subtitle">
                Pelajari teknik yang benar untuk mencegah cedera.
            </p>
        </div>

        <div class="tutorials-grid">
            {#each tutorials as tutorial}
                <article class="tutorial-card">
                    <div class="tutorial-image-container">
                        <img
                            src={tutorial.image}
                            alt={tutorial.title}
                            class="tutorial-image"
                            loading="lazy"
                        />
                        <div class="tutorial-overlay">
                            <div class="play-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="tutorial-content">
                        <h4 class="tutorial-title">{tutorial.title}</h4>
                        <p class="tutorial-focus">{tutorial.focus}</p>
                    </div>
                </article>
            {/each}
        </div>

        <div class="tutorials-cta">
            <button class="btn-outline">LIHAT SEMUA TUTORIAL VIDEO</button>
        </div>
    </div>
</section>

<style>
    .tutorials {
        display: none;
        padding: 6rem 0;
        background: var(--color-bg-secondary);
    }

    @media (min-width: 1024px) {
        .tutorials {
            display: block;
        }
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-title {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .section-subtitle {
        color: var(--color-text-tertiary);
    }

    .tutorials-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
    }

    .tutorial-card {
        background: var(--color-surface);
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: var(--shadow-md);
        transition: all 0.3s;
        cursor: pointer;
    }

    .tutorial-card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
    }

    .tutorial-image-container {
        position: relative;
        height: 10rem;
        overflow: hidden;
    }

    .tutorial-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
    }

    .tutorial-card:hover .tutorial-image {
        transform: scale(1.1);
    }

    .tutorial-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tutorial-card:hover .tutorial-overlay {
        opacity: 1;
    }

    .play-icon {
        color: white;
    }

    .play-icon svg {
        width: 3rem;
        height: 3rem;
    }

    .tutorial-content {
        padding: 1rem;
    }

    .tutorial-title {
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .tutorial-focus {
        font-size: 0.75rem;
        color: var(--color-text-tertiary);
    }

    .tutorials-cta {
        text-align: center;
        margin-top: 3rem;
    }

    .btn-outline {
        padding: 0.75rem 2rem;
        border: 2px solid var(--color-primary);
        color: var(--color-primary);
        font-weight: 700;
        border-radius: 9999px;
        transition: all 0.15s;
    }

    .btn-outline:hover {
        background: var(--color-primary);
        color: white;
    }
</style>
