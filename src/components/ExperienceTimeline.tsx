"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, History } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineItem {
  id: number;
  type: "work" | "education";
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "work",
    role: "IT Professional & Web Specialist",
    organization: "Healthcare & Tech Enterprise",
    period: "2022 - Sekarang",
    location: "Indonesia",
    description: "Mengelola administrasi Sistem Informasi Rumah Sakit (SIMRS), membangun integrasi API terpusat, serta melakukan konfigurasi dan pemeliharaan server PACS Radiologi untuk memastikan operasional medis dan bisnis berjalan cepat serta aman.",
    skills: ["SIMRS", "PACS Radiologi", "Integrasi API", "Next.js", "System Admin"]
  },
  {
    id: 2,
    type: "work",
    role: "Full-Stack Web Developer",
    organization: "Digital Solution Lab",
    period: "2020 - 2022",
    location: "Indonesia",
    description: "Mengembangkan aplikasi web modern, sistem kasir POS, serta membangun arsitektur RESTful API scalable untuk berbagai kebutuhan industri bisnis.",
    skills: ["React", "Node.js", "Laravel", "PostgreSQL", "REST APIs"]
  },
  {
    id: 3,
    type: "education",
    role: "Sarjana Komputer (S.Kom) - Teknik Informatika",
    organization: "Universitas Teknologi",
    period: "2016 - 2020",
    location: "Indonesia",
    description: "Lulus dengan fokus studi pada Rekayasa Perangkat Lunak, Jaringan Komputer, Algoritma Pemrograman, dan Sistem Basis Data.",
    skills: ["Software Engineering", "Network Systems", "Database Management", "UI/UX"]
  }
];

export default function ExperienceTimeline() {
  const { t, language } = useLanguage();
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-sm font-semibold">
            <History className="w-4 h-4" />
            <span>{t("experience.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("experience.title").split(" & ")[0]} <span className="gradient-text-cyan">& {t("experience.title").split(" & ")[1]}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 space-y-12">
          {timelineData.map((item, index) => {
            const isWork = item.type === "work";
            const Icon = isWork ? Briefcase : GraduationCap;
            
            const translatedRole = t(`experience.items.${index}.role`);
            const translatedOrg = t(`experience.items.${index}.org`);
            const translatedPeriod = t(`experience.items.${index}.period`);
            const translatedDesc = t(`experience.items.${index}.desc`);

            // Translate skill badges for item 1 if language is English
            let displaySkills = item.skills;
            if (item.id === 1 && language === "en") {
              displaySkills = ["HIS", "Radiology PACS", "API Integration", "Next.js", "System Admin"];
            }

            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.id}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline Icon Marker */}
                <div className={`absolute -left-[17px] top-1.5 p-2 rounded-full border shadow-xl transition-all duration-300 group-hover:scale-125 ${
                  isWork 
                    ? "bg-slate-900 border-indigo-500 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white" 
                    : "bg-slate-900 border-cyan-500 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left Period Badge for Desktop */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                  <span className="text-xs font-bold px-3 py-1 rounded-full glass-card text-slate-300 border-slate-700">
                    {translatedPeriod}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
                  
                  {/* Mobile Period Badge */}
                  <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{translatedPeriod}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {translatedRole}
                      </h3>
                      <p className="text-indigo-400 font-medium text-sm sm:text-base">
                        {translatedOrg}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {translatedDesc}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {displaySkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
