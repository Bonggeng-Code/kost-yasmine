import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Kost Jasmine',
  description: 'Hunian nyaman yang dirancang untuk produktivitas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Warna bg dasar diset ke #f4f3ee dan teks dasar ke #463f3a */}
      <body className={`${jakarta.variable} ${playfair.variable} font-sans antialiased bg-[#f4f3ee] text-[#463f3a] overflow-x-hidden`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}