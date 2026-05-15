"use client";

import { motion } from "framer-motion";
import { Clock, Globe, Heart, Users, Award, Smile, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeLeft, FadeRight, StaggerContainer, StaggerItem, FadeUp } from "@/components/animations/MotionWrapper";
import { GoldButton } from "@/components/ui/GoldButton";

const benefits = [
  { icon: Globe, title: "Global Impact", desc: "Be part of work that touches real lives across multiple communities." },
  { icon: Users, title: "Community", desc: "Join 500+ passionate volunteers who share your drive to do good." },
  { icon: Award, title: "Skill Growth", desc: "Gain leadership, fieldwork, and social development experience." },
  { icon: Smile, title: "Fulfillment", desc: "Experience the deep joy of making a visible difference." },
];

const journey = [
  { step: "01", title: "Apply Online", desc: "Fill out our quick volunteer form with your skills and interests." },
  { step: "02", title: "Orientation", desc: "Attend a 2-hour online orientation session with our team." },
  { step: "03", title: "Get Matched", desc: "We match you with a program aligned with your skills and schedule." },
  { step: "04", title: "Start Volunteering", desc: "Begin your journey — in-person or remotely, as per your availability." },
];

const roles = [
  "Teaching Assistant", "Library Coordinator", "After-School Mentor",
  "Literacy Coach", "Digital Skills Tutor", "Fundraising Lead",
];

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="py-24 lg:py-32 bg-gradient-to-b from-[#0D0D0D] to-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#D4AF37]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-[#D4AF37]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get Involved"
          title="Be the Change"
          titleHighlight="You Wish to See"
          subtitle="Volunteering with Sunga is more than giving time — it's joining a family of changemakers dedicated to building a better Africa."
          light
          className="mb-20"
        />

        {/* Benefits */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 rounded-3xl glass-dark group cursor-default text-center transition-all duration-300 hover:border-[#D4AF37]/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F7E7B4]/10 flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-shadow duration-300">
                  <Icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Journey & Form Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Journey timeline */}
          <FadeLeft>
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Volunteer <span className="text-gradient-gold">Journey</span>
            </h3>
            <div className="space-y-6">
              {journey.map(({ step, title, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E7B4] flex items-center justify-center text-sm font-bold text-[#111] flex-shrink-0 shadow-[0_4px_16px_rgba(212,175,55,0.3)]">
                      {step}
                    </div>
                    {i < journey.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-[#D4AF37]/40 to-transparent mt-2 min-h-8" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-white font-semibold mb-1">{title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Roles */}
            <div className="mt-8">
              <p className="text-white/60 text-sm mb-4">Open volunteer roles right now:</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <span key={role} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Form */}
          <FadeRight>
            <div className="p-8 rounded-3xl glass-dark border border-[#D4AF37]/15">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Start Your Application
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block tracking-wide">First Name</label>
                    <input
                      type="text"
                      placeholder="Priya"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/50 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block tracking-wide">Last Name</label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/50 text-sm transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/50 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block tracking-wide">Area of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 text-sm transition-colors appearance-none">
                    <option value="" className="bg-[#1a1a1a]">Select a program</option>
                    <option value="primary" className="bg-[#1a1a1a]">Primary Education</option>
                    <option value="literacy" className="bg-[#1a1a1a]">Literacy & Reading</option>
                    <option value="digital" className="bg-[#1a1a1a]">Digital Literacy</option>
                    <option value="tutoring" className="bg-[#1a1a1a]">Subject Tutoring</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1.5 block tracking-wide">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about yourself and why you want to volunteer..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/50 text-sm transition-colors resize-none"
                  />
                </div>
                <GoldButton size="md" className="w-full mt-2">
                  Submit Application
                  <ArrowRight className="w-4 h-4" />
                </GoldButton>
              </form>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
