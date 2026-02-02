import React from 'react';
import { User, Shield, Key, BadgeCheck, Terminal, Map } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="h-full bg-obsidian p-8 flex flex-col items-center overflow-y-auto">
      <div className="w-full max-w-2xl bg-slate-950 border border-slate-800 p-8 tactical-border relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <User size={120} />
        </div>

        <div className="flex items-center gap-6 mb-10 relative z-10">
          <div className="w-24 h-24 bg-slate-900 border-2 border-cyber-blue flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)]">
            <User className="w-12 h-12 text-cyber-blue" />
          </div>
          <div>
            <h2 className="text-3xl font-mono font-bold text-white tracking-tighter">WATCHMAN_42</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] bg-cyber-blue/20 text-cyber-blue px-2 py-0.5 border border-cyber-blue/30 font-mono font-bold uppercase tracking-widest">Active Duty</span>
              <span className="text-[10px] text-slate-500 font-mono">ID: WS-9942-ALPHA</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Clearance Level</span>
              <div className="text-xl font-mono text-cyber-blue flex items-center gap-2">
                <Shield className="w-5 h-5" /> WATCHMAN CLASS
              </div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Assigned Sector</span>
              <div className="text-xl font-mono text-white flex items-center gap-2">
                <Map className="w-5 h-5" /> MID_EAST_GOLAN
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Network Access</span>
              <div className="text-xl font-mono text-green-500 flex items-center gap-2">
                <Key className="w-5 h-5" /> SECURE_UPLINK
              </div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Verification Status</span>
              <div className="text-xl font-mono text-white flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-cyber-blue" /> IDENTITY_CONFIRMED
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 relative z-10">
          <h3 className="text-xs font-mono font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyber-blue" /> Access Logs
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-slate-600 border-b border-slate-900 pb-1">
              <span>LAST_LOGIN: 2025-05-12 14:02:44</span>
              <span>NODE: DX-34</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-600 border-b border-slate-900 pb-1">
              <span>ALERT_ACKNOWLEDGED: EVT-4402</span>
              <span>SUCCESS</span>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-8 text-xs font-mono text-slate-600 hover:text-red-500 transition-colors uppercase tracking-[0.3em]">
        // Terminate Session
      </button>
    </div>
  );
};

export default Profile;
