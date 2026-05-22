import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Dot = { id: number; x: number; delay: number; duration: number; size: number };

export function Particles() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 14 + Math.random() * 10,
        size: 2 + Math.random() * 3,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-gold/30"
          style={{ left: `${d.x}%`, width: d.size, height: d.size, bottom: -10 }}
          animate={{ y: "-110vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
