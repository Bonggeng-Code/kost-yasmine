'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

// Ubah React.ReactNode menjadi any di baris bawah ini
export default function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.07,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}