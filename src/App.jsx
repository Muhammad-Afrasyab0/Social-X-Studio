import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import Portfolio from "./pages/Portfolio";

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

        {/* PORTFOLIO */}
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </BrowserRouter>
  );
}