import React, { useState } from "react";
import Plasma from "../ui/Plasma";
import BlurText from "../ui/BlurText";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  const [startTextGenerate, setStartTextGenerate] = useState(false);

  const handleAnimationComplete = () => {
    console.log("BlurText animation completed!");
    setStartTextGenerate(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden will-change-transform bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 transform-gpu">
        <Plasma
          color="#002EBA"
          speed={0.3}
          direction="forward"
          scale={2.8}
          opacity={0.8}
        />
      </div>

      {/* Content Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center transform-gpu">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center min-h-screen lg:min-h-0">
            
            <div className="text-center max-w-4xl mx-auto">
              <BlurText
                text="ALGOARENA"
                delay={150}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider mb-4 text-white w-full justify-center"
              />
              
              <TextGenerateEffect
                words="A Journey from Learning to Building"
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-8 lg:mb-10"
                duration={0.6}
                delay={0.15}
                startAnimation={startTextGenerate}
              />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 lg:px-10 lg:py-5 bg-white hover:bg-gray-100 text-black text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center will-change-transform">
                  register →
                </button>
                <a 
                  href="#about"
                  className="px-8 py-4 lg:px-10 lg:py-5 border border-white/30 text-white text-lg hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center will-change-transform"
                >
                  learn more ↓
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;