import { useEffect, useState } from "react";
import person from "../../assets/hero-person.png";
import pattern from "../../assets/hero-pattern.png";

import Reveal from "../../components/animations/Reveal";
import CountUp from "../../components/animations/CountUp";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
        .circle-spin{
          animation: spinCircle 12s linear infinite;
          transform-origin:center;
        }

        @keyframes spinCircle{
          from{transform:rotate(0deg);}
          to{transform:rotate(360deg);}
        }

        .hero-fade-up{
          opacity:0;
          transform:translateY(36px);
          transition:all .9s cubic-bezier(.22,1,.36,1);
        }

        .hero-fade-up.show{
          opacity:1;
          transform:translateY(0);
        }

        .hero-fade-right{
          opacity:0;
          transform:translateX(40px);
          transition:all 1s cubic-bezier(.22,1,.36,1);
        }

        .hero-fade-right.show{
          opacity:1;
          transform:translateX(0);
        }

        .float-soft{
          animation: floatSoft 4s ease-in-out infinite;
        }

        @keyframes floatSoft{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-10px);}
        }

        /* 🔥 PREMIUM HEADING ANIMATION (SLOW) */
        .heading-anim span{
          opacity:0;
          transform:translateY(30px);
          display:inline-block;
          animation:headingReveal 0.9s cubic-bezier(.22,1,.36,1) forwards;
        }

        @keyframes headingReveal{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .marquee-single{
          white-space: nowrap;
          display: inline-block;
          min-width: 200%;
          animation: smoothTicker 22s linear infinite;
        }

        .marquee-single span{
          display:inline-block;
          font-size:26px;
          font-weight:600;
          color:#fff;
          padding-right:55px;
        }

        @keyframes smoothTicker{
          from{transform:translateX(0);}
          to{transform:translateX(-50%);}
        }

        @media (max-width:1024px){
          .marquee-single span{
            font-size:20px;
            padding-right:38px;
          }
        }

        @media (max-width:640px){
          .marquee-single span{
            font-size:16px;
            padding-right:28px;
          }
        }
        `}
      </style>

      <section className="relative overflow-hidden bg-[#eef3f7] dark:bg-[#111111] transition-all duration-500">

        {/* PATTERN */}
        <div
          className="absolute inset-0 opacity-100 dark:opacity-10"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "180px auto",
            backgroundPosition: "top left",
          }}
        />

        {/* HERO */}
        <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-[118px] sm:pt-[128px] md:pt-[145px] xl:pt-[150px] pb-[40px] sm:pb-[50px] md:pb-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 xl:gap-20">

            {/* LEFT */}
            <div className={`max-w-[760px] hero-fade-up ${mounted ? "show" : ""}`}>

              {/* 🔥 SAME TEXT — ONLY ANIMATION ADDED */}
              <Reveal>
                <h1 className="heading-anim text-black dark:text-white font-black leading-[0.9] tracking-[-2px] text-[42px] xs:text-[48px] sm:text-[60px] md:text-[78px] xl:text-[98px] transition-all duration-500">
                  {"Build Your".split(" ").map((word, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                      {word}&nbsp;
                    </span>
                  ))}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="relative inline-block text-black dark:text-white font-black leading-[0.92] tracking-[-1px] text-[30px] xs:text-[34px] sm:text-[48px] md:text-[58px] xl:text-[66px] mt-1 transition-all duration-500">
                  <span className="relative z-10 heading-anim">
                    {"Brand Beyond Limits".split(" ").map((word, i) => (
                      <span key={i} style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                        {word}&nbsp;
                      </span>
                    ))}
                  </span>
                  <span className="absolute left-0 right-0 bottom-[4px] h-[7px] md:h-[10px] bg-[#0a8fff] z-0"></span>
                </h2>
              </Reveal>

              {/* 🔥 SEO PARAGRAPH UPDATED (ONLY THIS TEXT CHANGED) */}
              <Reveal delay={0.2}>
                <p className="mt-5 md:mt-7 text-[#555] dark:text-white/70 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.8] max-w-[620px] transition-all duration-500">
                  We are a digital agency from Pakistan serving clients in UAE, UK, and USA. Transforming ideas into powerful brand identities, engaging websites, and meaningful digital experiences that drive real growth.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-8 md:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
                  <a href="/portfolio" className="h-[54px] px-7 md:px-8 rounded-full bg-[#0a8fff] text-white text-[16px] md:text-[17px] font-medium inline-flex justify-center items-center hover:scale-[1.03] duration-300">
                    Explore Our Work
                  </a>

                  <a href="/contact" className="h-[54px] px-7 md:px-8 rounded-full border border-black dark:border-white text-black dark:text-white text-[16px] md:text-[17px] font-medium inline-flex justify-center items-center gap-2 hover:scale-[1.03] transition-all duration-300">
                    Start Your Project
                    <span className="text-[18px] leading-none font-normal">↗</span>
                  </a>
                </div>
              </Reveal>

              {/* STATS — UNTOUCHED */}
              <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-[650px]">
                <Reveal delay={0.4}>
                  <div>
                    <h3 className="text-[34px] sm:text-[42px] md:text-[58px] font-bold leading-none text-black dark:text-white">
                      <CountUp end={120} suffix="+" />
                    </h3>
                    <p className="mt-2 text-[14px] md:text-[17px] text-[#555] dark:text-white/70">
                      Project Delivered
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.5}>
                  <div>
                    <h3 className="text-[34px] sm:text-[42px] md:text-[58px] font-bold leading-none text-black dark:text-white">
                      <CountUp end={98} suffix="%" />
                    </h3>
                    <p className="mt-2 text-[14px] md:text-[17px] text-[#555] dark:text-white/70">
                      Client Satisfaction
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.6}>
                  <div className="col-span-2 sm:col-span-1">
                    <h3 className="text-[34px] sm:text-[42px] md:text-[58px] font-bold leading-none text-black dark:text-white">
                      <CountUp end={15} suffix="+" />
                    </h3>
                    <p className="mt-2 text-[14px] md:text-[17px] text-[#555] dark:text-white/70">
                      Years Experience
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.7}>
                <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white object-cover" />
                    <img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white object-cover" />
                    <img src="https://i.pravatar.cc/100?img=15" className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white object-cover" />
                  </div>
                  <p className="text-[14px] md:text-[16px] text-black dark:text-white">
                    <span className="font-semibold">1k+</span> Positive feedback
                  </p>
                </div>
              </Reveal>

            </div>

            {/* RIGHT — UNTOUCHED */}
            <Reveal delay={0.3}>
              <div className={`relative flex justify-center lg:justify-end mt-2 lg:mt-0 hero-fade-right ${mounted ? "show" : ""}`}>
                
                <div className="absolute left-[0%] sm:left-[5%] top-[38%] sm:top-[42%] md:top-[45%] z-20 float-soft">
                  <div className="relative w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[175px] md:h-[175px]">
                    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full circle-spin">
                      <defs>
                        <path id="circleTextPath" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
                      </defs>
                      <text fill="currentColor" className="text-black dark:text-white" fontSize="14" fontWeight="700" letterSpacing="1.5">
                        <textPath href="#circleTextPath">
                          SOCIAL X STUDIO ✦ CREATIVE ✦ DIGITAL ✦ SOCIAL X STUDIO ✦
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-[24px] md:inset-[36px] rounded-full bg-[#0a8fff]" />
                  </div>
                </div>

                <img src={person} alt="Hero Person" className="relative z-10 w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[620px] xl:max-w-[760px] object-contain hover:translate-y-[-4px] duration-500" />

                <div className="absolute bottom-[6%] right-[2%] sm:right-[4%] w-[110px] h-[110px] md:w-[220px] md:h-[220px] opacity-20 bg-[linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)] bg-[size:28px_28px]" />
              </div>
            </Reveal>

          </div>
        </div>

        {/* 🔥 STRIP FIXED (FULL LOOP — SAME AS YOUR ORIGINAL) */}
       
       <div className="bg-[#0a8fff] h-[56px] sm:h-[64px] md:h-[72px] flex items-center overflow-hidden"> 
        <div className="marquee-single"> 
          <span 
          className="tracking-wide whitespace-nowrap">
           TYPOGRAPHY &nbsp;&nbsp;✦&nbsp;&nbsp; DESIGN &nbsp;&nbsp;✦&nbsp;&nbsp; INTERACTION &nbsp;&nbsp;✦&nbsp;&nbsp;
            DIGITAL SOLUTION &nbsp;&nbsp;✦&nbsp;&nbsp; STRATEGY &nbsp;&nbsp;✦&nbsp;&nbsp; BRANDING &nbsp;&nbsp;✦&nbsp;&nbsp;
             AGENCY &nbsp;&nbsp;✦&nbsp;&nbsp; TYPOGRAPHY &nbsp;&nbsp;✦&nbsp;&nbsp; DESIGN &nbsp;&nbsp;✦&nbsp;&nbsp; INTERACTION
              &nbsp;&nbsp;✦&nbsp;&nbsp; DIGITAL SOLUTION &nbsp;&nbsp;✦&nbsp;&nbsp; STRATEGY &nbsp;&nbsp;✦&nbsp;&nbsp;
               BRANDING &nbsp;&nbsp;✦&nbsp;&nbsp; AGENCY &nbsp;&nbsp;✦&nbsp;&nbsp; TYPOGRAPHY &nbsp;&nbsp;✦&nbsp;&nbsp;
                DESIGN &nbsp;&nbsp;✦&nbsp;&nbsp; INTERACTION &nbsp;&nbsp;✦&nbsp;&nbsp; 
         </span>
                 </div>
                  </div>

      </section>
    </>
  );
}