import type { Metadata } from "next";
import { ServicesPage } from "./services-page";

export const metadata: Metadata = {
  title: "Servicios | Tecnovoltac - Instalaciones Eléctricas, Gas y Acabados en Pereira",
  description:
    "Servicios técnicos certificados: instalaciones eléctricas RETIE, gas natural y GLP, drywall, obra blanca y acabados. Calidad y seguridad en Pereira, Colombia.",
  keywords:
    "instalaciones eléctricas Pereira, certificación RETIE, instalaciones gas Pereira, drywall, obra blanca, acabados, Tecnovoltac",
  openGraph: {
    title: "Servicios Técnicos Certificados | Tecnovoltac",
    description:
      "Instalaciones eléctricas RETIE, gas y acabados profesionales en Pereira. Seguridad y calidad garantizada.",
    type: "website",
    locale: "es_CO",
  },
};

export default function Page() {
  return <ServicesPage />;
}
