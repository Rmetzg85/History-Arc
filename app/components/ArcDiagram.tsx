'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { events, HistoricalEvent, EventType, Region } from '../data/events';

const TYPE_COLORS: Record<EventType, string> = {
  war: '#ef4444',
  civil_war: '#f97316',
  slavery: '#a855f7',
  conquest: '#eab308',
  genocide: '#dc2626',
  colonialism: '#3b82f6',
  diaspora: '#22d3ee',
  ongoing: '#f43f5e',
};

const TYPE_LABELS: Record<EventType, string> = {
  war: 'War',
  civil_war: 'Civil War',
  slavery: 'Slavery',
  conquest: 'Conquest',
  genocide: 'Genocide',
  colonialism: 'Colonialism',
  diaspora: 'Diaspora',
  ongoing: 'Ongoing',
};

const REGION_LABELS: Record<Region, string> = {
  europe: 'Europe',
  british_isles: 'British Isles',
  asia: 'Asia',
  east_asia: 'East Asia',
  south_asia: 'South Asia',
  southeast_asia: 'SE Asia',
  africa: 'Africa',
  west_africa: 'West Africa',
  east_africa: 'East Africa',
  north_africa: 'North Africa',
  central_africa: 'Central Africa',
  southern_africa: 'S. Africa',
  americas: 'Americas',
  north_america: 'N. America',
  south_america: 'S. America',
  middle_east: 'Middle East',
  oceania: 'Oceania',
  global: 'Global',
};

const ALL_TYPES: EventType[] = ['war', 'civil_war', 'slavery', 'conquest', 'genocide', 'colonialism', 'diaspora', 'ongoing'];
const ALL_REGIONS: Region[] = [
  'europe', 'british_isles', 'asia', 'east_asia', 'south_asia', 'southeast_asia',
  'africa', 'west_africa', 'east_africa', 'north_africa', 'central_africa', 'southern_africa',
  'americas', 'north_america', 'south_america', 'middle_east', 'oceania', 'global',
];

interface Tooltip {
  x: number;
  y: number;
  event: HistoricalEvent;
}

