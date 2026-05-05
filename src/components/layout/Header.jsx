import { useEffect, useState, useRef } from "react";
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

  const dropdownRef = useRef();
  const location = useLocation();

  // 🔥 ADD (INITIAL LOAD SYNC)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.style.background = "#111111";
      document.body.style.color = "#ffffff";
    }
  }, []);

  // DARK MODE (UPDATED WITH SAVE)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#111111";
      document.body.style.color = "#ffffff";

      localStorage.setItem("theme", "dark");   // ✅ ADD
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "";
      document.body.style.color = "";

      localStorage.setItem("theme", "light");  // ✅ ADD
    }
  }, [darkMode]);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MOBILE SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // CLICK OUTSIDE DROPDOWN
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isServicePage =
    location.pathname === "/services" ||
    location.pathname === "/web-development" ||
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
        <div className="h-[92px] px-4 sm:px-6 md:px-8 lg:px-[42px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="translate-y-[22px]">
            <img
              src={darkMode ? darkLogo : logo}
              alt="logo"
              className="w-[145px] sm:w-[165px] lg:w-[205px]"
            />
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-[42px] text-[14px] font-medium translate-y-[24px]">

            <Link to="/" className={navLink("/")}>Home</Link>
            <Link to="/about" className={navLink("/about")}>About</Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServiceDrop(true)}
              onMouseLeave={() => setServiceDrop(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServiceDrop((prev) => !prev);
                }}
                className={`inline-flex items-center gap-[6px] ${
                  isServicePage
                    ? "text-[#0a8fff]"
                    : darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Services
                <FaChevronDown className="text-[10px]" />
              </button>

              {serviceDrop && (
                <div className="absolute top-[28px] left-0 w-[250px] bg-white dark:bg-[#1a1a1a] rounded-[12px] shadow-2xl py-[12px] z-50">
                  <DropLink to="/social-marketing" text="Social Marketing" />
                  <DropLink to="/web-development" text="Web Development" />
                  <DropLink to="/ui-ux-design" text="UI/UX Solution" />
                  <DropLink to="/video-production" text="Video Production" />
                </div>
              )}
            </div>

            <Link to="/portfolio" className={navLink("/portfolio")}>Portfolio</Link>
            <Link to="/blog" className={navLink("/blog")}>Blogs</Link>
            <Link to="/contact" className={navLink("/contact")}>Contact</Link>

          </nav>

          {/* RIGHT */}
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
                  />
                </div>

                <span className={`${darkMode ? "text-white" : "text-black"} text-[13px]`}>
                  {darkMode ? "Light" : "Dark"}
                </span>
              </button>

              <div className={`flex gap-[16px] ${darkMode ? "text-white" : "text-black"}`}>
     <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/socialxstudio.pk/" target="_blank"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/social-x-studio/?originalSubdomain=pk" target="_blank"><FaLinkedinIn /></a>
</div>

            </div>

            <a href="/contact" className="bg-black text-white px-6 py-2 rounded-full">
              Lets Connect ↗
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
        <div className="fixed inset-0 bg-black/60 z-[999] lg:hidden">

          <div className={`w-[86%] max-w-[340px] h-full ml-auto p-6 ${darkMode ? "bg-[#111]" : "bg-white"}`}>

            <div className="flex items-center justify-between mb-8">

              <img src={darkMode ? darkLogo : logo} className="w-[120px]" />

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

                <span className={`${darkMode ? "text-white" : "text-black"} text-[13px]`}>
                  {darkMode ? "Light" : "Dark"}
                </span>
              </button>

              <button onClick={() => setOpen(false)}>
                <FaTimes size={24} />
              </button>

            </div>

            <div className="flex flex-col gap-6 text-[17px]">

              <MobileLink to="/" close={setOpen}>Home</MobileLink>
              <MobileLink to="/about" close={setOpen}>About</MobileLink>
              <MobileLink to="/services" close={setOpen}>Services</MobileLink>
              <MobileLink to="/social-marketing" close={setOpen}>Social Marketing</MobileLink>
              <MobileLink to="/web-development" close={setOpen}>Web Development</MobileLink>
              <MobileLink to="/ui-ux-design" close={setOpen}>UI/UX</MobileLink>
              <MobileLink to="/video-production" close={setOpen}>Video Production</MobileLink>
              <MobileLink to="/portfolio" close={setOpen}>Portfolio</MobileLink>
              <MobileLink to="/blog" close={setOpen}>Blogs</MobileLink>
              <MobileLink to="/contact" close={setOpen}>Contact</MobileLink>

            </div>

            <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-center gap-6 text-[18px] opacity-80">
              <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/socialxstudio.pk/" target="_blank"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/social-x-studio/?originalSubdomain=pk" target="_blank"><FaLinkedinIn /></a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

function DropLink({ to, text }) {
  return (
    <Link to={to} className="block px-[18px] py-[10px] hover:bg-black/5 dark:hover:bg-white/5">
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