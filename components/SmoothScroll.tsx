"use client";
import { ReactLenis as Lenis } from "lenis/react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
}) => {
  return (
    <Lenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      {children}
    </Lenis>
  );
};

export default SmoothScroll;
