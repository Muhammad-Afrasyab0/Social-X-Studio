import React, { useEffect, useState } from "react";

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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
        .fade-up{
          opacity:0;
          transform:translateY(34px);
          transition:all .9s cubic-bezier(.22,1,.36,1);
        }

        .fade-up.show{
          opacity:1;
          transform:translateY(0);
        }

        .img-box{
          overflow:hidden;
          border-radius:14px;
          width:100%;
        }

        .img-box img{
          transition:transform .7s ease;
        }

        .img-box:hover img{
          transform:scale(1.05);
        }

        .btn-arrow{
          transition:transform .3s ease;
        }

        .btn-hover:hover .btn-arrow{
          transform:translate(4px,-4px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[60px] sm:py-[75px] md:py-[90px] transition-all duration-500 overflow-hidden">
        {/* same alignment as header */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-[42px] sm:mb-[55px] md:mb-[70px]">
            <div className={`fade-up ${show ? "show" : ""}`}>
              <p className="text-[15px] sm:text-[16px] text-black/70 dark:text-white/70 mb-[10px] font-medium transition-all duration-500">
                Our Portfolio
              </p>

              <h2 className="text-[34px] sm:text-[46px] md:text-[58px] font-semibold leading-none tracking-[-1.8px] text-black dark:text-white transition-all duration-500">
                Selected Work
              </h2>
            </div>

            <button
              className={`btn-hover fade-up ${
                show ? "show" : ""
              } h-[48px] px-[28px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 w-fit`}
            >
              See All Work

              <span className="btn-arrow text-[18px] leading-none">
                ↗
              </span>
            </button>
          </div>

          {/* PROJECTS */}
          <div className="space-y-[55px] sm:space-y-[70px] md:space-y-[90px]">
            {projects.map((item, index) => {
              const reverse = index % 2 !== 0;

              const imageBlock = (
                <div
                  className={`fade-up ${show ? "show" : ""} w-full`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="img-box">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="block w-full h-[220px] xs:h-[260px] sm:h-[340px] md:h-[420px] xl:h-[520px] object-cover"
                    />
                  </div>
                </div>
              );

              const textBlock = (
                <div
                  className={`fade-up ${show ? "show" : ""} w-full`}
                  style={{ transitionDelay: `${index * 100 + 120}ms` }}
                >
                  <h3 className="text-[48px] sm:text-[68px] md:text-[86px] font-semibold text-black/10 dark:text-white/10 leading-none transition-all duration-500">
                    {item.id},
                  </h3>

                  <h4 className="mt-[10px] text-[26px] sm:text-[34px] md:text-[42px] leading-[1.08] font-medium max-w-[620px] tracking-[-1px] text-black dark:text-white transition-all duration-500">
                    {item.title}
                  </h4>

                  <p className="mt-[16px] sm:mt-[18px] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-black/60 dark:text-white/70 max-w-[470px] transition-all duration-500">
                    {item.desc}
                  </p>

                  <button className="btn-hover mt-[24px] sm:mt-[28px] h-[48px] px-[28px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3">
                    View Full Project

                    <span className="btn-arrow text-[18px] leading-none">
                      ↗
                    </span>
                  </button>
                </div>
              );

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] sm:gap-[36px] md:gap-[50px] xl:gap-[70px] items-center"
                >
                  {/* MOBILE always image first */}
                  <div className="lg:hidden space-y-6">
                    {imageBlock}
                    {textBlock}
                  </div>

                  {/* DESKTOP preserve approved alternating layout */}
                  <div className="hidden lg:contents">
                    {reverse ? (
                      <>
                        {textBlock}
                        {imageBlock}
                      </>
                    ) : (
                      <>
                        {imageBlock}
                        {textBlock}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}