"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * MotionConfig's "user" setting automatically drops transform/layout animation
 * for visitors who prefer reduced motion, while preserving gentle fades.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
