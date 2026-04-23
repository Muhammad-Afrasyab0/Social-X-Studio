import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import BlogListingSection from "../components/sections/BlogListingSection";

export default function Blogs() {
  return (
    <>
      <Header />

      {/* HERO / BREADCRUMB ONLY */}
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[150px] pb-[70px] border-b-[6px] border-[#0a8fff] transition-all duration-500">

        <div className="max-w-[1900px] mx-auto px-[3px]">
          <div className="px-[42px] flex items-end justify-between">

            {/* LEFT TITLE */}
            <h1 className="text-[72px] font-semibold leading-none tracking-[-2px] text-black dark:text-white transition-all duration-500">
              Blogs
            </h1>

            {/* RIGHT BREADCRUMB */}
            <div className="pb-[8px] text-[18px] text-black/45 dark:text-white/50 transition-all duration-500">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-black dark:text-white underline underline-offset-4">
                Services
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* BLOG LISTING SECTION */}
      <BlogListingSection />

      <Footer />
    </>
  );
}