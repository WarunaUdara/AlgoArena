import React from 'react';
import RippleGrid from '../ui/RippleGrid';
import CountdownTimer from '../ui/CountDownTimer';
import ScrollAnimation from '../ui/scroll-animation';

const About = () => {
  // Set the target date for the countdown
  const registrationDate = "2025-10-13T12:00:00";

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <RippleGrid
          gridColor="#002EBA"
          rippleIntensity={0.01}
          gridSize={17}
          opacity={0.5}
          vignetteStrength={1}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        {/* Top Text Section */}
        <ScrollAnimation>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What is ALGOARENA
          </h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="max-w-3xl mx-auto text-white text-base lg:text-lg leading-relaxed mb-6">
            AlgoArena is an inter-university coding competition organized by the Leo Club of University of Sri Jayewardenepura, 
            in collaboration with the IEEE Student Branch and Computer Society Chapter.
          </p>
          <p className="max-w-3xl mx-auto text-white text-base lg:text-lg leading-relaxed mb-6">
            The competition consists of two exciting rounds: an online preliminary round and a physical final round, 
            accompanied by workshops designed to enhance participants&apos; skills in competitive programming and problem-solving.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="max-w-3xl mx-auto text-white text-base lg:text-lg leading-relaxed">
            Beyond the competition, AlgoArena includes a platform to showcase Leo Club projects across Sri Lanka, 
            encouraging learning, collaboration, and leadership among students. This is your opportunity to challenge yourself, 
            connect with innovators, and build something extraordinary.
          </p>
        </ScrollAnimation>

        {/* Bottom Section with Video and Countdown */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Video */}
          <ScrollAnimation>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <video
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/about-section.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Optional: Video overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Countdown Timer */}
          <ScrollAnimation>
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center lg:text-left">
                Registration Opens In
              </h3>
              <div className="w-full flex justify-center lg:justify-start">
                <CountdownTimer targetDate={registrationDate} />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
