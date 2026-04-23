export default function BlogDetailsHero() {
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

      <section className="bg-[#efefef] dark:bg-[#111111] py-[clamp(42px,8vw,70px)] transition-all duration-500">

        {/* HEADER ALIGNED */}
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* TITLE AREA */}
          <div className="max-w-[1150px] mx-auto text-center">

            <h1 className="fade-up text-[clamp(34px,8vw,78px)] leading-[0.98] tracking-[-0.04em] font-semibold text-black dark:text-white transition-all duration-500">
              The Power of Strong
              <br className="hidden sm:block" />
              Branding Strategy
            </h1>

            <p className="fade-up mt-[clamp(18px,4vw,34px)] text-[clamp(15px,2.5vw,22px)] leading-[1.75] text-black/70 dark:text-white/70 max-w-[920px] mx-auto transition-all duration-500">
              We are a forward-thinking digital agency focused on delivering
              strategic design, innovative solutions, and measurable results.
              Our team blends creativity with technology to.
            </p>

            {/* AUTHOR META */}
            <div className="fade-up mt-[clamp(22px,4vw,34px)] flex flex-wrap items-center justify-center gap-x-[14px] gap-y-[12px] text-[clamp(14px,2vw,18px)] text-black/60 dark:text-white/60 transition-all duration-500">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                alt="Author"
                className="w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full object-cover"
              />

              <span className="text-black dark:text-white">
                Rashid Minhas
              </span>

              <span className="hidden sm:inline">•</span>

              <span>March 26, 2026</span>

              <span className="hidden sm:inline">•</span>

              <span>3 Comments</span>

            </div>

          </div>

          {/* FEATURE IMAGE */}
          <div className="fade-up mt-[clamp(30px,6vw,62px)] img-wrap rounded-[14px]">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
              alt="Blog Cover"
              className="w-full h-[clamp(240px,55vw,780px)] object-cover rounded-[14px]"
            />

          </div>

        </div>

      </section>
    </>
  );
}