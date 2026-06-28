"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FolderGit2, X, ShieldCheck, Star, Activity, Link2, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import ShinyText from "@/components/reactbits/ShinyText";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  id: string;
  title: string;
  category: "webapp" | "enterprise";
  description: string;
  longDescription: string;
  tags: string[];
  featured: boolean;
  image: string;
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "simrs-hospital",
    title: "SIMRS Hospital Core",
    category: "enterprise",
    description: "Sistem Informasi Manajemen Rumah Sakit terintegrasi dengan rekam medis elektronik (RME) dan modul billing.",
    longDescription: "Sistem manajemen core rumah sakit yang mengelola registrasi pasien, rekam medis elektronik, billing kasir, instalasi apotek, serta integrasi satu pintu untuk efisiensi workflow medis.",
    tags: ["Laravel", "Codeigniter", "MySQL", "Bootstrap"],
    featured: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Sesuai standar akreditasi RME Indonesia", "Memproses transaksi billing pasien secara real-time", "Arsitektur database handal & aman"]
  },
  {
    id: "pacs-radiology",
    title: "PACS Radiologi DICOM",
    category: "enterprise",
    description: "Server PACS untuk penyimpanan, transmisi, dan tampilan gambar medis standar DICOM radiologi.",
    longDescription: "Picture Archiving and Communication System (PACS) medis yang terintegrasi dengan alat radiologi (CR, CT-Scan, USG) untuk transmisi gambar medis DICOM dan sinkronisasi ke data rekam medis pasien.",
    tags: ["Next js", "PostgreSQL", "Tailwind", "React js"],
    featured: true,
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["DICOM viewer integrasi web/mobile", "Proses render gambar medis cepat", "Mendukung protokol HL7 & FHIR"]
  },
  {
    id: "bpjs-gateway",
    title: "Gateway API BPJS & SatuSehat",
    category: "enterprise",
    description: "Integrasi API menjembatani sistem lokal dengan layanan kementerian BPJS VClaim & SatuSehat.",
    longDescription: "Middleware integrasi API yang aman untuk sinkronisasi otomatis data rujukan, klaim BPJS VClaim, antrean online, hingga data kesehatan SatuSehat Kemenkes.",
    tags: ["Laravel", "MySQL", "React js", "Tailwind"],
    featured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Kepatuhan enkripsi data SatuSehat", "Auto-retry sync saat API kementerian down", "Dashboard monitoring request log"]
  },
  {
    id: "kasir-pos",
    title: "POS Kasir & Inventory",
    category: "webapp",
    description: "Sistem kasir penjualan modern dengan pelacakan stok inventaris otomatis dan laporan keuangan.",
    longDescription: "Aplikasi POS (Point of Sale) cloud dengan antarmuka kasir cepat, scan barcode, cetak struk otomatis, laporan laba rugi, dan manajemen multi-cabang toko.",
    tags: ["React js", "Laravel", "MySQL", "Bootstrap"],
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Desain UI/UX kasir responsif & ringkas", "Sinkronisasi stok barang real-time", "Laporan omset harian otomatis"]
  },
  {
    id: "crypto-ai",
    title: "AI Market Analytics",
    category: "webapp",
    description: "Dashboard visualisasi tren pasar keuangan dengan estimasi harga real-time berbasis data WebSocket.",
    longDescription: "Platform analitik finansial dengan visualisasi grafik interaktif, notifikasi tren harga cryptocurrency, serta pengolahan sentimen pasar global secara otomatis.",
    tags: ["Next js", "PostgreSQL", "Tailwind", "React js"],
    featured: false,
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Koneksi WebSocket stabil tanpa lag", "Chart visualisasi harga yang presisi", "Dukungan mode gelap bawaan"]
  },
  {
    id: "nexus-design",
    title: "Nexus UI Library",
    category: "webapp",
    description: "Kumpulan library komponen UI modern, accessible, dan modular untuk mempercepat pembuatan proyek web.",
    longDescription: "Paket reusable design system siap pakai dengan dukungan penuh navigasi keyboard, standar WAI-ARIA, serta optimasi performa rendering CSS tinggi.",
    tags: ["React js", "Tailwind", "Bootstrap"],
    featured: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["100+ komponen UI interaktif", "Konfigurasi tema instan & fleksibel", "Mendukung SSR & Next.js kompatibilitas"]
  }
];

const filterCategories = [
  { id: "all", label: "Semua Proyek" },
  { id: "webapp", label: "Web Apps" },
  { id: "enterprise", label: "Enterprise Systems" },
];

