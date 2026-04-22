import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Services from "../components/sections/ServicesSection";
import ServicesShowcase from "../components/sections/ServicesShowcase";

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* ===================================== */}
      {/* BREADCRUMB */}
      {/* ===================================== */}
      <section className="bg-[#efefef] pt-[150px] pb-[85px] border-b-[6px] border-[#0a8fff] relative z-20">
        <div className="max-w-[1900px] mx-auto px-[42px] flex items-end justify-between">

          <h1 className="text-[72px] font-semibold leading-none">
            Our Services
          </h1>

          <div className="flex items-center gap-3 pb-[8px] text-[18px]">
            <span className="text-black/40">Home</span>
            <span>/</span>
            <span className="underline">Services</span>
          </div>

        </div>
      </section>

      {/* ===================================== */}
      {/* GAP SO BLUE LINE FULLY SHOWS */}
      {/* ===================================== */}
      <div className="h-[28px] bg-[#efefef]"></div>

      {/* ===================================== */}
      {/* SERVICES */}
      {/* ===================================== */}
      <ServicesSection />

      {/* ===================================== */}
      {/* GAP */}
      {/* ===================================== */}
      <div className="h-[34px] bg-[#efefef]"></div>

      {/* ===================================== */}
      {/* SERVICES SHOWCASE */}
      {/* ===================================== */}
      <ServicesShowcase />

      <Footer />
    </>
  );
}