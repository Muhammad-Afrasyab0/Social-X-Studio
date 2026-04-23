import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import watermark from "../../assets/logo-watermark.png";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-black pt-0 pb-0 -mt-[1px]">

      {/* EXACT HEADER ALIGNMENT */}
      <div className="max-w-[1900px] mx-auto px-[3px]">

        <div className="px-[42px]">

          {/* MAIN BOX */}
          <div className="bg-black rounded-t-[34px] pt-[78px] pb-0 px-[42px] overflow-hidden min-h-[760px] relative">

            {/* TOP GRID */}
            <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr_1fr] gap-[70px]">

              {/* LEFT */}
              <div>
                <img
                  src={logo}
                  alt="Social X Studio"
                  className="w-[212px] h-auto object-contain"
                />

                <h3 className="mt-[34px] text-white text-[26px] font-semibold leading-[1.2] tracking-[-0.5px]">
                  Do You Like What You See?
                </h3>

                <p className="mt-[14px] text-white/70 text-[15px] leading-[1.7] max-w-[360px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt.
                </p>

                <a
                  href="#"
                  className="mt-[28px] h-[48px] px-[30px] rounded-full border border-white/70 text-white text-[15px] font-medium inline-flex items-center justify-center gap-3 hover:bg-white hover:text-black duration-300"
                >
                  Book Your Free Consultation Call
                  <span className="text-[18px] leading-none font-normal">
                    ↗
                  </span>
                </a>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h4 className="text-white text-[22px] font-semibold mb-[24px]">
                  Quick Links
                </h4>

                <ul className="space-y-[14px] text-white/90 text-[15px]">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/blog">Blogs</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* SERVICES */}
              <div>
                <h4 className="text-white text-[22px] font-semibold mb-[24px]">
                  Services
                </h4>

                <ul className="space-y-[14px] text-white/90 text-[15px]">
                  <li><Link to="/web-development">Web Development</Link></li>
                  <li><a href="#">SEO</a></li>
                  <li><a href="#">UI UX Design</a></li>
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="text-white text-[22px] font-semibold mb-[18px]">
                  Get In Touch
                </h4>

                <p className="text-white/75 text-[13px] leading-[1.6] mb-[18px]">
                  Contact with us via our social channels
                </p>

                <div className="flex gap-[10px] mb-[22px]">
                  <Social icon={<FaFacebookF />} />
                  <Social icon={<FaInstagram />} />
                  <Social icon={<FaLinkedinIn />} />
                </div>

                <p className="text-white/85 text-[14px] leading-[1.55]">
                  Location: Address Line Dummy
                  <br />
                  Lorem Ipsum Dollar
                </p>
              </div>

            </div>

            {/* WATERMARK */}
            <div className="mt-[92px] flex justify-center">
              <img
                src={watermark}
                alt="Watermark"
                className="w-full max-w-[980px] object-contain opacity-35"
              />
            </div>

            {/* BOTTOM */}
            <div className="absolute left-0 bottom-0 w-full h-[72px] px-[42px] flex items-center justify-center">

              <p className="text-white/85 text-[14px]">
                © All Rights Reserved by Social X Studio - 2026
              </p>

              <button
                onClick={scrollTop}
                className="absolute right-[42px] w-[42px] h-[42px] rounded-full border border-white/70 text-white flex items-center justify-center text-[14px] hover:bg-white hover:text-black duration-300"
              >
                <FaArrowUp />
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

function Social({ icon }) {
  return (
    <a
      href="#"
      className="w-[38px] h-[38px] rounded-full bg-[#2c2c2c] text-white text-[15px] flex items-center justify-center hover:bg-white hover:text-black duration-300"
    >
      {icon}
    </a>
  );
}