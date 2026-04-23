import React from "react";
import pouch1 from "../../assets/green.png";
import pouch2 from "../../assets/dark.png";

const Mockup = () => {
  return (
    <section className="w-full py-[70px] bg-[#f8f8f8] dark:bg-[#111111] transition-all duration-500">

      {/* EXACT HEADER ALIGNMENT */}
      <div className="max-w-[1900px] mx-auto px-[3px]">

        <div className="px-[42px]">

          {/* Heading */}
          <div className="text-center mb-[52px]">

            <h2 className="text-[58px] leading-none font-semibold tracking-[-1.5px] text-black dark:text-white transition-all duration-500">
              Pouch Mockup Collection
            </h2>

            <p className="text-[18px] text-black/55 dark:text-white/60 mt-[16px] transition-all duration-500">
              Premium realistic packaging mockups for your brand products
            </p>

          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-[28px]">

            {/* First */}
            <div className="rounded-[22px] overflow-hidden bg-transparent">
              <img
                src={pouch1}
                alt="Pouch Mockup"
                className="w-full h-full object-cover rounded-[22px]"
              />
            </div>

            {/* Second */}
            <div className="rounded-[22px] overflow-hidden bg-transparent">
              <img
                src={pouch2}
                alt="Packaging Mockup"
                className="w-full h-full object-cover rounded-[22px]"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Mockup;