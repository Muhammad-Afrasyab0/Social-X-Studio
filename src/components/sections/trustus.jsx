import React from "react";

import logo1 from "../../assets/1.png";
import logo2 from "../../assets/2.png";
import logo3 from "../../assets/3.png";
import logo4 from "../../assets/4.png";
import logo5 from "../../assets/5.png";
import logo6 from "../../assets/6.png";
import logo7 from "../../assets/7.png";
import logo8 from "../../assets/8.png";

export default function TrustUs() {
  const logos = [
    {
      src: logo1,
      alt: "Company Logo 1",
      imgClass: "w-[138px] scale-[2.08]",
      gap: "mx-[18px]",
    },
    {
      src: logo2,
      alt: "Company Logo 2",
      imgClass: "w-[138px] scale-[3.50]",
      gap: "mx-[34px]",   // 🔥 big logo → more space
    },
    {
      src: logo3,
      alt: "Company Logo 3",
      imgClass: "w-[138px] scale-[3.56] translate-y-[10px]",
      gap: "mx-[40px]",
    },
    {
      src: logo4,
      alt: "Company Logo 4",
      imgClass: "w-[126px] scale-[1.5] translate-y-[7px]",
      gap: "mx-[10px]",
    },
    {
      src: logo5,
      alt: "Company Logo 5",
      imgClass: "w-[126px] scale-[1.5] translate-y-[12px]",
      gap: "mx-[10px]",
    },
    {
      src: logo6,
      alt: "Company Logo 6",
      imgClass: "w-[134px] scale-[2.18]",
      gap: "mx-[20px]",
    },
    {
      src: logo7,
      alt: "Company Logo 7",
      imgClass: "w-[134px] scale-[3.16]",
      gap: "mx-[30px]",
    },
    {
      src: logo8,
      alt: "Company Logo 8",
      imgClass: "w-[140px] scale-[3.10]",
      gap: "mx-[30px]",
    },
  ];

  const marquee = [...logos, ...logos];

  return (
    <section className="w-full bg-[#efefef] dark:bg-[#111111] overflow-hidden py-[90px] transition-all duration-500">

      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-black dark:text-white text-[42px] font-semibold tracking-[-1px]">
            World’s Most Popular Companies Trust Us
          </h2>

          <p className="mt-[12px] text-[18px] text-black/65 dark:text-white/65">
            Connect with us & let’s build something cool together
          </p>
        </div>

        {/* Logos */}
        <div className="mt-[50px] overflow-hidden relative">

          <div className="absolute left-0 top-0 z-10 h-full w-[120px] bg-gradient-to-r from-[#efefef] dark:from-[#111111] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-[120px] bg-gradient-to-l from-[#efefef] dark:from-[#111111] to-transparent pointer-events-none"></div>

          <div className="flex w-max items-center animate-marquee">

            {marquee.map((item, index) => (
              <div
                key={index}
                className={`group shrink-0 w-[170px] h-[95px] flex items-center justify-center ${item.gap}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`
                    h-auto
                    max-h-[58px]
                    object-contain
                    grayscale opacity-60
                    transition-all duration-500
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    ${item.imgClass}
                  `}
                />
              </div>
            ))}

          </div>
        </div>

        <div className="mt-[46px] border-t border-black/10 dark:border-white/10"></div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}