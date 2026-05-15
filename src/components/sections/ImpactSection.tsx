"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BookOpen, GraduationCap, Globe, Home, Baby } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Lives Transformed", color: "#D4AF37", desc: "Students directly supported" },
  { icon: BookOpen, value: 8500, suffix: "+", label: "Children in School", color: "#E8C84A", desc: "Through scholarship programs" },
  { icon: GraduationCap, value: 3200, suffix: "+", label: "Students Graduated", color: "#F0D060", desc: "From primary education" },
  { icon: Globe, value: 15, suffix: "+", label: "Learning Centers", color: "#D4AF37", desc: "Across 4 African states" },
  { icon: Home, value: 12000, suffix: "+", label: "Education Kits", color: "#E8C84A", desc: "Distributed to remote villages" },
  { icon: Baby, value: 98, suffix: "%", label: "Retention Rate", color: "#F0D060", desc: "In our partner schools" },
];

function AnimatedCounter({ target, suffix, duration = 2.2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const totalSteps = 60;
    const increment = end / totalSteps;
    const stepDuration = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function CircularProgress({ value, max = 100, color }: { value: number; max?: number; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (circumference * percentage) / 100;

  return (
    <div ref={ref} className="relative w-20 h-20">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="6" />
        <motion.circle
          cx="40" cy="40" r="36"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 lg:py-32 bg-gradient-to-b from-[#111111] to-[#0D0D0D] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_50%,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Impact"
          title="Numbers That Tell"
          titleHighlight="Real Stories"
          subtitle="Every statistic represents a transformed life. Here's the measurable difference Sunga has made across Africa."
          light
          className="mb-20"
        />

        {/* Stats Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stats.map(({ icon: Icon, value, suffix, label, color, desc }, i) => (
            <StaggerItem key={label}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-8 rounded-3xl glass-dark group cursor-default relative overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/30"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 30% 30%, ${color}08, transparent 70%)` }} />

                <div className="relative z-10 flex items-start gap-5">
                  <CircularProgress value={suffix === "%" ? value : 75} max={100} color={color} />
                  <div className="flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color }}
                    >
                      <AnimatedCounter target={value} suffix={suffix} />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{label}</div>
                    <div className="text-white/45 text-xs">{desc}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Banner Quote */}
        <FadeUp>
          <div className="relative p-10 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10 rounded-3xl" />
            <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-3xl" />
            <p
              className="relative z-10 text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Behind every number is a name, a face, a family —<br />
              <span className="text-gradient-gold not-italic">and a future we helped build together.</span>"
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
