import React from "react";

import thinkbigger from "../../assets/thinkbigger.png";
import openforbussiness from "../../assets/openforbussiness.png";
import thinkoutsidethebox from "../../assets/thinkoutsidethebox.png";

export default function WhyUs() {
  return (
    <section className="w-full bg-[#efefef] py-[92px]">
      {/* Header Alignment */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* Heading */}
        <div className="text-center mb-[58px]">
          <p className="text-[16px] font-medium text-black mb-[12px]">
            Why Choose Us
          </p>

          <h2 className="text-[58px] leading-none font-medium tracking-[-2px]">
            The Difference We Make
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">

          {/* Left */}
          <div className="flex flex-col gap-[24px]">

            <div className="bg-[#e7e7e7] rounded-[10px] h-[220px] p-[30px] flex flex-col justify-between">
              <p className="text-[16px] leading-[1.75] text-black/55 max-w-[320px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h3 className="text-[30px] leading-[1.12] font-medium tracking-[-0.6px]">
                99.8% Flawless
                <br />
                Execution
              </h3>
            </div>

            <div className="h-[390px] rounded-[10px] overflow-hidden">
              <img
                src={thinkbigger}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Center */}
          <div className="relative h-[634px] rounded-[10px] overflow-hidden">
            <img
              src={openforbussiness}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute top-[34px] left-[34px] text-white">
              <h3 className="text-[62px] leading-none font-medium tracking-[-1px]">
                98%
              </h3>

              <p className="text-[22px] mt-[8px]">
                On Time Rate
              </p>
            </div>

            <div className="absolute bottom-[34px] left-[34px] max-w-[340px]">
              <p className="text-[16px] leading-[1.75] text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-[24px]">

            <div className="h-[390px] rounded-[10px] overflow-hidden">
              <img
                src={thinkoutsidethebox}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#118df0] rounded-[10px] h-[220px] p-[30px] flex flex-col justify-between">
              <p className="text-[16px] leading-[1.75] text-white/85 max-w-[320px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h3 className="text-[30px] leading-[1.12] font-medium tracking-[-0.6px] text-white">
                300+ Successful
                <br />
                Deliveries
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}