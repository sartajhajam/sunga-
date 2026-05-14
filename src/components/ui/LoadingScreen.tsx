"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-[#111111] flex flex-col items-center justify-center gap-5"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E7B4] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              <Heart className="w-8 h-8 text-[#111]" fill="currentColor" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sunga
              </div>
              <div className="text-xs tracking-widest text-[#D4AF37] uppercase">Organisation</div>
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-white/30 tracking-widest uppercase"
          >
            Compassion in Action
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
