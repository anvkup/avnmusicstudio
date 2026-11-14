'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BrandShell({ children }) {
  const pathname = usePathname();
  const hideShell = pathname === '/' || pathname.startsWith('/studio') || pathname.startsWith('/beats') || pathname.startsWith('/portfolio');

  return (
    <>
      {!hideShell && <Navbar />}
      {children}
      {!hideShell && <Footer />}
    </>
  );
}
