import { useState } from "react";
import Reveal from "../../components/animations/Reveal";

import creativeDesigns from "../../assets/creative.png";
import development from "../../assets/webdev.png";
import uiUxSolution from "../../assets/uiux.png";
import videoproduction from "../../assets/videoproduction.png";

export default function Services() {
  const [active, setActive] = useState(0);

  const services = [
    { no: "01", title: "Digital Marketing", image: creativeDesigns, link: "/social-marketing" },
    { no: "02", title: "Web Development", image: development, link: "/web-development" },
    { no: "03", title: "UI-UX Solution", image: uiUxSolution, link: "/ui-ux-design" },
    { no: "04", title: "Video Production", image: videoproduction, link: "/video-production" },
    { no: "05", title: "Marketing Strategy", image: creativeDesigns, link: "/marketing-strategy" },
    { no: "06", title: "Creative Design", image: uiUxSolution, link: "/creative-design" },
    { no: "07", title: "Photography", image: videoproduction, link: "/photography" },
  ];

  return (
    <>
      <style>
        {`
        /* ✅ Aeonik font load */
        @font-face {
          font-family: "AeonikLocal";
          src: url("/fonts/Aeonik-Light.ttf") format("truetype");
          font-weight: 300;
          font-style: normal;
        }

        /* ✅ apply only here */
        .aeonik-title{
          font-family: "AeonikLocal", sans-serif;
          font-weight: 300;
          font-synthesis: none;
        }

        .service-row{
          transition:all .4s cubic-bezier(.22,1,.36,1);
          position:relative;
        }

        .service-row:hover{
          background:rgba(255,255,255,.03);
        }

        .service-arrow{
          transition:transform .3s ease;
        }

        .service-btn{
          transition:all .35s cubic-bezier(.22,1,.36,1);
          backdrop-filter:blur(8px);
          position:relative;
          z-index:5;
        }

        .service-btn:hover{
          background:rgba(255,255,255,0.08);
          border-color:rgba(255,255,255,0.8);
          transform:translateY(-2px) scale(1.05);
          box-shadow:0 10px 30px rgba(10,143,255,0.25);
        }

        .service-btn:hover .service-arrow{
          transform:translate(5px,-5px) rotate(8deg);
        }

        .service-img{
          transition:all .5s cubic-bezier(.22,1,.36,1);
          filter:grayscale(1) brightness(.85);
        }

        .service-row:hover .service-img{
          transform:translateY(-8px) scale(1.12);
          filter:grayscale(0) brightness(1)
                 drop-shadow(0 18px 45px rgba(10,143,255,0.35));
        }

        .parallax-img{
          transform: translateY(var(--parallax, 0px));
          transition: transform 0.2s linear;
        }

        @media (max-width:1024px){
          .service-img{ width:120px !important; }
        }

        @media (max-width:640px){
          .service-img{ width:95px !important; }
        }
        `}
      </style>

      <section className="bg-[#0f1218] dark:bg-[#0c0c0c] rounded-t-[26px] overflow-hidden -mt-[8px] transition-all duration-500">

        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-[58px] sm:pt-[68px] xl:pt-[72px] pb-[38px] sm:pb-[40px]">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <div>
              <Reveal>
                <p className="text-white text-[15px] sm:text-[16px]">
                  Our Services
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mt-[6px] text-white text-[34px] sm:text-[40px] md:text-[50px] font-medium leading-none tracking-[-1px]">
                  What We Do?
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <a
                href="/services"
                className="service-btn md:mt-[18px] h-[46px] px-[26px] rounded-full border border-white/50 text-white text-[14px] inline-flex items-center justify-center gap-2 w-fit"
              >
                Explore More
                <span className="service-arrow text-[18px]">↗</span>
              </a>
            </Reveal>

          </div>

          <div className="mt-[28px] border-t border-white/10">

            {services.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="service-row py-[22px] sm:py-[26px] border-b border-white/10 cursor-pointer"
                >

                  {/* DESKTOP */}
                  <div className="hidden lg:grid grid-cols-[70px_1fr_220px] items-center gap-4">

                    <span className={`text-[18px] ${
                      isActive ? "text-white" : "text-[#6a7078]"
                    }`}>
                      {item.no}
                    </span>

                    <div className="flex flex-col gap-[8px]">

                      <Reveal delay={index * 0.15}>
                        <h3 className={`aeonik-title text-[56px] xl:text-[66px] leading-[1] tracking-[-1.5px] ${
                          isActive ? "text-white" : "text-[#5e636b]"
                        }`}>
                          {item.title}
                        </h3>
                      </Reveal>

                      <a
                        href={item.link}
                        onClick={(e) => e.stopPropagation()}
                        className={`service-btn mt-[12px] inline-flex items-center gap-2 text-[13px] px-[14px] py-[6px] rounded-full border border-white/40 w-fit ${
                          isActive ? "text-white" : "text-[#7a7f86]"
                        }`}
                      >
                        See Details
                        <span className="service-arrow text-[14px]">↗</span>
                      </a>

                    </div>

                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`service-img parallax-img ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-60 scale-95"
                        } w-[130px] xl:w-[150px] object-contain`}
                        onMouseMove={(e) => {
                          const y = (e.clientY / window.innerHeight - 0.5) * 20;
                          e.currentTarget.style.setProperty("--parallax", `${y}px`);
                        }}
                      />
                    </div>

                  </div>

                  {/* MOBILE */}
                  <div className="lg:hidden">

                    <div className="flex items-start gap-4">

                      <span className={`text-[16px] sm:text-[18px] pt-1 shrink-0 ${
                        isActive ? "text-white" : "text-[#6a7078]"
                      }`}>
                        {item.no}
                      </span>

                      <div className="flex-1 min-w-0 flex flex-col gap-[6px]">

                        <div className="flex items-center justify-between gap-4">

                          <Reveal delay={index * 0.15}>
                            <h3 className={`aeonik-title text-[28px] sm:text-[42px] leading-[1] tracking-[-1px] ${
                              isActive ? "text-white" : "text-[#5e636b]"
                            }`}>
                              {item.title}
                            </h3>
                          </Reveal>

                          <img
                            src={item.image}
                            alt={item.title}
                            className={`service-img w-[95px] object-contain ${
                              isActive
                                ? "opacity-100 scale-100"
                                : "opacity-60 scale-95"
                            }`}
                          />

                        </div>

                        <a
                          href={item.link}
                          onClick={(e) => e.stopPropagation()}
                          className={`service-btn mt-[12px] inline-flex items-center gap-2 text-[13px] px-[14px] py-[6px] rounded-full border border-white/40 w-fit ${
                            isActive ? "text-white" : "text-[#7a7f86]"
                          }`}
                        >
                          See Details
                          <span className="service-arrow text-[13px]">↗</span>
                        </a>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>
    </>
  );
}