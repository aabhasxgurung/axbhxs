import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { magneticVariance } from "./ui/button";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: any;
  size?: any;
}

export const FramerMagnetic: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant,
  size,
}) => {
  const ref = useRef<HTMLButtonElement | null>(null); // Use HTMLButtonElement ref
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      style={{ position: "relative" }}
      ref={ref}
      onPointerMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(magneticVariance({ variant, size, className }))}
    >
      {children}
    </motion.button>
  );
};
