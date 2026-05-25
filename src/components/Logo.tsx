import React from 'react';

export function CustomLogoIcon({ className = "", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Outline */}
      <path 
        d="M 50 105 C 50 105, 95 85, 95 40 V 20 L 50 5 L 5 20 V 40 C 5 85, 50 105, 50 105 Z" 
        stroke="currentColor" 
        strokeWidth={strokeWidth * 4} 
        strokeLinejoin="round"
      />
      
      {/* Keg Body (Filled) */}
      <g fill="currentColor">
        {/* Top Rim */}
        <path d="M 32 32 C 50 29, 50 29, 68 32 V 42 H 32 Z" />
        {/* Handle Cutout */}
        <path d="M 42 34 H 58 V 37 H 42 Z" fill="#ffffff" style={{ mixBlendMode: 'destination-out' }} />
        
        {/* Middle Section */}
        <path d="M 30 45 H 70 V 67 H 30 Z" />
        
        {/* Bottom Section */}
        <path d="M 31 70 C 50 72, 50 72, 69 70 V 80 C 50 83, 50 83, 31 80 Z" />
        
        {/* Tap */}
        <path d="M 70 54 H 78 V 61 H 73 V 66 H 69 V 54" />
        <path d="M 74 48 L 76 53 H 72 L 74 48 Z" />
        <circle cx="74" cy="54" r="2" />
      </g>
    </svg>
  );
}

export default function Logo({ className = "", isDark = false }: { className?: string, isDark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
        <div className={`relative flex items-center justify-center w-11 h-11 shrink-0`}>
          <CustomLogoIcon 
            className={`w-full h-full ${isDark ? 'text-white' : 'text-[#1B324D]'}`} 
            strokeWidth={1.2} 
          />
        </div>
        <div className="flex flex-col mt-1">
          <span className={`text-xl font-sans font-bold leading-none tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>HERO KEG</span>
          <span className={`text-[0.45rem] mt-1 tracking-[0.16em] font-semibold uppercase ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>Service and Trading PLC</span>
        </div>
    </div>
  )
}
