"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface CircularTextProps {
  text?: string;
  spinDuration?: number;
  className?: string;
  fontSize?: number;
  radius?: number;
}

export default function CircularText({
  text = "ILHAM MAULANA • FULLSTACK DEV • ",
  spinDuration = 14,
  className = "",
  fontSize = 14,
  radius = 80,
}: CircularTextProps) {
  const id = useId();
  const pathId = `circPath-${id.replace(/:/g, "")}`;
  const characters = text.split("");
  const totalAngle = 360;
  const anglePerChar = totalAngle / characters.length;

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: spinDuration, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none select-none ${className}`}
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <div className="relative w-full h-full">
        {characters.map((char, i) => {
          const rotation = i * anglePerChar;
          return (
            <span
              key={`${char}-${i}`}
              className="absolute left-1/2 top-0 text-white font-bold"
              style={{
                fontSize: `${fontSize}px`,
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                transform: `rotate(${rotation}deg)`,
                transformOrigin: `0px ${radius}px`,
                letterSpacing: "0.08em",
                textShadow: "0 2px 8px rgba(99, 102, 241, 0.6)",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}
