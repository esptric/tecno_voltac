"use client";

import { User, Award, Briefcase } from "lucide-react";
import type { TeamMember } from "@/lib/data/team";

export interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all duration-300 hover:shadow-2xl border border-slate-100 dark:border-slate-700">
      {/* Header con gradiente */}
      <div className="relative h-32 bg-gradient-to-br from-primary via-primary/90 to-primary/70 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Avatar */}
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-800 group-hover:scale-105 transition-transform duration-300">
            <User
              className="w-10 h-10 text-slate-400 dark:text-slate-300"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="pt-14 pb-6 px-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-primary font-medium text-sm flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
              {member.role}
            </p>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {member.description}
        </p>

        {/* Especialidades */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Especialidades
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {member.specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        {member.certifications && member.certifications.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" aria-hidden="true" />
              Certificaciones
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {member.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default TeamCard;
