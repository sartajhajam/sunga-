"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Shirt, Pencil, Calendar, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/animations/MotionWrapper";
import { GoldButton } from "@/components/ui/GoldButton";

const services = [
  {
    icon: GraduationCap,
    title: "School Fees Assistance",
    shortDesc: "Covering tuition and related costs.",
    fullDesc: "We remove the financial burden by covering tuition fees, enrollment costs, and exam fees so children can stay in school without interruption.",
    color: "#D4AF37",
  },
  {
    icon: Shirt,
    title: "Uniforms & Shoes",
    shortDesc: "Providing proper school attire.",
    fullDesc: "Every child deserves to feel equal. We provide required school uniforms, shoes, and winter clothing for the academic year.",
    color: "#E8C84A",
  },
  {
    icon: Pencil,
    title: "School Supplies",
    shortDesc: "Equipping students for success.",
    fullDesc: "We supply backpacks, notebooks, stationery, and learning materials needed for daily classes and homework.",
    color: "#F0D060",
  },
  {
    icon: Calendar,
    title: "Academic Year Support",
    shortDesc: "Continuous year-round assistance.",
    fullDesc: "Our support doesn't stop at enrollment. We provide ongoing tutoring, mentoring, and academic tracking throughout the entire school year.",
    color: "#D4AF37",
  },
  {
    icon: Users,
    title: "Family Engagement",
    shortDesc: "Building a supportive environment.",
    fullDesc: "We work closely with parents and local communities to foster an environment that values and prioritizes children's education.",
    color: "#E8C84A",
  },
];

export default function ProgramsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="programs" className="py-16 lg:py-20 bg-[#F9F5EE] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Services"
          title="Direct Support"
          titleHighlight="For Students"
          subtitle="We provide direct support to children from financially challenged backgrounds so they can access and stay in school."
          className="mb-20"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map(({ icon: Icon, title, shortDesc, fullDesc, color }, i) => (
            <StaggerItem key={title}>
              <motion.div
                layout
                whileHover={{ y: -6 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="p-8 rounded-3xl bg-white border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_12px_48px_rgba(212,175,55,0.12)] transition-all duration-400 group cursor-pointer relative overflow-hidden h-full flex flex-col"
              >
                {/* Background glow */}
                <motion.div
                  animate={{ opacity: expanded === i ? 1 : 0 }}
                  className="absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 20%, ${color}10, transparent 65%)` }}
                />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(212,175,55,0.2)] transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${color}25, ${color}10)` }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-4 flex-1">{shortDesc}</p>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#555] text-sm leading-relaxed mb-5 border-t border-[#D4AF37]/10 pt-4">
                          {fullDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Learn more */}
                  <div className={`flex items-center gap-2 text-sm font-semibold mt-auto pt-4 transition-colors duration-300`}
                    style={{ color }}>
                    <span>{expanded === i ? "Show less" : "Learn more"}</span>
                    <motion.div animate={{ rotate: expanded === i ? 90 : 0 }} transition={{ duration: 0.3 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp className="text-center mt-16">
          <p className="text-[#666] mb-6">Want to support a student's education? Partner with us.</p>
          <GoldButton size="lg" href="#contact">Become a Partner</GoldButton>
        </FadeUp>
      </div>
    </section>
  );
}
