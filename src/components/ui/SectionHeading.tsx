"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={cn("flex flex-col gap-6", alignClass[align], className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-[#D4AF37]/10 via-[#F7E7B4]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.15)] backdrop-blur-md relative overflow-hidden group cursor-default"
          >
            {/* Shimmer effect */}
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full z-0"
              animate={{ translateX: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
            />
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="relative z-10 drop-shadow-sm">{badge}</span>
          </motion.span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <h2
          className={cn(
            "font-bold leading-[1.15] tracking-tight",
            "text-4xl sm:text-5xl lg:text-6xl drop-shadow-sm",
            light ? "text-white" : "text-[#111111]"
          )}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-gradient-gold relative inline-block">
              {titleHighlight}
              {/* Subtle underline for the highlight */}
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#D4AF37]/60 to-transparent rounded-full"
              />
            </span>
          )}
        </h2>
      </motion.div>

      {/* Animated Gold accent line */}
      <div className={cn("flex gap-1.5 items-center h-2", align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start")}>
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 56, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="h-[3px] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] shadow-[0_0_10px_rgba(212,175,55,0.4)]" 
        />
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 16, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="h-[3px] rounded-full bg-[#D4AF37]/60" 
        />
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          className="h-[4px] w-[4px] rounded-full bg-[#D4AF37]/40" 
        />
      </div>

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <p
            className={cn(
              "max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed font-normal",
              light ? "text-white/80" : "text-[#555555]",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </motion.div>
      )}
    </div>
  );
}
