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
    <footer className="w-full bg-[#efefef] pt-[16px] pb-0">

      {/* WRAPPER */}
      <div className="max-w-[1900px] mx-auto">

        {/* MAIN BOX */}
        <div className="bg-black rounded-t-[34px] px-[84px] pt-[78px] pb-0 overflow-hidden min-h-[760px] relative">

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
                Do You Like What Your See?
              </h3>

              <p className="mt-[14px] text-white/70 text-[15px] leading-[1.7] max-w-[360px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt
              </p>

              <a
                href="#"
                className="mt-[28px] h-[42px] px-[20px] rounded-full border border-white/70 text-white text-[14px] font-medium inline-flex items-center gap-3"
              >
                Book Your Free Consultation Call

                <span className="text-[16px] leading-none">
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
              <h4 className="text-white text-[22px] font-semibold mb-[24px]">
                Services
              </h4>

              <ul className="space-y-[14px] text-white/90 text-[15px]">
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
              <h4 className="text-white text-[22px] font-semibold mb-[18px]">
                Get In Touch
              </h4>

              <p className="text-white/75 text-[13px] leading-[1.6] mb-[18px]">
                Contact with us Via Out Social
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
              className="w-full max-w-[760px] object-contain opacity-35"
            />
          </div>

          {/* BOTTOM */}
          <div className="absolute left-0 bottom-0 w-full h-[72px] px-[84px] flex items-center justify-center">

            <p className="text-white/85 text-[14px]">
              © All Rights Reserved by Social X Studio - 2026
            </p>

            <button
              onClick={scrollTop}
              className="absolute right-[32px] w-[42px] h-[42px] rounded-full border border-white/70 text-white flex items-center justify-center text-[14px]"
            >
              <FaArrowUp />
            </button>

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
      className="w-[38px] h-[38px] rounded-full bg-[#2c2c2c] text-white text-[15px] flex items-center justify-center"
    >
      {icon}
    </a>
  );
}