"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { cn } from "@/lib/utils";

import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-[#FAF7F2]/90 backdrop-blur-xl shadow-[0_4px_32px_rgba(212,175,55,0.12)] border-b border-[#D4AF37]/10"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] overflow-hidden border-2 border-[#D4AF37]/30 transition-all duration-300"
            >
              <Image 
                src="/logo.jpg" 
                alt="Sunga Logo" 
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group",
                    scrolled ? "text-[#111111] hover:text-[#D4AF37]" : "text-white/90 hover:text-white",
                    isActive && "text-[#D4AF37]"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] transition-all duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </button>
              );
            })}
          </div>

          {/* Donate CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <GoldButton size="sm" href="#donate">
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate Now
            </GoldButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors duration-300",
              scrolled ? "text-[#111111]" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#FAF7F2]/98 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 text-xl font-medium text-[#111111] border-b border-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <GoldButton size="lg" className="w-full" href="#donate">
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Donate Now
                </GoldButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent">
      <motion.div
        style={{ width }}
        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] origin-left"
      />
    </div>
  );
}
