import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface TickerProps {
  threatLevel: string;
}

const Ticker: React.FC<TickerProps> = ({ threatLevel }) => {
  
  // Visual mapping for lights based on threat level
  const isHigh = threatLevel === 'HIGH' || threatLevel === 'CRITICAL';
  
  return (
    <div className="w-full bg-gradient-to-r from-red-950 to-slate-900 border-b border-red-900/50 h-10 flex items-center overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-30">
      
      {/* DEFCON LIGHTS VISUAL */}
      <div className="absolute left-0 top-0 bottom-0 bg-slate-900/90 backdrop-blur px-4 flex items-center gap-3 z-20 border-r border-slate-700 shadow-xl">
         
         <div className="flex gap-2">
           {/* Green/Safe */}
           <div className={`w-3 h-3 rounded-full border border-green-900 bg-green-900/20 shadow-[0_0_5px_rgba(0,255,0,0.1)]`}></div>
           
           {/* Yellow/Caution */}
           <div className={`w-3 h-3 rounded-full border border-yellow-900 bg-yellow-900/20`}></div>
           
           {/* Orange/Severe */}
           <div className={`w-3 h-3 rounded-full border border-orange-900 bg-orange-900/20`}></div>
           
           {/* Red/Critical - Active if High */}
           <div className={`w-3 h-3 rounded-full border border-red-500 bg-red-600 shadow-[0_0_10px_#ef4444] ${isHigh ? 'animate-pulse' : 'opacity-20'}`}></div>
           
           {/* Deep Red/Apocalyptic */}
           <div className="w-3 h-3 rounded-full border border-red-900 bg-red-950/50 opacity-50"></div>
         </div>
         
         <div className="h-6 w-px bg-slate-700 mx-1"></div>

        <AlertTriangle className={`w-4 h-4 ${isHigh ? 'text-red-500 animate-pulse' : 'text-slate-500'} mr-1`} />
        <span className="text-xs font-bold font-mono text-white tracking-wider whitespace-nowrap">
          THREAT: <span className={isHigh ? 'text-red-500' : 'text-yellow-500'}>{threatLevel}</span>
        </span>
      </div>
      
      <div className="whitespace-nowrap animate-marquee flex items-center gap-12 pl-80 text-red-400 font-mono text-xs tracking-widest">
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-ping"></span> BREAKING: UNUSUAL SEISMIC ACTIVITY DETECTED IN TURKEY REGION</span>
        <span className="opacity-50">///</span>
        <span>INTERCEPTED: TROOP MOVEMENTS NORTHERN SYRIA BORDER</span>
        <span className="opacity-50">///</span>
        <span>FINANCIAL ALERT: GLOBAL MARKETS SHOWING SIGNS OF VOLATILITY LINKED TO MID-EAST TENSIONS</span>
        <span className="opacity-50">///</span>
        <span>SYSTEM STATUS: PROPHETIC MATCHING ALGORITHM ONLINE AND SCANNING...</span>
        <span className="opacity-50">///</span>
        <span>BREAKING: UNUSUAL SEISMIC ACTIVITY DETECTED IN TURKEY REGION</span>
        <span className="opacity-50">///</span>
        <span>INTERCEPTED: TROOP MOVEMENTS NORTHERN SYRIA BORDER</span>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;