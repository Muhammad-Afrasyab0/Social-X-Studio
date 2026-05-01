import { motion } from "framer-motion";
import xImg from "../../assets/x.png";

import Reveal from "../../components/animations/Reveal";
import CountUp from "../../components/animations/CountUp";

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-[#ececec] overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20">

        <div className="grid lg:grid-cols-12 gap-8">

          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-[16px] font-medium">Who We Are</p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-semibold leading-[1.05] tracking-[-0.04em] max-w-[760px]">
                We create strategic designs and innovative solutions that help
                brands stand out.
              </h2>
            </Reveal>
          </div>

        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-12 gap-10 items-center">

          {/* Image */}
          <div className="lg:col-span-3 flex justify-center">
            <Reveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={xImg}
                  alt="logo"
                  className="w-[220px] lg:w-[270px] h-auto object-contain"
                />
              </motion.div>
            </Reveal>
          </div>

          {/* Number */}
          <div className="lg:col-span-4">
            <Reveal delay={0.3}>
              <h3 className="text-[110px] font-bold leading-none">
                <CountUp end={15} />
                <span className="text-[36px] align-top">M</span>
              </h3>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="text-[17px] text-gray-700 max-w-[250px]">
                We help brands scale like companies valued at 15M+
              </p>
            </Reveal>
          </div>

          {/* Text */}
          <div className="lg:col-span-5">
            <Reveal delay={0.45}>
              <p className="text-[17px] leading-[1.8] text-gray-700 max-w-[430px]">
                We are a forward-thinking digital agency focused on delivering strategic design, innovative solutions, and measurable results.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <button className="mt-8 px-8 h-[54px] rounded-full bg-black text-white">
                Explore More ↗
              </button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}