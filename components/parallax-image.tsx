"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  position?: string;
  strength?: number;
};

/**
 * A gentle scroll-linked crop drift. The inner image is over-scaled so the
 * frame never shows an edge; reduced-motion visitors get a still crop via CSS.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 92vw",
  position = "50% 50%",
  strength = 5,
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [
    `-${strength}%`,
    `${strength}%`,
  ]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        data-parallax-image
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="scale-[1.18] object-cover"
          style={{ objectPosition: position }}
        />
      </motion.div>
    </div>
  );
}
