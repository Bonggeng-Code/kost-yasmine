'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('/#hero');

  const navItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'Fasilitas', href: '/#fasilitas' },
    { label: 'Ketersediaan Kamar', href: '/kamar' },
    { label: 'Harga', href: '/#harga' },
    { label: 'Lokasi', href: '/#lokasi' },
  ];

  // Pantau posisi scroll untuk memicu perubahan desain di Hero Section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setActiveMenu(href);
    
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 1 }}
        // Saat di scroll, bentuknya menjadi bar hitam elegan. Saat di Hero, menjadi Akrilik lebar.
        animate={{
          backgroundColor: isScrolled ? "rgba(28, 28, 30, 0.95)" : "rgba(226, 226, 229, 0.85)", 
          padding: isScrolled ? "8px 16px" : "12px 32px",
        }}
        className={`pointer-events-auto flex items-center overflow-hidden origin-center rounded-full backdrop-blur-md ${
          isScrolled ? 'shadow-lg border border-white/5' : 'border border-white/20 shadow-sm'
        }`}
      >
        <motion.div 
          layout 
          className="flex items-center gap-2 md:gap-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {navItems.map((item, idx) => {
            const isActive = activeMenu === item.href;
            const isLastItem = idx === navItems.length - 1;

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`
                  whitespace-nowrap text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300
                  ${isScrolled 
                    ? /* TEMA SAAT DI-SCROLL KE BAWAH (Dark Minimalist) */
                      isLastItem
                        ? 'bg-white text-black shadow-sm hover:bg-gray-200 ml-2' 
                        : isActive 
                          ? 'bg-white/10 text-white shadow-sm' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5' 
                    : /* TEMA SAAT DI HERO SECTION (Acrylic Minimalist) */
                      isLastItem
                        ? 'bg-[#1c1c1e] text-white shadow-md hover:bg-black hover:shadow-lg ml-2' 
                        : isActive 
                          ? 'bg-white text-[#1c1c1e] shadow-sm' 
                          : 'text-[#2b303b] hover:text-black hover:bg-white/30' 
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      </motion.nav>
      
    </div>
  );
}