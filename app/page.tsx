'use client';

import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import NavBar from '@/components/sections/NavBar';

// Lazy load sections that are not immediately visible
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-screen" />,
});

const TimeLine = dynamic(() => import("@/components/sections/TimeLine"), {
  loading: () => <div className="min-h-screen" />,
});

const PrizePool = dynamic(() => import("@/components/sections/PrizePool"), {
  loading: () => <div className="min-h-screen" />,
});

const Partners = dynamic(() => import("@/components/sections/Partners"), {
  loading: () => <div className="min-h-screen" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="min-h-screen" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <>
      
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