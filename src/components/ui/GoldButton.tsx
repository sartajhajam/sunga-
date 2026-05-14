"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

export const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ variant = "primary", size = "md", children, className, href, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer overflow-hidden group";

    const sizeClasses = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3.5 text-base",
      lg: "px-9 py-4 text-lg",
    };

    const variantClasses = {
      primary: "bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] text-[#111111] shadow-[0_4px_24px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_36px_rgba(212,175,55,0.55)] hover:scale-[1.03] active:scale-[0.98]",
      outline: "bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] hover:scale-[1.03]",
      ghost: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-[1.03]",
    };

    const inner = (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        {...(props as any)}
      >
        {/* Shimmer effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
        {children}
      </motion.button>
    );

    if (href) {
      return <a href={href}>{inner}</a>;
    }

    return inner;
  }
);

GoldButton.displayName = "GoldButton";
