"use client";

import { motion } from "framer-motion";
import { 
  Zap, ShieldCheck, Activity, TrendingUp, Sparkles, CheckCircle,
  Clock, Users, Headphones, Layers, Cpu, Globe, FileCheck, Gauge
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const valueProps = [
  {
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
    glowColor: "group-hover:shadow-amber-500/10",
    title: "Aplikasi Kilat & Ultra Responsive",
    desc: "Dibangun dengan Next.js modern dan arsitektur bersih. Menjamin waktu muat di bawah 1 detik dan pengalaman pengguna tanpa hambatan.",
    badges: ["Next.js 15", "Sub-Second Load", "Zero Lag"],
    stat: { value: "<1s", label: "Load Time" }
  },
  {
    icon: Activity,
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
    glowColor: "group-hover:shadow-cyan-500/10",
    title: "Spesialis SIMRS & PACS Radiologi",
    desc: "Pengalaman nyata mengintegrasikan workflow medis, server DICOM/PACS radiologi, dan sistem administrasi rumah sakit skala besar.",
    badges: ["DICOM Streaming", "HL7 / FHIR", "Uptime 99.9%"],
    stat: { value: "99.9%", label: "Uptime" }
  },
  {
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    glowColor: "group-hover:shadow-emerald-500/10",
    title: "Integrasi API Aman & Enkripsi Ketat",
    desc: "Menghubungkan API antar sistem enterprise termasuk SatuSehat & BPJS dengan standar keamanan tinggi.",
    badges: ["End-to-End Security", "REST & WebSocket", "SatuSehat Ready"],
    stat: { value: "256bit", label: "Enkripsi" }
  },
  {
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
    glowColor: "group-hover:shadow-purple-500/10",
    title: "Orientasi Pada Hasil & ROI Bisnis",
    desc: "Setiap baris kode dirancang untuk efisiensi operasional dan hasil nyata bagi pertumbuhan bisnis Anda.",
    badges: ["High Efficiency", "Scalable Tech", "Business ROI"],
    stat: { value: "3x", label: "Efisiensi" }
  },
  {
    icon: Clock,
    color: "from-indigo-500 to-violet-500",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
    glowColor: "group-hover:shadow-indigo-500/10",
    title: "Delivery Tepat Waktu & On-Budget",
    desc: "Manajemen proyek terstruktur dengan sprint planning dan milestone yang jelas. Tidak ada keterlambatan atau overbudget.",
    badges: ["Agile Sprint", "Milestone Tracking", "On-Budget"],
    stat: { value: "100%", label: "On Time" }
  },
  {
    icon: Headphones,
    color: "from-rose-500 to-red-500",
    borderColor: "border-rose-500/20 hover:border-rose-500/40",
    glowColor: "group-hover:shadow-rose-500/10",
    title: "Support & Maintenance 24/7",
    desc: "Dukungan teknis berkelanjutan pasca-deployment. Bug fixing cepat, update rutin, dan monitoring performa real-time.",
    badges: ["24/7 Support", "Bug Fix <2h", "Live Monitoring"],
    stat: { value: "24/7", label: "Support" }
  },
  {
    icon: Layers,
    color: "from-sky-500 to-cyan-500",
    borderColor: "border-sky-500/20 hover:border-sky-500/40",
    glowColor: "group-hover:shadow-sky-500/10",
    title: "Arsitektur Scalable & Clean Code",
    desc: "Kode terstruktur rapi mengikuti best practices industri. Mudah di-maintain, di-scale, dan dikembangkan oleh tim manapun.",
    badges: ["Clean Architecture", "SOLID Principles", "Modular"],
    stat: { value: "A+", label: "Code Quality" }
  },
  {
    icon: Globe,
    color: "from-teal-500 to-green-500",
    borderColor: "border-teal-500/20 hover:border-teal-500/40",
    glowColor: "group-hover:shadow-teal-500/10",
    title: "SEO & Performa Web Optimal",
    desc: "Optimasi mesin pencari dan Core Web Vitals untuk peringkat Google terbaik. Aksesibilitas dan performa tanpa kompromi.",
    badges: ["Core Web Vitals", "SEO Optimized", "PWA Ready"],
    stat: { value: "100", label: "Lighthouse" }
  },
];

export default function ValueProposition() {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/80 border-y border-white/5">
      {/* Background Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>{t("valueProp.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("valueProp.title").split(" & ")[0]} <span className="gradient-text">& {t("valueProp.title").split(" & ")[1]}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t("valueProp.subtitle")}
          </p>
        </div>

        {/* Value Grid — responsive: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                key={index}
                className={`relative group p-5 sm:p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border ${item.borderColor} transition-all duration-500 hover:bg-slate-900/80 shadow-lg shadow-transparent ${item.glowColor} hover:shadow-2xl flex flex-col justify-between`}
              >
                {/* Top Row: Icon + Stat */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg sm:text-xl font-black text-white leading-none">
                        {item.stat.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                        {t(`valueProp.cards.${index}.statLabel`)}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {t(`valueProp.cards.${index}.title`)}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {t(`valueProp.cards.${index}.desc`)}
                  </p>
                </div>

                {/* Bottom Badges */}
                <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {item.badges.map((b) => (
                    <span key={b} className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-950/90 text-indigo-300 border border-indigo-500/15">
                      <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />
                      <span>{b}</span>
                    </span>
                  ))}
                </div>

                {/* Numbering */}
                <div className="absolute top-3 right-3 text-[10px] font-bold text-slate-600 font-mono">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl glass-card border border-white/10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Cpu, value: "50+", label: t("valueProp.stats.projects"), color: "text-indigo-400" },
              { icon: Users, value: "30+", label: t("valueProp.stats.clients"), color: "text-emerald-400" },
              { icon: Gauge, value: "99.9%", label: t("valueProp.stats.uptime"), color: "text-cyan-400" },
              { icon: FileCheck, value: "100%", label: t("valueProp.stats.delivery"), color: "text-amber-400" },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-2">
                  <StatIcon className={`w-6 h-6 mx-auto ${stat.color}`} />
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
