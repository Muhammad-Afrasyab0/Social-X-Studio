import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../../assets/logo-icon.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1900px] mx-auto px-[3px] pt-[3px]">

        {/* MAIN HEADER BAR */}
        <div className="h-[92px] px-[42px] bg-transparent border border-white/20 flex items-center justify-between">

          {/* LEFT LOGO */}
          <a href="#" className="shrink-0">
            <img
              src={logo}
              alt="Social X Studio"
              className="w-[205px] h-auto object-contain block"
            />
          </a>

          {/* CENTER NAV */}
          <nav className="hidden lg:flex items-center gap-[40px] text-[14px] font-medium text-black leading-none">

            <a href="#" className="text-[#0a8fff]">
              Home
            </a>

            <a href="#">About Us</a>

            {/* FIXED SERVICES ALIGNMENT */}
            <a
              href="#"
              className="inline-flex items-center gap-[6px] leading-none"
            >
              <span>Services</span>
              <FaChevronDown className="text-[10px] relative top-[1px]" />
            </a>

            <a href="#">Portfolio</a>

            <a href="#">Blogs</a>

            <a href="#">Contact</a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex flex-col items-end justify-center gap-[11px]">

            {/* TOP MINI ROW */}
            <div className="flex items-center gap-[20px]">

              {/* TOGGLE */}
              <div className="flex items-center gap-[9px]">
                <div className="w-[28px] h-[15px] bg-[#0a8fff] rounded-full relative">
                  <span className="absolute top-[2px] left-[15px] w-[11px] h-[11px] rounded-full bg-white"></span>
                </div>

                <span className="text-[14px] text-black">
                  Light
                </span>
              </div>

              {/* LANGUAGE */}
              <a
                href="#"
                className="inline-flex items-center gap-[5px] text-[14px] text-black"
              >
                <span>English</span>
                <FaChevronDown className="text-[10px] relative top-[1px]" />
              </a>

              {/* SOCIAL */}
              <div className="flex items-center gap-[16px] text-[15px] text-black">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>

            </div>

            {/* CTA BUTTON */}
            <a
              href="#"
              className="h-[40px] px-[26px] rounded-full bg-black text-white text-[14px] font-medium inline-flex items-center justify-center gap-2"
            >
              Lets Connect
              <span className="text-[14px]">↗</span>
            </a>

          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-black text-[24px]"
          >
            <FaBars />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 lg:hidden">
          <div className="w-[300px] h-full bg-white ml-auto p-6">

            {/* CLOSE */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setOpen(false)}
                className="text-[24px]"
              >
                <FaTimes />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-6 text-[17px] font-medium">

              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Portfolio</a>
              <a href="#">Blogs</a>
              <a href="#">Contact</a>

              <a
                href="#"
                className="mt-3 h-[48px] rounded-full bg-black text-white flex items-center justify-center"
              >
                Lets Connect
              </a>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}