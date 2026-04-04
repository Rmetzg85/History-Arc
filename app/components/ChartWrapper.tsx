'use client';

import dynamic from 'next/dynamic';

const WorldMapDiagram = dynamic(() => import('./WorldMapDiagram'), { ssr: false });

export default function ChartWrapper() {
  return <WorldMapDiagram />;
}
