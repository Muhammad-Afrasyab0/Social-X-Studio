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
    <section className="bg-[#0f1218] rounded-t-[26px] overflow-hidden mt-[12px]">
      <div className="container"></div>
      <div className="max-w-[1900px] mx-auto pt-[72px] pb-[40px]">

        {/* TOP */}
        <div className="px-[90px] flex items-start justify-between">
          <div>
            <p className="text-white text-[16px]">Our Services</p>

            <h2 className="mt-[6px] text-white text-[56px] font-medium leading-none">
              What We Do Best
            </h2>
          </div>

          <a
            href="#"
            className="mt-[18px] h-[46px] px-[28px] rounded-full border border-white/50 text-white text-[14px] inline-flex items-center gap-2"
          >
            Explore More
            <span>↗</span>
          </a>
        </div>

        {/* LIST */}
        <div className="mt-[28px] border-t border-white/10">
          {services.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className="min-h-[155px] py-[22px] px-[90px] grid grid-cols-[70px_1fr_220px] items-center border-b border-white/10 cursor-pointer transition-all duration-300"
              >
                {/* NUMBER */}
                <span
                  className={`text-[18px] transition-all duration-300 ${
                    isActive ? "text-white" : "text-[#6a7078]"
                  }`}
                >
                  {item.no}
                </span>

                {/* TITLE */}
                <div>
                  <h3
                    className={`text-[66px] leading-none font-light transition-all duration-300 ${
                      isActive ? "text-white" : "text-[#5e636b]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* BUTTON */}
                  <a
                    href="#"
                    className={`mt-[38px] h-[34px] px-[16px] rounded-full border text-[12px] inline-flex items-center gap-2 transition-all duration-300 ${
                      isActive
                        ? "border-white/40 text-white"
                        : "border-white/15 text-[#666b73]"
                    }`}
                  >
                    See Details
                    <span>↗</span>
                  </a>

                  {/* ACTIVE BLUE UNDERLINE */}
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