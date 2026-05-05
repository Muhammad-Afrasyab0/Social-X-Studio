import { useEffect, useState } from "react";
import Reveal from "../../components/animations/Reveal";

export default function StartHere() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      title: "Who We Are ?",
      text: `We are a digital agency from Pakistan delivering modern web, branding, and UI/UX solutions for clients in UAE, UK, and USA. We help businesses grow with powerful digital experiences.`,
      link: "/about", 
    },
    {
      title: "What We Do ?",
      text: `Our team creates visually stunning and high-performing designs tailored to your business needs. From websites to complete brand systems, we focus on performance and user experience.`,
      link: "/portfolio", 
    },
    {
      title: "Drop us your message!",
      text: `Have an idea or project in mind? Connect with us and let’s build something impactful together. We turn concepts into real digital products that drive results globally.`,
      link: "/contact", 
    },
  ];

  return (
    <>
      <style>
        {`
        .fade-up{
          opacity:0;
          transform:translateY(30px);
          transition:all .8s cubic-bezier(.22,1,.36,1);
        }

        .fade-up.show{
          opacity:1;
          transform:translateY(0);
        }

        .arrow-move{
          transition:transform .3s ease;
        }

        .link-hover:hover .arrow-move{
          transform:translate(4px,-4px);
        }

        .text-reveal span{
          opacity:0;
          transform:translateY(14px);
          display:inline-block;
          animation:textReveal .6s cubic-bezier(.22,1,.36,1) forwards;
        }

        @keyframes textReveal{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }
        `}
      </style>

      <section className="bg-[#0c0c0c] dark:bg-[#0c0c0c] py-[60px] sm:py-[75px] md:py-[80px] xl:py-[90px]">
        
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 md:gap-y-14 gap-x-10 xl:gap-x-[70px]">
            
            {items.map((item, index) => (
              
              <Reveal key={index} delay={index * 0.35}>
                <div
                  className={`flex flex-col justify-center fade-up ${
                    show ? "show" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  <h3 className="text-white text-[22px] font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-[18px] text-white/65 text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.8] max-w-[390px] text-reveal">
                    {item.text.split(" ").map((word, i) => (
                      <span key={i} style={{ animationDelay: `${i * 0.03}s` }}>
                        {word}&nbsp;
                      </span>
                    ))}
                  </p>

                  {/* 🔥 DYNAMIC LINK */}
                  <a
                    href={item.link}
                    className="link-hover mt-[28px] inline-flex items-center gap-[10px] text-white text-[16px] xl:text-[17px] font-medium leading-none tracking-[-0.2px] w-fit"
                  >
                    <span>Start Here</span>

                    <span className="arrow-move text-[24px] xl:text-[26px] leading-none font-light relative top-[-1px]">
                      ↗
                    </span>
                  </a>
                </div>
              </Reveal>

            ))}

          </div>
        </div>
      </section>
    </>
  );
}