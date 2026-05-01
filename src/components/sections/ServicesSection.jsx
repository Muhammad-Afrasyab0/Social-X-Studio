import { useState } from "react";
import Reveal from "../../components/animations/Reveal";

import creativeDesigns from "../../assets/creative-designs.png";
import development from "../../assets/development.png";
import uiUxSolution from "../../assets/ui-ux-solution.png";
import appSolution from "../../assets/app-solution.png";

export default function Services() {
  const [active, setActive] = useState(0);

  const services = [
    { no: "01", title: "Digital Marketing", image: creativeDesigns },
    { no: "02", title: "Web Development", image: development },
    { no: "03", title: "UI-UX Solution", image: uiUxSolution },
    { no: "04", title: "Video Production", image: appSolution },
  ];

  return (
    <>
      <style>
        {`
        .service-row{ transition:all .35s ease; }
        .service-row:hover{ background:rgba(255,255,255,.02); }

        .service-arrow{ transition:transform .3s ease; }
        .service-btn:hover .service-arrow{
          transform:translate(4px,-4px);
        }

        .service-img{ transition:all .35s ease; }
        .service-row:hover .service-img{
          transform:translateY(-4px) scale(1.03);
        }

        /* PARALLAX */
        .parallax-img{
          transform: translateY(var(--parallax, 0px));
          transition: transform 0.2s linear;
        }
        `}
      </style>

      <section className="bg-[#0f1218] dark:bg-[#efefef] rounded-t-[26px] overflow-hidden -mt-[8px] transition-all duration-500">

        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-[58px] sm:pt-[68px] xl:pt-[72px] pb-[38px] sm:pb-[40px]">

          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <div>
              <Reveal>
                <p className="text-white dark:text-black text-[15px] sm:text-[16px]">
                  Our Services
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mt-[6px] text-white dark:text-black text-[34px] sm:text-[46px] md:text-[56px] font-medium leading-none tracking-[-1px]">
                  What We Do Best
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <a
                href="#"
                className="service-btn md:mt-[18px] h-[46px] px-[26px] rounded-full border border-white/50 dark:border-black/30 text-white dark:text-black text-[14px] inline-flex items-center justify-center gap-2 w-fit"
              >
                Explore More
                <span className="service-arrow text-[18px]">↗</span>
              </a>
            </Reveal>

          </div>

          {/* LIST */}
          <div className="mt-[28px] border-t border-white/10 dark:border-black/10">

            {services.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="service-row py-[22px] sm:py-[26px] border-b border-white/10 dark:border-black/10 cursor-pointer"
                >

                  {/* DESKTOP */}
                  <div className="hidden lg:grid grid-cols-[70px_1fr_220px] items-center gap-4">

                    <span className={`text-[18px] ${isActive ? "text-white dark:text-black" : "text-[#6a7078] dark:text-black/45"}`}>
                      {item.no}
                    </span>

                    <div>

                      <Reveal delay={index * 0.15}>
                        <h3 className={`text-[56px] xl:text-[66px] leading-none font-light tracking-[-1.5px] ${isActive ? "text-white dark:text-black" : "text-[#5e636b] dark:text-black/40"}`}>
                          {item.title}
                        </h3>
                      </Reveal>

                      <a
                        href="#"
                        className={`service-btn mt-[34px] h-[34px] px-[16px] rounded-full border text-[12px] inline-flex items-center gap-2 ${
                          isActive
                            ? "border-white/40 text-white dark:border-black/35 dark:text-black"
                            : "border-white/15 text-[#666b73] dark:border-black/15 dark:text-black/45"
                        }`}
                      >
                        See Details
                        <span className="service-arrow text-[15px]">↗</span>
                      </a>

                      {isActive && (
                        <div className="w-[320px] xl:w-[400px] h-[3px] bg-[#0a8fff] mt-[8px]"></div>
                      )}
                    </div>

                    {/* IMAGE + PARALLAX */}
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`service-img parallax-img ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-55 scale-90"
                        } w-[95px] object-contain`}
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
                        isActive
                          ? "text-white dark:text-black"
                          : "text-[#6a7078] dark:text-black/45"
                      }`}>
                        {item.no}
                      </span>

                      <div className="flex-1 min-w-0">

                        <div className="flex items-center justify-between gap-4">

                          <Reveal delay={index * 0.15}>
                            <h3 className={`text-[28px] sm:text-[42px] leading-[1] font-light tracking-[-1px] ${
                              isActive
                                ? "text-white dark:text-black"
                                : "text-[#5e636b] dark:text-black/40"
                            }`}>
                              {item.title}
                            </h3>
                          </Reveal>

                          <img
                            src={item.image}
                            alt={item.title}
                            className={`service-img w-[62px] sm:w-[82px] object-contain shrink-0 ${
                              isActive
                                ? "opacity-100 scale-100"
                                : "opacity-55 scale-90"
                            }`}
                          />

                        </div>

                        <a
                          href="#"
                          className={`service-btn mt-5 h-[34px] px-[16px] rounded-full border text-[12px] inline-flex items-center gap-2 ${
                            isActive
                              ? "border-white/40 text-white dark:border-black/35 dark:text-black"
                              : "border-white/15 text-[#666b73] dark:border-black/15 dark:text-black/45"
                          }`}
                        >
                          See Details
                          <span className="service-arrow text-[15px]">↗</span>
                        </a>

                        {isActive && (
                          <div className="w-full max-w-[220px] sm:max-w-[280px] h-[3px] bg-[#0a8fff] mt-[10px]"></div>
                        )}

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