// FILE LOCATION:
// src/pages/Sitemap.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
  },

  {
    title: "Service Pages",
    links: [
      { name: "Web Development", path: "/web-development" },
      { name: "SEO", path: "/seo" },
      { name: "Branding", path: "/branding" },
      { name: "UI/UX Design", path: "/ui-ux-design" },
      { name: "Social Media Marketing", path: "/social-media-marketing" },
      { name: "Shopify Development", path: "/shopify-development" },
      { name: "WordPress Development", path: "/wordpress-development" },
      { name: "Graphic Design", path: "/graphic-design" },
    ],
  },

  {
    title: "Portfolio & Case Studies",
    links: [
      { name: "Brand Identity", path: "/brand-identity" },
      { name: "Health & Medical", path: "/health-medical" },
    ],
  },

  {
    title: "Homepage Sections",
    links: [
      { name: "Hero", path: "/" },
      { name: "Who We Are", path: "/" },
      { name: "Services Section", path: "/services" },
      { name: "Selected Work", path: "/portfolio" },
      { name: "Testimonials", path: "/" },
      { name: "Blogs Section", path: "/blog" },
      { name: "Location", path: "/contact" },
    ],
  },
];

export default function Sitemap() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#efefef] dark:bg-[#111111] pt-[clamp(118px,14vw,150px)] pb-[clamp(60px,8vw,90px)] border-b-[4px] sm:border-b-[6px] border-[#0a8fff] transition-all duration-500">

        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#0a8fff]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-fluid relative z-[2]">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-y-[24px] lg:items-end">

            {/* LEFT */}
            <div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-black dark:text-white font-semibold leading-[0.95] tracking-[-0.04em] text-[clamp(38px,8vw,84px)]"
              >
                Sitemap
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="mt-[22px] max-w-[720px] text-black/60 dark:text-white/60 leading-[1.7] text-[clamp(15px,1.4vw,18px)]"
              >
                Explore the complete structure of Social X Studio including
                services, portfolio projects, case studies, resources, and
                internal website sections.
              </motion.p>

            </div>

            {/* RIGHT */}
            <div className="lg:pb-[10px] lg:pr-[24px] justify-self-start lg:justify-self-end">

              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[clamp(14px,1.4vw,18px)]">

                <Link
                  to="/"
                  className="text-black/45 dark:text-white/45 hover:text-[#0a8fff] transition-all duration-300"
                >
                  Home
                </Link>

                <span className="text-black dark:text-white">/</span>

                <span className="text-black dark:text-white underline underline-offset-4">
                  Sitemap
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative bg-[#efefef] dark:bg-[#111111] py-[clamp(70px,8vw,120px)] overflow-hidden transition-all duration-500">

        {/* BACKGROUND GLOW */}
        <div className="absolute bottom-[-180px] right-[-140px] w-[420px] h-[420px] bg-[#0a8fff]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container-fluid relative z-[2]">

          {/* TOP NAV GRID */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] mb-[70px]"
          >

            {[
              { title: "Services", path: "/services" },
              { title: "Portfolio", path: "/portfolio" },
              { title: "Blogs", path: "/blogs" },
              { title: "Contact", path: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="group relative overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-[32px] transition-all duration-500 hover:-translate-y-[6px] hover:border-[#0a8fff]/40 hover:shadow-[0_0_35px_rgba(10,143,255,0.18)]"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#0a8fff]/10 to-transparent transition-all duration-500" />

                <div className="relative z-[2]">

                  <div className="w-[58px] h-[58px] rounded-full bg-[#0a8fff]/10 flex items-center justify-center text-[#0a8fff] text-[24px] mb-[24px]">
                    →
                  </div>

                  <h3 className="text-black dark:text-white font-semibold tracking-[-0.03em] text-[clamp(22px,2vw,30px)]">
                    {item.title}
                  </h3>

                  <p className="mt-[12px] text-black/60 dark:text-white/60 leading-[1.7] text-[15px]">
                    Explore all related pages and website structure.
                  </p>

                </div>

              </Link>
            ))}

          </motion.div>

          {/* SITEMAP SECTIONS */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[28px]">

            {sitemapSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[30px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-[32px] lg:p-[42px]"
              >

                {/* GLOW */}
                <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-[#0a8fff]/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-[2]">

                  <div className="flex items-center gap-[16px] mb-[30px]">

                    <div className="w-[14px] h-[14px] rounded-full bg-[#0a8fff]" />

                    <h2 className="text-black dark:text-white font-semibold tracking-[-0.03em] text-[clamp(24px,2vw,34px)]">
                      {section.title}
                    </h2>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">

                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.path}
                        className="group flex items-center justify-between rounded-[18px] border border-black/8 dark:border-white/8 bg-black/[0.02] dark:bg-white/[0.02] px-[20px] py-[18px] transition-all duration-300 hover:border-[#0a8fff]/40 hover:bg-[#0a8fff]/5"
                      >

                        <span className="text-black dark:text-white text-[15px] font-medium">
                          {link.name}
                        </span>

                        <span className="text-[#0a8fff] transition-all duration-300 group-hover:translate-x-[4px]">
                          →
                        </span>

                      </Link>
                    ))}

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}