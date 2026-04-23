export default function SolutionsProjectsSection() {
  return (
    <section className="bg-[#efefef] dark:bg-[#111111] py-[70px] transition-all duration-500">

      {/* HEADER ALIGNED */}
      <div className="max-w-[1900px] mx-auto px-[3px]">

        <div className="px-[42px]">

          {/* SOLUTIONS */}
          <div>

            <h2 className="text-[58px] leading-none font-semibold tracking-[-1.5px] text-black dark:text-white transition-all duration-500">
              Solutions
            </h2>

            <p className="mt-[28px] max-w-[1760px] text-[22px] leading-[1.8] text-black/70 dark:text-white/70 transition-all duration-500">
              We are a forward-thinking digital agency focused on delivering
              strategic design, innovative solutions, and measurable results.
              Our team blends creativity with technology to build brands that
              stand out in a competitive world.
            </p>

            <p className="mt-[28px] max-w-[1760px] text-[22px] leading-[1.8] text-black/70 dark:text-white/70 transition-all duration-500">
              We are a forward-thinking digital agency focused on delivering
              strategic design, innovative solutions, and measurable results.
              Our team blends creativity with technology to build brands that
              stand out in a competitive world.
            </p>

          </div>

          {/* MORE PROJECTS */}
          <div className="pt-[62px]">

            <h2 className="text-[58px] leading-none font-semibold tracking-[-1.5px] text-black dark:text-white transition-all duration-500">
              More Projects
            </h2>

            {/* 3 GRID - only 2 filled now */}
            <div className="grid md:grid-cols-3 gap-[28px] mt-[42px]">

              {/* CARD 1 */}
              <div className="w-full h-[420px] rounded-[10px] bg-black"></div>

              {/* CARD 2 */}
              <div className="w-full h-[420px] rounded-[10px] bg-black"></div>

              {/* EMPTY SPACE FOR FUTURE CARD 3 */}
              <div></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}