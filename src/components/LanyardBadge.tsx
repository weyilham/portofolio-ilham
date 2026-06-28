"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Activity, QrCode } from "lucide-react";
import ShinyText from "@/components/reactbits/ShinyText";

export default function LanyardBadge() {
  return (
    <div className="relative flex flex-col items-center justify-start pointer-events-auto select-none group">
      
      {/* LANYARD FABRIC STRAP (Hanging down from top) */}
      <div className="w-4 h-16 sm:h-24 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-700 rounded-full shadow-lg relative flex items-center justify-center overflow-hidden border border-white/20">
        {/* Woven Fabric Texture Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:100%_4px]" />
        <div className="w-1 h-full bg-white/20" />
      </div>

      {/* METALLIC CLIP / RING */}
      <div className="relative z-20 flex flex-col items-center -mt-1">
        <div className="w-6 h-4 rounded-md bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border border-slate-300 shadow-md" />
        <div className="w-4 h-4 rounded-full border-2 border-slate-300 bg-transparent -mt-1" />
      </div>

      {/* 3D SWAYING ID CARD BADGE */}
      <motion.div
        initial={{ rotateZ: -4, rotateY: 8, y: -10 }}
        animate={{ 
          rotateZ: [ -3, 3, -3 ],
          rotateY: [ 6, -6, 6 ],
          y: [ 0, 8, 0 ]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.05, rotateZ: 0, rotateY: 0, y: -4 }}
        className="-mt-2 w-64 sm:w-72 glass-panel p-5 rounded-3xl border border-white/25 shadow-2xl shadow-indigo-950/80 backdrop-blur-2xl relative overflow-hidden transform-gpu"
      >
        {/* Top Metallic Lanyard Hole Grommet */}
        <div className="w-8 h-2.5 mx-auto -mt-2 mb-3 bg-slate-900 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-5 h-1 bg-slate-950 rounded-full" />
        </div>

        {/* Holographic Top Banner */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-300">
              DEVELOPER PASS
            </span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            VERIFIED
          </span>
        </div>

        {/* Avatar Photo & Info */}
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center font-black text-white text-xl shadow-xl border border-white/30">
              IM
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
              <Activity className="w-2.5 h-2.5 text-slate-950 animate-pulse" />
            </div>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-white leading-tight flex items-center gap-1">
              <span>Ilham Maulana</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            </h3>
            <p className="text-xs text-indigo-400 font-medium mt-0.5">
              Fullstack Developer
            </p>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">
              ID: <span className="text-slate-200">2026-IM-DEV</span>
            </div>
          </div>
        </div>

        {/* Core Expertise Badges */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 grid grid-cols-2 gap-1.5 text-[10px]">
          <div className="px-2 py-1 rounded-lg bg-slate-900/90 border border-white/5 text-slate-300 text-center font-semibold">
            💻 Web Apps
          </div>
          <div className="px-2 py-1 rounded-lg bg-slate-900/90 border border-white/5 text-slate-300 text-center font-semibold">
            🏥 SIMRS & PACS
          </div>
        </div>

        {/* Holographic Security Barcode Strip */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono">
            <QrCode className="w-4 h-4 text-slate-300" />
            <span>SECURITY MATRIX 99.9%</span>
          </div>
          <ShinyText speed={3} className="text-[10px] font-mono font-bold text-pink-400">
            OFFICIAL PASS
          </ShinyText>
        </div>

      </motion.div>

    </div>
  );
}
