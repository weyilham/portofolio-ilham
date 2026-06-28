"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import ShinyText from "@/components/reactbits/ShinyText";
import ProfileCard from "@/components/ProfileCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const [professionIndex, setProfessionIndex] = useState(0);

  const professions = language === "en" ? [
    "Fullstack Developer",
    "UI/UX Developer",
    "IT Professional",
    "HIS & PACS Specialist"
  ] : [
    "Fullstack Developer",
    "UI/UX Developer",
    "IT Professional",
    "SIMRS & PACS Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-36 overflow-hidden">
      {/* Ambient Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/25 rounded-full blur-[150px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-pink-600/20 rounded-full blur-[130px] pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293718_1px,transparent_1px),linear-gradient(to_bottom,#1f293718_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main Content area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left relative"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-950/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <ShinyText speed={3} className="text-emerald-300 font-semibold">
                {t("hero.available")}
              </ShinyText>
            </div>

            {/* Greeting Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-base sm:text-lg font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{t("hero.greeting")} <strong className="text-white text-lg sm:text-xl font-bold underline decoration-indigo-500 underline-offset-4">Ilham Maulana</strong></span>
              </div>
            </div>

            {/* Headline with Non-Wrapping Animated Profession Text */}
            <div className="pt-2">
              <h2 className="text-slate-400 text-xl sm:text-2xl font-semibold tracking-wide mb-1">
                {t("hero.prefix")}
              </h2>
              <div className="relative h-[55px] sm:h-[75px] md:h-[85px] overflow-hidden flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={professionIndex}
                    initial={{ y: 40, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -40, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`whitespace-nowrap font-black gradient-text tracking-tight drop-shadow-lg ${
                      professions[professionIndex].length > 20
                        ? "text-lg sm:text-3xl md:text-4xl lg:text-5xl"
                        : "text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
                    }`}
                  >
                    {professions[professionIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Subtitle with exact User Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t("hero.bio")}
            </p>

            {/* Key Expertise Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {["#Next.js", "#TypeScript", language === "en" ? "#HIS" : "#SIMRS", "#PACS_Radiologi", "#API_Integration"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-lg bg-slate-900/80 text-indigo-300 border border-indigo-500/20 font-mono font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-2xl shadow-indigo-600/40 hover:shadow-indigo-600/60 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
              >
                <span>{t("hero.actionPrimary")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full glass-card text-slate-200 hover:text-white font-semibold hover:bg-slate-800/90 transition-all duration-300 cursor-pointer border border-white/20 shadow-lg"
              >
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>{t("hero.actionSecondary")}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-800/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t("hero.contactDirectly")}</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/weyilham"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all cursor-pointer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/weyilham/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Ultra Modern Profile Card on the Right Side */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
}
