import { Link } from "react-router";
import { ShieldCheck, Factory, FileCheck2, Clock, ArrowRight } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { SITE } from "@/data/site";
import { Breadcrumbs, CTABand, MapSection, SectionHeading } from "@/components/Shared";

export default function About() {
  return (
    <main className="container-x py-12">
      <SEO
        title="About CWD — Aluminium Windows and Doors Sydney Specialists"
        description="CWD Commercial Windows and Doors Sydney — over a decade supplying and installing aluminium windows and doors across Sydney's Eastern Suburbs. In-house fabrication, licensed & insured, full compliance documentation."
        path="/about"
        jsonLd={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: `About ${SITE.name}`,
            mainEntity: { "@id": `${SITE.url}/#business` },
          },
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} />

      <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">About CWD</div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white text-balance leading-[1.08]">
            Sydney's Aluminium Windows and Doors Specialists
          </h1>
          <p className="text-slate-300 leading-relaxed mt-6">
            {SITE.name} was built on a simple observation: too many glazing jobs in Sydney are
            measured by one company, made by another and installed by a third — and when something
            goes wrong, everyone points somewhere else.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            We do the whole job with our own team. Measure, fabrication, installation and
            certification stay under one roof, so there's one number to call and one name on the
            paperwork. For over a decade that's meant shopfronts that open on time, commercial
            facades that certify first go, and homes across the Eastern Suburbs with windows and
            doors that still glide like new years later.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src="/images/installation-team.jpg" alt="CWD installation team fitting commercial aluminium windows and doors in Sydney Eastern Suburbs" className="w-full object-cover aspect-[3/2]" />
        </div>
      </div>

      <SectionHeading kicker="How We Work" title="Four things we never compromise on" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {[
          { icon: ShieldCheck, t: "Licensed & Insured", d: "NSW licensed contractor, full public liability and workers compensation cover for every site, commercial or residential." },
          { icon: Factory, t: "In-House Fabrication", d: "Your windows and doors are fabricated to order and installed by CWD's own crew — never subcontracted out." },
          { icon: FileCheck2, t: "Documented Compliance", d: "AS 2047 and AS 1288 certificates, energy data and BAL documentation handed over at completion." },
          { icon: Clock, t: "On Your Schedule", d: "Out-of-hours installation for trading businesses, staged programs for occupied buildings, and realistic lead times we actually hit." },
        ].map((x) => (
          <div key={x.t} className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <x.icon className="w-8 h-8 text-amber-400 mb-3" />
            <h3 className="font-display font-bold text-white mb-2">{x.t}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>

      <SectionHeading kicker="Our Experience" title="A decade across Sydney's East">
        From the boutiques of Double Bay to beachfront cafes at Bondi and Coogee, apartment upgrades
        in Randwick and Kensington, and harbour-view homes in Vaucluse and Point Piper — our work
        covers the full breadth of Eastern Suburbs glazing.
      </SectionHeading>
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {[
          ["Commercial", "Shopfronts, office fit-outs, schools, medical facilities and hospitality venues — including out-of-hours installation so trade never stops."],
          ["Multi-Residential", "Strata window replacements, balcony door upgrades and building-wide glazing programs with staged, resident-friendly delivery."],
          ["Residential", "Bifold doors, double glazing, servery windows and architectural feature glass for homes from Watsons Bay to La Perouse."],
        ].map(([t, d]) => (
          <div key={t} className="bg-[#101a2e] border-l-4 border-amber-500 rounded-r-2xl p-6">
            <h3 className="font-display font-bold text-white mb-2">{t}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>

      <Link to="/contact" className="inline-flex items-center gap-2 text-amber-400 font-bold hover:gap-3 transition-all mb-4">
        Talk to us about your project <ArrowRight className="w-4 h-4" />
      </Link>

      <CTABand title="Experience the one-team difference" text="Free measure, fixed itemised quote, and a single accountable crew from first visit to final certificate." />
      <MapSection heading="Where to Find Us" />
    </main>
  );
}
