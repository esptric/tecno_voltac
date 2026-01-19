"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard, Button } from "@/components/ui";
import { SERVICES } from "@/lib/data";

export const ServicesPreview = () => {
  return (
    <section
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Soluciones técnicas{" "}
            <span className="text-primary">certificadas</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Ofrecemos servicios integrales de instalaciones eléctricas, gas y
            acabados, siempre cumpliendo con las normativas vigentes y
            priorizando su seguridad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} variant="compact" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/servicios">
            <Button
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              Ver todos los servicios
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
