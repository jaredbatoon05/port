/**
 * =========================================================================
 * JARED L. BATOON — PORTFOLIO APPLICATION LOGIC
 * =========================================================================
 * Electric Blue Theme Engine, Dynamic Content Rendering, Touch Slider,
 * Certificate Lightbox, and Mobile Navigation.
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeader();
  renderHero();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderContact();
  renderFooter();
  initMobileNav();
  initScrollSpy();
  initGalleryModal();
  initCertModal();
  initBackToTop();
});

/* ==========================================================================
   1. THEME ENGINE (Royal Blue Light / Electric Cyan Dark)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("jared_portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

  applyTheme(isDark);

  const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentlyDark = document.documentElement.classList.contains("dark");
      applyTheme(!currentlyDark);
    });
  });
}

function applyTheme(isDark) {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
    localStorage.setItem("jared_portfolio_theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("jared_portfolio_theme", "light");
  }
  updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
  const icons = document.querySelectorAll(".theme-icon-container");
  icons.forEach((el) => {
    el.innerHTML = isDark
      ? `
      <svg class="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`
      : `
      <svg class="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`;
  });
}

/* ==========================================================================
   2. HEADER & LOGO
   ========================================================================== */
function renderHeader() {
  const { shortName } = PORTFOLIO_DATA.personal;
  const brandName = document.getElementById("brand-name");
  if (brandName) brandName.textContent = shortName;
}

/* ==========================================================================
   3. HERO / ABOUT ME SECTION
   ========================================================================== */
function renderHero() {
  const { welcomeHeading, aboutHeading, bio, profileImage } =
    PORTFOLIO_DATA.personal;

  const profileImgEl = document.getElementById("hero-profile-img");
  const welcomeEl = document.getElementById("hero-welcome-badge");
  const introEl = document.getElementById("hero-intro-text");
  const aboutHeadingEl = document.getElementById("hero-about-heading");
  const summaryEl = document.getElementById("hero-summary-text");

  if (profileImgEl) {
    profileImgEl.src = profileImage;
    profileImgEl.alt = PORTFOLIO_DATA.personal.fullName;
  }

  if (welcomeEl) welcomeEl.textContent = welcomeHeading;
  if (introEl) introEl.textContent = bio.intro;
  if (aboutHeadingEl) aboutHeadingEl.textContent = aboutHeading;
  if (summaryEl) summaryEl.textContent = bio.summary;
}

/* ==========================================================================
   4. EDUCATION SECTION (Clean cards, no timeline circles or vertical lines)
   ========================================================================== */
function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education
    .map((edu) => {
      return `
      <div class="p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-cyan-500/20 bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-cyan-500/40 transition-colors">
        <!-- Section Header (Blue) -->
        <div class="flex items-center gap-2 flex-wrap mb-1.5">
          <span class="text-xs uppercase tracking-wider font-semibold text-blue-700 dark:text-cyan-400 bg-blue-100/70 dark:bg-cyan-500/10 px-2.5 py-0.5 rounded border border-blue-300/50 dark:border-cyan-500/20">
            ${edu.level}
          </span>
          ${edu.isCurrent ? `<span class="text-[11px] font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-500/15 px-2.5 py-0.5 rounded border border-cyan-500/30">Active Candidate</span>` : ""}
        </div>

        <!-- School Name (Bold) -->
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          ${edu.school}
        </h3>

        <!-- Address -->
        <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
          <svg class="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${edu.address}</span>
        </div>

        <!-- Course (If present) -->
        ${
          edu.course
            ? `<div class="mt-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                <span class="text-blue-600 dark:text-cyan-400 font-semibold">Course:</span> ${edu.course}
              </div>`
            : ""
        }

        <!-- Year Graduated (Italicized) -->
        <div class="text-xs text-slate-500 dark:text-slate-400 italic mt-1">
          ${edu.year}
        </div>
      </div>
    `;
    })
    .join("");
}

