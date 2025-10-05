"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const directionValues = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionValues[direction].y,
        x: directionValues[direction].x,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay,
              },
            }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
