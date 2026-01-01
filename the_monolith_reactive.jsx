import React, { useState, useEffect, useRef } from 'react';

// --- MICRO-INTERACTION COMPONENTS ---

const ScanLine = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="w-full h-[1px] bg-amber-500/30 absolute top-0 animate-scan" />
  </div>
);

const MountingBracket = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" width="20" height="20" className={`absolute text-stone-300 ${className}`}>
    <path d="M0 0h20v1H1v19H0V0z" fill="currentColor" />
  </svg>
);

const MinimalGateIcon = ({ className = "" }) => (
  <div className={`relative group/gate ${className}`}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="9" height="20" fill="currentColor" className="transition-transform duration-150 group-hover/gate:-translate-x-[2px]" />
      <rect x="6" y="6" width="5" height="20" fill="#1C1917" fillOpacity="0.4" />
      <rect x="19" y="6" width="9" height="20" fill="currentColor" className="transition-transform duration-150 group-hover/gate:translate-x-[2px]" />
      <rect x="21" y="6" width="5" height="20" fill="#1C1917" fillOpacity="0.4" />
      <rect x="15" y="10" width="2" height="12" fill="#F59E0B" />
      {/* Precision Scanning Line */}
      <rect x="13" y="15" width="6" height="1" fill="#F59E0B">
        <animate attributeName="y" values="8;24;8" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
);

const SectionHeader = ({ id, title, subtitle }) => (
  <div className="flex flex-col mb-16 relative group/header">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-[10px] font-black font-mono text-amber-600 bg-white px-2 py-0.5 border border-stone-200 relative overflow-hidden">
        PHASE_{id}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 -translate-x-full group-hover/header:translate-x-0 transition-transform duration-300" />
      </span>
      <div className="h-px flex-grow bg-stone-200" />
      <span className="text-[8px] font-mono text-stone-400 tracking-[0.3em] group-hover:text-stone-950 transition-colors uppercase">Status_Check: OK</span>
    </div>
    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-stone-950 transition-transform duration-300 group-hover/header:-translate-x-2">
      {title}
    </h2>
    <div className="flex items-center gap-4 mt-6">
      <div className="w-2 h-2 bg-stone-950 group-hover/header:rotate-90 transition-transform duration-300" />
      <p className="text-sm font-black uppercase tracking-[0.5em] text-stone-400">
        {subtitle}
      </p>
    </div>
  </div>
);

