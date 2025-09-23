'use client';

import { useState, useEffect } from 'react';

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

const TimeCard = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl w-24 h-24 md:w-28 md:h-28">
    <span className="text-4xl md:text-5xl font-semibold text-white">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-sm text-gray-400 mt-1">{label}</span>
  </div>
);

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  // Initialize state to null. This ensures server and client render the same initial content.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after initial render.
    setIsClient(true);

    // Set the initial time on the client
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Before the client has mounted, render the "00" state to match the server.
  if (!isClient || !timeLeft) {
    return (
      <div className="flex justify-center gap-3 md:gap-4">
        <TimeCard value={0} label="Days" />
        <TimeCard value={0} label="Hours" />
        <TimeCard value={0} label="Mins" />
        <TimeCard value={0} label="Secs" />
      </div>
    );
  }

  // Once mounted, render the live countdown.
  return (
    <div className="flex justify-center gap-3 md:gap-4">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Mins" />
      <TimeCard value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;