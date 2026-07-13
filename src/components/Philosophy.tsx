"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const text = "More than just imagery, we create visual poetry. Our approach transcends the ordinary, capturing the raw, unspoken emotions and architectural elegance of your finest hours. Every frame is a testament to authentic love, meticulously crafted into a timeless legacy that will endure for generations.";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const words = text.split(" ");

  return (
    <section id="about-us" ref={containerRef} className="w-full bg-pure-white h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: import("framer-motion").MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-3 mt-2 md:mt-4">
      <motion.span 
        style={{ opacity }}
        className="text-3xl md:text-5xl lg:text-6xl font-serif text-deep-onyx leading-[1.2]"
      >
        {children}
      </motion.span>
    </span>
  );
};
