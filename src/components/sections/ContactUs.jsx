import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
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
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .float-card{
          animation:floatCard 5s ease-in-out infinite;
        }

        @keyframes floatCard{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }

        .btn-hover{
          transition:all .3s ease;
        }

        .btn-hover:hover{
          transform:translateY(-2px);
        }

        .btn-arrow{
          transition:transform .3s ease;
        }

        .btn-hover:hover .btn-arrow{
          transform:translate(4px,-4px);
        }

        .social-hover{
          transition:all .3s ease;
        }

        .social-hover:hover{
          transform:translateY(-4px);
        }
        `}
      </style>

      <section className="w-full min-h-screen py-[60px] sm:py-[70px] md:py-[80px] bg-[#008CF4] dark:bg-[#0b0b0b] transition-all duration-500 overflow-hidden">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-[55px] xl:gap-[90px] items-center">
          
          {/* LEFT SIDE */}
          <div className="text-white lg:pl-[70px] fade-up">
            <p className="text-[15px] sm:text-[18px] font-medium mb-[16px] sm:mb-[18px] text-white/90 uppercase tracking-wide">
              Contact Us
            </p>

            <h2 className="text-[38px] sm:text-[56px] md:text-[74px] leading-[0.98] font-semibold tracking-[-2px]">
              Get In Touch
            </h2>

            <p className="mt-[22px] sm:mt-[26px] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.7] text-white/90 max-w-[520px]">
              Have a question or project in mind? We'd love to hear
              from you.
            </p>

            {/* INFO */}
            <div className="mt-[40px] sm:mt-[60px] flex flex-col gap-[28px] sm:gap-[34px]">
              <Info
                icon={<Phone size={26} strokeWidth={2.2} />}
                title="Call Now:"
                text="0123 456 7890"
              />

              <Info
                icon={<Mail size={26} strokeWidth={2.2} />}
                title="Email:"
                text="info@domain.com"
              />

              <Info
                icon={<MapPin size={26} strokeWidth={2.2} />}
                title="Address:"
                text={
                  <>
                    Address Line Dummy Here
                    <br />
                    Lorem Ipsum dollar
                  </>
                }
              />
            </div>

            {/* SOCIAL */}
            <div className="mt-[42px] sm:mt-[58px] flex flex-wrap items-center gap-[12px] sm:gap-[14px]">
              <p className="text-[16px] sm:text-[20px] text-white/90 mr-[6px] sm:mr-[10px]">
                Follow Us on
              </p>

              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[760px] ml-auto w-full fade-up">
            <div className="float-card rounded-[24px] sm:rounded-[30px] md:rounded-[38px] border border-white/20 bg-white/10 dark:bg-white/[0.04] backdrop-blur-md px-5 sm:px-8 md:px-[48px] pt-7 sm:pt-10 md:pt-[52px] pb-7 sm:pb-8 md:pb-[42px] transition-all duration-500">
              
              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-[34px]">
                <Field placeholder="First Name*" />
                <Field placeholder="Last Name*" />
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-[34px] mt-7 sm:mt-[42px]">
                <Field placeholder="Phone*" />
                <Field placeholder="Email*" />
              </div>

              {/* MESSAGE */}
              <div className="mt-7 sm:mt-[42px]">
                <Field placeholder="Message.." />
              </div>

              {/* CHECKBOX */}
              <label className="mt-6 sm:mt-[26px] flex items-start sm:items-center gap-[12px] text-white/80 text-[15px] sm:text-[18px]">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] accent-white mt-1 sm:mt-0"
                />
                I agree to the privacy policy
              </label>

              {/* BUTTON */}
              <button className="btn-hover mt-[42px] sm:mt-[70px] md:mt-[90px] h-[54px] sm:h-[58px] px-[28px] sm:px-[34px] rounded-full border border-white/60 text-white dark:bg-white dark:text-black dark:border-white text-[18px] sm:text-[22px] font-medium inline-flex items-center gap-3 hover:bg-white hover:text-[#008CF4] dark:hover:bg-[#008CF4] dark:hover:text-white transition-all duration-300">
                Send Now
                <span className="btn-arrow text-[22px] sm:text-[24px] leading-none">
                  ↗
                </span>
              </button>

              <p className="mt-[18px] sm:mt-[20px] text-[14px] sm:text-[18px] text-white/70 leading-[1.6]">
                You will get a response from us within 5 minutes.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

function Field({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-white/40 pb-[14px] text-white text-[16px] sm:text-[18px] placeholder:text-white/70 outline-none focus:border-white transition-all duration-300"
    />
  );
}

function SocialIcon({ icon }) {
  return (
    <button className="social-hover w-[48px] h-[48px] sm:w-[58px] sm:h-[58px] rounded-full border border-white/45 flex items-center justify-center text-white text-[18px] sm:text-[20px] hover:bg-white hover:text-[#008CF4] transition-all duration-300">
      {icon}
    </button>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="flex items-start gap-[16px] sm:gap-[18px]">
      <div className="mt-[3px] text-white">
        {icon}
      </div>

      <div>
        <p className="text-[15px] sm:text-[18px] text-white/70 mb-[3px]">
          {title}
        </p>

        <p className="text-[20px] sm:text-[24px] md:text-[26px] leading-[1.25] font-semibold tracking-[-0.5px] text-white">
          {text}
        </p>
      </div>
    </div>
  );
}