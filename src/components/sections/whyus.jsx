import React from "react";

import Reveal from "../../components/animations/Reveal";
import CountUp from "../../components/animations/CountUp";

import thinkbigger from "../../assets/thinkbigger.png";
import openforbussiness from "../../assets/openforbussiness.png";
import thinkoutsidethebox from "../../assets/thinkoutsidethebox.png";

export default function WhyUs() {
  return (
    <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[92px] transition-all duration-500">

      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* HEADING */}
        <div className="text-center mb-[58px]">

          <Reveal>
            <p className="text-[16px] font-medium text-black dark:text-white mb-[12px]">
              Why Choose Us
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-[58px] leading-none font-medium tracking-[-2px] text-black dark:text-white">
              The Difference We Make
            </h2>
          </Reveal>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">

          {/* LEFT */}
          <div className="flex flex-col gap-[24px]">

            <div className="bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[10px] h-[220px] p-[30px] flex flex-col justify-between">

              <Reveal>
                <p className="text-[16px] leading-[1.75] text-black/55 dark:text-white/70 max-w-[320px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h3 className="text-[30px] leading-[1.12] font-medium tracking-[-0.6px] text-black dark:text-white">
                  99.8% Flawless
                  <br />
                  Execution
                </h3>
              </Reveal>

            </div>

            <div className="h-[390px] rounded-[10px] overflow-hidden">
              <Reveal delay={0.2}>
                <img
                  src={thinkbigger}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Reveal>
            </div>

          </div>

          {/* CENTER */}
          <div className="relative h-[634px] rounded-[10px] overflow-hidden">

            <Reveal>
              <img
                src={openforbussiness}
                alt=""
                className="w-full h-full object-cover"
              />
            </Reveal>

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute top-[34px] left-[34px] text-white">

              <Reveal delay={0.2}>
                <h3 className="text-[62px] leading-none font-medium tracking-[-1px]">
                  <CountUp end={98} />%
                </h3>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-[22px] mt-[8px]">
                  On Time Rate
                </p>
              </Reveal>

            </div>

            <div className="absolute bottom-[34px] left-[34px] max-w-[340px]">

              <Reveal delay={0.4}>
                <p className="text-[16px] leading-[1.75] text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Reveal>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-[24px]">

            <div className="h-[390px] rounded-[10px] overflow-hidden">
              <Reveal>
                <img
                  src={thinkoutsidethebox}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Reveal>
            </div>

            <div className="bg-[#118df0] dark:bg-[#0a8fff] rounded-[10px] h-[220px] p-[30px] flex flex-col justify-between">

              <Reveal delay={0.1}>
                <p className="text-[16px] leading-[1.75] text-white/85 max-w-[320px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <h3 className="text-[30px] leading-[1.12] font-medium tracking-[-0.6px] text-white">
                  <CountUp end={300} />+ Successful
                  <br />
                  Deliveries
                </h3>
              </Reveal>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}