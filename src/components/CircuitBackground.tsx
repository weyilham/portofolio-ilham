"use client";

import { useEffect, useRef } from "react";

export default function CircuitBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Colors
    const lineColor = "rgba(99, 102, 241, 0.12)";
    const dotColor = "rgba(99, 102, 241, 0.25)";
    const accentColors = [
      "rgba(56, 189, 248, 0.8)",  // cyan
      "rgba(168, 85, 247, 0.8)",  // purple
      "rgba(244, 114, 182, 0.7)", // pink
      "rgba(129, 140, 248, 0.8)", // indigo
      "rgba(52, 211, 153, 0.7)",  // emerald
    ];

    interface CircuitPath {
      points: { x: number; y: number }[];
      color: string;
      speed: number;
      offset: number;
      lineWidth: number;
    }

    // Generate circuit paths as ratios of W/H
    function generatePaths(): CircuitPath[] {
      const paths: CircuitPath[] = [];

      // Helper to create paths with right-angle turns (circuit board style)
      const createPath = (
        startXr: number, startYr: number,
        segments: { dx: number; dy: number }[],
        color: string,
        speed: number
      ) => {
        const points = [{ x: startXr, y: startYr }];
        let cx = startXr, cy = startYr;
        for (const seg of segments) {
          cx += seg.dx;
          cy += seg.dy;
          points.push({ x: cx, y: cy });
        }
        paths.push({
          points,
          color,
          speed,
          offset: Math.random() * 1000,
          lineWidth: 1,
        });
      };

      // --- HORIZONTAL BUS LINES ---
      // Top horizontal line
      createPath(0.05, 0.15, [
        { dx: 0.3, dy: 0 }, { dx: 0, dy: 0.06 }, { dx: 0.15, dy: 0 },
        { dx: 0, dy: -0.06 }, { dx: 0.35, dy: 0 }
      ], accentColors[0], 0.003);

      // Middle horizontal line
      createPath(0.0, 0.5, [
        { dx: 0.2, dy: 0 }, { dx: 0, dy: -0.08 }, { dx: 0.12, dy: 0 },
        { dx: 0, dy: 0.08 }, { dx: 0.14, dy: 0 }, { dx: 0, dy: 0.06 },
        { dx: 0.18, dy: 0 }, { dx: 0, dy: -0.06 }, { dx: 0.2, dy: 0 }
      ], accentColors[1], 0.0025);

      // Bottom horizontal
      createPath(0.1, 0.85, [
        { dx: 0.25, dy: 0 }, { dx: 0, dy: -0.05 }, { dx: 0.1, dy: 0 },
        { dx: 0, dy: 0.05 }, { dx: 0.45, dy: 0 }
      ], accentColors[2], 0.002);

      // --- VERTICAL BUS LINES ---
      // Left vertical
      createPath(0.2, 0.05, [
        { dx: 0, dy: 0.2 }, { dx: 0.06, dy: 0 }, { dx: 0, dy: 0.15 },
        { dx: -0.06, dy: 0 }, { dx: 0, dy: 0.25 }, { dx: 0.08, dy: 0 },
        { dx: 0, dy: 0.2 }
      ], accentColors[3], 0.0035);

      // Center vertical
      createPath(0.5, 0.0, [
        { dx: 0, dy: 0.18 }, { dx: -0.05, dy: 0 }, { dx: 0, dy: 0.12 },
        { dx: 0.05, dy: 0 }, { dx: 0, dy: 0.15 }, { dx: 0.07, dy: 0 },
        { dx: 0, dy: 0.18 }, { dx: -0.07, dy: 0 }, { dx: 0, dy: 0.25 }
      ], accentColors[4], 0.003);

      // Right vertical
      createPath(0.8, 0.08, [
        { dx: 0, dy: 0.22 }, { dx: -0.06, dy: 0 }, { dx: 0, dy: 0.18 },
        { dx: 0.06, dy: 0 }, { dx: 0, dy: 0.35 }
      ], accentColors[0], 0.0028);

      // --- CROSS CONNECTORS ---
      createPath(0.35, 0.3, [
        { dx: 0.1, dy: 0 }, { dx: 0, dy: 0.1 }, { dx: 0.12, dy: 0 },
        { dx: 0, dy: -0.1 }, { dx: 0.08, dy: 0 }
      ], accentColors[2], 0.004);

      createPath(0.6, 0.6, [
        { dx: 0.12, dy: 0 }, { dx: 0, dy: -0.1 }, { dx: 0.08, dy: 0 },
        { dx: 0, dy: 0.1 }, { dx: 0.1, dy: 0 }
      ], accentColors[1], 0.003);

      // --- ROUNDED RECT OUTLINES (chip-like borders) ---
      // Large rounded rect (top-right area)
      createPath(0.55, 0.12, [
        { dx: 0.3, dy: 0 }, { dx: 0, dy: 0.25 }, { dx: -0.3, dy: 0 },
        { dx: 0, dy: -0.25 }
      ], accentColors[3], 0.002);

      // Medium rounded rect (bottom-left area)
      createPath(0.08, 0.55, [
        { dx: 0.22, dy: 0 }, { dx: 0, dy: 0.2 }, { dx: -0.22, dy: 0 },
        { dx: 0, dy: -0.2 }
      ], accentColors[4], 0.0025);

      // Small rounded rect center
      createPath(0.38, 0.42, [
        { dx: 0.24, dy: 0 }, { dx: 0, dy: 0.16 }, { dx: -0.24, dy: 0 },
        { dx: 0, dy: -0.16 }
      ], accentColors[0], 0.0032);

      return paths;
    }

    const paths = generatePaths();

    function draw() {
      if (!ctx) return;
      const w = W();
      const h = H();

      ctx.clearRect(0, 0, w, h);

      for (const path of paths) {
        const pts = path.points.map(p => ({ x: p.x * w, y: p.y * h }));

        // Draw static circuit line
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = path.lineWidth;
        ctx.stroke();

        // Draw dots at junction points
        for (const pt of pts) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }

        // Compute total path length
        let totalLength = 0;
        const segLengths: number[] = [];
        for (let i = 1; i < pts.length; i++) {
          const dx = pts[i].x - pts[i - 1].x;
          const dy = pts[i].y - pts[i - 1].y;
          const len = Math.sqrt(dx * dx + dy * dy);
          segLengths.push(len);
          totalLength += len;
        }

        // Animated glowing dot traveling along the path
        const progress = ((time * path.speed + path.offset) % 1 + 1) % 1;
        const targetDist = progress * totalLength;

        let accum = 0;
        let px = pts[0].x, py = pts[0].y;
        for (let i = 0; i < segLengths.length; i++) {
          if (accum + segLengths[i] >= targetDist) {
            const t = (targetDist - accum) / segLengths[i];
            px = pts[i].x + t * (pts[i + 1].x - pts[i].x);
            py = pts[i].y + t * (pts[i + 1].y - pts[i].y);
            break;
          }
          accum += segLengths[i];
        }

        // Glowing dot
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 18);
        gradient.addColorStop(0, path.color);
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(px, py, 18, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Solid bright center dot
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = path.color;
        ctx.fill();

        // Draw a trailing glow along the path behind the dot
        const trailLength = 60;
        const trailStart = Math.max(0, targetDist - trailLength);
        let trailAccum = 0;
        const trailPts: { x: number; y: number; t: number }[] = [];
        for (let i = 0; i < segLengths.length; i++) {
          const segEnd = trailAccum + segLengths[i];
          if (segEnd >= trailStart && trailAccum <= targetDist) {
            const tStart = Math.max(0, (trailStart - trailAccum) / segLengths[i]);
            const tEnd = Math.min(1, (targetDist - trailAccum) / segLengths[i]);
            for (let t = tStart; t <= tEnd; t += 0.05) {
              const xx = pts[i].x + t * (pts[i + 1].x - pts[i].x);
              const yy = pts[i].y + t * (pts[i + 1].y - pts[i].y);
              const dist = trailAccum + t * segLengths[i];
              const alpha = Math.max(0, (dist - trailStart) / trailLength);
              trailPts.push({ x: xx, y: yy, t: alpha });
            }
          }
          trailAccum += segLengths[i];
        }

        if (trailPts.length > 1) {
          for (let i = 1; i < trailPts.length; i++) {
            ctx.beginPath();
            ctx.moveTo(trailPts[i - 1].x, trailPts[i - 1].y);
            ctx.lineTo(trailPts[i].x, trailPts[i].y);
            ctx.strokeStyle = path.color.replace(/[\d.]+\)$/, `${trailPts[i].t * 0.6})`);
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      time += 1;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}
