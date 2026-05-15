"use client";

import { motion } from "framer-motion";
import { Target, Eye, Leaf, Users2, Shield, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with full transparency in every action and rupee spent." },
  { icon: Users2, title: "Community First", desc: "Decisions are driven by the communities we serve, not by us." },
  { icon: Leaf, title: "Sustainability", desc: "We build programs that endure, creating lasting systemic change." },
  { icon: Sparkles, title: "Dignity", desc: "Every individual we serve is treated with respect and honour." },
];



export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          badge="About Us"
          title="Empowering Students,"
          titleHighlight="Building Futures"
          subtitle="Sunga Organization is committed to helping students who come from financially challenged backgrounds. We assist children who struggle to afford education by providing support with school fees, uniforms, school supplies, and other essential expenses throughout the school year. Our goal is to remove financial barriers so that every child has a fair chance to succeed in their education."
          className="mb-20"
        />

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24 items-center">
          <FadeLeft>
            <div className="space-y-8">
              {/* Mission */}
              <div className="p-8 rounded-3xl bg-white shadow-[0_4px_40px_rgba(212,175,55,0.08)] border border-[#D4AF37]/10 gold-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F7E7B4] flex items-center justify-center shadow-[0_4px_16px_rgba(212,175,55,0.3)]">
                    <Target className="w-6 h-6 text-[#111111]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
                </div>
                <p className="text-[#555555] leading-relaxed">
                  To support children from low-income backgrounds by providing school fees, uniforms, supplies, and other essential resources they need throughout the school year, ensuring they have the opportunity to access and complete their education.
                </p>
              </div>
              {/* Vision */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111111] to-[#1A1A1A] shadow-[0_4px_40px_rgba(0,0,0,0.2)] gold-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F7E7B4] flex items-center justify-center shadow-[0_4px_16px_rgba(212,175,55,0.3)]">
                    <Eye className="w-6 h-6 text-[#111111]" />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
                </div>
                <p className="text-white/65 leading-relaxed">
                  To see a world where every child, regardless of their financial background, has equal access to quality education and the resources they need to succeed.
                </p>
              </div>
            </div>
          </FadeLeft>

          {/* Founder message */}
          <FadeRight>
            <div className="relative p-10 rounded-3xl bg-white shadow-[0_8px_60px_rgba(212,175,55,0.1)] border border-[#D4AF37]/15 overflow-hidden">
              {/* Large quote mark */}
              <div className="absolute -top-4 -left-2 text-[120px] font-bold text-[#D4AF37]/10 leading-none select-none"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                "
              </div>
              <div className="relative z-10">
                <p className="text-lg text-[#333333] leading-relaxed italic mb-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  I still remember the moment I realized how many children were growing up without access to something as simple as a book. Looking into their eyes, I understood that ignoring it was no longer an option. Sunga was born from a promise — that every child deserves the chance to dream, learn, and flourish.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#F7E7B4]/30 border-2 border-[#D4AF37]/40 flex items-center justify-center text-xl font-bold text-[#D4AF37]"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>Esperance Abedi Z.</div>
                    <div className="text-sm text-[#D4AF37]">Founder & Executive Director</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeRight>
        </div>

        {/* Values */}
        <div className="mb-24">
          <FadeUp className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core <span className="text-gradient-gold">Values</span>
            </h3>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-7 rounded-3xl bg-white border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)] transition-all duration-400 group cursor-default text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#F7E7B4]/15 group-hover:from-[#D4AF37]/25 group-hover:to-[#F7E7B4]/25 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h4>
                  <p className="text-sm text-[#666666] leading-relaxed">{desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>


      </div>
    </section>
  );
}
