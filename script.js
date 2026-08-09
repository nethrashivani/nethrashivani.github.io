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