function getTagStyles(tag: string) {
  const normalized = tag.toLowerCase().replace(/\s+/g, "").replace(/\./g, "");
  switch (normalized) {
    case "nextjs":
      return "bg-zinc-900/80 text-zinc-100 border-zinc-700/60 shadow-sm";
    case "reactjs":
    case "react":
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/25 shadow-sm shadow-cyan-950/20";
    case "tailwind":
    case "tailwindcss":
      return "bg-sky-500/10 text-sky-300 border-sky-500/25 shadow-sm shadow-sky-950/20";
    case "postgresql":
    case "postgres":
      return "bg-indigo-500/10 text-indigo-300 border-indigo-500/25 shadow-sm shadow-indigo-950/20";
    case "laravel":
      return "bg-rose-500/10 text-rose-300 border-rose-500/25 shadow-sm shadow-rose-950/20";
    case "codeigniter":
      return "bg-orange-500/10 text-orange-300 border-orange-500/25 shadow-sm shadow-orange-950/20";
    case "bootstrap":
      return "bg-purple-500/10 text-purple-300 border-purple-500/25 shadow-sm shadow-purple-950/20";
    case "mysql":
      return "bg-blue-500/10 text-blue-300 border-blue-500/25 shadow-sm shadow-blue-950/20";
    default:
      return "bg-slate-900/60 text-slate-300 border-white/5";
  }
}

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectKey = (id: string) => {
    if (id === "simrs-hospital") return "simrs";
    if (id === "pacs-radiology") return "pacs";
    if (id === "bpjs-gateway") return "gateway";
    if (id === "kasir-pos") return "pos";
    if (id === "crypto-ai") return "crypto";
    if (id === "nexus-design") return "nexus";
    return "";
  };

  const filterCategoriesMapped = [
    { id: "all", label: t("projects.categories.all") },
    { id: "webapp", label: t("projects.categories.webapp") },
    { id: "enterprise", label: t("projects.categories.enterprise") },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-sm font-semibold">
            <FolderGit2 className="w-4 h-4 text-indigo-400 animate-pulse" />
            <ShinyText speed={4} className="text-indigo-300 font-semibold">{t("projects.badge")}</ShinyText>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("projects.title").split(" & ")[0]} <span className="gradient-text">& {t("projects.title").split(" & ")[1]}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2.5 mb-14 flex-wrap">
          {filterCategoriesMapped.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40 scale-105"
                    : "glass-card text-slate-400 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 3 columns layout for desktop */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const projectKey = getProjectKey(project.id);
              const translatedTitle = projectKey ? t(`projects.items.${projectKey}.title`) : project.title;
              const translatedDesc = projectKey ? t(`projects.items.${projectKey}.desc`) : project.description;
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 220, damping: 26 }}
                  key={project.id}
                  className="relative group rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-white/8 hover:border-indigo-500/30 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between"
                >
                  {/* 1px Thin Moving Border Line on Hover */}
                  <div className="absolute inset-0 rounded-3xl border border-indigo-500/0 group-hover:border-indigo-500/20 pointer-events-none transition-colors duration-500" />

                  <div>
                    {/* Banner Image */}
                    <div className="h-48 w-full relative overflow-hidden bg-slate-900 border-b border-white/5">
                      <img
                        src={project.image}
                        alt={translatedTitle}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      
                      {/* Shadow overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                      {/* Category and Featured Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-10">
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/20">
                          {project.category === "webapp" ? "WEB APP" : "ENTERPRISE"}
                        </span>
                        {project.featured && (
                          <span className="flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                            <Star className="w-2.5 h-2.5 fill-amber-300" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                        {translatedTitle}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {translatedDesc}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[9px] px-2 py-0.5 rounded-md border font-mono font-medium transition-colors ${getTagStyles(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 pb-5 pt-3 sm:px-6 sm:pb-6 flex items-center justify-between border-t border-slate-800/50 relative z-10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>{t("projects.btnCaseStudy")}</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        className="p-2 rounded-lg bg-slate-950/80 text-slate-400 hover:text-white border border-white/5 hover:border-indigo-500/20 transition-all cursor-pointer"
                        aria-label="Source Code"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.demoUrl}
                        className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const projectKey = getProjectKey(selectedProject.id);
          const translatedTitle = projectKey ? t(`projects.items.${projectKey}.title`) : selectedProject.title;
          const translatedLongDesc = projectKey ? t(`projects.items.${projectKey}.longDesc`) : selectedProject.longDescription;
          const translatedHighlights = projectKey ? t(`projects.items.${projectKey}.highlights`) : selectedProject.highlights;
          
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Dialog */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#080b14] rounded-[28px] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div className="pr-12 sm:pr-0">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {selectedProject.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-4 leading-tight">
                      {translatedTitle}
                    </h3>
                  </div>

                  {/* Banner Image in Modal */}
                  <div className="h-56 rounded-2xl overflow-hidden border border-white/10 relative">
                    <img
                      src={selectedProject.image}
                      alt={translatedTitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  </div>

                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {translatedLongDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-3 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                    <h4 className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">{t("projects.modal.highlights")}</h4>
                    <ul className="space-y-2">
                      {Array.isArray(translatedHighlights) && translatedHighlights.map((h: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Used */}
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase mb-3">{t("projects.modal.techUsed")}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2.5 py-1 rounded-md border font-mono transition-colors ${getTagStyles(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
                    <a
                      href={selectedProject.demoUrl}
                      className="w-full sm:flex-1 text-center py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                    >
                      {t("projects.modal.visitDemo")}
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{t("projects.modal.repository")}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
