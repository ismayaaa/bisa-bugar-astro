<script lang="ts">
  let { 
    isOpen = $bindable(false),
    className = '',
    coach = '',
    time = '',
    onConfirm = () => {},
    onCancel = () => {}
  } = $props();

  function handleConfirm() {
    onConfirm();
    isOpen = false;
  }

  function handleCancel() {
    onCancel();
    isOpen = false;
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      handleCancel();
    }
  }

  $effect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeydown);
    } else {
      window.removeEventListener('keydown', handleKeydown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
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
      aria-labelledby="confirm-title"
    >
      <!-- Mobile handle bar -->
      <div class="modal-handle"></div>

      <button 
        class="modal-close hide-mobile"
        onclick={handleCancel}
        aria-label="Tutup modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
      </button>

      <div class="modal-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-1.06-1.06c1.432-1.25 3.964-1.25 5.396 0a.75.75 0 11-1.06 1.06c-.44-.384-.98-.576-1.529-.576-.53 0-1.05.192-1.492.576zm.53 3.996v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 011.5 0zm-.75 5.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
        </svg>
      </div>

      <h3 id="confirm-title" class="modal-title">Konfirmasi Pendaftaran</h3>
      
      <div class="modal-content">
        <p class="modal-subtitle">Apakah Anda yakin ingin mendaftar kelas berikut?</p>
        
        <div class="class-details">
          <div class="detail-item">
            <span class="detail-label">Kelas:</span>
            <span class="detail-value">{className}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Coach:</span>
            <span class="detail-value">{coach}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Waktu:</span>
            <span class="detail-value">{time}</span>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button 
          type="button" 
          class="btn-cancel"
          onclick={handleCancel}
        >
          BATAL
        </button>
        <button type="button" class="btn-submit" onclick={handleConfirm}>
          YA, DAFTAR
        </button>
      </div>
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

  .modal-icon {
    width: 4rem;
    height: 4rem;
    background: rgba(251, 146, 60, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  .modal-icon svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-primary);
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 1rem;
  }

  .modal-subtitle {
    color: var(--color-text-tertiary);
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .class-details {
    background: var(--color-bg-secondary);
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-border-light);
  }

  .detail-item:last-child {
    border-bottom: none;
  }

  .detail-label {
    font-weight: 600;
    color: var(--color-text-muted);
  }

  .detail-value {
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .form-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
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
      max-width: 28rem;
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

    .form-actions {
      grid-template-columns: 1fr;
    }

    .btn-cancel {
      display: none;
    }
  }

  /* Responsive display utilities */
  .hide-mobile {
    display: none;
  }

  @media (min-width: 768px) {
    .hide-mobile {
      display: block;
    }
  }
</style>
