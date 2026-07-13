import React from 'react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  return (
    <footer id="book" className="w-full bg-pure-white pt-32 pb-12 px-4 flex flex-col items-center justify-center border-t border-soft-silver">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-deep-onyx mb-4 tracking-tighter leading-none">
          LET&apos;S CREATE <br className="md:hidden" /> MAGIC.
        </h2>
        <p className="text-deep-onyx/60 font-sans tracking-widest uppercase text-sm mt-8">
          Based in Paris. Available Worldwide.
        </p>
      </div>

      <MagneticButton>
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-deep-onyx text-pure-white flex items-center justify-center text-xs md:text-sm tracking-widest font-medium transition-transform duration-500 hover:scale-95 shadow-xl hover:bg-deep-onyx/90">
          <span className="text-center px-4 leading-relaxed uppercase">
            [ Start Your<br/>Journey ]
          </span>
        </div>
      </MagneticButton>
      
      <div className="mt-32 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-xs font-sans text-deep-onyx/40 uppercase tracking-widest border-t border-soft-silver/50 pt-8">
        <span>© {new Date().getFullYear()} LUMIÈRE STUDIOS</span>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-deep-onyx transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-deep-onyx transition-colors duration-300">Vimeo</a>
          <a href="#" className="hover:text-deep-onyx transition-colors duration-300">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
