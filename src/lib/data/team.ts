export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  specialties: string[];
  certifications?: string[];
  image?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "director-tecnico",
    name: "Director Técnico",
    role: "Dirección y Supervisión Técnica",
    description:
      "Profesional con amplia experiencia en dirección de proyectos técnicos, garantizando que cada trabajo cumpla con los más altos estándares de calidad y seguridad. Supervisa todas las operaciones y asegura el cumplimiento normativo.",
    specialties: [
      "Gestión de proyectos",
      "Supervisión técnica",
      "Normativas RETIE",
      "Control de calidad",
    ],
    certifications: ["RETIE", "Gestión de Proyectos"],
  },
  {
    id: "tecnico-electrico-1",
    name: "Técnico Electricista Senior",
    role: "Instalaciones Eléctricas",
    description:
      "Electricista certificado con más de 10 años de experiencia en instalaciones residenciales, comerciales e industriales. Especialista en sistemas de protección y puesta a tierra.",
    specialties: [
      "Instalaciones RETIE",
      "Sistemas de protección",
      "Tableros eléctricos",
      "Puesta a tierra",
    ],
    certifications: ["RETIE", "CONTE"],
  },
  {
    id: "tecnico-electrico-2",
    name: "Técnico Electricista",
    role: "Instalaciones Eléctricas",
    description:
      "Técnico electricista capacitado en las últimas normativas y tecnologías del sector. Especializado en instalaciones residenciales y sistemas de iluminación.",
    specialties: [
      "Instalaciones residenciales",
      "Sistemas de iluminación",
      "Cableado estructurado",
      "Automatización",
    ],
    certifications: ["RETIE"],
  },
  {
    id: "tecnico-gas",
    name: "Técnico en Gas",
    role: "Instalaciones de Gas",
    description:
      "Técnico certificado en instalaciones de gas natural y GLP. Experto en redes residenciales y comerciales, con énfasis en seguridad y cumplimiento de normas NTC.",
    specialties: [
      "Gas natural",
      "GLP",
      "Gasodomésticos",
      "Pruebas de hermeticidad",
    ],
    certifications: ["Técnico en Gas Certificado"],
  },
  {
    id: "maestro-obra",
    name: "Maestro de Obra",
    role: "Drywall y Acabados",
    description:
      "Maestro especializado en trabajos de drywall, cielos rasos y acabados finos. Años de experiencia transformando espacios con precisión y atención al detalle.",
    specialties: [
      "Drywall",
      "Cielos rasos",
      "Estuco",
      "Pintura profesional",
    ],
  },
  {
    id: "auxiliar-tecnico",
    name: "Auxiliar Técnico",
    role: "Soporte Técnico General",
    description:
      "Apoyo integral en todos los proyectos, asegurando la correcta ejecución de tareas y manteniendo los estándares de calidad y seguridad del equipo.",
    specialties: [
      "Asistencia técnica",
      "Logística",
      "Preparación de materiales",
      "Limpieza y orden",
    ],
  },
];

export const TEAM_HIGHLIGHTS = [
  {
    stat: "10+",
    label: "Años de experiencia combinada",
  },
  {
    stat: "100%",
    label: "Personal certificado",
  },
  {
    stat: "500+",
    label: "Proyectos completados",
  },
  {
    stat: "0",
    label: "Accidentes laborales",
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find((member) => member.id === id);
};
