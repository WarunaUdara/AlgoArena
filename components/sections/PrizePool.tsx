"use client";

import React from "react";
import { motion } from "motion/react";

const PrizePool = () => {
  const prizes = [
    {
      place: "1st",
      amount: "RS.30,000",
      title: "Champion",
      color: "#FFD700",
      gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
      shadow: "0 20px 60px rgba(255, 215, 0, 0.3)",
      medal: "🥇",
      perks: ["Digital Certificate", "Winner Title"],
      scale: 1.1,
      delay: 0,
    },
    {
      place: "2nd",
      amount: "RS.20,000",
      title: "Runner Up",
      color: "#C0C0C0",
      gradient: "linear-gradient(135deg, #E8E8E8 0%, #A8A8A8 100%)",
      shadow: "0 20px 60px rgba(192, 192, 192, 0.3)",
      medal: "🥈",
      perks: ["Digital Certificate"],
      scale: 1,
      delay: 0.2,
    },
    {
      place: "3rd",
      amount: "RS.10,000",
      title: "Third Place",
      color: "#CD7F32",
      gradient: "linear-gradient(135deg, #D4A574 0%, #8B6914 100%)",
      shadow: "0 20px 60px rgba(205, 127, 50, 0.3)",
      medal: "🥉",
      perks: ["Digital Certificate"],
      scale: 1,
      delay: 0.4,
    },
  ];

  return (
    <section
      id="prizes"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#002EBA" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#FFD700" }}
        ></div>
      </div>

      <div className="container mx-auto z-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Prize Pool
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <p className="text-xl md:text-2xl font-semibold" style={{ color: "#FFD700" }}>
              Total: RS.60,000
            </p>
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Compete for glory and rewards. Top performers will be recognized
            with cash prizes and certificates.
          </p>
        </motion.div>

        {/* Desktop Layout - Trophy Style */}
        <div className="hidden lg:block">
          <div className="flex items-end justify-center gap-8 max-w-6xl mx-auto pb-8">
            {/* 2nd Place - Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: prizes[1].delay }}
              className="flex-1 max-w-sm"
            >
              <PrizeCard prize={prizes[1]} />
            </motion.div>

            {/* 1st Place - Center (Elevated) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: prizes[0].delay }}
              className="flex-1 max-w-sm"
              style={{ marginBottom: '60px' }}
            >
              <PrizeCard prize={prizes[0]} isWinner />
            </motion.div>

            {/* 3rd Place - Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: prizes[2].delay }}
              className="flex-1 max-w-sm"
            >
              <PrizeCard prize={prizes[2]} />
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-8 max-w-md mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: prize.delay }}
            >
              <PrizeCard prize={prize} isWinner={index === 0} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-5 text-center"
        >
          <p className="text-gray-500 text-sm md:text-base">
            All participants will receive a participation certificate
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Prize Type
interface Prize {
  place: string;
  amount: string;
  title: string;
  color: string;
  gradient: string;
  shadow: string;
  medal: string;
  perks: string[];
  scale: number;
  delay: number;
}

// Prize Card Component
const PrizeCard = ({
  prize,
  isWinner = false,
}: {
  prize: Prize;
  isWinner?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      {/* Winner Crown */}
      {isWinner && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-5xl z-10"
        >
          👑
        </motion.div>
      )}

      {/* Card Container */}
      <div
        className="relative backdrop-blur-sm border-2 rounded-3xl p-8 overflow-hidden transition-all duration-500"
        style={{
          borderColor: prize.color,
          background: `linear-gradient(to bottom, rgba(0, 46, 186, 0.05), rgba(0, 0, 0, 0.5))`,
          boxShadow: `0 10px 40px rgba(0, 46, 186, 0.2)`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = prize.shadow;
          e.currentTarget.style.borderColor = prize.color;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 10px 40px rgba(0, 46, 186, 0.2)`;
          e.currentTarget.style.borderColor = prize.color;
        }}
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${prize.color}15, transparent 70%)`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Medal */}
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="text-6xl"
            >
              {prize.medal}
            </motion.div>
          </div>

          {/* Place */}
          <h3
            className="text-2xl font-bold text-center mb-2"
            style={{ color: prize.color }}
          >
            {prize.place} Place
          </h3>

          {/* Title */}
          <p className="text-gray-400 text-center mb-6 text-sm font-medium">
            {prize.title}
          </p>

          {/* Amount */}
          <div
            className="text-center mb-6 py-4 px-6 rounded-xl backdrop-blur-sm border"
            style={{
              background: `${prize.color}10`,
              borderColor: `${prize.color}30`,
            }}
          >
            <p
              className="text-4xl font-bold tracking-wider"
              style={{
                background: prize.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {prize.amount}
            </p>
          </div>

          {/* Perks */}
          <div className="space-y-2">
            {prize.perks.map((perk: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-300 text-sm"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: prize.color }}
                ></div>
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Base Platform */}
      <div
        className="h-4 mt-2 rounded-b-lg"
        style={{
          background: `linear-gradient(to bottom, ${prize.color}40, ${prize.color}10)`,
          boxShadow: `0 5px 15px ${prize.color}30`,
        }}
      ></div>
    </motion.div>
  );
};

export default PrizePool;