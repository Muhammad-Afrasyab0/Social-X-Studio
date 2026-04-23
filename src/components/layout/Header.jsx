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
        <div className="h-[92px] px-[42px] border border-white/20 flex items-center justify-between backdrop-blur-md transition-all duration-500">

          {/* LOGO */}
          <Link to="/" className="translate-y-[22px]">
            <img
              src={darkMode ? darkLogo : logo}
              alt="Social X Studio"
              className="w-[205px] object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
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

              {/* DROPDOWN */}
              {serviceDrop && (
                <div className="absolute top-[28px] left-0 w-[250px] bg-white dark:bg-[#1a1a1a] rounded-[12px] shadow-2xl py-[12px] z-50">

                  <Link
                    to="/services"
                    className="block px-[18px] py-[10px] hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    All Services
                  </Link>

                  <Link
                    to="/web-development"
                    className="block px-[18px] py-[10px] hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Web Development
                  </Link>

                  <Link
                    to="/brand-identity"
                    className="block px-[18px] py-[10px] hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Brand Identity
                  </Link>

                  

                  <Link
                    to="/blog-details"
                    className="block px-[18px] py-[10px] hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Blog Details
                  </Link>

                

                </div>
              )}
            </div>

            <Link to="/portfolio" className={navLink("/portfolio")}>
              Portfolio
            </Link>

            <Link to="/blog" className={navLink("/blog")}>
              Blogs
            </Link>

            <Link to="/contact" className={navLink("/contact")}>
              Contact
            </Link>

          </nav>

          {/* RIGHT SIDE */}
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
                English <FaChevronDown className="text-[10px]" />
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

            {/* CTA */}
            <a
              href="#"
              className={`h-[48px] px-[30px] rounded-full text-[15px] font-medium inline-flex items-center gap-3 ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              Lets Connect
              <span>↗</span>
            </a>

          </div>

          {/* MOBILE MENU BTN */}
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

          <div className="w-[300px] h-full ml-auto bg-white dark:bg-[#111] p-6">

            <div className="flex justify-end mb-8">
              <button
                onClick={() => setOpen(false)}
                className={darkMode ? "text-white" : "text-black"}
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-[17px]">

              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/web-development" onClick={() => setOpen(false)}>Web Development</Link>
              <Link to="/brand-identity" onClick={() => setOpen(false)}>Brand Identity</Link>
              <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
              <Link to="/blog-details" onClick={() => setOpen(false)}>Blog Details</Link>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}