import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

export function RSVP() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", attend: "yes", guests: "1", message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field = "w-full bg-transparent border-b border-border/60 focus:border-gold outline-none py-3 text-charcoal placeholder:text-muted-foreground/60 font-serif text-lg transition-colors";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-12 text-center max-w-xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest/10 text-forest mb-6">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="font-display text-3xl text-charcoal mb-3">Thank You</h3>
        <p className="text-muted-foreground italic">
          Your response has been received with love. We can't wait to celebrate with you.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="glass-card rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <input required placeholder="Full Name" className={field}
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required type="tel" placeholder="Phone Number" className={field}
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>
      <input type="email" placeholder="Email Address" className={field}
        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <div className="grid sm:grid-cols-2 gap-6 pt-2">
        <div>
          <label className="eyebrow block mb-3">Will you attend?</label>
          <div className="flex gap-2">
            {["yes", "no"].map((v) => (
              <button type="button" key={v}
                onClick={() => setForm({ ...form, attend: v })}
                className={`flex-1 py-3 rounded-full border transition-all text-sm tracking-widest uppercase font-display ${
                  form.attend === v
                    ? "bg-forest text-ivory border-forest"
                    : "border-border text-charcoal hover:border-gold"
                }`}>
                {v === "yes" ? "Joyfully" : "Regretfully"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="eyebrow block mb-3">Number of Guests</label>
          <select className={field + " appearance-none cursor-pointer"}
            value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}>
            {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <textarea placeholder="A message to the couple..." rows={3}
        className={field + " resize-none"}
        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

      <div className="pt-4 text-center">
        <button type="submit"
          className="group inline-flex items-center justify-center px-12 py-4 rounded-full bg-forest text-ivory font-display tracking-[0.3em] text-sm uppercase transition-all hover:bg-charcoal hover:shadow-[0_20px_50px_-15px_rgba(47,79,62,0.5)] hover:-translate-y-0.5">
          Send Response
        </button>
      </div>
    </motion.form>
  );
}
