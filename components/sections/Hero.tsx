import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Plasma from "../ui/Plasma";
import BlurText from "../ui/BlurText";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  const [startTextGenerate, setStartTextGenerate] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isPrototypeSubmissionOpen, setIsPrototypeSubmissionOpen] = useState(true);

  // Registration dates
  const registrationOpenDate = "2025-10-13T12:00:00";
  const registrationCloseDate = "2025-10-27T12:00:00";
  
  // Prototype submission deadline - Today at 11:59 PM
  const prototypeDeadline = "2025-11-11T23:59:59";

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date().getTime();
      const openTime = new Date(registrationOpenDate).getTime();
      const closeTime = new Date(registrationCloseDate).getTime();
      const prototypeCloseTime = new Date(prototypeDeadline).getTime();

      // Registration is open between open and close dates
      setIsRegistrationOpen(now >= openTime && now < closeTime);
      
      // Prototype submission is open until deadline
      setIsPrototypeSubmissionOpen(now < prototypeCloseTime);
    };

    // Check immediately on mount
    checkStatus();

    // Check every minute for status changes
    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => {
    console.log("BlurText animation completed!");
    setStartTextGenerate(true);
    // Show buttons after a short delay
    setTimeout(() => setShowButtons(true), 800);
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

              {/* Buttons with Fade Animation - Dynamic State */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Show buttons based on prototype submission status */}
                {isPrototypeSubmissionOpen ? (
                  <>
                    {/* Primary Button - Dynamic Registration State */}
                    {isRegistrationOpen ? (
                      // ENABLED - Registration is Open
                      <Link 
                        href="/registration"
                        className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-[#002EBA] hover:bg-[#0039d4] text-white text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center will-change-transform overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#002EBA]/20"
                      >
                        {/* Shimmer effect on hover */}
                        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                        </span>
                        <span className="relative flex items-center gap-2">
                          Register Now
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </Link>
                    ) : (
                      // DISABLED - Registration Not Open Yet or Closed
                      <div 
                        className="px-8 py-4 lg:px-10 lg:py-5 bg-gray-600 text-gray-300 text-lg rounded-xl font-semibold flex items-center justify-center cursor-not-allowed opacity-60"
                      >
                        <span className="flex items-center gap-2">
                          Registration Coming Soon
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </span>
                      </div>
                    )}

                    {/* Prototype Submission Button - Active */}
                    <Link 
                      href="/prototype-submission"
                      className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-transparent border-2 border-[#002EBA] text-white hover:bg-[#002EBA]/10 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center will-change-transform backdrop-blur-sm hover:shadow-lg hover:shadow-[#002EBA]/10"
                    >
                      <span className="relative flex items-center gap-2">
                        Prototype Submission
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </span>
                    </Link>
                  </>
                ) : (
                  // After prototype submission closes - Only show Learn More button
                  <a 
                    href="#about"
                    className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-transparent border-2 border-[#002EBA] text-white hover:bg-[#002EBA]/10 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center will-change-transform backdrop-blur-sm hover:shadow-lg hover:shadow-[#002EBA]/10"
                  >
                    <span className="relative flex items-center gap-2">
                      Learn More
                      <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </a>
                )}
              </motion.div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
