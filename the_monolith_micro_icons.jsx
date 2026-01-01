import React from 'react';

/**
 * MONOLITH MICRO-ASSETS (32x32) - GEN 1, 2, 3 & 4
 * Designed for high-density UI environments.
 * Final Design. V4: MINIMAL
 */

// --- GENERATION 1 ---

export const MonolithIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="10" y="4" width="12" height="24" fill="#0C0A09" />
    <rect x="15.5" y="8" width="1" height="16" fill="#F59E0B" fillOpacity="0.8">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
    </rect>
  </svg>
);

export const SingularityIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="10" width="8" height="12" fill="#1C1917" />
    <rect x="18" y="10" width="8" height="12" fill="#1C1917" />
    <rect x="15" y="6" width="2" height="20" fill="#F59E0B" />
  </svg>
);

export const GlyphIcon = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 4L24 16L16 28L8 16L16 4Z" stroke="#0C0A09" strokeWidth="2"/>
    <rect x="15" y="12" width="2" height="8" fill="#F59E0B" />
  </svg>
);

// --- GENERATION 2 ---

export const MonolithMarkV2 = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="8" y="4" width="16" height="24" fill="#0C0A09" />
    <rect x="11" y="4" width="10" height="24" fill="#1C1917" />
    <rect x="15.5" y="6" width="1" height="20" fill="#F59E0B" />
    <rect x="8" y="4" width="1" height="24" fill="white" fillOpacity="0.1" />
    <rect x="23" y="4" width="1" height="24" fill="black" fillOpacity="0.3" />
  </svg>
);

export const SingularityV2 = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="8" width="8" height="16" fill="#1C1917" />
    <rect x="18" y="8" width="8" height="16" fill="#1C1917" />
    <rect x="15" y="4" width="2" height="24" fill="#F59E0B" />
    {[10, 14, 18, 22].map(y => (
      <rect key={y} x="14" y={y} width="4" height="0.5" fill="#F59E0B" fillOpacity="0.6" />
    ))}
  </svg>
);

export const GlyphV2 = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="6" width="20" height="20" stroke="#0C0A09" strokeWidth="1" />
    <path d="M16 2V30" stroke="#0C0A09" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M2 16H30" stroke="#0C0A09" strokeWidth="0.5" strokeDasharray="2 2" />
    <rect x="12" y="8" width="8" height="16" fill="#0C0A09" />
    <rect x="15.5" y="10" width="1" height="12" fill="#F59E0B" />
  </svg>
);

// --- GENERATION 3 ---

export const SingularityV3_Core = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="5" y="7" width="10" height="18" rx="0.5" fill="#0C0A09" />
    <rect x="17" y="7" width="10" height="18" rx="0.5" fill="#0C0A09" />
    <rect x="15" y="4" width="2" height="24" fill="#F59E0B" />
    <rect x="14.5" y="8" width="3" height="16" fill="#F59E0B" fillOpacity="0.2" />
    <rect x="15" y="15" width="2" height="2" fill="white" fillOpacity="0.5" />
  </svg>
);

export const SingularityV3_Array = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="7" y="9" width="7" height="14" fill="#1C1917" />
    <rect x="18" y="9" width="7" height="14" fill="#1C1917" />
    <rect x="15.5" y="2" width="1" height="28" fill="#F59E0B" />
    <circle cx="16" cy="16" r="1.5" stroke="#F59E0B" strokeWidth="0.5" />
    {[5, 11, 21, 27].map(y => (
      <rect key={y} x="14" y={y} width="4" height="0.5" fill="#F59E0B" fillOpacity="0.4" />
    ))}
    <path d="M4 4L6 4M4 4L4 6" stroke="#D6D3D1" strokeWidth="0.5" />
    <path d="M28 28L26 28M28 28L28 26" stroke="#D6D3D1" strokeWidth="0.5" />
  </svg>
);

export const SingularityV3_Gate = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="6" y="6" width="5" height="20" fill="#1C1917" />
    <rect x="19" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="21" y="6" width="5" height="20" fill="#1C1917" />
    <rect x="15" y="2" width="2" height="6" fill="#F59E0B" />
    <rect x="15" y="10" width="2" height="12" fill="#F59E0B" />
    <rect x="15" y="24" width="2" height="6" fill="#F59E0B" />
    <rect x="13" y="15" width="6" height="0.5" fill="#F59E0B" fillOpacity="0.3" />
  </svg>
);

// --- GENERATION 4 (GATE EVOLUTIONS) ---

// V4.A: Minimal Gate (The Requested Clone)
export const SingularityV4_MinimalGate = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Side Structures Identical to V3_Gate */}
    <rect x="4" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="6" y="6" width="5" height="20" fill="#1C1917" />
    <rect x="19" y="6" width="9" height="20" fill="#0C0A09" />
    <rect x="21" y="6" width="5" height="20" fill="#1C1917" />
    {/* Only the central vertical line remains */}
    <rect x="15" y="10" width="2" height="12" fill="#F59E0B" />
    <rect x="13" y="15" width="6" height="0.5" fill="#F59E0B" fillOpacity="0.3" />
  </svg>
);