const EternalMark = ({ active, mouse }) => {
  const rotateX = (mouse.y - window.innerHeight / 2) * 0.005;
  const rotateY = (mouse.x - window.innerWidth / 2) * -0.005;

  const plates = [
    { x: 30, y: 30, w: 85, h: 150, coord: "X.0" }, { x: 125, y: 30, w: 85, h: 150, coord: "X.1" },
    { x: 30, y: 190, w: 85, h: 150, coord: "Y.0" }, { x: 125, y: 190, w: 85, h: 150, coord: "Y.1" },
    { x: 30, y: 350, w: 85, h: 160, coord: "Z.0" }, { x: 125, y: 350, w: 85, h: 160, coord: "Z.1" }
  ];

  return (
    <div 
      className="relative transition-transform duration-200 ease-out"
      style={{ transform: `perspective(2500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      <svg viewBox="0 0 240 540" width="240" height="540" className="filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
        <defs>
          <filter id="obsidianRefined" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="42" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            <feSpecularLighting surfaceScale="4" specularConstant="1" specularExponent="60" lightingColor="#fff">
              <feDistantLight azimuth="225" elevation="75" />
            </feSpecularLighting>
            <feComposite in="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>
        
        <g filter="url(#obsidianRefined)">
           {plates.map((p, i) => (
             <g key={i} className="group/plate cursor-crosshair">
                <rect 
                  x={p.x} y={p.y} width={p.w} height={p.h} 
                  fill="#0c0a09" 
                  className="transition-colors duration-150 group-hover/plate:fill-[#1a1715]" 
                />
                <text x={p.x + 8} y={p.y + 18} fill="#F59E0B" fontSize="6" fontWeight="900" fontFamily="monospace" className="opacity-30 group-hover/plate:opacity-100 transition-opacity">
                  {p.coord}
                </text>
             </g>
           ))}
        </g>

        <g opacity="0.15" stroke="#F59E0B" strokeWidth="0.5">
          <line x1="119" y1="30" x2="119" y2="510" />
          <line x1="30" y1="185" x2="210" y2="185" />
          <line x1="30" y1="345" x2="210" y2="345" />
        </g>

        <rect x="118.5" y="100" width="1" height="340" fill="#f59e0b" className="shadow-glow" />
      </svg>
    </div>
  );
};

const SystemModule = ({ id, children, active = true, label }) => (
  <section 
    id={`module-${id}`}
    className={`relative min-h-screen flex flex-col justify-center py-24 px-12 transition-all duration-300`}
  >
    <div className={`max-w-7xl mx-auto w-full relative p-12 lg:p-24 bg-white/70 border-x border-stone-200 transition-all duration-300 ${active ? 'border-amber-500 bg-white/90 translate-x-1' : 'border-transparent'}`}>
      <MountingBracket className="top-0 left-0" />
      <MountingBracket className="top-0 right-0 rotate-90" />
      <MountingBracket className="bottom-0 left-0 -rotate-90" />
      <MountingBracket className="bottom-0 right-0 rotate-180" />
      {active && <ScanLine />}
      
      {/* Side Marker */}
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
        ].map(stat => (
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
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const winHeight = window.innerHeight;
      const module = Math.floor((scrollPos + winHeight/2) / winHeight);
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

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1b1a] font-sans selection:bg-stone-950 selection:text-white relative overflow-x-hidden">
      
      {/* ARCHITECTURAL GRID */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }} />
      </div>

      {/* ATMOSPHERIC LENS */}
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

        {/* High-Contrast Mechanical Cursor */}
        <div 
          className="absolute w-10 h-10 flex items-center justify-center pointer-events-none"
          style={{ transform: `translate(${mouse.x - 20}px, ${mouse.y - 20}px)` }}
        >
          <div className="w-[1px] h-full bg-stone-950/10 absolute" />
          <div className="h-[1px] w-full bg-stone-950/10 absolute" />
          <div className="w-2 h-2 bg-stone-950 rounded-sm" />
          <div className="w-1 h-1 bg-amber-500 rounded-sm absolute" />
        </div>
      </div>

      {/* HUD SYSTEM */}
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

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[120] px-12 py-12 flex justify-between items-start bg-transparent pointer-events-none">
        <div className="flex items-center gap-8 group cursor-pointer pointer-events-auto">
          <div className="bg-stone-950 p-2.5 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-amber-600">
            <MinimalGateIcon className="text-white" />
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

      {/* MODULES */}
      <SystemModule id="0" active={activeModule === 0} label="Source_Chassis">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7">
            <SectionHeader id="00" title="The Mark." subtitle="First-Principles Geometry" />
            <div className="max-w-xl mt-12">
              <p className="text-3xl text-stone-600 leading-tight font-black font-serif italic mb-16 border-l-8 border-stone-200 pl-12">
                "We don't build apps. We build environments. A serious sanctuary for those who build the future with intent."
              </p>
              <div className="flex items-center gap-16">
                <div className="flex flex-col gap-3 group/spec cursor-default">
                   <span className="text-[8px] font-black uppercase tracking-widest text-stone-300 group-hover/spec:text-amber-600 transition-colors">Identity Registry</span>
                   <div className="flex items-center gap-6">
                      <MinimalGateIcon className="w-5 h-5" />
                      <span className="text-[12px] font-mono font-bold text-stone-950">ARK_V4.GATE</span>
                   </div>
                </div>
                <div className="h-12 w-[1px] bg-stone-100" />
                <div className="flex flex-col gap-3">
                   <span className="text-[8px] font-black uppercase tracking-widest text-stone-300">Composite Material</span>
                   <span className="text-[12px] font-mono font-bold text-stone-950 uppercase tracking-tighter">Matte_Obsidian_Forged</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center py-16 relative group/mark">
            <div className="absolute inset-0 border border-stone-100 pointer-events-none" />
            <EternalMark active={true} mouse={mouse} />
            <div className="absolute top-6 right-6 text-[8px] font-mono text-stone-300 uppercase tracking-widest">Active_Render</div>
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
            {['Ethereal.os', 'Atlas.mesh', 'Kinship.sys', 'Vesper.logic'].map((name, i) => (
              <div key={name} className="p-20 bg-white flex justify-between items-center hover:bg-stone-50 transition-all cursor-pointer group/item">
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] font-black text-stone-300 uppercase tracking-[0.6em] group-hover/item:text-amber-600">SUBJECT_0{i+1}</span>
                  <span className="text-5xl font-black uppercase tracking-tighter text-stone-950 group-hover/item:translate-x-3 transition-transform">{name}</span>
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
           
           <div className="mb-20">
             <SectionHeader id="02" title="The Outcome." subtitle="System Finalisation sequence" />
           </div>

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
                   <MinimalGateIcon className="text-black" />
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
                    : ['Privacy_Shell', 'Data_Persistence', 'Audit_Sequence', 'Intent_Verify']).map(link => (
                    <li key={link} className="hover:text-amber-500 transition-all cursor-pointer flex items-center gap-4 hover:translate-x-2">
                      <div className="w-1.5 h-1.5 bg-stone-900 group-hover:bg-amber-600" />
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

      <style dangerouslySetInnerHTML={{ __html: `
        .shadow-glow {
          filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.5));
        }
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}
