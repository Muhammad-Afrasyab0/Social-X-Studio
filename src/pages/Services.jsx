import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ServicesSection from "../components/sections/ServicesSection";
import ServicesShowcase from "../components/sections/ServicesShowcase";

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* ===================================== */}
      {/* BREADCRUMB / HERO */}
      {/* ===================================== */}
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[clamp(118px,14vw,150px)] pb-[clamp(44px,8vw,85px)] border-b-[4px] sm:border-b-[6px] border-[#0a8fff] transition-all duration-500">
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* mobile/tablet/desktop fluid */}
          <div className="flex flex-col gap-[18px] sm:gap-[22px] lg:flex-row lg:items-end lg:justify-between">

            {/* Title */}
            <h1 className="text-black dark:text-white text-[clamp(36px,8vw,72px)] font-semibold leading-[0.96] tracking-[-0.04em] transition-all duration-500">
              Our Services
            </h1>

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[clamp(14px,2vw,18px)] lg:pb-[8px] transition-all duration-500">
              <span className="text-black/40 dark:text-white/40">
                Home
              </span>

              <span className="text-black dark:text-white">
                /
              </span>

              <span className="underline text-black dark:text-white">
                Services
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Sections */}
      <ServicesSection />
      <ServicesShowcase />

      <Footer />
    </>
  );
}