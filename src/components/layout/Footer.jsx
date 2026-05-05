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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#ececec] dark:bg-black px-[10px] sm:px-[14px] lg:px-[26px] pt-[8px] pb-[26px] overflow-hidden">
      <div className="w-full">

        <div className="bg-black rounded-[28px] sm:rounded-[34px] lg:rounded-[38px] 
                        relative px-[34px] sm:px-[48px] lg:px-[64px] 
                        pt-[52px] sm:pt-[58px] lg:pt-[62px] 
                        pb-[80px] sm:pb-[90px] lg:pb-[100px] 
                        min-h-[auto] lg:min-h-[560px]">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.55fr_.78fr_.78fr_1fr] gap-y-[34px] gap-x-[30px] relative z-10">

            {/* LEFT */}
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-[170px] sm:w-[190px] lg:w-[205px] h-auto object-contain"
              />

              <h3 className="mt-[18px] text-white text-[28px] sm:text-[31px] lg:text-[33px] font-semibold tracking-[-0.03em] leading-[1.15]">
                Do You Like What Your See?
              </h3>

              <p className="mt-[10px] text-white/70 text-[12px] sm:text-[13px] leading-[1.8] max-w-[310px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt
              </p>

              <a href="/contact">
                <button className="mt-[18px] h-[44px] px-[26px] rounded-full border border-white text-white text-[13px] font-medium inline-flex items-center gap-3 hover:bg-white hover:text-black duration-300">
                  Book Your Free Consultation Call
                  <span className="text-[15px]">↗</span>
                </button>
              </a>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-white text-[20px] sm:text-[22px] font-semibold mb-[14px]">
                Quick Links
              </h4>

              <ul className="space-y-[9px] text-white/88 text-[13px]">
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
              <h4 className="text-white text-[20px] sm:text-[22px] font-semibold mb-[14px]">
                Services
              </h4>

              <ul className="space-y-[9px] text-white/88 text-[13px]">
                <li><Link to="/social-marketing">Social Marketing</Link></li>
                <li><Link to="/web-development">Web Development</Link></li>
                <li><Link to="/ui-ux-design">UI-UX Solution</Link></li>
                <li><Link to="/video-production">Video Production</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-white text-[20px] sm:text-[22px] font-semibold mb-[12px]">
                Get In Touch
              </h4>

              <p className="text-white/75 text-[11px] leading-[1.7] mb-[14px]">
                Contact with us Via Out Social
              </p>

              <div className="flex gap-[10px] mb-[14px]">
                <Social href="#" icon={<FaFacebookF />} />
                <Social href="https://www.instagram.com/socialxstudio.pk/" icon={<FaInstagram />} />
                <Social href="https://www.linkedin.com/company/social-x-studio/?originalSubdomain=pk" icon={<FaLinkedinIn />} />
              </div>

              <p className="text-white/82 text-[12px] leading-[1.55]">
                Location: Plot 94, Sector I-10/3 
                <br />
                Islamabad 44800
                <br />
                Pakistan
              </p>
            </div>
          </div>

          {/* WATERMARK */}
          <div className="relative mt-10 flex justify-center pointer-events-none
                          sm:absolute sm:left-1/2 sm:-translate-x-1/2 
                          sm:bottom-[80px] lg:bottom-[95px] sm:mt-0">
            <img
              src={watermark}
              alt="watermark"
              className="w-[85%] sm:w-[60%] md:w-[55%] lg:w-[50%] xl:w-[760px]
                         h-auto object-contain
                         opacity-100
                         drop-shadow-[0_18px_22px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* COPYRIGHT */}
          <div className="absolute bottom-[30px] left-0 w-full flex justify-center z-10">
            <p className="text-white/78 text-[12px] sm:text-[13px]">
              © All Rights Reserved by Social X Studio - 2026
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={scrollTop}
            className="absolute right-[18px] bottom-[24px] w-[34px] h-[34px] rounded-full border border-white text-white text-[12px] flex items-center justify-center hover:bg-white hover:text-black duration-300 z-10"
          >
            <FaArrowUp />
          </button>

        </div>
      </div>
    </footer>
  );
}

function Social({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[34px] h-[34px] rounded-full bg-[#2b2b2b] text-white text-[13px] flex items-center justify-center hover:bg-white hover:text-black duration-300"
    >
      {icon}
    </a>
  );
}