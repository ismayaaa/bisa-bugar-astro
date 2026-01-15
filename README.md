<<<<<<< HEAD
# bisa-bugar-astro
=======
# Bisa Bugar - Astro + Svelte

> Platform Edukasi Gym & Fitness Terintegrasi

Website prototype UI/UX untuk platform edukasi gym dan fitness. Dibangun menggunakan **Astro** dengan **Svelte** untuk komponen interaktif.

## 🚀 Menjalankan Proyek

### Prerequisites

- Node.js 18+ (disarankan v20+)
- npm atau pnpm

### Instalasi

```bash
# Masuk ke direktori proyek
cd bisa-bugar-astro

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka browser dan akses: **http://localhost:4321**

### Build untuk Produksi

```bash
npm run build
npm run preview
```

## 📁 Struktur Proyek

```
bisa-bugar-astro/
├── public/
│   └── favicon.svg           # Favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.svelte    # Navigasi responsif
│   │   │   └── Footer.svelte    # Footer responsif
│   │   ├── sections/
│   │   │   ├── Hero.svelte          # Hero section
│   │   │   ├── QuickBooking.svelte  # Quick booking cards
│   │   │   ├── Programs.svelte      # Program latihan
│   │   │   ├── Tutorials.svelte     # Tutorial gerakan
│   │   │   ├── Schedule.svelte      # Jadwal kelas
│   │   │   ├── MembershipPromo.svelte # Promo membership
│   │   │   └── Articles.svelte      # Artikel kesehatan
│   │   └── ui/
│   │       ├── BookingModal.svelte  # Modal booking PT
│   │       ├── SuccessToast.svelte  # Toast notification
│   │       └── ThemeToggle.svelte   # Dark mode toggle
│   ├── lib/
│   │   ├── breakpoints.ts    # Utilitas responsive
│   │   └── stores.ts         # Svelte stores
│   ├── pages/
│   │   └── index.astro       # Halaman utama
│   └── styles/
│       ├── global.css        # Global styles
│       └── tokens.css        # CSS custom properties
├── astro.config.mjs
├── package.json
├── svelte.config.js
└── tsconfig.json
```

## 🎨 Fitur Responsive

Website ini memiliki **dua tampilan yang berbeda** yang digabungkan dalam satu codebase:

### Mobile View (< 1024px)
- Hero side-by-side (teks kiri, gambar kanan)
- Navigasi compact dengan search bar mini
- Horizontal scroll cards untuk program/tutorial
- Bottom-sheet modal untuk booking
- Footer minimal

### Desktop View (≥ 1024px)
- Hero full-width dengan background image
- Navigasi lengkap dengan menu dan search bar
- Grid layout untuk program, tutorial, artikel
- Tab-based schedule view
- Membership pricing cards
- Modal centered dengan backdrop
- Footer 4-kolom

### Implementasi Responsive

Pendekatan yang digunakan:

1. **CSS Media Queries** (Primary)
   - Layout switching menggunakan `display: none/block`
   - Flexbox/Grid adjustments
   - Font size scaling

2. **Conditional Rendering** (When needed)
   - Komponen Hero memiliki dua versi yang terpisah
   - Mobile menu menggunakan Svelte state

3. **Shared Components**
   - Komponen UI seperti modal dan toast digunakan bersama
   - Svelte stores untuk state management

## ♿ Aksesibilitas

- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Skip Link**: Link untuk skip ke konten utama
- **Form Labels**: Semua input memiliki label yang sesuai
- **ARIA Attributes**: Modal dialog, tablist, live regions
- **Keyboard Navigation**: Focus states untuk semua elemen interaktif
- **Color Contrast**: Warna memenuhi standar WCAG

## 🌙 Dark Mode

Website mendukung dark mode dengan:

- Toggle button di header
- Preferensi tersimpan di localStorage
- Mengikuti preferensi sistem (`prefers-color-scheme`)
- CSS custom properties untuk easy theming

## 🧩 Komponen Interaktif

### Booking Modal
- Form untuk memilih personal trainer
- Validasi sederhana
- Animasi slide-up (mobile) / scale-in (desktop)
- Close on backdrop click atau Escape key

### Toast Notification
- Muncul setelah booking berhasil
- Auto-dismiss setelah 3 detik
- Animasi slide-down

### Theme Toggle
- Switch antara light dan dark mode
- Ikon sun/moon yang berubah
- Persisted ke localStorage

### Schedule Tabs
- Tab selector untuk hari
- State tersimpan di Svelte store

## 📝 Assignment Context

Proyek ini dibuat sebagai prototype UI/UX untuk tugas mata kuliah Merancang Antarmuka Pengguna di BINUS University.

**Fitur yang diimplementasikan:**
- Program latihan (untuk pemula dan lanjutan)
- Tutorial gerakan (video tutorials)
- Jadwal kelas dengan tab hari
- Booking personal trainer
- Info membership dan promo
- Artikel kesehatan dan nutrisi

**Kriteria yang dipenuhi:**
- Usability: Navigasi jelas, CTA yang menonjol
- Accessibility: Semantic HTML, keyboard navigation
- Responsive: Mobile-first dengan desktop enhancement
- Prototype-ready: Siap untuk evaluasi dan user testing

## 👥 Tim

Kelompok 2 - Merancang Antarmuka Pengguna  
BINUS University © 2025

---

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
>>>>>>> 6faca38 (first commit)
