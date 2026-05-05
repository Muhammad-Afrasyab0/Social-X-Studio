import React from "react";

import img1 from "../../assets/service1.png";
import img2 from "../../assets/service2.png";
import img3 from "../../assets/service3.png";

export default function ServicesShowcase() {
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

        .img-card{
          overflow:hidden;
          border-radius:14px;
          background:black;
        }

        .img-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center;
          transition:transform .7s ease;
        }

        .img-card:hover img{
          transform:scale(1.05);
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

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[clamp(54px,8vw,90px)]">
        
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[clamp(34px,5vw,48px)] items-center">

            {/* IMAGES */}
            <div className="fade-up order-2 xl:order-1">

              {/* FIXED HEIGHT CONTAINER */}
              <div className="grid grid-cols-2 gap-[clamp(12px,2vw,24px)] h-[clamp(360px,60vw,620px)]">

                {/* LEFT FULL HEIGHT */}
                <div className="img-card h-full">
                  <img
                    src={img1}
                    alt="UI UX design and digital branding services"
                    loading="lazy"
                  />
                </div>

                {/* RIGHT STACK */}
                <div className="flex flex-col gap-[clamp(12px,2vw,24px)] h-full">

                  <div className="img-card flex-1">
                    <img
                      src={img2}
                      alt="Web development and responsive website solutions"
                      loading="lazy"
                    />
                  </div>

                  <div className="img-card flex-1">
                    <img
                      src={img3}
                      alt="Creative marketing and video production services"
                      loading="lazy"
                    />
                  </div>

                </div>

              </div>

            </div>

            {/* CONTENT (UNCHANGED) */}
            <div className="fade-up order-1 xl:order-2 max-w-[720px] xl:ml-auto">
              
              <p className="text-black dark:text-white text-[clamp(15px,2vw,18px)] font-medium">
                Digital Services & Solutions
              </p>

              <h2 className="mt-[10px] text-black dark:text-white text-[clamp(34px,7vw,74px)] leading-[0.96] font-semibold tracking-[-0.04em]">
                Empowering businesses
                <br className="hidden sm:block" />
                with modern digital solutions
              </h2>

              <p className="mt-[clamp(18px,3vw,28px)] text-black/65 dark:text-white/70 text-[clamp(15px,2.4vw,22px)] leading-[1.8] max-w-[660px]">
                We help businesses grow through strategic UI/UX design, high-performance web development, and result-driven digital marketing. Our solutions are built to enhance user experience, increase engagement, and drive measurable business growth.
              </p>

              <button
                onClick={() => (window.location.href = "/contact")}
                className="btn-hover mt-[clamp(24px,4vw,36px)] h-[clamp(48px,6vw,58px)] px-[clamp(24px,4vw,34px)] rounded-full border border-black/35 dark:border-white/25 text-black dark:text-white text-[clamp(14px,2vw,17px)] font-medium inline-flex items-center gap-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-300"
              >
                Book A Free Consultation Call
                <span className="arrow-move text-[clamp(17px,2vw,20px)] leading-none">
                  ↗
                </span>
              </button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}