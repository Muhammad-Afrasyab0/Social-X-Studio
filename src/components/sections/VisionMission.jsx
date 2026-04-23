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
          transition:transform .45s ease;
        }

        .card-hover:hover{
          transform:translateY(-4px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[22px] sm:py-[26px] transition-all duration-500">
        {/* Header aligned */}
        <div className="max-w-[1900px] mx-auto px-[16px] sm:px-[24px] lg:px-[42px]">

          {/* EXACT STYLE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] sm:gap-[22px]">

            {/* ================================================= */}
            {/* TOP LEFT IMAGE */}
            {/* ================================================= */}
            <div className="fade-up card-hover relative bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[18px] overflow-hidden min-h-[320px] sm:min-h-[420px] lg:h-[430px]">
              
              {/* PNG FACE FIX */}
              <img
                src={personImg}
                alt="Portrait"
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  h-[112%]
                  sm:h-[118%]
                  lg:h-[122%]
                  w-auto
                  max-w-none
                  object-contain
                  object-bottom
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent pointer-events-none"></div>
            </div>

            {/* ================================================= */}
            {/* TOP RIGHT VISION */}
            {/* ================================================= */}
            <div className="fade-up card-hover rounded-[18px] bg-transparent min-h-[320px] sm:min-h-[420px] lg:h-[430px] p-[22px] sm:p-[34px] lg:p-[42px] flex flex-col justify-center">
              
              <h2 className="text-black dark:text-white text-[46px] sm:text-[62px] lg:text-[74px] leading-[0.96] font-semibold tracking-[-0.04em]">
                Our Vision
              </h2>

              <p className="mt-[18px] text-black/75 dark:text-white/70 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.9] max-w-[620px]">
                Lorem Ipsum Sollicitudin aliquet justo odio facilisis aliquam
                vitae quam commodo aliquam nisi. Malesuada non dui tellus netus
                turpis libero nisl donec sagittis pretium nam. Sed sit sagittis
                dictumst leo enim enim. Lorem a aliquet massa condimentum
                fermentum eleifend penatibus vehicula ipsum sed a lobortis.
                Laoreet fermentum sed erat varius condimentum, tortor massa
                magna duis blandit.
              </p>

            </div>

            {/* ================================================= */}
            {/* BOTTOM LEFT MISSION */}
            {/* ================================================= */}
            <div className="fade-up card-hover rounded-[18px] bg-transparent min-h-[320px] sm:min-h-[420px] lg:h-[430px] p-[22px] sm:p-[34px] lg:p-[42px] flex flex-col justify-center order-4 md:order-3">
              
              <h2 className="text-black dark:text-white text-[44px] sm:text-[60px] lg:text-[72px] leading-[0.96] font-semibold tracking-[-0.04em]">
                Our Misson
              </h2>

              <p className="mt-[18px] text-black/75 dark:text-white/70 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.9] max-w-[620px]">
                Lorem Ipsum Sollicitudin aliquet justo odio facilisis aliquam
                vitae quam commodo aliquam nisi. Malesuada non dui tellus netus
                turpis libero nisl donec sagittis pretium nam. Sed sit sagittis
                dictumst leo enim enim. Lorem a aliquet massa condimentum
                fermentum eleifend penatibus vehicula ipsum sed a lobortis.
                Laoreet fermentum sed erat varius condimentum, tortor massa
                magna duis blandit.
              </p>

            </div>

            {/* ================================================= */}
            {/* BOTTOM RIGHT PANEL */}
            {/* ================================================= */}
            <div className="fade-up card-hover rounded-[18px] bg-[#e7e7e7] dark:bg-[#1a1a1a] min-h-[320px] sm:min-h-[420px] lg:h-[430px] order-3 md:order-4"></div>

          </div>

        </div>
      </section>
    </>
  );
}