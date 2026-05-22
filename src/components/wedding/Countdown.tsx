import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-08-15T10:00:00+03:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState<ReturnType<typeof calc> | null>(null);
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);


  const items = [
    { label: "Days", value: t?.days ?? 0 },
    { label: "Hours", value: t?.hours ?? 0 },
    { label: "Minutes", value: t?.minutes ?? 0 },
    { label: "Seconds", value: t?.seconds ?? 0 },
  ];


  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-2xl px-2 py-5 sm:px-4 sm:py-8 text-center"
        >
          <div className="font-display text-3xl sm:text-5xl text-forest tabular-nums">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="eyebrow mt-2 text-[0.6rem] sm:text-xs">{it.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
