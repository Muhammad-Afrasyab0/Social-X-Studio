import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles/animations.css";

/* ✅ IMPORT LOADER */
import Loader from "./components/Loader/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import UiUxDesign from "./pages/UiUxDesign";
import Portfolio from "./pages/Portfolio";
import BrandIdentity from "./pages/BrandIdentity";
import Blog from "./pages/Blog";
import VideoProduction from "./pages/Videoproduction";
import SocialMarketing from "./pages/SocialMarketing";
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

/* 🔥 APP CONTENT */
function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Routes location={location}>
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
        <Route path="/video-production" element={<VideoProduction />} />
        <Route path="/social-marketing" element={<SocialMarketing />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

/* 🔥 MAIN APP (WITH LOADER) */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏱ loader duration

    return () => clearTimeout(timer);
  }, []);

  /* 👉 SHOW LOADER FIRST */
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}