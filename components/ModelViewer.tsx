'use client';

import React, { useEffect, useRef } from 'react';

interface ModelViewerProps {
  src: string;
  alt: string;
  orbit?: string;
  autoRotate?: boolean;
  className?: string;
}

export default function ModelViewer({
  src,
  alt,
  orbit = '45deg 65deg 105%',
  autoRotate = true,
  className = 'w-full h-full',
}: ModelViewerProps) {
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  useEffect(() => {
    if (viewerRef.current && orbit) {
      viewerRef.current.setAttribute('camera-orbit', orbit);
    }
  }, [orbit]);

  return (
    <model-viewer
      ref={viewerRef}
      src={src}
      alt={alt}
      auto-rotate={autoRotate ? true : undefined}
      camera-controls
      shadow-intensity="1"
      exposure="1.05"
      camera-orbit={orbit}
      className={className}
      style={{ backgroundColor: 'transparent' }}
    />
  );
}