
(() => {
  "use strict";

  const progress = document.getElementById("scrollProgress");
  const back = document.getElementById("backToTop");
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const anchors = [...document.querySelectorAll(".nav-links a")];

  const current = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
  anchors.forEach(a => {
    const href = (a.getAttribute("href") || "").replace(/\.html$/, "");
    a.classList.toggle("active", href === current);
  });

  function handleScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
    if (back) back.classList.toggle("show", doc.scrollTop > 600);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    anchors.forEach(a => a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }));
  }

  if (back) {
    back.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const revealEls = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
