import { Link } from "react-router";
import { Phone, ShieldCheck, Ruler, FileCheck2, Factory, ArrowRight, Star, ChevronRight } from "lucide-react";
import { SEO, faqPageSchema } from "@/components/SEO";
import { SITE, MAIN_KEYWORD } from "@/data/site";
import { products } from "@/data/products";
import { suburbs } from "@/data/suburbs";
import { articles } from "@/data/articles";
import { CTABand, FAQSection, MapSection, QuoteForm, SectionHeading } from "@/components/Shared";

const homeFaqs = [
  {
    q: "Who supplies and installs aluminium windows and doors in Sydney?",
    a: "CWD Commercial Windows and Doors Sydney is a specialist supplier and installer of aluminium windows and doors across Sydney, with a focus on the Eastern Suburbs. We measure, fabricate and install with our own in-house team, and provide full AS 2047 and AS 1288 compliance documentation with every project.",
  },
  {
    q: "How much do aluminium windows and doors cost in Sydney?",
    a: "Aluminium windows typically cost $350-$900 per square metre supplied and installed in Sydney depending on style and glazing, and aluminium door systems range from $1,200-$8,500+ per opening. CWD provides free site measures and fixed itemised quotes.",
  },
  {
    q: "What areas of Sydney does CWD service?",
    a: "CWD services all of Sydney with a focus on 33 Eastern Suburbs locations including Vaucluse, Watsons Bay, Double Bay, Rose Bay, Point Piper, Bondi, Bondi Beach, Bronte, Coogee, Maroubra, Randwick, Paddington, Darlinghurst, Potts Point and Elizabeth Bay.",
  },
  {
    q: "Do you install BAL-40 bushfire rated windows?",
    a: "Yes. CWD supplies and installs bushfire-rated window and door systems compliant with AS 3959 from BAL-12.5 through BAL-40, including ember-proof stainless screening and compliance certificates for your certifier.",
  },
  {
    q: "Can you replace shopfront windows without closing my business?",
    a: "Yes. We stage commercial installations out of hours — early mornings, evenings or weekends — and secure all openings same-day, so your business keeps trading throughout the project.",
  },
];

const trustItems = [
  { icon: ShieldCheck, title: "Fully Licensed & Insured", text: "NSW licensed contractor with full public liability cover for commercial and residential sites." },
  { icon: Ruler, title: "Free Measure & Fixed Quote", text: "Real on-site measures and itemised fixed pricing — no phone guesses, no surprises." },
  { icon: Factory, title: "In-House Fabrication", text: "Your windows and doors are made to order and installed by our own crew, not subcontractors." },
  { icon: FileCheck2, title: "Compliance Paperwork", text: "AS 2047 and AS 1288 certificates supplied with every installation as standard." },
];

