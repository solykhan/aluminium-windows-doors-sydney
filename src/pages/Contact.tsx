import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { SITE } from "@/data/site";
import { suburbs } from "@/data/suburbs";
import { Breadcrumbs, MapSection, QuoteForm, SectionHeading } from "@/components/Shared";

export default function Contact() {
  return (
    <main className="container-x py-12">
      <SEO
        title="Contact CWD Sydney — Aluminium Windows & Doors Quote | 0498 062 783"
        description="Contact CWD Commercial Windows and Doors Sydney for a free measure and fixed quote on aluminium windows and doors. Call 0498 062 783. Servicing 33 Eastern Suburbs."
        path="/contact"
        keywords="aluminium windows quote sydney, aluminium doors quote sydney, glazier contact sydney, free measure quote windows"
        jsonLd={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${SITE.name}`,
            mainEntity: { "@id": `${SITE.url}/#business` },
          },
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />

      <SectionHeading kicker="Contact" title="Get Your Free Measure & Quote">
        Call us or send the form — we'll respond within one business day and book your free on-site
        measure anywhere in Sydney's Eastern Suburbs.
      </SectionHeading>

      <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
        <div className="space-y-6">
          <a href={SITE.phoneLink} className="flex items-center gap-5 bg-amber-500 hover:bg-amber-400 rounded-2xl p-6 transition-colors group">
            <div className="w-14 h-14 rounded-xl bg-slate-950 flex items-center justify-center shrink-0">
              <Phone className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-800">Call Us Now</div>
              <div className="font-display text-2xl font-extrabold text-slate-950">{SITE.phoneDisplay}</div>
            </div>
          </a>

          <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-[#101a2e] border border-white/10 hover:border-amber-500/40 rounded-2xl p-6 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Find Us</div>
              <div className="font-display text-lg font-bold text-white">Sydney NSW — Google Maps</div>
            </div>
          </a>

          <div className="flex items-center gap-5 bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Opening Hours</div>
              <div className="font-display text-lg font-bold text-white">{SITE.hours}</div>
            </div>
          </div>

          <div className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <h2 className="font-display font-bold text-white mb-4">What happens next?</h2>
            <ul className="space-y-3">
              {[
                "We call you back within one business day",
                "Free on-site measure booked at a time that suits",
                "Itemised fixed quote — valid 30 days, no obligation",
                "Fabrication typically 2-4 weeks from approval",
                "Installation by our own crew, compliance certificates included",
              ].map((s) => (
                <li key={s} className="flex gap-3 items-start text-sm">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-slate-300">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <QuoteForm />
      </div>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold text-white mb-4">We Service 33 Eastern Suburbs</h2>
        <div className="flex flex-wrap gap-2.5">
          {suburbs.map((s) => (
            <span key={s.slug} className="bg-[#101a2e] border border-white/10 text-slate-300 text-sm px-4 py-2 rounded-full">
              {s.name}
            </span>
          ))}
        </div>
      </section>

      <MapSection heading="Our Location" />
    </main>
  );
}
