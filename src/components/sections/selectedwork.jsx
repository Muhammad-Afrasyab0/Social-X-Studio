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
    <section className="w-full bg-[#efefef] py-20">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <p className="text-[11px] tracking-wide text-black/70 mb-2">
              Our Portfolio
            </p>

            <h2 className="text-[44px] font-semibold leading-none">
              Selected Work
            </h2>
          </div>

          <button className="h-10 px-5 rounded-full border border-black/20 text-[12px] font-medium">
            See All Work ↗
          </button>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Reverse Layout */}
                {reverse ? (
                  <>
                    {/* Text Left */}
                    <div>
                      <h3 className="text-[62px] font-semibold text-black/10 leading-none">
                        {item.id},
                      </h3>

                      <h4 className="mt-3 text-[34px] leading-[1.08] font-medium max-w-[520px]">
                        {item.title}
                      </h4>

                      <p className="mt-4 text-[12px] leading-relaxed text-black/55 max-w-[320px]">
                        {item.desc}
                      </p>

                      <button className="mt-6 h-10 px-5 rounded-full border border-black/20 text-[12px] font-medium">
                        View Full Project ↗
                      </button>
                    </div>

                    {/* Image Right */}
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[320px] object-cover rounded-md"
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
                        className="w-full h-[320px] object-cover rounded-md"
                      />
                    </div>

                    {/* Text Right */}
                    <div>
                      <h3 className="text-[62px] font-semibold text-black/10 leading-none">
                        {item.id},
                      </h3>

                      <h4 className="mt-3 text-[34px] leading-[1.08] font-medium max-w-[520px]">
                        {item.title}
                      </h4>

                      <p className="mt-4 text-[12px] leading-relaxed text-black/55 max-w-[320px]">
                        {item.desc}
                      </p>

                      <button className="mt-6 h-10 px-5 rounded-full border border-black/20 text-[12px] font-medium">
                        View Full Project ↗
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