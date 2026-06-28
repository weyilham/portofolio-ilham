"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Database, Server, Terminal, Sparkles, QrCode } from "lucide-react";
import ShinyText from "@/components/reactbits/ShinyText";

export default function Layered3DCards() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex flex-col items-center justify-center perspective-1000 pt-10 pb-6">
      
      {/* Background Glowing Ambient Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-600/30 rounded-full blur-[100px] pointer-events-none animate-float-slow" />

      {/* REACTBITS LANYARD STRAP (Hanging down from top of right side) */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none">
        {/* Woven Fabric Strap */}
        <div className="w-5 h-24 sm:h-32 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-700 rounded-full shadow-2xl relative flex items-center justify-center overflow-hidden border border-white/20">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff25_1px,transparent_1px)] bg-[size:100%_4px]" />
          <div className="w-1 h-full bg-white/25" />
        </div>

        {/* Metallic Clip & Ring */}
        <div className="relative z-50 flex flex-col items-center -mt-1">
          <div className="w-7 h-4 rounded-md bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border border-slate-300 shadow-md" />
          <div className="w-4.5 h-4.5 rounded-full border-2 border-slate-300 bg-transparent -mt-1" />
        </div>
      </div>

      {/* LAYER 3 (Back-most Bottom Left Floating Card) */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 15, rotateY: -15, z: -50 }}
        animate={{ opacity: 1, y: 0, rotateX: 12, rotateY: -12, z: 0 }}
        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02, z: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 -left-2 sm:-left-6 w-72 sm:w-80 glass-card p-5 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl z-10 transform-gpu"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">PACS & DICOM Server</div>
              <div className="text-[10px] text-cyan-300 font-mono">Status: Stream Ready</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            PACS V2.4
          </span>
        </div>

        <div className="space-y-1.5 font-mono text-[11px] text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-white/5">
          <div className="flex justify-between">
            <span className="text-slate-400">Image Transfer:</span>
            <span className="text-emerald-400 font-semibold">100% DICOM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">SIMRS Sync:</span>
            <span className="text-cyan-400 font-semibold">Connected</span>
          </div>
        </div>
      </motion.div>


      {/* LAYER 2 (Middle Top Right Floating Card) */}
      <motion.div
        initial={{ opacity: 0, y: -40, rotateX: 15, rotateY: 15, z: -30 }}
        animate={{ opacity: 1, y: 0, rotateX: 10, rotateY: 10, z: 0 }}
        whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02, z: 30 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="absolute top-2 -right-2 sm:-right-6 w-72 sm:w-80 glass-card p-5 rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-950/50 backdrop-blur-xl z-20 transform-gpu"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">API Gateway Enterprise</div>
              <div className="text-[10px] text-purple-300 font-mono">BPJS & SatuSehat</div>
            </div>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>24ms</span>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="p-2 rounded-xl bg-slate-950/70 border border-white/5">
            <div className="text-[10px] text-slate-400">Keamanan</div>
            <div className="font-bold text-emerald-400">🔒 Enkripsi API</div>
          </div>
          <div className="p-2 rounded-xl bg-slate-950/70 border border-white/5">
            <div className="text-[10px] text-slate-400">Reliabilitas</div>
            <div className="font-bold text-purple-300">99.9% Uptime</div>
          </div>
        </div>
      </motion.div>


      {/* LAYER 1 (Main ReactBits Lanyard ID Card - Front Center) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateZ: -2, z: 50 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateZ: [ -2, 2, -2 ],
          rotateY: [ 3, -3, 3 ],
          y: [ 0, 6, 0 ]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.04, rotateZ: 0, rotateY: 0, z: 90 }}
        className="relative w-full max-w-[360px] sm:max-w-[400px] glass-panel p-6 rounded-3xl border border-white/25 shadow-2xl shadow-indigo-950/90 backdrop-blur-2xl z-30 transform-gpu mt-6"
      >
        {/* Top Lanyard Hole Grommet attached to clip */}
        <div className="w-8 h-2.5 mx-auto -mt-3 mb-3 bg-slate-900 rounded-full border border-white/25 flex items-center justify-center">
          <div className="w-5 h-1 bg-slate-950 rounded-full" />
        </div>

        {/* Card Window Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center font-black text-white shadow-xl text-lg relative group border border-white/30">
              <span>IM</span>
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>Ilham Maulana</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
              </div>
              <div className="text-xs text-indigo-400 font-mono flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                <span>ilham_maulana.ts</span>
              </div>
            </div>
          </div>

          <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <ShinyText speed={3} className="text-emerald-400 font-bold">Active</ShinyText>
          </span>
        </div>

        {/* Code snippet tailored to Ilham Maulana */}
        <pre className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto bg-slate-950/90 p-4 rounded-2xl border border-white/10 shadow-inner">
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-amber-300">developer</span> = {"{\n"}
            {"  "}name: <span className="text-emerald-400">'Ilham Maulana'</span>,{"\n"}
            {"  "}role: <span className="text-emerald-400">'Fullstack & IT Prof'</span>,{"\n"}
            {"  "}skills: [<span className="text-cyan-300">'Web'</span>, <span className="text-cyan-300">'SIMRS'</span>, <span className="text-cyan-300">'PACS'</span>],{"\n"}
            {"  "}status: <span className="text-purple-400">'Ready for Business'</span>,{"\n"}
            {"}"};
          </code>
        </pre>

        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <QrCode className="w-4 h-4 text-slate-300" />
            <span>ID PASS: 2026-IM</span>
          </div>
          <ShinyText speed={3} className="text-[10px] font-mono font-bold text-pink-400">
            REACTBITS LANYARD
          </ShinyText>
        </div>

      </motion.div>

    </div>
  );
}
