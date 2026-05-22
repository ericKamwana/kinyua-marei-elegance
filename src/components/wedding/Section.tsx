import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { DashikiOrnament } from "./DashikiPattern";


export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 sm:mb-20"
          >
            {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
            {title && (
              <h2 className="font-display text-4xl sm:text-6xl text-charcoal font-light">
                {title}
              </h2>
            )}
            <div className="mt-6 flex justify-center">
              <DashikiOrnament className="w-44 sm:w-56 h-12 text-gold" />
            </div>

          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
