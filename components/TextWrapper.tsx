"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function TextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 10,
      }}
      ref={ref}
      className="z-20"
    >
      {children}
    </motion.div>
  );
}
