"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function CanvasDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      dots = [];
      const spacing = 40; // Space between dots
      
      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            radius: 1.5,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Get scroll value for shatter effect (0 to 1 mapping over 0-400px scroll)
      const currentScroll = smoothScrollY.get();
      const shatterProgress = Math.min(Math.max(currentScroll / 400, 0), 1);
      
      ctx.fillStyle = `rgba(161, 161, 170, ${1 - shatterProgress})`; // #A1A1AA fading out
      
      const maxDist = 100;
      
      dots.forEach(dot => {
        // Mouse Repel Physics
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < maxDist && shatterProgress === 0) {
          const force = (maxDist - dist) / maxDist;
          dot.vx -= (dx / dist) * force * 1.5;
          dot.vy -= (dy / dist) * force * 1.5;
        }

        // Shatter Physics (Explode outwards)
        if (shatterProgress > 0) {
          const centerX = width / 2;
          const centerY = height / 2;
          const sx = dot.baseX - centerX;
          const sy = dot.baseY - centerY;
          const sDist = Math.sqrt(sx * sx + sy * sy) || 1;
          
          dot.x = dot.baseX + (sx / sDist) * (shatterProgress * 1500);
          dot.y = dot.baseY + (sy / sDist) * (shatterProgress * 1500);
        } else {
          // Spring back to base
          dot.vx += (dot.baseX - dot.x) * 0.05;
          dot.vy += (dot.baseY - dot.y) * 0.05;
          
          // Friction
          dot.vx *= 0.8;
          dot.vy *= 0.8;
          
          dot.x += dot.vx;
          dot.y += dot.vy;
        }

        ctx.beginPath();
        // Scale radius with shatter
        const currentRadius = dot.radius * (1 + shatterProgress * 3);
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect nearby dots when hovered
      if (shatterProgress === 0) {
        ctx.strokeStyle = "rgba(161, 161, 170, 0.2)";
        ctx.lineWidth = 0.5;
        for (let i = 0; i < dots.length; i++) {
          const dx = mouse.x - dots[i].x;
          const dy = mouse.y - dots[i].y;
          if (Math.sqrt(dx * dx + dy * dy) < maxDist) {
             for (let j = i + 1; j < dots.length; j++) {
                const dx2 = dots[i].x - dots[j].x;
                const dy2 = dots[i].y - dots[j].y;
                if (Math.sqrt(dx2 * dx2 + dy2 * dy2) < 60) {
                   ctx.beginPath();
                   ctx.moveTo(dots[i].x, dots[i].y);
                   ctx.lineTo(dots[j].x, dots[j].y);
                   ctx.stroke();
                }
             }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    init();
    draw();

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [smoothScrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
