const themeDropdown = document.querySelector(".theme-dropdown");
const themeTrigger = document.querySelector(".theme-trigger");
const themeMenu = document.getElementById("themeMenu");
const themeOptions = Array.from(document.querySelectorAll(".theme-option"));
const themeRoot = document.documentElement;
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const validThemeChoices = new Set(["system", "light", "dark"]);
let currentThemeChoice = "system";

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      /* ignore storage errors */
    }
  }
};

const applyThemeAssets = (theme) => {
  document.querySelectorAll("[data-src-light]").forEach((el) => {
    const lightSrc = el.getAttribute("data-src-light");
    const darkSrc = el.getAttribute("data-src-dark");
    const nextSrc = theme === "light" ? lightSrc : darkSrc;
    if (!nextSrc) return;

    if (el.tagName === "SOURCE") {
      if (el.getAttribute("src") !== nextSrc) {
        el.setAttribute("src", nextSrc);
        if (el.parentElement && el.parentElement.tagName === "VIDEO") {
          el.parentElement.load();
        }
      }
      return;
    }

    if (el.getAttribute("src") !== nextSrc) {
      el.setAttribute("src", nextSrc);
    }
  });
};

const getStoredThemeChoice = () => {
  const stored = storage.get("theme");
  if (stored && validThemeChoices.has(stored)) return stored;
  return null;
};

const resolveAppliedTheme = (themeChoice) => {
  if (themeChoice === "light" || themeChoice === "dark") return themeChoice;
  return systemThemeQuery.matches ? "dark" : "light";
};

const syncThemeUi = (themeChoice) => {
  if (!themeDropdown) return;
  themeDropdown.dataset.choice = themeChoice;
  themeOptions.forEach((option) => {
    const isActive = option.dataset.themeChoice === themeChoice;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-checked", String(isActive));
  });
};

const applyThemeChoice = (themeChoice, shouldPersist = false) => {
  currentThemeChoice = validThemeChoices.has(themeChoice) ? themeChoice : "system";
  const appliedTheme = resolveAppliedTheme(currentThemeChoice);
  themeRoot.dataset.theme = appliedTheme;
  applyThemeAssets(appliedTheme);
  syncThemeUi(currentThemeChoice);
  if (shouldPersist) storage.set("theme", currentThemeChoice);
};

const closeThemeMenu = () => {
  if (!themeDropdown || !themeTrigger) return;
  themeDropdown.classList.remove("open");
  themeTrigger.setAttribute("aria-expanded", "false");
};

const openThemeMenu = () => {
  if (!themeDropdown || !themeTrigger) return;
  themeDropdown.classList.add("open");
  themeTrigger.setAttribute("aria-expanded", "true");
};

const initialThemeChoice = getStoredThemeChoice() || "system";
applyThemeChoice(initialThemeChoice, false);

if (themeDropdown && themeTrigger && themeMenu && themeOptions.length) {
  themeTrigger.addEventListener("click", () => {
    const isOpen = themeDropdown.classList.contains("open");
    if (isOpen) {
      closeThemeMenu();
    } else {
      openThemeMenu();
    }
  });

  themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const nextChoice = option.dataset.themeChoice || "system";
      applyThemeChoice(nextChoice, true);
      closeThemeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!themeDropdown.contains(event.target)) closeThemeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeThemeMenu();
  });
}

const onSystemThemeChange = () => {
  if (currentThemeChoice === "system") applyThemeChoice("system", false);
};

if (typeof systemThemeQuery.addEventListener === "function") {
  systemThemeQuery.addEventListener("change", onSystemThemeChange);
} else if (typeof systemThemeQuery.addListener === "function") {
  systemThemeQuery.addListener(onSystemThemeChange);
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
      const collapsedHeight = window.innerWidth <= 480 ? 352 : 280;
      bioText.style.maxHeight = `${collapsedHeight}px`;
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
