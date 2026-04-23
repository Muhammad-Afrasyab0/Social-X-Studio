import React from "react";

import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import StartHere from "../components/sections/StartHere";
import WhoWeAre from "../components/sections/WhoWeAre";
import Services from "../components/sections/ServicesSection";
import TrustUs from "../components/sections/trustus";
import SelectedWork from "../components/sections/selectedwork";
import Testimonial from "../components/sections/testimonial";
import WhyUs from "../components/sections/whyus";
import BlogsSection from "../components/sections/BlogsSection";
import Contact from "../components/sections/ContactUs";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="site-main">
        <Hero />
        <StartHere />
        <WhoWeAre />
        <Services />
        <TrustUs />
        <SelectedWork />
        <Testimonial />
        <WhyUs />
        <BlogsSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}