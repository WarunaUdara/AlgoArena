import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import TimeLine from "@/components/sections/TimeLine";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <TimeLine />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}