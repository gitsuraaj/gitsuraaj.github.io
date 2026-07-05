/* ============================================================
   Suraaj Hasija - Portfolio interactions
   - GSAP scroll reveals (free plugins only) + graceful fallback
   - Nav scroll state, mobile menu, copy-email, headline word split
   ============================================================ */
(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Split hero headline into words for stagger ---------- */
  const heading = document.querySelector("[data-splitheading]");
  if (heading) {
    const walk = (node) => {
      const kids = Array.from(node.childNodes);
      kids.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((token) => {
            if (token.trim() === "") {
              frag.appendChild(document.createTextNode(token));
            } else {
              const span = document.createElement("span");
              span.className = "word";
              span.textContent = token;
              frag.appendChild(span);
            }
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(heading);
  }

  /* ---------- Nav: scroll state + mobile menu ---------- */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Copy email ---------- */
  const copyBtn = document.getElementById("copyEmail");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      const label = copyBtn.querySelector(".copy__label");
      try {
        await navigator.clipboard.writeText(email);
      } catch (e) {
        const tmp = document.createElement("input");
        tmp.value = email; document.body.appendChild(tmp); tmp.select();
        try { document.execCommand("copy"); } catch (_) {}
        document.body.removeChild(tmp);
      }
      if (label) {
        const original = label.textContent;
        label.textContent = "Copied ✓";
        label.classList.add("is-copied");
        setTimeout(() => { label.textContent = original; label.classList.remove("is-copied"); }, 1800);
      }
    });
  }

  /* ---------- Entrance + scroll reveals ---------- */
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));

  function showAll() {
    revealEls.forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
    document.querySelectorAll("[data-splitheading] .word").forEach((w) => {
      w.style.opacity = "1"; w.style.transform = "none";
    });
  }

  let entranceStarted = false;
  function startEntrance() {
    if (entranceStarted) return;
    entranceStarted = true;
    const gsap = window.gsap;

    if (reduceMotion || !gsap) { showAll(); initScrollFallback(); return; }

    // Hero headline word stagger
    const words = document.querySelectorAll("[data-splitheading] .word");
    if (words.length) {
      gsap.set(words, { opacity: 0, yPercent: 110 });
      gsap.to(words, {
        opacity: 1, yPercent: 0, duration: 0.7, ease: "expo.out", stagger: 0.045, delay: 0.1,
      });
    }

    // Hero-region reveals (in view on load) animate immediately
    const heroReveals = revealEls.filter((el) => el.closest(".hero"));
    gsap.to(heroReveals, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.09, delay: 0.35 });

    initScrollTrigger();
  }

  function initScrollTrigger() {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) { initScrollFallback(); return; }
    gsap.registerPlugin(ScrollTrigger);

    revealEls.filter((el) => !el.closest(".hero")).forEach((el) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    // Refresh once fonts/images settle
    window.addEventListener("load", () => ScrollTrigger.refresh());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  // IntersectionObserver fallback if GSAP fails to load (offline/CDN blocked)
  function initScrollFallback() {
    if (!("IntersectionObserver" in window)) { showAll(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "opacity .6s ease, transform .6s cubic-bezier(.22,1,.36,1)";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    revealEls.forEach((el) => io.observe(el));
    document.querySelectorAll("[data-splitheading] .word").forEach((w) => { w.style.opacity = "1"; w.style.transform = "none"; });
  }

  /* ---------- Boot ---------- */
  function boot() {
    startEntrance();
    // Safety net: never leave content invisible if something stalls.
    setTimeout(() => { if (!entranceStarted) startEntrance(); }, 2600);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Absolute failsafe on full load: if GSAP never arrived, ensure visibility.
  window.addEventListener("load", () => {
    setTimeout(() => {
      const anyHidden = revealEls.some((el) => getComputedStyle(el).opacity === "0");
      if (anyHidden && !window.gsap) showAll();
    }, 400);
  });
})();
