
import React from 'react';

const Pricing: React.FC = () => {
  const row1 = [
    { period: '3 MONTHS', price: '9,500', note: 'Standard Access' },
    { period: '6 MONTHS', price: '17,500', popular: true, note: 'Best Value Plan' },
    { period: '12 MONTHS', price: '35,000', note: 'Ultimate Commitment' }
  ];

  const row2 = [
    { tier: 'BRONZE', price: '8,000', features: ['Gym Access', 'Cardio Access', 'Basic Guidance'] },
    { tier: 'SILVER', price: '12,000', features: ['All Bronze Features', 'Custom Diet Plan', 'Weekly Body Analysis'] },
    { tier: 'GOLD', price: '15,000', features: ['All Silver Features', 'Supplement Protocol', 'Personal Mentorship'] }
  ];

  return (
    <section id="memberships" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic">MEMBERSHIP PACKAGES</h2>
          <p className="text-zinc-500 uppercase tracking-widest">Select your level of investment in yourself</p>
        </div>

        {/* Row 1 - Discounted Access */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {row1.map((item, i) => (
            <div 
              key={i} 
              className={`relative bg-[#0a0a0a] border-2 transition-all duration-300 p-10 flex flex-col items-center ${item.popular ? 'border-[#00f2ff] scale-105 z-10 neon-cyan-glow' : 'border-zinc-800 hover:border-[#00f2ff]/50'}`}
            >
              {item.popular && (
                <div className="absolute top-0 right-0 bg-[#00f2ff] text-[#050505] font-black px-4 py-1 text-xs uppercase tracking-widest">
                  POPULAR
                </div>
              )}
              <h3 className="text-white font-black text-2xl mb-6 tracking-tighter italic">{item.period}</h3>
              <div className="flex items-start mb-4">
                <span className="text-[#00f2ff] font-bold text-xl mt-2">PKR</span>
                <span className="text-white text-7xl font-black">{item.price}</span>
              </div>
              <p className="text-zinc-500 mb-8 font-bold uppercase text-xs tracking-[0.2em]">{item.note}</p>
              <button className={`w-full py-4 font-black uppercase tracking-widest transition-all ${item.popular ? 'bg-[#00f2ff] text-[#050505] hover:bg-white' : 'border-2 border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-[#050505]'}`}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* Row 2 - Tiered Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {row2.map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-[#00f2ff]/20 p-8 hover:border-[#00f2ff] transition-colors group">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-white font-black text-xl italic tracking-widest">{item.tier}</h3>
                <div className="text-[#00f2ff] font-bold text-lg">Rs. {item.price}</div>
              </div>
              <ul className="space-y-4 mb-10">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <svg className="w-4 h-4 text-[#00f2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-[#00f2ff]/40 text-white font-bold uppercase text-xs tracking-widest group-hover:bg-[#00f2ff] group-hover:text-[#050505] transition-all">
                SELECT TIER
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
