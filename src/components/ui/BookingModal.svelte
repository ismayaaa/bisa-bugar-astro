<script lang="ts">
  import { bookingModalOpen, toast } from '../../lib/stores';
  import { onMount } from 'svelte';

  let isOpen = $state(false);
  let name = $state('');
  let coach = $state('');
  let date = $state('');
  let time = $state('');

  bookingModalOpen.subscribe((open) => {
    isOpen = open;
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  function closeModal() {
    bookingModalOpen.close();
    // Reset form
    name = '';
    coach = '';
    date = '';
    time = '';
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    
    // Simple validation
    if (!coach) {
      toast.show('Silakan pilih coach terlebih dahulu', 'error');
      return;
    }

    closeModal();
    toast.show('Permintaan Booking Berhasil Dikirim!', 'success');
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div 
    class="modal-backdrop"
    onclick={handleBackdropClick}
  >
    <div 
      class="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <!-- Mobile handle bar -->
      <div class="modal-handle"></div>

      <button 
        class="modal-close hide-mobile"
        onclick={closeModal}
        aria-label="Tutup modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
      </button>

      <h3 id="booking-title" class="modal-title">Booking Personal Trainer</h3>
      <p class="modal-subtitle">Atur jadwal sesi privatemu sekarang.</p>

      <form class="modal-form" onsubmit={handleSubmit}>
        <!-- Name Input (Mobile only) -->
        <div class="form-group hide-desktop">
          <label for="booking-name" class="sr-only">Nama Lengkap</label>
          <div class="input-wrapper">
            <input 
              type="text" 
              id="booking-name"
              bind:value={name}
              placeholder="Nama Lengkap"
            />
          </div>
        </div>

        <!-- Coach Selector -->
        <div class="form-group">
          <label for="booking-coach">Pilih Pelatih</label>
          <div class="input-wrapper select-wrapper">
            <select id="booking-coach" bind:value={coach}>
              <option value="">Pilih Coach Favorit</option>
              <option value="aniq">Coach Aniq (Strength Specialist)</option>
              <option value="ismaya">Coach Ismaya (Yoga Specialist)</option>
              <option value="leon">Coach Leon (HIIT Expert)</option>
            </select>
            <svg class="select-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <!-- Date & Time (Desktop) -->
        <div class="form-row hide-mobile">
          <div class="form-group">
            <label for="booking-date">Tanggal</label>
            <div class="input-wrapper">
              <input 
                type="date" 
                id="booking-date"
                bind:value={date}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="booking-time">Waktu</label>
            <div class="input-wrapper">
              <input 
                type="time" 
                id="booking-time"
                bind:value={time}
              />
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="form-actions">
          <button 
            type="button" 
            class="btn-cancel"
            onclick={closeModal}
          >
            BATAL
          </button>
          <button type="submit" class="btn-submit">
            KONFIRMASI
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: var(--z-modal-backdrop);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal {
    width: 100%;
    background: var(--color-surface);
    border-radius: 2.5rem 2.5rem 0 0;
    padding: 2rem;
    position: relative;
    animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    max-height: 90vh;
    overflow-y: auto;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .modal-handle {
    width: 3.5rem;
    height: 0.375rem;
    background: var(--color-border);
    border-radius: 9999px;
    margin: 0 auto 2rem;
  }

  .modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
    transition: color 0.15s;
  }

  .modal-close:hover {
    color: var(--color-text-primary);
  }

  .modal-close svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 0.25rem;
  }

  .modal-subtitle {
    color: var(--color-text-tertiary);
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group label {
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .input-wrapper {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 0.5rem;
  }

  .input-wrapper input,
  .input-wrapper select {
    width: 100%;
    padding: 0.75rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .input-wrapper input::placeholder {
    color: var(--color-text-muted);
  }

  .select-wrapper {
    position: relative;
  }

  .select-wrapper select {
    appearance: none;
    padding-right: 2.5rem;
  }

  .select-icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-text-muted);
    pointer-events: none;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .form-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .btn-cancel {
    padding: 1rem;
    font-weight: 700;
    color: var(--color-text-tertiary);
    border-radius: 1rem;
    transition: background 0.15s;
  }

  .btn-cancel:hover {
    background: var(--color-bg-secondary);
  }

  .btn-submit {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    background: var(--color-primary);
    color: white;
    border-radius: 1rem;
    box-shadow: 0 10px 25px -5px rgba(234, 88, 12, 0.3);
    transition: background 0.15s;
  }

  .btn-submit:hover {
    background: var(--color-primary-hover);
  }

  /* Desktop Styles */
  @media (min-width: 768px) {
    .modal-backdrop {
      align-items: center;
    }

    .modal {
      max-width: 32rem;
      border-radius: 2rem;
      padding: 2.5rem;
      animation: scaleIn 0.3s ease-out;
    }

    @keyframes scaleIn {
      from {
        transform: scale(0.95);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .modal-handle {
      display: none;
    }

    .modal-title {
      font-size: 1.75rem;
    }

    .modal-subtitle {
      margin-bottom: 2rem;
    }

    .form-actions {
      grid-template-columns: 1fr;
    }

    .btn-cancel {
      display: none;
    }

    .btn-submit {
      font-size: 1.125rem;
      padding: 1.25rem;
    }
  }

  /* Responsive display utilities */
  .hide-mobile {
    display: none;
  }

  .hide-desktop {
    display: block;
  }

  @media (min-width: 768px) {
    .hide-mobile {
      display: block;
    }

    .hide-desktop {
      display: none;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
