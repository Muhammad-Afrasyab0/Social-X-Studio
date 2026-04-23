import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import AboutIntro from "../components/sections/AboutIntro";
import VisionMission from "../components/sections/VisionMission";
import StatsCounter from "../components/sections/StatsCounter";
import Testimonial from "../components/sections/testimonial";

export default function About() {
  return (
    <>
      <style>
        {`
        .fade-up{
          animation:fadeUp .8s ease forwards;
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .crumb-link{
          transition:all .25s ease;
        }

        .crumb-link:hover{
          opacity:1;
          transform:translateY(-1px);
        }
        `}
      </style>

      <Header />

      {/* ===================================== */}
      {/* BREADCRUMB */}
      {/* ===================================== */}
      <section className="bg-[#efefef] dark:bg-[#111111] pt-[118px] sm:pt-[132px] md:pt-[145px] lg:pt-[150px] pb-[55px] sm:pb-[70px] md:pb-[85px] border-b-[6px] border-[#0a8fff] transition-all duration-500 overflow-hidden">
        {/* aligned with header */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8">
            
            <h1 className="fade-up text-[38px] sm:text-[54px] md:text-[64px] xl:text-[72px] font-semibold leading-none tracking-[-1px] text-black dark:text-white transition-all duration-500">
              About Us
            </h1>

            <div
              className="fade-up flex flex-wrap items-center gap-2 sm:gap-3 md:pb-[8px] text-[15px] sm:text-[16px] md:text-[18px] text-black dark:text-white transition-all duration-500"
              style={{ animationDelay: "120ms" }}
            >
              <span className="crumb-link text-black/40 dark:text-white/40">
                Home
              </span>

              <span>/</span>

              <span className="underline underline-offset-4">
                About Us
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <AboutIntro />

      {/* VISION / MISSION */}
      <VisionMission />

      {/* STATS */}
      <StatsCounter />

      {/* TESTIMONIAL */}
      <Testimonial />

      <Footer />
    </>
  );
}