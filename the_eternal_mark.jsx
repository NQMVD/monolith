import React, { useState, useEffect, useRef } from 'react';

// --- THE EVOLVED MARK ---
// A complex, multi-layered architectural identity.
const TheEternalMark = ({ active, mouse }) => {
  const rotateX = (mouse.y - window.innerHeight / 2) * 0.015;
  const rotateY = (mouse.x - window.innerWidth / 2) * -0.015;

  return (
    <div 
      className="relative transition-all duration-1000 ease-out"
      style={{ 
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${active ? 1.08 : 1})`,
      }}
    >
      <svg 
        viewBox="0 0 240 540" 
        width="240" 
        height="540" 
        className="filter drop-shadow-[0_60px_120px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Advanced Surface Texture: Forged Obsidian */}
          <filter id="forgedObsidian" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="6" seed="12" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            <feSpecularLighting surfaceScale="8" specularConstant="1.2" specularExponent="35" lightingColor="#fff">
              <feDistantLight azimuth="225" elevation="60" />
            </feSpecularLighting>
            <feComposite in="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>

          {/* Core Singularity Glow */}
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

          <mask id="monolithMask">
             <rect x="0" y="0" width="240" height="540" fill="white" />
             <rect x="119" y="100" width="2" height="340" fill="black" />
          </mask>
        </defs>

        {/* 1. THE REAR PLATE (Foundation) */}
        <rect 
          x="30" y="30" width="180" height="480" 
          fill="#0c0a09" 
          filter="url(#forgedObsidian)"
          opacity="0.8"
        />

        {/* 2. THE CHANNEL (The Recessed Void) */}
        <path 
          d="M120 60 L120 480" 
          stroke="#1c1917" 
          strokeWidth="40" 
          strokeLinecap="butt" 
        />

        {/* 3. THE FLANKING PLATES (Beveled Geometry) */}
        {/* Left Shroud */}
        <path 
          d="M40 50 L110 50 L110 490 L40 490 Z" 
          fill="#141210" 
          filter="url(#forgedObsidian)"
        />
        {/* Right Shroud */}
        <path 
          d="M130 50 L200 50 L200 490 L130 490 Z" 
          fill="#141210" 
          filter="url(#forgedObsidian)"
        />

        {/* 4. TECHNICAL ETCHINGS (Internal Geometry) */}
        <g stroke="white" strokeOpacity="0.05" strokeWidth="0.5">
          {[120, 180, 240, 300, 360, 420].map(y => (
            <line key={y} x1="50" y1={y} x2="100" y2={y} />
          ))}
          {[120, 180, 240, 300, 360, 420].map(y => (
            <line key={y} x1="140" y1={y} x2="190" y2={y} />
          ))}
          <path d="M70 100 L70 440" />
          <path d="M170 100 L170 440" />
        </g>

        {/* 5. THE DATA SPINE (The Soul) */}
        <g filter="url(#coreGlow)" className="animate-pulse-slow">
           <rect x="119" y="100" width="2" height="340" fill="url(#spineGradient)" />
           {/* Horizontal "Ribs" of Logic */}
           {[150, 200, 250, 300, 350, 390].map(y => (
             <rect key={y} x="110" y={y} width="20" height="0.5" fill="#f59e0b" opacity="0.6" />
           ))}
        </g>

        {/* 6. CORNER FASTENERS (Precision Detail) */}
        <circle cx="50" cy="65" r="1.5" fill="#f59e0b" opacity="0.3" />
        <circle cx="190" cy="65" r="1.5" fill="#f59e0b" opacity="0.3" />
        <circle cx="50" cy="475" r="1.5" fill="#f59e0b" opacity="0.3" />
        <circle cx="190" cy="475" r="1.5" fill="#f59e0b" opacity="0.3" />

      </svg>
      
      {/* Structural HUD Annotations */}
      <div className="absolute -left-24 top-1/4 flex flex-col items-end gap-2 opacity-20 pointer-events-none">
        <span className="text-[7px] font-black uppercase tracking-[0.4em]">Core_Vector_Y</span>
        <div className="w-16 h-px bg-stone-900" />
      </div>
      <div className="absolute -right-24 bottom-1/4 flex flex-col items-start gap-2 opacity-20 pointer-events-none">
        <div className="w-16 h-px bg-stone-900" />
        <span className="text-[7px] font-black uppercase tracking-[0.4em]">Axis_Interlink</span>
      </div>
    </div>
  );
};

export default function App() {
  const [active, setActive] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [revealStage, setRevealStage] = useState(0);

  useEffect(() => {
    const sequence = [
      setTimeout(() => setRevealStage(1), 400),
      setTimeout(() => setRevealStage(2), 1200),
      setTimeout(() => setRevealStage(3), 2200),
    ];
    
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      sequence.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1c1b1a] font-sans selection:bg-amber-600 selection:text-white relative overflow-hidden flex flex-col cursor-none">
      
      {/* THE ATMOSPHERIC LENS */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <svg className="absolute w-full h-full opacity-[0.06] mix-blend-multiply">
          <filter id="heavyGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heavyGrain)" />
        </svg>

        {/* Dynamic Light Track */}
        <div 
          className="absolute w-[1200px] h-[1200px] rounded-full opacity-[0.12] blur-[160px] transition-transform duration-700 ease-out"
          style={{ 
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            transform: `translate(${mouse.x - 600}px, ${mouse.y - 600}px)`,
          }}
        />

        {/* Precision Cursor */}
        <div 
          className="absolute w-8 h-8 border border-stone-900/20 rounded-full flex items-center justify-center transition-transform duration-100"
          style={{ transform: `translate(${mouse.x - 16}px, ${mouse.y - 16}px)` }}
        >
          <div className="w-[1px] h-4 bg-stone-900/40 absolute" />
          <div className="h-[1px] w-4 bg-stone-900/40 absolute" />
          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
        </div>
      </div>

      {/* THE IDENTITY CANVAS */}
      <main className="flex-grow relative flex flex-col items-center justify-center p-12 overflow-hidden">
        
        {/* Architectural Background Grid */}
        <div className={`absolute inset-0 transition-opacity duration-[3s] pointer-events-none ${revealStage >= 1 ? 'opacity-30' : 'opacity-0'}`}>
          <div className="absolute top-1/2 w-full h-px bg-stone-300" />
          <div className="absolute left-1/2 h-full w-px bg-stone-300" />
          <div className="absolute top-1/4 bottom-1/4 left-1/4 right-1/4 border border-stone-300 opacity-50" />
          {/* Diagonal Guides */}
          <div className="absolute top-1/2 left-1/2 w-[200vw] h-px bg-stone-200 -translate-x-1/2 -rotate-45" />
          <div className="absolute top-1/2 left-1/2 w-[200vw] h-px bg-stone-200 -translate-x-1/2 rotate-45" />
        </div>

        <div className="relative z-10 flex flex-col items-center mt-[-40px]">
          
          <div 
            className={`transition-all duration-[2.5s] cursor-pointer ${revealStage >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-75 blur-xl'}`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <TheEternalMark active={active} mouse={mouse} />
          </div>

          <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${revealStage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block px-3 py-1 border border-stone-200 bg-white/50 backdrop-blur-sm rounded-sm mb-6">
               <span className="text-[8px] font-black uppercase tracking-[0.5em] text-stone-400">Structural Identity v4.2</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 text-stone-950">
              The <span className="font-serif italic font-light lowercase text-stone-400">Mark</span>
            </h1>
            
            <div className="flex items-center justify-center gap-10">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-400">Integrity</span>
              <div className="w-12 h-px bg-stone-200" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-400">Gravity</span>
            </div>

            <p className="mt-12 text-stone-500 font-serif italic text-2xl max-w-2xl mx-auto leading-relaxed opacity-80">
              "A geometry built to contain the weight of the future."
            </p>
          </div>
        </div>

        {/* Branding Data Points */}
        <div className="absolute bottom-16 left-16 flex flex-col gap-3">
          <div className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-400">Identity Spec</div>
          <div className="flex gap-4 items-center">
            <div className="h-px w-16 bg-stone-200" />
            <span className="text-xs font-mono font-bold text-stone-800">1:2.25 STRUCTURAL</span>
          </div>
          <div className="text-[8px] font-mono text-stone-400">OBSIDIAN_CORE / AMBER_EMISSION</div>
        </div>

        <div className="absolute top-16 right-16 text-right flex flex-col items-end gap-2">
          <div className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-400">Status</div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
             <span className="text-xs font-mono font-bold text-stone-800">PERMANENT_SIGNAL</span>
          </div>
        </div>
      </main>

      {/* THE TACTILE FOOTER */}
      <footer className="bg-stone-950 text-stone-600 py-16 px-16 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-12 z-20">
        <div className="flex flex-wrap gap-16">
          <FooterStat label="Foundation" value="Monolith_Core" />
          <FooterStat label="Materiality" value="Forged Obsidian" />
          <FooterStat label="Evolution" value="Non-Destructive" />
          <FooterStat label="Signal" value="Synchronous" />
        </div>
        <div className="flex flex-col items-end gap-2">
           <div className="text-[9px] font-black uppercase tracking-[0.8em] opacity-30">
             MMXXIV Software Evolution
           </div>
           <div className="h-px w-32 bg-stone-800" />
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
          transform-origin: center;
        }
        .cursor-none * {
          cursor: none !important;
        }
      `}} />
    </div>
  );
}

function FooterStat({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[8px] font-black uppercase tracking-[0.4em] text-stone-500">{label}</span>
      <span className="text-[11px] font-bold uppercase tracking-widest text-white/90">{value}</span>
    </div>
  );
}
