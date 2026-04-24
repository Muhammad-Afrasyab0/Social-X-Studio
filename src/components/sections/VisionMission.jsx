import React from "react";
import personImg from "../../assets/vision-person.png";

export default function VisionMission() {
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

        .card-hover{
          transition:transform .4s ease;
        }

        .card-hover:hover{
          transform:translateY(-4px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[22px] sm:py-[26px] transition-all duration-500">
        <div className="max-w-[1800px] mx-auto px-[16px] sm:px-[24px] lg:px-[36px]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] sm:gap-[22px]">

            {/* IMAGE BOX PERFECT FIT */}
            <div className="fade-up card-hover relative bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[18px] overflow-hidden min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px] flex items-center justify-center">

              <img
                src={personImg}
                alt="Portrait"
                className="
                  w-auto
                  h-[82%]
                  sm:h-[84%]
                  md:h-[86%]
                  lg:h-[88%]
                  xl:h-[90%]
                  max-w-[82%]
                  object-contain
                  object-center
                  drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* VISION */}
            <div className="fade-up card-hover rounded-[18px] min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px] p-[22px] sm:p-[32px] lg:p-[42px] flex flex-col justify-center">

              <h2 className="text-black dark:text-white text-[40px] sm:text-[56px] lg:text-[70px] leading-[0.96] font-semibold tracking-[-0.04em]">
                Our Vision
              </h2>

              <p className="mt-[18px] text-black/75 dark:text-white/70 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.9] max-w-[620px]">
                Lorem Ipsum Sollicitudin aliquet justo odio facilisis aliquam
                vitae quam commodo aliquam nisi. Malesuada non dui tellus netus
                turpis libero nisl donec sagittis pretium nam. Sed sit sagittis
                dictumst leo enim enim.
              </p>

            </div>

            {/* MISSION */}
            <div className="fade-up card-hover rounded-[18px] min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px] p-[22px] sm:p-[32px] lg:p-[42px] flex flex-col justify-center order-4 md:order-3">

              <h2 className="text-black dark:text-white text-[40px] sm:text-[56px] lg:text-[68px] leading-[0.96] font-semibold tracking-[-0.04em]">
                Our Mission
              </h2>

              <p className="mt-[18px] text-black/75 dark:text-white/70 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.9] max-w-[620px]">
                Lorem Ipsum Sollicitudin aliquet justo odio facilisis aliquam
                vitae quam commodo aliquam nisi. Malesuada non dui tellus netus
                turpis libero nisl donec sagittis pretium nam. Sed sit sagittis
                dictumst leo enim enim.
              </p>

            </div>

            {/* RIGHT BOTTOM PANEL */}
            <div className="fade-up card-hover rounded-[18px] bg-[#e7e7e7] dark:bg-[#1a1a1a] min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px] order-3 md:order-4"></div>

          </div>

        </div>
      </section>
    </>
  );
}