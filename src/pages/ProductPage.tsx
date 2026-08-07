import { Link, useParams } from "react-router";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { SEO, faqPageSchema, breadcrumbSchema } from "@/components/SEO";
import { getProduct, products } from "@/data/products";
import { suburbs } from "@/data/suburbs";
import { SITE } from "@/data/site";
import { Breadcrumbs, CTABand, FAQSection, MapSection, QuoteForm } from "@/components/Shared";
import NotFound from "./NotFound";

export default function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;
  if (!product) return <NotFound />;

  const related = product.related.map((r) => products.find((p) => p.slug === r)).filter(Boolean);
  const topSuburbs = suburbs.slice(0, 12);

  return (
    <main className="container-x py-12">
      <SEO
        title={`${product.name} Sydney | Supply & Installation — CWD Sydney`}
        description={`${product.intro.slice(0, 155)}...`}
        path={`/products/${product.slug}`}
        image={product.image}
        keywords={`${product.name.toLowerCase()} sydney, ${product.name.toLowerCase()} cost, aluminium ${product.name.toLowerCase()}, ${product.name.toLowerCase()} installation sydney`}
        jsonLd={[
          faqPageSchema(product.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${product.name} — Sydney`,
            description: product.intro,
            image: `${SITE.url}${product.image}`,
            brand: { "@type": "Brand", name: SITE.name },
            offers: {
              "@type": "Offer",
              priceCurrency: "AUD",
              availability: "https://schema.org/InStock",
              areaServed: "Sydney, NSW",
              seller: { "@id": `${SITE.url}/#business` },
            },
          },
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name }]} />

      {/* Hero */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">{product.category} — Supply & Install, Sydney</div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white text-balance leading-[1.08]">
            {product.name} <span className="text-amber-400">Sydney</span>
          </h1>
          <p className="text-lg text-slate-400 mt-3">{product.tagline}</p>
          <p className="text-slate-300 leading-relaxed mt-5">{product.intro}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-lg transition-colors">
              Free Measure & Quote
            </Link>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src={product.image} alt={`${product.name} Sydney - supply and installation by CWD Commercial Windows and Doors`} className="w-full object-cover aspect-[3/2]" />
        </div>
      </div>

      {/* Body + features */}
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {product.body.map((para, i) => (
            <p key={i} className="text-slate-300 leading-relaxed mb-5">{para}</p>
          ))}

          <h2 className="font-display text-2xl font-extrabold text-white mt-8 mb-5">Key Features</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2.5 items-start bg-[#101a2e] border border-white/10 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-extrabold text-white mb-5">Where {product.name} Work Best</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {product.applications.map((a) => (
              <li key={a} className="flex gap-2.5 items-start">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="text-slate-300">{a}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#101a2e] border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
            <h2 className="font-display text-lg font-bold text-white mb-2">Options & Finishes</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{product.options}</p>
          </div>

          <FAQSection faqs={product.faqs} heading={`${product.name} — FAQs`} />
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-28 self-start">
          <QuoteForm compact />
          <div className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4">Related Products</h3>
            <ul className="space-y-2.5">
              {related.map((r) => r && (
                <li key={r.slug}>
                  <Link to={`/products/${r.slug}`} className="flex items-center justify-between text-sm text-slate-300 hover:text-amber-300">
                    {r.name} <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4">We Install {product.name} In</h3>
            <div className="flex flex-wrap gap-2">
              {topSuburbs.map((s) => (
                <Link key={s.slug} to={`/areas/${s.slug}`} className="text-xs bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 px-3 py-1.5 rounded-full">
                  {s.name}
                </Link>
              ))}
            </div>
            <Link to="/areas-we-serve" className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-amber-400">
              All 33 suburbs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>
      </div>

      <CTABand
        title={`Ready to quote your ${product.name.toLowerCase()}?`}
        text="Free on-site measure across Sydney's Eastern Suburbs — itemised fixed pricing, no obligation."
      />
      <MapSection heading={`${product.name} — Our Sydney Service Area`} />
    </main>
  );
}
