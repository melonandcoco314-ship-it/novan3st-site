// Lightweight niceties for a premium feel (no external libraries).
document.addEventListener("DOMContentLoaded", () => {
  // Page intro animation
  document.body.classList.add("page-enter");
  requestAnimationFrame(() => { document.body.classList.add("page-loaded"); });
  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Current year in footer
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal boxes on page load (staggered)
  const items = Array.from(document.querySelectorAll('.reveal'));
  items.forEach((el, i) => {
    const baseDelay = 80; // ms
    const extra = el.classList.contains('delay-1') ? 120 : el.classList.contains('delay-2') ? 220 : el.classList.contains('delay-3') ? 320 : 0;
    setTimeout(() => el.classList.add('is-visible'), i * baseDelay + extra);
  });
});