export default function ArcDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTypes, setActiveTypes] = useState<Set<EventType>>(new Set(ALL_TYPES));
  const [activeRegions, setActiveRegions] = useState<Set<Region>>(new Set(ALL_REGIONS));
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleType = (type: EventType) => {
    setActiveTypes(prev => {
      const next = new Set(prev);
      if (next.has(type)) { next.delete(type); } else { next.add(type); }
      return next;
    });
  };

  const toggleRegion = (region: Region) => {
    setActiveRegions(prev => {
      const next = new Set(prev);
      if (next.has(region)) { next.delete(region); } else { next.add(region); }
      return next;
    });
  };

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const filteredEvents = events.filter(
      e => activeTypes.has(e.type) && activeRegions.has(e.region)
    );

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.max(400, Math.min(600, width * 0.45));

    const margin = { top: 20, right: 30, bottom: 50, left: 30 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const MIN_YEAR = -500;
    const MAX_YEAR = 2025;

    const xScale = d3.scaleLinear()
      .domain([MIN_YEAR, MAX_YEAR])
      .range([0, innerWidth]);

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', width).attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Background
    g.append('rect')
      .attr('width', innerWidth)
      .attr('height', innerHeight)
      .attr('fill', '#0f172a')
      .attr('rx', 8);

    // Grid lines
    const yearTicks = [-500, -400, -300, -200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2025];
    g.selectAll('.grid-line')
      .data(yearTicks)
      .enter()
      .append('line')
      .attr('class', 'grid-line')
      .attr('x1', d => xScale(d))
      .attr('x2', d => xScale(d))
      .attr('y1', 0)
      .attr('y2', innerHeight)
      .attr('stroke', d => d === 0 ? '#64748b' : '#1e293b')
      .attr('stroke-width', d => d === 0 ? 1.5 : 0.5)
      .attr('stroke-dasharray', d => d === 0 ? '4,4' : '0');

    // BCE/CE label
    const ceX = xScale(0);
    g.append('text')
      .attr('x', ceX + 4)
      .attr('y', 14)
      .attr('fill', '#64748b')
      .attr('font-size', '10px')
      .text('CE');
    g.append('text')
      .attr('x', ceX - 4)
      .attr('y', 14)
      .attr('fill', '#64748b')
      .attr('font-size', '10px')
      .attr('text-anchor', 'end')
      .text('BCE');

    // Sort: longer events drawn first (behind), shorter events on top
    const sorted = [...filteredEvents].sort((a, b) => {
      const durA = a.endYear - a.startYear;
      const durB = b.endYear - b.startYear;
      return durB - durA;
    });

    const maxDuration = d3.max(events, e => e.endYear - e.startYear) || 1;

    // Draw arcs
    const arcGroup = g.append('g').attr('class', 'arcs');

    sorted.forEach(evt => {
      const x1 = xScale(evt.startYear);
      const x2 = xScale(evt.endYear);
      const cx = (x1 + x2) / 2;
      const duration = evt.endYear - evt.startYear;
      const rawHeight = (duration / maxDuration) * innerHeight * 0.9;
      const arcHeight = Math.max(rawHeight, 8);
      const cy = innerHeight - arcHeight;

      const pathD = `M ${x1} ${innerHeight} Q ${cx} ${cy} ${x2} ${innerHeight}`;
      const color = TYPE_COLORS[evt.type];

      const path = arcGroup.append('path')
        .attr('d', pathD)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', hoveredId === evt.id ? 3 : 1.5)
        .attr('stroke-opacity', hoveredId === null ? 0.8 : hoveredId === evt.id ? 1 : 0.15)
        .attr('data-id', evt.id)
        .style('cursor', 'pointer')
        .style('transition', 'stroke-opacity 0.15s, stroke-width 0.15s');

      path.on('mouseenter', function(mouseEvt: MouseEvent) {
          setHoveredId(evt.id);
          const svgRect = svgRef.current!.getBoundingClientRect();
          setTooltip({
            x: mouseEvt.clientX - svgRect.left + margin.left,
            y: mouseEvt.clientY - svgRect.top + margin.top,
            event: evt,
          });
        })
        .on('mousemove', function(mouseEvt: MouseEvent) {
          const svgRect = svgRef.current!.getBoundingClientRect();
          setTooltip(prev => prev ? {
            ...prev,
            x: mouseEvt.clientX - svgRect.left + 10,
            y: mouseEvt.clientY - svgRect.top - 10,
          } : null);
        })
        .on('mouseleave', function() {
          setHoveredId(null);
          setTooltip(null);
        });
    });

    // Baseline
    g.append('line')
      .attr('x1', 0)
      .attr('x2', innerWidth)
      .attr('y1', innerHeight)
      .attr('y2', innerHeight)
      .attr('stroke', '#334155')
      .attr('stroke-width', 1.5);

    // X Axis labels
    const labelTicks = [-500, -250, 0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000];
    g.selectAll('.x-label')
      .data(labelTicks)
      .enter()
      .append('text')
      .attr('class', 'x-label')
      .attr('x', d => xScale(d))
      .attr('y', innerHeight + 20)
      .attr('text-anchor', 'middle')
      .attr('fill', '#94a3b8')
      .attr('font-size', '10px')
      .text(d => d < 0 ? `${Math.abs(d)} BCE` : d === 0 ? '0' : `${d} CE`);

  }, [activeTypes, activeRegions, hoveredId]);

  // ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(() => {
      setHoveredId(prev => prev); // trigger redraw
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const formatYear = (year: number) => {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
  };

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="mb-4 space-y-3">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 uppercase tracking-wider mr-1">Type:</span>
          {ALL_TYPES.map(type => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className="px-3 py-1 rounded-full text-xs font-medium border transition-all"
              style={{
                borderColor: TYPE_COLORS[type],
                backgroundColor: activeTypes.has(type) ? TYPE_COLORS[type] + '33' : 'transparent',
                color: activeTypes.has(type) ? '#fff' : '#64748b',
              }}
            >
              {TYPE_LABELS[type]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 uppercase tracking-wider mr-1">Region:</span>
          {ALL_REGIONS.map(region => (
            <button
              key={region}
              onClick={() => toggleRegion(region)}
              className="px-3 py-1 rounded-full text-xs font-medium border border-slate-600 transition-all"
              style={{
                backgroundColor: activeRegions.has(region) ? '#334155' : 'transparent',
                color: activeRegions.has(region) ? '#e2e8f0' : '#64748b',
              }}
            >
              {REGION_LABELS[region]}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div ref={containerRef} className="relative w-full">
        <svg ref={svgRef} className="w-full" />

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute z-10 bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl text-sm max-w-xs pointer-events-none"
            style={{
              left: Math.min(tooltip.x, (containerRef.current?.clientWidth ?? 400) - 280),
              top: tooltip.y - 10,
            }}
          >
            <div className="font-semibold text-white mb-1">{tooltip.event.name}</div>
            <div className="text-slate-400 text-xs mb-1">
              {formatYear(tooltip.event.startYear)} &ndash; {formatYear(tooltip.event.endYear)}
            </div>
            <div className="flex gap-2 mb-2">
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: TYPE_COLORS[tooltip.event.type] + '33', color: TYPE_COLORS[tooltip.event.type] }}
              >
                {TYPE_LABELS[tooltip.event.type]}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                {REGION_LABELS[tooltip.event.region]}
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed mb-2">{tooltip.event.description}</p>
            {tooltip.event.casualties && (
              <div className="text-xs text-slate-400">
                <span className="text-slate-500">Est. casualties: </span>
                <span className="text-slate-200">{tooltip.event.casualties}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {ALL_TYPES.map(type => (
          <div key={type} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: TYPE_COLORS[type] }} />
            <span className="text-xs text-slate-400">{TYPE_LABELS[type]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
