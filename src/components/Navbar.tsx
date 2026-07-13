"use client";

import React from 'react';

import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav className="flex items-center justify-between px-6 py-4 bg-pure-white/70 backdrop-blur-md border border-soft-silver rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        {/* Brand */}
        <div className="text-xl font-serif font-semibold tracking-wide cursor-pointer hover:opacity-70 transition-opacity duration-300">
          LUMIÈRE®
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {[
            { label: 'Portfolio', id: 'portfolio' },
            { label: 'Philosophy', id: 'about-us' },
            { label: 'Contact', id: 'book' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative group cursor-pointer"
            >
              <span className="group-hover:text-black/60 transition-colors duration-300">{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-deep-onyx transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a 
          href="#book"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-sm font-medium group cursor-pointer"
        >
          <span className="relative">
            Book Consultation
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-deep-onyx transform origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
          </span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </nav>
    </div>
  );
}
