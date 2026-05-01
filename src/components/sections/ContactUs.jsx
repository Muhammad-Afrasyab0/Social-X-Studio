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

      <section className="w-full min-h-screen 
        py-[clamp(60px,8vw,90px)] 
        bg-[#008CF4] dark:bg-[#0b0b0b] 
        transition-all duration-500 overflow-hidden">

        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto 
          px-[clamp(16px,4vw,40px)] 
          grid grid-cols-1 lg:grid-cols-2 
          gap-[clamp(40px,6vw,90px)] items-center">

          {/* LEFT */}
          <div className="text-white lg:pl-[clamp(0px,4vw,70px)] fade-up">

            <p className="text-[clamp(14px,2vw,18px)] font-medium 
              mb-[clamp(14px,2vw,18px)] text-white/90 uppercase tracking-wide">
              Contact Us
            </p>

            <h2 className="text-[clamp(38px,6vw,74px)] 
              leading-[0.98] font-semibold tracking-[-2px]">
              Get In Touch
            </h2>

            <p className="mt-[clamp(18px,3vw,26px)] 
              text-[clamp(16px,2vw,20px)] leading-[1.7] text-white/90 max-w-[520px]">
              Have a question or project in mind? We'd love to hear from you.
            </p>

            {/* INFO */}
            <div className="mt-[clamp(30px,6vw,60px)] flex flex-col gap-[clamp(22px,3vw,34px)]">

              <Info icon={<Phone size={26} strokeWidth={2.2} />} title="Call Now:" text="0123 456 7890" />
              <Info icon={<Mail size={26} strokeWidth={2.2} />} title="Email:" text="info@domain.com" />
              <Info icon={<MapPin size={26} strokeWidth={2.2} />} title="Address:" text={
                <>Address Line Dummy Here<br />Lorem Ipsum dollar</>
              } />
            </div>

            {/* SOCIAL */}
            <div className="mt-[clamp(30px,5vw,58px)] flex flex-wrap items-center gap-[clamp(10px,2vw,14px)]">

              <p className="text-[clamp(16px,2vw,20px)] text-white/90 mr-[8px]">
                Follow Us on
              </p>

              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-[760px] ml-auto w-full fade-up">

            <div className="float-card 
              rounded-[clamp(20px,3vw,38px)] 
              border border-white/20 
              bg-white/10 dark:bg-white/[0.04] 
              backdrop-blur-md 
              px-[clamp(20px,4vw,48px)] 
              pt-[clamp(28px,4vw,52px)] 
              pb-[clamp(28px,4vw,42px)]">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(20px,3vw,34px)]">
                <Field placeholder="First Name*" />
                <Field placeholder="Last Name*" />
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(20px,3vw,34px)] mt-[clamp(20px,3vw,42px)]">
                <Field placeholder="Phone*" />
                <Field placeholder="Email*" />
              </div>

              {/* MESSAGE */}
              <div className="mt-[clamp(20px,3vw,42px)]">
                <Field placeholder="Message.." />
              </div>

              {/* CHECKBOX */}
              <label className="mt-[clamp(18px,2vw,26px)] flex items-start sm:items-center gap-[12px] text-white/80 text-[clamp(14px,2vw,18px)]">
                <input type="checkbox" className="w-[18px] h-[18px] accent-white mt-1 sm:mt-0" />
                I agree to the privacy policy
              </label>

              {/* BUTTON */}
              <button className="btn-hover 
                mt-[clamp(40px,6vw,90px)] 
                h-[clamp(50px,6vw,58px)] 
                px-[clamp(24px,3vw,34px)] 
                rounded-full border border-white/60 
                text-white dark:bg-white dark:text-black 
                dark:border-white 
                text-[clamp(16px,2vw,22px)] 
                font-medium inline-flex items-center gap-3 
                hover:bg-white hover:text-[#008CF4] 
                dark:hover:bg-[#008CF4] dark:hover:text-white">

                Send Now
                <span className="btn-arrow text-[clamp(18px,2vw,24px)]">↗</span>
              </button>

              <p className="mt-[clamp(14px,2vw,20px)] 
                text-[clamp(14px,2vw,18px)] text-white/70 leading-[1.6]">
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
      className="w-full bg-transparent border-0 border-b border-white/40 
      pb-[12px] text-white text-[clamp(14px,2vw,18px)] 
      placeholder:text-white/70 outline-none focus:border-white transition-all"
    />
  );
}

function SocialIcon({ icon }) {
  return (
    <button className="social-hover 
      w-[clamp(44px,5vw,58px)] 
      h-[clamp(44px,5vw,58px)] 
      rounded-full border border-white/45 
      flex items-center justify-center 
      text-white text-[clamp(16px,2vw,20px)] 
      hover:bg-white hover:text-[#008CF4] transition-all">
      {icon}
    </button>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="flex items-start gap-[clamp(14px,2vw,18px)]">
      <div className="mt-[3px] text-white">{icon}</div>

      <div>
        <p className="text-[clamp(14px,2vw,18px)] text-white/70 mb-[3px]">
          {title}
        </p>

        <p className="text-[clamp(18px,2.5vw,26px)] leading-[1.25] font-semibold tracking-[-0.5px] text-white">
          {text}
        </p>
      </div>
    </div>
  );
}