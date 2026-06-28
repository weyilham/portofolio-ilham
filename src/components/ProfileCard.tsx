"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Activity, Sparkles, CheckCircle2, Award, MapPin, Code2, Globe } from "lucide-react";
import ShinyText from "@/components/reactbits/ShinyText";
import CircularText from "@/components/reactbits/CircularText";
import { useLanguage } from "@/context/LanguageContext";

export default function ProfileCard() {
  const { t, language } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div className="relative flex items-center justify-center perspective-[1200px]">
      {/* Circular Text placed outside the card overflow */}
      <div className="hidden sm:block absolute -top-10 -left-10 z-30 pointer-events-none">
        <CircularText 
          text="ILHAM MAULANA • FULLSTACK DEV • "
          spinDuration={16}
          fontSize={12}
          radius={52}
        />
      </div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-[340px] rounded-[28px] group transform-gpu"
      >
        {/* ANIMATED BORDER: Dual beam conic gradients spinning in opposite directions */}
        <div className="absolute -inset-[1px] rounded-[28px] overflow-hidden z-0">
          {/* Beam 1: clockwise */}
          <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0_330deg,#818cf8_340deg,#c084fc_350deg,#f472b6_360deg)] animate-spin-beam opacity-80" />
          {/* Beam 2: counter-clockwise */}
          <div className="absolute inset-[-200%] bg-[conic-gradient(from_180deg,transparent_0_330deg,#38bdf8_340deg,#818cf8_350deg,#a855f7_360deg)] animate-spin-beam-reverse opacity-60" />
        </div>

        {/* Card Inner */}
        <div className="relative z-10 bg-[#080c18] rounded-[28px] p-4 sm:p-5 flex flex-col space-y-4">
          
          {/* Ambient Glows */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-600/25 rounded-full blur-[60px] pointer-events-none group-hover:bg-purple-500/30 transition-colors duration-700" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-pink-600/15 rounded-full blur-[60px] pointer-events-none" />

          {/* Photo Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[4/4.5] bg-slate-900 group-hover:border-indigo-500/30 transition-colors duration-500">
            <img
              src="/mypicture.png"
              alt="Ilham Maulana - Fullstack Developer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c18] via-[#080c18]/20 to-transparent pointer-events-none" />

            {/* Verified Badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-[#080c18]/85 backdrop-blur-sm text-emerald-400 border border-emerald-500/30 text-[10px] font-bold shadow-lg z-10">
              <ShieldCheck className="w-3 h-3" />
              <span>{t("profileCard.verified")}</span>
            </div>
 
            {/* Bottom Badges */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#080c18]/85 backdrop-blur-sm border border-white/10 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <ShinyText speed={3} className="text-emerald-400 font-bold text-[10px]">{t("profileCard.openToWork")}</ShinyText>
              </div>
 
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="p-1.5 rounded-xl bg-indigo-600/30 backdrop-blur-sm border border-indigo-400/30 text-white shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              </motion.div>
            </div>
          </div>
 
          {/* Profile Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-tight">
                  Ilham Maulana
                </h3>
                <p className="text-[11px] font-semibold gradient-text mt-0.5">
                  {t("profileCard.role")}
                </p>
              </div>
              <span className="text-[9px] font-mono px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold shrink-0 whitespace-nowrap">
                {t("profileCard.tagItPro")}
              </span>
            </div>
 
            {/* Compact Skill Badges */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { icon: Code2, label: language === "en" ? "HIS & PACS" : "SIMRS & PACS", color: "cyan" },
                { icon: Globe, label: language === "en" ? "Enterprise API" : "API Enterprise", color: "purple" },
                { icon: Activity, label: "Web Dev", color: "indigo" },
                { icon: Award, label: "SatuSehat", color: "pink" },
              ].map((skill) => (
                <div
                  key={skill.label}
                  className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-${skill.color}-500/5 border border-${skill.color}-500/15 text-${skill.color}-300 text-[10px] font-semibold`}
                >
                  <skill.icon className="w-3 h-3" />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
 
            {/* Footer Bar */}
            <div className="pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-400" />
                <span className="font-medium">Serang Banten, ID</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle2 className="w-3 h-3" />
                <span>{t("profileCard.readyForWork")}</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
