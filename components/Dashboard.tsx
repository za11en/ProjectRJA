import React, { useState, useEffect } from 'react';
import { IntelEvent, AppView } from '../types';
import { INITIAL_EVENTS } from '../data/mockData';
import { ProphecyEngine } from '../services/prophecyEngine';
import IntelFeed from './IntelFeed';
import TacticalMap from './TacticalMap';
import Ticker from './Ticker';
import WarRoom from './WarRoom';
import IntelArchive from './IntelArchive';
import BibleStudy from './BibleStudy';
import Profile from './Profile';
import { 
  Menu, User, Settings, LogOut, Search, Bell, Monitor, Radio, Database, BookOpen 
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
  onHome: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, onHome }) => {
  const [events, setEvents] = useState<IntelEvent[]>(INITIAL_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<IntelEvent | null>(null);
  const [threatLevel, setThreatLevel] = useState<string>('ELEVATED');
  const [activeTab, setActiveTab] = useState<AppView>(AppView.DASHBOARD);

  // Simulate incoming live data
  useEffect(() => {
    const interval = setInterval(() => {
       if (Math.random() > 0.9) {
         const newEvent = ProphecyEngine.mockIngest(
           "New satellite imagery confirms movement near northern border.",
           "MILITARY_CONFLICT",
           Math.floor(Math.random() * 5)
         );
         setEvents(prev => [newEvent, ...prev]);
       }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const criticalCount = events.filter(e => e.severity === 'CRITICAL').length;
    if (criticalCount > 0) setThreatLevel('HIGH');
    else setThreatLevel('ELEVATED');
  }, [events]);

  const handleEventClick = (event: IntelEvent) => {
    setSelectedEvent(event);
    setActiveTab(AppView.DASHBOARD); 
  };

  return (
    <div className="h-screen w-screen bg-obsidian flex flex-col overflow-hidden text-slate-200">
      <div className="scanline"></div>
      
      {/* TOP NAVIGATION / HUD */}
      <nav className="h-14 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4 z-20">
        <div className="flex items-center gap-6">
          <div className="text-xl font-mono font-bold tracking-tighter text-white cursor-pointer group" onClick={onHome}>
             PROPHECY<span className="text-cyber-blue group-hover:text-cyan-400 transition-colors">SCANNER</span>
          </div>
          
          <div className="hidden lg:flex space-x-1">
             <button 
               onClick={() => setActiveTab(AppView.DASHBOARD)}
               className={`px-4 py-1.5 text-[10px] font-mono transition-all border flex items-center gap-2 ${
                 activeTab === AppView.DASHBOARD 
                   ? 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/50' 
                   : 'text-slate-500 border-transparent hover:text-slate-300'
               }`}
             >
               <Monitor className="w-3 h-3" /> COMMAND DECK
             </button>
             <button 
               onClick={() => setActiveTab(AppView.INTEL_ARCHIVE)}
               className={`px-4 py-1.5 text-[10px] font-mono transition-all border flex items-center gap-2 ${
                 activeTab === AppView.INTEL_ARCHIVE 
                   ? 'bg-prophecy-gold/10 text-prophecy-gold border-prophecy-gold/50' 
                   : 'text-slate-500 border-transparent hover:text-slate-300'
               }`}
             >
               <Database className="w-3 h-3" /> INTEL ARCHIVE
             </button>
             <button 
               onClick={() => setActiveTab(AppView.WAR_ROOM)}
               className={`px-4 py-1.5 text-[10px] font-mono transition-all border flex items-center gap-2 ${
                 activeTab === AppView.WAR_ROOM 
                   ? 'bg-alert-red/10 text-alert-red border-alert-red/50' 
                   : 'text-slate-500 border-transparent hover:text-slate-300'
               }`}
             >
               <Radio className="w-3 h-3" /> WAR ROOM
             </button>
             <button 
               onClick={() => setActiveTab(AppView.BIBLE_STUDY)}
               className={`px-4 py-1.5 text-[10px] font-mono transition-all border flex items-center gap-2 ${
                 activeTab === AppView.BIBLE_STUDY 
                   ? 'bg-prophecy-gold/20 text-white border-prophecy-gold/40' 
                   : 'text-slate-500 border-transparent hover:text-slate-300'
               }`}
             >
               <BookOpen className="w-3 h-3" /> BIBLE STUDY
             </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="relative hidden sm:block">
             <Search className="w-4 h-4 text-slate-500 absolute left-2 top-1.5" />
             <input 
               type="text" 
               placeholder="SCAN SECTOR..." 
               className="bg-slate-900 border border-slate-800 rounded-sm py-1 pl-8 pr-2 text-[10px] font-mono text-white focus:outline-none focus:border-cyber-blue w-32"
             />
           </div>
           <Bell className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer" />
           <div className="h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group relative cursor-pointer" onClick={() => setActiveTab(AppView.PROFILE)}>
             <User className={`w-4 h-4 transition-colors ${activeTab === AppView.PROFILE ? 'text-cyber-blue' : 'text-slate-400 group-hover:text-white'}`} />
             <div className="absolute top-10 right-0 w-32 bg-slate-950 border border-slate-800 p-2 hidden group-hover:block z-50">
                <button onClick={() => setActiveTab(AppView.PROFILE)} className="w-full text-left text-[10px] font-mono text-slate-500 hover:text-cyber-blue mb-2 flex items-center gap-2">
                  <User className="w-3 h-3" /> USER_IDENTITY
                </button>
                <button onClick={onLogout} className="w-full text-left text-[10px] font-mono text-slate-500 hover:text-alert-red flex items-center gap-2">
                  <LogOut className="w-3 h-3" /> LOGOUT_UPLINK
                </button>
             </div>
           </div>
        </div>
      </nav>

      {/* THREAT TICKER */}
      <Ticker threatLevel={threatLevel} />

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* LEFT PANEL: INTEL FEED (Only on Dashboard map view) */}
        {activeTab === AppView.DASHBOARD && (
          <div className="w-80 md:w-96 flex-shrink-0 z-10 h-full">
             <IntelFeed events={events} onSelect={handleEventClick} />
          </div>
        )}

        {/* CONTENT AREA */}
        <div className="flex-1 relative bg-slate-950">
           {activeTab === AppView.DASHBOARD ? (
             <>
               <TacticalMap events={events} onEventClick={handleEventClick} />
               
               {/* OVERLAY: Selected Event Detail */}
               {selectedEvent && (
                 <div className="absolute top-4 right-4 w-80 bg-slate-950/95 backdrop-blur-xl border border-slate-700 p-5 shadow-2xl tactical-border z-30">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xs font-mono font-bold text-white tracking-widest uppercase">Intel Detail // {selectedEvent.id}</h3>
                      <button onClick={() => setSelectedEvent(null)} className="text-slate-500 hover:text-white">✕</button>
                    </div>
                    
                    <div className="space-y-5">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">Current Status</span>
                        <div className={`text-sm font-bold font-mono mt-1 ${selectedEvent.severity === 'CRITICAL' ? 'text-alert-red animate-pulse' : 'text-cyber-blue'}`}>
                          {selectedEvent.severity} PRIORITY THREAT
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">Transmission Summary</span>
                        <p className="text-xs text-slate-300 leading-relaxed mt-1 font-sans">{selectedEvent.headline}</p>
                      </div>

                      {selectedEvent.prophecyMatch && (
                         <div className="bg-slate-900/50 border border-prophecy-gold/20 p-3 mt-2">
                            <span className="text-[10px] text-prophecy-gold font-mono uppercase font-bold mb-2 block">Prophetic Correlation</span>
                            <div className="text-xs text-slate-200 font-serif italic mb-3 leading-relaxed">
                               "{selectedEvent.prophecyMatch.text}"
                            </div>
                            <div className="flex items-center justify-end gap-2">
                               <span className="text-[10px] font-mono text-prophecy-gold uppercase">
                                 {selectedEvent.prophecyMatch.book} {selectedEvent.prophecyMatch.chapter}:{selectedEvent.prophecyMatch.verse}
                               </span>
                            </div>
                         </div>
                      )}

                      <div className="flex gap-2 pt-2">
                         <button className="flex-1 bg-cyber-blue/10 border border-cyber-blue/50 text-cyber-blue text-[10px] font-mono py-2 hover:bg-cyber-blue/20 transition-colors uppercase tracking-widest">
                           Full Report
                         </button>
                         <button className="flex-1 bg-slate-900 border border-slate-700 text-slate-500 text-[10px] font-mono py-2 hover:bg-slate-800 transition-colors uppercase tracking-widest">
                           Verify
                         </button>
                      </div>
                    </div>
                 </div>
               )}
             </>
           ) : activeTab === AppView.WAR_ROOM ? (
             <WarRoom />
           ) : activeTab === AppView.INTEL_ARCHIVE ? (
             <IntelArchive />
           ) : activeTab === AppView.BIBLE_STUDY ? (
             <BibleStudy />
           ) : activeTab === AppView.PROFILE ? (
             <Profile />
           ) : (
             <div className="p-20 text-center font-mono text-slate-500">SYSTEM_ERROR: UNKNOWN_VIEW</div>
           )}
        </div>

      </div>
      
      {/* STATUS FOOTER */}
      <div className="h-8 bg-slate-950 border-t border-slate-800 flex items-center justify-between px-4 text-[10px] font-mono text-slate-600 z-20">
         <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span> SYSTEM: ONLINE</span>
            <span>UPLINK_LATENCY: 12ms</span>
            <span>SECURE_NODE: ALPHA-7</span>
         </div>
         <div className="flex gap-6 items-center">
            <span className="text-cyber-blue">WATCHMEN_ACTIVE: 1,402</span>
            <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">BETA v1.0.4</span>
         </div>
      </div>

    </div>
  );
};

export default Dashboard;
