import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import PortfolioSection from "../components/sections/Portfolio";

export default function Portfolio() {
  return (
    <>
      <Header />

      {/* ===================================== */}
      {/* BREADCRUMB HERO */}
      {/* ===================================== */}
      <section className="bg-[#efefef] pt-[150px] pb-[70px] border-b-[6px] border-[#0a8fff]">
        <div className="max-w-[1900px] mx-auto px-[42px] flex items-end justify-between">

          {/* Left Title */}
          <h1 className="text-[72px] font-semibold leading-none text-black">
            Portfolio
          </h1>

          {/* Right Breadcrumb */}
          <div className="flex items-center gap-3 pb-[8px] text-[18px]">
            <span className="text-black/40">Home</span>
            <span>/</span>
            <span className="underline">Portfolio</span>
          </div>

        </div>
      </section>

      {/* ===================================== */}
      {/* PORTFOLIO SECTION */}
      {/* ===================================== */}
      <PortfolioSection />

      <Footer />
    </>
  );
}