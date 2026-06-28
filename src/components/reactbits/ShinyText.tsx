"use client";

import { ReactNode } from "react";

interface ShinyTextProps {
  children: ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  children,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[linear-gradient(120deg,rgba(255,255,255,0.4)_40%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.4)_60%)] bg-[length:200%_100%] ${
        disabled ? "" : "animate-shiny"
      } ${className}`}
      style={{ animationDuration }}
    >
      {children}
    </span>
  );
}
