
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-1 border-b border-[#00f2ff]/20' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center transition-transform duration-300 hover:scale-105">
          <Logo className={isScrolled ? "h-20" : "h-28"} />
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Home', 'Facilities', 'Memberships', 'Special Offers', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-white text-sm font-bold uppercase tracking-widest hover:text-[#00f2ff] transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f2ff] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-[#00f2ff] text-[#050505] px-8 py-3 rounded-none font-black uppercase tracking-widest hover:bg-white transition-all neon-cyan-glow transform hover:-translate-y-1">
            JOIN NOW
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-[#00f2ff] cursor-pointer hover:scale-110 transition-transform">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
