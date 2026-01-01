'use client';

import React, { useState, useEffect } from 'react';

// --- MICRO IDENTITY: ARK_V4.GATE ---
const MinimalGateIcon = ({ className = "" }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="6" y="6" width="5" height="20" fill="#1C1917" fillOpacity="0.4" />
    <rect x="19" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="21" y="6" width="5" height="20" fill="#1C1917" fillOpacity="0.4" />
    <rect x="15" y="10" width="2" height="12" fill="#F59E0B" />
    <rect x="13" y="15" width="6" height="0.5" fill="#F59E0B" fillOpacity="0.3" />
  </svg>
);

// --- THE ETERNAL MARK: Original Architectural Variant ---
const EternalMark = ({ active, mouse }: { active: boolean; mouse: { x: number; y: number } }) => {
  const rotateX = typeof window !== 'undefined' ? (mouse.y - window.innerHeight / 2) * 0.015 : 0;
  const rotateY = typeof window !== 'undefined' ? (mouse.x - window.innerWidth / 2) * -0.015 : 0;

  return (
    <div
      className="relative transition-all duration-1000 ease-out"
      style={{
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${active ? 1.05 : 1})`,
      }}
    >
      <svg viewBox="0 0 240 540" width="240" height="540" className="filter drop-shadow-[0_60px_120px_rgba(0,0,0,0.5)]">
        <defs>
          <filter id="forgedObsidian" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="6" seed="12" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            <feSpecularLighting surfaceScale="8" specularConstant="1.2" specularExponent="35" lightingColor="#fff">
              <feDistantLight azimuth="225" elevation="60" />
            </feSpecularLighting>
            <feComposite in="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
          <filter id="coreGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="blur" in2="SourceGraphic" operator="over" />
          </filter>
          <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="180" height="480" fill="#0c0a09" filter="url(#forgedObsidian)" opacity="0.8" />
        <path d="M120 60 L120 480" stroke="#1c1917" strokeWidth="40" strokeLinecap="butt" />
        <path d="M40 50 L110 50 L110 490 L40 490 Z" fill="#141210" filter="url(#forgedObsidian)" />
        <path d="M130 50 L200 50 L200 490 L130 490 Z" fill="#141210" filter="url(#forgedObsidian)" />
        <g stroke="white" strokeOpacity="0.05" strokeWidth="0.5">
          {[120, 180, 240, 300, 360, 420].map((y) => (
            <line key={y} x1="50" y1={y} x2="100" y2={y} />
          ))}
          {[120, 180, 240, 300, 360, 420].map((y) => (
            <line key={y} x1="140" y1={y} x2="190" y2={y} />
          ))}
          <path d="M70 100 L70 440" />
          <path d="M170 100 L170 440" />
        </g>
        <g filter="url(#coreGlow)">
          <rect x="119" y="100" width="2" height="340" fill="url(#spineGradient)" />
          {[150, 200, 250, 300, 350, 390].map((y) => (
            <rect key={y} x="110" y={y} width="20" height="0.5" fill="#f59e0b" opacity="0.6" />
          ))}
        </g>
        <circle cx="50" cy="65" r="1.5" fill="#f59e0b" opacity="0.3" />
        <circle cx="190" cy="65" r="1.5" fill="#f59e0b" opacity="0.3" />
        <circle cx="50" cy="475" r="1.5" fill="#f59e0b" opacity="0.3" />
        <circle cx="190" cy="475" r="1.5" fill="#f59e0b" opacity="0.3" />
      </svg>
    </div>
  );
};

// --- TECHNICAL UI ELEMENTS ---
const ScanLine = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="w-full h-[1px] bg-amber-500/30 absolute top-0 animate-scan" />
  </div>
);

const MountingBracket = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" width="20" height="20" className={`absolute text-stone-300 ${className}`}>
    <path d="M0 0h20v1H1v19H0V0z" fill="currentColor" />
  </svg>
);

const SectionHeader = ({ id, title, subtitle, variant = "standard" }: { id: string; title: string; subtitle: string; variant?: string }) => (
  <div className="flex flex-col mb-12 relative group/header">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-[10px] font-black font-mono text-amber-600 bg-white px-2 py-0.5 border border-stone-200 relative overflow-hidden">
        PHASE_{id}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 -translate-x-full group-hover/header:translate-x-0 transition-transform duration-300" />
      </span>
      <div className="h-px flex-grow bg-stone-200" />
      <span className="text-[8px] font-mono text-stone-400 tracking-[0.3em] uppercase transition-colors group-hover/header:text-stone-900">SYS_REF: {id}00-X</span>
    </div>

    {variant === "heavy" ? (
      <div className="relative">
        <h2 className="text-[5rem] md:text-[10rem] font-black uppercase tracking-tighter text-stone-950 leading-[0.8]">
          {title.split(' ').map((word, i) => (
            <span key={i} className="block relative">
              {word}
              {i === 1 && <span className="absolute -right-12 top-0 text-[10px] font-mono font-bold text-amber-600 opacity-40">AXIS_0.0</span>}
            </span>
          ))}
        </h2>
      </div>
    ) : (
      <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-stone-950 transition-transform duration-300 group-hover/header:-translate-x-2">
        {title}
      </h2>
    )}

    <div className="flex items-center gap-4 mt-6">
      <div className="w-2 h-2 bg-stone-950 group-hover/header:rotate-90 transition-transform duration-300" />
      <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.6em] text-stone-400">
        {subtitle}
      </p>
    </div>
  </div>
);

const SystemModule = ({ id, children, active = true, label }: { id: string; children: React.ReactNode; active?: boolean; label: string }) => (
  <section
    id={`module-${id}`}
    className="relative min-h-screen flex flex-col justify-center py-24 px-12 transition-all duration-300"
  >
    <div className={`max-w-7xl mx-auto w-full relative p-12 lg:p-24 bg-white/70 border-x border-stone-200 transition-all duration-300 ${active ? 'border-amber-500 bg-white/90 translate-x-1' : 'border-transparent'}`}>
      <MountingBracket className="top-0 left-0" />
      <MountingBracket className="top-0 right-0 rotate-90" />
      <MountingBracket className="bottom-0 left-0 -rotate-90" />
      <MountingBracket className="bottom-0 right-0 rotate-180" />
      {active && <ScanLine />}
      <div className={`absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-amber-500 transition-transform duration-300 ${active ? 'scale-y-100' : 'scale-y-0'}`} />

      <div className="absolute top-6 right-12 flex gap-8 items-center">
        <div className="flex flex-col items-end">
          <span className="text-[7px] font-black text-stone-400 uppercase tracking-widest">Structural Unit</span>
          <span className={`text-[10px] font-mono font-bold uppercase transition-colors duration-300 ${active ? 'text-amber-600' : 'text-stone-950'}`}>{label}</span>
        </div>
        <div className={`w-[1px] h-8 bg-stone-200 transition-colors ${active ? 'bg-amber-500/50' : ''}`} />
        <span className="text-4xl font-black text-stone-950 opacity-5 italic font-serif leading-none">0{id}</span>
      </div>

      <div className="relative z-10">
        {children}
      </div>

      <div className="mt-20 pt-10 border-t border-stone-100 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { l: "Integrity", v: "1.0000" },
          { l: "Material", v: "Obsidian_V4" },
          { l: "Registry", v: "Verified" },
          { l: "Update", v: "Realtime" }
        ].map((stat) => (
          <div key={stat.l} className="flex flex-col gap-1 group/stat cursor-default">
            <span className="text-[7px] font-black uppercase tracking-[0.5em] text-stone-300 group-hover/stat:text-stone-950 transition-colors">{stat.l}</span>
            <span className={`text-[11px] font-mono font-bold transition-colors ${active ? 'text-stone-900' : 'text-stone-500'}`}>{stat.v}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeModule, setActiveModule] = useState(0);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const winHeight = window.innerHeight;
      const module = Math.floor((scrollPos + winHeight / 2) / winHeight);
      setActiveModule(module);
    };
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
    { id: "C-03", name: "Kinship.sys", status: "Human_Care", depth: "1,200m" }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1b1a] font-sans selection:bg-stone-950 selection:text-white relative overflow-x-hidden">

      {/* 1. ARCHITECTURAL GRID */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }} />
      </div>

      {/* 2. ATMOSPHERIC ENGINE */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <svg className="absolute w-full h-full opacity-[0.1] mix-blend-multiply">
          <filter id="ultraGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#ultraGrain)" />
        </svg>

        <div
          className="absolute w-[1200px] h-[1200px] rounded-full opacity-[0.12] blur-[150px] transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            transform: `translate(${mouse.x - 600}px, ${mouse.y - 600}px)`,
          }}
        />

        <div className="absolute w-10 h-10 flex items-center justify-center pointer-events-none" style={{ transform: `translate(${mouse.x - 20}px, ${mouse.y - 20}px)` }}>
          <div className="w-[1px] h-full bg-stone-950/10 absolute" />
          <div className="h-[1px] w-full bg-stone-950/10 absolute" />
          <div className="w-2 h-2 bg-stone-950 rounded-sm" />
          <div className="w-1 h-1 bg-amber-500 rounded-sm absolute" />
        </div>
      </div>

      {/* 3. PERSISTENCE HUD */}
      <div className="fixed bottom-10 left-12 right-12 z-[110] flex justify-between items-end pointer-events-none">
        <div className="flex gap-24 pointer-events-auto">
          <div className="flex flex-col gap-1 group/hud">
            <span className="text-[7px] font-black uppercase tracking-[0.6em] text-stone-400 group-hover/hud:text-stone-950 transition-colors">Phase_Identifier</span>
            <span className="text-[12px] font-mono font-black text-stone-950">MOD_0{activeModule} // {['GENESIS', 'STRUCTURAL', 'OUTCOME'][activeModule] || 'IDLE'}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[7px] font-black uppercase tracking-[0.6em] text-stone-400">Sync_Clock</span>
            <span className="text-[12px] font-mono font-black text-stone-950">{time}</span>
          </div>
        </div>
        <div className="text-right pointer-events-auto flex flex-col items-end gap-3">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-950">Structural Integrity</span>
            <span className="text-[11px] font-mono font-bold text-amber-600 tracking-tighter">1.000_SYNC</span>
          </div>
          <div className="w-64 h-[2px] bg-stone-200 relative">
            <div className="h-full bg-stone-950 transition-all duration-500 ease-in-out" style={{ width: `${(activeModule + 1) * 33.3}%` }} />
          </div>
        </div>
      </div>

      {/* 4. NAVIGATION */}
      <nav className="fixed top-0 w-full z-[120] px-12 py-12 flex justify-between items-start bg-transparent pointer-events-none">
        <div className="flex items-center gap-8 group cursor-pointer pointer-events-auto">
          <div className="p-2.5 transition-all duration-300 group-hover:-translate-y-1">
            <MinimalGateIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black uppercase tracking-tighter leading-none">Monolith</span>
            <span className="text-[9px] uppercase tracking-[0.8em] font-black text-stone-400 group-hover:text-amber-600 transition-colors">Architecture.Core.V4</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-20 text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 pointer-events-auto">
          {['Genesis', 'Structure', 'Outcome'].map((item, idx) => (
            <a key={item} href={`#module-${idx}`} className={`transition-all group/nav flex flex-col gap-2 ${activeModule === idx ? 'text-stone-950' : 'hover:text-stone-950 opacity-60'}`}>
              <span className={`text-[7px] font-mono transition-transform duration-300 ${activeModule === idx ? 'text-amber-600 translate-x-1' : 'opacity-40'}`}>0{idx}</span>
              {item}
            </a>
          ))}
        </div>

        <button className="px-12 py-5 bg-stone-950 text-white text-[11px] font-black uppercase tracking-[0.6em] hover:bg-stone-800 transition-all pointer-events-auto shadow-2xl active:scale-95">
          Initialise
        </button>
      </nav>

      {/* 5. MODULES */}
      <SystemModule id="0" active={activeModule === 0} label="Source_Chassis">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-8">

            <div className="mt-12 space-y-8">
              {/* Redesigned Structural Mandate */}
              <div className="flex flex-col gap-4 max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-stone-900 leading-[0.9]">
                  WE DO NOT BUILD APPS. <br />
                  <span className="font-serif italic font-light lowercase text-stone-400">We forge environments.</span>
                </h3>

                <div className="h-px w-full bg-stone-100" />

                <p className="text-lg md:text-xl font-bold tracking-tight text-stone-500 leading-relaxed max-w-xl">
                  A serious sanctuary for those who build the future with absolute intent.
                  Every pixel is load-bearing. Every line is permanent.
                </p>
              </div>

              <div className="flex items-center gap-16 pt-8">
                <div className="flex flex-col gap-3 group/spec cursor-default">
                  <span className="text-[8px] font-black uppercase tracking-[0.5em] text-stone-400 group-hover/spec:text-amber-600 transition-colors">Registry Code</span>
                  <div className="flex items-center gap-6">
                    <MinimalGateIcon className="w-5 h-5" />
                    <span className="text-[12px] font-mono font-bold text-stone-950">ARK_V4.GATE</span>
                  </div>
                </div>
                <div className="h-12 w-[1px] bg-stone-100" />
                <div className="flex flex-col gap-3">
                  <span className="text-[8px] font-black uppercase tracking-[0.5em] text-stone-400">Surface Spec</span>
                  <span className="text-[12px] font-mono font-bold text-stone-950 uppercase tracking-tighter">Matte_Obsidian_Forged</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center py-16 relative group/mark">
            <EternalMark active={true} mouse={mouse} />
            <div className="absolute top-6 right-6 text-[8px] font-mono text-stone-400 uppercase tracking-widest">Active_Render</div>
          </div>
        </div>
      </SystemModule>

      <SystemModule id="1" active={activeModule === 1} label="Archive_Matrix">
        <div className="grid lg:grid-cols-2 gap-40 items-start">
          <div>
            <SectionHeader id="01" title="The Stack." subtitle="Interlocked Ecosystem" />
            <p className="text-2xl text-stone-500 font-bold leading-relaxed max-w-md mb-20 italic font-serif">
              Open source is the grit in our machine. We curate the projects that share our commitment to permanence.
            </p>
            <div className="inline-flex">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-6 bg-stone-950 text-white transition-all group-hover:bg-amber-600 group-hover:-translate-y-1">
                  <span className="text-[11px] font-black uppercase tracking-[0.6em]">View Repository Archive</span>
                </div>
                <div className="w-2 h-2 bg-stone-950 group-hover:rotate-45 transition-all" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1px] bg-stone-200 border border-stone-200 shadow-2xl">
            {echoes.map((echo, i) => (
              <div key={echo.name} className="p-20 bg-white flex justify-between items-center hover:bg-stone-50 transition-all cursor-pointer group/item">
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] font-black text-stone-300 uppercase tracking-[0.6em] group-hover/item:text-amber-600">SUBJECT_0{i + 1}</span>
                  <span className="text-5xl font-black uppercase tracking-tighter text-stone-950 group-hover/item:translate-x-3 transition-transform">{echo.name}</span>
                </div>
                <div className="h-px w-20 bg-stone-200 group-hover:bg-amber-600 group-hover:w-32 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </SystemModule>

      <SystemModule id="2" active={activeModule === 2} label="Final_Assembly">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto py-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] text-[30vw] font-black tracking-tighter pointer-events-none select-none">
            SOLID
          </div>
          <SectionHeader id="02" title="The Outcome." subtitle="System Finalisation sequence" />
          <p className="text-4xl text-stone-500 font-serif italic mb-24 leading-snug max-w-3xl z-10 font-bold">
            "We don't know where we will land, but the Monolith provides the gravity to ensure
            that we land standing up."
          </p>
          <div className="grid md:grid-cols-2 gap-16 w-full max-w-3xl z-10">
            <button className="group relative p-12 bg-stone-950 text-white font-black uppercase text-[12px] tracking-[0.8em] transition-all hover:bg-amber-600 hover:scale-[1.02]">
              Execute Initialisation
              <div className="absolute top-2 right-2 w-3 h-3 border border-white opacity-20 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="p-12 border-4 border-stone-950 text-stone-950 font-black uppercase text-[12px] tracking-[0.8em] hover:bg-stone-950 hover:text-white transition-all">
              View Blueprints
            </button>
          </div>
        </div>
      </SystemModule>

      {/* FOOTER */}
      <footer className="bg-[#121110] text-stone-800 pt-72 pb-24 px-12 relative overflow-hidden border-t-8 border-stone-950">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-4 gap-24 mb-48">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-8 mb-16">
                <div className="bg-white p-3 shadow-lg">
                  <MinimalGateIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-5xl font-black uppercase tracking-tighter leading-none">Monolith</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-[0.6em] mt-2 font-black">Structural Evolution Systems</span>
                </div>
              </div>
              <p className="text-lg font-bold leading-relaxed max-w-md italic font-serif text-stone-500">
                Forging software that respects your gravity.
                Everything is documented. Everything is permanent.
              </p>
            </div>
            {['Architecture', 'Protocol'].map((title, i) => (
              <div key={title} className="flex flex-col gap-16">
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.8em] border-b-2 border-stone-900 pb-6">{title}</h4>
                <ul className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-widest text-stone-600">
                  {(i === 0
                    ? ['Core_Logic_Base', 'Matte_Interface', 'Grain_Synthesis', 'Structural_Joints']
                    : ['Privacy_Shell', 'Data_Persistence', 'Audit_Sequence', 'Intent_Verify']).map((link) => (
                      <li key={link} className="hover:text-amber-500 transition-all cursor-pointer flex items-center gap-4 hover:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-stone-900" />
                        {link}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-24 border-t-2 border-stone-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] opacity-40">
            <span>© MMXXIV-MMXXVI Monolith Assembly</span>
            <div className="flex gap-16">
              <span>Assembly: Verified</span>
              <span>Signal: Absolute</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
