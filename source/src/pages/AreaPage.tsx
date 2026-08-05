import { Link, useParams } from "react-router";
import { Phone, CheckCircle2, MapPin } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { getSuburb, nearbySuburbs, suburbs } from "@/data/suburbs";
import { products } from "@/data/products";
import { SITE } from "@/data/site";
import { Breadcrumbs, CTABand, MapSection, QuoteForm } from "@/components/Shared";
import NotFound from "./NotFound";

export default function AreaPage() {
  const { slug } = useParams();
  const suburb = slug ? getSuburb(slug) : undefined;
  if (!suburb) return <NotFound />;

  const nearby = nearbySuburbs(suburb.slug, 6);
  const featured = products.slice(1, 7);

  return (
    <main className="container-x py-12">
      <SEO
        title={`Windows & Doors ${suburb.name} | Commercial Glazing — CWD Sydney`}
        description={`CWD supplies & installs aluminium windows and doors in ${suburb.name} — bifold doors, sliding doors, double glazed windows, servery windows & more. Free measure & quote in ${suburb.name}. Call 0406 900 614.`}
        path={`/areas/${suburb.slug}`}
        keywords={`aluminium windows ${suburb.name.toLowerCase()}, aluminium doors ${suburb.name.toLowerCase()}, glazier ${suburb.name.toLowerCase()}, windows and doors ${suburb.name.toLowerCase()}, window replacement ${suburb.name.toLowerCase()}`}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
            { name: suburb.name, path: `/areas/${suburb.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Windows and Doors Supply & Installation — ${suburb.name}`,
            provider: { "@id": `${SITE.url}/#business` },
            areaServed: { "@type": "Place", name: `${suburb.name}, Sydney NSW` },
            serviceType: "Window and door supply and installation",
          },
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Areas We Serve", path: "/areas-we-serve" }, { name: suburb.name }]} />

      <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <MapPin className="w-4 h-4" /> {suburb.region} — Sydney NSW
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white text-balance leading-[1.08]">
            Windows & Doors in <span className="text-amber-400">{suburb.name}</span>
          </h1>
          <p className="text-lg text-slate-400 mt-3">{suburb.blurb}</p>
          <p className="text-slate-300 leading-relaxed mt-5">
            CWD Commercial Windows and Doors Sydney supplies and installs the full range of aluminium
            windows and doors in {suburb.name} — from commercial shopfronts and office glazing to
            bifold doors, double glazed windows and retractable flyscreens for homes. {suburb.character}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-lg transition-colors">
              Free Measure in {suburb.name}
            </Link>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src="/images/hero-commercial.jpg" alt={`Aluminium windows and doors supplied and installed in ${suburb.name} Sydney by CWD - bifold doors, double glazed windows`} className="w-full object-cover aspect-[3/2]" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-extrabold text-white mb-5">
            Our Services in {suburb.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {featured.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group flex gap-4 bg-[#101a2e] border border-white/10 rounded-xl p-4 hover:border-amber-500/40 transition-colors">
                <img src={p.image} alt={`${p.name} in ${suburb.name}`} loading="lazy" className="w-20 h-20 rounded-lg object-cover shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-white group-hover:text-amber-300 transition-colors text-sm">{p.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="font-display text-2xl font-extrabold text-white mb-5">
            Why {suburb.name} Chooses CWD
          </h2>
          <ul className="space-y-3.5 mb-10">
            {[
              `Free on-site measures anywhere in ${suburb.name} — usually within days of your call`,
              "In-house fabrication and installation — one accountable team, no subcontractors",
              "AS 2047 & AS 1288 compliance certificates supplied with every job",
              "Coastal-grade specifications for salt air, wind exposure and harbour conditions",
              "Out-of-hours installation available for shops, offices and hospitality venues",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{t}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-extrabold text-white mb-5">
            Also Servicing Near {suburb.name}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {nearby.map((s) => (
              <Link key={s.slug} to={`/areas/${s.slug}`} className="bg-[#101a2e] border border-white/10 hover:border-amber-500/40 hover:text-amber-300 text-slate-300 text-sm px-4 py-2 rounded-full transition-colors">
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 self-start">
          <QuoteForm compact />
          <div className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4">All Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {suburbs.map((s) => (
                <Link key={s.slug} to={`/areas/${s.slug}`} className={`text-xs border px-3 py-1.5 rounded-full ${s.slug === suburb.slug ? "bg-amber-500 text-slate-950 border-amber-500 font-bold" : "bg-white/5 border-white/10 text-slate-300 hover:text-amber-300"}`}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <CTABand
        title={`Get your free measure in ${suburb.name}`}
        text="Fixed, itemised pricing on any window or door project — homes, shops, offices and buildings."
      />
      <MapSection heading={`CWD Sydney — Servicing ${suburb.name} & the Eastern Suburbs`} />
    </main>
  );
}
