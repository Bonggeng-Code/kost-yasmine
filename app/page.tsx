'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import { motion, animate, useInView } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Welcome from '@/components/Welcome';
import Link from 'next/link';
import {

  ArrowUpRight,
  Wifi,
  ShieldCheck,
  Zap,
  BookOpen,
  RotateCw,
  ZoomIn,
  RotateCcw,
  Layers,
  CheckCircle2,
  Mail,
  Sparkles,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa';
const photos = [1, 2, 3, 4, 1, 2, 3, 4];


function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Animasi hanya berjalan sekali saat elemen mulai terlihat di layar
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2, // Durasi animasi 2 detik
        ease: "easeOut",
        onUpdate(current) {
          if (ref.current) {
            // Format angka dengan titik ribuan gaya Indonesia
            ref.current.textContent = Math.round(current).toLocaleString('id-ID');
          }
        }
      });
      
      return () => controls.stop();
    }
  }, [inView, value]); 

  return <span ref={ref}>0</span>;
}

export default function Home() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleWhatsApp = (e: React.FormEvent) => {
  e.preventDefault();

  const nomorWhatsApp = '6281234567890';
  const teksPesan = `Halo Admin, saya ingin bertanya seputar kost.\n\n*Nama:* ${name}\n*Email:* ${email}\n*Pesan:* ${message}`;

  const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(teksPesan)}`;
  window.open(url, '_blank');
};

  return (
    <>
      <Navbar />

      <main className="object-cover">
        {/* =========================================================
            1. HERO SECTION
           ========================================================= */}
        <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">

          {/* Latar Belakang Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/kamar.mp4" type="video/mp4" />
          </video>

          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Konten Teks Utama dengan Animasi */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] text-white uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Kost Yasmine
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              // mt-8 dan md:mt-12 memberi jarak aman ekstra dari huruf "J"
              className="text-xs md:text-sm text-white/90 tracking-[0.3em] uppercase font-medium mt-8 md:mt-12"
            >
              Where Focus and Rest Meet
            </motion.p>
          </div>

          {/* Indikator Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-white/70 uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-white/50 animate-pulse"></div>
          </motion.div>
        </section>


        {/* ==========================================
          2. HOME / TENTANG KOST SECTION
          ========================================== */}
      <section id="home" className="py-24 bg-[#f4f3ee] px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Teks Hook & Spesifikasi Minimalis */}
          <div className="flex flex-col space-y-8">
            <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase w-max">
              Konsep Hunian
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#121212] leading-[1.1] tracking-tight">
              RUANG TENANG.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                PRODUKTIVITAS TINGGI.
              </span>
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md font-medium">
              Setiap sudut dirancang bebas distraksi dengan pencahayaan alami, akustik terjaga, dan area ergonomis. Sebuah investasi untuk kelancaran tugas harian dan kualitas istirahat Anda.
            </p>

            <div className="pt-6 border-t border-gray-300 grid grid-cols-3 gap-4">
               <div>
                 <p className="text-lg md:text-xl font-bold text-gray-900">100 Mbps</p>
                 <p className="text-[10px] md:text-xs text-gray-500 mt-1">Dedicated Fiber</p>
               </div>
               <div>
                 <p className="text-lg md:text-xl font-bold text-gray-900">24 Jam</p>
                 <p className="text-[10px] md:text-xs text-gray-500 mt-1">Akses & Keamanan</p>
               </div>
               <div>
                 <p className="text-lg md:text-xl font-bold text-gray-900">5 Menit</p>
                 <p className="text-[10px] md:text-xs text-gray-500 mt-1">Akses Kampus</p>
               </div>
            </div>
          </div>

          {/* Kolom Kanan: Widget iPhone Stack dengan Foto Running Vertikal */}
          <div className="relative w-full max-w-sm md:max-w-md mx-auto lg:ml-auto h-[400px] md:h-[480px] lg:h-[550px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-8 border-white overflow-hidden">
            
            {/* Indikator Titik (Smart Stack iPhone Style) Tersinkronisasi */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20 bg-black/40 p-2 rounded-full backdrop-blur-md">
              {[0, 1, 2, 3].map((index) => {
                // Konfigurasi Kecerahan (Opacity)
                const opacities = [
                  [1, 0.2, 0.2, 0.2, 1],       // Titik 1 menyala di awal dan akhir
                  [0.2, 1, 0.2, 0.2, 0.2],     // Titik 2 menyala di fase ke-2
                  [0.2, 0.2, 1, 0.2, 0.2],     // Titik 3 menyala di fase ke-3
                  [0.2, 0.2, 0.2, 1, 0.2],     // Titik 4 menyala di fase ke-4
                ][index];

                // Konfigurasi Skala (Membesar/Mengecil)
                const scales = [
                  [1.5, 0.8, 0.8, 0.8, 1.5],
                  [0.8, 1.5, 0.8, 0.8, 0.8],
                  [0.8, 0.8, 1.5, 0.8, 0.8],
                  [0.8, 0.8, 0.8, 1.5, 0.8],
                ][index];

                return (
                  <motion.div
                    key={index}
                    animate={{ opacity: opacities, scale: scales }}
                    transition={{
                      duration: 20, // Harus sama persis dengan durasi animasi foto di bawah
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.20, 0.3, 0.21, 1] 
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-white origin-center"
                  />
                );
              })}
            </div>

            {/* Gradient Overlay Atas/Bawah (Fading Edge Effect) */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

            {/* Animasi Foto Scroll Vertikal */}
            <motion.div 
              className="flex flex-col w-full"
              animate={{ y: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
               {photos.map((item, idx) => (
                  <div key={idx} className="w-full h-[240px] md:h-[280px] flex-shrink-0 p-3">
                    <div className="w-full h-full bg-gray-200 rounded-[28px] overflow-hidden relative shadow-sm">
                      
                      {/* Anda bisa mengganti div ini dengan tag <Image /> jika sudah ada gambarnya */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-[#e5e5e5]">
                        [ Foto Visual Kamar {item} ]
                      </div>
                      
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
               ))}
            </motion.div>
          </div>

        </div>
      </section>
          {/* =========================================================
            3. FASILITAS SECTION
           ========================================================= */}
        {/* Hapus bg-white, gunakan warna turunan dari layout atau deklarasikan ulang bg-[#f4f3ee] */}
        <section id="fasilitas" className="w-full min-h-screen py-20 flex flex-col items-center justify-center bg-[#f4f3ee] overflow-hidden">

          <div className="text-center mb-10 px-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#adb5bd]">
              Kenyamanan Ekstra
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl mt-2 text-[#463f3a] uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Fasilitas Premium
            </h2>
          </div>

          {/* Running Widget Bar */}
          <div className="w-full border-y border-[#adb5bd]/30 py-4 mb-16 overflow-hidden relative flex">
            {/* Gradasi pudar menggunakan warna dasar cream #f4f3ee */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#f4f3ee] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#f4f3ee] to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee items-center gap-8 md:gap-16 pl-8 md:pl-16">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-16 shrink-0">

                  {/* Teks menggunakan sekunder #adb5bd, Ikon menggunakan primer #463f3a */}
                  <span className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#adb5bd] whitespace-nowrap">
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#463f3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    24/7 Security
                  </span>

                  <span className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#adb5bd] whitespace-nowrap">
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#463f3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Smart Access
                  </span>

                  <span className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#adb5bd] whitespace-nowrap">
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#463f3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 2.96-3.08 2.5 2.5 0 0 1-3.18-2.98 2.5 2.5 0 0 1 3.1-2.88 2.5 2.5 0 0 1-3-2.6 2.5 2.5 0 0 1 2.58-2.4z" />
                    </svg>
                    Weekly Cleaning
                  </span>

                  <span className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#adb5bd] whitespace-nowrap">
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#463f3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                    High-Speed Fiber
                  </span>

                  <span className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#adb5bd] whitespace-nowrap">
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#463f3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                    Filtered Water
                  </span>

                </div>
              ))}
            </div>
          </div>

          {/* Grid Fasilitas dengan Skema Warna Kustom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl px-6 md:px-16">

            {/* KARTU 1 */}
            <div className="bg-[#f4f3ee] p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(70,63,58,0.03)] border border-[#adb5bd]/30 flex flex-col items-start transition-all hover:shadow-[0_8px_30px_rgba(70,63,58,0.06)] hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-[#adb5bd]/40 text-[#463f3a] rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#463f3a] mb-2">Mesh Wi-Fi 6</h3>
              <p className="text-xs md:text-sm text-[#adb5bd] leading-relaxed">
                Koneksi simetris rendah latensi di setiap kamar untuk kuliah daring dan riset tanpa putus.
              </p>
            </div>

            {/* KARTU 2 */}
            <div className="bg-[#f4f3ee] p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(70,63,58,0.03)] border border-[#adb5bd]/30 flex flex-col items-start transition-all hover:shadow-[0_8px_30px_rgba(70,63,58,0.06)] hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-[#adb5bd]/40 text-[#463f3a] rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#463f3a] mb-2">Meja Belajar</h3>
              <p className="text-xs md:text-sm text-[#adb5bd] leading-relaxed">
                Meja komunal yang cocok untuk mahasiswa perkuliahan.
              </p>
            </div>

            {/* KARTU 3 */}
            <div className="bg-[#f4f3ee] p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(70,63,58,0.03)] border border-[#adb5bd]/30 flex flex-col items-start transition-all hover:shadow-[0_8px_30px_rgba(70,63,58,0.06)] hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-[#adb5bd]/40 text-[#463f3a] rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#463f3a] mb-2">Smart Metering</h3>
              <p className="text-xs md:text-sm text-[#adb5bd] leading-relaxed">
                Pemantauan pemakaian listrik kamar secara real-time melalui panel digital.
              </p>
            </div>
            
            {/* KARTU 4 */}
            <div className="bg-[#f4f3ee] p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(70,63,58,0.03)] border border-[#adb5bd]/30 flex flex-col items-start transition-all hover:shadow-[0_8px_30px_rgba(70,63,58,0.06)] hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-[#adb5bd]/40 text-[#463f3a] rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toilet preview-icon">
            <path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/>
            <path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/>
          </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#463f3a] mb-2">Toilet Duduk</h3>
              <p className="text-xs md:text-sm text-[#adb5bd] leading-relaxed">
                Kloset duduk lebih nyaman digunakan dan tidak membebani persendian lutut atau kaki.
              </p>
            </div>

            {/* KARTU 5 */}
            <div className="bg-[#f4f3ee] p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(70,63,58,0.03)] border border-[#adb5bd]/30 flex flex-col items-start transition-all hover:shadow-[0_8px_30px_rgba(70,63,58,0.06)] hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-[#adb5bd]/40 text-[#463f3a] rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shower-head preview-icon">
              <path d="m4 4 2.5 2.5"/>
              <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/>
              <path d="M15 5 5 15"/>
              <path d="M14 17v.01"/>
              <path d="M10 16v.01"/>
              <path d="M13 13v.01"/>
              <path d="M16 10v.01"/>
              <path d="M11 20v.01"/>
              <path d="M17 14v.01"/>
              <path d="M20 11v.01"/>
            </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#463f3a] mb-2">Shower</h3>
              <p className="text-xs md:text-sm text-[#adb5bd] leading-relaxed">
                Tampilan lebih minimalist serta air lebih terjaga.
              </p>
            </div>            
            {/* KARTU 6 */}
            <div className="bg-[#f4f3ee] p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(70,63,58,0.03)] border border-[#adb5bd]/30 flex flex-col items-start transition-all hover:shadow-[0_8px_30px_rgba(70,63,58,0.06)] hover:-translate-y-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent border border-[#adb5bd]/40 text-[#463f3a] rounded-2xl flex items-center justify-center mb-4 md:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-door-closed-locked preview-icon"
            >
              <path d="M19 8V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
              <path d="M2 21h8" />
              <path d="M20 16v-2a2 2 0 00-4 0v2" />
              <path d="M9 12h.01" />
              <rect x="14" y="16" width="8" height="5" rx="1" />
            </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#463f3a] mb-2">Smartlock Door</h3>
              <p className="text-xs md:text-sm text-[#adb5bd] leading-relaxed">
                Memiliki Standart keamanan yang sangat ketat demi keamanan penghuni kost.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================
            5. HARGA SECTION (Widget Minimalis untuk Mobile & Desktop)
           ========================================================= */}
        <section
          id="harga"
          className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24 bg-[#f4f3ee]"
        >
          {/* Header Animasi - max-w-4xl agar seimbang dengan widget yang mengecil */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto w-full text-center md:text-left"
          >
          <div className="flex flex-col items-center text-center w-full">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#adb5bd]">
              Transparansi Biaya
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl mt-1 sm:mt-3 text-[#463f3a] tracking-tight uppercase text-center"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Pilihan Paket Sewa
            </h2>
          </div>
          </motion.div>

            {/* Layout diubah menjadi Flex agar 1 kartu tepat di tengah */}
            <div className="flex justify-center w-full max-w-4xl mx-auto px-4">

              {/* Kartu 1: Standar */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                // Tambahan w-full max-w-md agar lebarnya pas tidak memenuhi seluruh layar
                className="w-full max-w-md p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#adb5bd]/30 bg-[#f4f3ee] flex flex-col shadow-[0_4px_20px_rgba(70,63,58,0.03)] transition-transform hover:-translate-y-1"
              >
                
                <div className="flex items-center mb-4 h-6 sm:h-8">
                  {/* Teks diubah menjadi motion.h3 dengan animasi menyala */}
                  <motion.h3 
                    animate={{ 
                      color: ["#adb5bd", "#fbbf24", "#f59e0b", "#fbbf24", "#adb5bd"], 
                      textShadow: [
                        "0px 0px 0px rgba(251, 191, 36, 0)",
                        "0px 0px 15px rgba(251, 191, 36, 0.8)", 
                        "0px 0px 25px rgba(245, 158, 11, 1)",   
                        "0px 0px 15px rgba(251, 191, 36, 0.8)",
                        "0px 0px 0px rgba(251, 191, 36, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold"
                  >
                    Paket Standar Official launching
                  </motion.h3>
                </div>

                {/* Ukuran font desktop diperkecil (lg:text-5xl) */}
                <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-4 sm:mb-6">
                  <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#463f3a]">Rp</span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#463f3a] tracking-tighter">
                    <AnimatedNumber value={1000000} />
                  </span>
                  <span className="text-[10px] sm:text-xs lg:text-sm text-[#adb5bd] w-full sm:w-auto mt-0">/ bulan</span>
                </div>

                <ul className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-[#463f3a]">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#adb5bd] shrink-0"></span> AC (Air Conditioner)
                  </li>
                  <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-[#463f3a]">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#adb5bd] shrink-0 mt-1 sm:mt-0"></span> Kamar Mandi Dalam (Kloset Duduk)
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-[#463f3a]">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#adb5bd] shrink-0"></span> Meja Belajar
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-[#463f3a]">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#adb5bd] shrink-0"></span> Kursi
                  </li>
                </ul>

                {/* Tombol desktop lebih ramping (sm:py-3) */}
                <motion.a
                  href="#lokasi"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('lokasi')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full py-2.5 sm:py-3 rounded-full border border-[#463f3a] text-[#463f3a] flex items-center justify-center text-[10px] sm:text-xs font-semibold hover:bg-[#463f3a] hover:text-[#f4f3ee] transition-colors uppercase tracking-widest cursor-pointer"
                >
                  Pilih Paket
                </motion.a>

              </motion.div>
            </div>
        </section>

        {/* ========================================== */}
        {/* CONTACT US SECTION */}
        {/* ========================================== */}
    <section id="contact" className="py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row bg-[#f4f3ee] rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-[#adb5bd]/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
        >
          
          {/* KIRI: Gambar */}
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto relative bg-[#e5e5e5]">
            {/* GANTI SRC DI BAWAH DENGAN GAMBAR KOST ANDA */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* KANAN: Form & Info */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            
            {/* Heading */}
            <div className="mb-10 sm:mb-12">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#adb5bd] mb-2 block">
                Pusat Bantuan
              </span>
              <h2 
                className="text-4xl lg:text-5xl text-[#463f3a] tracking-tighter"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Contact Us
              </h2>
            </div>

            {/* Layout Grid untuk Form (Kiri) dan Info (Kanan) di Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
              
              {/* Kolom 1: Input Form */}
            <form onSubmit={handleWhatsApp} className="flex w-full max-w-sm flex-col gap-6">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-gray-800"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-gray-800"
              />
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-gray-800"
              />
              <button
                type="submit"
                className="mt-2 w-max rounded-full bg-black px-8 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-gray-800"
              >
                CONTACT US
              </button>
            </form>
              {/* Kolom 2: Informasi Detail */}
              <div className="flex flex-col space-y-8 sm:pl-4 lg:pl-8 sm:border-l border-[#463f3a]/10">
                <div>
                  <h4 className="text-sm font-semibold text-[#463f3a] mb-1">Contact</h4>
                  <p className="text-sm text-[#adb5bd]">yasmine@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-[#463f3a] mb-1">Based in</h4>
                  <p className="text-sm text-[#adb5bd]">
                    Padang Bulan Selayang I, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20155<br />
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 pt-2">
                  
                  {/* Instagram */}
                  <a href="LINK_IG_ANDA" className="text-[#463f3a] hover:text-[#adb5bd] transition-colors">
                    <FaInstagram size={18} />
                  </a>

                  {/* TikTok */}
                  <a href="LINK_TIKTOK_ANDA" className="text-[#463f3a] hover:text-[#adb5bd] transition-colors">
                    <FaTiktok size={18} />
                  </a>

                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>

        {/* =========================================================
            6. FOOTER & LOKASI SECTION (Style Referensi)
           ========================================================= */}
        <section
          id="lokasi"
          className="bg-[#121212] text-white pt-16 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-16 flex flex-col items-center rounded-t-3xl sm:rounded-t-[3rem]"
        >
          <div className="max-w-7xl w-full mx-auto">
            
            {/* Bagian Atas: Brand, Kontak, Link, dan Maps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
              
              {/* Kolom 1: Brand & Informasi Kontak (4 Kolom) */}
              <div className="lg:col-span-4 flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase mb-1">
                  Yasmine Kost
                </h2>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mb-8">
                  Singgah dan Bercerita
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-[10px] font-semibold text-gray-300 mb-2 uppercase tracking-widest">Alamat</h4>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                      Padang Bulan Selayang I, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20155
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold text-gray-300 mb-2 uppercase tracking-widest">Kontak</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      <a 
                        href="https://wa.me/6281200000000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white hover:underline transition-colors"
                      >
                        Telp/WA: 0812-XXXX-XXXX
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom 2: Site Map (3 Kolom) */}
              <div className="lg:col-span-3 flex flex-col lg:pl-8">
                <h4 className="text-[10px] font-bold text-gray-300 mb-6 uppercase tracking-widest">
                  Site Map
                </h4>
                <ul className="flex flex-col gap-4">
                  {[
                    { title: 'Home', url: '/#hero' }, // Ubah #hero sesuai ID bagian atas web Anda
                    { title: 'Fasilitas', url: '/#fasilitas' },
                    { title: 'Kamar', url: '/#kamar' },
                    { title: 'Ketersedian Kamar', url: '/kamar' }, // Ini link ke halaman baru
                    { title: 'Harga', url: '/#harga' },
                    { title: 'Lokasi', url: '/#lokasi' }
                  ].map((item, idx) => (
                    <li key={idx}>
                  <a
                    href={item.url}
                    onClick={(e) => {

                      if (item.url.includes('#')) {

                        const targetId = item.url.split('#')[1];
                        const targetElement = document.getElementById(targetId);
                        

                        if (targetElement) {
                          e.preventDefault(); // Hentikan lompatan instan
                          targetElement.scrollIntoView({ behavior: 'smooth' }); // Lakukan smooth scroll
                        }
                      }
                    }}
                    className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {item.title}
                  </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kolom 3: Google Maps Widget (5 Kolom) */}
              <div className="lg:col-span-5 flex flex-col">
                <h4 className="text-[10px] font-bold text-gray-300 mb-6 uppercase tracking-widest">
                  Lokasi Peta
                </h4>
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-gray-800">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.484403040433!2d98.637852780345!3d3.5595725872540234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fe86e91d171%3A0xe62f1a683291ffba!2sGg.%20Susuk%20IX%2C%20Padang%20Bulan%20Selayang%20I%2C%20Kec.%20Medan%20Selayang%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020155!5e0!3m2!1sid!2sid!4v1794821048935!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Yasmine Kost"
              ></iframe>
                </div>
              </div>

            </div>

            {/* Garis Pemisah Horizontal (Sesuai Referensi) */}
            <div className="w-full h-[1px] bg-gray-800 mb-10"></div>

            {/* Bagian Bawah: Ikon Sosial Media & Copyright (Sesuai Referensi) */}
            <div className="flex flex-col items-center justify-center gap-6">
              
              {/* Ikon Sosial Media dengan Border Lingkaran */}
              <div className="flex items-center gap-4">
                {[
                  { Icon: FaInstagram, url: "https://instagram.com/username_ig_yasminekost" },
                  { Icon: FaTiktok, url: "https://tiktok.com/@username_tiktok_yasminekost" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                  >
                    <item.Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>

              {/* Teks Copyright */}
              <p className="text-[11px] sm:text-xs text-gray-500 tracking-wide">
                ©Copyright. Yasmine Kost. All rights reserved.
              </p>
            </div>

          </div>
        </section>
        </main>
    </>
  );
}