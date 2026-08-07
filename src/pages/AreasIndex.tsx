import { Link } from "react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { suburbs, suburbRegions } from "@/data/suburbs";
import { Breadcrumbs, CTABand, MapSection, SectionHeading } from "@/components/Shared";

export default function AreasIndex() {
  return (
    <main className="container-x py-12">
      <SEO
        title="Aluminium Windows & Doors — Areas We Serve | CWD Sydney"
        description="CWD supplies and installs aluminium windows and doors across 33 Sydney Eastern Suburbs: Vaucluse, Watsons Bay, Double Bay, Point Piper, Bondi, Coogee, Maroubra, Randwick, Paddington, Darlinghurst, Potts Point & more."
        path="/areas-we-serve"
        keywords="aluminium windows eastern suburbs sydney, aluminium doors bondi, glazier vaucluse, glazier coogee, window installation eastern suburbs"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Areas We Serve", path: "/areas-we-serve" }])]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Areas We Serve" }]} />
      <SectionHeading kicker="Service Areas" title="Areas We Serve — Sydney's Eastern Suburbs">
        From the harbour to the beaches to the park fringe, CWD services 33 Eastern Suburbs locations
        with free on-site measures and our full commercial-grade product range.
      </SectionHeading>

      {suburbRegions.map((region) => (
        <section key={region} className="mb-10">
          <h2 className="font-display text-xl font-bold text-amber-400 mb-5">{region}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suburbs.filter((s) => s.region === region).map((s) => (
              <Link key={s.slug} to={`/areas/${s.slug}`} className="group bg-[#101a2e] border border-white/10 rounded-2xl p-5 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" /> {s.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <p className="text-sm text-slate-400">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <CTABand title="In the Eastern Suburbs? Your measure is free." text="Call or request a quote online — we'll be on site within days, anywhere from Watsons Bay to La Perouse." />
      <MapSection />
    </main>
  );
}
