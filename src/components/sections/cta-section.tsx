"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { COMPANY_INFO } from "@/lib/data";

const benefits = [
  { icon: Shield, text: "Sin compromiso" },
  { icon: Clock, text: "Respuesta en 24h" },
  { icon: CheckCircle, text: "Cotización gratuita" },
];

export const CTASection = () => {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              ¿Listo para iniciar su proyecto?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Contáctenos hoy y reciba una cotización personalizada sin
              compromiso. Estamos aquí para hacer realidad su proyecto con
              seguridad y profesionalismo.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <benefit.icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              variant="secondary"
              size="lg"
              href="/contacto"
              rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
              className="bg-primary text-primary hover:bg-white/90 hover:text-primary"
            >
              Solicitar Cotización
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href={COMPANY_INFO.whatsappLink}
              leftIcon={<Phone className="w-5 h-5" aria-hidden="true" />}
            >
              Llamar Ahora
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-white/70 text-sm"
          >
            <p>
              <span className="font-medium text-white">{COMPANY_INFO.phone}</span>{" "}
              | {COMPANY_INFO.businessHours}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
