(() => {
  if (window.__worksOverlayInitialized) return;
  window.__worksOverlayInitialized = true;

  const PROJECTS = [
    {
      id: "project-1",
      title: "Talk Fast Social",
      meta: "Graphic Design • 2026",
      description:
        "At Talk Fast Social, I design social-first campaign visuals and repeatable ad systems that keep brands consistent while moving fast—supporting clients like AMR and Inland Imaging across multiple channels.",
      tags: ["Web Design", "Marketing", "Motion"],
      images: ["assets/images/TFS 1.jpg", "assets/images/TFS 2.jpg"],
      link: ""
    },
    {
      id: "project-2",
      title: "EWU Student Affairs",
      meta: "Campus Communication • 2026",
      description:
        "As the in-house designer for EWU’s Dean of Students office, I create clear, accessible print and digital communications for student-facing programs and institutional announcements—built to be read fast and used everywhere.",
      tags: ["Print", "Campaign", "Brand"],
      images: [
        "assets/images/Student Affairs-251102-Dean on Call rack card- v1 (dragged)-1.png",
        "assets/images/Student Affairs-251102-Dean on Call rack card- v1 (dragged) 2-1.png"
      ],
      link: ""
    },
    {
      id: "graphic-1",
      title: "Calendar Poster",
      meta: "Graphic Design • 2026",
      description: "Production Design final: a full-year illustrated calendar system built around bold color blocking, playful character art, and a consistent monthly grid for clarity and repeatable layout structure.",
      tags: ["Graphics", "Print", "Poster"],
      images: [
        "assets/images/CALENDAR 1.webp",
        "assets/images/CALENDAR 2.avif",
        "assets/images/CALENDAR 3.jpg",
        "assets/images/CALENDAR 4.jpg",
        "assets/images/CALENDAR 5.avif",
        "assets/images/CALENDAR 6.jpg",
        "assets/images/CALENDAR 7.avif",
        "assets/images/CALENDAR 8.avif",
        "assets/images/CALENDAR 9.jpg",
        "assets/images/CALENDAR 10.jpg",
        "assets/images/CALENDAR 11.avif",
        "assets/images/CALENDAR 12.jpg",
        "assets/images/CALENDAR 13.avif",
        "assets/images/Kaileb_Cardle_Calendar copy-3-1.pdf"
      ],
      mediaThumb: "assets/images/CALENDAR 1.webp",
      link: ""
    },
    {
      id: "graphic-2",
      title: "Poser Magazine",
      meta: "Graphic Design • 2026",
      description: "VCD 2 final: a multi-spread pop culture magazine concept (POSER) built around bold typographic hierarchy, image-driven pacing, and editorial layouts spotlighting today’s pop artists.",
      tags: ["Graphics", "Editorial", "Print"],
      images: [
        "assets/images/POSER MAG 1.png",
        "assets/images/POSER MAG 2.png",
        "assets/images/POSER MAG 3.png",
        "assets/images/POSER MAG 4.png",
        "assets/images/POSER MAG 5.png",
        "assets/images/POSER MAG 6.png",
        "assets/images/Poser Mag 7.png",
        "assets/images/Pop-magazine.pdf"
      ],
      mediaThumb: "assets/images/POSER MAG 1.png",
      link: ""
    },
    {
      id: "graphic-3",
      title: "As We Were In Dreams",
      meta: "Graphic Motion • 2026",
      description: "Motion Design final: an After Effects moving poster that brings a static layout to life through kinetic type, timed reveals, and loopable motion built for screen.",
      tags: ["Graphics", "Motion", "Video"],
      images: ["assets/images/as-we-were-in-dreams.mp4"],
      mediaThumb: "assets/images/as-we-were-in-dreams.mp4",
      mediaPoster: "assets/images/as-we-were-in-dreams-poster.jpg",
      link: ""
    },
    {
      id: "project-4",
      title: "Branding",
      meta: "Identity Systems • 2026",
      description:
        "Professional Practice final: partnered with a local Spokane business (Pacific Auto Sales) to refresh their visual identity and produce real marketing assets—logo, business card, and vehicle promo graphics built for fast, consistent use.",
      tags: ["Identity", "Logo", "System"],
      images: [
        "assets/images/PAS LOGO CAR.png",
        "assets/images/PAS POSTER MOCKUP.png",
        "assets/images/PAS LOGO.png",
        "assets/images/PAS 2.png",
        "assets/images/PAS 1.png"
      ],
      link: ""
    },
    {
      id: "graphic-4",
      title: "Puma Poster",
      meta: "Graphic Design • 2026",
      description: "Branding exploration for PUMA Speedcats—translated speed + motion into a grid-based poster system using custom icons, directional cues, and high-contrast red/blue composition.",
      tags: ["Graphics", "Poster", "Print"],
      images: [
        "assets/images/PUMA POSTER BOARD.png",
        "assets/images/PUMA POSTER BOARD 2.png",
        "assets/images/Puma Poster.pdf"
      ],
      mediaThumb: "assets/images/PUMA POSTER BOARD.png",
      link: ""
    },
    {
      id: "graphic-5",
      title: "Bumper Logo",
      meta: "Graphic Motion • 2026",
      description: "Motion Design project: created an original production company logo in Illustrator and animated it in After Effects as a 10–15s bumper—exploring motion, sound, and virtual space for a film-ready brand intro/outro.",
      tags: ["Graphics", "Motion", "Logo"],
      images: ["assets/images/Bumper Logo Rough Draft.mp4"],
      mediaThumb: "assets/images/Bumper Logo Rough Draft.mp4",
      link: ""
    },
    {
      id: "uiux-1",
      title: "Maison Margiela",
      meta: "UI/UX • 2026",
      description: "Maison Margiela mobile app UX final: style tile + hi-fi prototype with fully linked screens and four feature flows built from a cohesive component system.",
      tags: ["UI", "UX", "Visual"],
      images: ["assets/images/MAISON-MARGIELA.png"],
      mediaThumb: "assets/images/MAISON-MARGIELA.png",
      previewEmbed:
        "https://www.figma.com/proto/1zrJvakou1m2Dt96WqwzJ9/UX-1-Project--5--Choose-Your-Own--Template---Copy-?node-id=3232-841&t=cfTtb8RmywbUL2fO-0&scaling=scale-down&content-scaling=fixed&page-id=5%3A6&starting-point-node-id=3232%3A841",
      link: ""
    },
    {
      id: "uiux-2",
      title: "KlickyKitty",
      meta: "UI/UX • 2026",
      description: "UX 1 Virtual Pet (Apple Watch): a fully linked prototype for adopting, naming, and customizing a pet—built with a style tile, reusable components/variants, and clear watch-sized UI patterns.",
      tags: ["UI", "UX", "Prototype"],
      images: ["assets/images/KlickyKitty.png"],
      mediaThumb: "assets/images/KlickyKitty.png",
      previewEmbed:
        "https://www.figma.com/proto/0ngB7HYrTOgw0hVF19SqEB/UX-1-Project--4--Virtual-Pet--Template---Copy-?node-id=2274-9720&t=cfTtb8RmywbUL2fO-0&scaling=scale-down&content-scaling=fixed&page-id=6%3A49&starting-point-node-id=2274%3A9720",
      link: ""
    },
    {
      id: "uiux-3",
      title: "Design Library App",
      meta: "UI/UX • 2026",
      description: "UX project: designed a mobile Design Library app for learning + reference—browse curated lessons, save/bookmark resources, and jump into topics like Gestalt principles and UI components.",
      tags: ["UI", "UX", "Interaction"],
      images: ["assets/images/ARCHIVE DESIGN APP.png"],
      mediaThumb: "assets/images/ARCHIVE DESIGN APP.png",
      previewEmbed:
        "https://www.figma.com/proto/57wTGKKWY37c2fWvmASB5k/UX-2-Project--2--Design-Library-App--JUST-KAILEB?node-id=2498-5725&t=wWlwuAYbdeJ55M00-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A21&starting-point-node-id=2498%3A5725",
      link: ""
    }
  ];

  const STATE = {
    isOpen: false,
    projectIndex: 0,
    imageIndex: 0,
    previewMode: "image",
    scrollY: 0,
    lastFocus: null
  };

  const PROJECT_INDEX_BY_ID = new Map(PROJECTS.map((project, index) => [project.id, index]));
  const WORK_EXPERIENCE_IDS = new Set(["project-1", "project-2"]);
  const LOADED_IMAGES = new Set();
  let pdfJsReadyPromise = null;
  let pdfRenderToken = 0;

  let worksOverlay;
  let worksPanel;
  let worksTitleNodes;
  let worksDialogTitle;
  let worksMeta;
  let worksDesc;
  let worksTags;
  let worksImage;
  let worksVideo;
  let worksEmbed;
  let worksMediaFrame;
  let worksPdfView;
  let worksPdfPages;
  let worksImageFallback;
  let worksIndex;
  let worksTopIndexNodes;
  let worksClose;
  let worksProjectPrev;
  let worksProjectNext;
  let worksMediaPrev;
  let worksMediaNext;
  let worksLink;
  let worksStrip;
  let worksMoreLabel;
  let worksHeadingProjectNodes;

  const pad = (value) => String(value).padStart(3, "0");
  const hashFromProjectId = (projectId) => `#work=${encodeURIComponent(projectId)}`;
  const isVideoSrc = (src) => /\.(mp4|webm|ogg)(\?|#|$)/i.test(src || "");
  const isPdfSrc = (src) => /\.pdf(\?|#|$)/i.test(src || "");
  const normalizeMediaSrc = (src) => {
    try {
      return encodeURI(src || "").replace(/#/g, "%23");
    } catch (error) {
      return "";
    }
  };
  const toFigmaEmbedUrl = (url) => {
    const source = url || "";
    if (!source) return "https://www.figma.com/embed?embed_host=share&url=";
    const separator = source.includes("?") ? "&" : "?";
    const withUiHidden = `${source}${separator}hide-ui=1`;
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(withUiHidden)}`;
  };

  const ensurePdfJs = () => {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (pdfJsReadyPromise) return pdfJsReadyPromise;

    pdfJsReadyPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector("script[data-pdfjs='true']");
      if (existing) {
        existing.addEventListener("load", () => resolve(window.pdfjsLib));
        existing.addEventListener("error", reject);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.async = true;
      script.dataset.pdfjs = "true";
      script.onload = () => resolve(window.pdfjsLib);
      script.onerror = reject;
      document.head.appendChild(script);
    }).then((pdfjsLib) => {
      if (pdfjsLib && pdfjsLib.GlobalWorkerOptions) {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      }
      return pdfjsLib;
    });

    return pdfJsReadyPromise;
  };

  const renderPdfInOverlay = async (src) => {
    if (!worksPdfView || !worksPdfPages) return;

    const token = ++pdfRenderToken;
    worksPdfPages.innerHTML = '<div class="works-pdf-loading">Loading PDF...</div>';

    try {
      const pdfjsLib = await ensurePdfJs();
      if (!pdfjsLib || token !== pdfRenderToken) return;

      const pdf = await pdfjsLib.getDocument({ url: src }).promise;
      if (token !== pdfRenderToken) return;

      const frameWidth = Math.max(320, worksPdfView.clientWidth - 24);
      const fragment = document.createDocumentFragment();

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        if (token !== pdfRenderToken) return;
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(2.2, frameWidth / viewport.width);
        const scaledViewport = page.getViewport({ scale });
        const dpr = window.devicePixelRatio || 1;

        const canvas = document.createElement("canvas");
        canvas.className = "works-pdf-page";
        canvas.width = Math.floor(scaledViewport.width * dpr);
        canvas.height = Math.floor(scaledViewport.height * dpr);
        canvas.style.width = `${Math.floor(scaledViewport.width)}px`;
        canvas.style.height = `${Math.floor(scaledViewport.height)}px`;

        const ctx = canvas.getContext("2d", { alpha: false });
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
        fragment.appendChild(canvas);
      }

      if (token !== pdfRenderToken) return;
      worksPdfPages.innerHTML = "";
      worksPdfPages.appendChild(fragment);
      worksImageFallback.classList.remove("works-is-visible");
    } catch (error) {
      if (token !== pdfRenderToken) return;
      worksPdfPages.innerHTML = "";
      worksImageFallback.classList.add("works-is-visible");
    }
  };

  const getProjectIdFromHash = () => {
    if (!window.location.hash.startsWith("#work=")) return null;
    const id = window.location.hash.slice(6);
    if (!id) return null;
    return decodeURIComponent(id);
  };

  const preloadImage = (src) => {
    if (!src || LOADED_IMAGES.has(src)) return;
    const img = new Image();
    img.src = src;
    LOADED_IMAGES.add(src);
  };

  const preloadFirstImages = () => {
    PROJECTS.forEach((project) => {
      const firstImage = project.images.find((src) => !isVideoSrc(src) && !isPdfSrc(src));
      preloadImage(firstImage);
    });
  };

  const updateHash = (projectId) => {
    const nextHash = hashFromProjectId(projectId);
    if (window.location.hash !== nextHash) window.location.hash = nextHash;
  };

  const clearHash = () => {
    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", cleanUrl);
  };

  const getFocusableElements = () => {
    if (!worksOverlay) return [];
    const isVisible = (el) => {
      const style = window.getComputedStyle(el);
      return style.display !== "none" && style.visibility !== "hidden" && !el.hasAttribute("hidden");
    };

    return Array.from(
      worksOverlay.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => isVisible(el));
  };

  const trapFocus = (event) => {
    if (!STATE.isOpen || event.key !== "Tab") return;

    const focusables = getFocusableElements();
    if (!focusables.length) {
      event.preventDefault();
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const lockBodyScroll = () => {
    STATE.scrollY = window.scrollY || window.pageYOffset || 0;
    document.body.classList.add("works-lock");
    document.body.style.position = "fixed";
    document.body.style.top = `-${STATE.scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  };

  const unlockBodyScroll = () => {
    document.body.classList.remove("works-lock");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, STATE.scrollY);
  };

  const setTags = (project) => {
    worksTags.innerHTML = "";
    const fallbackMeta = typeof project.meta === "string" ? project.meta : "";
    const tags = Array.isArray(project.tags) && project.tags.length
      ? project.tags
      : fallbackMeta.split("•").map((item) => item.trim()).filter(Boolean);

    tags.slice(0, 3).forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "works-tag";
      chip.textContent = tag;
      worksTags.appendChild(chip);
    });
  };

  const renderStrip = () => {
    const currentProjectId = PROJECTS[STATE.projectIndex].id;
    worksStrip.innerHTML = "";
    const track = document.createElement("div");
    track.className = "works-strip-track";

    const marqueeItems = [...PROJECTS, ...PROJECTS];
    marqueeItems.forEach((project, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "works-strip-card";
      card.setAttribute("data-project-id", project.id);
      card.setAttribute("aria-label", `Open ${project.title}`);
      if (project.id === currentProjectId) card.classList.add("works-is-active");

      const thumbSrc = project.id === "graphic-3"
        ? (project.images[0] || "")
        : (project.mediaThumb || project.images.find((src) => !isVideoSrc(src)) || "");
      const thumbIsVideo = project.id === "graphic-3" || isVideoSrc(thumbSrc);
      const safeThumbSrc = normalizeMediaSrc(thumbSrc);
      const thumbMarkup = thumbIsVideo
        ? `<video muted loop autoplay playsinline aria-label="${project.title} preview video"><source src="${safeThumbSrc}" type="video/mp4"></video>`
        : `<img src="${safeThumbSrc}" alt="${project.title} preview" loading="lazy" decoding="async">`;

      card.innerHTML = `
        <div class="works-strip-media">
          ${thumbMarkup}
        </div>
        <div class="works-strip-copy">
          <div class="works-strip-no">No.${pad((index % PROJECTS.length) + 1)}</div>
          <div class="works-strip-title">${project.title}</div>
        </div>
      `;

      track.appendChild(card);
    });

    worksStrip.appendChild(track);
  };

  const updateImage = ({ animate = true } = {}) => {
    const project = PROJECTS[STATE.projectIndex];
    const hasEmbed = Boolean(project.previewEmbed);
    const totalImages = project.images.length || 1;
    const mediaSrc = project.images[STATE.imageIndex] || project.images[0] || "";
    const safeMediaSrc = normalizeMediaSrc(mediaSrc);
    const mediaIsVideo = project.id === "graphic-3" || isVideoSrc(mediaSrc);
    const mediaIsPdf = isPdfSrc(mediaSrc);

    if (animate) worksImage.classList.add("works-is-swapping");
    if (!mediaIsVideo && !mediaIsPdf && mediaSrc) preloadImage(mediaSrc);
    worksMediaFrame.classList.toggle("works-is-embed", hasEmbed);

    worksImageFallback.classList.remove("works-is-visible");
    if (hasEmbed) {
      STATE.previewMode = "embed";
      worksImage.hidden = true;
      worksImage.style.display = "none";
      worksImage.removeAttribute("src");
      worksImage.alt = "";
      worksVideo.pause();
      worksVideo.removeAttribute("src");
      worksVideo.poster = "";
      worksVideo.load();
      worksVideo.hidden = true;
      worksVideo.style.display = "none";
      worksEmbed.hidden = false;
      worksEmbed.style.display = "block";
      worksEmbed.src = toFigmaEmbedUrl(project.previewEmbed);
      worksPdfView.hidden = true;
      worksPdfView.style.display = "none";
      worksImageFallback.classList.remove("works-is-visible");
    } else if (mediaIsVideo) {
      STATE.previewMode = "video";
      worksImage.hidden = true;
      worksImage.style.display = "none";
      worksImage.removeAttribute("src");
      worksImage.alt = "";
      worksEmbed.hidden = true;
      worksEmbed.style.display = "none";
      worksEmbed.src = "";
      worksVideo.hidden = false;
      worksVideo.style.display = "block";
      worksVideo.poster = normalizeMediaSrc(project.mediaPoster || "");
      worksVideo.innerHTML = `<source src="${safeMediaSrc}" type="video/mp4">`;
      worksVideo.load();
      worksVideo.play().catch(() => {});
      worksPdfView.hidden = true;
      worksPdfView.style.display = "none";
    } else if (mediaIsPdf) {
      STATE.previewMode = "pdf";
      worksImage.hidden = true;
      worksImage.style.display = "none";
      worksImage.removeAttribute("src");
      worksImage.alt = "";
      worksVideo.pause();
      worksVideo.removeAttribute("src");
      worksVideo.poster = "";
      worksVideo.load();
      worksVideo.hidden = true;
      worksVideo.style.display = "none";
      worksEmbed.hidden = true;
      worksEmbed.style.display = "none";
      worksEmbed.src = "";
      worksPdfView.hidden = false;
      worksPdfView.style.display = "block";
      renderPdfInOverlay(safeMediaSrc);
    } else {
      STATE.previewMode = "image";
      worksVideo.pause();
      worksVideo.removeAttribute("src");
      worksVideo.poster = "";
      worksVideo.load();
      worksVideo.hidden = true;
      worksVideo.style.display = "none";
      worksEmbed.hidden = true;
      worksEmbed.style.display = "none";
      worksEmbed.src = "";
      worksPdfView.hidden = true;
      worksPdfView.style.display = "none";
      worksImage.hidden = false;
      worksImage.style.display = "block";
      worksImage.alt = `${project.title} preview ${STATE.imageIndex + 1}`;
      worksImage.src = safeMediaSrc;
    }

    const canNavigateMedia = !hasEmbed && totalImages > 1;
    worksMediaPrev.disabled = !canNavigateMedia;
    worksMediaNext.disabled = !canNavigateMedia;
    worksMediaPrev.hidden = !canNavigateMedia;
    worksMediaNext.hidden = !canNavigateMedia;

    window.setTimeout(() => {
      worksImage.classList.remove("works-is-swapping");
    }, 220);
  };

  const renderProject = ({ animate = true } = {}) => {
    const project = PROJECTS[STATE.projectIndex];
    if (!project) return;
    const isWorkExperience = WORK_EXPERIENCE_IDS.has(project.id);

    if (animate) worksPanel.classList.add("works-is-swapping");

    const nextTitle = project.title.toUpperCase();
    worksDialogTitle.textContent = nextTitle;
    worksTitleNodes.forEach((node) => {
      node.textContent = nextTitle;
    });
    worksMeta.textContent = project.meta;
    worksDesc.textContent = project.description;
    setTags(project);
    if (worksMoreLabel) {
      worksMoreLabel.textContent = isWorkExperience ? "MORE WORKS" : "MORE PROJECTS";
    }
    if (worksHeadingProjectNodes?.length) {
      const headingText = isWorkExperience ? "WORKS" : "PROJECT";
      worksHeadingProjectNodes.forEach((node) => {
        node.textContent = headingText;
      });
    }

    if (project.link) {
      worksLink.href = project.link;
      worksLink.target = "_blank";
      worksLink.rel = "noopener";
      worksLink.innerHTML = 'Visit Project <span aria-hidden="true">↗</span>';
    } else {
      worksLink.href = "#contact";
      worksLink.target = "_self";
      worksLink.removeAttribute("rel");
      worksLink.innerHTML = 'Contact <span aria-hidden="true">↗</span>';
    }

    const current = STATE.projectIndex + 1;
    const formattedIndex = `No.${pad(current)}`;
    worksIndex.textContent = formattedIndex;
    worksTopIndexNodes.forEach((node) => {
      node.textContent = formattedIndex;
    });

    if (STATE.imageIndex >= project.images.length) STATE.imageIndex = 0;
    updateImage({ animate });

    renderStrip();

    const nextLazyImage = project.images[STATE.imageIndex + 1];
    if (nextLazyImage && !isVideoSrc(nextLazyImage)) window.setTimeout(() => preloadImage(nextLazyImage), 120);

    window.setTimeout(() => {
      worksPanel.classList.remove("works-is-swapping");
    }, 220);
  };

  const openWorksOverlay = (projectId, { updateUrl = true } = {}) => {
    const nextProjectIndex = PROJECT_INDEX_BY_ID.get(projectId);
    if (typeof nextProjectIndex !== "number") return;

    const isNewOpen = !STATE.isOpen;
    STATE.projectIndex = nextProjectIndex;
    STATE.imageIndex = 0;

    if (isNewOpen) {
      STATE.isOpen = true;
      STATE.lastFocus = document.activeElement;
      lockBodyScroll();
      worksOverlay.hidden = false;
      requestAnimationFrame(() => worksOverlay.classList.add("works-is-open"));
    }

    renderProject({ animate: !isNewOpen });
    if (updateUrl) updateHash(projectId);

    window.setTimeout(() => {
      if (worksClose && typeof worksClose.focus === "function") worksClose.focus();
    }, 50);
  };

  const closeWorksOverlay = ({ clearUrl = true } = {}) => {
    if (!STATE.isOpen) return;

    STATE.isOpen = false;
    worksOverlay.classList.remove("works-is-open");
    worksVideo.pause();
    worksVideo.removeAttribute("src");
    worksVideo.innerHTML = "";
    worksEmbed.src = "";

    window.setTimeout(() => {
      worksOverlay.hidden = true;
      unlockBodyScroll();
      if (STATE.lastFocus && typeof STATE.lastFocus.focus === "function") STATE.lastFocus.focus();
    }, 200);

    if (clearUrl) clearHash();
  };

  const goToNextProject = () => {
    STATE.projectIndex = (STATE.projectIndex + 1) % PROJECTS.length;
    STATE.imageIndex = 0;
    renderProject();
    updateHash(PROJECTS[STATE.projectIndex].id);
  };

  const goToPrevProject = () => {
    STATE.projectIndex = (STATE.projectIndex - 1 + PROJECTS.length) % PROJECTS.length;
    STATE.imageIndex = 0;
    renderProject();
    updateHash(PROJECTS[STATE.projectIndex].id);
  };

  const goToNextImage = () => {
    const project = PROJECTS[STATE.projectIndex];
    if (!project || project.images.length <= 1) return;
    STATE.imageIndex = (STATE.imageIndex + 1) % project.images.length;
    updateImage();
  };

  const goToPrevImage = () => {
    const project = PROJECTS[STATE.projectIndex];
    if (!project || project.images.length <= 1) return;
    STATE.imageIndex = (STATE.imageIndex - 1 + project.images.length) % project.images.length;
    updateImage();
  };

  const onOverlayKeydown = (event) => {
    if (!STATE.isOpen) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeWorksOverlay();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextProject();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevProject();
      return;
    }

    trapFocus(event);
  };

  const injectWorksOverlay = () => {
    const existingOverlay = document.querySelector(".works-overlay");
    if (!existingOverlay) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `
      <div class="works-overlay" hidden>
        <div class="works-backdrop" data-works-close="backdrop"></div>
        <section class="works-panel" role="dialog" aria-modal="true" aria-labelledby="works-dialog-title">
          <div class="works-topbar">
            <div class="works-brand">KAILEB</div>
            <button class="works-close" type="button" aria-label="Close works overlay">CLOSE</button>
          </div>

          <div class="works-heading-row">
            <h2 class="works-dialog-title" id="works-dialog-title"></h2>
            <div class="works-heading-static" aria-hidden="true">
              <span class="works-top-index"></span>
              <span class="works-overlay-title"></span>
              <span class="works-heading-project">PROJECT</span>
            </div>
          </div>

          <div class="works-grid">
            <article class="works-copy">
              <div class="works-tags" aria-label="Project categories"></div>
              <p class="works-overlay-meta"></p>
              <p class="works-overlay-desc"></p>
              <div class="works-actions">
                <div class="works-more-label">MORE PROJECTS</div>
                <a class="works-link" href="#contact">Contact <span aria-hidden="true">↗</span></a>
              </div>
              <div class="works-strip works-strip-bottom" aria-label="Project list"></div>
            </article>

            <article class="works-media-shell">
              <div class="works-media">
                <button class="works-media-nav works-media-prev" type="button" aria-label="Previous image">←</button>
                <div class="works-media-frame">
                  <img class="works-image" src="" alt="" loading="eager" decoding="async">
                  <video class="works-video" playsinline muted loop controls hidden></video>
                  <iframe
                    class="works-embed"
                    title="Prototype preview"
                    loading="lazy"
                    allowfullscreen
                    hidden
                  ></iframe>
                  <div class="works-pdf-view" hidden>
                    <div class="works-pdf-pages"></div>
                  </div>
                  <div class="works-image-fallback" role="status" aria-live="polite">Preview image unavailable.</div>
                </div>
                <button class="works-media-nav works-media-next" type="button" aria-label="Next image">→</button>
              </div>
            </article>
          </div>

          <div class="works-footer">
            <button class="works-project-nav works-project-prev" type="button">Prev Project</button>
            <div class="works-index" aria-live="polite"></div>
            <button class="works-project-nav works-project-next" type="button">Next Project</button>
          </div>
        </section>
      </div>`
      );
    }

    worksOverlay = document.querySelector(".works-overlay");
    worksPanel = document.querySelector(".works-panel");
    worksTitleNodes = Array.from(document.querySelectorAll(".works-overlay-title"));
    worksDialogTitle = document.querySelector(".works-dialog-title");
    worksMeta = document.querySelector(".works-overlay-meta");
    worksDesc = document.querySelector(".works-overlay-desc");
    worksTags = document.querySelector(".works-tags");
    worksImage = document.querySelector(".works-image");
    worksVideo = document.querySelector(".works-video");
    worksEmbed = document.querySelector(".works-embed");
    worksMediaFrame = document.querySelector(".works-media-frame");
    worksPdfView = document.querySelector(".works-pdf-view");
    worksPdfPages = document.querySelector(".works-pdf-pages");
    worksImageFallback = document.querySelector(".works-image-fallback");
    worksIndex = document.querySelector(".works-index");
    worksTopIndexNodes = Array.from(document.querySelectorAll(".works-top-index"));
    worksClose = document.querySelector(".works-close");
    worksProjectPrev = document.querySelector(".works-project-prev");
    worksProjectNext = document.querySelector(".works-project-next");
    worksMediaPrev = document.querySelector(".works-media-prev");
    worksMediaNext = document.querySelector(".works-media-next");
    worksLink = document.querySelector(".works-link");
    worksStrip = document.querySelector(".works-strip");
    worksMoreLabel = document.querySelector(".works-more-label");
    worksHeadingProjectNodes = Array.from(document.querySelectorAll(".works-heading-project"));

    worksImage.addEventListener("error", () => {
      if (STATE.previewMode === "image" && worksImage.getAttribute("src")) {
        worksImageFallback.classList.add("works-is-visible");
      }
    });

    worksImage.addEventListener("load", () => {
      if (STATE.previewMode === "image") {
        worksImageFallback.classList.remove("works-is-visible");
      }
    });
    worksVideo.addEventListener("loadeddata", () => {
      if (STATE.previewMode === "video") {
        worksImageFallback.classList.remove("works-is-visible");
      }
      if (worksVideo.currentTime === 0) {
        try {
          worksVideo.currentTime = 0.1;
        } catch (error) {
          /* ignore seek errors */
        }
      }
    });
    worksVideo.addEventListener("error", () => {
      if (STATE.previewMode === "video") {
        worksImageFallback.classList.add("works-is-visible");
      }
    });
    worksEmbed.addEventListener("load", () => {
      if (STATE.previewMode === "embed") {
        worksImageFallback.classList.remove("works-is-visible");
      }
    });

    worksClose.addEventListener("click", () => closeWorksOverlay());

    worksOverlay.addEventListener("click", (event) => {
      if (event.target.matches("[data-works-close='backdrop']")) {
        closeWorksOverlay();
        return;
      }

      const card = event.target.closest(".works-strip-card[data-project-id]");
      if (card) {
        const projectId = card.getAttribute("data-project-id");
        if (PROJECT_INDEX_BY_ID.has(projectId)) {
          openWorksOverlay(projectId);
        }
      }
    });

    worksProjectPrev.addEventListener("click", goToPrevProject);
    worksProjectNext.addEventListener("click", goToNextProject);
    worksMediaPrev.addEventListener("click", goToPrevImage);
    worksMediaNext.addEventListener("click", goToNextImage);

    document.addEventListener("keydown", onOverlayKeydown);
  };

  const init = () => {
    injectWorksOverlay();
    preloadFirstImages();
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-project-id]");
      if (!trigger || worksOverlay.contains(trigger)) return;
      const projectId = trigger.getAttribute("data-project-id");
      if (!PROJECT_INDEX_BY_ID.has(projectId)) return;
      event.preventDefault();
      openWorksOverlay(projectId);
    });

    window.addEventListener("hashchange", () => {
      const idFromHash = getProjectIdFromHash();
      if (idFromHash && PROJECT_INDEX_BY_ID.has(idFromHash)) {
        openWorksOverlay(idFromHash, { updateUrl: false });
      } else if (STATE.isOpen) {
        closeWorksOverlay({ clearUrl: false });
      }
    });

    const idFromInitialHash = getProjectIdFromHash();
    if (idFromInitialHash && PROJECT_INDEX_BY_ID.has(idFromInitialHash)) {
      openWorksOverlay(idFromInitialHash, { updateUrl: false });
    }

    window.openWorksOverlayById = (projectId) => {
      if (!PROJECT_INDEX_BY_ID.has(projectId)) return;
      openWorksOverlay(projectId);
    };
  };

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        try {
          init();
        } catch (error) {
          console.error("Works overlay failed to initialize:", error);
        }
      },
      { once: true }
    );
  } else {
    try {
      init();
    } catch (error) {
      console.error("Works overlay failed to initialize:", error);
    }
  }
})();
