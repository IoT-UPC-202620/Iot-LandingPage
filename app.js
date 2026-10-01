// ── TRANSLATIONS (embedded for file:// protocol support) ──
const TRANSLATIONS = {
  es: {
    nav: { features: "Funciones", segments: "Para quién", how: "Cómo funciona", pricing: "Planes", team: "Equipo", cta: "Empieza gratis" },
    hero: { title1: "La gestión de tu", title2: "condominio", title3: "finalmente digital", subtitle: "Edifika reemplaza los chats de WhatsApp, las hojas de Excel y los recibos en papel con una plataforma centralizada para administradores y residentes.", cta_primary: "Solicitar demo gratis", cta_ghost: "Ver funciones →" },
    features: { label: "Funcionalidades", title: "Todo lo que necesita tu condominio", subtitle: "Tres módulos clave que reemplazan todas las herramientas dispersas que usas hoy.", payments: { tag: "Más popular", title: "Gestión de Pagos y Deudas", desc: "Consulta tu deuda en tiempo real, registra pagos con comprobante adjunto y olvídate de los cobros informales.", f1: "✓ Historial completo de pagos", f2: "✓ Carga de comprobantes digitales", f3: "✓ Reporte de morosos automático", f4: "✓ Pago en línea con Culqi", f5: "✓ Reportes financieros exportables" }, reservations: { title: "Reserva de Áreas Comunes", desc: "Calendario interactivo con disponibilidad en tiempo real. Sin conflictos, sin llamadas, sin papeles.", f1: "✓ Calendario de disponibilidad", f2: "✓ Reserva en 3 pasos", f3: "✓ Aprobación por el administrador", f4: "✓ Sin reservas duplicadas", f5: "✓ Notificaciones de confirmación" }, communications: { title: "Comunicados Oficiales", desc: "El administrador publica, todos reciben. Sin ruido, sin mensajes perdidos y con confirmación de lectura.", f1: "✓ Comunicados estructurados", f2: "✓ Seguimiento de visualizaciones", f3: "✓ Historial de comunicados", f4: "✓ Notificaciones push", f5: "✓ Canal comunitario moderado" } },
    how: { label: "Cómo funciona", title: "En 3 pasos, tu condominio digitalizado", step1: { number: "01", title: "Registra tu edificio", desc: "El administrador crea el perfil del edificio, agrega las unidades y vincula a cada residente con su departamento." }, step2: { number: "02", title: "Invita a tus residentes", desc: "Cada propietario e inquilino crea su cuenta vinculada a su unidad. Acceso inmediato a sus pagos, reservas y comunicados." }, step3: { number: "03", title: "Gestiona desde un solo lugar", desc: "Olvídate de WhatsApp y Excel. Toda la operación del condominio en tu smartphone, disponible 24/7." } },
    segments: { label: "Para quién es Edifika", title: "Diseñado para cada actor del condominio", admin: { title: "Administradores", desc: "Gestiona múltiples edificios desde un panel centralizado. Menos carga operativa, más transparencia.", b1: "Panel de control unificado", b2: "Control de morosos y cobranza", b3: "Reportes financieros en PDF", b4: "Publicación de comunicados", b5: "Aprobación de reservas", quote: "\"Antes usaba Excel y WhatsApp para todo. Ahora gestiono 15 edificios desde un solo lugar.\"", author: "— César, administrador" }, resident: { title: "Propietarios e Inquilinos", desc: "Consulta tu deuda, reserva áreas comunes y mantente informado sin depender del administrador.", b1: "Ver deuda actual en tiempo real", b2: "Pagar en línea con Culqi/Yape", b3: "Historial de pagos propio", b4: "Reservar áreas comunes", b5: "Recibir comunicados al instante", quote: "\"Ya no necesito ir a la oficina del administrador para saber cuánto debo. Todo lo veo en la app.\"", author: "— Andrea, propietaria" } },
    pricing: { label: "Planes", title: "Precios claros, sin sorpresas", subtitle: "Elige el plan que se adapta al tamaño de tu comunidad.", starter: { name: "Básico", price: "150", period: "/mes por edificio", desc: "Ideal para edificios pequeños que inician su digitalización.", f1: "✓ Hasta 20 unidades", f2: "✓ Gestión de pagos y deudas", f3: "✓ Comunicados oficiales", f4: "✓ Reserva de áreas comunes", f5: "✓ Soporte por correo", btn: "Comenzar" }, pro: { name: "Profesional", badge: "Más elegido", price: "300", period: "/mes por edificio", desc: "Para edificios medianos con mayor volumen de operaciones.", f1: "✓ Hasta 60 unidades", f2: "✓ Todo del plan Básico", f3: "✓ Reportes exportables en PDF", f4: "✓ Notificaciones push avanzadas", f5: "✓ Pago en línea con Culqi", f6: "✓ Soporte prioritario", btn: "Comenzar" }, enterprise: { name: "Empresa", price_label: "A medida", desc: "Para administradoras que gestionan múltiples edificios.", f1: "✓ Edificios ilimitados", f2: "✓ Todo del plan Profesional", f3: "✓ Panel multiEdificio", f4: "✓ API de integración", f5: "✓ Onboarding dedicado", f6: "✓ SLA garantizado", btn: "Contactar" } },
    team: { label: "¿Quiénes somos?", title: "Conoce a Condomia", subtitle: "Somos una startup tecnológica peruana que transforma la gestión de comunidades residenciales mediante soluciones digitales accesibles e intuitivas.", mission: "Nuestra Misión", mission_text: "Transformar la gestión de comunidades residenciales mediante soluciones digitales accesibles e intuitivas que centralicen los procesos administrativos, mejoren la comunicación y promuevan la transparencia entre administradores y residentes.", vision: "Nuestra Visión", vision_text: "Convertirnos en la plataforma de referencia para la gestión de condominios en Latinoamérica, siendo el aliado digital de cada comunidad residencial que busca operar con orden, transparencia y confianza.", team_label: "El equipo", team_title: "Construido por estudiantes de Ingeniería de Software", team_sub: "Universidad Peruana de Ciencias Aplicadas · Periodo 202610" },
    cta: { title: "¿Listo para digitalizar tu condominio?", subtitle: "Únete a las comunidades que ya gestionan sus edificios con Edifika. Sin complicaciones, sin contratos largos.", placeholder_name: "Tu nombre", placeholder_email: "Correo electrónico", placeholder_building: "Nombre del edificio o empresa", submit: "Solicitar demo gratuita", success: "¡Gracias! Nos pondremos en contacto contigo muy pronto.", note: "Sin compromisos · Respuesta en 24h" },
    footer: { brand: "Por Condomia · Lima, Perú · 2026", copyright: "© 2026 Condomia. Todos los derechos reservados. · Universidad Peruana de Ciencias Aplicadas", product: "Producto", company: "Empresa", segments_footer: "Segmentos" }
  },
  en: {
    nav: { features: "Features", segments: "For Whom", how: "How It Works", pricing: "Pricing", team: "Team", cta: "Start Free" },
    hero: { title1: "Your building", title2: "management", title3: "finally digital", subtitle: "Edifika replaces WhatsApp chats, Excel spreadsheets, and paper receipts with a centralized platform for administrators and residents.", cta_primary: "Request free demo", cta_ghost: "See features →" },
    features: { label: "Features", title: "Everything your condominium needs", subtitle: "Three key modules that replace all the scattered tools you use today.", payments: { tag: "Most popular", title: "Payment & Debt Management", desc: "Check your debt in real-time, record payments with attached proof, and forget about informal billing.", f1: "✓ Complete payment history", f2: "✓ Digital receipt uploads", f3: "✓ Automatic defaulter reports", f4: "✓ Online payment with Culqi", f5: "✓ Exportable financial reports" }, reservations: { title: "Common Area Reservations", desc: "Interactive calendar with real-time availability. No conflicts, no calls, no paperwork.", f1: "✓ Availability calendar", f2: "✓ Reserve in 3 steps", f3: "✓ Administrator approval", f4: "✓ No duplicate bookings", f5: "✓ Confirmation notifications" }, communications: { title: "Official Communications", desc: "Administrator publishes, everyone receives. No noise, no lost messages, and with read confirmation.", f1: "✓ Structured announcements", f2: "✓ View tracking", f3: "✓ Communication history", f4: "✓ Push notifications", f5: "✓ Moderated community channel" } },
    how: { label: "How It Works", title: "In 3 steps, your condominium digitalized", step1: { number: "01", title: "Register your building", desc: "The administrator creates the building profile, adds units, and links each resident to their unit." }, step2: { number: "02", title: "Invite your residents", desc: "Each owner and tenant creates their account linked to their unit. Immediate access to payments, reservations, and announcements." }, step3: { number: "03", title: "Manage from one place", desc: "Forget WhatsApp and Excel. All condominium operations on your smartphone, available 24/7." } },
    segments: { label: "Who is Edifika for?", title: "Designed for every condominium stakeholder", admin: { title: "Administrators", desc: "Manage multiple buildings from a centralized dashboard. Less operational burden, more transparency.", b1: "Unified control panel", b2: "Defaulter control and collection", b3: "PDF financial reports", b4: "Publish announcements", b5: "Approve reservations", quote: "\"I used to manage everything with Excel and WhatsApp. Now I manage 15 buildings from one place.\"", author: "— César, administrator" }, resident: { title: "Owners & Tenants", desc: "Check your debt, reserve common areas, and stay informed without depending on the administrator.", b1: "View current debt in real-time", b2: "Pay online with Culqi/Yape", b3: "Own payment history", b4: "Reserve common areas", b5: "Receive announcements instantly", quote: "\"I no longer need to visit the administrator's office to know how much I owe. I see everything in the app.\"", author: "— Andrea, owner" } },
    pricing: { label: "Pricing", title: "Clear pricing, no surprises", subtitle: "Choose the plan that fits your community's size.", starter: { name: "Basic", price: "150", period: "/month per building", desc: "Ideal for small buildings starting their digitalization.", f1: "✓ Up to 20 units", f2: "✓ Payment and debt management", f3: "✓ Official communications", f4: "✓ Common area reservations", f5: "✓ Email support", btn: "Get Started" }, pro: { name: "Professional", badge: "Most chosen", price: "300", period: "/month per building", desc: "For medium-sized buildings with higher transaction volumes.", f1: "✓ Up to 60 units", f2: "✓ Everything in Basic plan", f3: "✓ Exportable PDF reports", f4: "✓ Advanced push notifications", f5: "✓ Online payment with Culqi", f6: "✓ Priority support", btn: "Get Started" }, enterprise: { name: "Enterprise", price_label: "Custom", desc: "For property management companies handling multiple buildings.", f1: "✓ Unlimited buildings", f2: "✓ Everything in Professional plan", f3: "✓ Multi-building dashboard", f4: "✓ Integration API", f5: "✓ Dedicated onboarding", f6: "✓ Guaranteed SLA", btn: "Contact Us" } },
    team: { label: "Who are we?", title: "Meet Condomia", subtitle: "We are a Peruvian technology startup transforming residential community management through accessible and intuitive digital solutions.", mission: "Our Mission", mission_text: "Transform residential community management through accessible and intuitive digital solutions that centralize administrative processes, improve communication, and promote transparency between administrators and residents.", vision: "Our Vision", vision_text: "Become the leading platform for condominium management in Latin America, being the digital ally of every residential community seeking to operate with order, transparency, and trust.", team_label: "The team", team_title: "Built by Software Engineering Students", team_sub: "Peruvian University of Applied Sciences · Period 202610" },
    cta: { title: "Ready to digitalize your condominium?", subtitle: "Join communities already managing their buildings with Edifika. No complications, no long contracts.", placeholder_name: "Your name", placeholder_email: "Email address", placeholder_building: "Building or company name", submit: "Request free demo", success: "Thank you! We'll be in touch with you very soon.", note: "No credit card · No commitments · Response in 24h" },
    footer: { brand: "By Condomia · Lima, Peru · 2026", copyright: "© 2026 Condomia. All rights reserved. · Peruvian University of Applied Sciences", product: "Product", company: "Company", segments_footer: "Segments" }
  }
};

