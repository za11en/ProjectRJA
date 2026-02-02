import React from 'react';
import { IntelEvent } from '../types';
import { ShieldAlert, BookOpen, MapPin, Share2 } from 'lucide-react';

interface IntelFeedProps {
  events: IntelEvent[];
  onSelect: (event: IntelEvent) => void;
}

const IntelFeed: React.FC<IntelFeedProps> = ({ events, onSelect }) => {
  return (
    <div className="h-full flex flex-col bg-slate-900/50 backdrop-blur-sm border-r border-slate-700 w-full max-w-md">
      <div className="p-3 border-b border-slate-700 bg-slate-900 flex justify-between items-center">
        <h2 className="text-sm font-mono font-bold text-cyber-blue flex items-center">
          <ShieldAlert className="w-4 h-4 mr-2" />
          LATEST INTELLIGENCE
        </h2>
        <span className="text-xs text-slate-500 font-mono animate-pulse">LIVE FEED</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
        {events.map((event) => (
          <div 
            key={event.id}
            onClick={() => onSelect(event)}
            className={`
              relative p-4 border border-slate-700 bg-slate-800/40 
              hover:bg-slate-800/80 cursor-pointer transition-all group
              ${event.severity === 'CRITICAL' ? 'border-l-4 border-l-alert-red' : ''}
              ${event.severity === 'HIGH' ? 'border-l-4 border-l-alert-amber' : ''}
            `}
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] font-mono px-1 py-0.5 rounded ${
                event.severity === 'CRITICAL' ? 'bg-red-900/50 text-red-200' : 'bg-slate-700 text-slate-300'
              }`}>
                {event.source}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {new Date(event.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
            
            <h3 className="text-sm font-bold text-slate-100 mb-2 leading-tight group-hover:text-cyber-blue transition-colors">
              {event.headline}
            </h3>
            
            <div className="flex items-center text-xs text-slate-400 mb-3">
              <MapPin className="w-3 h-3 mr-1" />
              {event.location.name}
            </div>

            {event.prophecyMatch && (
              <div className="bg-yellow-900/20 border border-yellow-700/30 p-2 mt-2">
                <div className="flex items-center text-prophecy-gold text-xs font-mono font-bold mb-1">
                  <BookOpen className="w-3 h-3 mr-1" />
                  PROPHETIC MATCH DETECTED
                </div>
                <p className="text-[10px] text-yellow-100/80 italic font-serif">
                  "{event.prophecyMatch.text}"
                </p>
                <div className="text-[10px] text-prophecy-gold mt-1 text-right">
                  -- {event.prophecyMatch.book} {event.prophecyMatch.chapter}:{event.prophecyMatch.verse}
                </div>
              </div>
            )}
            
            <div className="mt-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="text-[10px] flex items-center text-cyber-blue hover:text-white uppercase font-mono">
                 <Share2 className="w-3 h-3 mr-1" />
                 Transmit
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntelFeed;
