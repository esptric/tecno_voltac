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
import { Button } from "@/components/ui";
import {
  COMPANY_MISSION,
  COMPANY_VISION,
  COMPANY_VALUES,
  COMPANY_STORY,
  COMPANY_INFO,
} from "@/lib/data";

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

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Sobre <span className="text-primary">Tecnovoltac</span>
            </h1>

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
              <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 shadow-2xl shadow-primary/30">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative text-white space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Shield className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Certificación</p>
                      <p className="text-2xl font-bold">RETIE</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-3xl font-bold">500+</p>
                      <p className="text-white/70 text-sm">Proyectos</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-3xl font-bold">10+</p>
                      <p className="text-white/70 text-sm">Años de experiencia</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-3xl font-bold">100%</p>
                      <p className="text-white/70 text-sm">Satisfacción</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-3xl font-bold">0</p>
                      <p className="text-white/70 text-sm">Accidentes</p>
                    </div>
                  </div>
                </div>
              </div>
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
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-xl border border-slate-100 dark:border-slate-700"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <Target className="w-7 h-7" aria-hidden="true" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Nuestra Misión
                </h2>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {COMPANY_MISSION}
                </p>
              </div>
            </motion.article>

            {/* Vision */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-xl border border-slate-100 dark:border-slate-700"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6">
                  <Eye className="w-7 h-7" aria-hidden="true" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Nuestra Visión
                </h2>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {COMPANY_VISION}
                </p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Lo que nos define
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Nuestros <span className="text-primary">Valores</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Estos principios guían cada proyecto y decisión que tomamos en
              Tecnovoltac.
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
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              ¿Quiere conocer a nuestro equipo?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Conozca a los profesionales certificados que hacen posible cada
              proyecto exitoso.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/equipo"
              rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              Conocer al Equipo
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
