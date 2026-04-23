import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import AboutIntro from "../components/sections/AboutIntro";
import VisionMission from "../components/sections/VisionMission";
import StatsCounter from "../components/sections/StatsCounter";
import Testimonial from "../components/sections/testimonial";

export default function About() {
  return (
    <>
      <Header />

      {/* ===================================== */}
      {/* BREADCRUMB */}
      {/* ===================================== */}
      <section className="bg-[#efefef] pt-[150px] pb-[85px] border-b-[6px] border-[#0a8fff]">
        <div className="max-w-[1900px] mx-auto px-[42px] flex items-end justify-between">

          <h1 className="text-[72px] font-semibold leading-none">
            About Us
          </h1>

          <div className="flex items-center gap-3 pb-[8px] text-[18px]">
            <span className="text-black/40">Home</span>
            <span>/</span>
            <span className="underline">About Us</span>
          </div>

        </div>
      </section>

      {/* ABOUT INTRO */}
      <AboutIntro />

      {/* VISION / MISSION */}
      <VisionMission />

      {/* STATS */}
      <StatsCounter />

      {/* TESTIMONIAL */}
      <Testimonial />

      <Footer />
    </>
  );
}