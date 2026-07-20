"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type PixelRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

const initialPositions = {
  up: { x: 0, y: 16 },
  left: { x: -16, y: 0 },
  right: { x: 16, y: 0 },
};

export function PixelReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: PixelRevealProps) {
  const position = initialPositions[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: position.x,
        y: position.y,
      }}
      whileInView={{
        opacity: [0, 0, 1],
        x: [position.x, position.x / 2, 0],
        y: [position.y, position.y / 2, 0],
      }}
      viewport={{
        once: true,
        amount: 0.16,
      }}
      transition={{
        duration: 0.28,
        delay,
        times: [0, 0.45, 1],
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}