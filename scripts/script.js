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

const cursorRoot = document.querySelector(".cursor");
const bigBall = document.querySelector(".cursor__ball--big");
const smallBall = document.querySelector(".cursor__ball--small");
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const hoverSelector = "a, button, [role='button'], .photo-slot";
const hoverScaleActive = 2.2;
let cursorEnabled = false;
let rafId = null;
let cursorVisible = false;
let hoverScale = 1;

const pointer = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5
};

const big = { x: pointer.x, y: pointer.y };
const small = { x: pointer.x, y: pointer.y };

const shouldEnableCustomCursor = () => finePointerQuery.matches && !reduceMotionQuery.matches;

const onPointerMove = (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;

  if (!cursorVisible && cursorRoot) {
    cursorVisible = true;
    cursorRoot.classList.add("is-visible");
  }
};

const onPointerLeaveWindow = () => {
  if (!cursorRoot) return;
  cursorVisible = false;
  cursorRoot.classList.remove("is-visible");
};

const onPointerOver = (event) => {
  if (!event.target.closest(hoverSelector)) return;
  hoverScale = hoverScaleActive;
};

const onPointerOut = (event) => {
  const currentHoverable = event.target.closest(hoverSelector);
  if (!currentHoverable) return;

  const nextHoverable = event.relatedTarget instanceof Element
    ? event.relatedTarget.closest(hoverSelector)
    : null;

  if (nextHoverable === currentHoverable) return;
  hoverScale = 1;
};

const renderCursor = () => {
  big.x += (pointer.x - big.x) * 0.18;
  big.y += (pointer.y - big.y) * 0.18;
  small.x += (pointer.x - small.x) * 0.5;
  small.y += (pointer.y - small.y) * 0.5;

  if (bigBall) {
    bigBall.style.transform = `translate3d(${big.x - 15}px, ${big.y - 15}px, 0) scale(${hoverScale})`;
  }

  if (smallBall) {
    smallBall.style.transform = `translate3d(${small.x - 5}px, ${small.y - 5}px, 0)`;
  }

  rafId = window.requestAnimationFrame(renderCursor);
};

const enableCustomCursor = () => {
  if (!cursorRoot || !bigBall || !smallBall || cursorEnabled) return;
  cursorEnabled = true;
  document.body.classList.add("has-custom-cursor");
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerover", onPointerOver);
  document.addEventListener("pointerout", onPointerOut);
  window.addEventListener("blur", onPointerLeaveWindow);
  document.addEventListener("mouseleave", onPointerLeaveWindow);
  if (!rafId) rafId = window.requestAnimationFrame(renderCursor);
};

const disableCustomCursor = () => {
  if (!cursorEnabled) return;
  cursorEnabled = false;
  document.body.classList.remove("has-custom-cursor");
  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerover", onPointerOver);
  document.removeEventListener("pointerout", onPointerOut);
  window.removeEventListener("blur", onPointerLeaveWindow);
  document.removeEventListener("mouseleave", onPointerLeaveWindow);
  hoverScale = 1;
  cursorVisible = false;
  if (cursorRoot) cursorRoot.classList.remove("is-visible");
  if (rafId) {
    window.cancelAnimationFrame(rafId);
    rafId = null;
  }
};

const syncCustomCursorState = () => {
  if (shouldEnableCustomCursor()) {
    enableCustomCursor();
  } else {
    disableCustomCursor();
  }
};

if (typeof finePointerQuery.addEventListener === "function") {
  finePointerQuery.addEventListener("change", syncCustomCursorState);
} else if (typeof finePointerQuery.addListener === "function") {
  finePointerQuery.addListener(syncCustomCursorState);
}

if (typeof reduceMotionQuery.addEventListener === "function") {
  reduceMotionQuery.addEventListener("change", syncCustomCursorState);
} else if (typeof reduceMotionQuery.addListener === "function") {
  reduceMotionQuery.addListener(syncCustomCursorState);
}

syncCustomCursorState();
