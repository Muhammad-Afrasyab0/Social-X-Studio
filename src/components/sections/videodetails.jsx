import React from "react";

export default function VideoProductionDetails() {
  const services = [
    {
      no: "1.",
      title: "Corporate Video Production",
      desc:
        "Professional corporate videos that communicate your brand story, services, and values with clarity, helping businesses build trust and authority in competitive markets.",
    },
    {
      no: "2.",
      title: "Social Media Video Content",
      desc:
        "Engaging short-form and long-form video content designed for platforms like Instagram, TikTok, and YouTube to boost reach, engagement, and audience retention.",
    },
    {
      no: "3.",
      title: "Commercial & Ad Video Production",
      desc:
        "High-quality promotional videos and ad campaigns created to increase conversions, capture attention, and drive measurable results for your business growth.",
    },
  ];

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

        .service-row{
          transition:all .35s ease;
        }

        .service-row:hover{
          transform:translateY(-3px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] pt-[clamp(34px,6vw,58px)] pb-[clamp(54px,8vw,80px)] transition-all duration-500">
        
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* Top Banner */}
          <div className="fade-up w-full h-[clamp(220px,42vw,430px)] rounded-[10px] bg-black dark:bg-[#1a1a1a] transition-all duration-500"></div>

          {/* Content */}
          <div className="pt-[clamp(28px,5vw,54px)]">

            <h2 className="fade-up text-black dark:text-white text-[clamp(34px,7vw,58px)] font-semibold leading-[0.96] tracking-[-0.04em] transition-all duration-500">
              Video Production
            </h2>

            <p className="fade-up mt-[clamp(18px,4vw,30px)] text-black/70 dark:text-white/70 text-[clamp(15px,2vw,17px)] leading-[1.95] max-w-[1750px] transition-all duration-500">
              We deliver professional video production services designed to elevate your brand presence, engage your audience, and drive measurable business growth across digital platforms.
            </p>

            <p className="fade-up mt-[clamp(16px,3vw,28px)] text-black/70 dark:text-white/70 text-[clamp(15px,2vw,17px)] leading-[1.95] max-w-[1750px] transition-all duration-500">
              From corporate videos and social media content to commercial ads and product videos, our team creates visually compelling content that communicates your message effectively and performs across global markets.
            </p>

          </div>

          {/* Services List */}
          <div className="mt-[clamp(36px,6vw,70px)] border-t border-black/10 dark:border-white/10 transition-all duration-500">

            {services.map((item, index) => (
              <div
                key={index}
                className="fade-up service-row grid grid-cols-1 sm:grid-cols-[58px_1fr] lg:grid-cols-[70px_1fr] gap-[14px] sm:gap-[18px] py-[clamp(22px,4vw,34px)] border-b border-black/10 dark:border-white/10 transition-all duration-500"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >

                <div className="text-black dark:text-white text-[clamp(26px,5vw,34px)] font-medium leading-none pt-[2px] transition-all duration-500">
                  {item.no}
                </div>

                <div>
                  <h3 className="text-black dark:text-white text-[clamp(28px,6vw,38px)] font-medium leading-[1.02] tracking-[-0.03em] transition-all duration-500">
                    {item.title}
                  </h3>

                  <p className="mt-[clamp(12px,2vw,18px)] text-black/65 dark:text-white/65 text-[clamp(14px,2vw,16px)] leading-[1.9] max-w-[760px] transition-all duration-500">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}