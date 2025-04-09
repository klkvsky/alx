"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  grayscale?: boolean;
  gap?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
  grayscale = true,
  gap = 20,
}) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      // Get the width of the content
      const contentWidth = contentRef.current.offsetWidth;
      setContentWidth(contentWidth);

      // Start the animation
      controls.start({
        x: direction === "left" ? -contentWidth : contentWidth,
        transition: {
          duration: contentWidth / speed,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [controls, direction, speed, children]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative"
      style={{ 
        width: "100%", 
        backgroundColor: "#000",
        padding: "20px 0"
      }}
      onMouseEnter={() => pauseOnHover && controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: direction === "left" ? -contentWidth : contentWidth,
          transition: {
            duration: contentWidth / speed,
            ease: "linear",
            repeat: Infinity,
          },
        })
      }
    >
      <motion.div
        ref={contentRef}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
          gap: `${gap}px`,
          filter: grayscale ? "grayscale(1)" : "none",
        }}
        initial={{ x: direction === "left" ? 0 : -contentWidth }}
        animate={controls}
      >
        {children}
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
          position: "absolute",
          left: direction === "left" ? contentWidth : -contentWidth,
          top: 0,
          gap: `${gap}px`,
          filter: grayscale ? "grayscale(1)" : "none",
        }}
        initial={{ x: 0 }}
        animate={{
          x: direction === "left" ? -contentWidth : contentWidth,
          transition: {
            duration: contentWidth / speed,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
