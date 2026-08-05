import { Link, useParams } from "react-router";
import { Clock, Calendar, User, ArrowRight, ListTree } from "lucide-react";
import { SEO, faqPageSchema, breadcrumbSchema } from "@/components/SEO";
import { getArticle, articles } from "@/data/articles";
import type { Block } from "@/data/articles";
import { getProduct } from "@/data/products";
import { SITE } from "@/data/site";
import { Breadcrumbs, CTABand, FAQSection, QuoteForm } from "@/components/Shared";
import NotFound from "./NotFound";

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return <h2 key={i} id={b.id} className="font-display text-2xl md:text-3xl font-extrabold text-white mt-12 mb-5 scroll-mt-24">{b.text}</h2>;
    case "h3":
      return <h3 key={i} className="font-display text-xl font-bold text-white mt-8 mb-4">{b.text}</h3>;
    case "p":
      return <p key={i} className="text-slate-300 leading-[1.85] mb-5">{b.text}</p>;
    case "list":
      return (
        <ul key={i} className="space-y-3 mb-6">
          {b.items.map((it, j) => (
            <li key={j} className="flex gap-3 items-start">
              <span className="mt-2 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span className="text-slate-300 leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            {b.caption && <caption className="text-left text-xs text-slate-500 mb-2">{b.caption}</caption>}
            <thead>
              <tr>
                {b.head.map((h, j) => (
                  <th key={j} className="text-left font-display font-bold text-white bg-amber-500/10 border border-white/10 px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, j) => (
                <tr key={j} className={j % 2 ? "bg-white/[0.02]" : ""}>
                  {r.map((c, k) => (
                    <td key={k} className="text-slate-300 border border-white/10 px-4 py-3">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div key={i} className="bg-[#101a2e] border-l-4 border-amber-500 rounded-r-xl p-6 mb-6">
          <div className="font-display font-bold text-amber-300 mb-1.5">{b.title}</div>
          <p className="text-slate-300 leading-relaxed">{b.text}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote key={i} className="bg-[#101a2e] border border-white/10 rounded-xl p-7 mb-8">
          <p className="text-lg text-white leading-relaxed italic">"{b.text}"</p>
          <footer className="mt-4 text-sm">
            <strong className="text-amber-400">{b.by}</strong>{" "}
            <span className="text-slate-400">— {b.role}</span>
          </footer>
        </blockquote>
      );
    case "faq":
      return <FAQSection key={i} faqs={b.items} heading="" />;
    default:
      return null;
  }
}

function allFaqs(content: Block[]) {
  return content.filter((b): b is Extract<Block, { type: "faq" }> => b.type === "faq").flatMap((b) => b.items);
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;
  if (!article) return <NotFound />;

  const faqs = allFaqs(article.content);
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const related = article.relatedProducts.map((r) => getProduct(r)).filter(Boolean);

  return (
    <main className="container-x py-12">
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        path={`/blog/${article.slug}`}
        image={article.image}
        type="article"
        keywords={article.keywords.join(", ")}
        jsonLd={[
          ...(faqs.length ? [faqPageSchema(faqs)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: article.title, path: `/blog/${article.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            image: `${SITE.url}${article.image}`,
            datePublished: article.date,
            dateModified: article.updated,
            author: {
              "@type": "Organization",
              name: article.author.name,
              description: article.author.bio,
            },
            publisher: { "@id": `${SITE.url}/#business` },
            mainEntityOfPage: `${SITE.url}/blog/${article.slug}`,
            keywords: article.keywords.join(", "),
          },
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: article.category }]} />

      <div className="grid lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="text-amber-400 font-bold uppercase tracking-wider">{article.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Updated {article.updated}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readingTime} min read</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white text-balance leading-[1.1] mb-6">
            {article.title}
          </h1>

          <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
            <img src={article.image} alt={`${article.title} - CWD Commercial Windows and Doors Sydney guide`} className="w-full object-cover aspect-[2/1]" />
          </div>

          {/* Quick answer — AEO/GEO target */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-7 mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Quick Answer</div>
            <p className="text-white leading-relaxed font-medium">{article.quickAnswer}</p>
          </div>

          {/* TOC */}
          <nav className="bg-[#101a2e] border border-white/10 rounded-2xl p-6 mb-4">
            <div className="flex items-center gap-2 font-display font-bold text-white mb-3">
              <ListTree className="w-4 h-4 text-amber-400" /> In this guide
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-sm">
              {article.toc.map((t, i) => (
                <li key={i} className="text-slate-300">{t}</li>
              ))}
            </ol>
          </nav>

          {article.content.map((b, i) => renderBlock(b, i))}

          {/* Author E-E-A-T box */}
          <div className="bg-[#101a2e] border border-white/10 rounded-2xl p-7 mt-12">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                <User className="w-7 h-7 text-slate-950" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Written & reviewed by</div>
                <div className="font-display font-bold text-white text-lg">{article.author.name}</div>
                <div className="text-sm text-amber-400 mb-2">{article.author.role}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{article.author.bio}</p>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-28 self-start">
          <QuoteForm compact />
          <div className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4">Related Products</h3>
            <ul className="space-y-3">
              {related.map((r) => r && (
                <li key={r.slug}>
                  <Link to={`/products/${r.slug}`} className="group flex gap-3 items-center">
                    <img src={r.image} alt={`${r.name} Sydney - CWD supply and install`} loading="lazy" className="w-14 h-14 rounded-lg object-cover" />
                    <span className="text-sm text-slate-300 group-hover:text-amber-300 flex-1">{r.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#101a2e] border border-white/10 rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4">More Guides</h3>
            <ul className="space-y-3">
              {others.map((a) => (
                <li key={a.slug}>
                  <Link to={`/blog/${a.slug}`} className="text-sm text-slate-300 hover:text-amber-300 leading-snug block">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CTABand title="Questions about your project? Talk to a specialist." text="Free measure and fixed quote across Sydney's Eastern Suburbs — call or request online." />
    </main>
  );
}
