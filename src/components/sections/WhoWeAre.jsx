import { useEffect } from "react";
import logo from "../../assets/x.png";

export default function WhoWeAre() {

  useEffect(() => {
    const lines = document.querySelectorAll(".line");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    lines.forEach((line) => observer.observe(line));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
        /* LINE REVEAL */
        .line-mask{
          display:block;
          overflow:hidden;
        }

        .line{
          display:block;
          transform:translateY(120%);
          opacity:0;
          transition:all .8s cubic-bezier(.22,1,.36,1);
        }

        .line.show{
          transform:translateY(0);
          opacity:1;
        }

        /* IMAGE EFFECTS */
        .img-hover img{
          transition:transform .7s ease;
        }

        .img-hover:hover img{
          transform:scale(1.03);
        }

        .float-logo{
          animation:floatLogo 6s ease-in-out infinite;
        }

        @keyframes floatLogo{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-7px);}
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[70px] sm:py-[85px] lg:py-[95px] transition-all duration-500 overflow-hidden">

        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px] lg:gap-[52px] items-start">

            {/* LEFT */}
            <div>

              <p className="text-[15px] sm:text-[18px] font-semibold text-black dark:text-white mb-[20px] sm:mb-[26px]">
                Who We Are
              </p>

              <h2 className="text-black dark:text-white text-[34px] sm:text-[48px] lg:text-[58px] leading-[1.06] font-semibold tracking-[-1.8px] max-w-[620px]">

                <span className="line-mask">
                  <span className="line">We create strategic designs</span>
                </span>

                <span className="line-mask">
                  <span className="line">and innovative solutions</span>
                </span>

                <span className="line-mask">
                  <span className="line">that help brands stand out.</span>
                </span>

              </h2>

              <p className="mt-[26px] text-black/75 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.85] max-w-[620px]">

                <span className="line-mask">
                  <span className="line">We are a forward-thinking digital agency focused</span>
                </span>

                <span className="line-mask">
                  <span className="line">on delivering strategic design, innovative solutions,</span>
                </span>

                <span className="line-mask">
                  <span className="line">and measurable results.</span>
                </span>

              </p>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute z-20 left-[-18px] top-[-34px] sm:left-[-28px] sm:top-[-38px]">
                <img
                  src={logo}
                  alt="Logo"
                  className="float-logo w-[95px] sm:w-[120px] lg:w-[150px] object-contain"
                />
              </div>

              <div className="img-hover rounded-[18px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                  alt="Marketing Building"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[430px] object-cover"
                />
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-[44px] sm:mt-[58px] lg:mt-[70px] space-y-[26px] sm:space-y-[34px]">

            <p className="text-black/70 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.9]">
              <span className="line-mask">
                <span className="line">
                  We are a forward-thinking digital agency focused on delivering strategic design,
                </span>
              </span>
            </p>

            <p className="text-black/70 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.9]">
              <span className="line-mask">
                <span className="line">
                  innovative solutions, and measurable results. Our team blends creativity with technology.
                </span>
              </span>
            </p>

            <p className="text-black/70 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.9]">
              <span className="line-mask">
                <span className="line">
                  to build brands that stand out in a competitive world.
                </span>
              </span>
            </p>

          </div>

        </div>
      </section>
    </>
  );
}