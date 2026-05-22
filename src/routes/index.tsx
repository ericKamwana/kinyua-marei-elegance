import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Church, Clock, MapPin, Sparkles, Heart } from "lucide-react";
import { Hero } from "@/components/wedding/Hero";
import { Section } from "@/components/wedding/Section";
import { Countdown } from "@/components/wedding/Countdown";
import { RSVP } from "@/components/wedding/RSVP";
import { Particles } from "@/components/wedding/Particles";
import { DashikiBand, DashikiOrnament } from "@/components/wedding/DashikiPattern";
import qrImg from "@/assets/location-qr.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charles & Zipporah · 15 August 2026" },
      { name: "description", content: "Together with their families, Charles Edwin Kinyua & Zipporah Nyokabi Marei invite you to celebrate their wedding — 15 August 2026, St Joseph Kianjokoma Catholic Church." },
      { property: "og:title", content: "Charles & Zipporah · Wedding Invitation" },
      { property: "og:description", content: "Join us on 15 August 2026 as we begin forever." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Playfair+Display:wght@300;400;500;600&family=Great+Vibes&display=swap",
      },
    ],
  }),
  component: Index,
});

const MAPS_URL = "https://maps.app.goo.gl/s8kfsPdmGfY32H9m6";

function Index() {
  return (
    <main className="relative bg-ivory text-charcoal overflow-x-hidden">
      <Particles />
      <div className="relative z-10">
        <Hero />

        {/* Countdown */}
        <Section eyebrow="Counting Every Moment" title="Until We Say I Do">
          <Countdown />
        </Section>

        {/* Ceremony */}
        <Section id="ceremony" eyebrow="The Holy Matrimony" title="Ceremony">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Church, label: "Church", value: "St Joseph Kianjokoma", sub: "Catholic Church" },
              { icon: Clock, label: "Time", value: "10:00 AM", sub: "East Africa Time" },
              { icon: MapPin, label: "Date", value: "15 August", sub: "Saturday · 2026" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <item.icon className="w-7 h-7 mx-auto text-gold mb-5" strokeWidth={1.2} />
                <div className="eyebrow text-[0.65rem] mb-3">{item.label}</div>
                <div className="font-display text-2xl text-charcoal">{item.value}</div>
                <div className="text-sm text-muted-foreground mt-1 italic">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Map */}
        <Section eyebrow="Find Your Way" title="Location">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-5 gap-8 items-stretch"
          >
            <div className="md:col-span-3 rounded-3xl overflow-hidden luxury-shadow border border-gold/30 h-[360px] sm:h-[460px]">
              <iframe
                title="St Joseph Kianjokoma Catholic Church"
                src="https://www.google.com/maps?q=St+Joseph+Kianjokoma+Catholic+Church,+Embu,+Kenya&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="eyebrow mb-4">Scan To Open Maps</div>
              <div className="rounded-2xl bg-ivory p-3 border border-gold/40">
                <img src={qrImg} alt="QR code to church location" className="w-44 h-44" />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-forest font-display tracking-widest text-xs uppercase border-b border-gold/60 pb-1 hover:text-gold transition"
              >
                Open In Google Maps
              </a>
            </div>
          </motion.div>
        </Section>

        {/* Reception */}
        <Section id="reception" eyebrow="Celebration Continues" title="Reception">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card rounded-3xl p-12 sm:p-16 text-center max-w-2xl mx-auto"
          >
            <Sparkles className="w-7 h-7 text-gold mx-auto mb-6" strokeWidth={1.2} />
            <p className="font-script text-4xl sm:text-5xl gold-text mb-4">A toast to forever</p>
            <p className="font-display text-xl text-charcoal/80 italic">
              Reception details to follow
            </p>
            <div className="mt-8 divider-gold"><span className="text-xs tracking-widest">SOON</span></div>
          </motion.div>
        </Section>

        {/* Dress code */}
        <Section eyebrow="A Note On Attire" title="Dress Code">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl mx-auto text-center glass-card rounded-3xl p-12"
          >
            <div className="flex justify-center gap-2 mb-6 text-gold">
              <span className="w-2 h-2 rounded-full bg-forest" />
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="w-2 h-2 rounded-full bg-beige" />
            </div>
            <p className="font-display text-2xl sm:text-3xl text-charcoal leading-relaxed">
              Elegant Traditional <span className="font-script gold-text text-3xl sm:text-4xl">&</span> Formal Attire
            </p>
            <p className="mt-5 text-sm text-muted-foreground italic tracking-wide">
              Earthy tones, ivory, gold and forest greens are warmly encouraged.
            </p>
          </motion.div>
        </Section>

        {/* RSVP */}
        <Section id="rsvp" eyebrow="Kindly Respond" title="RSVP">
          <RSVP />
        </Section>

        {/* Footer */}
        <footer className="relative py-24 px-6 text-center border-t border-gold/20">
          <DashikiBand className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-3 text-gold/70" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
          >
            <Heart className="w-6 h-6 text-gold mx-auto mb-6" strokeWidth={1.2} fill="currentColor" />
            <p className="font-script text-4xl sm:text-5xl gold-text mb-4">
              Two hearts, one love, one lifetime.
            </p>
            <div className="mt-6 flex justify-center">
              <DashikiOrnament className="w-48 h-12 text-gold" />
            </div>
            <p className="font-display text-xs tracking-[0.4em] text-forest uppercase mt-2">
              C &nbsp;·&nbsp; Z
            </p>

            <p className="mt-8 text-xs tracking-widest uppercase text-muted-foreground">
              15 August 2026 · Embu, Kenya
            </p>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
