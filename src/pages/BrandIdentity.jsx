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
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[150px] pb-[70px] border-b-[6px] border-[#0a8fff] transition-all duration-500">

        <div className="max-w-[1900px] mx-auto px-[42px] flex items-end justify-between">

          {/* LEFT TITLE */}
          <div>
            <h1 className="text-black dark:text-white text-[72px] font-semibold leading-[0.95] tracking-[-2px] transition-all duration-500">
              Brand Identity
              <br />
              Lorem
            </h1>
          </div>

          {/* RIGHT BREADCRUMB */}
          <div className="pb-[8px] text-[18px] text-black/45 dark:text-white/50 transition-all duration-500">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-black dark:text-white underline underline-offset-4">
              Brand Identity Lorem
            </span>
          </div>

        </div>

      </section>

      {/* OVERVIEW SECTION */}
      <BrandIdentityOverview />

      {/* MOCKUP */}
      <Mockup />
       {/* ProblemsSection */}
      <ProblemsSection/>

      <PackagingMockups/>
      <SolutionsProjectsSection />
      <Footer />
    </>
  );
}