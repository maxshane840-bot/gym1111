
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CounterBar from './components/CounterBar';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CounterBar />
        <About />
        <Gallery />
        <Pricing />
        <SpecialOffer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
