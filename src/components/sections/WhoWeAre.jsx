import { useEffect } from "react";
import logo from "../../assets/x.png";

export default function WhoWeAre() {

  useEffect(() => {
    const lines = document.querySelectorAll(".line");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 80); // smoother stagger
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
        /* LINE REVEAL (PREMIUM SMOOTH) */
        .line-mask{
          display:block;
          overflow:hidden;
        }

        .line{
          display:block;
          transform:translateY(120%);
          opacity:0;
          transition:all .9s cubic-bezier(.22,1,.36,1);
          will-change: transform, opacity;
        }

        .line.show{
          transform:translateY(0);
          opacity:1;
        }

        /* IMAGE HOVER */
        .img-hover img{
          transition:transform .7s cubic-bezier(.22,1,.36,1);
        }

        .img-hover:hover img{
          transform:scale(1.04);
        }

        /* FLOAT LOGO */
        .float-logo{
          animation:floatLogo 6s ease-in-out infinite;
        }

        @keyframes floatLogo{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }

        /* LIQUID RESPONSIVE (NO LAYOUT CHANGE) */
        .fluid-text{
          font-size:clamp(34px,5vw,58px);
        }

        .fluid-p{
          font-size:clamp(15px,1.5vw,18px);
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

              {/* ✅ SEO HEADING */}
              <h2 className="text-black dark:text-white fluid-text leading-[1.06] font-semibold tracking-[-1.8px] max-w-[620px]">

                <span className="line-mask">
                  <span className="line">
                    Digital agency delivering web development,
                  </span>
                </span>

                <span className="line-mask">
                  <span className="line">
                    eCommerce, marketing & creative solutions
                  </span>
                </span>

                <span className="line-mask">
                  <span className="line">
                    for global brands.
                  </span>
                </span>

              </h2>

              {/* ✅ SEO PARAGRAPH */}
              <p className="mt-[26px] text-black/75 dark:text-white/70 fluid-p leading-[1.85] max-w-[620px]">

                <span className="line-mask">
                  <span className="line">
                    We are a team of experienced professionals specializing in web development,
                  </span>
                </span>

                <span className="line-mask">
                  <span className="line">
                    Shopify, eCommerce, social media marketing, paid ads, and video production.
                  </span>
                </span>

                <span className="line-mask">
                  <span className="line">
                    Delivering premium quality solutions for clients in UAE, UK, USA & Pakistan.
                  </span>
                </span>

              </p>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute z-20 left-[-18px] top-[-34px] sm:left-[-28px] sm:top-[-38px]">
                <img
                  src={logo}
                  alt="Digital Agency Logo"
                  className="float-logo w-[95px] sm:w-[120px] lg:w-[150px] object-contain"
                  loading="lazy"
                />
              </div>

              <div className="img-hover rounded-[18px] overflow-hidden">
                <img
                  src="../../assets/whoweare"
                  alt="Web development and digital marketing agency workspace"
                  loading="lazy"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[430px] object-cover"
                />
              </div>

            </div>

          </div>

          {/* BOTTOM (SEO IMPROVED) */}
          <div className="mt-[44px] sm:mt-[58px] lg:mt-[70px] space-y-[26px] sm:space-y-[34px]">

            <p className="text-black/70 dark:text-white/70 fluid-p leading-[1.9]">
              <span className="line-mask">
                <span className="line">
                  Our mission is to provide high-quality digital services at reasonable pricing.
                </span>
              </span>
            </p>

            <p className="text-black/70 dark:text-white/70 fluid-p leading-[1.9]">
              <span className="line-mask">
                <span className="line">
                  Helping startups and businesses grow through scalable web solutions and branding.
                </span>
              </span>
            </p>

            <p className="text-black/70 dark:text-white/70 fluid-p leading-[1.9]">
              <span className="line-mask">
                <span className="line">
                  We combine strategy, design, and technology to deliver real business results globally.
                </span>
              </span>
            </p>

          </div>

        </div>
      </section>
    </>
  );
}