import React from "react";
import buildingImg from "../../assets/about-image.png"; // same image use yours

export default function AboutIntro() {
  return (
    <section className="w-full bg-[#efefef] py-[92px] overflow-hidden">
      {/* HEADER ALIGNMENT */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        <div className="grid grid-cols-2 gap-[70px] items-start">

          {/* LEFT SIDE */}
          <div className="pt-[8px]">

            <p className="text-black text-[18px] font-medium mb-[24px]">
              Who We Are
            </p>

            <h2 className="text-[64px] leading-[1.05] font-semibold tracking-[-2px] text-black max-w-[760px]">
              We create strategic designs and innovative solutions that help brands stand out.
            </h2>

            <p className="mt-[28px] text-[20px] leading-[1.9] text-black/70 max-w-[690px]">
              We are a forward-thinking digital agency focused on delivering strategic
              design, innovative solutions, and measurable results. Our team blends
              creativity with technology to build brands that stand out in a
              competitive world.
            </p>

            <a
              href="#"
              className="mt-[38px] h-[54px] px-[28px] rounded-full bg-black text-white text-[16px] font-medium inline-flex items-center gap-3"
            >
              Contact Us
              <span className="text-[18px] leading-none">↗</span>
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* IMAGE */}
            <img
              src={buildingImg}
              alt="About"
              className="w-full h-[560px] object-cover rounded-[10px]"
            />

            {/* BLUE CIRCLE */}
            <div className="absolute left-[-28px] bottom-[-36px] w-[122px] h-[122px] rounded-full bg-[#118df0] z-20"></div>

            {/* ROTATING TEXT */}
            <div className="absolute left-[-57px] bottom-[-66px] w-[180px] h-[180px] animate-spin-slow z-10">

              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M100,100
                       m-72,0
                       a72,72 0 1,1 144,0
                       a72,72 0 1,1 -144,0"
                  />
                </defs>

                <text
                  fill="#111"
                  fontSize="14"
                  fontWeight="500"
                  letterSpacing="1.2"
                >
                  <textPath href="#circlePath">
                    Lorem Ipsum Dollar Lorem Ipsum Lorem Ipsum Dollar Lorem Ipsum
                  </textPath>
                </text>
              </svg>

            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spinSlow 14s linear infinite;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}