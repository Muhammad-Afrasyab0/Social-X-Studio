export default function StartHere() {
  return (
    <section className="bg-[#11141b] dark:bg-[#efefef] min-h-[450px] flex items-center py-[80px] transition-all duration-500">
      {/* Header Alignment */}
      <div className="w-full max-w-[1900px] mx-auto px-[42px] grid grid-cols-3 gap-[70px]">

        {/* BOX 1 */}
        <div className="flex flex-col justify-center">
          <h3 className="text-white dark:text-black text-[22px] font-semibold leading-tight transition-all duration-500">
            Who We Are & What We Do
          </h3>

          <p className="mt-[18px] text-white/65 dark:text-black/65 text-[17px] leading-[1.8] max-w-[390px] transition-all duration-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <a
            href="#"
            className="mt-[28px] inline-flex items-center gap-[10px] text-white dark:text-black text-[17px] font-medium leading-none tracking-[-0.2px] transition-all duration-500"
          >
            <span>Start Here</span>

            <span className="text-[26px] leading-none font-light relative top-[-1px]">
              ↗
            </span>
          </a>
        </div>

        {/* BOX 2 */}
        <div className="flex flex-col justify-center">
          <h3 className="text-white dark:text-black text-[22px] font-semibold leading-tight transition-all duration-500">
            We’ll design your project
          </h3>

          <p className="mt-[18px] text-white/65 dark:text-black/65 text-[17px] leading-[1.8] max-w-[390px] transition-all duration-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <a
            href="#"
            className="mt-[28px] inline-flex items-center gap-[10px] text-white dark:text-black text-[17px] font-medium leading-none tracking-[-0.2px] transition-all duration-500"
          >
            <span>Start Here</span>

            <span className="text-[26px] leading-none font-light relative top-[-1px]">
              ↗
            </span>
          </a>
        </div>

        {/* BOX 3 */}
        <div className="flex flex-col justify-center">
          <h3 className="text-white dark:text-black text-[22px] font-semibold leading-tight transition-all duration-500">
            Drop us your message!
          </h3>

          <p className="mt-[18px] text-white/65 dark:text-black/65 text-[17px] leading-[1.8] max-w-[390px] transition-all duration-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <a
            href="#"
            className="mt-[28px] inline-flex items-center gap-[10px] text-white dark:text-black text-[17px] font-medium leading-none tracking-[-0.2px] transition-all duration-500"
          >
            <span>Start Here</span>

            <span className="text-[26px] leading-none font-light relative top-[-1px]">
              ↗
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}