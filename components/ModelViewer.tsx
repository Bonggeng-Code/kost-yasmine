// @ts-nocheck
import React from 'react';
// import '@google/model-viewer'; -> BARIS INI WAJIB DIHAPUS

export default function ModelViewer() {
  return (
    <div>
      {/* @ts-ignore */}
      <model-viewer src="model.glb" alt="3D model"></model-viewer>
    </div>
  );
}