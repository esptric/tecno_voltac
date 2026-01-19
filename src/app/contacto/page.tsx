import type { Metadata } from "next";
import { ContactPage } from "./contact-page";

export const metadata: Metadata = {
  title: "Contacto | Tecnovoltac - Cotización de Servicios Técnicos en Pereira",
  description:
    "Contáctenos para cotización de instalaciones eléctricas RETIE, gas y acabados en Pereira. Respuesta rápida vía WhatsApp, teléfono o correo.",
  keywords:
    "contacto Tecnovoltac, cotización instalaciones eléctricas Pereira, WhatsApp servicios técnicos, contactar electricista Pereira",
  openGraph: {
    title: "Contáctenos | Tecnovoltac",
    description:
      "Solicite su cotización gratuita. Instalaciones eléctricas, gas y acabados en Pereira. Respuesta en 24 horas.",
    type: "website",
    locale: "es_CO",
  },
};

export default function Page() {
  return <ContactPage />;
}
