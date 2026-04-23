import person from "../../assets/hero-person.png";
import pattern from "../../assets/hero-pattern.png";

export default function Hero() {
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

        .ticker-wrap{
          width:100%;
          overflow:hidden;
          white-space:nowrap;
        }

        .ticker-track{
          display:flex;
          width:max-content;
          animation:tickerMove 18s linear infinite;
        }

        .ticker-item{
          font-size:26px;
          font-weight:600;
          color:#fff;
          padding-right:70px;
          white-space:nowrap;
        }

        @keyframes tickerMove{
          from{transform:translateX(0);}
          to{transform:translateX(-50%);}
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
        ></div>

        {/* HERO */}
        <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-[130px] md:pt-[150px] pb-[40px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 xl:gap-20">

            {/* LEFT */}
            <div className="max-w-[760px]">

              <h1 className="text-black dark:text-white font-black leading-[0.9] tracking-[-2px] text-[46px] sm:text-[60px] md:text-[78px] xl:text-[98px] transition-all duration-500">
                Build Your
              </h1>

              <h2 className="relative inline-block text-black dark:text-white font-black leading-[0.92] tracking-[-1px] text-[34px] sm:text-[48px] md:text-[58px] xl:text-[66px] mt-1 transition-all duration-500">
                <span className="relative z-10">
                  Brand Beyond Limits
                </span>

                <span className="absolute left-0 right-0 bottom-[4px] h-[8px] md:h-[10px] bg-[#0a8fff] z-0"></span>
              </h2>

              <p className="mt-6 md:mt-7 text-[#555] dark:text-white/70 text-[16px] md:text-[18px] leading-[1.8] max-w-[620px] transition-all duration-500">
                Transforming ideas into powerful brand identities,
                engaging websites, and meaningful digital interactions
                that drive real growth.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 md:mt-9 flex gap-4 flex-wrap">

                <a
                  href="#"
                  className="h-[54px] px-7 md:px-8 rounded-full bg-[#0a8fff] text-white text-[16px] md:text-[17px] font-medium inline-flex items-center hover:scale-[1.03] duration-300"
                >
                  Explore Our Work
                </a>

                <a
                  href="#"
                  className="h-[54px] px-7 md:px-8 rounded-full border border-black dark:border-white text-black dark:text-white text-[16px] md:text-[17px] font-medium inline-flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
                >
                  Start Your Project

                  <span className="text-[18px] leading-none font-normal">
                    ↗
                  </span>
                </a>

              </div>

              {/* STATS */}
              <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-[650px]">

                <div>
                  <h3 className="text-[42px] md:text-[58px] font-bold leading-none text-black dark:text-white">
                    120+
                  </h3>
                  <p className="mt-2 text-[16px] md:text-[17px] text-[#555] dark:text-white/70">
                    Project Delivered
                  </p>
                </div>

                <div>
                  <h3 className="text-[42px] md:text-[58px] font-bold leading-none text-black dark:text-white">
                    98%
                  </h3>
                  <p className="mt-2 text-[16px] md:text-[17px] text-[#555] dark:text-white/70">
                    Client Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-[42px] md:text-[58px] font-bold leading-none text-black dark:text-white">
                    15+
                  </h3>
                  <p className="mt-2 text-[16px] md:text-[17px] text-[#555] dark:text-white/70">
                    Years Experience
                  </p>
                </div>

              </div>

              {/* FEEDBACK */}
              <div className="mt-8 md:mt-10 flex items-center gap-4">

                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    className="w-11 h-11 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    className="w-11 h-11 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=15"
                    className="w-11 h-11 rounded-full border-2 border-white object-cover"
                  />
                </div>

                <p className="text-[15px] md:text-[16px] text-black dark:text-white">
                  <span className="font-semibold">1k+</span> Positive feedback
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">

              {/* ROTATING BADGE */}
              <div className="absolute left-[2%] md:left-[5%] top-[45%] md:top-[50%] z-20">

                <div className="relative w-[120px] h-[120px] md:w-[175px] md:h-[175px]">

                  <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-full h-full circle-spin"
                  >
                    <defs>
                      <path
                        id="circleTextPath"
                        d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
                      />
                    </defs>

                    <text
                      fill="currentColor"
                      className="text-black dark:text-white"
                      fontSize="14"
                      fontWeight="700"
                      letterSpacing="1.5"
                    >
                      <textPath href="#circleTextPath">
                        SOCIAL X STUDIO ✦ CREATIVE ✦ DIGITAL ✦
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute inset-[28px] md:inset-[36px] rounded-full bg-[#0a8fff]"></div>

                </div>

              </div>

              {/* IMAGE */}
              <img
                src={person}
                alt="Hero Person"
                className="relative z-10 w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[620px] xl:max-w-[760px] object-contain hover:translate-y-[-4px] duration-500"
              />

              {/* GRID SHAPE */}
              <div className="absolute bottom-[6%] right-[4%] w-[140px] h-[140px] md:w-[220px] md:h-[220px] opacity-20 bg-[linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)] bg-[size:28px_28px]"></div>

            </div>

          </div>
        </div>

        {/* BLUE STRIP */}
      {/* BLUE STRIP */}
<div className="bg-[#0a8fff] h-[64px] md:h-[72px] flex items-center overflow-hidden">

  <style>
    {`
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
        from{
          transform:translateX(0);
        }
        to{
          transform:translateX(-50%);
        }
      }
    `}
  </style>

  <div className="marquee-single">

    <span>
      TYPOGRAPHY ✦ DESIGN ✦ INTERACTION ✦ DIGITAL SOLUTION ✦ STRATEGY ✦ BRANDING ✦ AGENCY ✦
      TYPOGRAPHY ✦ DESIGN ✦ INTERACTION ✦ DIGITAL SOLUTION ✦ STRATEGY ✦ BRANDING ✦ AGENCY ✦
      TYPOGRAPHY ✦ DESIGN ✦ INTERACTION ✦ DIGITAL SOLUTION ✦ STRATEGY ✦ BRANDING ✦ AGENCY ✦
      TYPOGRAPHY ✦ DESIGN ✦ INTERACTION ✦ DIGITAL SOLUTION ✦ STRATEGY ✦ BRANDING ✦ AGENCY ✦
    </span>

  </div>

</div>

      </section>
    </>
  );
}