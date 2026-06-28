"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Sparkles, MessageSquare, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSent(false);
    setIsError(false);

    // Get free access key from https://web3forms.com/
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      // Fallback: mailto redirect so the email actually gets sent immediately without configuration
      const mailtoUrl = `mailto:dilhammaulanaa@gmail.com?subject=${encodeURIComponent(
        "Pesan Baru dari Portfolio - " + formState.name
      )}&body=${encodeURIComponent("Dari: " + formState.email + "\n\nPesan:\n" + formState.message)}`;
      
      window.location.href = mailtoUrl;
      setIsSent(true);
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: "Ilham Maulana Portfolio",
          subject: `Pesan Baru dari Portfolio: ${formState.name}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dilhammaulanaa@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pink-500/30 text-pink-400 text-sm font-semibold">
            <Mail className="w-4 h-4" />
            <span>{t("contact.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("contact.title").split(" ")[0]} <span className="gradient-text">{t("contact.title").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-5 sm:p-8 rounded-3xl space-y-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-pink-400" />
                <span>{t("contact.cardTitle")}</span>
              </h3>

              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</div>
                    <div className="text-white font-medium text-sm sm:text-base md:text-lg mt-0.5 break-all">dilhammaulanaa@gmail.com</div>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 mt-1 font-medium cursor-pointer"
                    >
                      {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? t("contact.copied") : t("contact.copyBtn")}</span>
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Telepon / WhatsApp</div>
                    <a 
                      href="https://wa.me/6287771525066" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white hover:text-indigo-400 font-medium text-base sm:text-lg mt-0.5 block transition-colors"
                    >
                      +62 877-7152-5066
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t("contact.location")}</div>
                    <div className="text-white font-medium text-base sm:text-lg mt-0.5">{t("contact.locationValue")}</div>
                  </div>
                </div>

              </div>

              {/* Response Time Notice */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>{t("contact.responseTime")}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">{t("contact.formTitle")}</h3>

              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>{t("contact.successMsg")}</span>
                </motion.div>
              )}

              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-sm flex items-center gap-2"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <span>{t("contact.errorMsg")}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">{t("contact.fieldName")}</label>
                  <input
                    type="text"
                    required
                    placeholder={t("contact.fieldNamePlaceholder")}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">{t("contact.fieldEmail")}</label>
                  <input
                    type="email"
                    required
                    placeholder="budi@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">{t("contact.fieldMessage")}</label>
                <textarea
                  rows={5}
                  required
                  placeholder={t("contact.fieldMessagePlaceholder")}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t("contact.btnSubmit")}</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