// ── MAIN ──
document.addEventListener('DOMContentLoaded', () => {

    const translations = TRANSLATIONS;

    let currentLang = localStorage.getItem('language') || 'es';
    let currentTheme = localStorage.getItem('theme') || 'light';

    // Get a translation value by dot-path key
    function t(key) {
      const keys = key.split('.');
      let value = translations[currentLang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    }

    // Apply all translations to the DOM
    function updateLanguage(lang) {
      currentLang = lang;

      // Hero title (has inner HTML structure)
      const heroTitle = document.getElementById('hero-title');
      if (heroTitle) {
        heroTitle.innerHTML = `${t('hero.title1')}<br /><span class="gradient-text">${t('hero.title2')}</span>,<br />${t('hero.title3')}`;
      }

      // All elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        if (el.id === 'hero-title') return; // already handled
        el.textContent = t(el.dataset.i18n);
      });

      // Input placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
      });

      document.documentElement.lang = lang;
      localStorage.setItem('language', lang);

      // Sync button active states
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    }

    // Apply theme
    function setTheme(theme) {
      currentTheme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);

      document.querySelectorAll('[data-theme-btn]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.themeBtn === theme);
      });
    }

    // ── Language buttons ──
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });

    // ── Theme buttons ──
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.addEventListener('click', () => setTheme(btn.dataset.themeBtn));
    });

    // ── Init ──
    updateLanguage(currentLang);
    setTheme(currentTheme);

    // ── Navbar scroll effect ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    // ── Hamburger menu ──
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.remove('open'));
      });
    }

    // ── Scroll reveal ──
    const reveals = document.querySelectorAll(
      '.feature-card, .step, .segment-card, .team-card, .pricing-card, .stat-big'
    );
    reveals.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // ── Active nav link highlight on scroll ──
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--primary)' : '';
      });
    });
});

// ── CTA form submit ──
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('cta-form').style.display = 'none';
  document.getElementById('cta-success').style.display = 'block';
}
