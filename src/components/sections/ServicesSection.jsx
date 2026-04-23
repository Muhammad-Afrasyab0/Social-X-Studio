import { useState } from "react";

import creativeDesigns from "../../assets/creative-designs.png";
import appSolution from "../../assets/app-solution.png";
import development from "../../assets/development.png";
import uiUxSolution from "../../assets/ui-ux-solution.png";

export default function Services() {
  const [active, setActive] = useState(0);

  const services = [
    {
      no: "01",
      title: "Creative Designs",
      image: creativeDesigns,
    },
    {
      no: "02",
      title: "App Solution",
      image: appSolution,
    },
    {
      no: "03",
      title: "Development",
      image: development,
    },
    {
      no: "04",
      title: "UI-UX Solution",
      image: uiUxSolution,
    },
  ];

  return (
    <section className="bg-[#0f1218] dark:bg-[#efefef] rounded-t-[26px] overflow-hidden -mt-[8px] transition-all duration-500">

      {/* Header Alignment */}
      <div className="max-w-[1900px] mx-auto px-[42px] pt-[72px] pb-[40px]">

        {/* TOP */}
        <div className="flex items-start justify-between">

          <div>
            <p className="text-white dark:text-black text-[16px] transition-all duration-500">
              Our Services
            </p>

            <h2 className="mt-[6px] text-white dark:text-black text-[56px] font-medium leading-none tracking-[-1px] transition-all duration-500">
              What We Do Best
            </h2>
          </div>

          <a
            href="#"
            className="mt-[18px] h-[46px] px-[28px] rounded-full border border-white/50 dark:border-black/30 text-white dark:text-black text-[14px] inline-flex items-center gap-2 transition-all duration-500"
          >
            Explore More

            <span className="text-[18px] leading-none font-light relative top-[-1px]">
              ↗
            </span>
          </a>

        </div>

        {/* LIST */}
        <div className="mt-[28px] border-t border-white/10 dark:border-black/10 transition-all duration-500">

          {services.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className="min-h-[155px] py-[22px] grid grid-cols-[70px_1fr_220px] items-center border-b border-white/10 dark:border-black/10 cursor-pointer transition-all duration-300"
              >

                {/* NUMBER */}
                <span
                  className={`text-[18px] transition-all duration-300 ${
                    isActive
                      ? "text-white dark:text-black"
                      : "text-[#6a7078] dark:text-black/45"
                  }`}
                >
                  {item.no}
                </span>

                {/* TITLE */}
                <div>

                  <h3
                    className={`text-[66px] leading-none font-light tracking-[-1.5px] transition-all duration-300 ${
                      isActive
                        ? "text-white dark:text-black"
                        : "text-[#5e636b] dark:text-black/40"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* BUTTON */}
                  <a
                    href="#"
                    className={`mt-[38px] h-[34px] px-[16px] rounded-full border text-[12px] inline-flex items-center gap-2 transition-all duration-300 ${
                      isActive
                        ? "border-white/40 text-white dark:border-black/35 dark:text-black"
                        : "border-white/15 text-[#666b73] dark:border-black/15 dark:text-black/45"
                    }`}
                  >
                    See Details

                    <span className="text-[15px] leading-none font-light relative top-[-1px]">
                      ↗
                    </span>
                  </a>

                  {/* BLUE UNDERLINE */}
                  {isActive && (
                    <div className="w-[400px] h-[3px] bg-[#0a8fff] mt-[8px]"></div>
                  )}

                </div>

                {/* IMAGE */}
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-55 scale-90"
                    } w-[95px] object-contain`}
                  />
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}