"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Paintbrush, Sparkles, CheckCircle2, Cpu } from "lucide-react";
import CircuitBackground from "@/components/CircuitBackground";
import { NextjsIcon, ReactIcon, LaravelIcon, CodeIgniterIcon, TailwindIcon, BootstrapIcon, MysqlIcon, PostgresIcon } from "@/components/TechIcons";
import { useLanguage } from "@/context/LanguageContext";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "styling";
  level: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  highlight?: string;
}

const technologies: TechItem[] = [
  // Frontend
  { name: "Next.js", category: "frontend", level: "Expert", icon: NextjsIcon, desc: "Server-Side Rendering, App Router & API Routes untuk aplikasi web ultra cepat.", highlight: "Framework Utama" },
  { name: "React.js", category: "frontend", level: "Expert", icon: ReactIcon, desc: "Component-based UI, Hooks & State Management untuk antarmuka interaktif.", highlight: "Library UI Core" },

  // Backend
  { name: "Laravel", category: "backend", level: "Expert", icon: LaravelIcon, desc: "Eloquent ORM, Authentication, Queue Jobs & RESTful API untuk backend yang kokoh.", highlight: "Backend Favorit" },
  { name: "CodeIgniter", category: "backend", level: "Advanced", icon: CodeIgniterIcon, desc: "Framework PHP ringan & cepat untuk aplikasi web skala menengah yang efisien.", highlight: "Lightweight PHP" },

  // Styling & UI
  { name: "Tailwind CSS", category: "styling", level: "Expert", icon: TailwindIcon, desc: "Utility-first CSS framework untuk desain modern, responsif & konsisten.", highlight: "Modern Styling" },
  { name: "Bootstrap", category: "styling", level: "Expert", icon: BootstrapIcon, desc: "Component library terpopuler untuk rapid prototyping & responsive grid system.", highlight: "Rapid UI Dev" },

  // Database
  { name: "PostgreSQL", category: "database", level: "Advanced", icon: PostgresIcon, desc: "Database relasional powerful untuk data kompleks, indexing & query optimization.", highlight: "Enterprise DB" },
  { name: "MySQL", category: "database", level: "Expert", icon: MysqlIcon, desc: "Database andalan untuk aplikasi web, SIMRS & sistem informasi skala produksi.", highlight: "Production DB" },
];

const categories = [
  { id: "all", label: "Semua Senjata", icon: Sparkles },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Server },
  { id: "styling", label: "Styling & UI", icon: Paintbrush },
  { id: "database", label: "Database", icon: Database },
];

export default function TechStack() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const filteredTech = activeTab === "all" 
    ? technologies 
    : technologies.filter(item => item.category === activeTab);

  // Helper to map tech name to translation keys
  const getTechTranslationKey = (name: string) => {
    switch (name) {
      case "Next.js": return "nextjs";
      case "React.js": return "react";
      case "Laravel": return "laravel";
      case "CodeIgniter": return "codeigniter";
      case "Tailwind CSS": return "tailwind";
      case "Bootstrap": return "bootstrap";
      case "PostgreSQL": return "postgres";
      case "MySQL": return "mysql";
      default: return "";
    }
  };

  const getHighlight = (name: string, lang: string) => {
    const isEn = lang === "en";
    switch (name) {
      case "Next.js": return isEn ? "Main Framework" : "Framework Utama";
      case "React.js": return isEn ? "Core UI Library" : "Library UI Core";
      case "Laravel": return isEn ? "Favorite Backend" : "Backend Favorit";
      case "CodeIgniter": return isEn ? "Lightweight PHP" : "Lightweight PHP";
      case "Tailwind CSS": return isEn ? "Modern Styling" : "Modern Styling";
      case "Bootstrap": return isEn ? "Rapid UI Dev" : "Rapid UI Dev";
      case "PostgreSQL": return isEn ? "Enterprise DB" : "Enterprise DB";
      case "MySQL": return isEn ? "Production DB" : "Production DB";
      default: return "";
    }
  };

  const categoriesMapped = [
    { id: "all", label: t("techStack.categories.all"), icon: Sparkles },
    { id: "frontend", label: t("techStack.categories.frontend"), icon: Code },
    { id: "backend", label: t("techStack.categories.backend"), icon: Server },
    { id: "styling", label: t("techStack.categories.styling"), icon: Paintbrush },
    { id: "database", label: t("techStack.categories.database"), icon: Database },
  ];

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Animated Circuit Board Background */}
      <CircuitBackground />

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-sm font-semibold">
            <Cpu className="w-4 h-4" />
            <span>{t("techStack.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("techStack.title").split(" Digital ")[0]} <span className="gradient-text">Digital {t("techStack.title").split(" Digital ")[1]}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("techStack.subtitle")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesMapped.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40 scale-105"
                    : "glass-card text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-indigo-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filteredTech.map((tech, index) => {
            const translationKey = getTechTranslationKey(tech.name);
            const translatedDesc = translationKey ? t(`techStack.items.${translationKey}`) : tech.desc;
            const highlightText = getHighlight(tech.name, language);
            
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                key={tech.name}
                className="glass-card p-6 rounded-2xl relative group flex flex-col justify-between overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/0 group-hover:bg-indigo-500/10 rounded-full blur-[40px] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-800/60 border border-white/5 group-hover:scale-110 group-hover:bg-slate-800/90 transition-all duration-300">
                      <tech.icon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {tech.level}
                      </span>
                      {highlightText && (
                        <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                          {highlightText}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {translatedDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-emerald-400 font-medium relative z-10">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t("techStack.ready")}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Tech Ecosystem Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{t("techStack.supporting")}</span>
          {["Git", "Docker", "Postman", "Figma", "VS Code", "Linux Server", "cPanel", "REST API"].map((tool) => (
            <span key={tool} className="text-[11px] px-3 py-1 rounded-lg bg-slate-900/80 text-slate-400 border border-white/5 font-mono font-medium hover:text-indigo-300 hover:border-indigo-500/20 transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
