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

      {/* HERO SECTION */}
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[clamp(118px,14vw,150px)] pb-[clamp(40px,7vw,70px)] border-b-[4px] sm:border-b-[6px] border-[#0a8fff] transition-all duration-500">

        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* fluid responsive layout */}
          <div className="flex flex-col gap-[18px] sm:gap-[24px] lg:flex-row lg:items-end lg:justify-between">

            {/* LEFT TITLE */}
            <div>
              <h1 className="text-black dark:text-white text-[clamp(34px,8vw,72px)] font-semibold leading-[0.95] tracking-[-0.04em] transition-all duration-500">
                Brand Identity
                <br />
                Lorem
              </h1>
            </div>

            {/* RIGHT BREADCRUMB */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 lg:pb-[8px] text-[clamp(14px,2vw,18px)] text-black/45 dark:text-white/50 transition-all duration-500">
              <span>Home</span>

              <span>/</span>

              <span className="text-black dark:text-white underline underline-offset-4">
                Brand Identity Lorem
              </span>
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