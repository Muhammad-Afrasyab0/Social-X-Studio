import React from "react";
import personImg from "../../assets/vision-person.png";

export default function VisionMission() {
  return (
    <section className="w-full bg-[#efefef] py-[26px]">
      {/* HEADER ALIGNMENT */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* SAME 2x2 ORIENTATION */}
        <div className="grid grid-cols-2 rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

          {/* ================================================= */}
          {/* TOP LEFT IMAGE */}
          {/* ================================================= */}
          <div className="relative h-[430px] bg-[#e7e7e7] overflow-hidden">

            <img
              src={personImg}
              alt="Portrait"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[108%] w-auto object-contain"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>

          </div>

          {/* ================================================= */}
          {/* TOP RIGHT VISION */}
          {/* ================================================= */}
          <div className="relative h-[430px] bg-black p-[42px] flex flex-col justify-between">

            <div>
              <p className="text-[#0a8fff] text-[14px] font-medium tracking-[2px] uppercase">
                Our Vision
              </p>

              <h2 className="mt-[16px] text-white text-[68px] leading-[0.94] font-semibold tracking-[-2px]">
                Create Bold
                <br />
                Identities
              </h2>
            </div>

            <p className="text-white/72 text-[15px] leading-[1.95] max-w-[560px]">
              We build premium brands, memorable visuals and strategic digital
              experiences that help companies stand out in a crowded market.
            </p>

          </div>

          {/* ================================================= */}
          {/* BOTTOM LEFT MISSION */}
          {/* ================================================= */}
          <div className="relative h-[430px] bg-[#111111] p-[42px] flex flex-col justify-between">

            <div>
              <p className="text-[#0a8fff] text-[14px] font-medium tracking-[2px] uppercase">
                Our Mission
              </p>

              <h2 className="mt-[16px] text-white text-[68px] leading-[0.94] font-semibold tracking-[-2px]">
                Design With
                <br />
                Purpose
              </h2>
            </div>

            <p className="text-white/72 text-[15px] leading-[1.95] max-w-[560px]">
              Every project is designed to generate trust, improve perception,
              and deliver measurable growth for ambitious businesses.
            </p>

          </div>

          {/* ================================================= */}
          {/* BOTTOM RIGHT EMPTY / PREMIUM PANEL */}
          {/* ================================================= */}
          <div className="relative h-[430px] bg-[#e7e7e7] p-[42px] flex flex-col justify-between">

            <div>
              <p className="text-black/50 text-[14px] uppercase tracking-[2px]">
                Why Us
              </p>

              <h3 className="mt-[16px] text-black text-[62px] leading-[0.96] font-semibold tracking-[-2px]">
                Smart
                <br />
                Solutions
              </h3>
            </div>

            <button className="h-[50px] px-[28px] rounded-full bg-black text-white text-[15px] font-medium inline-flex items-center gap-3 w-fit">
              Explore More
              <span className="text-[18px] leading-none">↗</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}