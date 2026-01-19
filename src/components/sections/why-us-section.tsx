"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Certificación RETIE",
    description:
      "Todas nuestras instalaciones eléctricas cumplen con el Reglamento Técnico de Instalaciones Eléctricas, garantizando seguridad total.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Personal Certificado",
    description:
      "Nuestro equipo está capacitado y certificado por entidades reconocidas, asegurando trabajos de la más alta calidad.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Experiencia Comprobada",
    description:
      "Más de 500 proyectos exitosos en Pereira y alrededores respaldan nuestra trayectoria y compromiso.",
    color: "secondary",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description:
      "Respetamos los tiempos acordados y mantenemos comunicación constante durante todo el proyecto.",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "Garantía Total",
    description:
      "Respaldamos todos nuestros trabajos con garantía extendida y servicio post-venta.",
    color: "accent",
  },
  {
    icon: HeartHandshake,
    title: "Atención Personalizada",
    description:
      "Cada proyecto es único. Ofrecemos soluciones a medida según sus necesidades específicas.",
    color: "secondary",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
  },
};

export const WhyUsSection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-white dark:bg-slate-900"
      aria-labelledby="why-us-heading"
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2
            id="why-us-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Confíe en los <span className="text-primary">expertos</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            En Tecnovoltac combinamos experiencia, certificaciones y compromiso
            para ofrecerle el mejor servicio técnico de la región.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const colors = colorClasses[reason.color as keyof typeof colorClasses];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.text} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <reason.icon className="w-7 h-7" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {reason.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