/* ==========================================================================
   5. SKILLS SECTION (Grid with blue left-border accent)
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const iconMap = {
    network: `
      <svg class="w-5 h-5 text-blue-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1.5"/>
        <rect x="16" y="2" width="6" height="6" rx="1.5"/>
        <rect x="9" y="16" width="6" height="6" rx="1.5"/>
        <path d="M5 8v3a2 2 0 002 2h10a2 2 0 002-2V8"/>
        <path d="M12 13v3"/>
      </svg>`,
    wrench: `
      <svg class="w-5 h-5 text-blue-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6" rx="1"/>
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
      </svg>`,
    code: `
      <svg class="w-5 h-5 text-blue-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>`,
    database: `
      <svg class="w-5 h-5 text-blue-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>`,
    terminal: `
      <svg class="w-5 h-5 text-blue-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>`,
    "file-text": `
      <svg class="w-5 h-5 text-blue-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.skills
    .map(
      (skill) => `
    <div class="group bg-white dark:bg-slate-900/90 rounded-r-lg rounded-l-none border border-slate-200/80 dark:border-slate-800/80 border-l-[3.5px] border-l-blue-600 dark:border-l-cyan-400 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]">
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-md bg-blue-50 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400">
            ${iconMap[skill.icon] || iconMap.network}
          </div>
          <h4 class="text-sm font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            ${skill.title}
          </h4>
        </div>
        ${
          skill.tag
            ? `<span class="text-[10px] font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded-full border border-blue-200/60 dark:border-cyan-500/20">
                ${skill.tag}
              </span>`
            : ""
        }
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        ${skill.description}
      </p>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   6. PROJECTS SECTION (Responsive grid with gallery triggers)
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects
    .map(
      (proj) => `
    <div class="group bg-white dark:bg-slate-900/90 rounded-xl overflow-hidden border border-slate-200/90 dark:border-cyan-500/25 transition-all duration-200 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(0,210,255,0.22)] flex flex-col">
      <!-- Thumbnail Image Placeholder / Preview -->
      <div class="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src="${proj.thumbnail}" 
          alt="${proj.title}" 
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-60"></div>
        
        <!-- Category Pill Badge -->
        <span class="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-blue-700 dark:text-cyan-400 border border-blue-300/40 dark:border-cyan-500/40 shadow-sm backdrop-blur-sm">
          ${proj.category}
        </span>

        <span class="absolute bottom-2.5 right-3 text-[11px] font-medium text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
          ${proj.gallery.length} Screenshots
        </span>
      </div>

      <!-- Card Body -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            ${proj.title}
          </h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            ${proj.description}
          </p>
        </div>

        <!-- Open Gallery Slider Link -->
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button 
            type="button" 
            class="open-gallery-btn text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 flex items-center gap-1 group/btn transition-colors focus:outline-none"
            data-project-id="${proj.id}"
          >
            <span>Open Gallery Slider</span>
            <span class="transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
          <span class="text-[11px] text-slate-400 font-mono">Interactive Showcase</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   7. CERTIFICATES SECTION (NO "Earned" tag as requested)
   ========================================================================== */
