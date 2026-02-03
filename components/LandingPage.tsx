import React from 'react';
import { 
  Activity, ArrowRight, Crosshair, ScrollText, Radio, Zap, History, ScanEye, CheckCircle2
} from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
  onCheckout: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter, onCheckout }) => {
  return (
    <div className="min-h-screen bg-obsidian text-slate-200 font-sans selection:bg-cyber-blue selection:text-obsidian">
      
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 bg-obsidian/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Activity className="text-cyber-blue w-6 h-6 animate-pulse" />
            <span className="font-mono font-bold text-xl tracking-tighter text-white">PROPHECY<span className="text-cyber-blue group-hover:text-cyan-400">SCANNER</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-mono font-bold tracking-widest text-slate-400">
            <a href="#features" className="hover:text-cyber-blue transition-colors">CAPABILITIES</a>
            <a href="#tiers" className="hover:text-cyber-blue transition-colors">CLEARANCE</a>
            <a href="#manifesto" className="hover:text-cyber-blue transition-colors">MANIFESTO</a>
          </div>
          <button 
            onClick={onEnter}
            className="px-4 py-2 bg-cyber-blue/10 hover:bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50 text-xs font-mono rounded-sm transition-all"
          >
            // ENTER_SYSTEM
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Tactical Laptop" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-red-900 bg-red-900/40 text-red-400 text-xs font-mono mb-8 animate-pulse backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 shadow-[0_0_10px_#ef4444]"></span>
            GLOBAL THREAT LEVEL: ELEVATED
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-mono uppercase leading-none drop-shadow-2xl">
            GLOBAL CONFLICT <br/> MONITORED THROUGH <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-purple-500">PROPHETIC INTELLIGENCE</span>
          </h1>
          
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
            Real-time geospatial tracking of military and weather events correlated with Ancient Scripture. Don't just watch the news—discern the signs.
          </p>
          
          <div className="flex justify-center">
            {/* SINGLE ENTRY BUTTON */}
            <button 
              onClick={onEnter}
              className="px-10 py-5 bg-cyber-blue hover:bg-cyan-400 text-obsidian font-bold font-mono text-lg rounded-sm flex items-center justify-center transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]"
            >
              ENTER COMMAND DECK <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE BANNER */}
      <section id="manifesto" className="relative border-y border-slate-800 bg-slate-950 overflow-hidden py-24">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Abstract Data" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-center">
            <div className="text-center bg-obsidian/80 backdrop-blur p-10 border border-slate-700 max-w-3xl relative">
               <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-blue -translate-x-1 -translate-y-1"></div>
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-blue translate-x-1 translate-y-1"></div>
               <h3 className="text-cyber-blue font-mono font-bold text-lg mb-4 tracking-widest uppercase">// SYSTEM MANIFESTO</h3>
               <p className="text-slate-300 italic font-serif text-xl leading-relaxed mb-6">
                 "Seal the book, even to the time of the end; many shall run to and fro, and knowledge shall be increased." 
               </p>
               <p className="text-slate-400 text-sm leading-relaxed mb-4 text-left font-mono">
                 Our mission is to bypass the sanitized narrative of secular media. We believe current geopolitical shifts are not random, but part of a documented, ancient timeline. Prophecy Scanner uses advanced OSINT (Open Source Intelligence) to empower the modern Watchman.
               </p>
               <p className="text-slate-500 font-mono text-[10px] mt-4 uppercase">— Daniel 12:4 // DATA_RELEASE_PROTOCOL_ALPHA</p>
            </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section id="features" className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-xs font-mono text-cyber-blue tracking-[0.3em] mb-4 uppercase">System Capabilities</h2>
             <h3 className="text-4xl font-bold text-white font-mono uppercase">Tactical & Theological</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-cyber-blue/50 transition-all group relative overflow-hidden">
              <Crosshair className="text-cyber-blue w-10 h-10 mb-4" />
              <h3 className="text-xl font-mono font-bold text-white mb-2">GEOSPATIAL THREAT MATRIX</h3>
              <p className="text-slate-400 text-sm">Live kinetic tracking of conflict zones and troop movements.</p>
            </div>
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-prophecy-gold/50 transition-all group relative overflow-hidden">
              <ScrollText className="text-prophecy-gold w-10 h-10 mb-4" />
              <h3 className="text-xl font-mono font-bold text-white mb-2">SCRIPTURE-INTEL BRIDGE</h3>
              <p className="text-slate-400 text-sm">Proprietary algorithms tag headlines with Biblical counterparts.</p>
            </div>
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-alert-red/50 transition-all group relative overflow-hidden">
              <Radio className="text-alert-red w-10 h-10 mb-4" />
              <h3 className="text-xl font-mono font-bold text-white mb-2">SECURE COMMS CHANNEL</h3>
              <p className="text-slate-400 text-sm">Encrypted chat sectors for discussing intel and strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="tiers" className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-mono text-prophecy-gold tracking-[0.3em] mb-4 uppercase">Recruitment</h2>
            <h3 className="text-4xl font-bold text-white font-mono uppercase">Select Clearance Level</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1 */}
            <div className="flex flex-col border border-slate-800 bg-slate-900/30 p-8 rounded-sm">
               <h3 className="text-2xl font-mono font-bold text-slate-400 mb-2">OBSERVER</h3>
               <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-slate-600 font-normal">/mo</span></div>
               <button onClick={onCheckout} className="w-full py-3 border border-slate-700 text-slate-400 hover:text-white font-mono text-xs uppercase transition-all">Select Observer</button>
            </div>
            {/* Tier 2 */}
            <div className="flex flex-col border-2 border-cyber-blue bg-slate-900/60 p-8 rounded-sm relative transform md:-translate-y-4">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyber-blue text-obsidian text-[10px] font-bold px-3 py-1 uppercase">Most Active</div>
               <h3 className="text-2xl font-mono font-bold text-cyber-blue mb-2">WATCHMAN</h3>
               <div className="text-4xl font-bold text-white mb-6">$12<span className="text-lg text-slate-500 font-normal">/mo</span></div>
               <button onClick={onCheckout} className="w-full py-3 bg-cyber-blue hover:bg-cyan-400 text-obsidian font-bold font-mono text-xs uppercase transition-all">Upgrade to Watchman</button>
            </div>
            {/* Tier 3 */}
            <div className="flex flex-col border border-prophecy-gold/40 bg-slate-900/30 p-8 rounded-sm">
               <h3 className="text-2xl font-mono font-bold text-prophecy-gold mb-2">COMMANDER</h3>
               <div className="text-4xl font-bold text-white mb-6">$45<span className="text-lg text-slate-600 font-normal">/mo</span></div>
               <button onClick={onCheckout} className="w-full py-3 border border-slate-700 text-prophecy-gold hover:bg-slate-800 font-mono text-xs uppercase transition-all">Apply for Clearance</button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-[10px] font-mono tracking-widest uppercase">
        <p>Prophecy Scanner is an aggregation tool for educational purposes.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
