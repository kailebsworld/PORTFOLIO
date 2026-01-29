const aboutSection = document.querySelector(".about");
const aboutToggle = document.getElementById("aboutToggle");
const aboutSpotlight = document.getElementById("aboutSpotlight");

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

