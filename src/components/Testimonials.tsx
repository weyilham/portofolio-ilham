"use client";

import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, Building2, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Hendra Wijaya, Sp.Rad",
    role: "Kepala Instalasi Radiologi",
    company: "Rumah Sakit Utama Medika",
    content: "Pak Ilham Maulana sangat profesional dalam melakukan integrasi PACS Radiologi dan SIMRS kami. Pengiriman file DICOM menjadi sangat cepat dan stabil tanpa kompromi pada keamanan data pasien.",
    rating: 5,
    highlight: "Integrasi PACS & SIMRS Sempurna"
  },
  {
    name: "Rian Pratama, S.Kom",
    role: "Chief Technology Officer",
    company: "Nusa Digital Enterprise",
    content: "Bekerja sama dengan Pak Ilham untuk pengembangan web aplikasi dan RESTful API adalah pengalaman luar biasa. Kode yang bersih, arsitektur scalable, dan aplikasi berjalan sangat responsif.",
    rating: 5,
    highlight: "Arsitektur Scalable & Kilat"
  },
  {
    name: "Budi Santoso",
    role: "Managing Director",
    company: "Retail POS System Group",
    content: "Sistem aplikasi kasir dan inventory yang dibangun oleh Mas Ilham membantu meningkatkan kecepatan transaksi bisnis kami hingga 2.5 kali lipat. Sangat direkomendasikan!",
    rating: 5,
    highlight: "Meningkatkan Kecepatan Bisnis"
  }
];

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow Effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-purple-500/30 text-purple-400 text-sm font-semibold">
            <UserCheck className="w-4 h-4 text-pink-400" />
            <span>{t("testimonials.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("testimonials.title").split(" & ")[0]} <span className="gradient-text">& {t("testimonials.title").split(" & ")[1]}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => {
            const translatedName = t(`testimonials.items.${index}.name`);
            const translatedRole = t(`testimonials.items.${index}.role`);
            const translatedCompany = t(`testimonials.items.${index}.company`);
            const translatedContent = t(`testimonials.items.${index}.content`);
            const translatedHighlight = t(`testimonials.items.${index}.highlight`);

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.name}
                className="glass-card p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between border border-white/10 hover:border-purple-500/40 transition-all group"
              >
                <div className="space-y-4">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-purple-500/30 group-hover:text-purple-400/50 transition-colors" />
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold border border-purple-500/20">
                    {translatedHighlight}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{translatedContent}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md">
                    {translatedName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {translatedName}
                    </div>
                    <div className="text-xs text-slate-400">
                      {translatedRole} • <span className="text-indigo-400">{translatedCompany}</span>
                    </div>
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
