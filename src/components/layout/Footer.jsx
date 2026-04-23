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
    <>
      <style>
        {`
        .fade-up{
          animation:fadeUp .8s ease forwards;
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(26px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .btn-hover{
          transition:all .3s ease;
        }

        .btn-hover:hover{
          transform:translateY(-3px);
        }

        .arrow-move{
          transition:transform .3s ease;
        }

        .btn-hover:hover .arrow-move{
          transform:translate(4px,-4px);
        }

        .link-hover{
          transition:all .25s ease;
        }

        .link-hover:hover{
          opacity:1;
          transform:translateX(4px);
        }

        .watermark-float{
          animation:floatMark 6s ease-in-out infinite;
        }

        @keyframes floatMark{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }
        `}
      </style>

      <footer className="w-full bg-black pt-0 pb-0 -mt-[1px] overflow-hidden">
        {/* aligned with header */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* MAIN BOX */}
          <div className="bg-black rounded-t-[24px] sm:rounded-t-[30px] md:rounded-t-[34px] pt-[55px] sm:pt-[70px] md:pt-[78px] pb-0 px-0 min-h-auto md:min-h-[760px] relative">
            
            {/* TOP GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.6fr_0.8fr_0.8fr_1fr] gap-[42px] sm:gap-[50px] xl:gap-[70px]">
              
              {/* LEFT */}
              <div className="fade-up">
                <img
                  src={logo}
                  alt="Social X Studio"
                  className="w-[180px] sm:w-[212px] h-auto object-contain"
                />

                <h3 className="mt-[28px] sm:mt-[34px] text-white text-[24px] sm:text-[26px] font-semibold leading-[1.2] tracking-[-0.5px]">
                  Do You Like What You See?
                </h3>

                <p className="mt-[14px] text-white/70 text-[15px] leading-[1.7] max-w-[360px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt.
                </p>

                <a
                  href="#"
                  className="btn-hover mt-[26px] h-[48px] px-[26px] sm:px-[30px] rounded-full border border-white/70 text-white text-[14px] sm:text-[15px] font-medium inline-flex items-center justify-center gap-3 hover:bg-white hover:text-black duration-300"
                >
                  Book Your Free Consultation Call

                  <span className="arrow-move text-[18px] leading-none">
                    ↗
                  </span>
                </a>
              </div>

              {/* QUICK LINKS */}
              <div
                className="fade-up"
                style={{ animationDelay: "120ms" }}
              >
                <h4 className="text-white text-[20px] sm:text-[22px] font-semibold mb-[22px] sm:mb-[24px]">
                  Quick Links
                </h4>

                <ul className="space-y-[14px] text-white/90 text-[15px]">
                  <li><Link className="link-hover inline-block" to="/">Home</Link></li>
                  <li><Link className="link-hover inline-block" to="/about">About Us</Link></li>
                  <li><Link className="link-hover inline-block" to="/services">Services</Link></li>
                  <li><Link className="link-hover inline-block" to="/portfolio">Portfolio</Link></li>
                  <li><Link className="link-hover inline-block" to="/blog">Blogs</Link></li>
                  <li><Link className="link-hover inline-block" to="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* SERVICES */}
              <div
                className="fade-up"
                style={{ animationDelay: "220ms" }}
              >
                <h4 className="text-white text-[20px] sm:text-[22px] font-semibold mb-[22px] sm:mb-[24px]">
                  Services
                </h4>

                <ul className="space-y-[14px] text-white/90 text-[15px]">
                  <li><Link className="link-hover inline-block" to="/web-development">Web Development</Link></li>
                  <li><a className="link-hover inline-block" href="#">SEO</a></li>
                  <li><a className="link-hover inline-block" href="#">UI UX Design</a></li>
                  <li><a className="link-hover inline-block" href="#">Branding</a></li>
                  <li><a className="link-hover inline-block" href="#">Marketing</a></li>
                  <li><a className="link-hover inline-block" href="#">Support</a></li>
                </ul>
              </div>

              {/* CONTACT */}
              <div
                className="fade-up"
                style={{ animationDelay: "320ms" }}
              >
                <h4 className="text-white text-[20px] sm:text-[22px] font-semibold mb-[18px]">
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
            <div className="mt-[55px] sm:mt-[75px] md:mt-[92px] flex justify-center">
              <img
                src={watermark}
                alt="Watermark"
                className="watermark-float w-full max-w-[620px] sm:max-w-[780px] xl:max-w-[980px] object-contain opacity-35"
              />
            </div>

            {/* BOTTOM */}
            <div className="relative mt-[25px] sm:mt-[10px] md:absolute md:left-0 md:bottom-0 w-full min-h-[72px] pb-6 md:pb-0 flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-white/85 text-[13px] sm:text-[14px] text-center">
                © All Rights Reserved by Social X Studio - 2026
              </p>

              <button
                onClick={scrollTop}
                className="btn-hover md:absolute md:right-0 w-[42px] h-[42px] rounded-full border border-white/70 text-white flex items-center justify-center text-[14px] hover:bg-white hover:text-black duration-300"
              >
                <FaArrowUp />
              </button>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

function Social({ icon }) {
  return (
    <a
      href="#"
      className="btn-hover w-[38px] h-[38px] rounded-full bg-[#2c2c2c] text-white text-[15px] flex items-center justify-center hover:bg-white hover:text-black duration-300"
    >
      {icon}
    </a>
  );
}