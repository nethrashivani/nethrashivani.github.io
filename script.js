// Copy email to clipboard
const copyBtn = document.getElementById('copy-email');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const email = 'nethrashivanims@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied ✓';
      setTimeout(() => { copyBtn.textContent = original; }, 1800);
    } catch (err) {
      // Clipboard API unavailable — fall back silently, mailto link still works
      console.warn('Clipboard copy failed:', err);
    }
  });
}

// TODO: replace with your real LeetCode profile URL
const LEETCODE_URL = 'https://leetcode.com/nethrashivani/';
document.querySelectorAll('#leetcode-link, #leetcode-link-2').forEach(el => {
  el.href = LEETCODE_URL;
});

// Light / dark theme toggle
const themeBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

function setThemeIcon() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

if (themeBtn) {
  setThemeIcon();
  themeBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    setThemeIcon();
  });
}

