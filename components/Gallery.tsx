
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', title: 'WEIGHT FLOOR' },
    { url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop', title: 'CARDIO ZONE' },
    { url: 'https://images.unsplash.com/photo-1571902258032-78300ad24db5?q=80&w=1974&auto=format&fit=crop', title: 'FUNCTIONAL AREA' },
    { url: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop', title: 'RECOVERY SUITE' },
    { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop', title: 'LEGS STATION' },
    { url: 'https://images.unsplash.com/photo-1519311965067-36d3b5f33d39?q=80&w=2071&auto=format&fit=crop', title: 'UPPER BODY PODS' }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center mb-16">
        <h4 className="text-[#00f2ff] font-bold tracking-widest uppercase mb-4">VIRTUAL TOUR</h4>
        <h2 className="text-5xl font-black text-white uppercase italic">THE TRIPLE Z ARENA</h2>
        <div className="w-24 h-1 bg-[#00f2ff] mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {images.map((img, i) => (
          <div key={i} className="relative group overflow-hidden h-80">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#00f2ff]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="border-4 border-white p-6 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white font-black text-2xl tracking-widest">{img.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
