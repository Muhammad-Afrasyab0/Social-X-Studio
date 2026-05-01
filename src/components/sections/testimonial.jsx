import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Reveal from "../../components/animations/Reveal";

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
          transition:all .5s cubic-bezier(.22,1,.36,1);
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
          transform:scale(1.1);
        }

        /* MAGIC SLIDE */
        .card-animate{
          animation:fadeSlide .6s cubic-bezier(.22,1,.36,1);
        }

        @keyframes fadeSlide{
          from{
            opacity:0;
            transform:translateY(30px) scale(.97);
          }
          to{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        /* STAR POP */
        .star-pop{
          animation:starPop .5s ease;
        }

        @keyframes starPop{
          from{transform:scale(.7); opacity:.5;}
          to{transform:scale(1); opacity:1;}
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] pt-[60px] sm:pt-[68px] md:pt-[72px] pb-[65px] sm:pb-[74px] md:pb-[78px] transition-all duration-500">

        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-[36px] sm:mb-[48px] md:mb-[56px]">

            <div>
              <Reveal>
                <p className="text-[15px] sm:text-[16px] font-medium text-black dark:text-white mb-[10px]">
                  Testimonials
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-[34px] sm:text-[46px] md:text-[56px] leading-none tracking-[-1.8px] font-medium text-black dark:text-white">
                  What Our Client Say
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="flex gap-[12px] md:mt-[8px]">
                <button onClick={prevSlide} className="nav-btn w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#222] flex items-center justify-center">
                  <ArrowLeft className="arrow-icon" size={18} />
                </button>

                <button onClick={nextSlide} className="nav-btn w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#222] flex items-center justify-center">
                  <ArrowRight className="arrow-icon" size={18} />
                </button>
              </div>
            </Reveal>

          </div>

          {/* DESKTOP */}
          <div className="hidden lg:grid grid-cols-2 gap-[36px]">
            {visibleCards.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.2}>
                <div className="testimonial-card card-animate bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[10px] min-h-[290px] px-[42px] pt-[34px] pb-[30px] flex flex-col justify-between">

                  <div>
                    <div className="text-[48px] font-bold mb-[12px]">❝</div>

                    <p className="text-[18px] leading-[1.75] text-black/80 dark:text-white/75">
                      {item.review}
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-[28px]">

                    <div className="flex items-center gap-[12px]">
                      <img src={item.image} className="w-[52px] h-[52px] rounded-[6px]" />

                      <div>
                        <h4 className="text-[16px] font-semibold">{item.name}</h4>
                        <p className="text-[13px] opacity-60">{item.role}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[#f2c300] text-[16px] star-pop">
                        ★★★★★
                      </div>
                      <p className="text-[12px] opacity-60 mt-[6px]">
                        5 Star Rating
                      </p>
                    </div>

                  </div>

                </div>
              </Reveal>
            ))}
          </div>

          {/* MOBILE */}
          <div className="lg:hidden">
            <Reveal>
              <div className="testimonial-card card-animate bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[10px] min-h-[290px] px-5 py-6 flex flex-col justify-between">

                <div>
                  <div className="text-[42px] font-bold mb-[12px]">❝</div>

                  <p className="text-[16px] leading-[1.75] text-black/80 dark:text-white/75">
                    {testimonials[index].review}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-[28px]">
                  <div className="flex items-center gap-[12px]">
                    <img src={testimonials[index].image} className="w-[52px] h-[52px] rounded-[6px]" />

                    <div>
                      <h4 className="text-[16px] font-semibold">{testimonials[index].name}</h4>
                      <p className="text-[13px] opacity-60">{testimonials[index].role}</p>
                    </div>
                  </div>

                  <div className="text-[#f2c300] star-pop">★★★★★</div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </>
  );
}