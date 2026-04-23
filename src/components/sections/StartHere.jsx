import { useEffect, useState } from "react";

export default function StartHere() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      title: "Who We Are & What We Do",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.`,
    },
    {
      title: "We’ll design your project",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.`,
    },
    {
      title: "Drop us your message!",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.`,
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
        `}
      </style>

      <section className="bg-[#11141b] dark:bg-[#efefef] transition-all duration-500 py-[60px] sm:py-[75px] md:py-[80px] xl:py-[90px]">
        {/* Same alignment as header / hero */}
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 md:gap-y-14 gap-x-10 xl:gap-x-[70px]">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center fade-up ${
                  show ? "show" : ""
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <h3 className="text-white dark:text-black text-[22px] sm:text-[22px] xl:text-[22px] font-semibold leading-tight transition-all duration-500">
                  {item.title}
                </h3>

                <p className="mt-[18px] text-white/65 dark:text-black/65 text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.8] max-w-[390px] transition-all duration-500">
                  {item.text}
                </p>

                <a
                  href="#"
                  className="link-hover mt-[28px] inline-flex items-center gap-[10px] text-white dark:text-black text-[16px] xl:text-[17px] font-medium leading-none tracking-[-0.2px] transition-all duration-500 w-fit"
                >
                  <span>Start Here</span>

                  <span className="arrow-move text-[24px] xl:text-[26px] leading-none font-light relative top-[-1px]">
                    ↗
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}