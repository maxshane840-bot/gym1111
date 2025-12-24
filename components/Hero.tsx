
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Athletic man training" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-6">
            <span className="gradient-cyan">TRIPLE Z FITNESS GYM UNLEASH YOUR POTENTIAL</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Premium facilities, optimization coaching, and an environment built for serious results. We don't just train bodies we engineer performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#00f2ff] text-[#050505] px-10 py-5 rounded-none font-black uppercase tracking-widest hover:bg-white transition-all neon-cyan-glow">
              VIEW PACKAGES
            </button>
            <button className="border-2 border-[#00f2ff] text-[#00f2ff] px-10 py-5 rounded-none font-black uppercase tracking-widest hover:bg-[#00f2ff] hover:text-[#050505] transition-all">
              BOOK DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Neon Line */}
      <div className="absolute bottom-10 left-0 w-32 h-1 bg-[#00f2ff] shadow-[0_0_10px_#00f2ff]"></div>
    </section>
  );
};

export default Hero;
