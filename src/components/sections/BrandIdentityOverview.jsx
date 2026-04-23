import image1 from "../../assets/brandimage.png";

export default function BrandIdentityOverview() {
  return (
    <section className="bg-[#efefef] dark:bg-[#111111] py-[70px] transition-all duration-500">

      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* TOP INFO */}
        <div className="grid grid-cols-4 gap-[40px] pb-[26px] border-b border-black/10 dark:border-white/10">

          {/* ITEM */}
          <div>
            <h4 className="text-[34px] leading-none font-medium text-black dark:text-white transition-all duration-500">
              Client
            </h4>

            <p className="mt-[10px] text-[18px] text-black/45 dark:text-white/45 transition-all duration-500">
              Company Name
            </p>
          </div>

          <div>
            <h4 className="text-[34px] leading-none font-medium text-black dark:text-white transition-all duration-500">
              Project
            </h4>

            <p className="mt-[10px] text-[18px] text-black/45 dark:text-white/45 transition-all duration-500">
              Website Redesign
            </p>
          </div>

          <div>
            <h4 className="text-[34px] leading-none font-medium text-black dark:text-white transition-all duration-500">
              Duration
            </h4>

            <p className="mt-[10px] text-[18px] text-black/45 dark:text-white/45 transition-all duration-500">
              Mar 15-Feb 20, 2026
            </p>
          </div>

          <div>
            <h4 className="text-[34px] leading-none font-medium text-black dark:text-white transition-all duration-500">
              Company Size
            </h4>

            <p className="mt-[10px] text-[18px] text-black/45 dark:text-white/45 transition-all duration-500">
              50+ Employees
            </p>
          </div>

        </div>

        {/* OVERVIEW */}
        <div className="pt-[62px]">

          <h2 className="text-[64px] font-semibold leading-none tracking-[-2px] text-black dark:text-white transition-all duration-500">
            Overview
          </h2>

          <p className="mt-[34px] max-w-[1650px] text-[22px] leading-[1.7] text-black/75 dark:text-white/70 transition-all duration-500">
            We are a forward-thinking digital agency focused on delivering
            strategic design, innovative solutions, and measurable results.
            Our team blends creativity with technology to build brands that
            stand out in a competitive world. We are a forward-thinking
            digital agency.
          </p>

          <p className="mt-[28px] max-w-[1650px] text-[22px] leading-[1.7] text-black/75 dark:text-white/70 transition-all duration-500">
            We focus on delivering strategic design, innovative solutions,
            and measurable results. Our team blends creativity with
            technology to build brands that stand out in a competitive
            world. We are a forward-thinking digital agency focused on
            delivering strategic design, innovative solutions, and
            measurable results.
          </p>

          {/* IMAGE */}
          <div className="mt-[48px] rounded-[12px] overflow-hidden">

            <img
              src={image1}
              alt="Project Preview"
              className="w-full h-[620px] object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}