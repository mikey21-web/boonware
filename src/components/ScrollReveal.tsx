"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.75, ease, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
