"use client";

import { motion } from "framer-motion";
import { Atom, ShieldCheck, Activity, Terminal, Sparkles } from "lucide-react";
import ShinyText from "@/components/reactbits/ShinyText";

export default function Lanyard() {
  return (
    <div className="relative flex flex-col items-center justify-start py-6 perspective-1000 select-none">
      
      {/* 1. BLACK FABRIC STRAP WITH REACTBITS ATOM LOGO */}
      <div className="w-7 h-28 sm:h-36 bg-neutral-950 border-x border-neutral-800 shadow-2xl flex flex-col items-center justify-end pb-3 relative z-30 rounded-b-sm">
        {/* Woven Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_3px]" />
        
        {/* White ReactBits Atom Logo on Strap */}
        <div className="relative z-10 text-white p-1 rounded-full bg-neutral-900 border border-neutral-800">
          <Atom className="w-4 h-4 animate-spin text-white" style={{ animationDuration: '10s' }} />
        </div>
      </div>

      {/* 2. BLACK METAL KEYRING & LOBSTER CLASP HOOK */}
      <div className="relative z-40 flex flex-col items-center -mt-1 pointer-events-none">
        {/* Ring */}
        <div className="w-5 h-5 rounded-full border-[3px] border-neutral-700 bg-transparent shadow-md" />
        {/* Lobster Clasp Hook */}
        <div className="w-3.5 h-6 bg-neutral-800 border border-neutral-600 rounded-b-md -mt-1.5 flex items-center justify-center shadow-lg">
          <div className="w-1.5 h-3 bg-neutral-950 rounded-full" />
        </div>
      </div>

      {/* 3. REACTBITS HANGING LANYARD CARD */}
      <motion.div
        initial={{ rotateZ: -3, rotateY: 5, y: -5 }}
        animate={{ 
          rotateZ: [ -2.5, 2.5, -2.5 ],
          rotateY: [ 5, -5, 5 ],
          y: [ 0, 8, 0 ]
        }}
        transition={{ 
          duration: 5.5, 
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.04, rotateZ: 0, rotateY: 0, y: -2 }}
        className="-mt-3 w-72 sm:w-80 glass-panel p-6 rounded-3xl border border-white/20 shadow-2xl shadow-black/90 backdrop-blur-2xl relative z-20 transform-gpu overflow-hidden"
      >
        {/* Top Hole in Card where Clasp Hook passes through */}
        <div className="w-4 h-4 mx-auto -mt-2 mb-4 rounded-full bg-neutral-950 border-2 border-neutral-700 flex items-center justify-center shadow-inner">
          <div className="w-2 h-2 rounded-full bg-neutral-900" />
        </div>

        {/* Card Window Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center font-black text-white shadow-xl text-lg border border-white/20">
              IM
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

          <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Activity className="w-3 h-3 animate-pulse text-emerald-400" />
            <ShinyText speed={3} className="text-emerald-400 font-bold">Active</ShinyText>
          </span>
        </div>

        {/* Code snippet tailored to Ilham Maulana */}
        <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto bg-slate-950/90 p-4 rounded-2xl border border-white/10 shadow-inner">
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

        {/* Card Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>ReactBits Lanyard</span>
          </div>
          <span className="text-indigo-400 font-semibold">Official Pass</span>
        </div>

      </motion.div>

    </div>
  );
}
