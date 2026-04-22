import person from "../../assets/hero-person.png";
import pattern from "../../assets/hero-pattern.png";

export default function Hero() {
  return (
    <>
      <style>
        {`
        .circle-spin{
          animation: spinCircle 10s linear infinite;
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
          font-size:28px;
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
        <div className="relative max-w-[1900px] mx-auto px-6 md:px-12 pt-[145px] pb-[30px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* LEFT */}
            <div className="max-w-[760px]">

              <h1 className="text-black dark:text-white font-black leading-[0.88] tracking-[-3px] text-[72px] md:text-[98px] transition-all duration-500">
                Build Your
              </h1>

              <h2 className="relative inline-block text-black dark:text-white font-black leading-[0.92] tracking-[-2px] text-[44px] md:text-[66px] mt-1 z-10 transition-all duration-500">
                <span className="relative z-10">
                  Brand Beyond Limits
                </span>

                <span className="absolute left-0 right-0 bottom-[2px] h-[10px] bg-[#0a8fff] z-0"></span>
              </h2>

              <p className="mt-7 text-[#555] dark:text-white/70 text-[18px] leading-[1.8] max-w-[620px] transition-all duration-500">
                Transforming ideas into powerful brand identities,
                engaging websites, and meaningful digital interactions
                that drive real growth.
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex gap-4 flex-wrap">

                <a
                  href="#"
                  className="h-[56px] px-8 rounded-full bg-[#0a8fff] text-white text-[17px] font-medium inline-flex items-center"
                >
                  Explore Our Work
                </a>

                <a
                  href="#"
                  className="h-[56px] px-8 rounded-full border border-black dark:border-white text-black dark:text-white text-[17px] font-medium inline-flex items-center gap-2 transition-all duration-500"
                >
                  Start Your Project

                  <span className="text-[18px] leading-none font-normal">
                    ↗
                  </span>
                </a>

              </div>

              {/* STATS */}
              <div className="mt-14 grid grid-cols-3 gap-8 max-w-[650px]">

                <div>
                  <h3 className="text-[58px] font-bold leading-none text-black dark:text-white">
                    120+
                  </h3>
                  <p className="mt-2 text-[17px] text-[#555] dark:text-white/70">
                    Project Delivered
                  </p>
                </div>

                <div>
                  <h3 className="text-[58px] font-bold leading-none text-black dark:text-white">
                    98%
                  </h3>
                  <p className="mt-2 text-[17px] text-[#555] dark:text-white/70">
                    Client Satisfaction Rate
                  </p>
                </div>

                <div>
                  <h3 className="text-[58px] font-bold leading-none text-black dark:text-white">
                    15+
                  </h3>
                  <p className="mt-2 text-[17px] text-[#555] dark:text-white/70">
                    Years Of Experience
                  </p>
                </div>

              </div>

              {/* FEEDBACK */}
              <div className="mt-10 flex items-center gap-4">

                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=12" className="w-11 h-11 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=32" className="w-11 h-11 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=15" className="w-11 h-11 rounded-full border-2 border-white object-cover" />
                </div>

                <p className="text-[16px] text-black dark:text-white">
                  <span className="font-semibold">1k+</span> Positive feedback
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">

              <div className="absolute left-[7%] top-[53%] z-20">

                <div className="relative w-[175px] h-[175px]">

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
                        Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute inset-[36px] rounded-full bg-[#0a8fff]"></div>

                </div>

              </div>

              <img
                src={person}
                alt="Hero Person"
                className="relative z-10 w-full max-w-[760px] object-contain"
              />

              <div className="absolute bottom-[6%] right-[4%] w-[220px] h-[220px] opacity-20 bg-[linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)] bg-[size:28px_28px]"></div>

            </div>

          </div>
        </div>

        {/* BLUE STRIP */}
        <div className="bg-[#0a8fff] h-[72px] flex items-center">

          <div className="ticker-wrap">
            <div className="ticker-track">

              <div className="ticker-item">
                TYPOGRAPHY ✦ DESIGN ✦ INTERACTION ✦ DIGITAL SOLUTION ✦ STRATEGY ✦ BRANDING ✦ AGENCY ✦
              </div>

              <div className="ticker-item">
                TYPOGRAPHY ✦ DESIGN ✦ INTERACTION ✦ DIGITAL SOLUTION ✦ STRATEGY ✦ BRANDING ✦ AGENCY ✦
              </div>

            </div>
          </div>

        </div>

      </section>
    </>
  );
}