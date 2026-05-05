import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

import ServicesSection from "../components/sections/ServicesSection";
import ServicesShowcase from "../components/sections/ServicesShowcase";

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* HERO / BREADCRUMB */}
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[clamp(118px,14vw,150px)] pb-[clamp(42px,7vw,70px)] border-b-[6px] border-[#0a8fff] transition-all duration-500 overflow-hidden">

        {/* SAME HEADER CONTAINER */}
        <div className="container-fluid">

          {/* PERFECT ALIGNMENT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-y-[22px] lg:items-end">

            {/* LEFT TITLE */}
            <div>
              <h1 className="text-black dark:text-white font-semibold leading-[0.95] tracking-[-0.04em] text-[clamp(34px,7vw,72px)]">
                Our Services
              </h1>
            </div>

            {/* RIGHT BREADCRUMB */}
            <div className="lg:pb-[10px] lg:pr-[24px] justify-self-start lg:justify-self-end">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[clamp(14px,1.4vw,18px)]">

                <Link
                  to="/"
                  className="text-black/45 dark:text-white/45"
                >
                  Home
                </Link>

                <span className="text-black dark:text-white">
                  /
                </span>

                <span className="text-black dark:text-white underline underline-offset-4">
                  Services
                </span>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* GAP FIX */}
      <div className="mt-[40px]">
        <ServicesSection />
      </div>

      <ServicesShowcase />

      <Footer />
    </>
  );
}