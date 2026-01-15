<script lang="ts">
    const quickLinks = [
        { href: "#home", label: "Beranda" },
        { href: "#program", label: "Program Latihan" },
        { href: "#jadwal", label: "Jadwal Kelas" },
        { href: "#membership", label: "Membership" },
    ];

    const legalLinks = [
        { href: "#", label: "Syarat & Ketentuan" },
        { href: "#", label: "Kebijakan Privasi" },
        { href: "#", label: "FAQ" },
    ];

    const socialLinks = [
        {
            href: "#",
            label: "Instagram",
            icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
        },
        {
            href: "#",
            label: "YouTube",
            icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
        },
        {
            href: "#",
            label: "TikTok",
            icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
        },
    ];
</script>

<footer class="footer">
    <div class="footer-content container">
        <!-- Desktop Footer -->
        <div class="footer-desktop">
            <!-- Brand Column -->
            <div class="footer-brand">
                <div class="logo">
                    <div class="logo-icon">BB</div>
                    <span class="logo-text">Bisa Bugar</span>
                </div>
                <p class="footer-description">
                    Edukasi gym & fitness masa kini. Membantu Anda mencapai
                    target kebugaran dengan cara yang benar dan terukur.
                </p>
                <div class="social-links">
                    {#each socialLinks as link}
                        <a
                            href={link.href}
                            class="social-link"
                            aria-label={link.label}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d={link.icon} />
                            </svg>
                        </a>
                    {/each}
                </div>
            </div>

            <!-- Quick Links Column -->
            <div class="footer-column">
                <h4 class="footer-column-title">Navigasi Cepat</h4>
                <ul class="footer-links">
                    {#each quickLinks as link}
                        <li><a href={link.href}>{link.label}</a></li>
                    {/each}
                </ul>
            </div>

            <!-- Legal Column -->
            <div class="footer-column">
                <h4 class="footer-column-title">Legal</h4>
                <ul class="footer-links">
                    {#each legalLinks as link}
                        <li><a href={link.href}>{link.label}</a></li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Mobile Footer -->
        <div class="footer-mobile">
            <div class="logo logo-mobile">
                <div class="logo-icon-small">BB</div>
                <span class="logo-text-small">BisaBugar App</span>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright">
            <p>
                Copyright © 2025 - Kelompok 2 Merancang Antarmuka Pengguna |
                BINUS University
            </p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: #111827;
        color: white;
        padding: 2rem 0;
    }

    @media (min-width: 768px) {
        .footer {
            padding: 5rem 0 2.5rem;
        }
    }

    .footer-content {
        display: flex;
        flex-direction: column;
    }

    /* Desktop Footer */
    .footer-desktop {
        display: none;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid #1f2937;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        .footer-desktop {
            display: grid;
        }
    }

    /* Brand */
    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .logo-icon {
        width: 2.5rem;
        height: 2.5rem;
        background: var(--color-primary);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.875rem;
    }

    .logo-text {
        font-size: 1.75rem;
        font-weight: 800;
    }

    .footer-description {
        color: #9ca3af;
        font-size: 1.125rem;
        line-height: 1.7;
        max-width: 24rem;
        margin-bottom: 2rem;
    }

    /* Social Links */
    .social-links {
        display: flex;
        gap: 1rem;
    }

    .social-link {
        width: 3rem;
        height: 3rem;
        background: #1f2937;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: all 0.15s;
    }

    .social-link:hover {
        background: var(--color-primary);
    }

    .social-link svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    /* Footer Columns */
    .footer-column-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    .footer-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer-links a {
        color: #9ca3af;
        transition: color 0.15s;
    }

    .footer-links a:hover {
        color: white;
    }

    /* Mobile Footer */
    .footer-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-bottom: 1rem;
    }

    @media (min-width: 768px) {
        .footer-mobile {
            display: none;
        }
    }

    .logo-mobile {
        margin-bottom: 0.5rem;
        opacity: 0.6;
    }

    .logo-icon-small {
        width: 1.5rem;
        height: 1.5rem;
        background: #374151;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.625rem;
        font-weight: 700;
    }

    .logo-text-small {
        font-size: 0.875rem;
        font-weight: 700;
        color: #6b7280;
    }

    /* Copyright */
    .footer-copyright {
        text-align: center;
        padding-top: 1rem;
    }

    .footer-copyright p {
        color: #6b7280;
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    @media (min-width: 768px) {
        .footer-copyright {
            padding-top: 0;
        }

        .footer-copyright p {
            font-size: 0.875rem;
            text-transform: none;
            letter-spacing: normal;
            font-weight: 400;
        }
    }
</style>
