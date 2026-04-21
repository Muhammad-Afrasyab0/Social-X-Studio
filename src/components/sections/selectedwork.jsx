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
      {/* Header Alignment */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* Heading */}
        <div className="flex items-start justify-between mb-[70px]">
          <div>
            <p className="text-[16px] font-medium text-black/70 mb-[10px]">
              Our Portfolio
            </p>

            <h2 className="text-[58px] font-semibold leading-none tracking-[-1.6px]">
              Selected Work
            </h2>
          </div>

          <button className="mt-[10px] h-[48px] px-[28px] rounded-full border border-black/20 text-[15px] font-medium inline-flex items-center gap-[8px]">
            <span>See All Work</span>

            <span className="text-[18px] leading-none font-light relative top-[-1px]">
              ↗
            </span>
          </button>
        </div>

        {/* Projects */}
        <div className="space-y-[90px]">
          {projects.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center"
              >
                {reverse ? (
                  <>
                    {/* Text Left */}
                    <div>
                      <h3 className="text-[90px] font-semibold text-black/10 leading-none tracking-[-3px]">
                        {item.id},
                      </h3>

                      <h4 className="mt-[12px] text-[42px] leading-[1.08] font-medium max-w-[620px] tracking-[-1px]">
                        {item.title}
                      </h4>

                      <p className="mt-[18px] text-[17px] leading-[1.8] text-black/60 max-w-[430px]">
                        {item.desc}
                      </p>

                      <button className="mt-[28px] h-[48px] px-[26px] rounded-full border border-black/20 text-[15px] font-medium inline-flex items-center gap-[8px]">
                        <span>View Full Project</span>

                        <span className="text-[18px] leading-none font-light relative top-[-1px]">
                          ↗
                        </span>
                      </button>
                    </div>

                    {/* Image Right */}
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[430px] object-cover rounded-[8px]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image Left */}
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[430px] object-cover rounded-[8px]"
                      />
                    </div>

                    {/* Text Right */}
                    <div>
                      <h3 className="text-[90px] font-semibold text-black/10 leading-none tracking-[-3px]">
                        {item.id},
                      </h3>

                      <h4 className="mt-[12px] text-[42px] leading-[1.08] font-medium max-w-[620px] tracking-[-1px]">
                        {item.title}
                      </h4>

                      <p className="mt-[18px] text-[17px] leading-[1.8] text-black/60 max-w-[430px]">
                        {item.desc}
                      </p>

                      <button className="mt-[28px] h-[48px] px-[26px] rounded-full border border-black/20 text-[15px] font-medium inline-flex items-center gap-[8px]">
                        <span>View Full Project</span>

                        <span className="text-[18px] leading-none font-light relative top-[-1px]">
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