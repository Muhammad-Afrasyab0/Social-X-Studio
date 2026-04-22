import logo from "../../assets/x.png";

export default function WhoWeAre() {
  return (
    <section className="bg-[#efefef] dark:bg-[#111111] min-h-[640px] max-h-[640px] pt-[58px] overflow-hidden transition-all duration-500">

      {/* Header Exact Alignment */}
      <div className="max-w-[1900px] mx-auto px-[42px] h-full flex flex-col justify-between">

        {/* TOP AREA */}
        <div className="grid grid-cols-[360px_1fr] items-start">

          {/* LEFT */}
          <div>
            <h3 className="text-black dark:text-white text-[18px] font-semibold leading-none mt-[8px] tracking-[-0.2px] transition-all duration-500">
              Who We Are
            </h3>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-black dark:text-white text-[52px] leading-[1.08] font-semibold max-w-[900px] tracking-[-2px] transition-all duration-500">
              We create strategic designs and innovative solutions that help
              brands stand out.
            </h2>
          </div>

        </div>

        {/* BOTTOM AREA */}
        <div className="grid grid-cols-[310px_340px_1fr] items-end gap-[52px] pb-[42px]">

          {/* LEFT IMAGE */}
          <div className="flex items-end">
            <img
              src={logo}
              alt="Logo"
              className="w-[260px] object-contain"
            />
          </div>

          {/* CENTER */}
          <div>
            <div className="flex items-start leading-none">

              <span className="text-black dark:text-white text-[138px] font-bold tracking-[-7px] transition-all duration-500">
                15
              </span>

              <span className="text-black dark:text-white text-[46px] font-semibold mt-[10px] ml-[3px] transition-all duration-500">
                M
              </span>

            </div>

            <p className="text-[#4f4f4f] dark:text-white/70 text-[18px] leading-[1.55] max-w-[300px] -mt-[2px] tracking-[-0.2px] transition-all duration-500">
              We help brands scale like companies valued at 15M+
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="border-l border-[#d5d5d5] dark:border-white/10 pl-[55px] pb-[6px] transition-all duration-500">

            <p className="text-[#4f4f4f] dark:text-white/70 text-[18px] leading-[1.9] max-w-[470px] tracking-[-0.15px] transition-all duration-500">
              We are a forward-thinking digital agency focused on delivering
              strategic design, innovative solutions, and measurable results.
              Our team blends creativity with technology to build brands that
              stand out in a competitive world.
            </p>

            <a
              href="#"
              className="mt-[34px] h-[56px] px-[32px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[16px] font-medium inline-flex items-center justify-center gap-[10px] transition-all duration-500"
            >
              <span>Explore More</span>

              <span className="text-[21px] leading-none font-light relative top-[-1px]">
                ↗
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}