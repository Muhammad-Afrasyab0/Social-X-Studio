import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import bgImage from "../../assets/contactform.png";

export default function Contact() {
  return (
    <section
      className="relative w-full min-h-screen py-[70px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1900px] mx-auto px-[42px] grid grid-cols-2 gap-[90px] items-center">

        {/* LEFT SIDE */}
        <div className="text-white pl-[70px]">

          <p className="text-[18px] font-medium mb-[18px] text-white/90 tracking-wide uppercase">
            Contact Us
          </p>

          <h2 className="text-[74px] leading-[0.98] font-semibold tracking-[-2px]">
            Get In Touch
          </h2>

          <p className="mt-[26px] text-[20px] leading-[1.7] text-white/90 max-w-[520px]">
            Have a question or project in mind? We'd love to hear
            from you.
          </p>

          {/* INFO */}
          <div className="mt-[60px] flex flex-col gap-[34px]">

            <Info
              icon={<Phone size={28} strokeWidth={2.2} />}
              title="Call Now:"
              text="0123 456 7890"
            />

            <Info
              icon={<Mail size={28} strokeWidth={2.2} />}
              title="Email:"
              text="info@domain.com"
            />

            <Info
              icon={<MapPin size={28} strokeWidth={2.2} />}
              title="Address:"
              text={
                <>
                  Address Line Dummy Here
                  <br />
                  Lorem Ipsum dollar
                </>
              }
            />

          </div>

          {/* SOCIAL */}
          <div className="mt-[58px] flex items-center gap-[14px]">

            <p className="text-[20px] text-white/90 mr-[10px]">
              Follow Us on
            </p>

            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaLinkedinIn />} />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-[760px] ml-auto w-full">

          <div className="rounded-[38px] border border-white/20 bg-black/20 backdrop-blur-md px-[48px] pt-[52px] pb-[42px] shadow-2xl">

            {/* ROW 1 */}
            <div className="grid grid-cols-2 gap-[34px]">
              <Field placeholder="First Name*" />
              <Field placeholder="Last Name*" />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-2 gap-[34px] mt-[42px]">
              <Field placeholder="Phone*" />
              <Field placeholder="Email*" />
            </div>

            {/* MESSAGE */}
            <div className="mt-[42px]">
              <Field placeholder="Message.." />
            </div>

            {/* CHECKBOX */}
            <label className="mt-[26px] flex items-center gap-[12px] text-white/80 text-[18px]">
              <input
                type="checkbox"
                className="w-[18px] h-[18px] accent-white"
              />
              I agree to the privacy policy
            </label>

            {/* BUTTON */}
            <button className="mt-[90px] h-[58px] px-[34px] rounded-full border border-white/60 text-white text-[22px] font-medium inline-flex items-center gap-3 hover:bg-white hover:text-black transition-all duration-300">
              Send Now
              <span className="text-[24px] leading-none">
                ↗
              </span>
            </button>

            <p className="mt-[20px] text-[18px] text-white/70">
              You will get a response from us within 5 minutes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

function Field({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-white/40 pb-[14px] text-white text-[18px] placeholder:text-white/70 outline-none focus:border-white transition-all duration-300"
    />
  );
}

function SocialIcon({ icon }) {
  return (
    <button className="w-[58px] h-[58px] rounded-full border border-white/45 flex items-center justify-center text-white text-[20px] hover:bg-white hover:text-black transition-all duration-300">
      {icon}
    </button>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="flex items-start gap-[18px]">
      <div className="mt-[3px] text-white">
        {icon}
      </div>

      <div>
        <p className="text-[18px] text-white/70 mb-[3px]">
          {title}
        </p>

        <p className="text-[31px] leading-[1.25] font-medium tracking-[-1px] text-white">
          {text}
        </p>
      </div>
    </div>
  );
}