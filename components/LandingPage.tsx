import React from 'react';
import { 
  Globe, Shield, Radio, Activity, ArrowRight, Database, 
  Crosshair, ScrollText, Zap, History, ScanEye, AlertTriangle, FileText, CheckCircle2
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
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-mono border border-slate-600 text-white rounded-sm transition-colors"
          >
            // INITIALIZE UPLINK
          </button>
        </div>
      </header>

      {/* HERO SECTION - VARIATION A (The "Direct Action" Approach) */}
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
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onEnter}
              className="px-8 py-4 bg-cyber-blue hover:bg-cyan-400 text-obsidian font-bold font-mono rounded-sm flex items-center justify-center transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
            >
              INITIALIZE UPLINK <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button onClick={onEnter} className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-600 hover:border-slate-400 text-slate-300 font-mono rounded-sm transition-all hover:bg-slate-800">
              VIEW LIVE MAP
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
               <p className="text-slate-500 font-mono text-[10px] mt-4 uppercase">— Daniel 12:4 // DATA_RELESE_PROTOCOL_ALPHA</p>
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
            
            {/* Feature 1: GEOSPATIAL THREAT MATRIX */}
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-cyber-blue/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-6xl select-none group-hover:opacity-10 transition-opacity">01</div>
              <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyber-blue/20 transition-colors border border-slate-800 group-hover:border-cyber-blue/50">
                <Crosshair className="text-cyber-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">GEOSPATIAL THREAT MATRIX</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Live kinetic tracking of conflict zones, troop movements, and high-impact weather events.
              </p>
              <div className="border-t border-slate-900 pt-4">
                <p className="text-xs text-slate-500 font-serif italic group-hover:text-slate-300 transition-colors">"When you see Jerusalem surrounded by armies..." (Luke 21:20)</p>
              </div>
            </div>

            {/* Feature 2: SCRIPTURE-INTEL BRIDGE */}
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-prophecy-gold/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-6xl select-none group-hover:opacity-10 transition-opacity">02</div>
              <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-prophecy-gold/20 transition-colors border border-slate-800 group-hover:border-prophecy-gold/50">
                <ScrollText className="text-prophecy-gold w-7 h-7" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">SCRIPTURE-INTEL BRIDGE</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Proprietary algorithms tag modern news headlines with their specific Biblical counterparts.
              </p>
              <div className="border-t border-slate-900 pt-4">
                <p className="text-xs text-slate-500 font-serif italic group-hover:text-slate-300 transition-colors">"Seal the book, even to the time of the end..." (Daniel 12:4)</p>
              </div>
            </div>

            {/* Feature 3: SECURE COMMS CHANNEL */}
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-alert-red/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-6xl select-none group-hover:opacity-10 transition-opacity">03</div>
              <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-alert-red/20 transition-colors border border-slate-800 group-hover:border-alert-red/50">
                <Radio className="text-alert-red w-7 h-7" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">SECURE COMMS CHANNEL</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Encrypted chat sectors for discussing intel and prayer strategy with vetted Watchmen.
              </p>
              <div className="border-t border-slate-900 pt-4">
                <p className="text-xs text-slate-500 font-serif italic group-hover:text-slate-300 transition-colors">"Iron sharpens iron..." (Proverbs 27:17)</p>
              </div>
            </div>

             {/* Feature 4: FLASH TRANSMISSIONS */}
             <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-alert-amber/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-6xl select-none group-hover:opacity-10 transition-opacity">04</div>
              <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-alert-amber/20 transition-colors border border-slate-800 group-hover:border-alert-amber/50">
                <Zap className="text-alert-amber w-7 h-7" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">FLASH TRANSMISSIONS</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Push notifications sent milliseconds after a "Red Level" event is verified.
              </p>
              <div className="border-t border-slate-900 pt-4">
                <p className="text-xs text-slate-500 font-serif italic group-hover:text-slate-300 transition-colors">"If the watchman sees the sword coming..." (Ezekiel 33:6)</p>
              </div>
            </div>

            {/* Feature 5: ANCIENT PATTERN LOGS */}
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-slate-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-6xl select-none group-hover:opacity-10 transition-opacity">05</div>
              <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-slate-700/20 transition-colors border border-slate-800 group-hover:border-slate-500/50">
                <History className="text-slate-400 w-7 h-7" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">ANCIENT PATTERN LOGS</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Review past timelines to identify recurring cycles in geopolitical escalation.
              </p>
              <div className="border-t border-slate-900 pt-4">
                <p className="text-xs text-slate-500 font-serif italic group-hover:text-slate-300 transition-colors">"That which has been is what will be..." (Ecclesiastes 1:9)</p>
              </div>
            </div>

            {/* Feature 6: PROPHETIC LENS AUGMENTATION */}
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-sm hover:border-cyber-blue/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-6xl select-none group-hover:opacity-10 transition-opacity">06</div>
              <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyber-blue/20 transition-colors border border-slate-800 group-hover:border-cyber-blue/50">
                <ScanEye className="text-cyber-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">PROPHETIC LENS AUGMENTATION</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                One-click context brings up relevant commentaries and verses for any active event.
              </p>
              <div className="border-t border-slate-900 pt-4">
                <p className="text-xs text-slate-500 font-serif italic group-hover:text-slate-300 transition-colors">"So that you may know the truth..." (Luke 1:4)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING / TIERS */}
      <section id="tiers" className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-mono text-prophecy-gold tracking-[0.3em] mb-4 uppercase">Recruitment</h2>
            <h3 className="text-4xl font-bold text-white font-mono uppercase">Select Clearance Level</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Tier 1: OBSERVER CLASS */}
            <div className="flex flex-col border border-slate-800 bg-slate-900/30 p-10 rounded-sm hover:border-slate-700 transition-all group">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-mono font-bold text-slate-400 group-hover:text-slate-200 transition-colors">OBSERVER</h3>
                 <span className="text-[10px] bg-slate-800 text-slate-500 px-3 py-1 rounded-sm border border-slate-700 font-mono font-bold uppercase tracking-widest">Limited Clearance</span>
              </div>
              <div className="text-5xl font-bold text-white mb-4">$0<span className="text-lg text-slate-600 font-mono font-normal">/mo</span></div>
              <p className="text-sm text-slate-500 mb-10 font-medium">Ideal for casual monitoring and daily briefings.</p>
              <ul className="space-y-4 mb-auto text-sm text-slate-400">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-slate-700 flex-shrink-0"/> 24-Hour Delayed Intel Feed</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-slate-700 flex-shrink-0"/> Global Map Access (Low Res)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-slate-700 flex-shrink-0"/> 1 Custom Watch Sector</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-slate-700 flex-shrink-0"/> Read-Only Access to War Room</li>
              </ul>
              <button onClick={onCheckout} className="mt-12 w-full py-4 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-all">
                Select Observer
              </button>
            </div>

            {/* Tier 2: WATCHMAN CLASS */}
            <div className="flex flex-col border-2 border-cyber-blue bg-slate-900/60 p-10 rounded-sm relative transform md:-translate-y-6 shadow-[0_0_40px_rgba(14,165,233,0.15)] z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyber-blue text-obsidian text-[10px] font-bold px-4 py-1.5 uppercase tracking-[0.2em] shadow-lg">
                Most Active
              </div>
              <div className="flex justify-between items-center mb-6 mt-4">
                 <h3 className="text-2xl font-mono font-bold text-cyber-blue">WATCHMAN</h3>
                 <span className="text-[10px] bg-cyber-blue/20 text-cyber-blue px-3 py-1 rounded-sm border border-cyber-blue/30 font-mono font-bold uppercase tracking-widest">Active Duty</span>
              </div>
              <div className="text-5xl font-bold text-white mb-4">$12<span className="text-lg text-slate-500 font-mono font-normal">/mo</span></div>
              <p className="text-sm text-slate-300 mb-10 font-medium">For the vigilant believer who needs immediate data.</p>
              <ul className="space-y-4 mb-auto text-sm text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyber-blue flex-shrink-0"/> REAL-TIME Strike Alerts</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyber-blue flex-shrink-0"/> Full High-Res Map Tools</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyber-blue flex-shrink-0"/> Unlimited Watch Sectors</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyber-blue flex-shrink-0"/> Full Clearance: War Room</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyber-blue flex-shrink-0"/> "Watchman" Badge on Profile</li>
              </ul>
              <button 
                onClick={onCheckout}
                className="mt-12 w-full py-4 bg-cyber-blue hover:bg-cyan-400 text-obsidian font-bold font-mono text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]"
              >
                Upgrade to Watchman
              </button>
            </div>

            {/* Tier 3: COMMANDER CLASS */}
            <div className="flex flex-col border border-prophecy-gold/40 bg-slate-900/30 p-10 rounded-sm hover:border-prophecy-gold transition-all group">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-mono font-bold text-prophecy-gold">COMMANDER</h3>
                 <span className="text-[10px] bg-yellow-900/20 text-prophecy-gold px-3 py-1 rounded-sm border border-prophecy-gold/30 font-mono font-bold uppercase tracking-widest">Top Secret</span>
              </div>
              <div className="text-5xl font-bold text-white mb-4">$45<span className="text-lg text-slate-600 font-mono font-normal">/mo</span></div>
              <p className="text-sm text-slate-500 mb-10 font-medium">For researchers, leaders, and content creators.</p>
              <ul className="space-y-4 mb-auto text-sm text-slate-400">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-prophecy-gold flex-shrink-0"/> All Watchman Assets</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-prophecy-gold flex-shrink-0"/> Direct API Access (Raw JSON)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-prophecy-gold flex-shrink-0"/> Weekly Intelligence Reports</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-prophecy-gold flex-shrink-0"/> Private "Officers Club" Chat</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-prophecy-gold flex-shrink-0"/> "Intercessor" Badge Unlocks</li>
              </ul>
              <button onClick={onCheckout} className="mt-12 w-full py-4 border border-slate-800 hover:border-prophecy-gold text-slate-400 hover:text-prophecy-gold font-mono text-xs uppercase tracking-widest transition-all">
                Apply for Clearance
              </button>
            </div>

          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-[10px] font-mono tracking-widest uppercase">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">Prophecy Scanner is an aggregation tool for educational purposes.</p>
          <p className="opacity-50">We do not predict the future; we interpret the present. Not financial or military advice.</p>
          <div className="mt-8 flex justify-center gap-8 text-slate-800">
             <span>v1.0.4-BETA</span>
             <span>Secure_Uplink_Alpha_7</span>
             <span>2025 // Global Intel Matrix</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
