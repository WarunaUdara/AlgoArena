'use client';

import dynamic from 'next/dynamic';
import NavBar from "@/components/sections/NavBar";
import Hero from "@/components/sections/Hero";

// Lazy load sections with proper loading states
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false, // Disable SSR for these sections
});

const TimeLine = dynamic(() => import("@/components/sections/TimeLine"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const PrizePool = dynamic(() => import("@/components/sections/PrizePool"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Partners = dynamic(() => import("@/components/sections/Partners"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen scroll-smooth">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="timeline">
          <TimeLine />
        </section>
        <section id="prizes">
          <PrizePool />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}