export default function Home() {
  const featured = articles[0];
  const doorProducts = products.filter((p) => p.category === "Doors");
  const windowProducts = products.filter((p) => p.category === "Windows");
  const specialty = products.filter((p) => p.category === "Specialty" || p.category === "Commercial");

  return (
    <main>
      <SEO
        title="Aluminium Windows and Doors in Sydney | CWD Commercial Windows and Doors Sydney"
        description="CWD supplies & installs aluminium windows and doors across Sydney — bifold, sliding, pivot, frameless doors; awning, louvre, double glazed & BAL-40 windows. Free measure & quote. Call 0498 062 783."
        path="/"
        keywords="aluminium windows and doors sydney, aluminium windows sydney, aluminium doors sydney, bifold doors sydney, double glazed windows sydney, aluminium windows eastern suburbs"
        jsonLd={[
          faqPageSchema(homeFaqs),
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.url + "/",
          },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-commercial.jpg" alt="Commercial windows and doors Sydney - aluminium framed glass curtain wall installed by CWD" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/85 to-[#0b1220]/40" />
        </div>
        <div className="relative container-x py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Star className="w-3.5 h-3.5" /> Sydney's Aluminium Window & Door Specialists
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-[1.05] text-balance">
              {MAIN_KEYWORD}
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              CWD designs, supplies and installs premium aluminium windows and doors for
              homes, businesses and builders across Sydney's Eastern Suburbs — engineered to
              Australian Standards, installed by our own team, and backed by full compliance documentation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-4 rounded-lg text-lg transition-colors">
                <Phone className="w-5 h-5" /> Call {SITE.phoneDisplay}
              </a>
              <Link to="/contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-lg text-lg transition-colors">
                Free Measure & Quote <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> AS 2047 & AS 1288 Compliant</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> In-House Fabrication</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> 33 Eastern Suburbs Serviced</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="container-x -mt-10 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((t) => (
            <div key={t.title} className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
              <t.icon className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="font-display font-bold text-white mb-1.5">{t.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECT ANSWER (AEO) */}
      <section className="container-x mt-16">
        <div className="bg-[#101a2e] border-l-4 border-amber-500 rounded-r-2xl p-7 md:p-9">
          <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
            What are aluminium windows and doors — and what do they cost in Sydney?
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-4xl">
            <strong className="text-amber-300">Aluminium windows and doors</strong> are durable, low-maintenance
            glazing systems built with powder-coated aluminium frames to Australian Standards AS 2047
            and AS 1288 — ideal for Sydney's climate and coastal conditions. In Sydney (2026), aluminium
            windows typically cost <strong className="text-white">$350-$900 per square metre</strong> and aluminium
            doors <strong className="text-white">$1,200-$8,500 per opening</strong>, supplied and installed. CWD provides
            free measures, fixed quotes and full compliance certification.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="container-x mt-20">
        <SectionHeading kicker="Our Range" title="Aluminium Windows and Doors — Every Style, One Team">
          From everyday sliding windows to architectural feature glazing, every product is custom-made,
          Australian Standard compliant and installed by CWD's own crew.
        </SectionHeading>

        <h3 className="font-display text-lg font-bold text-amber-400 mb-4">Doors</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {doorProducts.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-[#101a2e] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-colors">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={p.image} alt={`${p.name} Sydney - CWD commercial windows and doors supply and installation`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold text-white group-hover:text-amber-300 transition-colors">{p.name}</h4>
                <p className="text-sm text-slate-400 mt-1.5 line-clamp-2">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>

        <h3 className="font-display text-lg font-bold text-amber-400 mb-4">Windows</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {windowProducts.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-[#101a2e] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-colors">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={p.image} alt={`${p.name} Sydney - CWD commercial windows and doors supply and installation`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold text-white group-hover:text-amber-300 transition-colors">{p.name}</h4>
                <p className="text-sm text-slate-400 mt-1.5 line-clamp-2">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>

        <h3 className="font-display text-lg font-bold text-amber-400 mb-4">Commercial & Specialty</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialty.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-[#101a2e] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-colors">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={p.image} alt={`${p.name} Sydney - CWD commercial windows and doors supply and installation`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold text-white group-hover:text-amber-300 transition-colors">{p.name}</h4>
                <p className="text-sm text-slate-400 mt-1.5 line-clamp-2">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CWD */}
      <section className="container-x mt-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeading kicker="Why CWD" title="The team Sydney builders and business owners call first">
            We've spent over a decade glazing Sydney — from Double Bay shopfronts to Vaucluse
            harbour-view homes — and we've built our reputation on doing the whole job properly.
          </SectionHeading>
          <ul className="space-y-4">
            {[
              ["One accountable team", "We measure, fabricate, install and certify. No subcontractor handballs, no finger-pointing."],
              ["Commercial-grade everything", "Heavy-duty sections, commercial hardware and engineered glass — even on residential jobs."],
              ["Out-of-hours commercial work", "We install around your trading hours so business never stops."],
              ["Compliance as standard", "AS 2047 and AS 1288 certificates handed over at completion, every time."],
              ["Coastal-tough specifications", "Marine-grade finishes and 316 stainless hardware for Sydney's salt-air suburbs."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3.5">
                <span className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </span>
                <div>
                  <strong className="text-white">{t}.</strong>{" "}
                  <span className="text-slate-400">{d}</span>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/about" className="inline-flex items-center gap-2 mt-7 text-amber-400 font-bold hover:gap-3 transition-all">
            More about CWD <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src="/images/installation-team.jpg" alt="CWD glaziers installing commercial aluminium windows and doors on a Sydney construction site" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* AREAS */}
      <section className="container-x mt-20">
        <SectionHeading kicker="Service Areas" title="33 Eastern Suburbs, One Standard of Work">
          Harbourside, beachside or parkside — we service the whole of Sydney's East with the same
          commercial-grade standard of glazing.
        </SectionHeading>
        <div className="flex flex-wrap gap-2.5">
          {suburbs.map((s) => (
            <Link key={s.slug} to={`/areas/${s.slug}`} className="bg-[#101a2e] border border-white/10 hover:border-amber-500/40 hover:text-amber-300 text-slate-300 text-sm font-medium px-4 py-2 rounded-full transition-colors">
              {s.name}
            </Link>
          ))}
        </div>
        <Link to="/areas-we-serve" className="inline-flex items-center gap-2 mt-6 text-amber-400 font-bold hover:gap-3 transition-all">
          Explore all service areas <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* FEATURED GUIDE */}
      <section className="container-x mt-20">
        <div className="grid lg:grid-cols-2 gap-8 bg-[#101a2e] border border-white/10 rounded-2xl overflow-hidden">
          <div className="min-h-[280px]">
            <img src={featured.image} alt="Complete guide to commercial windows and doors in Sydney - costs, standards and suppliers" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Featured Guide — {featured.readingTime} min read</div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white text-balance">{featured.title}</h3>
            <p className="text-slate-400 mt-4 leading-relaxed">{featured.excerpt}</p>
            <Link to={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 mt-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg w-fit transition-colors">
              Read the Complete Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container-x">
        <FAQSection faqs={homeFaqs} heading="Aluminium Windows and Doors in Sydney — FAQs" />
        <CTABand
          title="Get a fixed quote on your windows and doors"
          text="Free on-site measure anywhere in Sydney's East. Itemised pricing, no obligation, response within one business day."
        />
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <MapSection heading="Find CWD Sydney on Google Maps" />
          <div className="lg:sticky lg:top-28 mt-14">
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  );
}
