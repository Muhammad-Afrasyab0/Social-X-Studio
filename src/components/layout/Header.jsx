import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-icon.png";
import darkLogo from "../../assets/logo-dark.png"; // replace with your dark logo

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#111111";
      document.body.style.color = "#ffffff";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "";
      document.body.style.color = "";
    }
  }, [darkMode]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent shadow-[0_-8px_40px_rgba(10,143,255,0.04)]">
      <div className="max-w-[1900px] mx-auto px-[3px] pt-[3px]">

        {/* MAIN BAR */}
        <div className="h-[92px] px-[42px] bg-transparent border border-white/20 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="shrink-0 mt-[45px]">
            <img
              src={darkMode ? darkLogo : logo}
              alt="Social X Studio"
              className="w-[205px] h-auto object-contain block"
            />
          </Link>

          {/* NAV */}
          <nav
            className={`hidden lg:flex items-center gap-[40px] text-[14px] font-medium leading-none translate-y-[25px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <Link to="/" className="text-[#0a8fff]">
              Home
            </Link>

            <Link to="/about">About Us</Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-[6px]"
            >
              <span>Services</span>
              <FaChevronDown className="text-[10px]" />
            </Link>

            <Link to="/portfolio">Portfolio</Link>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex flex-col items-end justify-center gap-[11px]">

            {/* TOP ROW */}
            <div className="flex items-center gap-[20px]">

              {/* TOGGLE */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-[9px]"
              >
                {/* BAR */}
                <div className="w-[28px] h-[15px] bg-black rounded-full relative">

                  <span
                    className={`absolute top-[2px] w-[11px] h-[11px] rounded-full duration-300 ${
                      darkMode
                        ? "left-[2px] bg-white"
                        : "left-[15px] bg-white"
                    }`}
                  ></span>

                </div>

                {/* TEXT */}
                <span
                  className={`text-[14px] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {darkMode ? "Dark" : "Light"}
                </span>
              </button>

              {/* LANGUAGE */}
              <a
                href="#"
                className={`inline-flex items-center gap-[5px] text-[14px] ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <span>English</span>
                <FaChevronDown className="text-[10px]" />
              </a>

              {/* SOCIAL */}
              <div
                className={`flex items-center gap-[16px] text-[15px] ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#"
              className={`h-[48px] px-[30px] rounded-full text-[15px] font-medium inline-flex items-center justify-center gap-3 ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              Lets Connect

              <span className="text-[18px] leading-none font-normal">
                ↗
              </span>
            </a>

          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden text-[24px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <FaBars />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 lg:hidden">

          <div
            className={`w-[300px] h-full ml-auto p-6 ${
              darkMode ? "bg-[#111]" : "bg-white"
            }`}
          >

            {/* CLOSE */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setOpen(false)}
                className={`text-[24px] ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <FaTimes />
              </button>
            </div>

            {/* LINKS */}
            <div
              className={`flex flex-col gap-6 text-[17px] font-medium ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>

              <a href="#">Blogs</a>
              <a href="#">Contact</a>

              <a
                href="#"
                className={`mt-3 h-[48px] rounded-full flex items-center justify-center ${
                  darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
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