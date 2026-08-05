import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { articles } from "@/data/articles";
import { Breadcrumbs, CTABand, SectionHeading } from "@/components/Shared";

export default function BlogIndex() {
  const [featured, ...rest] = articles;
  return (
    <main className="container-x py-12">
      <SEO
        title="Guides & Advice — Aluminium Windows and Doors Sydney | CWD Blog"
        description="Expert guides on aluminium windows and doors in Sydney: costs, compliance (AS 2047, AS 1288, BAL ratings), double glazing, shopfronts and coastal maintenance — from CWD's glazing specialists."
        path="/blog"
        keywords="aluminium windows guide, window cost sydney, glazing advice, window compliance nsw"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog" }]} />
      <SectionHeading kicker="Guides & Advice" title="The CWD Glazing Knowledge Base">
        Straight answers on costs, compliance and choosing the right windows and doors —
        written by the team that installs them.
      </SectionHeading>

      <Link to={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-0 bg-[#101a2e] border border-white/10 rounded-2xl overflow-hidden mb-10 hover:border-amber-500/40 transition-colors">
        <div className="min-h-[260px]">
          <img src={featured.image} alt={`${featured.title} - CWD Sydney glazing guide`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
            <span>{featured.category}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readingTime} min</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors text-balance">{featured.title}</h2>
          <p className="text-slate-400 mt-3 leading-relaxed">{featured.excerpt}</p>
          <span className="inline-flex items-center gap-2 mt-5 text-amber-400 font-bold">Read guide <ArrowRight className="w-4 h-4" /></span>
        </div>
      </Link>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((a) => (
          <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-[#101a2e] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-colors flex flex-col">
            <div className="aspect-[3/2] overflow-hidden">
              <img src={a.image} alt={`${a.title} - CWD Sydney glazing guide`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="text-amber-400 font-semibold">{a.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {a.readingTime} min</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors text-balance">{a.title}</h3>
              <p className="text-sm text-slate-400 mt-2 line-clamp-3 flex-1">{a.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-4 text-sm text-amber-400 font-bold">Read more <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>
        ))}
      </div>

      <CTABand title="Reading about it? Get a real number for your project." text="Free measure and fixed quote across Sydney's East — the fastest way to turn research into a decision." />
    </main>
  );
}
