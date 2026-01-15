<script lang="ts">
  import { toast } from '../../lib/stores';
  
  let visible = $state(false);
  let message = $state('');
  let type = $state<'success' | 'error' | 'info'>('success');

  toast.subscribe((state) => {
    visible = state.visible;
    message = state.message;
    type = state.type;
  });
</script>

{#if visible}
  <div 
    class="toast toast-{type}"
    role="alert"
    aria-live="polite"
  >
    <div class="toast-icon">
      {#if type === 'success'}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
      {:else if type === 'error'}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
        </svg>
      {/if}
    </div>
    <div class="toast-content">
      <p class="toast-message">{message}</p>
      {#if type === 'success'}
        <p class="toast-subtitle">Konfirmasi dikirim ke email.</p>
      {/if}
    </div>
    <button 
      class="toast-close"
      onclick={() => toast.hide()}
      aria-label="Tutup notifikasi"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    color: white;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    z-index: var(--z-toast);
    animation: slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideDown {
    from {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }

  .toast-icon {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  .toast-success .toast-icon {
    color: #22c55e;
  }

  .toast-error .toast-icon {
    color: #ef4444;
  }

  .toast-info .toast-icon {
    color: #3b82f6;
  }

  .toast-icon svg {
    width: 100%;
    height: 100%;
  }

  .toast-content {
    flex: 1;
  }

  .toast-message {
    font-size: 0.875rem;
    font-weight: 700;
  }

  .toast-subtitle {
    font-size: 0.625rem;
    color: #9ca3af;
    margin-top: 0.125rem;
  }

  .toast-close {
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    transition: color 0.15s;
  }

  .toast-close:hover {
    color: white;
  }

  .toast-close svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .toast {
      left: 1rem;
      right: 1rem;
      transform: none;
      max-width: calc(100% - 2rem);
    }

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
