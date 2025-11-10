import React, { useState, useEffect } from 'react';
import RippleGrid from '../ui/RippleGrid';
import CountdownTimer from '../ui/CountDownTimer';
import ScrollAnimation from '../ui/scroll-animation';

const About = () => {
  // Define milestone dates
  const registrationOpenDate = "2025-10-13T12:00:00";
  const registrationCloseDate = "2025-10-27T12:00:00";
  const finalRoundDate = "2025-11-29T12:00:00";

  // State to track current phase
  const [currentPhase, setCurrentPhase] = useState<{
    title: string;
    targetDate: string;
   
  } | null>(null);

  useEffect(() => {
    const determinePhase = () => {
      const now = new Date().getTime();
      const openTime = new Date(registrationOpenDate).getTime();
      const closeTime = new Date(registrationCloseDate).getTime();
      const finalTime = new Date(finalRoundDate).getTime();

      if (now < openTime) {
        // Before registration opens
        setCurrentPhase({
          title: "Registration Opens In",
          targetDate: registrationOpenDate,
          
        });
      } else if (now >= openTime && now < closeTime) {
        // Registration is open
        setCurrentPhase({
          title: "Registration Closes In",
          targetDate: registrationCloseDate,
          
        });
      } else if (now >= closeTime && now < finalTime) {
        // Registration closed, countdown to final round
        setCurrentPhase({
          title: "Final Round Begins In",
          targetDate: finalRoundDate,
          
        });
      } else {
        // Final round has passed
        setCurrentPhase({
          title: "Event Concluded",
          targetDate: finalRoundDate,
          
        });
      }
    };

    determinePhase();
    
    // Check every minute for phase changes
    const interval = setInterval(determinePhase, 60000);
    
    return () => clearInterval(interval);
  }, []);

  if (!currentPhase) return null;

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
          <p className="max-w-3xl mx-auto text-white text-base lg:text-lg leading-relaxed mb-6">
            Beyond the competition, AlgoArena includes a platform to showcase Leo Club projects across Sri Lanka, 
            encouraging learning, collaboration, and leadership among students. This is your opportunity to challenge yourself, 
            connect with innovators, and build something extraordinary.
          </p>

          {/* Delegate Booklet Button */}
          <div className="flex justify-center mt-8">
            <a
              href="https://drive.google.com/file/d/1nuaoftXPY7_3EWlpmkVBOGiNsSO04iBt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002EBA] hover:bg-[#0039d4] text-white text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#002EBA]/20"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Delegate Booklet
            </a>
          </div>
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

          {/* Dynamic Countdown Timer */}
          <ScrollAnimation>
            <div className="flex flex-col items-center lg:items-start">
              {/* Title with Emoji */}
              <div className="text-center lg:text-left mb-6">
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {currentPhase.title}
                </h3>
                
                {/* Date Display */}
                {currentPhase.title !== "Event Concluded" && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm mt-2">
                    <span className="text-blue-400 text-xs lg:text-sm font-medium">
                      📅 {new Date(currentPhase.targetDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                )}
              </div>

              {/* Countdown Timer or Concluded Message */}
              <div className="w-full flex justify-center lg:justify-start">
                {currentPhase.title !== "Event Concluded" ? (
                  <CountdownTimer targetDate={currentPhase.targetDate} />
                ) : (
                  <div className="px-8 py-4 bg-gray-800 text-gray-300 rounded-xl border border-gray-700">
                    <p className="text-lg font-semibold">AlgoArena 2025 has concluded</p>
                    <p className="text-sm text-gray-400 mt-1">Thank you for participating!</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
