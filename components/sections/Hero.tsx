import React from "react";
import Plasma from "../ui/Plasma";
import BlurText from "../ui/BlurText";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden will-change-transform">
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
      <div className="relative z-10 min-h-screen flex items-center transform-gpu">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen lg:min-h-0">
            {/* Left Side - Text Content */}
            <div className="lg:pr-12 order-2 lg:order-1 flex flex-col justify-end lg:justify-center pb-8 lg:pb-0">
              <BlurText
                text="ALGOARENA"
                delay={150}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider mb-2 text-white w-full justify-center lg:justify-start"
              />
              

              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 lg:mb-7 text-center lg:text-left">
                A Journey from Learning to Building
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white hover:bg-gray-100 text-black rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center will-change-transform">
                  register →
                </button>
                <a 
                  href="#about"
                  className="px-6 py-3 lg:px-8 lg:py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center will-change-transform"
                >
                  learn more ↓
                </a>
              </div>
            </div>

            {/* Right Side - 3D Robot */}
            <div className="flex justify-center lg:justify-center order-1 lg:order-2 flex-1 lg:flex-none items-center pt-16 lg:pt-0">
              <div className="relative transform-gpu">
                {/* Phone Frame with 3D Robot */}
                <div className="w-52 h-[420px] md:w-64 md:h-[520px] lg:w-72 lg:h-[580px] bg-gray-800/50 backdrop-blur-sm rounded-[3rem] p-2 shadow-2xl border border-white/10">
                  {/* Phone Screen with Spline Robot */}
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default Hero;
