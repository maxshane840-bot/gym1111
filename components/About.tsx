
import React from 'react';

const About: React.FC = () => {
  const services = [
    { title: 'Sports Nutrition', desc: 'Custom meal protocols designed for maximum muscle protein synthesis and recovery.' },
    { title: 'Blood Marker Analysis', desc: 'Scientific approach to health monitoring to optimize hormonal levels and organ function.' },
    { title: 'Supplementation', desc: 'Curated protocols using pharmaceutical grade compounds to bridge nutrient gaps.' },
    { title: 'Physique Monitoring', desc: 'Weekly caliper measurements and photographic progression analysis.' }
  ];

  return (
    <section id="facilities" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h4 className="text-[#00f2ff] font-bold tracking-widest mb-4">OPTIMIZATION PROTOCOLS</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              PERFORMANCE NUTRITION & <br />
              <span className="text-[#00f2ff]">OPTIMIZATION</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-1 bg-[#00f2ff] mb-4 group-hover:w-20 transition-all"></div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 border border-[#00f2ff]/30 translate-x-8 translate-y-8"></div>
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym Equipment Rack" 
              className="relative z-10 w-full h-[500px] object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-500 border border-[#00f2ff]/20"
            />
            {/* Overlay badge */}
            <div className="absolute top-10 right-10 z-20 bg-[#00f2ff] text-[#050505] font-black p-4 flex flex-col items-center">
              <span className="text-4xl">01</span>
              <span className="text-xs uppercase tracking-tighter">CHAPTER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
