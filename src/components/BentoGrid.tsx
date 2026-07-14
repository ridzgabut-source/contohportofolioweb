/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';


const bentoItems = [
  {
    title: "Intimate Weddings",
    className: "md:col-span-2 md:row-span-2 h-[400px] md:h-auto",
    content: (
      <div className="relative w-full h-full overflow-hidden group rounded-2xl cursor-pointer">
        <div className="absolute inset-0 bg-deep-onyx/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop" 
          alt="Intimate Weddings" 
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className="text-3xl font-serif text-pure-white">Intimate Weddings</h3>
        </div>
      </div>
    )
  },
  {
    title: "Cinematic Films",
    className: "md:col-span-1 md:row-span-2 h-[400px] md:h-auto",
    content: (
      <div className="relative w-full h-full overflow-hidden group rounded-2xl cursor-pointer bg-warm-alabaster">
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop" 
          alt="Cinematic Films" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="px-4 py-2 rounded-full bg-pure-white/20 backdrop-blur-md border border-pure-white/40 text-pure-white text-sm tracking-widest uppercase transition-transform duration-300 group-hover:scale-110">
            [ ▶ Watch Reel ]
          </div>
        </div>
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className="text-xl font-serif text-pure-white">Cinematic Films</h3>
        </div>
      </div>
    )
  },
  {
    title: "Stats",
    className: "md:col-span-1 md:row-span-1 h-[200px] md:h-[250px]",
    content: (
      <div className="w-full h-full bg-warm-alabaster rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-soft-silver hover:bg-soft-silver/30 transition-colors duration-300">
        <div className="text-4xl font-serif text-deep-onyx mb-2">15+</div>
        <div className="text-xs uppercase tracking-widest text-deep-onyx/60 font-sans mb-4">Years of Craft</div>
        <div className="w-8 h-[1px] bg-deep-onyx/20 mb-4" />
        <div className="text-4xl font-serif text-deep-onyx mb-2">300+</div>
        <div className="text-xs uppercase tracking-widest text-deep-onyx/60 font-sans">Love Stories Worldwide</div>
      </div>
    )
  },
  {
    title: "Commercial & Editorial",
    className: "md:col-span-1 md:row-span-1 h-[200px] md:h-[250px]",
    content: (
      <div className="relative w-full h-full overflow-hidden group rounded-2xl cursor-pointer bg-deep-onyx">
        <img 
          src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?q=80&w=1000&auto=format&fit=crop" 
          alt="Editorial" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className="text-xl font-serif text-pure-white">Commercial & Editorial</h3>
        </div>
      </div>
    )
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function BentoGrid() {
  return (
    <section id="portfolio" className="w-full bg-pure-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          {bentoItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={item.className}
            >
              {item.content}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
