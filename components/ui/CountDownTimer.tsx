'use client';

import { useState, useEffect, useRef, memo } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const TimeCard = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28">
    <span className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white will-change-contents">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-sm sm:text-base text-gray-400 mt-0.5 sm:mt-1">{label}</span>
  </div>
));

TimeCard.displayName = 'TimeCard';

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft(targetDate));

    // Use requestAnimationFrame for better performance
    const update = (timestamp: number) => {
      // Only update once per second
      if (timestamp - lastUpdateRef.current >= 1000) {
        setTimeLeft(calculateTimeLeft(targetDate));
        lastUpdateRef.current = timestamp;
      }
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [targetDate]);

  // Before the client has mounted, render the "00" state to match the server.
  if (!isClient || !timeLeft) {
    return (
      <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
        <TimeCard value={0} label="Days" />
        <TimeCard value={0} label="Hours" />
        <TimeCard value={0} label="Mins" />
        <TimeCard value={0} label="Secs" />
      </div>
    );
  }

  // Once mounted, render the live countdown.
  return (
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Mins" />
      <TimeCard value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;