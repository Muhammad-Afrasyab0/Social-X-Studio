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
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isServicePage =
    location.pathname === "/services" ||
    location.pathname === "/web-development" ||
    location.pathname === "/brand-identity" ||
    location.pathname === "/social-marketing" ||
    location.pathname === "/video-production" ||
    location.pathname === "/ui-ux-design";

  const navLink = (path) =>
    location.pathname === path
      ? "text-[#0a8fff]"
      : darkMode
      ? "text-white hover:text-[#0a8fff]"
      : "text-black hover:text-[#0a8fff]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-[#111]/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1900px] mx-auto px-[3px]">
        <div className="h-[92px] px-4 sm:px-6 md:px-8 lg:px-[42px] border border-transparent flex items-center justify-between transition-all duration-500">

          {/* LOGO */}
          <Link to="/" className="translate-y-[22px] shrink-0">
            <img
              src={darkMode ? darkLogo : logo}
              alt="Social X Studio"
              className="w-[145px] sm:w-[165px] lg:w-[205px] object-contain"
            />
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-[42px] text-[14px] font-medium translate-y-[24px]">

            <Link to="/" className={navLink("/")}>Home</Link>
            <Link to="/about" className={navLink("/about")}>About Us</Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServiceDrop(true)}
              onMouseLeave={() => {
                setTimeout(() => setServiceDrop(false), 120);
              }}
            >
              <button
                onClick={() => (window.location.href = "/services")}
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
                  <DropLink to="/social-marketing" text="Social Marketing" />
                  <DropLink to="/web-development" text="Web Development" />
                  <DropLink to="/ui-ux-design" text="UI-UX Solution" />
                  <DropLink to="/video-production" text="Video Production" />
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

          {/* RIGHT */}
          <div className="hidden lg:flex flex-col items-end gap-[11px]">

            <div className="flex items-center gap-[18px]">

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

              <div className={`flex items-center gap-[16px] ${darkMode ? "text-white" : "text-black"}`}>
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
              </div>

            </div>

            <a
              href="/contact"
              className={`h-[48px] px-[30px] rounded-full text-[15px] font-medium inline-flex items-center justify-center gap-3 ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              Lets Connect
              <span className="text-[18px] leading-none font-normal">↗</span>
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

    <div
      className={`w-[86%] max-w-[340px] h-full ml-auto p-6 ${
        darkMode ? "bg-[#111]" : "bg-white"
      }`}
    >

      {/* TOP BAR */}
      <div className="flex items-center justify-between gap-4 mb-8">

        {/* LOGO */}
        <img
          src={darkMode ? darkLogo : logo}
          alt="logo"
          className="w-[120px] object-contain"
        />

        {/* THEME TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-[6px]"
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
        </button>

        {/* CLOSE BTN */}
        <button
          onClick={() => setOpen(false)}
          className={darkMode ? "text-white" : "text-black"}
        >
          <FaTimes size={24} />
        </button>

      </div>

      {/* NAV LINKS */}
      <div
        className={`flex flex-col gap-6 text-[17px] font-medium ${
          darkMode ? "text-white" : "text-black"
        }`}
      >

        <MobileLink to="/" close={setOpen}>Home</MobileLink>
        <MobileLink to="/about" close={setOpen}>About</MobileLink>
        <MobileLink to="/services" close={setOpen}>Services</MobileLink>

        {/* SERVICES */}
        <MobileLink to="/social-marketing" close={setOpen}>
          Social Marketing
        </MobileLink>

        <MobileLink to="/web-development" close={setOpen}>
          Web Development
        </MobileLink>

        <MobileLink to="/ui-ux-design" close={setOpen}>
          UI/UX
        </MobileLink>

        <MobileLink to="/video-production" close={setOpen}>
          Video Production
        </MobileLink>

        <MobileLink to="/portfolio" close={setOpen}>
          Portfolio
        </MobileLink>

        <MobileLink to="/blog" close={setOpen}>
          Blogs
        </MobileLink>

        <MobileLink to="/contact" close={setOpen}>
          Contact
        </MobileLink>

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