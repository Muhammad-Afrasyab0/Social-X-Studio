import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import BrandIdentityOverview from "../components/sections/BrandIdentityOverview";
import Mockup from "../components/sections/Mockup";
import ProblemsSection from "../components/sections/ProblemsSection";
import PackagingMockups from "../components/sections/PackagingMockups";
import SolutionsProjectsSection from "../components/sections/SolutionsProjectsSection";

export default function BrandIdentity() {
  return (
    <>
      <Header />

      {/* HERO / BREADCRUMB */}
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[clamp(118px,14vw,150px)] pb-[clamp(42px,7vw,70px)] border-b-[4px] sm:border-b-[6px] border-[#0a8fff] transition-all duration-500 overflow-hidden">

        {/* SAME HEADER CONTAINER */}
        <div className="container-fluid">

          {/* PERFECT ALIGNMENT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-y-[22px] lg:items-end">

            {/* LEFT TITLE */}
            <div>
              <h1 className="text-black dark:text-white font-semibold leading-[0.95] tracking-[-0.04em] text-[clamp(34px,7vw,72px)]">
                Health & Medical
              </h1>
            </div>

            {/* RIGHT BREADCRUMB */}
            <div className="lg:pb-[10px] lg:pr-[24px] justify-self-start lg:justify-self-end">

              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[clamp(14px,1.4vw,18px)]">

                <span className="text-black/45 dark:text-white/45">
                  Home
                </span>

                <span className="text-black dark:text-white">
                  /
                </span>

                <span className="text-black dark:text-white underline underline-offset-4">
                  Health & Medical
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW SECTION */}
      <BrandIdentityOverview />

      {/* MOCKUP */}
      <Mockup />

      {/* ProblemsSection */}
      <ProblemsSection />

      <PackagingMockups />
      <SolutionsProjectsSection />

      <Footer />
    </>
  );
}