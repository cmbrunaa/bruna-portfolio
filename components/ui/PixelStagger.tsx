"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type PixelStaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type PixelItemProps = {
  children: ReactNode;
  className?: string;
};

export function PixelStagger({
  children,
  className = "",
  delay = 0,
}: PixelStaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function PixelItem({
  children,
  className = "",
}: PixelItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: [0, 0, 1],
          y: [20, 8, 0],
          transition: {
            duration: 0.32,
            times: [0, 0.5, 1],
            ease: "linear",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}