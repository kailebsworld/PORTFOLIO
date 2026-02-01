const themeToggle = document.querySelector(".theme-toggle");
const themeRoot = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

const applyThemeAssets = (theme) => {
  document.querySelectorAll("[data-src-light]").forEach((el) => {
    const lightSrc = el.getAttribute("data-src-light");
    const darkSrc = el.getAttribute("data-src-dark");
    const nextSrc = theme === "light" ? lightSrc : darkSrc;

    if (el.tagName === "SOURCE") {
      if (el.src !== nextSrc) {
        el.src = nextSrc;
        if (el.parentElement && el.parentElement.tagName === "VIDEO") {
          el.parentElement.load();
        }
      }
      return;
    }

    el.src = nextSrc;
  });
};

themeRoot.dataset.theme = initialTheme;
applyThemeAssets(initialTheme);

if (themeToggle) {
  themeToggle.setAttribute("aria-pressed", String(initialTheme === "dark"));
  themeToggle.addEventListener("click", () => {
    const currentTheme = themeRoot.dataset.theme === "dark" ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    themeRoot.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    themeToggle.setAttribute("aria-pressed", String(newTheme === "dark"));
    applyThemeAssets(newTheme);
  });
}

const aboutToggle = document.getElementById("aboutToggle");
const bio = document.getElementById("bio");
const bioText = document.getElementById("bioText");
const photoSlots = document.querySelectorAll(".photo-slot");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");

if (aboutToggle && bio && bioText) {
  aboutToggle.setAttribute("aria-expanded", "false");

  const setBioHeight = () => {
    if (bio.classList.contains("is-open")) {
      bioText.style.maxHeight = `${bioText.scrollHeight}px`;
    } else {
      bioText.style.maxHeight = "280px";
    }
  };

  const toggleBio = () => {
    const isOpen = bio.classList.toggle("is-open");
    bio.classList.toggle("is-collapsed", !isOpen);
    aboutToggle.setAttribute("aria-expanded", String(isOpen));
    setBioHeight();
  };

  aboutToggle.addEventListener("click", toggleBio);
  bioText.addEventListener("click", toggleBio);
  window.addEventListener("resize", setBioHeight);
  setBioHeight();
}

if (navToggle && navMenu) {
  const setNavState = (isOpen) => {
    navMenu.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("is-open");
    setNavState(!isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavState(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) setNavState(false);
  });
}

if (photoSlots.length) {
  const centerSlot = document.querySelector(".photo-slot.is-center");

  const swapWithCenter = (targetSlot) => {
    if (!centerSlot || targetSlot === centerSlot) return;

    const centerImg = centerSlot.querySelector("img");
    const targetImg = targetSlot.querySelector("img");
    if (!centerImg || !targetImg) return;

    centerSlot.style.opacity = "0.6";
    targetSlot.style.opacity = "0.6";

    setTimeout(() => {
      const tmpSrc = centerImg.src;
      const tmpAlt = centerImg.alt;
      const tmpFit = centerImg.dataset.fit || "contain";

      centerImg.src = targetImg.src;
      centerImg.alt = targetImg.alt;
      centerImg.dataset.fit = targetImg.dataset.fit || "contain";

      targetImg.src = tmpSrc;
      targetImg.alt = tmpAlt;
      targetImg.dataset.fit = tmpFit;

      centerSlot.style.opacity = "1";
      targetSlot.style.opacity = "1";
    }, 220);
  };

  photoSlots.forEach((slot) => {
    slot.addEventListener("click", () => swapWithCenter(slot));
  });
}
