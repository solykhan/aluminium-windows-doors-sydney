import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "@/data/site";
import { products, productCategories } from "@/data/products";
import { suburbs } from "@/data/suburbs";

const navLink = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold tracking-wide transition-colors ${
    isActive ? "text-amber-400" : "text-slate-200 hover:text-amber-300"
  }`;

export function Header() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1220]/95 backdrop-blur border-b border-white/10">
      {/* Top bar */}
      <div className="hidden md:block bg-amber-500 text-slate-950">
        <div className="container-x flex items-center justify-between py-1.5 text-xs font-semibold">
          <span>Servicing Sydney's Eastern Suburbs — Free Measure & Quote</span>
          <span>{SITE.hours}</span>
        </div>
      </div>
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="CWD Sydney home">
          <div className="w-11 h-11 rounded-lg bg-amber-500 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="4" width="18" height="16" rx="1.5" />
              <path d="M12 4v16M3 12h18" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display font-800 font-extrabold text-lg tracking-tight text-white">
              CWD <span className="text-amber-400">Sydney</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-slate-400">
              Commercial Windows & Doors
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink to="/" className={navLink} end>Home</NavLink>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-amber-300">
              Products <ChevronDown className="w-4 h-4" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px]">
              <div className="bg-[#101a2e] border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-4 gap-6">
                {productCategories.map((cat) => {
                  const items = products.filter((p) => p.category === cat);
                  const twoCol = items.length > 8;
                  return (
                  <div key={cat} className={twoCol ? "col-span-2" : ""}>
                    <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">{cat}</div>
                    <ul className={twoCol ? "grid grid-cols-2 gap-x-5 gap-y-2" : "space-y-2"}>
                      {items.map((p) => (
                        <li key={p.slug}>
                          <Link to={`/products/${p.slug}`} className="text-sm text-slate-300 hover:text-amber-300">
                            {p.short}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-amber-300">
              Areas <ChevronDown className="w-4 h-4" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]">
              <div className="bg-[#101a2e] border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-2">
                {suburbs.map((s) => (
                  <Link key={s.slug} to={`/areas/${s.slug}`} className="text-sm text-slate-300 hover:text-amber-300 py-1">
                    {s.name}
                  </Link>
                ))}
                <Link to="/areas-we-serve" className="text-sm font-semibold text-amber-400 py-1 col-span-3 mt-2">
                  View all areas we serve →
                </Link>
              </div>
            </div>
          </div>

          <NavLink to="/about" className={navLink}>About</NavLink>
          <NavLink to="/blog" className={navLink}>Blog</NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>

          <a
            href={SITE.phoneLink}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b1220] max-h-[75vh] overflow-y-auto">
          <div className="container-x py-4 space-y-1">
            <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold px-4 py-3 rounded-lg mb-4">
              <Phone className="w-4 h-4" /> Call {SITE.phoneDisplay}
            </a>
            <Link to="/" onClick={() => setOpen(false)} className="block py-2.5 font-semibold text-white">Home</Link>
            <button onClick={() => setProdOpen(!prodOpen)} className="flex w-full items-center justify-between py-2.5 font-semibold text-white">
              Products <ChevronDown className={`w-4 h-4 transition-transform ${prodOpen ? "rotate-180" : ""}`} />
            </button>
            {prodOpen && (
              <div className="pl-4 pb-2 grid grid-cols-2 gap-x-4">
                {products.map((p) => (
                  <Link key={p.slug} to={`/products/${p.slug}`} onClick={() => setOpen(false)} className="py-1.5 text-sm text-slate-300">
                    {p.short}
                  </Link>
                ))}
              </div>
            )}
            <button onClick={() => setAreaOpen(!areaOpen)} className="flex w-full items-center justify-between py-2.5 font-semibold text-white">
              Areas We Serve <ChevronDown className={`w-4 h-4 transition-transform ${areaOpen ? "rotate-180" : ""}`} />
            </button>
            {areaOpen && (
              <div className="pl-4 pb-2 grid grid-cols-2 gap-x-4">
                {suburbs.map((s) => (
                  <Link key={s.slug} to={`/areas/${s.slug}`} onClick={() => setOpen(false)} className="py-1.5 text-sm text-slate-300">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/about" onClick={() => setOpen(false)} className="block py-2.5 font-semibold text-white">About</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="block py-2.5 font-semibold text-white">Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block py-2.5 font-semibold text-white">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
