import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

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
    <footer className="bg-[#f3f3f3] p-[5px]">
      <div className="max-w-[1840px] mx-auto bg-black border border-[#0a8fff] rounded-[34px] px-[28px] md:px-[52px] pt-[58px] pb-[34px] overflow-hidden">

        {/* TOP AREA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-14">

          {/* LEFT */}
          <div>
            <a href="#">
              <img
                src={logo}
                alt="Social X Studio"
                className="w-[232px] h-auto mb-[28px] object-contain"
              />
            </a>

            <a href="#">
              <h3 className="text-white text-[24px] font-semibold leading-none mb-[18px]">
                Do You Like What Your See?
              </h3>
            </a>

            <p className="text-[#c8c8c8] text-[15px] leading-[30px] max-w-[330px] mb-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
            </p>

            {/* FIXED CTA BUTTON */}
           <a
  href="#"
  className="inline-flex items-center gap-3 h-[46px] px-[22px] rounded-full border border-white bg-transparent text-white text-[15px] font-medium"
>
  <span>Book Your Free Consultation Call</span>

  <span
    className="text-white text-[16px] !bg-transparent !border-0 !shadow-none p-0 m-0"
    style={{ background: "transparent" }}
  >
    ↗
  </span>
</a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <a href="#">
              <h4 className="text-white text-[24px] font-semibold mb-[22px]">
                Quick Links
              </h4>
            </a>

            <ul className="space-y-[13px] text-white text-[15px]">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <a href="#">
              <h4 className="text-white text-[24px] font-semibold mb-[22px]">
                Services
              </h4>
            </a>

            <ul className="space-y-[13px] text-white text-[15px]">
              <li><a href="#">Lorem Ipsum</a></li>
              <li><a href="#">Lorem Ipsum</a></li>
              <li><a href="#">Lorem Ipsum</a></li>
              <li><a href="#">Lorem Ipsum</a></li>
              <li><a href="#">Lorem Ipsum</a></li>
              <li><a href="#">Lorem Ipsum</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <a href="#">
              <h4 className="text-white text-[24px] font-semibold mb-[18px]">
                Get In Touch
              </h4>
            </a>

            <p className="text-white text-[15px] mb-[26px]">
              Contact with us Via Out Social
            </p>

            <div className="flex gap-[10px] mb-[24px]">

              <a
                href="#"
                className="w-[40px] h-[40px] rounded-full bg-[#2a2a2a] text-white flex items-center justify-center text-[16px]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-[40px] h-[40px] rounded-full bg-[#2a2a2a] text-white flex items-center justify-center text-[16px]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-[40px] h-[40px] rounded-full bg-[#2a2a2a] text-white flex items-center justify-center text-[16px]"
              >
                <FaLinkedinIn />
              </a>

            </div>

            <a href="#">
              <p className="text-white text-[15px] leading-[28px]">
                Location: Address Line Dummy
                <br />
                Lorem Ipsum Dollar
              </p>
            </a>
          </div>
        </div>

        {/* BIG LOGO */}
        <div className="pt-[72px] pb-[46px] flex justify-center">
          <a href="#">
            <img
              src={watermark}
              alt="Watermark"
              className="w-full max-w-[700px] opacity-80 object-contain"
            />
          </a>
        </div>

        {/* BOTTOM */}
        <div className="relative min-h-[48px] flex items-center justify-center">
          <a href="#">
            <p className="text-white text-[14px]">
              © All Rights Reserved by Social X Studio - 2026
            </p>
          </a>

          <button
            onClick={scrollTop}
            className="absolute right-0 w-[44px] h-[44px] rounded-full border border-white text-white flex items-center justify-center text-[14px]"
          >
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}