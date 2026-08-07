import { Link } from "react-router";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <main className="container-x py-24 text-center">
      <SEO title="Page Not Found | CWD Sydney" description="The page you're looking for doesn't exist." path="/404" />
      <div className="font-display text-8xl font-extrabold text-amber-500 mb-4">404</div>
      <h1 className="font-display text-2xl font-bold text-white mb-3">Page not found</h1>
      <p className="text-slate-400 mb-8">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors">
        Back to Home
      </Link>
    </main>
  );
}
