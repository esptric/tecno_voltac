export const COMPANY_INFO = {
  legalName: "Tecnovoltac",
  commercialName: "Tecnovoltac",
  nit: "1088313343",
  city: "Pereira",
  country: "Colombia",
  address: "Kilómetro 6 vía Armenia, entrada 4",
  phone: "+57 313 743 4658",
  whatsapp: "+57 313 743 4658",
  whatsappLink: "https://wa.me/573137434658",
  email: "tecnovoltac@gmail.com",
  businessHours: "Lunes a Viernes, 7:00 AM – 5:00 PM",
  certifications: ["RETIE (Reglamento Técnico de Instalaciones Eléctricas)"],
  serviceArea: "Pereira y zonas aledañas",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456!2d-75.7!3d4.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKil%C3%B3metro%206%20v%C3%ADa%20Armenia!5e0!3m2!1ses!2sco!4v1234567890",
} as const;

export const COMPANY_MISSION = `En Tecnovoltac, nuestra misión es proporcionar servicios técnicos de instalaciones eléctricas, gas y acabados de la más alta calidad, cumpliendo con todas las normativas vigentes y priorizando la seguridad de nuestros clientes. Nos comprometemos a ofrecer soluciones confiables, eficientes y personalizadas que superen las expectativas de hogares, comercios y empresas en Pereira y sus alrededores.`;

export const COMPANY_VISION = `Ser la empresa líder en servicios técnicos especializados en el Eje Cafetero, reconocida por nuestra excelencia, innovación y compromiso inquebrantable con la seguridad y satisfacción del cliente. Para 2030, aspiramos a expandir nuestras operaciones a nivel regional, manteniendo los más altos estándares de calidad y certificación.`;

export const COMPANY_VALUES = [
  {
    title: "Seguridad",
    description:
      "La seguridad es nuestra prioridad número uno. Cada proyecto se ejecuta siguiendo estrictos protocolos y normativas vigentes.",
    icon: "Shield",
  },
  {
    title: "Calidad",
    description:
      "Utilizamos materiales de primera calidad y técnicas certificadas para garantizar resultados duraderos y confiables.",
    icon: "Award",
  },
  {
    title: "Profesionalismo",
    description:
      "Nuestro equipo está capacitado y certificado, brindando un servicio técnico de excelencia en cada proyecto.",
    icon: "Briefcase",
  },
  {
    title: "Responsabilidad",
    description:
      "Cumplimos con los plazos acordados y respondemos por nuestro trabajo con garantía y soporte post-servicio.",
    icon: "CheckCircle",
  },
  {
    title: "Transparencia",
    description:
      "Ofrecemos cotizaciones claras y detalladas, sin costos ocultos ni sorpresas desagradables.",
    icon: "Eye",
  },
  {
    title: "Innovación",
    description:
      "Nos mantenemos actualizados con las últimas tecnologías y normativas del sector para ofrecer soluciones modernas.",
    icon: "Lightbulb",
  },
] as const;

export const COMPANY_STORY = `Tecnovoltac nació en Pereira con una visión clara: ofrecer servicios técnicos de calidad que cumplan con los más altos estándares de seguridad. Fundada por técnicos especializados con años de experiencia en el sector, nuestra empresa se ha consolidado como referente en instalaciones eléctricas certificadas RETIE, instalaciones de gas y obras de acabados.

Desde nuestros inicios, hemos trabajado incansablemente para ganarnos la confianza de familias, comercios y empresas de la región. Cada proyecto que emprendemos refleja nuestro compromiso con la excelencia y nuestra pasión por el trabajo bien hecho.

Hoy, Tecnovoltac cuenta con un equipo de profesionales certificados, equipos de última generación y un historial impecable de proyectos exitosos. Seguimos creciendo, pero nunca perdemos de vista lo que nos define: la seguridad, la calidad y la satisfacción total de nuestros clientes.`;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
