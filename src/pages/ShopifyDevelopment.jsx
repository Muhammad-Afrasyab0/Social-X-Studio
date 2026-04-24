import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import BlogDetailsHero from "../components/sections/BlogDetailsHero";
import BlogDetailsContent from "../components/sections/BlogDetailsContent";

export default function ShopifyDevelopment() {
  return (
    <>
      <Header />

      {/* HERO / BREADCRUMB */}
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[clamp(118px,14vw,150px)] pb-[clamp(40px,7vw,70px)] border-b-[4px] sm:border-b-[6px] border-[#0a8fff] transition-all duration-500">

        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* fluid responsive layout */}
          <div className="flex flex-col gap-[18px] sm:gap-[22px] lg:flex-row lg:items-end lg:justify-between">

            {/* LEFT TITLE */}
            <h1 className="text-[clamp(34px,8vw,72px)] font-semibold leading-[0.96] tracking-[-0.04em] text-black dark:text-white transition-all duration-500">
              Shopify Development
            </h1>

            {/* RIGHT BREADCRUMB */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 lg:pb-[8px] text-[clamp(14px,2vw,18px)] text-black/45 dark:text-white/50 transition-all duration-500">
              <span>Home</span>

              <span>/</span>

              <span>Services</span>

              <span>/</span>

              <span className="text-black dark:text-white underline underline-offset-4">
                Shopify Development
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* PAGE CONTENT */}
      <BlogDetailsHero />
      <BlogDetailsContent />

      <Footer />
    </>
  );
}