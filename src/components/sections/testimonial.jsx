import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wajahat",
    role: "Assistant Manager",
    image: client1,
    review:
      "Lorem Ipsum Dollar consectetur nisi montes eu mauris congue. Eget penatibus cum amet; suscipit blandit felis Commodo ut m.",
  },
  {
    id: 2,
    name: "Hassan Nisar BPO",
    role: "Ceo Founder",
    image: client2,
    review:
      "Lorem Ipsum Dollar consectetur nisi montes eu mauris congue. Eget penatibus cum amet; suscipit blandit felis Commodo ut m.",
  },
  {
    id: 3,
    name: "Ahmed Khan",
    role: "Marketing Head",
    image: client1,
    review:
      "Lorem Ipsum Dollar consectetur nisi montes eu mauris congue. Eget penatibus cum amet; suscipit blandit felis Commodo ut m.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const visibleCards = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="w-full min-w-[1180px] bg-[#efefef] pt-[66px] pb-[72px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-[56px]">
          <div>
            <p className="text-[12px] font-semibold text-black mb-[8px]">
              Testimonials
            </p>

            <h2 className="text-[43px] leading-[1] tracking-[-1.6px] font-medium text-black">
              What Our Client Say
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-[10px] mt-[4px]">
            <button
              onClick={prevSlide}
              className="w-[39px] h-[39px] rounded-full bg-[#d9d9d9] flex items-center justify-center"
            >
              <ArrowLeft size={15} strokeWidth={2.1} />
            </button>

            <button
              onClick={nextSlide}
              className="w-[39px] h-[39px] rounded-full bg-[#d9d9d9] flex items-center justify-center"
            >
              <ArrowRight size={15} strokeWidth={2.1} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-[42px]">
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="bg-[#e7e7e7] rounded-[8px] h-[250px] px-[42px] pt-[30px] pb-[28px] flex flex-col justify-between"
            >
              {/* Review */}
              <div>
                <div className="text-[42px] leading-none font-bold text-black mb-[10px]">
                  ❝
                </div>

                <p className="text-[15px] leading-[1.65] text-black/80 max-w-[360px]">
                  {item.review}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-end justify-between">
                {/* Client */}
                <div className="flex items-center gap-[11px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[47px] h-[47px] rounded-[4px] object-cover"
                  />

                  <div>
                    <h4 className="text-[14px] font-semibold leading-none text-black">
                      {item.name}
                    </h4>

                    <p className="text-[12px] text-black/45 mt-[5px]">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="text-right">
                  <div className="text-[#f2c300] text-[14px] leading-none tracking-[1px]">
                    ★★★★★
                  </div>

                  <p className="text-[11px] text-black/45 mt-[5px]">
                    5 Star Raiting
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}