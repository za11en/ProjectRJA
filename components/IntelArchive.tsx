import React from 'react';
import { History, Search, FileText, Database, Shield } from 'lucide-react';

const IntelArchive: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-obsidian">
      <div className="p-4 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <History className="text-prophecy-gold w-5 h-5" />
          <h2 className="font-mono font-bold text-white uppercase tracking-wider">Ancient Pattern Logs // Global Archive</h2>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="SEARCH RECORDS..." 
            className="bg-obsidian border border-slate-800 rounded-sm py-1 pl-9 pr-3 text-xs font-mono focus:border-prophecy-gold outline-none w-64"
          />
        </div>
      </div>

      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
        {[
          { id: 'REC-001', title: 'Damascus Historical Volatility', date: '2024-Q3', level: 'RESTRICTED' },
          { id: 'REC-002', title: 'Euphrates Hydrology Patterns', date: '2023-Q4', level: 'SECRET' },
          { id: 'REC-003', title: 'The GOG-MAGOG Coalition Analysis', date: '2024-Q1', level: 'TOP SECRET' },
          { id: 'REC-004', title: 'Seismic Events: Megiddo Fault Line', date: '2022-Q2', level: 'PUBLIC' },
          { id: 'REC-005', title: 'Digital Currency Convergence Study', date: '2024-Q2', level: 'RESTRICTED' },
        ].map((rec) => (
          <div key={rec.id} className="bg-slate-900 border border-slate-800 p-4 hover:border-prophecy-gold transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <Database className="w-8 h-8 text-slate-700 group-hover:text-prophecy-gold transition-colors" />
              <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">{rec.level}</span>
            </div>
            <h3 className="text-white font-mono font-bold text-sm mb-1">{rec.title}</h3>
            <p className="text-[10px] text-slate-500 font-mono">ARCHIVE_ID: {rec.id} // DATE: {rec.date}</p>
            <div className="mt-4 flex justify-between items-center">
               <button className="text-[10px] font-mono text-cyber-blue hover:underline">DOWNLOAD PDF</button>
               <FileText className="w-4 h-4 text-slate-700" />
            </div>
          </div>
        ))}
        
        {/* Placeholder for expansion */}
        <div className="border-2 border-dashed border-slate-800 flex items-center justify-center p-8 opacity-40">
           <Shield className="w-12 h-12 text-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default IntelArchive;