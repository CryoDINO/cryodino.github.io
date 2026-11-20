Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});
Handlebars.registerHelper("inc", function (i) {
  return i + 1;
});
Handlebars.registerHelper("hasItems", function (arr) {
  return arr && arr.length > 0;
});

$(document).ready(function () {
  const source = $("#paper-template").html();
  const template = Handlebars.compile(source);
  $("#content").html(template({ paper: paper }));

  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", paper.metadata.description);
  document.title = paper.metadata.title;

  // Scroll-in reveal (content stays visible without IntersectionObserver).
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  }

  // Top bar shadow once the page scrolls.
  const topbar = document.getElementById("topbar");
  const onScroll = () => {
    if (topbar) topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the nav link of the section in view.
  const navLinks = Array.from(document.querySelectorAll(".topbar-links a"));
  if ("IntersectionObserver" in window && navLinks.length) {
    const byId = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("is-active"));
            const link = byId.get(entry.target.id);
            if (link) link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    byId.forEach((_, id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });
  }

  // Click a figure to view it full screen.
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  document.querySelectorAll(".media-block img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  };
  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Copy BibTeX.
  const copyBtn = document.getElementById("copy-bibtex");
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(document.getElementById("bibtex-code").innerText)
        .then(() => {
          copyBtn.textContent = "Copied";
          setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
        })
        .catch(() => {});
    });
  } else if (copyBtn) {
    copyBtn.style.display = "none";
  }
});
