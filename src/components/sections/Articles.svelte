<script lang="ts">
    const articles = [
        {
            id: "nutrisi",
            category: "Nutrisi",
            title: "Tips Nutrisi Pemula",
            excerpt:
                "Pentingnya makronutrisi (Karbohidrat, Protein, Lemak) untuk pembentukan otot maksimal...",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: "recovery",
            category: "Recovery",
            title: "Manfaat Tidur Cukup",
            excerpt:
                "Recovery adalah kunci pertumbuhan otot. Tidur 7-8 jam per hari sangat krusial bagi atlet...",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: "suplemen",
            category: "Suplemen",
            title: "Suplemen: Perlukah?",
            excerpt:
                "Panduan memilih suplemen yang tepat untuk mendukung progres latihan Anda di gym...",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
        },
    ];
</script>

<section id="artikel" class="articles">
    <div class="container">
        <div class="section-header">
            <div>
                <h2 class="section-title">Artikel Kesehatan</h2>
                <p class="section-subtitle">
                    Edukasi nutrisi dan gaya hidup sehat.
                </p>
            </div>
            <button class="btn-blog">Baca Blog Kami</button>
        </div>

        <div class="articles-grid">
            {#each articles as article}
                <article class="article-card">
                    <div class="article-image-container">
                        <img
                            src={article.image}
                            alt={article.title}
                            class="article-image"
                            loading="lazy"
                        />
                        <span class="article-category">{article.category}</span>
                    </div>
                    <div class="article-content">
                        <h3 class="article-title">{article.title}</h3>
                        <p class="article-excerpt">{article.excerpt}</p>
                        <button class="article-link">
                            BACA SELENGKAPNYA →
                        </button>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .articles {
        display: none;
        padding: 6rem 0;
    }

    @media (min-width: 1024px) {
        .articles {
            display: block;
        }
    }

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }

    .section-subtitle {
        color: var(--color-text-tertiary);
    }

    .btn-blog {
        padding: 0.625rem 1.5rem;
        background: #111827;
        color: white;
        border: 1px solid #111827;
        border-radius: 9999px;
        font-weight: 700;
        transition: all 0.15s;
    }

    .btn-blog:hover {
        background: #1f2937;
        border-color: #1f2937;
    }

    .articles-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .article-card {
        cursor: pointer;
    }

    .article-image-container {
        position: relative;
        height: 16rem;
        border-radius: 1.5rem;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }

    .article-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
    }

    .article-card:hover .article-image {
        transform: scale(1.1);
    }

    .article-category {
        position: absolute;
        top: 1rem;
        left: 1rem;
        padding: 0.25rem 0.75rem;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(4px);
        font-size: 0.75rem;
        font-weight: 700;
        color: #111827;
        border-radius: 9999px;
    }

    .article-content {
        padding: 0 0.5rem;
    }

    .article-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        transition: color 0.15s;
    }

    .article-card:hover .article-title {
        color: var(--color-primary);
    }

    .article-excerpt {
        font-size: 0.875rem;
        color: var(--color-text-tertiary);
        line-height: 1.6;
    }

    .article-link {
        margin-top: 1rem;
        color: var(--color-primary);
        font-weight: 700;
    }
</style>
