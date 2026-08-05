import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import ProductsIndex from "@/pages/ProductsIndex";
import ProductPage from "@/pages/ProductPage";
import AreasIndex from "@/pages/AreasIndex";
import AreaPage from "@/pages/AreaPage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import BlogIndex from "@/pages/BlogIndex";
import ArticlePage from "@/pages/ArticlePage";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b1220]">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsIndex />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/areas-we-serve" element={<AreasIndex />} />
          <Route path="/areas/:slug" element={<AreaPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
