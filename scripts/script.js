const aboutSection = document.querySelector(".about");
const aboutToggle = document.getElementById("aboutToggle");
const aboutSpotlight = document.getElementById("aboutSpotlight");
const worksSection = document.querySelector(".works");
const rootEl = document.documentElement;

if (aboutSection && aboutToggle) {
  aboutToggle.setAttribute(
    "aria-expanded",
    String(aboutSection.classList.contains("is-open"))
  );

  const toggleAbout = () => {
    const isOpen = aboutSection.classList.toggle("is-open");
    aboutToggle.setAttribute("aria-expanded", String(isOpen));
  };

  aboutToggle.addEventListener("click", toggleAbout);
  if (aboutSpotlight) {
    aboutSpotlight.addEventListener("click", toggleAbout);
  }
}

let ticking = false;

const updateAboutCollapse = () => {
  if (!aboutSection) return;
  const rect = aboutSection.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;
  const start = scrollY + rect.top - window.innerHeight * 0.2;
  const end = start + rect.height * 0.9;
  const t = (scrollY - start) / (end - start);
  const clamped = Math.max(0, Math.min(1, t));
  rootEl.style.setProperty("--collapse", clamped.toFixed(3));
  ticking = false;
};

const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateAboutCollapse);
};

updateAboutCollapse();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", updateAboutCollapse);
