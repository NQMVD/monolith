import React, { useState, useEffect, useRef } from 'react';

// --- MICRO IDENTITY (The Minimal Gate) ---
const MinimalGateIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="6" y="6" width="5" height="20" fill="#1C1917" />
    <rect x="19" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="21" y="6" width="5" height="20" fill="#1C1917" />
    <rect x="15" y="10" width="2" height="12" fill="#F59E0B" />
    <rect x="13" y="15" width="6" height="0.5" fill="#F59E0B" fillOpacity="0.3" />
  </svg>
);

// --- THE ETERNAL MARK (Architectural Centerpiece) ---
const EternalMark = ({ active, mouse }) => {
  const rotateX = (mouse.y - window.innerHeight / 2) * 0.012;
  const rotateY = (mouse.x - window.innerWidth / 2) * -0.012;

  return (
    <div 
      className="relative transition-all duration-1000 ease-out"
      style={{ 
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${active ? 1.05 : 1})`,
      }}
    >
      <svg viewBox="0 0 240 540" width="240" height="540" className="filter drop-shadow-[0_60px_120px_rgba(0,0,0,0.5)]">
        <defs>
          <filter id="obsidianTexture" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" seed="8" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            <feSpecularLighting surfaceScale="5" specularConstant="1" specularExponent="40" lightingColor="#fff">
              <feDistantLight azimuth="225" elevation="60" />
            </feSpecularLighting>
            <feComposite in="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
          <filter id="voidGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="blur" in2="SourceGraphic" operator="over" />
          </filter>
          <linearGradient id="spineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Foundation */}
        <rect x="30" y="30" width="180" height="480" fill="#0c0a09" filter="url(#obsidianTexture)" />
        {/* Recessed Gates */}
        <path d="M40 50 L110 50 L110 490 L40 490 Z" fill="#141210" filter="url(#obsidianTexture)" />
        <path d="M130 50 L200 50 L200 490 L130 490 Z" fill="#141210" filter="url(#obsidianTexture)" />
        {/* The Spine */}
        <g filter="url(#voidGlow)">
           <rect x="119" y="100" width="2" height="340" fill="url(#spineGrad)" className="animate-pulse" />
           {[180, 240, 300, 360].map(y => (
             <rect key={y} x="114" y={y} width="12" height="0.5" fill="#f59e0b" opacity="0.4" />
           ))}
        </g>
      </svg>
    </div>
  );
};

// --- MAIN EXPERIENCE ---
export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScroll(window.scrollY);
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const echoes = [
    { id: "A-01", name: "Ethereal.os", status: "Foundational", depth: "12,400m" },
    { id: "B-02", name: "Atlas.mesh", status: "Permanent", depth: "4,200m" },
    { id: "C-03", name: "Kinship", status: "Human_Care", depth: "1,200m" }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1b1a] font-sans selection:bg-amber-600 selection:text-white relative overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC ENGINE: Grain & Light */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <svg className="absolute w-full h-full opacity-[0.06] mix-blend-multiply">
          <filter id="matteGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#matteGrain)" />
        </svg>

        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-[0.15] blur-[150px] transition-transform duration-700 ease-out"
          style={{ 
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            transform: `translate(${mouse.x - 500}px, ${mouse.y - 500}px)`,
          }}
        />

        <div 
          className="absolute w-6 h-6 border border-stone-900/30 rounded-full flex items-center justify-center transition-transform duration-100"
          style={{ transform: `translate(${mouse.x - 12}px, ${mouse.y - 12}px)` }}
        >
          <div className="w-1 h-1 bg-amber-600 rounded-full" />
        </div>
      </div>

      {/* 2. PERSISTENCE HUD */}
      <div className="fixed bottom-10 left-10 right-10 z-[110] flex justify-between items-end pointer-events-none text-[9px] font-black uppercase tracking-[0.4em] text-stone-400">
        <div className="flex flex-col gap-3 pointer-events-auto">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
             <span className="text-stone-900">System_Integrity: Absolute</span>
          </div>
          <div className="opacity-40">LOC: {mouse.x}, {mouse.y} / {time}</div>
        </div>
        <div className="opacity-30 hidden md:block">
           Software built for permanence.
        </div>
      </div>

      {/* 3. NAVIGATION: Integrating the Minimal Icon */}
      <nav className="fixed top-0 w-full z-50 px-12 py-10 flex justify-between items-center transition-all duration-700">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="transition-transform group-hover:scale-110">
            <MinimalGateIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black uppercase tracking-tighter leading-none">Monolith</span>
            <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-stone-400">Structural Software</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
          <a href="#" className="hover:text-stone-950 transition-colors">Archive</a>
          <a href="#" className="hover:text-stone-950 transition-colors">Heritage</a>
          <a href="#" className="hover:text-stone-950 transition-colors">Manifesto</a>
        </div>

        <button className="px-6 py-3 bg-stone-950 text-white text-[10px] uppercase font-black tracking-[0.4em] hover:bg-amber-600 transition-all shadow-xl">
          Initialise
        </button>
      </nav>

      {/* 4. HERO: The Eternal Mark Reveal */}
      <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-24 px-12">
        <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-stone-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-400">Project Archetype 0.0</span>
            </div>
            
            <h1 className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter text-stone-950 uppercase mb-12">
              The <br />
              <span className="font-serif italic font-light lowercase text-stone-300">Sanctuary</span> <br />
              Found.
            </h1>

            <div className="max-w-md border-l-2 border-stone-200 pl-8 ml-2 mt-12">
              <p className="text-xl text-stone-600 leading-relaxed font-medium mb-10">
                A gem amongst the dirt. We build software that feels matte, warm, and serious. 
                Experience the architectural gravity of pure intent.
              </p>
              <div className="flex items-center gap-6">
                <div className="p-3 bg-white border border-stone-200 shadow-sm rounded-sm">
                   <MinimalGateIcon />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Identity Structure</span>
                   <span className="text-xs font-bold text-stone-950">Minimal Gate V4.0</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="lg:col-span-5 flex justify-center cursor-crosshair"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <EternalMark active={active} mouse={mouse} />
          </div>
        </div>

        {/* Scroll Background Watermark */}
        <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none select-none">
          <div className="text-[30vw] font-black uppercase tracking-widest">MONOLITH</div>
        </div>
      </section>

      {/* 5. THE HERITAGE ARCHIVE (Surreal Echoes) */}
      <section className="py-64 bg-[#f2f1ec] relative overflow-hidden border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-40 items-end mb-32">
             <div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-700 mb-6">Heritage Inventory</div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                  Subjects <br /> of Matter.
                </h2>
             </div>
             <p className="text-2xl text-stone-500 font-serif italic max-w-sm">
                "Software built by people who care. Projects that don't just solve problems, but build a home."
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-stone-300 border border-stone-300 shadow-2xl">
            {echoes.map((echo) => (
              <div key={echo.id} className="bg-[#faf9f6] p-16 group hover:bg-stone-50 transition-colors cursor-crosshair relative overflow-hidden">
                <span className="absolute top-10 right-10 text-[60px] font-black text-stone-100 group-hover:text-amber-100/50 transition-colors pointer-events-none">{echo.id}</span>
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-stone-900 group-hover:w-16 transition-all duration-500 mb-8" />
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{echo.name}</h3>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-stone-400">
                    <span>{echo.status}</span>
                    <div className="w-1 h-1 bg-stone-200 rounded-full" />
                    <span>{echo.depth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL ASCENSION */}
      <section className="py-80 px-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="mb-12">
            <MinimalGateIcon className="opacity-40" />
          </div>
          <h3 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-16">
            Point <br /> <span className="font-serif italic font-light text-amber-600 lowercase tracking-normal">North.</span>
          </h3>
          <p className="text-2xl text-stone-500 font-serif italic mb-20 max-w-2xl leading-relaxed">
            "We do not know where we will land, but landing here should feel like it points us there."
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <button className="px-20 py-8 bg-stone-950 text-white text-[11px] font-black uppercase tracking-[1em] hover:bg-amber-600 transition-all shadow-2xl relative group overflow-hidden">
                <span className="relative z-10">Transcend</span>
                <div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-300">Phase Shift Initiated / Ver 9.1</span>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#121110] text-stone-700 pt-48 pb-20 px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-4 gap-24 mb-40">
            <div className="lg:col-span-2">
               <div className="flex items-center gap-4 mb-10 group cursor-pointer">
                <MinimalGateIcon className="invert brightness-200 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-white text-3xl font-black uppercase tracking-tighter">Monolith</span>
              </div>
              <p className="text-sm font-medium leading-relaxed max-w-sm opacity-60">
                The serious pursuit of software as a permanent human artifact. 
                Designed with grit, grain, and an unwavering commitment to the sun.
              </p>
            </div>
            <FooterGroup title="Heritage" links={["Project Core", "Subject Archive", "Care Logs"]} />
            <FooterGroup title="Dimensions" links={["Local Space", "Latent Depth", "Contact"]} />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-900 pt-12 gap-8 opacity-40 text-[9px] uppercase font-black tracking-[0.4em]">
            <span>MMXXIV Monolith Software / Absolute State</span>
            <span>Landing Found. Home Established.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterGroup({ title, links }) {
  return (
    <div className="flex flex-col gap-10">
      <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em]">{title}</h4>
      <ul className="flex flex-col gap-5">
        {links.map(link => (
          <li key={link}>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
