import React from "react";

import thinkbigger from "../../assets/thinkbigger.png";
import openforbussiness from "../../assets/openforbussiness.png";
import thinkoutsidethebox from "../../assets/thinkoutsidethebox.png";

export default function WhyUs() {
  return (
    <section className="w-full bg-[#efefef] py-24">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[15px] text-black mb-3">Why Choose Us</p>

          <h2 className="text-[58px] leading-none font-medium tracking-[-2px]">
            The Difference We Make
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#e7e7e7] rounded-[10px] h-[198px] p-6 flex flex-col justify-between">
              <p className="text-[13px] leading-[1.65] text-black/55 max-w-[250px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h3 className="text-[22px] leading-[1.15] font-medium">
                99.8% Flawless
                <br />
                Execution
              </h3>
            </div>

            <div className="h-[342px] rounded-[10px] overflow-hidden">
              <img
                src={thinkbigger}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center */}
          <div className="relative h-[545px] rounded-[10px] overflow-hidden">
            <img
              src={openforbussiness}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute top-7 left-7 text-white">
              <h3 className="text-[42px] leading-none font-medium">98%</h3>
              <p className="text-[19px] mt-1">On Time Rate</p>
            </div>

            <div className="absolute bottom-7 left-7 max-w-[255px]">
              <p className="text-[13px] leading-[1.65] text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <div className="h-[342px] rounded-[10px] overflow-hidden">
              <img
                src={thinkoutsidethebox}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#118df0] rounded-[10px] h-[198px] p-6 flex flex-col justify-between">
              <p className="text-[13px] leading-[1.65] text-white/85 max-w-[255px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h3 className="text-[22px] leading-[1.15] font-medium text-white">
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