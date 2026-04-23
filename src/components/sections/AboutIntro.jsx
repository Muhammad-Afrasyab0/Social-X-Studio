import logo from "../../assets/x.png";

export default function WhoWeAre() {
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
        {/* Header aligned container */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px] lg:gap-[52px] items-start">

            {/* LEFT */}
            <div className="fade-up">

              <p className="text-[15px] sm:text-[18px] font-semibold text-black dark:text-white mb-[20px] sm:mb-[26px]">
                Who We Are
              </p>

              <h2 className="text-black dark:text-white text-[34px] sm:text-[48px] lg:text-[58px] leading-[1.06] font-semibold tracking-[-1.8px] max-w-[620px]">
                We create strategic designs and innovative solutions that help brands stand out.
              </h2>

              <p className="mt-[26px] text-black/75 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.85] max-w-[620px]">
                We are a forward-thinking digital agency focused on delivering strategic
                design, innovative solutions, and measurable results. Our team blends
                creativity with technology to build brands that stand out in a competitive
                world.We are a forward-thinking digital agency focused on delivering
                strategic design, innovative solutions, and measurable results. Our team
                blends creativity with technology to build brands that stand out in a
                competitive world.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div
              className="fade-up relative"
              style={{ animationDelay: "140ms" }}
            >
              {/* circle logo */}
              <div className="absolute z-20 left-[-18px] top-[-34px] sm:left-[-28px] sm:top-[-38px]">
                <img
                  src={logo}
                  alt="Logo"
                  className="float-logo w-[95px] sm:w-[120px] lg:w-[150px] object-contain"
                />
              </div>

              {/* image */}
              <div className="img-hover rounded-[18px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                  alt="Marketing Building"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[430px] object-cover"
                />
              </div>
            </div>

          </div>

          {/* BOTTOM TEXT BLOCKS */}
          <div className="mt-[44px] sm:mt-[58px] lg:mt-[70px] space-y-[26px] sm:space-y-[34px]">

            <p
              className="fade-up text-black/70 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.9]"
              style={{ animationDelay: "220ms" }}
            >
              We are a forward-thinking digital agency focused on delivering strategic design,
              innovative solutions, and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive world.We are a
              forward-thinking digital agency focused on delivering strategic design,
              innovative solutions, and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive world.
            </p>

            <p
              className="fade-up text-black/70 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.9]"
              style={{ animationDelay: "300ms" }}
            >
              We are a forward-thinking digital agency focused on delivering strategic design,
              innovative solutions, and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive world.We are a
              forward-thinking digital agency focused on delivering strategic design,
              innovative solutions, and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive world.We are a
              forward-thinking digital agency focused on delivering strategic design,
              innovative solutions, and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive world.
            </p>

            <p
              className="fade-up text-black/70 dark:text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.9]"
              style={{ animationDelay: "380ms" }}
            >
              We are a forward-thinking digital agency focused on delivering strategic design,
              innovative solutions, and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive world.We are a
              forward-thinking digital agency focused on delivering strategic design,
              innovative solutions, and measurable results. Our team blends creativity with
              technology to build brands that stand out in a competitive world.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}