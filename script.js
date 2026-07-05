const header = document.querySelector(".site-header");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

document.querySelector(".contact-mail-button")?.addEventListener("click", () => {
  const local = ["support", "center"].join("_");
  const domain = ["city", "kanazawa", "lg", "jp"].join(".");
  const subject = encodeURIComponent("連続セミナーについての問い合わせ");
  window.location.href = `mailto:${local}@${domain}?subject=${subject}`;
});
