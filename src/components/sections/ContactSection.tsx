"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeLeft, FadeRight } from "@/components/animations/MotionWrapper";
import { GoldButton } from "@/components/ui/GoldButton";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Congo Kinshasa", "Michigan, USA"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@sungaorganisation.org", "donate@sungaorganisation.org"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (616) 274-8591", "Mon–Sat, 9 AM – 6 PM IST"],
  },
];

const social = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      toast.success("Message sent successfully!");
      reset();
      
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/6 to-transparent rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="We'd Love to"
          titleHighlight="Hear From You"
          subtitle="Whether you're a potential donor, volunteer, partner, or simply curious — our team is always happy to connect."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left panel */}
          <FadeLeft className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <motion.div
                key={title}
                whileHover={{ x: 4 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 shadow-[0_2px_20px_rgba(212,175,55,0.05)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.1)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F7E7B4]/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-shadow duration-300">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-1.5">
                    {title}
                  </p>
                  {lines.map((line) => (
                    <p key={line} className="text-sm text-[#555] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Stylised map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/10 shadow-sm">
              <div className="relative h-48 bg-gradient-to-br from-[#E8D8A0]/40 via-[#D4AF37]/10 to-[#F4E3B2]/30 flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E7B4] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] animate-pulse">
                    <MapPin className="w-5 h-5 text-[#111]" fill="currentColor" />
                  </div>
                  <span className="text-xs font-semibold text-[#111] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#D4AF37]/20">
                    Congo & USA
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/10">
              <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
                Follow Our Work
              </p>
              <div className="flex gap-3">
                {social.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/15 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#111] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Right — form */}
          <FadeRight className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_8px_60px_rgba(212,175,55,0.1)] border border-[#D4AF37]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-bl-3xl pointer-events-none" />

              <h3
                className="text-xl font-bold text-[#111] mb-7 relative z-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E7B4] flex items-center justify-center shadow-[0_4px_24px_rgba(212,175,55,0.4)]">
                    <CheckCircle className="w-8 h-8 text-[#111]" />
                  </div>
                  <p
                    className="text-xl font-bold text-[#111]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Message Sent!
                  </p>
                  <p className="text-sm text-[#888] text-center">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-[#999] mb-1.5 block tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="Priya Sharma"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#D4AF37]/15 focus:border-[#D4AF37]/60'} bg-[#FAF7F2] text-[#111] placeholder:text-[#CCC] focus:outline-none text-sm transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-xs text-[#999] mb-1.5 block tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#D4AF37]/15 focus:border-[#D4AF37]/60'} bg-[#FAF7F2] text-[#111] placeholder:text-[#CCC] focus:outline-none text-sm transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#999] mb-1.5 block tracking-wide">Subject</label>
                    <select
                      {...register("subject")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-400 focus:border-red-500' : 'border-[#D4AF37]/15 focus:border-[#D4AF37]/60'} bg-[#FAF7F2] text-[#111] focus:outline-none text-sm transition-colors appearance-none`}
                    >
                      <option value="">Select a topic…</option>
                      <option>Donation Inquiry</option>
                      <option>Volunteer Application</option>
                      <option>Corporate Partnership</option>
                      <option>Media &amp; Press</option>
                      <option>General Question</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-[#999] mb-1.5 block tracking-wide">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      {...register("message")}
                      placeholder="How can we help you, or how would you like to help us?"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#D4AF37]/15 focus:border-[#D4AF37]/60'} bg-[#FAF7F2] text-[#111] placeholder:text-[#CCC] focus:outline-none text-sm transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <GoldButton size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </GoldButton>

                  <p className="text-xs text-[#bbb] text-center">
                    We typically respond within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
