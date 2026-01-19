"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui";
import { COMPANY_INFO } from "@/lib/data";
import Lightning from '@/components/Lightning';

const features = [
  {
    icon: Shield,
    text: "Certificación RETIE",
  },
  {
    icon: Award,
    text: "Personal certificado",
  },
  {
    icon: Clock,
    text: "+10 años experiencia",
  },
];

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-900 dark:to-primary/10" />
      
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 mix-blend-screen pointer-events-none">
        <Lightning
          hue={210}
          xOffset={1.2}
          speed={0.5}
          intensity={0.4}
          size={0.9}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(to right, #1e3a5f 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Instalaciones Certificadas RETIE</span>
            </motion.div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
            >
              Servicios técnicos{" "}
              <span className="text-primary">profesionales</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 dark:text-slate-100 leading-relaxed mb-8 max-w-xl">
              Instalaciones eléctricas, gas y acabados con los más altos
              estándares de seguridad y calidad. Su tranquilidad es nuestra
              prioridad.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon
                      className="w-4 h-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
                WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 shadow-2xl shadow-primary/30">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                
                <div className="relative text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Shield className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Certificación</p>
                      <p className="text-2xl font-bold">RETIE</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-3xl font-bold">500+</p>
                      <p className="text-white/70 text-sm">Proyectos exitosos</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-3xl font-bold">100%</p>
                      <p className="text-white/70 text-sm">Clientes satisfechos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -right-6 z-20 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Garantía
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
                      Asegurada
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 -left-6 z-20 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Respuesta
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
                      24 horas
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
