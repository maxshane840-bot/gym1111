
import React from 'react';

const SpecialOffer: React.FC = () => {
  return (
    <section id="special-offers" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00f2ff] via-transparent to-transparent"></div>
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full text-zinc-800 font-black text-[200px] leading-none opacity-20 whitespace-nowrap overflow-hidden">
          ZZZZZZZZZZZZZZZZZZZZZZZZ
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#0a0a0a] border-4 border-[#00f2ff] p-12 md:p-20 text-center neon-cyan-glow">
          <h4 className="text-[#00f2ff] font-black tracking-[0.4em] mb-6 uppercase animate-pulse">LIMITED TIME OPPORTUNITY</h4>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            NEW YEAR SPECIAL OFFER — <br />
            <span className="text-[#00f2ff] neon-text-glow">100% ADMISSION FEE OFF</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-white font-bold">
              <div className="w-6 h-6 bg-[#00f2ff] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#050505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              DEMO TRAINING
            </div>
            <div className="flex items-center gap-3 text-white font-bold">
              <div className="w-6 h-6 bg-[#00f2ff] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#050505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              GYM ACCESS + CARDIO DISCOUNT
            </div>
          </div>

          <button className="bg-[#00f2ff] text-[#050505] px-12 py-6 rounded-none font-black text-xl uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_#00f2ff]">
            START YOUR JOURNEY 
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
