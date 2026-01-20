"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Briefcase,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import {
  COMPANY_MISSION,
  COMPANY_VISION,
  COMPANY_VALUES,
  COMPANY_STORY,
} from "@/lib/data";
import { CTASection } from "@/components/sections";
import Image
  from "next/image";
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Award,
  Briefcase,
  CheckCircle,
  Eye,
  Lightbulb,
};

export const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" aria-hidden="true" />
              Nuestra Historia
            </span>

            <p className="text-lg text-slate-600 dark:text-slate-400">
              Somos una empresa comprometida con la excelencia en servicios
              técnicos, priorizando la seguridad, calidad y satisfacción de
              nuestros clientes en Pereira y alrededores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Nuestra <span className="text-primary">Historia</span>
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {COMPANY_STORY.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/img/hero/tc-history.png"
                alt="Historia de Tecnovoltac"
                width={700}
                height={700}
                className="rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 border border-slate-100 dark:border-slate-700"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-tl-full" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Nuestra Misión
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {COMPANY_MISSION}
                  </p>
                </div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                  <Target className="w-10 h-10" aria-hidden="true" />
                </div>
              </div>
            </motion.article>

            {/* Vision */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 border border-slate-100 dark:border-slate-700"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 dark:bg-primary/10 rounded-tl-full" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Nuestra Visión
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {COMPANY_VISION}
                  </p>
                </div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 dark:bg-primary/10 text-secondary dark:text-primary flex-shrink-0">
                  <Eye className="w-10 h-10" aria-hidden="true" />
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent dark:text-green-500 dark:bg-green-500/10 text-sm font-medium mb-4">
              Lo que nos define
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Nuestros <span className="text-primary">Valores</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Estos principios guían cada proyecto y decisión que tomamos en
              <span className="text-yellow-400 font-semibold"> TecnoVoltac</span>.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Shield;
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default AboutPage;
