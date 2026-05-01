import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo-icon.png";
import darkLogo from "../../assets/logo-dark.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [serviceDrop, setServiceDrop] = useState(false);

  const location = useLocation();

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

  const isServicePage =
    location.pathname === "/services" ||
    location.pathname === "/web-development" ||
    location.pathname === "/brand-identity";

  const navLink = (path) =>
    location.pathname === path
      ? "text-[#0a8fff]"
      : darkMode
      ? "text-white hover:text-[#0a8fff]"
      : "text-black hover:text-[#0a8fff]";

  return (
    <header className="absolute top-0 left-0 w-full z-50">

      {/* WRAPPER */}
      <div className="max-w-[1900px] mx-auto px-[3px]">

        {/* MAIN BAR */}
        <div className="h-[92px] px-4 sm:px-6 md:px-8 lg:px-[42px] border border-white/20 flex items-center justify-between backdrop-blur-md transition-all duration-500">

          {/* LOGO */}
          <Link to="/" className="translate-y-[22px] shrink-0">
            <img
              src={darkMode ? darkLogo : logo}
              alt="Social X Studio"
              className="w-[145px] sm:w-[165px] lg:w-[205px] object-contain"
            />
          </Link>

          {/* DESKTOP NAV (UNCHANGED DESIGN) */}
          <nav className="hidden lg:flex items-center gap-[42px] text-[14px] font-medium translate-y-[24px]">

            <Link to="/" className={navLink("/")}>
              Home
            </Link>

            <Link to="/about" className={navLink("/about")}>
              About Us
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServiceDrop(true)}
              onMouseLeave={() => setServiceDrop(false)}
            >
              <button
                className={`inline-flex items-center gap-[6px] ${
                  isServicePage
                    ? "text-[#0a8fff]"
                    : darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                <span>Services</span>
                <FaChevronDown className="text-[10px]" />
              </button>

              {serviceDrop && (
                <div className="absolute top-[28px] left-0 w-[250px] bg-white dark:bg-[#1a1a1a] rounded-[12px] shadow-2xl py-[12px] z-50">

                  <DropLink to="/services" text="All Services" />
                  <DropLink to="/web-development" text="Web Development" />
                  <DropLink to="/brand-identity" text="Brand Identity" />
                  <DropLink to="/blog-details" text="Blog Details" />
                  <DropLink to="/contact" text="Contact Page" />

                </div>
              )}
            </div>

            <Link to="/portfolio" className={navLink("/portfolio")}>
              Our Portfolio
            </Link>

            <Link to="/blog" className={navLink("/blog")}>
              Blogs
            </Link>

            <Link to="/contact" className={navLink("/contact")}>
              Contact
            </Link>

          </nav>

          {/* RIGHT SIDE (UNCHANGED DESIGN) */}
          <div className="hidden lg:flex flex-col items-end gap-[11px]">

            <div className="flex items-center gap-[18px]">

              {/* TOGGLE */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-[9px]"
              >
                <div className="w-[28px] h-[15px] bg-black dark:bg-white rounded-full relative">

                  <span
                    className={`absolute top-[2px] w-[11px] h-[11px] rounded-full duration-300 ${
                      darkMode
                        ? "left-[2px] bg-black"
                        : "left-[15px] bg-white"
                    }`}
                  ></span>

                </div>

                <span className={darkMode ? "text-white" : "text-black"}>
                  {darkMode ? "Dark" : "Light"}
                </span>
              </button>

              {/* LANGUAGE */}
              <button
                className={`inline-flex items-center gap-[5px] ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <span>English</span>
                <FaChevronDown className="text-[10px]" />
              </button>

              {/* SOCIAL */}
              <div
                className={`flex items-center gap-[16px] ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
              </div>

            </div>

            {/* CTA (UNCHANGED) */}
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

          {/* MOBILE BTN */}
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

    <div className={`w-[86%] max-w-[340px] h-full ml-auto p-6 ${darkMode ? "bg-[#111]" : "bg-white"}`}>

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-8">

        {/* LOGO (ADDED) */}
        <img
          src={darkMode ? darkLogo : logo}
          alt="logo"
          className="w-[120px] object-contain animate-[logoFloat_4s_ease-in-out_infinite]"
        />

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className={darkMode ? "text-white" : "text-black"}
        >
          <FaTimes size={24} />
        </button>
      </div>

      {/* DARK MODE TOGGLE (SAME AS DESKTOP) */}
      <div className="flex items-center justify-between mb-8">

        <span className={darkMode ? "text-white" : "text-black"}>
          Theme Mode
        </span>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-[9px]"
        >
          <div className="w-[28px] h-[15px] bg-black dark:bg-white rounded-full relative">

            <span
              className={`absolute top-[2px] w-[11px] h-[11px] rounded-full duration-300 ${
                darkMode
                  ? "left-[2px] bg-black"
                  : "left-[15px] bg-white"
              }`}
            />

          </div>

          <span className={darkMode ? "text-white" : "text-black"}>
            {darkMode ? "Dark" : "Light"}
          </span>
        </button>
      </div>

      {/* LINKS (UNCHANGED) */}
      <div className={`flex flex-col gap-6 text-[17px] font-medium ${darkMode ? "text-white" : "text-black"}`}>

        <MobileLink to="/" close={setOpen}>Home</MobileLink>
        <MobileLink to="/about" close={setOpen}>About</MobileLink>
        <MobileLink to="/services" close={setOpen}>Services</MobileLink>
        <MobileLink to="/web-development" close={setOpen}>Web Development</MobileLink>
        <MobileLink to="/brand-identity" close={setOpen}>Brand Identity</MobileLink>
        <MobileLink to="/portfolio" close={setOpen}>Portfolio</MobileLink>
        <MobileLink to="/blog" close={setOpen}>Blogs</MobileLink>
        <MobileLink to="/blog-details" close={setOpen}>Blog Details</MobileLink>
        <MobileLink to="/contact" close={setOpen}>Contact</MobileLink>

      </div>

    </div>
  </div>
)}
    </header>
  );
}

function DropLink({ to, text }) {
  return (
    <Link
      to={to}
      className="block px-[18px] py-[10px] hover:bg-black/5 dark:hover:bg-white/5"
    >
      {text}
    </Link>
  );
}

function MobileLink({ to, close, children }) {
  return (
    <Link to={to} onClick={() => close(false)}>
      {children}
    </Link>
  );
}