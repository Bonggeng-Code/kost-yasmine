"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Welcome({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Pengaturan durasi kembang api (3 detik)
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Ledakan kembang api dari dua sisi
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // Otomatis hilangkan halaman Welcome setelah 4 detik
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      // Warna gradien dibuat mirip dengan efek blur layar iPhone Anda
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2b5876] via-[#4e4376] to-[#b76e79]"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-white text-5xl md:text-8xl tracking-wider"
        // Menggunakan font bawaan komputer yang bergaya tulisan tangan/bersambung
        style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}
      >
        Grand Opening
      </motion.h1>
    </motion.div>
  );
}