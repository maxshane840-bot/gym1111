
import React from 'react';

const CounterBar: React.FC = () => {
  const stats = [
    { label: '100% FOCUS', sub: 'Tunnel Vision Environment' },
    { label: '24/7 ACCESS', sub: 'Available All Hours' },
    { label: 'TOP TIER EQUIPMENT', sub: 'Hammer Strength & Rogue' },
    { label: 'ELITE COACHING', sub: 'Professional Guidance' }
  ];

  return (
    <div className="bg-[#0a0a0a] border-y border-[#00f2ff]/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-4xl font-black text-[#00f2ff] mb-1 neon-text-glow group-hover:scale-110 transition-transform duration-300">
                {stat.label}
              </div>
              <div className="text-zinc-500 text-sm font-bold tracking-wider uppercase">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterBar;
