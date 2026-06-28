"use client";

import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { CheetahIcon } from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isEn = language === "en";
  const designPrefix = isEn ? "Designed with" : "Didesain dengan";
  const designSuffix = isEn ? "for the best UI/UX" : "untuk UI/UX terbaik";

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand with Cheetah Logo */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                <CheetahIcon className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Ilham<span className="gradient-text">Dev</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm">
              {t("footer.desc")}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
            <a href="#hero" className="hover:text-indigo-400 transition-colors">{t("navbar.home")}</a>
            <a href="#tech-stack" className="hover:text-indigo-400 transition-colors">{t("navbar.tech")}</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">{t("navbar.projects")}</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">{t("navbar.experience")}</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">{t("navbar.contact")}</a>
          </div>

          {/* Socials & Scroll Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/weyilham"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/weyilham/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all"
              aria-label={isEn ? "Back to Top" : "Kembali ke Atas"}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Ilham Maulana Portfolio. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>{designPrefix}</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline mx-0.5" />
            <span>{designSuffix}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
