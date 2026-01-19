import Link from "next/link";
import {
  Zap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Shield,
} from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SERVICES } from "@/lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4"
              aria-label="Tecnovoltac - Inicio"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-white">
                Tecno<span className="text-primary">voltac</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Servicios técnicos profesionales en instalaciones eléctricas
              certificadas RETIE, gas y acabados para hogares, comercios y
              empresas en Pereira y alrededores.
            </p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Certificados RETIE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios#${service.id}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                  aria-label="Ver ubicación en Google Maps"
                >
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{COMPANY_INFO.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                  aria-label={`Llamar a ${COMPANY_INFO.phone}`}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                  aria-label={`Enviar correo a ${COMPANY_INFO.email}`}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.businessHours}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>
              © {currentYear} {COMPANY_INFO.commercialName}. Todos los derechos
              reservados.
            </p>
            <p>
              NIT: {COMPANY_INFO.nit} | {COMPANY_INFO.city},{" "}
              {COMPANY_INFO.country}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
