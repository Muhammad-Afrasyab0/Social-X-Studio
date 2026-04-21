import React from "react";

import img1 from "../../assets/service1.png";
import img2 from "../../assets/service2.png";
import img3 from "../../assets/service3.png";

export default function ServicesShowcase() {
  return (
    <section className="w-full bg-[#efefef] py-[90px]">
      {/* Header aligned */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        <div className="grid grid-cols-2 gap-[48px] items-center">

          {/* ======================================== */}
          {/* LEFT IMAGE GRID */}
          {/* ======================================== */}
          <div className="grid grid-cols-[1fr_1fr] gap-[24px]">

            {/* Tall Left */}
            <div className="h-[560px] rounded-[10px] overflow-hidden bg-black">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[24px]">

              <div className="h-[268px] rounded-[10px] overflow-hidden bg-black">
                <img
                  src={img2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[268px] rounded-[10px] overflow-hidden bg-black">
                <img
                  src={img3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

          {/* ======================================== */}
          {/* RIGHT CONTENT */}
          {/* ======================================== */}
          <div className="max-w-[720px]">

            <p className="text-black text-[18px] font-medium">
              How We Help
            </p>

            <h2 className="mt-[10px] text-black text-[74px] leading-[0.96] font-semibold tracking-[-2px]">
              Empowering businesses
              <br />
              with modern design
            </h2>

            <p className="mt-[28px] text-black/65 text-[22px] leading-[1.8] max-w-[660px]">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when.
            </p>

            <button className="mt-[36px] h-[58px] px-[34px] rounded-full border border-black/35 text-black text-[17px] font-medium inline-flex items-center gap-3 hover:bg-black hover:text-white duration-300">
              Book A Call - It's Free
              <span className="text-[20px] leading-none">↗</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}