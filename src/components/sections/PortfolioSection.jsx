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
    title: "Creative Marketing",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image3,
  },
  {
    id: "04",
    title: "Digital Ad Campaign for FlexWear",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image4,
  },
  {
    id: "05",
    title: "Creative Branding Strategy",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image1,
  },
  {
    id: "06",
    title: "Modern UI UX Solutions",
    desc: "Transforming ideas into powerful brand identities, engaging websites, and meaningful digital interactions.",
    image: image2,
  },
];

export default function PortfolioSection() {
  return (
    <>
      <style>
        {`
        .fade-up{
          opacity:0;
          transform:translateY(24px);
          animation:fadeUp .8s ease forwards;
        }

        @keyframes fadeUp{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .img-wrap{
          overflow:hidden;
          transition:all .4s ease;
        }

        .img-wrap img{
          transition:transform .8s ease;
        }

        .img-wrap:hover{
          transform:translateY(-4px);
        }

        .img-wrap:hover img{
          transform:scale(1.03);
        }

        .btn-hover{
          transition:all .3s ease;
        }

        .btn-hover:hover{
          transform:translateY(-2px);
        }

        .arrow-move{
          transition:transform .3s ease;
        }

        .btn-hover:hover .arrow-move{
          transform:translate(4px,-4px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[clamp(54px,8vw,90px)] transition-all duration-500">
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* PROJECTS ONLY */}
          <div className="space-y-[clamp(44px,7vw,70px)]">

            {projects.map((item, index) => {
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 xl:grid-cols-2 gap-[clamp(26px,5vw,70px)] items-center"
                >
                  {/* ===================================== */}
                  {/* IMAGE FIRST ON MOBILE */}
                  {/* ===================================== */}
                  <div
                    className={`fade-up ${
                      reverse ? "xl:order-2" : "xl:order-1"
                    }`}
                  >
                    <div className="img-wrap rounded-[16px] bg-white/40 dark:bg-white/[0.03]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[clamp(240px,48vw,480px)] object-contain rounded-[16px]"
                      />
                    </div>
                  </div>

                  {/* ===================================== */}
                  {/* TEXT */}
                  {/* ===================================== */}
                  <div
                    className={`fade-up ${
                      reverse ? "xl:order-1" : "xl:order-2"
                    }`}
                    style={{
                      animationDelay: "120ms",
                    }}
                  >
                    <h3 className="text-[clamp(56px,10vw,86px)] font-semibold text-black/10 dark:text-white/10 leading-none tracking-[-0.04em] transition-all duration-500">
                      {item.id},
                    </h3>

                    <h4 className="mt-[clamp(8px,2vw,12px)] text-[clamp(28px,6vw,42px)] leading-[1.08] font-medium max-w-[620px] tracking-[-0.03em] text-black dark:text-white transition-all duration-500">
                      {item.title}
                    </h4>

                    <p className="mt-[clamp(14px,2vw,18px)] text-[clamp(14px,2vw,17px)] leading-[1.8] text-black/60 dark:text-white/60 max-w-[430px] transition-all duration-500">
                      {item.desc}
                    </p>

                    <button className="btn-hover mt-[clamp(22px,4vw,28px)] h-[clamp(46px,6vw,48px)] px-[clamp(24px,4vw,30px)] rounded-full bg-black text-white dark:bg-white dark:text-black text-[clamp(14px,2vw,15px)] font-medium inline-flex items-center gap-3 transition-all duration-300">
                      View Full Project

                      <span className="arrow-move text-[clamp(16px,2vw,18px)] leading-none">
                        ↗
                      </span>
                    </button>
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