// V4.B: Phased Gate (Structural Interference)
export const SingularityV4_PhasedGate = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Slabs with horizontal architectural breaks */}
    <g fill="#0C0A09">
      <rect x="4" y="6" width="9" height="6" />
      <rect x="4" y="13" width="9" height="6" />
      <rect x="4" y="20" width="9" height="6" />
      <rect x="19" y="6" width="9" height="6" />
      <rect x="19" y="13" width="9" height="6" />
      <rect x="19" y="20" width="9" height="6" />
    </g>
    <rect x="6" y="6" width="5" height="20" fill="#1C1917" opacity="0.6" />
    <rect x="21" y="6" width="5" height="20" fill="#1C1917" opacity="0.6" />
    {/* The spine split into pulses */}
    {[8, 12, 16, 20, 24].map(y => (
      <rect key={y} x="15" y={y} width="2" height="2" fill="#F59E0B" />
    ))}
    <rect x="12" y="16" width="8" height="0.5" fill="#F59E0B" opacity="0.5" />
  </svg>
);

// V4.C: Siphon Gate (Compression & Focal Point)
export const SingularityV4_SiphonGate = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Slabs angled slightly inward toward center */}
    <path d="M4 6H14L12 26H4V6Z" fill="#0C0A09" />
    <path d="M28 6H18L20 26H28V6Z" fill="#0C0A09" />
    {/* High pressure focal line */}
    <rect x="15.5" y="4" width="1" height="24" fill="#F59E0B" />
    <rect x="14.5" y="14" width="3" height="4" fill="#F59E0B" />
    <circle cx="16" cy="16" r="4" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.4" />
    {/* Micro-tech detail */}
    <rect x="8" y="8" width="1" height="1" fill="white" opacity="0.2" />
    <rect x="23" y="8" width="1" height="1" fill="white" opacity="0.2" />
  </svg>
);

// --- PREVIEW COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] flex flex-col items-center justify-center p-12 font-sans overflow-auto">
      <div className="mb-16 text-center">
        <h1 className="text-2xl font-black uppercase tracking-tighter text-stone-950">Micro Icons</h1>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 mt-2">Evolutionary Layers</p>
      </div>

      <div className="flex flex-col gap-20">
        {/* ROW 1: GEN 1 */}
        <div className="flex flex-col gap-6">
          <span className="text-[8px] font-black uppercase tracking-[0.6em] text-stone-300 text-center">Gen 01: Foundations</span>
          <div className="grid grid-cols-3 gap-12">
            <IconBox Icon={MonolithIcon} label="The Mark" />
            <IconBox Icon={SingularityIcon} label="Singularity" />
            <IconBox Icon={GlyphIcon} label="The Glyph" />
          </div>
        </div>

        {/* ROW 2: GEN 2 */}
        <div className="flex flex-col gap-6">
          <span className="text-[8px] font-black uppercase tracking-[0.6em] text-stone-400/40 text-center">Gen 02: Structural</span>
          <div className="grid grid-cols-3 gap-12">
            <IconBox Icon={MonolithMarkV2} label="Mark V2" />
            <IconBox Icon={SingularityV2} label="Singularity V2" />
            <IconBox Icon={GlyphV2} label="Glyph V2" />
          </div>
        </div>

        {/* ROW 3: GEN 3 */}
        <div className="flex flex-col gap-6 text-center">
          <span className="text-[8px] font-black uppercase tracking-[0.6em] text-stone-400/60">Gen 03: Singularity</span>
          <div className="grid grid-cols-3 gap-12">
            <IconBox Icon={SingularityV3_Core} label="V3: Core" />
            <IconBox Icon={SingularityV3_Array} label="V3: Array" />
            <IconBox Icon={SingularityV3_Gate} label="V3: Gate" />
          </div>
        </div>

        {/* ROW 4: GEN 4 */}
        <div className="flex flex-col gap-6 text-center">
          <span className="text-[8px] font-black uppercase tracking-[0.6em] text-amber-600/60">Gen 04: Gate Evolutions</span>
          <div className="grid grid-cols-3 gap-12">
            <IconBox Icon={SingularityV4_MinimalGate} label="V4: Minimal" />
            <IconBox Icon={SingularityV4_PhasedGate} label="V4: Phased" />
            <IconBox Icon={SingularityV4_SiphonGate} label="V4: Siphon" />
          </div>
        </div>
      </div>

      <footer className="mt-32 text-[8px] font-black uppercase tracking-[0.6em] text-stone-300">
        1:1 Precision Rendering
      </footer>
    </div>
  );
}

function IconBox({ Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="p-8 bg-white border border-stone-200 shadow-sm flex items-center justify-center group hover:border-amber-500 transition-colors cursor-crosshair">
        <Icon className="transition-transform group-hover:scale-125" />
      </div>
      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500">{label}</span>
    </div>
  );
}
