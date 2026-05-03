import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Reveal from "../../components/animations/Reveal";

import client1 from "../../assets/clientcarescan.net.png";
import client2 from "../../assets/clientecommerce.png";
import client3 from "../../assets/clientdigital.png";

const testimonials = [
  {
    id: 1,
    name: "Syed Hassan Abbas",
    role: "Founder",
    image: client1,
    review:
      "They built our website exactly how we wanted. The design is clean, UI is smooth, and the development quality is impressive. Their support team is also very responsive and helpful.",
  },
  {
    id: 2,
    name: "Aneeq Hamdani",
    role: "CEO & Founder",
    image: client2,
    review:
      "Their team delivered a highly scalable digital solution with a strong focus on user experience and conversion-driven design. Everything was handled professionally from start to finish.",
  },
  {
    id: 3,
    name: "Ahmed Khan",
    role: "Marketing Head",
    image: client3,
    review:
      "Highly recommended agency for modern web development, branding, and digital growth. They deliver quality work and understand international market standards.",
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

        /* 🔥 SMOOTH TEXT REVEAL */
        .text-reveal span{
          opacity:0;
          transform:translateY(10px);
          display:inline-block;
          animation:textReveal .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        @keyframes textReveal{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        /* CARD ENTRY */
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

        .star-pop{
          animation:starPop .5s ease;
        }

        @keyframes starPop{
          from{transform:scale(.7); opacity:.5;}
          to{transform:scale(1); opacity:1;}
        }
        `}
      </style>

      <section
        className="w-full bg-[#efefef] dark:bg-[#111111] pt-[60px] sm:pt-[70px] md:pt-[75px] pb-[65px] sm:pb-[74px] md:pb-[80px] transition-all duration-500"
        aria-label="Client Testimonials Section"
      >

        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-[40px] sm:mb-[50px] md:mb-[60px]">

            <div>
              <Reveal>
                <p className="text-[15px] sm:text-[16px] font-medium text-black dark:text-white/80 mb-[10px]">
                  Testimonials
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-[34px] sm:text-[46px] md:text-[56px] leading-none tracking-[-1.5px] font-medium text-black dark:text-white">
                  What Our Clients Say
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="flex gap-[12px] md:mt-[8px]">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="nav-btn w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#1e1e1e] flex items-center justify-center"
                >
                  <ArrowLeft className="arrow-icon text-black dark:text-white" size={18} />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="nav-btn w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#1e1e1e] flex items-center justify-center"
                >
                  <ArrowRight className="arrow-icon text-black dark:text-white" size={18} />
                </button>
              </div>
            </Reveal>

          </div>

          {/* DESKTOP */}
          <div className="hidden lg:grid grid-cols-2 gap-[36px] xl:gap-[48px]">
            {visibleCards.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.2}>
                <article className="testimonial-card card-animate bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[12px] min-h-[300px] px-[40px] pt-[34px] pb-[30px] flex flex-col justify-between">

                  <div>
                    <div className="text-[48px] font-bold mb-[12px]">❝</div>

                    <p className="text-[18px] leading-[1.75] text-black/80 dark:text-white/75 text-reveal">
                      {item.review.split(" ").map((word, i) => (
                        <span key={i} style={{ animationDelay: `${i * 0.02}s` }}>
                          {word}&nbsp;
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-[28px]">

                    <div className="flex items-center gap-[12px]">
                      <img
                        src={item.image}
                        alt={`${item.name} testimonial`}
                        loading="lazy"
                        className="w-[52px] h-[52px] rounded-[6px] object-cover"
                      />

                      <div>
                        <h4 className="text-[16px] font-semibold text-black dark:text-white">
                          {item.name}
                        </h4>
                        <p className="text-[13px] text-black/60 dark:text-white/60">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[#f2c300] text-[16px] star-pop">
                        ★★★★★
                      </div>
                      <p className="text-[12px] text-black/60 dark:text-white/60 mt-[6px]">
                        5 Star Rating
                      </p>
                    </div>

                  </div>

                </article>
              </Reveal>
            ))}
          </div>

          {/* MOBILE */}
          <div className="lg:hidden">
            <Reveal>
              <article className="testimonial-card card-animate bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[12px] min-h-[300px] px-5 py-6 flex flex-col justify-between">

                <div>
                  <div className="text-[42px] font-bold mb-[12px]">❝</div>

                  <p className="text-[16px] leading-[1.75] text-black/80 dark:text-white/75 text-reveal">
                    {testimonials[index].review.split(" ").map((word, i) => (
                      <span key={i} style={{ animationDelay: `${i * 0.02}s` }}>
                        {word}&nbsp;
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-[28px]">
                  <div className="flex items-center gap-[12px]">
                    <img
                      src={testimonials[index].image}
                      alt={`${testimonials[index].name} testimonial`}
                      loading="lazy"
                      className="w-[52px] h-[52px] rounded-[6px]"
                    />

                    <div>
                      <h4 className="text-[16px] font-semibold text-black dark:text-white">
                        {testimonials[index].name}
                      </h4>
                      <p className="text-[13px] text-black/60 dark:text-white/60">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#f2c300] star-pop">★★★★★</div>
                </div>

              </article>
            </Reveal>
          </div>

        </div>
      </section>
    </>
  );
}