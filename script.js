/* Nidia Herrera — Centro de Estética */

const WHATSAPP_NUMBER = "573209507808";

const WHATSAPP_GENERIC =
  "¡Hola! Quiero agendar una cita en el Centro de Estética de Nidia Herrera 💆‍♀️";

function whatsappLink(servicio, duracion) {
  const mensaje = duracion
    ? `¡Hola! Vengo de la página web y quiero agendar: ${servicio} (${duracion}) — ¿tienen disponibilidad?`
    : `¡Hola! Vengo de la página web y quiero agendar: ${servicio} — ¿tienen disponibilidad?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

function formatPrice(price) {
  return `$${price.toLocaleString("es-CO")}`;
}

const serviceImages = {
  "Combo Glow": "images/combo-glow.png",
  "Facial Mantenimiento": "images/facial-mantenimiento.png",
  "Extensiones de pestañas": "images/extensiones-pestanas.png",
  "Drenaje linfático": "images/drenaje-linfatico.png",
  "Higiene de Espalda": "images/higiene-espalda.png",
  "Malaxación Colónica": "images/malaxacion-colonica.png",
  "Masaje Relajante": "images/masaje-relajante.png",
  "Moldeo Corporal": "images/moldeo-corporal.png",
  "Post Operatorios": "images/post-operatorios.png",
  "Maquillaje y peinado social": "images/maquillaje-peinado.png",
  "SPA Capilar": "images/spa-capilar.png",
  "SPA Corporal": "images/spa-corporal.png",
  "SPA Facial": "images/spa-facial.png",
  "SPA Manos y Pies": "images/spa-manos-pies.png",
};

const services = [
  // Belleza
  { categoria: "belleza", nombre: "Depilación con hilo en rostro", duracion: "30 min", precio: 50000 },
  { categoria: "belleza", nombre: "Depilación facial con cera x zona", duracion: "20 min", precio: 15000 },
  { categoria: "belleza", nombre: "Diseño de Cejas con hilo", duracion: "30 min", precio: 25000 },
  { categoria: "belleza", nombre: "Extensiones de pestañas", duracion: "120 min", precio: 120000, destacado: true, descripcion: "Mirada impactante con volumen natural y acabado impecable.", imagen: "images/extensiones-pestanas.png" },
  { categoria: "belleza", nombre: "Henna en cejas", duracion: "30 min", precio: 15000 },
  { categoria: "belleza", nombre: "Lifting Coreano de pestañas", duracion: "60 min", precio: 70000 },
  { categoria: "belleza", nombre: "Maquillaje Social", duracion: "60 min", precio: 50000 },
  { categoria: "belleza", nombre: "Peinado", duracion: "60 min", precio: 50000 },
  { categoria: "belleza", nombre: "Retoque de pestañas", duracion: "120 min", precio: 60000 },

  // Facial
  { categoria: "facial", nombre: "Facial Acné", duracion: "80 min", precio: 120000 },
  { categoria: "facial", nombre: "Facial Despigmentante", duracion: "90 min", precio: 140000 },
  { categoria: "facial", nombre: "Facial Hidratante", duracion: "60 min", precio: 70000 },
  { categoria: "facial", nombre: "Facial Microagujas Renovador celular", duracion: "90 min", precio: 140000 },
  { categoria: "facial", nombre: "Facial Porcelanización", duracion: "90 min", precio: 130000, destacado: true, descripcion: "Piel luminosa y uniforme con un tratamiento que deja un acabado porcelana irresistible." },
  { categoria: "facial", nombre: "Limpieza Facial", duracion: "60 min", precio: 120000 },

  // Corporal
  { categoria: "corporal", nombre: "Drenaje linfático", duracion: "90 min", precio: 150000, destacado: true, descripcion: "Técnica suave que activa tu circulación y te ayuda a sentirte más liviana y desinflamada." },
  { categoria: "corporal", nombre: "Higiene de Espalda", duracion: "120 min", precio: 150000, destacado: true, descripcion: "Exfoliación profunda y cuidado especializado para una espalda limpia y renovada." },
  { categoria: "corporal", nombre: "Malaxación Colónica", duracion: "45 min", precio: 80000, destacado: true, descripcion: "Masaje abdominal especializado que favorece tu bienestar digestivo de forma natural." },
  { categoria: "corporal", nombre: "Masaje Relajante", duracion: "60 min", precio: 120000, destacado: true, descripcion: "Libera tensiones acumuladas con movimientos envolventes en un ambiente de total calma." },
  { categoria: "corporal", nombre: "Moldeo Corporal", duracion: "90 min", precio: 130000, destacado: true, descripcion: "Tratamiento reductor y modelador para definir tu silueta con resultados visibles." },
  { categoria: "corporal", nombre: "Post Operatorios", duracion: "60 min", precio: 200000, destacado: true, descripcion: "Cuidado especializado post-cirugía para una recuperación más cómoda y armoniosa." },

  // SPA
  { categoria: "spa", nombre: "SPA Capilar", duracion: "90 min", precio: 140000, destacado: true, descripcion: "Nutrición profunda para tu cabello con aceites y mascaras de grado profesional." },
  { categoria: "spa", nombre: "SPA Corporal", duracion: "120 min", precio: 200000, destacado: true, descripcion: "Ritual completo de cuerpo: exfoliación, envoltura e hidratación en una sola experiencia." },
  { categoria: "spa", nombre: "SPA Facial", duracion: "90 min", precio: 150000, destacado: true, descripcion: "Experiencia sensorial que combina limpieza, masaje y nutrición para tu rostro." },
  { categoria: "spa", nombre: "SPA Manos y Pies", duracion: "90 min", precio: 80000, destacado: true, descripcion: "Cuidado integral de manos y pies con exfoliación, masaje y acabado impecable." },

  // Otros
  { categoria: "otros", nombre: "Asesoría y Venta de productos Skincare", duracion: "30 min", precio: 100000 },
  { categoria: "otros", nombre: "Electrocauterización", duracion: "30 min", precio: 80000 },
  { categoria: "otros", nombre: "Maquillaje y peinado social", duracion: "120 min", precio: 100000, destacado: true, descripcion: "Look completo para tu evento especial: maquillaje profesional y peinado a tu medida." },
];

const combos = [
  {
    categoria: "combos",
    nombre: "Combo Glow",
    incluye: "Diseño de Cejas + Facial Porcelanización + Extensiones de pestañas",
    duracion: "combo",
    precio: 160000,
    destacado: true,
    descripcion: "Cejas, piel luminosa y mirada impactante en un solo ritual.",
    imagen: "images/combo-glow.png",
  },
  {
    categoria: "combos",
    nombre: "Facial Mantenimiento",
    incluye: "Diseño de Cejas + Depilación facial + Facial Hidratante",
    duracion: "combo",
    precio: 120000,
    destacado: true,
    descripcion: "Tu rutina esencial de cuidado con precio especial.",
    imagen: "images/facial-mantenimiento.png",
  },
];

const categories = [
  { id: "belleza", label: "Belleza" },
  { id: "facial", label: "Facial" },
  { id: "corporal", label: "Corporal" },
  { id: "spa", label: "SPA" },
  { id: "otros", label: "Otros" },
  { id: "combos", label: "Combos" },
];

const categoryLabels = Object.fromEntries(categories.map((c) => [c.id, c.label]));

const featuredItems = [
  combos[0],
  combos[1],
  services.find((s) => s.nombre === "Extensiones de pestañas"),
];

const pageVideos = [
  {
    src: "videos/recargar-baterias.mp4",
    caption: "Recarga baterías",
  },
  {
    src: "videos/piel-emocion.mp4",
    caption: "Tu piel, tu emoción",
  },
  {
    src: "videos/extraordinario-maravilloso.mp4",
    caption: "Extraordinario",
  },
];

const galleryImages = [
  { src: "images/drenaje-linfatico.png", alt: "Drenaje linfático abdominal" },
  { src: "images/higiene-espalda.png", alt: "Higiene de espalda con exfoliación" },
  { src: "images/masaje-relajante.png", alt: "Masaje relajante de espalda" },
  { src: "images/spa-capilar.png", alt: "SPA capilar con aceites naturales" },
  { src: "images/maquillaje-peinado.png", alt: "Maquillaje social profesional" },
  { src: "images/spa-manos-pies.png", alt: "SPA de manos y pies" },
  { src: "images/moldeo-corporal.png", alt: "Moldeo corporal" },
  { src: "images/spa-corporal.png", alt: "SPA corporal con mascarilla" },
  { src: "images/malaxacion-colonica.png", alt: "Malaxación colónica" },
  { src: "images/post-operatorios.png", alt: "Cuidado post operatorio" },
];

const whatsappIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

function renderWhatsAppButton(nombre, duracion, compact) {
  const label = compact ? "Agendar" : "Agendar por WhatsApp";
  const sizeClass = compact ? " btn--whatsapp-sm" : "";
  return `<a href="${whatsappLink(nombre, duracion === "combo" ? null : duracion)}" class="btn btn--whatsapp${sizeClass}" target="_blank" rel="noopener noreferrer">${whatsappIcon}${label}</a>`;
}

function renderVideoFrame(video) {
  return `
    <article class="video-frame reveal">
      <div class="video-frame__media">
        <video muted loop playsinline preload="metadata" aria-label="${video.caption}">
          <source src="${video.src}" type="video/mp4">
        </video>
        <button class="video-frame__sound" type="button" aria-label="Activar sonido del video">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7M18 6a8 8 0 010 12"/></svg>
        </button>
      </div>
      <p class="video-frame__caption">${video.caption}</p>
    </article>
  `;
}

function renderPageVideos() {
  const container = document.getElementById("videos-grid");
  if (!container) return;
  container.innerHTML = pageVideos.map((video) => renderVideoFrame(video)).join("");
}

function renderFeaturedCards() {
  const container = document.getElementById("featured-grid");
  if (!container) return;

  container.innerHTML = featuredItems
    .map((item) => {
      const img = item.imagen || serviceImages[item.nombre] || "images/spa-facial.png";
      const cat = categoryLabels[item.categoria] || item.categoria;
      const desc = item.descripcion || "";
      const durationLabel = item.duracion === "combo" ? "Combo" : item.duracion;
      const incluye = item.incluye ? `<p class="featured-card__includes">${item.incluye}</p>` : "";

      return `
        <article class="featured-card reveal">
          <div class="featured-card__image">
            <img src="${img}" alt="${item.nombre}" loading="lazy">
          </div>
          <div class="featured-card__body">
            <div class="featured-card__top">
              <p class="featured-card__category">${cat}</p>
              <span class="featured-card__duration">${durationLabel}</span>
            </div>
            <h3 class="featured-card__name">${item.nombre}</h3>
            <p class="featured-card__desc">${desc}</p>
            ${incluye}
            <div class="featured-card__footer">
              <span class="featured-card__price">${formatPrice(item.precio)}</span>
              ${renderWhatsAppButton(item.nombre, item.duracion, true)}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCategoryTabs() {
  const container = document.getElementById("category-tabs");
  if (!container) return;

  container.innerHTML = categories
    .map(
      (cat, i) =>
        `<button class="category-tab${i === 0 ? " active" : ""}" data-category="${cat.id}" type="button">${cat.label}</button>`
    )
    .join("");
}

function renderServicePanels() {
  const container = document.getElementById("service-panels");
  if (!container) return;

  container.innerHTML = categories
    .map((cat, i) => {
      let rows = "";

      if (cat.id === "combos") {
        rows = combos
          .map(
            (combo) => `
          <div class="service-row combo-row reveal">
            <div class="service-row__info">
              <h4>${combo.nombre}</h4>
              <p class="service-row__includes">${combo.incluye}</p>
            </div>
            <div class="service-row__meta">
              <span>${formatPrice(combo.precio)}</span>
            </div>
            <div class="service-row__action">
              ${renderWhatsAppButton(combo.nombre, combo.duracion, true)}
            </div>
          </div>
        `
          )
          .join("");
      } else {
        rows = services
          .filter((s) => s.categoria === cat.id)
          .map(
            (s) => `
          <div class="service-row reveal">
            <div class="service-row__info">
              <h4>${s.nombre}</h4>
            </div>
            <div class="service-row__meta">
              <span>${s.duracion}</span>
              <span>${formatPrice(s.precio)}</span>
            </div>
            <div class="service-row__action">
              ${renderWhatsAppButton(s.nombre, s.duracion, true)}
            </div>
          </div>
        `
          )
          .join("");
      }

      return `<div class="service-panel${i === 0 ? " active" : ""}" data-panel="${cat.id}">${rows ? `<div class="service-list">${rows}</div>` : ""}</div>`;
    })
    .join("");
}

function renderGallery() {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  container.innerHTML = galleryImages
    .map(
      (img) => `
      <div class="gallery__item reveal">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
      </div>
    `
    )
    .join("");
}

function initCategoryTabs() {
  const tabs = document.querySelectorAll(".category-tab");
  const panels = document.querySelectorAll(".service-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === category);
      });

      const activePanel = document.querySelector(`.service-panel[data-panel="${category}"]`);
      if (activePanel && typeof gsap !== "undefined") {
        gsap.fromTo(
          activePanel.querySelectorAll(".service-row"),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }
        );
      }
    });
  });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    mobileNav.classList.toggle("open");
    document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      mobileNav.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initWhatsAppFloat() {
  const float = document.getElementById("whatsapp-float");
  if (!float) return;

  float.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GENERIC)}`;

  const showAfter = 400;

  const checkScroll = () => {
    if (window.scrollY > showAfter) {
      float.classList.add("visible");
    } else {
      float.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", checkScroll, { passive: true });
  checkScroll();
}

function initLenis() {
  if (typeof Lenis === "undefined") return null;

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}

function initAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero__tag", { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: "power2.out" });
  gsap.from(".hero__title", { opacity: 0, y: 30, duration: 0.9, delay: 0.35, ease: "power2.out" });
  gsap.from(".hero__subtitle", { opacity: 0, y: 24, duration: 0.8, delay: 0.5, ease: "power2.out" });
  gsap.from(".hero__actions", { opacity: 0, y: 20, duration: 0.7, delay: 0.65, ease: "power2.out" });

  gsap.to(".hero__bg img", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function initVideos() {
  const frames = document.querySelectorAll(".video-frame");

  frames.forEach((frame) => {
    const video = frame.querySelector("video");
    const soundBtn = frame.querySelector(".video-frame__sound");
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(frame);

    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        soundBtn.classList.toggle("is-unmuted", !video.muted);
      });
    }
  });
}

function init() {
  renderFeaturedCards();
  renderPageVideos();
  renderCategoryTabs();
  renderServicePanels();
  renderGallery();
  initCategoryTabs();
  initMobileNav();
  initHeader();
  initWhatsAppFloat();
  initVideos();

  const genericLinks = document.querySelectorAll("[data-whatsapp-generic]");
  genericLinks.forEach((link) => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GENERIC)}`;
  });

  if (typeof gsap !== "undefined") {
    initLenis();
    initAnimations();
  }
}

document.addEventListener("DOMContentLoaded", init);
