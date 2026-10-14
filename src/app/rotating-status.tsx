"use client";

import { useEffect, useState } from "react";
import { statuses } from "../data/statuses";

const rotationInterval = 4000;

export function RotatingStatus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % statuses.length);
    }, rotationInterval);

    return () => window.clearInterval(interval);
  }, []);

  const currentStatus = statuses[currentIndex];

  return (
    <p>
      <strong>{currentStatus.label}:</strong> {currentStatus.value}
    </p>
  );
}
