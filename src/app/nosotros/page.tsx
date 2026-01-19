import type { Metadata } from "next";
import { AboutPage } from "./about-page";

export const metadata: Metadata = {
  title: "Nosotros | Tecnovoltac - Empresa de Servicios Técnicos en Pereira",
  description:
    "Conozca a Tecnovoltac: empresa líder en servicios técnicos en Pereira. Nuestra misión, visión, valores y compromiso con la seguridad y calidad.",
  keywords:
    "Tecnovoltac, empresa servicios técnicos Pereira, instalaciones eléctricas RETIE, quiénes somos, historia",
  openGraph: {
    title: "Sobre Nosotros | Tecnovoltac",
    description:
      "Empresa líder en servicios técnicos certificados en Pereira, Colombia. Seguridad, calidad y profesionalismo.",
    type: "website",
    locale: "es_CO",
  },
};

export default function Page() {
  return <AboutPage />;
}
