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
    <section className="w-full bg-[#efefef] dark:bg-[#111111] pt-[72px] pb-[78px] transition-all duration-500">

      {/* Header Alignment */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* Header */}
        <div className="flex items-start justify-between mb-[56px]">

          <div>
            <p className="text-[16px] font-medium text-black dark:text-white mb-[10px] transition-all duration-500">
              Testimonials
            </p>

            <h2 className="text-[56px] leading-none tracking-[-1.8px] font-medium text-black dark:text-white transition-all duration-500">
              What Our Client Say
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-[12px] mt-[8px]">

            <button
              onClick={prevSlide}
              className="w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#222222] text-black dark:text-white flex items-center justify-center transition-all duration-500"
            >
              <ArrowLeft size={18} strokeWidth={2.1} />
            </button>

            <button
              onClick={nextSlide}
              className="w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#222222] text-black dark:text-white flex items-center justify-center transition-all duration-500"
            >
              <ArrowRight size={18} strokeWidth={2.1} />
            </button>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-[36px]">

          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[10px] min-h-[290px] px-[42px] pt-[34px] pb-[30px] flex flex-col justify-between transition-all duration-500"
            >

              {/* Review */}
              <div>

                <div className="text-[48px] leading-none font-bold text-black dark:text-white mb-[12px] transition-all duration-500">
                  ❝
                </div>

                <p className="text-[18px] leading-[1.75] text-black/80 dark:text-white/75 max-w-[520px] transition-all duration-500">
                  {item.review}
                </p>

              </div>

              {/* Footer */}
              <div className="flex items-end justify-between mt-[28px]">

                {/* Client */}
                <div className="flex items-center gap-[12px]">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[52px] h-[52px] rounded-[6px] object-cover"
                  />

                  <div>
                    <h4 className="text-[16px] font-semibold leading-none text-black dark:text-white transition-all duration-500">
                      {item.name}
                    </h4>

                    <p className="text-[13px] text-black/45 dark:text-white/45 mt-[6px] transition-all duration-500">
                      {item.role}
                    </p>
                  </div>

                </div>

                {/* Rating */}
                <div className="text-right">

                  <div className="text-[#f2c300] text-[16px] leading-none tracking-[1px]">
                    ★★★★★
                  </div>

                  <p className="text-[12px] text-black/45 dark:text-white/45 mt-[6px] transition-all duration-500">
                    5 Star Rating
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