import React from 'react';
import { Shield, Radio, Lock, Users, Send } from 'lucide-react';

const WarRoom: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-obsidian">
      <div className="p-4 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Radio className="text-alert-red w-5 h-5 animate-pulse" />
          <h2 className="font-mono font-bold text-white uppercase tracking-wider">Secure Comms Channel // Sector 7</h2>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 1,402 WATCHMEN ONLINE</span>
          <span className="text-green-500">● ENCRYPTED</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex flex-col gap-1 max-w-2xl">
          <div className="flex items-baseline gap-2">
            <span className="text-cyber-blue font-mono text-[10px]">[WATCHMAN_42]</span>
            <span className="text-slate-600 font-mono text-[10px]">14:02:11</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-3 rounded-sm text-sm text-slate-300">
            Confirming visual on troop movement at Sector North-01. Correlates with the Ezekiel 38 pattern matching.
          </div>
        </div>

        <div className="flex flex-col gap-1 max-w-2xl">
          <div className="flex items-baseline gap-2">
            <span className="text-prophecy-gold font-mono text-[10px]">[COMMANDER_SIGMA]</span>
            <span className="text-slate-600 font-mono text-[10px]">14:05:45</span>
          </div>
          <div className="bg-slate-900 border border-prophecy-gold/20 p-3 rounded-sm text-sm text-slate-300">
            Copy that. Elevating threat level for that sector. Intercessors, initiate protocol "Shield of Faith".
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-64 opacity-20 border-2 border-dashed border-slate-800 rounded-lg">
           <Lock className="w-12 h-12 mb-4" />
           <p className="font-mono text-xs">HISTORY ARCHIVE ENCRYPTED // UPGRADE TO WATCHMAN CLASS TO VIEW FULL LOGS</p>
        </div>
      </div>

      <div className="p-4 bg-slate-950 border-t border-slate-800">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="TYPE TRANSMISSION..." 
            className="flex-1 bg-obsidian border border-slate-800 rounded-sm px-4 py-2 text-sm font-mono focus:border-cyber-blue outline-none"
          />
          <button className="bg-cyber-blue text-obsidian px-4 py-2 rounded-sm font-bold flex items-center gap-2">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarRoom;