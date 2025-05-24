'use client';

import { useEffect, useState } from 'react';
import Header from "@/components/header"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <Header />
      <div className="flex-1 pt-20">{children}</div>
      <Footer />
    </div>
  );
}
