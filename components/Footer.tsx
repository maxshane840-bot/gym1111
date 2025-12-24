
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-[#00f2ff]/20 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-40 -mt-10 mb-6" />
            <p className="text-zinc-500 text-center md:text-left leading-relaxed italic max-w-sm">
              The premier destination for body composition enthusiasts and competitive athletes. Chapter 3 represents the absolute pinnacle of physical evolution.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-10 uppercase italic tracking-[0.2em] relative inline-block">
              LOCATE THE ARENA
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00f2ff]"></span>
            </h3>
            <ul className="space-y-8">
              <li className="flex gap-5 group">
                <div className="w-10 h-10 shrink-0 border border-[#00f2ff]/30 flex items-center justify-center text-[#00f2ff] group-hover:bg-[#00f2ff] group-hover:text-[#050505] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-zinc-400 group-hover:text-white transition-colors">North Nazimabad, Block N B-269, Karachi, Pakistan</span>
              </li>
              <li className="flex gap-5 group">
                <div className="w-10 h-10 shrink-0 border border-[#00f2ff]/30 flex items-center justify-center text-[#00f2ff] group-hover:bg-[#00f2ff] group-hover:text-[#050505] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-lg group-hover:text-[#00f2ff] transition-colors">0347-2560131</span>
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">General Inquiries</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-10 uppercase italic tracking-[0.2em] relative inline-block">
              FOLLOW THE REIGN
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00f2ff]"></span>
            </h3>
            <div className="flex items-center gap-6 mb-10">
              {['instagram', 'facebook', 'youtube', 'tiktok'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00f2ff] hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all transform hover:-translate-y-1"
                >
                  <span className="sr-only">{social}</span>
                  <div className="capitalize font-black text-xs">{social.charAt(0)}</div>
                </a>
              ))}
            </div>
            <div className="bg-[#0a0a0a] p-4 border-l-4 border-[#00f2ff] inline-block">
              <div className="text-[#00f2ff] font-black uppercase tracking-[0.3em] text-sm">
                @triplezchapter3
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] gap-6 uppercase tracking-[0.3em] font-bold">
          <p>© 2024 TRIPLE Z FITNESS ARENA. ALL SYSTEMS NOMINAL.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-[#00f2ff] transition-colors">Data Privacy</a>
            <a href="#" className="hover:text-[#00f2ff] transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
