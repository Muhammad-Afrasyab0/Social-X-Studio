import image1 from "../../assets/brandimage.png";

export default function BrandIdentityOverview() {
  const items = [
    { title: "Client", value: "Company Name" },
    { title: "Project", value: "Website Redesign" },
    { title: "Duration", value: "Mar 15-Feb 20, 2026" },
    { title: "Company Size", value: "50+ Employees" },
  ];

  return (
    <>
      <style>
        {`
        .fade-up{
          opacity:0;
          transform:translateY(22px);
          animation:fadeUp .8s ease forwards;
        }

        @keyframes fadeUp{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .img-wrap{
          overflow:hidden;
        }

        .img-wrap img{
          transition:transform .8s ease;
        }

        .img-wrap:hover img{
          transform:scale(1.03);
        }
        `}
      </style>

      <section className="bg-[#efefef] dark:bg-[#111111] py-[clamp(44px,8vw,70px)] transition-all duration-500">
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* ===================================== */}
          {/* TOP INFO */}
          {/* ===================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-[clamp(18px,3vw,40px)] gap-y-[clamp(22px,4vw,30px)] pb-[clamp(22px,4vw,26px)] border-b border-black/10 dark:border-white/10">

            {items.map((item, index) => (
              <div
                key={index}
                className="fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <h4 className="text-[clamp(26px,5vw,34px)] leading-none font-medium text-black dark:text-white transition-all duration-500">
                  {item.title}
                </h4>

                <p className="mt-[10px] text-[clamp(15px,2vw,18px)] text-black/45 dark:text-white/45 transition-all duration-500">
                  {item.value}
                </p>
              </div>
            ))}

          </div>

          {/* ===================================== */}
          {/* OVERVIEW */}
          {/* ===================================== */}
          <div className="pt-[clamp(34px,6vw,62px)]">

            <h2 className="fade-up text-[clamp(38px,8vw,64px)] font-semibold leading-[0.96] tracking-[-0.04em] text-black dark:text-white transition-all duration-500">
              Overview
            </h2>

            <p className="fade-up mt-[clamp(18px,4vw,34px)] max-w-[1650px] text-[clamp(16px,2.5vw,22px)] leading-[1.75] text-black/75 dark:text-white/70 transition-all duration-500">
              We are a forward-thinking digital agency focused on delivering
              strategic design, innovative solutions, and measurable results.
              Our team blends creativity with technology to build brands that
              stand out in a competitive world. We are a forward-thinking
              digital agency.
            </p>

            <p className="fade-up mt-[clamp(18px,3vw,28px)] max-w-[1650px] text-[clamp(16px,2.5vw,22px)] leading-[1.75] text-black/75 dark:text-white/70 transition-all duration-500">
              We focus on delivering strategic design, innovative solutions,
              and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive
              world. We are a forward-thinking digital agency focused on
              delivering strategic design, innovative solutions, and
              measurable results.
            </p>

            {/* IMAGE */}
            <div className="fade-up mt-[clamp(28px,5vw,48px)] rounded-[14px] overflow-hidden img-wrap">

              <img
                src={image1}
                alt="Project Preview"
                className="w-full h-[clamp(240px,52vw,620px)] object-cover"
              />

            </div>

          </div>

        </div>
      </section>
    </>
  );
}