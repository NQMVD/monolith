import React, { useState, useEffect, useRef } from 'react';

// --- SURREAL ASSETS & ICONS ---
const TechnicalStamp = ({ text, subtext, className }) => (
  <div className={`flex flex-col gap-1 border-l-2 border-amber-600/30 pl-4 py-1 ${className}`}>
    <span className="text-[7px] font-black tracking-[0.5em] uppercase text-stone-400">{subtext || "Phase Entry"}</span>
    <span className="text-[10px] font-bold tracking-widest text-stone-800 uppercase leading-none">{text}</span>
  </div>
);

const IconPhase = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
    <path d="M12 2a10 10 0 0 1 0 20" />
    <path d="M12 2a10 10 0 0 0 0 20" opacity="0.3"/>
  </svg>
);

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  const [entropy, setEntropy] = useState(0.042);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScroll(window.scrollY);
    const interval = setInterval(() => {
      setEntropy(prev => prev + (Math.random() - 0.48) * 0.001);
    }, 2000);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const echoes = [
    { id: "A-01", name: "Loom.os", type: "Fabric Logic", depth: "12,000m" },
    { id: "B-02", name: "Vesper", type: "Shadow Comms", depth: "4,200m" },
    { id: "C-03", name: "Kindred", type: "Social Gravity", depth: "800m" }
  ];

  return (
    <div className="min-h-[400vh] bg-[#faf9f6] text-[#1c1b1a] font-sans selection:bg-amber-600 selection:text-white relative overflow-x-hidden">
      
      {/* 1. SURREAL ATMOSPHERE ENGINE */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        {/* The Grain - Hard Grit */}
        <svg className="absolute w-full h-full opacity-[0.07] mix-blend-multiply">
          <filter id="surrealNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#surrealNoise)" />
        </svg>

        {/* The Mirage Lens (Cursor Warp) */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[80px] opacity-[0.2] transition-transform duration-300 ease-out"
          style={{ 
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            transform: `translate(${mouse.x - 300}px, ${mouse.y - 300}px)`,
            mixBlendMode: 'overlay'
          }}
        />

        {/* Coordinate HUD */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-20 opacity-20 text-[8px] font-black uppercase tracking-[0.8em] [writing-mode:vertical-lr]">
          <span>Latent Space Explorer</span>
          <div className="h-40 w-px bg-stone-900 mx-auto" />
          <span>Vector: {mouse.x}.{mouse.y}</span>
        </div>
      </div>

      {/* 2. PERSISTENCE HUD */}
      <div className="fixed bottom-12 left-12 right-12 z-[110] flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-6 pointer-events-auto">
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-stone-400">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-ping" />
            <span>Entropy: {entropy.toFixed(4)}</span>
          </div>
          <div className="h-px w-64 bg-stone-200 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-stone-900 transition-transform duration-500" 
              style={{ transform: `translateX(${-(1 - entropy * 10) * 100}%)` }} 
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-stone-300">
          <span>Software is dreaming.</span>
          <span>Depth: Infinite</span>
        </div>
      </div>

      {/* 3. HERO: THE PHASE-SHIFT MONOLITH */}
      <section className="relative h-screen flex flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Surreal Mirage Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[30vw] font-black tracking-tighter leading-none select-none">
                VOID
            </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="mb-12 inline-flex items-center gap-4">
            <div className="w-12 h-px bg-stone-200" />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-stone-400">Artifact 0.0.0</span>
            <div className="w-12 h-px bg-stone-200" />
          </div>

          <h1 
            className="text-[8rem] md:text-[18rem] font-black leading-[0.75] tracking-tighter text-stone-950 uppercase transition-all duration-700"
            style={{ 
                transform: `skewY(${(mouse.x - window.innerWidth/2) * 0.005}deg)`,
                textShadow: isHovered ? '20px 20px 0px rgba(245, 158, 11, 0.1)' : '0px 0px 0px transparent'
            }}
          >
            The <br />
            <span className="font-serif italic font-light lowercase text-stone-400">mirage</span> <br />
            Home.
          </h1>

          <div 
            className="mt-20 group relative inline-block cursor-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* The Actual Monolith (Floating) */}
            <div className="w-32 h-64 bg-stone-950 shadow-[0_40px_100px_rgba(0,0,0,0.3)] relative animate-float transition-all duration-1000 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-600/20 blur-xl rounded-full animate-pulse" />
            </div>
            <div className="mt-24 text-[10px] font-black uppercase tracking-[0.6em] text-stone-400 group-hover:text-amber-600 transition-colors">
                Gaze into the Void
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ECHO ARCHIVE: Floating Open Source */}
      <section className="relative py-80 px-12 flex flex-col items-center bg-[#f2f1ec] overflow-hidden">
        {/* Surreal Depth Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(circle, #000 0.5px, transparent 0.5px)', 
            backgroundSize: '100px 100px',
            transform: `translateY(${scroll * 0.2}px)`
        }} />

        <div className="max-w-7xl w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-40 items-center">
            <div>
              <TechnicalStamp text="The Archive of Echoes" subtext="Non-Euclidean Space" className="mb-12" />
              <h2 className="text-7xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">
                Software <br /> As Memory.
              </h2>
              <p className="text-2xl text-stone-500 font-serif italic leading-relaxed max-w-lg mb-12">
                These projects are not code. They are historical intentions captured in the sand. 
                They exist because we cared enough to dream them.
              </p>
              <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-light text-stone-900">01</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Synthesis</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-light text-stone-300">02</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-stone-400 opacity-30">Dissolve</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {echoes.map((echo, idx) => (
                <EchoCard key={echo.id} {...echo} idx={idx} mouse={mouse} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FINAL ASCENSION */}
      <section className="py-96 px-12 text-center relative overflow-hidden">
         <div 
          className="absolute inset-0 pointer-events-none opacity-5 transition-transform duration-1000"
          style={{ transform: `scale(${1 + scroll * 0.0001})` }}
        >
          <div className="text-[20vw] font-black uppercase tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            SURRENDER
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <IconPhase />
          <h3 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter mt-12 mb-20 leading-[0.8]">
            Point <br /> <span className="italic font-serif font-light text-amber-600 lowercase tracking-normal">Nowhere.</span>
          </h3>
          <p className="text-xl text-stone-400 font-serif italic mb-20 leading-relaxed">
            "We do not know where we will land, but the Monolith provides the gravity to ensure 
            that we are no longer afraid of the fall."
          </p>
          <div className="flex flex-col items-center gap-6">
            <button className="px-20 py-10 bg-stone-950 text-white text-[11px] font-black uppercase tracking-[1em] hover:bg-transparent hover:text-stone-950 border border-stone-950 transition-all shadow-2xl relative overflow-hidden group">
                <span className="relative z-10">Transcend</span>
                <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-300">Phase Shift Initiated</span>
          </div>
        </div>
      </section>

      {/* FOOTER: THE DEEP CORE */}
      <footer className="bg-[#121110] text-stone-700 pt-64 pb-24 px-12 relative">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-24 mb-48 items-start">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-6 h-12 bg-white" />
                        <span className="text-white text-4xl font-black uppercase tracking-tighter">Monolith</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed max-w-sm">
                        An impossible architecture for a serious reality. Software built of stone, 
                        light, and collective memory.
                    </p>
                </div>
                <div className="flex flex-col gap-10">
                    <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Dimensions</h5>
                    <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                        <li className="hover:text-amber-500 transition-colors cursor-crosshair">Local Host</li>
                        <li className="hover:text-amber-500 transition-colors cursor-crosshair">Latent Host</li>
                        <li className="hover:text-amber-500 transition-colors cursor-crosshair">Ghost Host</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-10">
                    <h5 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Presence</h5>
                    <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                        <li className="hover:text-amber-500 transition-colors cursor-crosshair">Heritage Log</li>
                        <li className="hover:text-amber-500 transition-colors cursor-crosshair">Care Manifest</li>
                        <li className="hover:text-amber-500 transition-colors cursor-crosshair">The Void</li>
                    </ul>
                </div>
            </div>
            <div className="pt-20 border-t border-stone-900 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] opacity-40">
                <span>The Monolith / Existential Version 9.0</span>
                <span>Coordinates Discovered. Home Found.</span>
            </div>
        </div>
      </footer>

      {/* GLOBAL SURREAL STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .vertical-text {
          writing-mode: vertical-lr;
        }
      `}} />
    </div>
  );
}

function EchoCard({ id, name, type, depth, idx, mouse }) {
  const [active, setActive] = useState(false);
  
  // Subtle magnetic effect
  const xOffset = active ? (mouse.x - window.innerWidth / 2) * 0.02 : 0;
  const yOffset = active ? (mouse.y - window.innerHeight / 2) * 0.02 : 0;

  return (
    <div 
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`p-12 border border-stone-300 bg-white/50 backdrop-blur-xl transition-all duration-1000 cursor-none relative overflow-hidden group ${active ? 'scale-105 border-amber-600/30' : ''}`}
      style={{ transform: `translate(${xOffset}px, ${yOffset}px)` }}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 text-[60px] font-black group-hover:opacity-100 transition-opacity">
        {id}
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
            <div className={`w-12 h-1 bg-stone-900 transition-all duration-700 ${active ? 'w-24 bg-amber-600' : ''}`} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">{depth}</span>
        </div>
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-stone-950">{name}</h3>
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-500">{type}</p>
        
        <div className={`mt-10 h-1 w-full bg-stone-100 relative overflow-hidden transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-amber-600 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
