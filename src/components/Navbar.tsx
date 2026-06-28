"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, FolderGit2, Cpu, History, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Stylized premium cheetah icon
export function CheetahIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Cheetah ears */}
      <path d="M5.5 7.5L3.5 3l4.5 2.5" />
      <path d="M18.5 7.5l2-4.5-4.5 2.5" />
      {/* Head contour */}
      <path d="M8 5h8l3.5 5.5-3.5 8-4 2.5-4-2.5-3.5-5.5L8 5z" />
      {/* Eyes */}
      <path d="M7.5 10.5L9.5 11" />
      <path d="M16.5 10.5L14.5 11" />
      {/* Tear marks (Cheetah's signature feature) */}
      <path d="M9.5 11l.5 3.5-1.5 2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14.5 11l-.5 3.5 1.5 2" stroke="currentColor" strokeWidth="1.8" />
      {/* Nose/Muzzle */}
      <path d="M11 15h2l-1 1.5-1-1.5z" fill="currentColor" />
      {/* Cheetah spots */}
      <circle cx="8" cy="7.5" r="0.75" fill="currentColor" />
      <circle cx="16" cy="7.5" r="0.75" fill="currentColor" />
      <circle cx="12" cy="7" r="0.75" fill="currentColor" />
    </svg>
  );
}

const navItems = [
  { key: "home", href: "#hero", icon: Sparkles },
  { key: "tech", href: "#tech-stack", icon: Cpu },
  { key: "projects", href: "#projects", icon: FolderGit2 },
  { key: "experience", href: "#experience", icon: History },
  { key: "contact", href: "#contact", icon: Mail },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex items-center bg-slate-950/65 backdrop-blur-md p-0.5 rounded-full border border-white/10 shadow-lg select-none">
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={`relative px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
          language === "id"
            ? "text-white"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        ID
        {language === "id" && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-full -z-10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
          language === "en"
            ? "text-white"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        EN
        {language === "en" && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-full -z-10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Skip updating active section while manual smooth scroll is in progress
      if (isScrollingRef.current) return;

      // Robust active section detection using viewport bounding client rect
      const navOffset = 120;
      let currentSection = "hero";

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top has passed the threshold
          if (rect.top <= navOffset) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      isScrollingRef.current = true;
      setActiveSection(targetId);

      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      // Wait for smooth scroll to finish before unlocking section updates
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-header transition-all duration-300 ${
        scrolled ? "py-3 nav-header-scrolled" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Custom Cheetah Icon styled in Indigo/Purple theme */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-indigo-600/30">
            <CheetahIcon className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Ilham<span className="gradient-text">Dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 glass-card px-4 py-1.5 rounded-full border-white/10 shadow-lg shadow-black/35">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const Icon = item.icon;
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-indigo-400" : "text-slate-400"}`} />
                <span>{t("navbar." + item.key)}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Ultra Premium Glowing Action Button & Language Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle />
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden font-bold group cursor-pointer shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all duration-300"
          >
            {/* Moving glowing gradient border background */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full group-hover:scale-105 transition-transform duration-300" />
            
            {/* Shimmer/Shiny light overlay */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shiny pointer-events-none" />

            {/* Glowing back-shadow aura */}
            <span className="absolute inset-0 rounded-full bg-indigo-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            {/* Inner Content wrapper */}
            <span className="relative px-6 py-2.5 rounded-full bg-slate-950/90 text-white text-sm font-semibold flex items-center gap-2 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
              <Sparkles className="w-4 h-4 text-pink-400 group-hover:scale-125 transition-transform duration-300" />
              <span>{t("navbar.hireMe")}</span>
            </span>
          </motion.a>
        </div>

        {/* Mobile actions: Toggle + Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white border-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-b border-white/10 overflow-hidden mt-3"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                      isActive 
                        ? "bg-indigo-600/20 border-indigo-500/30 text-white" 
                        : "border-transparent text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-indigo-400" : "text-slate-400"}`} />
                    <span className="font-medium">{t("navbar." + item.key)}</span>
                  </a>
                );
              })}
              <div className="pt-2">
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center p-[1px] rounded-xl overflow-hidden font-bold cursor-pointer shadow-md"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500" />
                  <span className="relative w-full text-center py-3 rounded-[11px] bg-slate-950/90 text-white font-semibold flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    <span>{t("navbar.hireMe")}</span>
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
