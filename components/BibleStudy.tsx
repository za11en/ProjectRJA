import React from 'react';
import { Book, Bookmark, Search, GraduationCap, Quote } from 'lucide-react';

const BibleStudy: React.FC = () => {
  const passages = [
    { ref: "Matthew 24", title: "The Olivet Discourse", focus: "Birth Pains & Signs of the End" },
    { ref: "Revelation 13", title: "The Two Beasts", focus: "Economic & Political Convergence" },
    { ref: "Ezekiel 38-39", title: "Gog of Magog", focus: "Northern Coalition Alliance" },
    { ref: "Daniel 9", title: "The 70 Weeks", focus: "Prophetic Timelines & The Prince" },
    { ref: "Isaiah 17", title: "Burden of Damascus", focus: "Regional Escalation Patterns" }
  ];

  return (
    <div className="h-full flex flex-col bg-obsidian overflow-hidden">
      <div className="p-4 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Book className="text-prophecy-gold w-5 h-5" />
          <h2 className="font-mono font-bold text-white uppercase tracking-wider">Prophetic Scripts // Biblical Exegesis</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-800 pointer-events-none">
              <Quote size={80} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">"When these things begin to take place, stand up and lift up your heads, because your redemption is drawing near."</h3>
            <p className="text-prophecy-gold font-mono text-sm">— LUKE 21:28</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {passages.map((p, i) => (
              <div key={i} className="group bg-slate-900 border border-slate-800 p-5 hover:border-cyber-blue transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-mono text-cyber-blue bg-cyber-blue/10 px-2 py-0.5 border border-cyber-blue/20">MODULE_0{i+1}</span>
                  <Bookmark className="w-4 h-4 text-slate-700 group-hover:text-cyber-blue" />
                </div>
                <h4 className="text-white font-bold font-mono text-lg">{p.ref}</h4>
                <p className="text-slate-300 text-sm mb-2">{p.title}</p>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-tighter">FOCUS: {p.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Resources */}
        <div className="w-full md:w-80 space-y-6">
          <div className="bg-slate-950 border border-slate-800 p-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyber-blue" /> TRAINING MANUALS
            </h4>
            <div className="space-y-3">
              <button className="w-full text-left p-3 text-xs font-mono text-slate-400 bg-slate-900/50 border border-slate-800 hover:text-white hover:border-slate-600 transition-all">
                // INTRO_TO_ESCHATOLOGY.PDF
              </button>
              <button className="w-full text-left p-3 text-xs font-mono text-slate-400 bg-slate-900/50 border border-slate-800 hover:text-white hover:border-slate-600 transition-all">
                // THE_HERMENEUTIC_LENS.MKD
              </button>
              <button className="w-full text-left p-3 text-xs font-mono text-slate-400 bg-slate-900/50 border border-slate-800 hover:text-white hover:border-slate-600 transition-all">
                // TIMELINE_OF_THE_END.XLS
              </button>
            </div>
          </div>

          <div className="bg-red-950/10 border border-red-900/30 p-4">
             <h4 className="text-xs font-mono font-bold text-red-500 mb-2 uppercase">Watchman Advisory</h4>
             <p className="text-[10px] text-red-300 leading-relaxed font-mono">
               Always compare intelligence with multiple translations. Ground all analysis in prayer. 
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleStudy;
