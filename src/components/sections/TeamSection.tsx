"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";

const teamMembers = [
  {
    name: "Esperance Abedi Z.",
    role: "Founder & Exec. Director",
    image: "/images/team/esperance.jpeg",
  },
  {
    name: "Blaise Mazunzu",
    role: "Co-Founder",
    image: "/images/team/blaise.jpeg",
  },
  {
    name: "Judith Lusamba",
    role: "Partnerships & Fundraising",
    image: "/images/team/judith.jpeg",
  },
  {
    name: "Esther Baruani M.",
    role: "Chief Financial Officer",
    image: "/images/team/esther.jpeg",
  },
  {
    name: "Benedicte Banga N.",
    role: "Dir. of Programs & Impact",
    image: "/images/team/benedicte.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 lg:py-20 bg-[#F8F9FA] relative overflow-hidden">
      {/* Horizontal white background band */}
      <div className="absolute top-[40%] -translate-y-1/2 left-0 w-full h-80 bg-white -z-10 shadow-sm"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Team"
          title="Meet the"
          titleHighlight="Leaders"
          subtitle="Dedicated individuals working tirelessly to make a difference and bring hope to communities."
          className="mb-16"
        />

        <FadeUp className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-[#B8860B] uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sunga Organization Leaders
          </h3>
        </FadeUp>

        <StaggerContainer className="flex flex-col xl:flex-row flex-wrap justify-center items-center gap-10 xl:gap-0">
          {teamMembers.map((member, index) => (
            <StaggerItem key={member.name} className="flex flex-col xl:flex-row items-center">
              <motion.div 
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-40 h-52 md:w-44 md:h-56 lg:w-48 lg:h-60 rounded-t-full overflow-hidden mb-6 relative border-b-4 border-transparent group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <motion.div 
                  className="text-center px-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h4 className="text-lg md:text-xl font-bold text-[#B8860B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h4>
                  <p className="text-[11px] md:text-xs font-bold text-[#B8860B]/80 uppercase tracking-wider max-w-[160px] mx-auto leading-tight">
                    {member.role}
                  </p>
                </motion.div>
              </motion.div>

              {/* Separator line between team members */}
              {index < teamMembers.length - 1 && (
                <div className="hidden xl:block w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent mx-6 lg:mx-8"></div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
