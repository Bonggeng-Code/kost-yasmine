"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useSWR from 'swr';

// 1. Buat fungsi fetcher untuk SWR yang memproses CSV menggunakan PapaParse
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Gagal mengambil data");
  return response.json();
};

export default function KetersediaanKamar() {
  const webAppUrl = "https://script.google.com/macros/s/AKfycbwezJuna77b7At4sNOKAGpILpPsrX04xswVgQKZ-x3TD2PAuHhqayZ4jyT3g4_UrnJy/exec";

  const { data: roomsData = [] } = useSWR(webAppUrl, fetcher, {
    refreshInterval: 10000,
    revalidateOnFocus: true
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

    <div className="min-h-screen bg-[#f8f8f9] text-[#1c1c1e] font-sans selection:bg-[#463f3a] selection:text-white flex flex-col">
      
      {/* NAVBAR BARU */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-max px-4">
        <div className="bg-[#cfd2d6] rounded-full p-2 flex items-center justify-center gap-1 sm:gap-4 shadow-lg backdrop-blur-md whitespace-nowrap overflow-x-auto border border-white/20">
          <Link href="/" className="bg-white text-black px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-sm font-semibold shadow-sm transition-colors">
            Home
          </Link>
          <Link href="/#fasilitas" className="px-3 sm:px-4 py-2 text-[13px] sm:text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Fasilitas
          </Link>
          <Link href="/kamar" className="px-3 sm:px-4 py-2 text-[13px] sm:text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Ketersediaan Kamar
          </Link>
          <Link href="/#harga" className="px-3 sm:px-4 py-2 text-[13px] sm:text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Harga
          </Link>
          <Link href="/#lokasi" className="bg-[#1c1c1e] text-white px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-sm font-semibold hover:bg-black transition-colors">
            Lokasi
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="text-sm font-medium text-gray-500 max-w-2xl mb-4">
            Penjelasan kriteria dan juga informasi fasilitas kost kami berikan secara transparan untuk kenyamanan Anda.
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#1E90FF] tracking-tighter uppercase mb-4">
            KETERSEDIAAN KOST
          </h1>
          <p className="text-sm font-bold text-gray-700 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
            Informasi tersedia/penuh kamar dapat dipantau realtime
          </p>
        </div>

        {/* GRID KAMAR */}
        {roomsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {roomsData.map((room, index) => (
              <motion.div
                key={room.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm flex flex-col gap-4 hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail dengan Gambar Statis */}
                <div className="w-full aspect-video relative rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1522771731470-8ee2f6d04527?q=80&w=800&auto=format&fit=crop" 
                    alt={room.name || 'Kamar'} 
                    className="w-full h-full object-cover" 
                  />
                  <div className={`absolute top-3 right-3 px-4 py-1.5 rounded-full backdrop-blur-md text-[10px] uppercase tracking-wider font-bold shadow-sm ${
                    room.status?.trim().toLowerCase() === 'tersedia' 
                      ? 'bg-white/90 text-green-700' 
                      : 'bg-[#1c1c1e]/90 text-[#f4f3ee]'
                  }`}>
                    {room.status || 'Tidak Diketahui'}
                  </div>
                </div>

                {/* Detail Kamar */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1c1c1e] mb-1">{room.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-xs text-gray-500">Mulai</span>
                    <span className="text-lg font-black text-gray-800">
                      Rp {Number(room.price).toLocaleString('id-ID')}
                  </span>
                    <span className="text-xs text-gray-500">/bln</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-6 space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      <span className="font-semibold w-16">Lantai:</span> {room.floor}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      <span className="font-semibold w-16">Sebelah:</span> Kamar {room.adjacent}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/kamar/${room.id}`}
                      className={`flex justify-center w-full px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                        room.status?.trim().toLowerCase() === 'tersedia'
                          ? 'bg-[#1c1c1e] text-white hover:bg-gray-800'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200 pointer-events-none'
                      }`}
                    >
                      {room.status?.trim().toLowerCase() === 'tersedia' ? 'Lihat Detail' : 'Kamar Penuh'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            Memuat data kamar... (Atau data belum tersedia)
          </div>
        )}

        {/* HERO SECTION BAWAH */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-300 group">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
            alt="Fasilitas Kost" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-serif text-3xl sm:text-5xl tracking-tight text-center pointer-events-none">
            Ketersediaan<br />Kamar Saat Ini.
          </h2>

          <button 
            onClick={scrollToTop}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm text-black w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-white transition-all transform hover:-translate-y-1 z-10"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </button>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 w-full rounded-t-[40px] bg-[#111111] px-8 pb-8 pt-16 text-white md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row">
          
          {/* Kolom Kiri - Identitas & Kontak */}
          <div className="flex w-full flex-col md:w-1/3">
            <h2 className="mb-1 text-3xl font-bold tracking-wider">YASMINE KOST</h2>
            <p className="mb-8 text-xs font-medium tracking-widest text-gray-400">
              SINGGAH DAN BERCERITA
            </p>

            <div className="mb-6">
              <h3 className="mb-2 text-xs font-bold tracking-widest">ALAMAT</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Padang Bulan Selayang I, Kec. Medan Selayang, Kota
                <br />
                Medan, Sumatera Utara 20155
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-bold tracking-widest">KONTAK</h3>
              <p className="text-sm text-gray-300">Telp/WA: 0812-XXXX-XXXX</p>
            </div>
          </div>

          {/* Kolom Tengah - Site Map */}
          <div className="lg:col-span-3 flex flex-col lg:pl-8">
            <h4 className="text-[10px] font-bold text-gray-300 mb-6 uppercase tracking-widest">
              Site Map
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { title: 'Home', url: '/#hero' },
                { title: 'Fasilitas', url: '/#fasilitas' },
                { title: 'Kamar', url: '/#kamar' },
                { title: 'Ketersedian Kamar', url: '/kamar' },
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
                          e.preventDefault(); 
                          targetElement.scrollIntoView({ behavior: 'smooth' }); 
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

          {/* Kolom Kanan - Peta Lokasi */}
          <div className="flex w-full flex-col md:w-1/3">
            <h3 className="mb-6 text-xs font-bold tracking-widest">LOKASI PETA</h3>
            <div className="h-48 w-full overflow-hidden rounded-xl bg-gray-800">
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

        {/* Garis Pemisah & Bagian Bawah */}
        <div className="mx-auto mt-16 max-w-7xl border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-center gap-6">
            
            {/* Ikon Media Sosial */}
            <div className="flex gap-4">
              {/* Instagram Icon */}
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition hover:border-white hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              
              {/* TikTok Icon */}
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition hover:border-white hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs font-medium text-gray-500">
              ©Copyright. Yasmine Kost. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}