export default function ProblemsSection() {
  return (
    <section className="bg-[#efefef] dark:bg-[#111111] py-[70px] transition-all duration-500">

      {/* SAME WIDTH AS HEADER */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* TOP BLACK BOX */}
        <div className="w-full h-[420px] rounded-[10px] bg-black"></div>

        {/* CONTENT */}
        <div className="pt-[42px]">

          <h2 className="text-[58px] leading-none font-semibold tracking-[-1.5px] text-black dark:text-white transition-all duration-500">
            Problems
          </h2>

          <p className="mt-[28px] max-w-[1750px] text-[22px] leading-[1.8] text-black/70 dark:text-white/70 transition-all duration-500">
            We are a forward-thinking digital agency focused on delivering
            strategic design, innovative solutions, and measurable results.
            Our team blends creativity with technology to build brands that
            stand out in a competitive world. We are a forward-thinking
            digital agency delivering strategic design, innovative solutions,
            and measurable results. Our team blends creativity with
            technology to build brands that stand out in a competitive world.
          </p>

        </div>

      </div>

    </section>
  );
}