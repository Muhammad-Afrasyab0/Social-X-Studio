import { motion } from "framer-motion";
import xImg from "../../assets/x.png";

import Reveal from "../../components/animations/Reveal";
import CountUp from "../../components/animations/CountUp";

export default function WhoWeAreSection() {
  return (
    <>
      <style>
        {`
        .float-premium{
          animation: floatPremium 6s ease-in-out infinite;
        }

        @keyframes floatPremium{
          0%,100%{ transform: translateY(0px); }
          50%{ transform: translateY(-18px); }
        }
        `}
      </style>

      <section className="w-full bg-[#ececec] dark:bg-[#0c0c0c] transition-all duration-500 overflow-hidden">

        <div className="max-w-[1900px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[42px] py-[80px]">

          {/* TOP */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-4">
              <Reveal>
                <p className="text-[16px] font-medium text-black dark:text-white">
                  Who We Are
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h2 className="
                  text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px]
                  font-semibold leading-[1.2] tracking-[-0.02em]
                  text-black dark:text-white
                ">
                  Digital agency from Pakistan delivering design,
                  <br />
                  branding & web solutions worldwide.
                </h2>
              </Reveal>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-3 flex justify-start">
              <Reveal delay={0.2}>
                <motion.div
                  className="float-premium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
                >
                  <img
                    src={xImg}
                    alt="Digital Agency Pakistan"
                    className="w-[200px] sm:w-[230px] lg:w-[260px] object-contain"
                  />
                </motion.div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.3}>
                <h3 className="text-[90px] sm:text-[100px] lg:text-[110px] font-bold leading-none text-black dark:text-white">
                  <CountUp end={15} />
                  <span className="text-[34px] align-top">M</span>
                </h3>
              </Reveal>

              <Reveal delay={0.35}>
                <p className="text-[16px] sm:text-[17px] text-gray-700 dark:text-white/70 max-w-[260px]">
                  Helping brands scale globally with high-performance digital solutions valued at 15M+
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.45}>
                <p className="text-[16px] sm:text-[17px] leading-[1.8] text-gray-700 dark:text-white/70 max-w-[420px]">
                  We specialize in building modern digital products, brand identities, and scalable web platforms. Our approach combines strategy, design, and technology to create impactful digital experiences.
                </p>
              </Reveal>

              <Reveal delay={0.55}>
           
                <a
                  href="/about"
                  className="mt-8 px-8 h-[54px] rounded-full bg-black dark:bg-white text-white dark:text-black transition-all duration-300 hover:scale-[1.05] inline-flex items-center justify-center"
                >
                  Explore More ↗
                </a>
              </Reveal>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}