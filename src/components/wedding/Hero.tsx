import { motion } from "framer-motion";
import heroImg from "@/assets/hero-mountain.jpg";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Misty Mount Kenya foothills at dawn"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-ivory/10 to-ivory/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="eyebrow"
        >
          Together With Their Families
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10"
        >
          <h1 className="font-display text-charcoal font-light leading-[1.05]">
            <span className="block text-5xl sm:text-7xl md:text-8xl tracking-tight">
              Charles Edwin
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl tracking-tight">
              Kinyua
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 1.6 }}
          className="my-6 sm:my-8 font-script text-5xl sm:text-6xl gold-text"
          style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,127,0.3))" }}
        >
          &
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-charcoal font-light leading-[1.05]">
            <span className="block text-5xl sm:text-7xl md:text-8xl tracking-tight">
              Zipporah Nyokabi
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl tracking-tight">
              Marei
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2.8 }}
          className="mt-10 sm:mt-14 flex flex-col items-center gap-5"
        >
          <p className="text-muted-foreground italic text-base sm:text-lg max-w-md">
            Invite you to celebrate their wedding
          </p>
          <div className="divider-gold">
            <span className="font-display text-sm sm:text-base tracking-[0.4em] uppercase text-forest">
              15 · 08 · 2026
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 3.5 },
            y: { duration: 2.5, delay: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold"
        >
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
            <path d="M10 2 V28 M3 22 L10 29 L17 22" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
