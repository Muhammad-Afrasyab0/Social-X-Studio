export default function BlogDetailsHero() {
  return (
    <section className="bg-[#efefef] dark:bg-[#111111] py-[70px] transition-all duration-500">

      {/* HEADER ALIGNED */}
      <div className="max-w-[1900px] mx-auto px-[3px]">

        <div className="px-[42px]">

          {/* TITLE AREA */}
          <div className="max-w-[1150px] mx-auto text-center">

            <h1 className="text-[78px] leading-[0.98] tracking-[-2px] font-semibold text-black dark:text-white transition-all duration-500">
              The Power of Strong
              <br />
              Branding Strategy
            </h1>

            <p className="mt-[34px] text-[22px] leading-[1.75] text-black/70 dark:text-white/70 transition-all duration-500">
              We are a forward-thinking digital agency focused on delivering
              strategic design, innovative solutions, and measurable results.
              Our team blends creativity with technology to.
            </p>

            {/* AUTHOR META */}
            <div className="mt-[34px] flex items-center justify-center gap-[18px] text-[18px] text-black/60 dark:text-white/60">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                alt="Author"
                className="w-[46px] h-[46px] rounded-full object-cover"
              />

              <span className="text-black dark:text-white">
                Rashid Minhas
              </span>

              <span>•</span>

              <span>March 26, 2026</span>

              <span>•</span>

              <span>3 Comments</span>

            </div>

          </div>

          {/* FEATURE IMAGE */}
          <div className="mt-[62px]">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
              alt="Blog Cover"
              className="w-full h-[780px] object-cover rounded-[10px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}