function renderCertificates() {
  const container = document.getElementById("certificates-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certificates
    .map(
      (cert) => `
    <div class="group bg-white dark:bg-slate-900/90 rounded-xl overflow-hidden border border-slate-200/90 dark:border-cyan-500/25 transition-all duration-200 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(0,210,255,0.22)] flex flex-col">
      <!-- Certificate Image Header (Click to inspect) -->
      <div class="relative w-full h-44 overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer view-cert-trigger" data-cert-id="${cert.id}">
        <img 
          src="${cert.image}" 
          alt="${cert.title}" 
          class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <span class="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            Inspect
          </span>
        </div>
      </div>

      <!-- Card Content (NO "Earned" tag) -->
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            ${cert.title}
          </h4>
          <p class="text-xs font-medium text-blue-600 dark:text-cyan-400 mt-1">
            ${cert.issuer}
          </p>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Issued: <span class="font-medium text-slate-700 dark:text-slate-300">${cert.date}</span>
          </p>
          ${
            cert.certId
              ? `<div class="mt-2 text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate">
                  Verification: ${cert.certId}
                </div>`
              : ""
          }
        </div>

        <!-- View Certificate link aligned to bottom right -->
        <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button 
            type="button" 
            class="view-cert-trigger text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 flex items-center gap-1.5 focus:outline-none transition-colors"
            data-cert-id="${cert.id}"
          >
            <span>View Certificate</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   8. CONTACT SECTION
   ========================================================================== */
function renderContact() {
  const { contacts } = PORTFOLIO_DATA.personal;

  const emailLink = document.getElementById("contact-email-link");
  const emailText = document.getElementById("contact-email-text");
  const phoneLink = document.getElementById("contact-phone-link");
  const phoneText = document.getElementById("contact-phone-text");
  const fbLink = document.getElementById("contact-fb-link");
  const msgLink = document.getElementById("contact-msg-link");
  const githubLink = document.getElementById("contact-github-link");
  const locationText = document.getElementById("contact-location-text");

  if (emailLink) emailLink.href = `mailto:${contacts.email}`;
  if (emailText) emailText.textContent = contacts.email;

  if (phoneLink) phoneLink.href = `tel:${contacts.phoneRaw || contacts.phone.replace(/[^0-9+]/g, "")}`;
  if (phoneText) phoneText.textContent = contacts.phone;

  if (fbLink) fbLink.href = contacts.facebook;
  if (msgLink) msgLink.href = contacts.messenger;
  if (githubLink) githubLink.href = contacts.github;
  if (locationText) locationText.textContent = contacts.location;

  // Clipboard copy email helper
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(contacts.email).then(() => {
        const copyNotice = document.getElementById("copy-notice");
        if (copyNotice) {
          copyNotice.classList.remove("opacity-0", "pointer-events-none");
          setTimeout(() => {
            copyNotice.classList.add("opacity-0", "pointer-events-none");
          }, 2000);
        }
      });
    });
  }
}

/* ==========================================================================
   9. FOOTER SECTION
   ========================================================================== */
function renderFooter() {
  const { copyright, tagline } = PORTFOLIO_DATA.footer;
  const copyrightEl = document.getElementById("footer-copyright");
  const taglineEl = document.getElementById("footer-tagline");

  if (copyrightEl) copyrightEl.textContent = copyright;
  if (taglineEl) taglineEl.textContent = tagline;
}

/* ==========================================================================
   10. MOBILE NAVIGATION & DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menuDrawer = document.getElementById("mobile-menu-drawer");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menuDrawer) return;

  const updateToggleIcon = (isOpen) => {
    toggleBtn.innerHTML = isOpen
      ? `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>`
      : `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
         </svg>`;
  };

  const toggle = () => {
    const isHidden = menuDrawer.classList.contains("hidden");
    if (isHidden) {
      menuDrawer.classList.remove("hidden");
      updateToggleIcon(true);
    } else {
      menuDrawer.classList.add("hidden");
      updateToggleIcon(false);
    }
  };

  toggleBtn.addEventListener("click", toggle);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuDrawer.classList.add("hidden");
      updateToggleIcon(false);
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !menuDrawer.classList.contains("hidden") &&
      !menuDrawer.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      menuDrawer.classList.add("hidden");
      updateToggleIcon(false);
    }
  });
}

/* ==========================================================================
   11. SCROLL SPY & SMOOTH NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav-link");

  window.addEventListener(
    "scroll",
    () => {
      let current = "";
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-blue-600", "dark:text-cyan-400", "font-bold");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("text-blue-600", "dark:text-cyan-400", "font-bold");
        }
      });
    },
    { passive: true }
  );
}

/* ==========================================================================
   12. INTERACTIVE PROJECT GALLERY SLIDER MODAL
   ========================================================================== */
let activeProject = null;
let currentSlideIndex = 0;

function initGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  const closeBtn = document.getElementById("gallery-close-btn");
  const prevBtn = document.getElementById("gallery-prev-btn");
  const nextBtn = document.getElementById("gallery-next-btn");

  if (!modal) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".open-gallery-btn");
    if (trigger) {
      const projId = trigger.dataset.projectId;
      const proj = PORTFOLIO_DATA.projects.find((p) => p.id === projId);
      if (proj && proj.gallery && proj.gallery.length > 0) {
        openGallery(proj);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeGallery);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeGallery();
  });

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden")) {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    }
  });

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  modal.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    },
    { passive: true }
  );
}

function openGallery(project) {
  activeProject = project;
  currentSlideIndex = 0;

  const modal = document.getElementById("gallery-modal");
  const titleEl = document.getElementById("gallery-modal-title");
  const categoryEl = document.getElementById("gallery-modal-category");

  if (titleEl) titleEl.textContent = project.title;
  if (categoryEl) categoryEl.textContent = project.category;

  renderSlide();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  const modal = document.getElementById("gallery-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function renderSlide() {
  if (!activeProject) return;
  const slide = activeProject.gallery[currentSlideIndex];
  const imgEl = document.getElementById("gallery-slide-img");
  const captionEl = document.getElementById("gallery-slide-caption");
  const counterEl = document.getElementById("gallery-slide-counter");
  const dotsContainer = document.getElementById("gallery-dots-container");

  if (imgEl) {
    imgEl.src = slide.url;
    imgEl.alt = slide.caption || activeProject.title;
  }
  if (captionEl) captionEl.textContent = slide.caption || "";
  if (counterEl) {
    counterEl.textContent = `${currentSlideIndex + 1} / ${activeProject.gallery.length}`;
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = activeProject.gallery
      .map(
        (_, idx) => `
      <button 
        type="button" 
        class="w-2.5 h-2.5 rounded-full transition-all ${
          idx === currentSlideIndex
            ? "bg-cyan-500 w-5"
            : "bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400"
        }"
        onclick="goToSlide(${idx})"
        aria-label="Go to slide ${idx + 1}"
      ></button>
    `
      )
      .join("");
  }
}

function prevSlide() {
  if (!activeProject) return;
  currentSlideIndex =
    (currentSlideIndex - 1 + activeProject.gallery.length) % activeProject.gallery.length;
  renderSlide();
}

function nextSlide() {
  if (!activeProject) return;
  currentSlideIndex = (currentSlideIndex + 1) % activeProject.gallery.length;
  renderSlide();
}

window.goToSlide = function (index) {
  currentSlideIndex = index;
  renderSlide();
};

/* ==========================================================================
   13. HIGH-RESOLUTION CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */
function initCertModal() {
  const modal = document.getElementById("cert-modal");
  const closeBtn = document.getElementById("cert-modal-close");

  if (!modal) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".view-cert-trigger");
    if (trigger) {
      const certId = trigger.dataset.certId;
      const cert = PORTFOLIO_DATA.certificates.find((c) => c.id === certId);
      if (cert) {
        openCertModal(cert);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeCertModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCertModal();
  });

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden") && e.key === "Escape") {
      closeCertModal();
    }
  });
}

function openCertModal(cert) {
  const modal = document.getElementById("cert-modal");
  const imgEl = document.getElementById("cert-modal-img");
  const titleEl = document.getElementById("cert-modal-title");
  const issuerEl = document.getElementById("cert-modal-issuer");
  const dateEl = document.getElementById("cert-modal-date");
  const idEl = document.getElementById("cert-modal-id");

  if (imgEl) {
    imgEl.src = cert.image;
    imgEl.alt = cert.title;
  }
  if (titleEl) titleEl.textContent = cert.title;
  if (issuerEl) issuerEl.textContent = cert.issuer;
  if (dateEl) dateEl.textContent = `Earned: ${cert.date}`;
  if (idEl) idEl.textContent = cert.certId ? `Verification ID: ${cert.certId}` : "";

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  const modal = document.getElementById("cert-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

/* ==========================================================================
   14. FLOATING BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 300) {
        btn.classList.remove("opacity-0", "pointer-events-none", "translate-y-3");
      } else {
        btn.classList.add("opacity-0", "pointer-events-none", "translate-y-3");
      }
    },
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
