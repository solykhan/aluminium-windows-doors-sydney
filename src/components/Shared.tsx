import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { Phone, ChevronRight, ChevronDown, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function CTABand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-8 md:p-12 my-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-950 text-balance">{title}</h2>
          <p className="text-slate-900/80 mt-2 max-w-xl">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 bg-slate-950 text-white font-bold px-6 py-3.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
          </a>
          <Link to="/contact" className="flex items-center justify-center gap-2 bg-white/90 text-slate-950 font-bold px-6 py-3.5 rounded-lg hover:bg-white transition-colors">
            Get a Free Quote <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400 mb-6">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
          {it.path ? (
            <Link to={it.path} className="hover:text-amber-300">{it.name}</Link>
          ) : (
            <span className="text-slate-200">{it.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function FAQSection({ faqs, heading = "Frequently Asked Questions" }: { faqs: { q: string; a: string }[]; heading?: string }) {
  return (
    <section className="my-12">
      <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-6">{heading}</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-[#101a2e] border border-white/10 rounded-xl px-5">
            <AccordionTrigger className="text-left font-semibold text-white hover:text-amber-300 py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 leading-relaxed pb-4">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function MapSection({ heading = "Find Us on the Map" }: { heading?: string }) {
  return (
    <section className="my-14">
      <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-3">{heading}</h2>
      <p className="text-slate-400 mb-6 max-w-2xl">
        Based in Sydney NSW and servicing the entire Eastern Suburbs. Visit our{" "}
        <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
          Google Maps listing
        </a>{" "}
        for directions, reviews and photos of recent work.
      </p>
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <iframe
          src={SITE.mapEmbed}
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="CWD Commercial Windows and Doors Sydney location map"
        />
      </div>
    </section>
  );
}

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", suburb: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nSuburb: ${form.suburb}\n\n${form.message}`
    );
    window.location.href = `mailto:quotes@aluminiumwindowsanddoorssydney.com?subject=${encodeURIComponent(
      "Quote Request — " + (form.suburb || "Sydney")
    )}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-[#101a2e] border border-amber-500/30 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-white mb-2">Thanks, {form.name || "friend"}!</h3>
        <p className="text-slate-400 mb-5">
          Your email app should have opened with your enquiry pre-filled — just press send.
          Prefer to talk? Call us now:
        </p>
        <a href={SITE.phoneLink} className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-lg hover:bg-amber-400">
          <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-[#101a2e] border border-white/10 rounded-2xl p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-white mb-1">Get Your Free Measure & Quote</h3>
      <p className="text-sm text-slate-400 mb-5">No obligation. We respond within one business day.</p>
      <div className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
        <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-[#0b1220] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none" />
        <input required type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-[#0b1220] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none" />
        <input placeholder="Suburb" value={form.suburb} onChange={(e) => setForm({ ...form, suburb: e.target.value })}
          className="w-full bg-[#0b1220] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none" />
        <textarea required placeholder="What do you need? (e.g. 3 bifold doors, shopfront replacement...)" rows={compact ? 3 : 1}
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-[#0b1220] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none min-h-[52px]" />
      </div>
      <button type="submit" className="mt-5 w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg transition-colors">
        <Send className="w-4 h-4" /> Request Free Quote
      </button>
      <p className="text-xs text-slate-500 mt-3 text-center">
        Or call us directly: <a href={SITE.phoneLink} className="text-amber-400 font-semibold">{SITE.phoneDisplay}</a>
      </p>
    </form>
  );
}

export function SectionHeading({ kicker, title, children }: { kicker?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-8">
      {kicker && <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">{kicker}</div>}
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white text-balance">{title}</h2>
      {children && <p className="text-slate-400 mt-3 max-w-2xl leading-relaxed">{children}</p>}
    </div>
  );
}

export function SuburbChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full">
      <MapPin className="w-3 h-3 text-amber-400" /> {name}
    </span>
  );
}

export { ChevronDown };
