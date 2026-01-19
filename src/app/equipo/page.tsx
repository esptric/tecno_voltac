import type { Metadata } from "next";
import { TeamPage } from "./team-page";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Tecnovoltac - Profesionales Certificados en Pereira",
  description:
    "Conozca al equipo técnico certificado de Tecnovoltac. Profesionales con experiencia en instalaciones eléctricas RETIE, gas y acabados en Pereira.",
  keywords:
    "equipo Tecnovoltac, técnicos certificados Pereira, electricistas RETIE, personal calificado, instaladores profesionales",
  openGraph: {
    title: "Nuestro Equipo Profesional | Tecnovoltac",
    description:
      "Equipo técnico certificado con experiencia en instalaciones eléctricas, gas y acabados. Profesionalismo garantizado.",
    type: "website",
    locale: "es_CO",
  },
};

export default function Page() {
  return <TeamPage />;
}
