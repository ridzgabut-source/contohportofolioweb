"use client";

import React from 'react';
import CanvasDotGrid from './CanvasDotGrid';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative w-full h-screen bg-pure-white flex items-center justify-center overflow-hidden">
      <CanvasDotGrid />
      
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pointer-events-none"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-deep-onyx mb-6 leading-tight tracking-tight">
          TIMELESS VISUAL <br/>
          <span className="italic font-light">/ POETRY.</span>
        </h1>
        <p className="text-deep-onyx/70 font-sans text-lg md:text-xl max-w-2xl font-light tracking-wide">
          We capture authentic love stories and architectural elegance through cinematic lenses.
        </p>
      </motion.div>
    </section>
  );
}
