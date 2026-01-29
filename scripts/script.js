const aboutSection = document.querySelector(".about");
const aboutToggle = document.getElementById("aboutToggle");

if (aboutSection && aboutToggle) {
  aboutToggle.setAttribute(
    "aria-expanded",
    String(aboutSection.classList.contains("is-open"))
  );

  aboutToggle.addEventListener("click", () => {
    const isOpen = aboutSection.classList.toggle("is-open");
    aboutToggle.setAttribute("aria-expanded", String(isOpen));
  });
}


