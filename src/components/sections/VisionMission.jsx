import React, { useEffect } from "react";
import visionImg from "../../assets/ourvision.png";
import missionImg from "../../assets/ourmission.png";

export default function VisionMission() {

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 80);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
        .fade-up{
          opacity:0;
          transform:translateY(40px);
          transition:all .9s cubic-bezier(.22,1,.36,1);
        }

        .fade-up.show{
          opacity:1;
          transform:translateY(0);
        }

        .card-hover{
          transition:transform .4s ease;
        }

        .card-hover:hover{
          transform:translateY(-4px);
        }

        /* 🔥 IMAGE FIX (MAIN) */
        .img-box{
          width:100%;
          height:100%;
          overflow:hidden;
          border-radius:18px;
        }

        .img-box img{
          width:100%;
          height:100%;
          object-fit:cover; /* 🔥 FIX */
          transition:transform .6s cubic-bezier(.22,1,.36,1);
        }

        .card-hover:hover .img-box img{
          transform:scale(1.04);
        }

        /* TEXT */
        .text-reveal span{
          opacity:0;
          transform:translateY(12px);
          display:inline-block;
          animation:textReveal .6s cubic-bezier(.22,1,.36,1) forwards;
        }

        @keyframes textReveal{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fluid-heading{
          font-size:clamp(40px,5vw,70px);
        }

        .fluid-p{
          font-size:clamp(15px,1.5vw,17px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[22px] sm:py-[26px] transition-all duration-500">

        <div className="max-w-[1800px] mx-auto px-[16px] sm:px-[24px] lg:px-[36px]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] sm:gap-[22px]">

            {/* IMAGE 1 */}
            <div
              className="fade-up card-hover relative bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[18px] overflow-hidden min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px]"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="img-box">
                <img src={visionImg} alt="Our Vision" loading="lazy" />
              </div>
            </div>

            {/* VISION */}
            <div
              className="fade-up card-hover rounded-[18px] min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px] p-[22px] sm:p-[32px] lg:p-[42px] flex flex-col justify-center"
              style={{ transitionDelay: "0.2s" }}
            >
              <h2 className="text-black dark:text-white fluid-heading leading-[0.96] font-semibold tracking-[-0.04em]">
                Our Vision
              </h2>

              <p className="mt-[18px] text-black/75 dark:text-white/70 fluid-p leading-[1.9] max-w-[620px] text-reveal">
                {"To become a globally trusted digital agency delivering high-quality web development, eCommerce, and marketing solutions for clients in UAE, UK, USA, and Pakistan."
                  .split(" ")
                  .map((word, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.02}s` }}>
                      {word}&nbsp;
                    </span>
                  ))}
              </p>
            </div>

            {/* MISSION */}
            <div
              className="fade-up card-hover rounded-[18px] min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px] p-[22px] sm:p-[32px] lg:p-[42px] flex flex-col justify-center order-4 md:order-3"
              style={{ transitionDelay: "0.3s" }}
            >
              <h2 className="text-black dark:text-white fluid-heading leading-[0.96] font-semibold tracking-[-0.04em]">
                Our Mission
              </h2>

              <p className="mt-[18px] text-black/75 dark:text-white/70 fluid-p leading-[1.9] max-w-[620px] text-reveal">
                {"Our mission is to provide premium digital services including Shopify, branding, ads, and UI UX at affordable pricing so businesses can scale faster with impactful and result-driven solutions."
                  .split(" ")
                  .map((word, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.02}s` }}>
                      {word}&nbsp;
                    </span>
                  ))}
              </p>
            </div>

            {/* IMAGE 2 */}
            <div
              className="fade-up card-hover relative bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[18px] overflow-hidden min-h-[340px] sm:min-h-[430px] md:h-[500px] lg:h-[540px] xl:h-[580px] order-3 md:order-4"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="img-box">
                <img src={missionImg} alt="Our Mission" loading="lazy" />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}