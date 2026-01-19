export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  certifications?: string[];
}

export const SERVICES: Service[] = [
  {
    id: "instalaciones-electricas",
    title: "Instalaciones Eléctricas",
    shortDescription:
      "Instalaciones eléctricas residenciales, comerciales e industriales con certificación RETIE, garantizando seguridad y cumplimiento normativo.",
    fullDescription:
      "Realizamos instalaciones eléctricas completas con certificación RETIE (Reglamento Técnico de Instalaciones Eléctricas), cumpliendo con todas las normativas colombianas vigentes. Nuestro equipo de electricistas certificados garantiza instalaciones seguras, eficientes y de larga duración para hogares, comercios y empresas en Pereira y alrededores.",
    icon: "Zap",
    features: [
      "Instalaciones eléctricas residenciales completas",
      "Instalaciones comerciales e industriales",
      "Certificación RETIE incluida",
      "Diseño de planos eléctricos",
      "Instalación de tableros y breakers",
      "Puesta a tierra y sistemas de protección",
      "Iluminación interior y exterior",
      "Instalación de tomacorrientes y puntos eléctricos",
    ],
    benefits: [
      "Certificación oficial RETIE para su tranquilidad",
      "Cumplimiento total de normativas vigentes",
      "Materiales de primera calidad con garantía",
      "Personal técnico certificado y capacitado",
      "Asesoría técnica gratuita",
      "Garantía extendida en todos nuestros trabajos",
    ],
    certifications: ["RETIE"],
  },
  {
    id: "instalaciones-gas",
    title: "Instalaciones de Gas",
    shortDescription:
      "Instalaciones de gas natural y GLP para hogares y negocios, cumpliendo con todas las normas de seguridad vigentes.",
    fullDescription:
      "Ofrecemos servicios completos de instalación de redes de gas natural y GLP, siguiendo estrictamente las normas técnicas colombianas. Nuestros técnicos certificados realizan instalaciones seguras para cocinas, calentadores, secadoras y equipos industriales, garantizando la tranquilidad de su familia o negocio.",
    icon: "Flame",
    features: [
      "Instalación de redes de gas natural",
      "Instalación de sistemas GLP",
      "Conexión de gasodomésticos",
      "Instalación de calentadores de agua",
      "Redes para cocinas industriales",
      "Pruebas de hermeticidad",
      "Mantenimiento preventivo",
      "Detección y reparación de fugas",
    ],
    benefits: [
      "Cumplimiento de normas NTC vigentes",
      "Técnicos certificados en instalaciones de gas",
      "Pruebas de seguridad incluidas",
      "Materiales certificados y de calidad",
      "Atención de emergencias",
      "Garantía en todas las instalaciones",
    ],
  },
  {
    id: "obra-blanca-acabados",
    title: "Drywall, Obra Blanca y Acabados",
    shortDescription:
      "Trabajos de drywall, cielos rasos, divisiones, estuco, pintura y acabados de alta calidad para transformar sus espacios.",
    fullDescription:
      "Transformamos sus espacios con trabajos de obra blanca y acabados de primera calidad. Desde instalación de drywall y cielos rasos hasta estuco, pintura y acabados finos, nuestro equipo de expertos convierte sus ideas en realidad con precisión y atención al detalle.",
    icon: "Paintbrush",
    features: [
      "Instalación de drywall y superboard",
      "Cielos rasos y falsos techos",
      "Divisiones y muros divisorios",
      "Estuco y preparación de superficies",
      "Pintura interior y exterior",
      "Acabados en madera y enchapes",
      "Molduras y detalles decorativos",
      "Remodelaciones integrales",
    ],
    benefits: [
      "Acabados de alta calidad y durabilidad",
      "Personal especializado en acabados finos",
      "Cumplimiento de tiempos de entrega",
      "Limpieza total al finalizar cada proyecto",
      "Asesoría en diseño y materiales",
      "Presupuestos detallados sin compromiso",
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return SERVICES.find((service) => service.id === id);
};

export const getServiceByTitle = (title: string): Service | undefined => {
  return SERVICES.find(
    (service) => service.title.toLowerCase() === title.toLowerCase()
  );
};
