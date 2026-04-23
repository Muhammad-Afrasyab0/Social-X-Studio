import React from "react";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const projects = [
  {
    id: "01",
    title: "Brand Identity Lorem Ipsum Dollar",
    desc:
      "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image1,
  },
  {
    id: "02",
    title: "Web Development UI UX Design",
    desc:
      "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image2,
  },
  {
    id: "03",
    title: "Social Media Marketing",
    desc:
      "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image3,
  },
  {
    id: "04",
    title: "Digital Ad Campaign for FlexWear",
    desc:
      "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image4,
  },
];

export default function SelectedWork() {
  return (
    <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[90px] transition-all duration-500">
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* TOP */}
        <div className="flex items-start justify-between mb-[70px] gap-8 flex-wrap">

          <div>
            <p className="text-[16px] text-black/70 dark:text-white/70 mb-[10px] font-medium transition-all duration-500">
              Our Portfolio
            </p>

            <h2 className="text-[58px] font-semibold leading-none tracking-[-1.8px] text-black dark:text-white transition-all duration-500">
              Selected Work
            </h2>
          </div>

          <button className="h-[48px] px-[30px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 transition-all duration-500">
            See All Work
            <span className="text-[18px] leading-none font-normal">
              ↗
            </span>
          </button>

        </div>

        {/* PROJECTS */}
        <div className="space-y-[90px]">

          {projects.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-start"
              >
                {reverse ? (
                  <>
                    {/* TEXT */}
                    <div className="pt-[10px]">

                      <h3 className="text-[86px] font-semibold text-black/10 dark:text-white/10 leading-none transition-all duration-500">
                        {item.id},
                      </h3>

                      <h4 className="mt-[10px] text-[42px] leading-[1.08] font-medium max-w-[620px] tracking-[-1px] text-black dark:text-white transition-all duration-500">
                        {item.title}
                      </h4>

                      <p className="mt-[18px] text-[17px] leading-[1.8] text-black/60 dark:text-white/70 max-w-[470px] transition-all duration-500">
                        {item.desc}
                      </p>

                      <button className="mt-[28px] h-[48px] px-[30px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 transition-all duration-500">
                        View Full Project
                        <span className="text-[18px] leading-none font-normal">
                          ↗
                        </span>
                      </button>

                    </div>

                    {/* IMAGE */}
                    <div className="rounded-[14px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[520px] object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* IMAGE */}
                    <div className="rounded-[14px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[520px] object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="pt-[10px]">

                      <h3 className="text-[86px] font-semibold text-black/10 dark:text-white/10 leading-none transition-all duration-500">
                        {item.id},
                      </h3>

                      <h4 className="mt-[10px] text-[42px] leading-[1.08] font-medium max-w-[620px] tracking-[-1px] text-black dark:text-white transition-all duration-500">
                        {item.title}
                      </h4>

                      <p className="mt-[18px] text-[17px] leading-[1.8] text-black/60 dark:text-white/70 max-w-[470px] transition-all duration-500">
                        {item.desc}
                      </p>

                      <button className="mt-[28px] h-[48px] px-[30px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 transition-all duration-500">
                        View Full Project
                        <span className="text-[18px] leading-none font-normal">
                          ↗
                        </span>
                      </button>

                    </div>
                  </>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}