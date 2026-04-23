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
    <>
      <style>
        {`
        .testimonial-card{
          transition:all .35s ease;
        }

        .testimonial-card:hover{
          transform:translateY(-6px);
        }

        .nav-btn{
          transition:all .3s ease;
        }

        .nav-btn:hover{
          transform:translateY(-2px);
        }

        .arrow-icon{
          transition:transform .3s ease;
        }

        .nav-btn:hover .arrow-icon{
          transform:scale(1.08);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] pt-[60px] sm:pt-[68px] md:pt-[72px] pb-[65px] sm:pb-[74px] md:pb-[78px] transition-all duration-500">
        {/* same alignment as header */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-[36px] sm:mb-[48px] md:mb-[56px]">
            <div>
              <p className="text-[15px] sm:text-[16px] font-medium text-black dark:text-white mb-[10px] transition-all duration-500">
                Testimonials
              </p>

              <h2 className="text-[34px] sm:text-[46px] md:text-[56px] leading-none tracking-[-1.8px] font-medium text-black dark:text-white transition-all duration-500">
                What Our Client Say
              </h2>
            </div>

            {/* Navigation */}
            <div className="flex gap-[12px] md:mt-[8px]">
              <button
                onClick={prevSlide}
                className="nav-btn w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#222222] text-black dark:text-white flex items-center justify-center transition-all duration-500"
              >
                <ArrowLeft
                  size={18}
                  strokeWidth={2.1}
                  className="arrow-icon"
                />
              </button>

              <button
                onClick={nextSlide}
                className="nav-btn w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#222222] text-black dark:text-white flex items-center justify-center transition-all duration-500"
              >
                <ArrowRight
                  size={18}
                  strokeWidth={2.1}
                  className="arrow-icon"
                />
              </button>
            </div>
          </div>

          {/* Desktop = 2 cards */}
          <div className="hidden lg:grid grid-cols-2 gap-[36px]">
            {visibleCards.map((item) => (
              <div
                key={item.id}
                className="testimonial-card bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[10px] min-h-[290px] px-[42px] pt-[34px] pb-[30px] flex flex-col justify-between transition-all duration-500"
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

          {/* Mobile + Tablet = 1 card */}
          <div className="lg:hidden">
            <div className="testimonial-card bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[10px] min-h-[290px] px-5 sm:px-7 pt-6 sm:pt-7 pb-6 sm:pb-7 flex flex-col justify-between transition-all duration-500">
              <div>
                <div className="text-[42px] sm:text-[48px] leading-none font-bold text-black dark:text-white mb-[12px] transition-all duration-500">
                  ❝
                </div>

                <p className="text-[16px] sm:text-[17px] leading-[1.75] text-black/80 dark:text-white/75 transition-all duration-500">
                  {testimonials[index].review}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mt-[28px]">
                <div className="flex items-center gap-[12px]">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-[52px] h-[52px] rounded-[6px] object-cover"
                  />

                  <div>
                    <h4 className="text-[16px] font-semibold leading-none text-black dark:text-white transition-all duration-500">
                      {testimonials[index].name}
                    </h4>

                    <p className="text-[13px] text-black/45 dark:text-white/45 mt-[6px] transition-all duration-500">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-[#f2c300] text-[16px] leading-none tracking-[1px]">
                    ★★★★★
                  </div>

                  <p className="text-[12px] text-black/45 dark:text-white/45 mt-[6px] transition-all duration-500">
                    5 Star Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}