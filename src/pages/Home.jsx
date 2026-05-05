import React from "react";

import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import StartHere from "../components/sections/StartHere";
import WhoWeAreHome from "../components/sections/WhoWeAreHome";
import Services from "../components/sections/ServicesSection";
import TrustUs from "../components/sections/trustus";
import SelectedWork from "../components/sections/selectedwork";
import Testimonial from "../components/sections/testimonial";
import WhyUs from "../components/sections/whyus";
import Contact from "../components/sections/ContactUs";
import BlogsSection from "../components/sections/BlogsSection";
import Footer from "../components/layout/Footer";

/* 👇 ADD THIS LINE */
import Location from "../components/Location/Location";

export default function Home() {
  return (
    <>
      <Header />

      <main className="site-main">
        <Hero />
        <StartHere />
        <WhoWeAreHome />
        <Services />
        <TrustUs />
        <SelectedWork />
        <Testimonial />
        <WhyUs />
        <Contact />
        <BlogsSection />

        {/* 👇 LOCATION SECTION (Footer se pehle) */}
        <Location />
      </main>

      <Footer />
    </>
  );
}