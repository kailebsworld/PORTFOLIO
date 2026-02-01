(() => {
  const root = document.getElementById("scale-root");
  const canvas = document.getElementById("scale-canvas");
  if (!root || !canvas) return;

  const DESIGN_W =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--design-w")
    ) || 1440;

  function applyScale() {
    const vw = window.innerWidth;
    const scale = Math.min(vw / DESIGN_W, 1);

    canvas.style.transformOrigin = "top left";
    canvas.style.transform = `scale(${scale})`;

    requestAnimationFrame(() => {
      const rect = canvas.getBoundingClientRect();
      root.style.height = `${rect.height}px`;
      document.body.style.height = `${rect.height}px`;
      document.documentElement.style.height = `${rect.height}px`;

      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    });
  }

  window.addEventListener("resize", applyScale, { passive: true });
  window.addEventListener("orientationchange", applyScale, { passive: true });
  applyScale();
})();
