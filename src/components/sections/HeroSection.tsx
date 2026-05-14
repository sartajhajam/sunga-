"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ChevronDown, Users, BookOpen, Globe, Star } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Users, value: "50K+", label: "Lives Changed" },
  { icon: BookOpen, value: "200+", label: "Programs" },
  { icon: Globe, value: "15+", label: "Villages" },
  { icon: Star, value: "13+", label: "Years Active" },
];

const particles = Array.from({ length: 18 }, (_, i) => i);

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Deep cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1005] to-[#0D0D0D]" />
        {/* Gold radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(212,175,55,0.18)_0%,transparent_70%)]" />
        {/* Image overlay with golden tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D4AF37]"
            style={{
              left: `${10 + (i * 5.2) % 80}%`,
              top: `${20 + (i * 7.3) % 60}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + (i % 3),
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Light ray effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#D4AF37]/20 via-transparent to-transparent rotate-[15deg] origin-top translate-x-20" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-transparent -rotate-[10deg] origin-top" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            Compassion · Action · Change
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.25 } },
          }}
        >
          <motion.span
            className="block overflow-hidden"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } } }}
          >
            Changing Lives
          </motion.span>
          <motion.span
            className="block text-gradient-gold italic overflow-hidden"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } } }}
          >
            Through Compassion
          </motion.span>
          <motion.span
            className="block overflow-hidden"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } } }}
          >
            & Action
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-4xl text-base sm:text-lg text-white/65 leading-relaxed mb-10"
        >
          Every child deserves the opportunity to learn, grow, and dream beyond limitations
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <GoldButton size="lg" href="#donate" className="glow-gold">
            <Heart className="w-5 h-5" fill="currentColor" />
            Donate Now
          </GoldButton>

        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-4 text-center group cursor-default"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-2">
                <Icon className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div
                className="text-2xl font-bold text-gradient-gold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {value}
              </div>
              <div className="text-xs text-white/60 mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-widest text-white/40 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-[#D4AF37]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
