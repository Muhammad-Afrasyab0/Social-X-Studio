import React from "react";
import {
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaSpotify,
  FaSlack,
  FaDropbox,
} from "react-icons/fa";

export default function TrustUs() {
  const logos = [
    { icon: <FaGoogle />, name: "Logoipsum" },
    { icon: <FaAmazon />, name: "Logoipsum" },
    { icon: <FaMicrosoft />, name: "Logoipsum" },
    { icon: <FaSpotify />, name: "Logoipsum" },
    { icon: <FaSlack />, name: "Logoipsum" },
    { icon: <FaDropbox />, name: "Logoipsum" },
  ];

  return (
    <section className="w-full bg-[#efefef] dark:bg-[#111111] overflow-hidden py-[58px] transition-all duration-500">

      {/* Header Alignment */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-black dark:text-white text-[38px] font-semibold leading-none tracking-[-1px] transition-all duration-500">
            Worlds Most Popular Companies Trust Us
          </h2>

          <p className="mt-[12px] text-[16px] text-black/70 dark:text-white/70 transition-all duration-500">
            Connect with us & let’s build something cool together
          </p>

        </div>

        {/* Logo Marquee */}
        <div className="mt-[42px] relative overflow-hidden">

          <div className="flex w-max animate-marquee gap-[70px] items-center">

            {[...logos, ...logos, ...logos].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 shrink-0 text-[#8f8f8f] dark:text-white/55 transition-all duration-500"
              >

                <span className="text-[24px]">
                  {item.icon}
                </span>

                <span className="text-[18px] font-medium">
                  {item.name}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Border */}
        <div className="mt-[32px] border-t border-black/10 dark:border-white/10 transition-all duration-500"></div>

      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>

    </section>
  );
}