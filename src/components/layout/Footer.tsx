"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Programs", href: "#programs" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  "Support": [
    { label: "Donate Now", href: "#donate" },
  ],
};

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Gold top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main links grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E7B4] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#111111]" fill="currentColor" />
              </div>
              <div>
                <span
                  className="font-bold text-lg block"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Sunga
                </span>
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase">
                  Organisation
                </span>
              </div>
            </div>
            <p className="max-w-sm text-white/60 text-base leading-relaxed mb-6">
              Empowering communities through compassion, education, and sustainable
              development since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-[#111111] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[#D4AF37] tracking-widest uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 hover:text-[#D4AF37] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>



        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Sunga Organisation. All rights reserved. Registered NGO.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/35 hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/35 hover:text-[#D4AF37] transition-colors">
              Terms of Use
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#D4AF37] group-hover:text-[#111111] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
