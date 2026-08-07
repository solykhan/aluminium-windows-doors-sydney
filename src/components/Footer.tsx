import { Link } from "react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/data/site";
import { products } from "@/data/products";
import { suburbs } from "@/data/suburbs";
import { articles } from "@/data/articles";

export function Footer() {
  return (
    <footer className="bg-[#070d18] border-t border-white/10 mt-24">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-950" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="4" width="18" height="16" rx="1.5" />
                <path d="M12 4v16M3 12h18" />
              </svg>
            </div>
            <div className="font-display font-extrabold text-white">CWD <span className="text-amber-400">Sydney</span></div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            CWD Commercial Windows and Doors Sydney — supplying and installing aluminium
            windows and doors across Sydney's Eastern Suburbs. Free measure & quote.
          </p>
          <div className="space-y-2.5 text-sm">
            <a href={SITE.phoneLink} className="flex items-center gap-2.5 text-slate-300 hover:text-amber-300">
              <Phone className="w-4 h-4 text-amber-400" /> {SITE.phoneDisplay}
            </a>
            <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-amber-300">
              <MapPin className="w-4 h-4 text-amber-400" /> Find us on Google Maps
            </a>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" /> {SITE.hours}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Products</h3>
          <ul className="grid grid-cols-1 gap-1.5 text-sm max-h-64 overflow-hidden">
            {products.slice(0, 15).map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="text-slate-400 hover:text-amber-300">{p.name}</Link>
              </li>
            ))}
            <li><Link to="/products" className="text-amber-400 font-semibold">All products →</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Areas We Serve</h3>
          <ul className="grid grid-cols-1 gap-1.5 text-sm max-h-64 overflow-hidden">
            {suburbs.slice(0, 15).map((s) => (
              <li key={s.slug}>
                <Link to={`/areas/${s.slug}`} className="text-slate-400 hover:text-amber-300">{s.name}</Link>
              </li>
            ))}
            <li><Link to="/areas-we-serve" className="text-amber-400 font-semibold">All 33 suburbs →</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Guides & Advice</h3>
          <ul className="space-y-1.5 text-sm">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link to={`/blog/${a.slug}`} className="text-slate-400 hover:text-amber-300">{a.title.split(":")[0]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Aluminium windows and doors supplied & installed across Sydney NSW.</span>
        </div>
      </div>
    </footer>
  );
}
