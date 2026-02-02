
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { IntelEvent } from '../types';

interface TacticalMapProps {
  events: IntelEvent[];
  onEventClick: (event: IntelEvent) => void;
}

const TacticalMap: React.FC<TacticalMapProps> = ({ events, onEventClick }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous

    // Use Equirectangular projection to match standard flat map images
    // Adjust scale and translate to fit the background image perfectly
    const projection = d3.geoEquirectangular()
      .scale(width / 6.3) // Adjusted for standard 2:1 aspect ratio maps
      .translate([width / 2, height / 1.65]); // Slight vertical offset to align with image

    // Define colors based on the "Red/Dark" aesthetic
    const CRITICAL_COLOR = '#ef4444'; // Red-500
    const HIGH_COLOR = '#f97316'; // Orange-500
    const LOW_COLOR = '#3b82f6'; // Blue-500
    const LINK_COLOR = '#ef4444'; // Red links

    // --- DRAW CONNECTIONS (The Network) ---
    // Draw lines between nearby points or random connections to simulate a network
    // For visual flair, we'll draw lines from the most recent event to others
    if (events.length > 1) {
       const links = [];
       // Create some arbitrary connections for visual effect
       for (let i = 0; i < events.length - 1; i++) {
          if (Math.random() > 0.6) { // connect some
             links.push({ source: events[i], target: events[i+1] });
          }
          // Always connect to the latest event (index 0)
          if (i > 0 && Math.random() > 0.7) {
             links.push({ source: events[0], target: events[i] });
          }
       }

       const linkGroup = svg.append("g").attr("class", "links");
       
       linkGroup.selectAll("path")
         .data(links)
         .enter()
         .append("path")
         .attr("d", (d) => {
            const sourceCoords = projection([d.source.location.long, d.source.location.lat]);
            const targetCoords = projection([d.target.location.long, d.target.location.lat]);
            if (!sourceCoords || !targetCoords) return "";
            
            // Draw a curved line (quadratic bezier)
            const dx = targetCoords[0] - sourceCoords[0];
            const dy = targetCoords[1] - sourceCoords[1];
            const dr = Math.sqrt(dx * dx + dy * dy) * 1.5; // Curve factor
            return `M${sourceCoords[0]},${sourceCoords[1]}A${dr},${dr} 0 0,1 ${targetCoords[0]},${targetCoords[1]}`;
         })
         .attr("fill", "none")
         .attr("stroke", LINK_COLOR)
         .attr("stroke-width", 0.5)
         .attr("opacity", 0.3)
         .attr("class", "animate-pulse"); // Add tailwind pulse for subtle effect
    }

    // --- DRAW MARKERS ---
    events.forEach(event => {
      const coords = projection([event.location.long, event.location.lat]);
      if (!coords) return;
      const [x, y] = coords;

      const color = event.severity === 'CRITICAL' ? CRITICAL_COLOR : 
                    event.severity === 'HIGH' ? HIGH_COLOR : LOW_COLOR;

      const group = svg.append("g")
        .attr("class", "cursor-pointer hover:opacity-100 transition-opacity")
        .style("cursor", "crosshair")
        .on("click", () => onEventClick(event));

      // 1. Outer Ring (Radar Ping)
      group.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 8)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1)
        .attr("opacity", 0.5)
        .append("animate")
        .attr("attributeName", "r")
        .attr("values", "8;24")
        .attr("dur", event.severity === 'CRITICAL' ? "1s" : "3s")
        .attr("repeatCount", "indefinite");
      
      group.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 8)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1)
        .attr("opacity", 0.5)
        .append("animate")
        .attr("attributeName", "opacity")
        .attr("values", "0.8;0")
        .attr("dur", event.severity === 'CRITICAL' ? "1s" : "3s")
        .attr("repeatCount", "indefinite");

      // 2. Core Dot
      group.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 3)
        .attr("fill", color)
        .attr("stroke", "#020617")
        .attr("stroke-width", 1)
        .attr("filter", "drop-shadow(0 0 4px " + color + ")");

      // 3. Label (Only for Critical or very recent)
      if (event.severity === 'CRITICAL' || event.severity === 'HIGH') {
        const textGroup = group.append("g");
        
        // Connecting line to text
        textGroup.append("line")
          .attr("x1", x + 5)
          .attr("y1", y - 5)
          .attr("x2", x + 15)
          .attr("y2", y - 15)
          .attr("stroke", color)
          .attr("stroke-width", 1)
          .attr("opacity", 0.7);

        textGroup.append("text")
          .attr("x", x + 18)
          .attr("y", y - 15)
          .text(event.location.name.toUpperCase())
          .attr("fill", color)
          .attr("font-family", "JetBrains Mono")
          .attr("font-size", "10px")
          .attr("font-weight", "bold")
          .attr("alignment-baseline", "middle")
          .style("text-shadow", "0px 0px 4px #000");
      }
    });

  }, [events, onEventClick]);

  return (
    <div ref={wrapperRef} className="w-full h-full bg-[#050b14] overflow-hidden relative border border-slate-800 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
        
        {/* WORLD MAP BACKGROUND LAYER */}
        {/* We use a high-contrast map image and heavy CSS filters to achieve the "Dark Mode" tactical look */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
               className="w-full h-auto object-cover opacity-80" 
               style={{ 
                 // CSS Magic to turn a light map into a dark cyber map
                 filter: 'invert(100%) hue-rotate(180deg) brightness(60%) contrast(120%) saturate(100%) sepia(30%) drop-shadow(0 0 10px rgba(0,200,255,0.2))'
               }}
               alt="Tactical Global Projection" 
             />
        </div>
        
        {/* GRID OVERLAY */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* HUD OVERLAYS */}
        <div className="absolute top-6 left-6 z-20">
            <div className="flex flex-col gap-1">
                <h3 className="text-cyber-blue font-mono font-bold text-lg tracking-widest border-b border-cyber-blue/30 pb-1">GLOBAL_VIEW</h3>
                <div className="flex gap-4 text-[10px] font-mono text-slate-400">
                    <span>LAT: 34.550</span>
                    <span>LONG: 42.100</span>
                    <span className="text-red-500 animate-pulse">LIVE DATA</span>
                </div>
            </div>
        </div>

        <div className="absolute bottom-6 left-6 z-20 text-[10px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
               <span>THREAT_CLUSTERS_DETECTED</span>
            </div>
        </div>
        
        {/* D3 LAYER */}
        <svg ref={svgRef} className="w-full h-full relative z-10"></svg>
    </div>
  );
};

export default TacticalMap;
