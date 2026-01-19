"use client";

import { motion } from "framer-motion";
import { Shield, Phone, ArrowRight } from "lucide-react";
import { ServiceCard, Button } from "@/components/ui";
import { SERVICES, COMPANY_INFO } from "@/lib/data";

export const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" aria-hidden="true" />
              Servicios Certificados
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Ofrecemos soluciones técnicas integrales con certificación y
              garantía. Cada proyecto es ejecutado por profesionales capacitados
              que priorizan su seguridad y satisfacción.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/contacto"
                rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
              >
                Solicitar Cotización
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href={COMPANY_INFO.whatsappLink}
                leftIcon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} variant="full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              ¿Necesita alguno de nuestros servicios?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Contáctenos para una evaluación gratuita y cotización sin
              compromiso. Nuestro equipo está listo para ayudarle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/contacto"
              >
                Contactar Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`tel:${COMPANY_INFO.phone}`}
                leftIcon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {COMPANY_INFO.phone}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
