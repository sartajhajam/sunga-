"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

const galleryItems = [
  { id: 1, type: "image", size: "wide", label: "Joy of Education", location: "Classroom", src: "/gallery-3.jpg.jpeg" },
  { id: 2, type: "image", size: "tall", label: "Community Gathering", location: "Local Center", src: "/gallery-4.jpg.jpeg" },
  { id: 3, type: "image", size: "normal", label: "Together for Change", location: "Local Center", src: "/gallery-5,jpg.jpeg" },
  { id: 4, type: "image", size: "tall", label: "Focused Learning", location: "School", src: "/gallery-6.jpg.jpeg" },
  { id: 5, type: "image", size: "wide", label: "Ready for School", location: "School Gates", src: "/gallery-2.jpg.jpeg" },
  { id: 6, type: "image", size: "normal", label: "Empowering Futures", location: "Community", src: "/gallery-1.jpg.jpeg" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Gallery & Stories"
          title="Moments of"
          titleHighlight="Hope & Change"
          subtitle="Every photo is a testament to what compassion in action looks like — real people, real transformation."
          className="mb-16"
        />

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-20">
          {galleryItems.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => setSelected(item.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group break-inside-avoid mb-6 ${item.size === "tall" ? "aspect-[3/4]" : item.size === "wide" ? "aspect-[4/3]" : "aspect-square"} shadow-lg hover:shadow-2xl transition-all duration-400 border-4 border-white/60 hover:border-white`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-[#111]" />
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#111111]/90 via-[#111111]/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                  <p className="text-[#F7E7B4] text-xs font-medium">{item.location}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find(g => g.id === selected);
                return item ? (
                  <div className="relative w-full aspect-[4/3] sm:aspect-video bg-[#0a0a0a] flex flex-col items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <p className="text-white text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                      <p className="text-[#D4AF37] text-sm font-medium">{item.location}</p>
                    </div>
                  </div>
                ) : null;
              })()}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
