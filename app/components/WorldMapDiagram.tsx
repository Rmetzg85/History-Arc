'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { events, HistoricalEvent, EventType, Region } from '../data/events';

// ── CONSTANTS ────────────────────────────────────────────────────────────────

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
  slavery: 'Slavery & Forced Labor',
  conquest: 'Conquest',
  genocide: 'Genocide',
  colonialism: 'Colonialism',
  diaspora: 'Diaspora',
  ongoing: 'Ongoing (2026)',
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

const ALL_TYPES: EventType[] = [
  'war', 'civil_war', 'slavery', 'conquest', 'genocide', 'colonialism', 'diaspora', 'ongoing',
];

const ALL_REGIONS: Region[] = [
  'europe', 'british_isles',
  'africa', 'west_africa', 'east_africa', 'north_africa', 'central_africa', 'southern_africa',
  'asia', 'east_asia', 'south_asia', 'southeast_asia',
  'americas', 'north_america', 'south_america',
  'middle_east', 'oceania', 'global',
];

interface Tooltip { x: number; y: number; event: HistoricalEvent; }

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function WorldMapDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);
  const rotationRef = useRef<[number, number, number]>([0, -20, 0]);
  const dragStartRef = useRef<{ x: number; y: number; rot: [number, number, number] } | null>(null);
  const hoveredIdRef = useRef<string | null>(null);
  const isGlobeRef = useRef(true);
  const spinFrameRef = useRef<number | null>(null);
  const isSpinningRef = useRef(false);
  const spinFnRef = useRef<() => void>(() => {});

  const [isGlobe, setIsGlobe] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [worldData, setWorldData] = useState<any>(null);
  const [activeTypes, setActiveTypes] = useState<Set<EventType>>(new Set(ALL_TYPES));
  const [activeRegions, setActiveRegions] = useState<Set<Region>>(new Set(ALL_REGIONS));
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => { isGlobeRef.current = isGlobe; }, [isGlobe]);

  // Fetch world atlas
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(r => r.json())
      .then(setWorldData);
  }, []);

  // ── Imperative hover style update (no React re-render) ───────────────────
  const updateHoverStyles = useCallback(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const hid = hoveredIdRef.current;
    const any = hid !== null;

    svg.selectAll<SVGPathElement, unknown>('.event-arc').each(function () {
      const id = this.getAttribute('data-id');
      d3.select(this)
        .attr('stroke-opacity', any ? (id === hid ? 1 : 0.06) : 0.72)
        .attr('stroke-width', id === hid ? 3 : 1.5);
    });
    svg.selectAll<SVGCircleElement, unknown>('.event-dot').each(function () {
      const id = this.getAttribute('data-id');
      d3.select(this)
        .attr('fill-opacity', any ? (id === hid ? 1 : 0.06) : 0.82)
        .attr('r', id === hid ? 8 : (this.getAttribute('data-ongoing') ? 6 : 5));
    });
    svg.selectAll<SVGCircleElement, unknown>('.pulse-ring').each(function () {
      const id = this.getAttribute('data-id');
      d3.select(this).attr('stroke-opacity', any ? (id === hid ? 0.5 : 0.02) : 0.4);
    });
  }, []);

  // ── Imperative globe rotation (no React re-render) ────────────────────────
  const updateGlobeRotation = useCallback(() => {
    const proj = projectionRef.current;
    const svgEl = svgRef.current;
    if (!proj || !svgEl) return;

    proj.rotate(rotationRef.current);
    const path = d3.geoPath(proj);

    const svg = d3.select(svgEl);
    // Update all geo paths (sphere, graticule, countries, arcs)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    svg.selectAll<SVGPathElement, any>('.geo-path').attr('d', (d) =>
      d ? (path(d as d3.GeoPermissibleObjects) ?? '') : ''
    );

    // Update dot positions + visibility
    const rot = proj.rotate();
    const center: [number, number] = [-rot[0], -rot[1]];

    svg.selectAll<SVGCircleElement, unknown>('.event-dot, .pulse-ring').each(function () {
      const lng = parseFloat(this.getAttribute('data-lng') ?? '0');
      const lat = parseFloat(this.getAttribute('data-lat') ?? '0');
      const coords: [number, number] = [lng, lat];
      if (d3.geoDistance(coords, center) >= Math.PI / 2 - 0.01) {
        d3.select(this).attr('visibility', 'hidden');
      } else {
        const p = proj(coords);
        if (p) d3.select(this).attr('visibility', 'visible').attr('cx', p[0]).attr('cy', p[1]);
      }
    });
  }, []);

  // ── Main draw ─────────────────────────────────────────────────────────────
  const draw = useCallback(() => {
    const svgEl = svgRef.current;
    const containerEl = containerRef.current;
    if (!svgEl || !containerEl || !worldData) return;

    const W = containerEl.clientWidth;
    const H = isGlobe
      ? Math.max(420, Math.min(700, W * 0.8))
      : Math.max(360, Math.min(560, W * 0.52));

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();
    svg.attr('width', W).attr('height', H);

    let proj: d3.GeoProjection;
    if (isGlobe) {
      proj = d3.geoOrthographic()
        .scale(Math.min(W, H) / 2.08)
        .translate([W / 2, H / 2])
        .rotate(rotationRef.current)
        .clipAngle(90);
    } else {
      proj = d3.geoNaturalEarth1()
        .scale(W / 5.6)
        .translate([W / 2, H / 2]);
    }
    projectionRef.current = proj;
    const path = d3.geoPath(proj);

    // ── Globe background + graticule ────────────────────────────────────────
    if (isGlobe) {
      svg.append('path')
        .datum({ type: 'Sphere' } as d3.GeoPermissibleObjects)
        .attr('class', 'geo-path')
        .attr('d', path)
        .attr('fill', '#060e1f')
        .attr('stroke', '#1e3a5f')
        .attr('stroke-width', 0.8);

      const grat = d3.geoGraticule()();
      svg.append('path')
        .datum(grat as unknown as d3.GeoPermissibleObjects)
        .attr('class', 'geo-path')
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', '#0d1e33')
        .attr('stroke-width', 0.5);
    }

    // ── Countries ──────────────────────────────────────────────────────────
    const countriesGeo = feature(worldData, worldData.objects.countries) as unknown as {
      features: d3.GeoPermissibleObjects[];
    };
    svg.append('g')
      .selectAll<SVGPathElement, d3.GeoPermissibleObjects>('path')
      .data(countriesGeo.features)
      .join('path')
      .attr('class', 'geo-path geo-country')
      .attr('d', (d) => path(d) ?? '')
      .attr('fill', '#1a2744')
      .attr('stroke', '#2a3f62')
      .attr('stroke-width', 0.4);

    // ── Filter events ──────────────────────────────────────────────────────
    const filtered = events.filter(e => activeTypes.has(e.type) && activeRegions.has(e.region));
    const arcEvents = filtered.filter(
      e => e.destCoords &&
        (e.destCoords[0] !== e.sourceCoords[0] || e.destCoords[1] !== e.sourceCoords[1])
    );
    const dotEvents = filtered.filter(
      e => !e.destCoords ||
        (e.destCoords[0] === e.sourceCoords[0] && e.destCoords[1] === e.sourceCoords[1])
    );

    const arcsG = svg.append('g');
    const dotsG = svg.append('g');

    // ── Globe center for visibility check ──────────────────────────────────
    const rot = proj.rotate?.() ?? [0, 0, 0];
    const center: [number, number] = [-rot[0], -rot[1]];

    // ── Draw arcs ──────────────────────────────────────────────────────────
    arcEvents.forEach(evt => {
      const color = TYPE_COLORS[evt.type];
      const lineGeom = {
        type: 'LineString',
        coordinates: [evt.sourceCoords, evt.destCoords!],
      } as unknown as d3.GeoPermissibleObjects;

      // Visible arc
      arcsG.append('path')
        .datum(lineGeom)
        .attr('class', 'geo-path event-arc')
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 1.5)
        .attr('stroke-opacity', 0.72)
        .attr('stroke-linecap', 'round')
        .attr('data-id', evt.id)
        .style('pointer-events', 'none');

      // Wide invisible hit area
      arcsG.append('path')
        .datum(lineGeom)
        .attr('class', 'geo-path')
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', 'transparent')
        .attr('stroke-width', 14)
        .attr('data-id', evt.id)
        .style('cursor', 'pointer')
        .on('mouseenter', function (mouseEvt: MouseEvent) {
          hoveredIdRef.current = evt.id;
          updateHoverStyles();
          const rect = containerEl.getBoundingClientRect();
          setTooltip({ x: mouseEvt.clientX - rect.left, y: mouseEvt.clientY - rect.top, event: evt });
        })
        .on('mousemove', function (mouseEvt: MouseEvent) {
          const rect = containerEl.getBoundingClientRect();
          setTooltip(p => p ? { ...p, x: mouseEvt.clientX - rect.left, y: mouseEvt.clientY - rect.top } : null);
        })
        .on('mouseleave', function () {
          hoveredIdRef.current = null;
          updateHoverStyles();
          setTooltip(null);
        });
    });

    // ── Draw dots ─────────────────────────────────────────────────────────
    dotEvents.forEach(evt => {
      const color = TYPE_COLORS[evt.type];
      const coords = evt.sourceCoords;

      // Hide if on back of globe
      if (isGlobe && d3.geoDistance(coords, center) >= Math.PI / 2 - 0.01) return;

      const p = proj(coords);
      if (!p) return;
      const [cx, cy] = p;

      // Pulse ring for ongoing
      if (evt.ongoing) {
        const ring = dotsG.append('circle')
          .attr('class', 'pulse-ring')
          .attr('cx', cx).attr('cy', cy)
          .attr('r', 7)
          .attr('fill', 'none')
          .attr('stroke', color)
          .attr('stroke-width', 1.5)
          .attr('stroke-opacity', 0.4)
          .attr('data-id', evt.id)
          .attr('data-lng', coords[0])
          .attr('data-lat', coords[1])
          .style('pointer-events', 'none');
        ring.append('animate')
          .attr('attributeName', 'r').attr('values', '7;18;7').attr('dur', '2.5s').attr('repeatCount', 'indefinite');
        ring.append('animate')
          .attr('attributeName', 'stroke-opacity').attr('values', '0.5;0;0.5').attr('dur', '2.5s').attr('repeatCount', 'indefinite');
      }

      // Main dot
      dotsG.append('circle')
        .attr('class', 'event-dot')
        .attr('cx', cx).attr('cy', cy)
        .attr('r', evt.ongoing ? 6 : 5)
        .attr('fill', color)
        .attr('fill-opacity', 0.82)
        .attr('data-id', evt.id)
        .attr('data-lng', coords[0])
        .attr('data-lat', coords[1])
        .attr('data-ongoing', evt.ongoing ? '1' : null)
        .style('cursor', 'pointer')
        .on('mouseenter', function (mouseEvt: MouseEvent) {
          hoveredIdRef.current = evt.id;
          updateHoverStyles();
          const rect = containerEl.getBoundingClientRect();
          setTooltip({ x: mouseEvt.clientX - rect.left, y: mouseEvt.clientY - rect.top, event: evt });
        })
        .on('mousemove', function (mouseEvt: MouseEvent) {
          const rect = containerEl.getBoundingClientRect();
          setTooltip(p => p ? { ...p, x: mouseEvt.clientX - rect.left, y: mouseEvt.clientY - rect.top } : null);
        })
        .on('mouseleave', function () {
          hoveredIdRef.current = null;
          updateHoverStyles();
          setTooltip(null);
        });
    });
  }, [worldData, isGlobe, activeTypes, activeRegions, updateHoverStyles]);

  useEffect(() => { draw(); }, [draw]);

  // ── Auto-spin ─────────────────────────────────────────────────────────────
  spinFnRef.current = () => {
    if (!isSpinningRef.current) return;
    rotationRef.current = [rotationRef.current[0] + 0.12, rotationRef.current[1], rotationRef.current[2]];
    updateGlobeRotation();
    spinFrameRef.current = requestAnimationFrame(spinFnRef.current);
  };

  useEffect(() => {
    if (isGlobe && worldData) {
      isSpinningRef.current = true;
      spinFrameRef.current = requestAnimationFrame(spinFnRef.current);
    } else {
      isSpinningRef.current = false;
      if (spinFrameRef.current) cancelAnimationFrame(spinFrameRef.current);
    }
    return () => {
      isSpinningRef.current = false;
      if (spinFrameRef.current) cancelAnimationFrame(spinFrameRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGlobe, worldData]);

  // ── Resize observer ───────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout>;
    const obs = new ResizeObserver(() => { clearTimeout(t); t = setTimeout(draw, 150); });
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, [draw]);

  // ── Drag / pointer handlers ───────────────────────────────────────────────
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!isGlobe) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    isSpinningRef.current = false;
    if (spinFrameRef.current) cancelAnimationFrame(spinFrameRef.current);
    dragStartRef.current = { x: e.clientX, y: e.clientY, rot: [...rotationRef.current] as [number, number, number] };
    setIsDragging(true);
  }, [isGlobe]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    rotationRef.current = [
      dragStartRef.current.rot[0] + dx * 0.36,
      Math.max(-85, Math.min(85, dragStartRef.current.rot[1] - dy * 0.36)),
      dragStartRef.current.rot[2],
    ];
    updateGlobeRotation();
  }, [updateGlobeRotation]);

  const handlePointerUp = useCallback(() => {
    dragStartRef.current = null;
    setIsDragging(false);
  }, []);

  // ── Filter toggles ────────────────────────────────────────────────────────
  const toggleType = useCallback((t: EventType) => {
    setActiveTypes(prev => { const n = new Set(prev); n.has(t) ? n.delete(t) : n.add(t); return n; });
  }, []);

  const toggleRegion = useCallback((r: Region) => {
    setActiveRegions(prev => { const n = new Set(prev); n.has(r) ? n.delete(r) : n.add(r); return n; });
  }, []);

  const fmt = (y: number) => y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="w-full">
      {/* View toggle */}
      <div className="mb-5 flex items-center gap-3 flex-wrap">
        <div className="flex rounded-lg overflow-hidden border border-slate-700">
          <button
            onClick={() => setIsGlobe(true)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${isGlobe ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            🌍 Globe
          </button>
          <button
            onClick={() => setIsGlobe(false)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-l border-slate-700 ${!isGlobe ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            🗺️ Flat Map
          </button>
        </div>
        <span className="text-xs text-slate-500">
          {isGlobe ? (isDragging ? 'Rotating…' : 'Drag to rotate • hover events for details') : 'Hover events for details'}
        </span>
      </div>

      {/* Type filters */}
      <div className="mb-3 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wider shrink-0">Type:</span>
        {ALL_TYPES.map(t => (
          <button key={t} onClick={() => toggleType(t)}
            className="px-3 py-1 rounded-full text-xs font-medium border transition-all"
            style={{
              borderColor: TYPE_COLORS[t],
              backgroundColor: activeTypes.has(t) ? TYPE_COLORS[t] + '33' : 'transparent',
              color: activeTypes.has(t) ? '#fff' : '#64748b',
            }}>
            {TYPE_LABELS[t]}
          </button>
        ))}
      </div>

      {/* Region filters */}
      <div className="mb-4 flex flex-wrap gap-1.5 items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wider shrink-0">Region:</span>
        {ALL_REGIONS.map(r => (
          <button key={r} onClick={() => toggleRegion(r)}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-slate-700 transition-all"
            style={{
              backgroundColor: activeRegions.has(r) ? '#334155' : 'transparent',
              color: activeRegions.has(r) ? '#e2e8f0' : '#64748b',
            }}>
            {REGION_LABELS[r]}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl overflow-hidden bg-slate-950"
        style={{ cursor: isGlobe ? (isDragging ? 'grabbing' : 'grab') : 'default', minHeight: 420 }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {!worldData && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm">
            Loading world map…
          </div>
        )}
        <svg ref={svgRef} className="w-full" />

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute z-20 bg-slate-800/95 backdrop-blur border border-slate-600 rounded-xl p-3.5 shadow-2xl text-sm pointer-events-none max-w-sm"
            style={{
              left: Math.min(tooltip.x + 14, (containerRef.current?.clientWidth ?? 400) - 320),
              top: Math.max(8, tooltip.y - 70),
            }}
          >
            <div className="font-semibold text-white mb-1 leading-snug">{tooltip.event.name}</div>
            <div className="text-slate-400 text-xs mb-2 flex items-center gap-2 flex-wrap">
              <span>{fmt(tooltip.event.startYear)} – {fmt(tooltip.event.endYear)}</span>
              {tooltip.event.ongoing && (
                <span className="flex items-center gap-1 text-rose-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse inline-block" />
                  Ongoing
                </span>
              )}
            </div>
            <span
              className="inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-2"
              style={{ backgroundColor: TYPE_COLORS[tooltip.event.type] + '33', color: TYPE_COLORS[tooltip.event.type] }}
            >
              {TYPE_LABELS[tooltip.event.type]}
            </span>
            <p className="text-slate-300 text-xs leading-relaxed mb-2">{tooltip.event.description}</p>
            {tooltip.event.casualties && (
              <div className="text-xs">
                <span className="text-slate-500">Est. casualties: </span>
                <span className="text-slate-200 font-medium">{tooltip.event.casualties}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 justify-center">
        {ALL_TYPES.map(t => (
          <div key={t} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: TYPE_COLORS[t] }} />
            <span className="text-xs text-slate-400">{TYPE_LABELS[t]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
