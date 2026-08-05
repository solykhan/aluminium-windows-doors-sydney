import { Link } from "react-router";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { products, productCategories } from "@/data/products";
import { Breadcrumbs, CTABand, SectionHeading } from "@/components/Shared";

export default function ProductsIndex() {
  return (
    <main className="container-x py-12">
      <SEO
        title="Commercial Windows and Doors — Product Range | CWD Sydney"
        description="Browse CWD's full range: bifold, sliding, stacking, hinged, pivot, frameless & cavity doors; awning, casement, double hung, sashless, louvre, fixed, shaped, arched, double glazed, BAL-40, servery, gas strut & electric glass windows; retractable flyscreens."
        path="/products"
        keywords="aluminium windows sydney, aluminium doors sydney, commercial windows, commercial doors, bifold doors, double glazed windows"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products" }]} />
      <SectionHeading kicker="Product Range" title="Every Window and Door We Make">
        29 commercial-grade product lines — custom fabricated for your opening, glazed to your
        requirements and installed by our own team anywhere in Sydney.
      </SectionHeading>

      {productCategories.map((cat) => (
        <section key={cat} className="mb-12">
          <h2 className="font-display text-xl font-bold text-amber-400 mb-5">{cat}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.filter((p) => p.category === cat).map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group flex gap-4 bg-[#101a2e] border border-white/10 rounded-2xl p-4 hover:border-amber-500/40 transition-colors">
                <img src={p.image} alt={`${p.name} Sydney - commercial windows and doors by CWD`} loading="lazy" className="w-24 h-24 rounded-xl object-cover shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-white group-hover:text-amber-300 transition-colors">{p.name}</h3>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <CTABand title="Not sure which system suits your opening?" text="Tell us what you're building — we'll recommend the right product, glass and hardware at a free measure." />
    </main>
  );
}
