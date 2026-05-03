import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./styles/animations.css";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import UiUxDesign from "./pages/UiUxDesign";
import Portfolio from "./pages/Portfolio";
import BrandIdentity from "./pages/BrandIdentity";
import Blog from "./pages/Blog";
import VideoProduction from "./pages/Videoproduction";
import SocialMarketing from "./pages/SocialMarketing"; // ✅ ADDED
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

/* 🔥 SCROLL RESET */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/brand-identity" element={<BrandIdentity />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* EXISTING */}
        <Route path="/video-production" element={<VideoProduction />} />

        {/* ✅ NEW SOCIAL MARKETING ROUTE */}
        <Route path="/social-marketing" element={<SocialMarketing />} />

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}