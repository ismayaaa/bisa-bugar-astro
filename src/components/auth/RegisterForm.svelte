<script lang="ts">
  import { onMount } from "svelte";
  import { auth } from "../../lib/auth";

  let name = $state("");
  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let showPassword = $state(false);
  let showConfirmPassword = $state(false);
  let captchaAnswer = $state("");
  let agreeTerms = $state(false);
  let error = $state("");
  let success = $state("");
  let loading = $state(false);

  // Simple math captcha
  let num1 = $state(0);
  let num2 = $state(0);
  let correctAnswer = $state(0);

  function generateCaptcha() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    captchaAnswer = "";
  }

  onMount(() => {
    generateCaptcha();
  });

  function handleSubmit(e: Event) {
    e.preventDefault();
    error = "";
    success = "";

    // Validate name
    if (!name || name.length < 3) {
      error = "Nama minimal 3 karakter";
      return;
    }

    // Validate email
    if (!email || !email.includes("@")) {
      error = "Masukkan email yang valid";
      return;
    }

    // Validate password
    if (!password || password.length < 6) {
      error = "Password minimal 6 karakter";
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      error = "Konfirmasi password tidak cocok";
      return;
    }

    // Validate captcha
    if (parseInt(captchaAnswer) !== correctAnswer) {
      error = "Jawaban captcha salah, coba lagi";
      generateCaptcha();
      return;
    }

    // Validate terms
    if (!agreeTerms) {
      error = "Anda harus menyetujui syarat dan ketentuan";
      return;
    }

    loading = true;

    // Use auth store
    setTimeout(() => {
      const result = auth.register(name, email, password);
      loading = false;

      if (result.success) {
        success = "Pendaftaran berhasil! Mengalihkan ke halaman utama...";
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        error = result.message;
        generateCaptcha();
      }
    }, 500);
  }
</script>

