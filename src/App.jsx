import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import UiUxDesign from "./pages/UiUxDesign";
import Portfolio from "./pages/Portfolio";
import BrandIdentity from "./pages/BrandIdentity";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route path="/services" element={<ServicesPage />} />

        {/* WEB DEVELOPMENT */}
        <Route
          path="/web-development"
          element={<WebDevelopment />}
        />

        {/* UI/UX DESIGN */}
        <Route
          path="/ui-ux-design"
          element={<UiUxDesign />}
        />

        {/* BRAND IDENTITY */}
        <Route
          path="/brand-identity"
          element={<BrandIdentity />}
        />

        {/* BLOG */}
        <Route
          path="/blog"
          element={<Blog />}
        />

        {/* BLOG DETAILS */}
        <Route
          path="/blog-details"
          element={<BlogDetails />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* PORTFOLIO */}
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

      </Routes>
    </BrowserRouter>
  );
}