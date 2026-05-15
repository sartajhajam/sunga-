"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, CheckCircle, TrendingUp, ArrowRight, Lock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeLeft, FadeRight, FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import { GoldButton } from "@/components/ui/GoldButton";

const amounts = [10, 25, 50, 100];

const impactMap: Record<number, string> = {
  10: "Provides essential school supplies for 2 students for a month",
  25: "Covers monthly tuition fees for a child in our primary program",
  50: "Provides early childhood education and learning kits for 5 toddlers",
  100: "Funds a full year of primary education and uniforms for a student",
};

const trustIndicators = [
  { icon: Shield, text: "100% Secure & Encrypted" },
  { icon: CheckCircle, text: "Registered NGO in Congo & USA" },
  { icon: TrendingUp, text: "Tax Deductible Donations" },
  { icon: Lock, text: "Transparent Reporting" },
];

const transparencyStats = [
  { value: "87%", label: "Goes to Programs" },
  { value: "8%", label: "Operations" },
  { value: "5%", label: "Fundraising" },
];

export default function DonationSection() {
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [progress] = useState(45);

  const displayAmount = custom ? parseInt(custom) || 0 : selected;

  return (
    <section id="donate" className="py-16 lg:py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#D4AF37]/6 to-transparent rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Make a Difference"
          title="Your Gift Changes"
          titleHighlight="Everything"
          subtitle="Every dollar you give is a step towards a better Africa. 87% of every donation goes directly to our programs — no fluff, just impact."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Donation Card */}
          <FadeLeft className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-white shadow-[0_8px_60px_rgba(212,175,55,0.1)] border border-[#D4AF37]/15">
              {/* Giving frequency toggle */}
              <div className="flex items-center gap-3 mb-8 p-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/10 w-fit">
                {["One-time", "Monthly"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setIsMonthly(type === "Monthly")}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      (isMonthly ? type === "Monthly" : type === "One-time")
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] text-[#111] shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
                        : "text-[#666] hover:text-[#111]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Amount selection */}
              <p className="text-sm font-semibold text-[#111] mb-3 tracking-wide">Choose Amount ($)</p>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {amounts.map((amt) => (
                  <motion.button
                    key={amt}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => { setSelected(amt); setCustom(""); }}
                    className={`py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                      selected === amt && !custom
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] border-[#D4AF37] text-[#111] shadow-[0_4px_16px_rgba(212,175,55,0.3)]"
                        : "bg-[#FAF7F2] border-[#D4AF37]/20 text-[#333] hover:border-[#D4AF37]/50"
                    }`}
                  >
                    ${amt.toLocaleString()}
                  </motion.button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <label className="text-xs text-[#999] mb-1.5 block tracking-wide">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] font-bold">$</span>
                  <input
                    type="number"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-[#D4AF37]/20 bg-[#FAF7F2] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#D4AF37]/60 text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Impact message */}
              {displayAmount > 0 && (
                <motion.div
                  key={displayAmount}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-[#D4AF37]/8 border border-[#D4AF37]/20"
                >
                  <p className="text-sm text-[#555] leading-relaxed">
                    <span className="font-semibold text-[#D4AF37]">Your ${displayAmount.toLocaleString()} {isMonthly ? "/month" : ""} impact: </span>
                    {impactMap[displayAmount] || `Supports critical programs across our 6 pillars of change`}
                  </p>
                </motion.div>
              )}

              {/* Campaign progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#111]">45,000 $ Raised . Annual Campaign 2025 to 2026</span>
                  <span className="text-xs text-[#D4AF37] font-bold">{progress}% funded</span>
                </div>
                <div className="h-2 bg-[#D4AF37]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4]"
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-[#999]">$45,000 raised</span>
                  <span className="text-xs text-[#999]">Goal: $100,000</span>
                </div>
              </div>

              <GoldButton size="lg" className="w-full" onClick={(e) => { e.preventDefault(); alert("The Donation Functionality is not yet operational yet. You shall check back again . If you want to make donation please write us on email ."); }}>
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate ${displayAmount ? displayAmount.toLocaleString() : "..."}{isMonthly ? "/month" : ""}
              </GoldButton>

              {/* Trust */}
              <div className="mt-6 pt-6 border-t border-[#D4AF37]/10 grid grid-cols-2 gap-3">
                {trustIndicators.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-xs text-[#888]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Right panel */}
          <FadeRight className="lg:col-span-2 space-y-6">
            {/* Transparency */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-[#D4AF37]/15">
              <h4 className="text-white font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Where Your Money Goes
              </h4>
              {transparencyStats.map(({ value, label }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <span className="text-white/60 text-sm">{label}</span>
                  <span className="text-[#D4AF37] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="p-7 rounded-3xl bg-white border border-[#D4AF37]/10 shadow-sm">
              <div className="text-4xl text-[#D4AF37]/20 font-bold leading-none mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
              <p className="text-[#444] text-sm leading-relaxed italic mb-4">
                Sunga helped my daughter finish school when I couldn't afford fees. That scholarship changed her life — and mine.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-xs font-bold text-[#D4AF37]">R</div>
                <div>
                  <div className="text-xs font-semibold text-[#111]">Ramesh Kumar</div>
                  <div className="text-xs text-[#999]">Parent, Congo</div>
                </div>
              </div>
            </div>

            {/* Other ways to help */}
            <div className="p-7 rounded-3xl bg-[#D4AF37]/5 border border-[#D4AF37]/15">
              <h4 className="text-sm font-bold text-[#111] mb-4">Other Ways to Help</h4>
              {["Fundraise for Sunga", "Corporate CSR Partnerships", "In-Kind Donations", "Volunteer Your Time"].map((item) => (
                <div key={item} className="flex items-center gap-2 py-2.5 border-b border-[#D4AF37]/10 last:border-0 group cursor-pointer">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm text-[#555] group-hover:text-[#D4AF37] transition-colors">{item}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
