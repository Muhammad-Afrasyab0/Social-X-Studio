import React from "react";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const projects = [
  {
    id: "01",
    title: "Brand Identity Lorem Ipsum Dollar",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image1,
  },
  {
    id: "02",
    title: "Web Development UI UX Design",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image2,
  },
  {
    id: "03",
    title: "Social Media Marketing",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image3,
  },
  {
    id: "04",
    title: "Digital Ad Campaign for FlexWear",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image4,
  },
];

export default function SelectedWork() {
  return (
    <section className="w-full bg-[#efefef] py-[90px]">
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* TOP */}
        <div className="flex items-start justify-between mb-[70px]">
          <div>
            <p className="text-[16px] text-black/70 mb-[10px] font-medium">
              Our Portfolio
            </p>

            <h2 className="text-[58px] font-semibold leading-none tracking-[-1.8px]">
              Selected Work
            </h2>
          </div>

          <button className="h-[48px] px-[30px] rounded-full bg-black text-white text-[15px] font-medium inline-flex items-center justify-center gap-3">
            See All Work

            <span className="text-[18px] leading-none font-normal">
              ↗
            </span>
          </button>
        </div>

        {/* PROJECTS */}
        <div className="space-y-[70px]">
          {projects.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-2 gap-[70px] items-center"
              >
                {reverse ? (
                  <>
                    {/* TEXT */}
                    <div>
                      <h3 className="text-[86px] font-semibold text-black/10 leading-none">
                        {item.id},
                      </h3>

                      <h4 className="mt-[12px] text-[42px] leading-[1.08] font-medium max-w-[620px] tracking-[-1px]">
                        {item.title}
                      </h4>

                      <p className="mt-[18px] text-[17px] leading-[1.8] text-black/60 max-w-[430px]">
                        {item.desc}
                      </p>

                      <button className="mt-[28px] h-[48px] px-[30px] rounded-full bg-black text-white text-[15px] font-medium inline-flex items-center justify-center gap-3">
                        View Full Project

                        <span className="text-[18px] leading-none font-normal">
                          ↗
                        </span>
                      </button>
                    </div>

                    {/* IMAGE */}
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[480px] object-contain rounded-[12px]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* IMAGE */}
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[480px] object-contain rounded-[12px]"
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-[86px] font-semibold text-black/10 leading-none">
                        {item.id},
                      </h3>

                      <h4 className="mt-[12px] text-[42px] leading-[1.08] font-medium max-w-[620px] tracking-[-1px]">
                        {item.title}
                      </h4>

                      <p className="mt-[18px] text-[17px] leading-[1.8] text-black/60 max-w-[430px]">
                        {item.desc}
                      </p>

                      <button className="mt-[28px] h-[48px] px-[30px] rounded-full bg-black text-white text-[15px] font-medium inline-flex items-center justify-center gap-3">
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