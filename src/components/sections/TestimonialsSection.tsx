"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/MotionWrapper";

const testimonials = [
  {
    name: "Makutima Nianga",
    role: "Student",
    location: "Scholarship & Supplies",
    text: "I am deeply grateful to have received my school supplies and scholarship. Thank you to Sunga Organization for choosing me for this opportunity and for believing in my dreams. I live with my grandmother, and we face many struggles, so this support means the world to us. We are truly blessed by Sunga’s kindness and will be forever grateful.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Mayimona Prosperd",
    role: "Student",
    location: "Education",
    text: "I’m really happy and grateful to Sunga Organization for supporting me with school supplies and helping me continue my studies. This support gives me hope and motivation to keep working toward my dream of becoming an IT technician. I want to learn as much as I can so I can use my skills to help my community.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Aridja Soumahili",
    role: "Student",
    location: "Supplies",
    text: "Thank you for the school suppliers and thank you for believing in us, thank you so much.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Kasongo Mbuyi",
    role: "Student",
    location: "Scholarship",
    text: "I’m deeply grateful to have received my school supplies and scholarship. Thank you, Sunga Organization, for choosing me for this opportunity and for believing in my dreams. Your support means more than words can express, it reminds me that I am seen, that my future matters, and that I am not walking this journey alone.",
    rating: 5,
    initial: "K",
  },
  {
    name: "Lukanga-Kote",
    role: "Student",
    location: "Education & Hope",
    text: "Thanking first God for His grace, I am truly grateful to have received both my school supplies and scholarship. Thank you to Sunga Organization for choosing me among so many students. Your support has given me the courage to keep moving forward and the tools I need to continue my education with hope.",
    rating: 5,
    initial: "L",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoPlay, current]);

  const handleManual = (fn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    fn();
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F0EBE0] relative overflow-hidden">
      {/* Gold blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Voices of"
          titleHighlight="Real Impact"
          subtitle="Read the real stories of the children whose lives have been transformed by your support."
          className="mb-16"
        />

        {/* Main carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-10 md:p-14 rounded-3xl bg-white shadow-[0_8px_80px_rgba(212,175,55,0.1)] border border-[#D4AF37]/10 relative overflow-hidden"
            >
              {/* Large quote */}
              <Quote className="absolute top-6 right-8 w-20 h-20 text-[#D4AF37]/8" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Text */}
              <blockquote
                className="text-lg md:text-xl text-[#333] leading-relaxed italic mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "{testimonials[current].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-[#F7E7B4]/40 border-2 border-[#D4AF37]/30 flex items-center justify-center text-xl font-bold text-[#D4AF37]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {testimonials[current].initial}
                </div>
                <div>
                  <div className="font-bold text-[#111]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-[#D4AF37]">{testimonials[current].role}</div>
                  <div className="text-xs text-[#999]">{testimonials[current].location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleManual(() => setCurrent(i))}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#D4AF37]" : "w-2 bg-[#D4AF37]/25 hover:bg-[#D4AF37]/50"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleManual(prev)}
                className="w-10 h-10 rounded-full bg-white border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-200 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-[#D4AF37] group-hover:text-[#111] transition-colors" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleManual(next)}
                className="w-10 h-10 rounded-full bg-white border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-200 shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-[#D4AF37] group-hover:text-[#111] transition-colors" />
              </motion.button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