<form class="auth-form" onsubmit={handleSubmit}>
  {#if error}
    <div class="error-message">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        />
      </svg>
      <span>{error}</span>
    </div>
  {/if}

  <!-- Name -->
  <div class="form-group">
    <label for="name">Nama Lengkap</label>
    <div class="input-wrapper">
      <svg
        class="input-icon"
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
      <input
        type="text"
        id="name"
        bind:value={name}
        placeholder="Nama lengkap Anda"
        autocomplete="name"
      />
    </div>
  </div>

  <!-- Email -->
  <div class="form-group">
    <label for="email">Email</label>
    <div class="input-wrapper">
      <svg
        class="input-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
        />
        <path
          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
        />
      </svg>
      <input
        type="email"
        id="email"
        bind:value={email}
        placeholder="nama@email.com"
        autocomplete="email"
      />
    </div>
  </div>

  <!-- Password -->
  <div class="form-group">
    <label for="password">Password</label>
    <div class="input-wrapper">
      <svg
        class="input-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clip-rule="evenodd"
        />
      </svg>
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        bind:value={password}
        placeholder="Minimal 6 karakter"
        autocomplete="new-password"
      />
      <button
        type="button"
        class="toggle-password"
        onclick={() => (showPassword = !showPassword)}
        aria-label={showPassword
          ? "Sembunyikan password"
          : "Tampilkan password"}
      >
        {#if showPassword}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"
            />
            <path
              d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"
            />
            <path
              d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fill-rule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Confirm Password -->
  <div class="form-group">
    <label for="confirmPassword">Konfirmasi Password</label>
    <div class="input-wrapper">
      <svg
        class="input-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clip-rule="evenodd"
        />
      </svg>
      <input
        type={showConfirmPassword ? "text" : "password"}
        id="confirmPassword"
        bind:value={confirmPassword}
        placeholder="Ulangi password"
        autocomplete="new-password"
      />
      <button
        type="button"
        class="toggle-password"
        onclick={() => (showConfirmPassword = !showConfirmPassword)}
        aria-label={showConfirmPassword
          ? "Sembunyikan password"
          : "Tampilkan password"}
      >
        {#if showConfirmPassword}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"
            />
            <path
              d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"
            />
            <path
              d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fill-rule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Captcha -->
  <div class="form-group">
    <label for="captcha">Verifikasi Anda Bukan Robot</label>
    <div class="captcha-container">
      <div class="captcha-question">
        <span class="captcha-num">{num1}</span>
        <span class="captcha-op">+</span>
        <span class="captcha-num">{num2}</span>
        <span class="captcha-eq">=</span>
      </div>
      <input
        type="number"
        id="captcha"
        bind:value={captchaAnswer}
        placeholder="?"
        class="captcha-input"
        autocomplete="off"
      />
      <button
        type="button"
        class="refresh-captcha"
        onclick={generateCaptcha}
        aria-label="Refresh captcha"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- Terms Agreement -->
  <div class="terms-group">
    <label class="checkbox-label">
      <input type="checkbox" bind:checked={agreeTerms} />
      <span class="checkmark"></span>
      <span
        >Saya setuju dengan <a href="#">Syarat & Ketentuan</a> dan
        <a href="#">Kebijakan Privasi</a></span
      >
    </label>
  </div>

  <!-- Submit Button -->
  <button type="submit" class="btn-submit" disabled={loading}>
    {#if loading}
      <span class="loading-spinner"></span>
      Memproses...
    {:else}
      DAFTAR SEKARANG
    {/if}
  </button>

  <!-- Social Login -->
  <div class="social-divider">
    <span>atau daftar dengan</span>
  </div>

  <div class="social-buttons">
    <button type="button" class="btn-social btn-google">
      <svg viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Google
    </button>
  </div>
</form>

<style>
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: #fee2e2;
    color: #dc2626;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .error-message svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-text-secondary);
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--color-bg-secondary);
    border: 2px solid var(--color-border);
    border-radius: 1rem;
    padding: 0.75rem 1rem;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
  }

  .input-wrapper:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
  }

  .input-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-text-muted);
    flex-shrink: 0;
  }

  .input-wrapper input {
    flex: 1;
    font-size: 1rem;
    color: var(--color-text-primary);
  }

  .input-wrapper input::placeholder {
    color: var(--color-text-muted);
  }

  .toggle-password {
    padding: 0.25rem;
    color: var(--color-text-muted);
    transition: color 0.15s;
  }

  .toggle-password:hover {
    color: var(--color-text-primary);
  }

  .toggle-password svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* Captcha Styles */
  .captcha-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--color-bg-secondary);
    border: 2px solid var(--color-border);
    border-radius: 1rem;
    padding: 0.75rem 1rem;
  }

  .captcha-question {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
  }

  .captcha-num {
    font-size: 1.25rem;
    font-weight: 900;
    color: var(--color-primary);
    background: var(--color-primary-light);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
  }

  .captcha-op,
  .captcha-eq {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text-secondary);
  }

  .captcha-input {
    width: 3.5rem;
    padding: 0.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 0.75rem;
    color: var(--color-text-primary);
  }

  .captcha-input:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .refresh-captcha {
    padding: 0.5rem;
    color: var(--color-text-muted);
    transition: all 0.2s;
  }

  .refresh-captcha:hover {
    color: var(--color-primary);
    transform: rotate(180deg);
  }

  .refresh-captcha svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* Terms Checkbox */
  .terms-group {
    margin-top: 0.5rem;
  }

  .checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
  }

  .checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    width: 1.25rem;
    height: 1.25rem;
    background: var(--color-bg-secondary);
    border: 2px solid var(--color-border);
    border-radius: 0.375rem;
    flex-shrink: 0;
    position: relative;
    margin-top: 0.125rem;
    transition: all 0.15s;
  }

  .checkbox-label input:checked ~ .checkmark {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
    left: 0.375rem;
    top: 0.125rem;
    width: 0.375rem;
    height: 0.625rem;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .checkbox-label input:checked ~ .checkmark::after {
    display: block;
  }

  .checkbox-label a {
    color: var(--color-primary);
    font-weight: 600;
  }

  .checkbox-label a:hover {
    text-decoration: underline;
  }

  .btn-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
    background: var(--color-primary);
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 1rem;
    box-shadow: 0 10px 25px -5px rgba(234, 88, 12, 0.3);
    transition: all 0.15s;
    margin-top: 0.5rem;
  }

  .btn-submit:hover:not(:disabled) {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
  }

  .btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .loading-spinner {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .social-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem 0;
  }

  .social-divider::before,
  .social-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--color-border);
  }

  .social-divider span {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .social-buttons {
    display: flex;
    gap: 0.75rem;
  }

  .btn-social {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem;
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    transition: all 0.15s;
  }

  .btn-social:hover {
    background: var(--color-bg-secondary);
    border-color: var(--color-text-muted);
  }

  .btn-social svg {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
