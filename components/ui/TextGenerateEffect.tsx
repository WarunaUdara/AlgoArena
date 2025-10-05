"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  delay?: number;
  startAnimation?: boolean;
}

export const TextGenerateEffect = ({
  words,
  className = "",
  duration = 0.5,
  delay = 0.2,
  startAnimation = true,
}: TextGenerateEffectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Trigger animation when startAnimation prop becomes true
    if (startAnimation && !isVisible) {
      setIsVisible(true);
    }
  }, [startAnimation, isVisible]);

  return (
    <div className={className}>
      <motion.div className="flex flex-wrap justify-center">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              duration: duration,
              delay: idx * delay,
              ease: "easeOut",
            }}
            className="inline-block mr-2 text-white will-change-transform"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextGenerateEffect;
