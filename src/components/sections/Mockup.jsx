import img1 from "../../assets/mockup1.png";
import img2 from "../../assets/mockup2.png";

export default function Mockup() {
  return (
    <section className="py-[70px] bg-white dark:bg-[#111111] transition-all duration-500">

      {/* SAME WIDTH AS HEADER */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        <h2 className="text-[58px] font-semibold leading-none tracking-[-1.5px] text-center mb-[18px] text-black dark:text-white transition-all duration-500">
          Mockup Showcase
        </h2>

        <p className="text-center text-[18px] text-black/55 dark:text-white/60 mb-[48px] transition-all duration-500">
          Explore our premium tablet and device mockup collection.
        </p>

        <div className="grid md:grid-cols-2 gap-[28px]">

          {/* CARD 1 */}
          <div className="rounded-[22px] overflow-hidden bg-transparent">
            <img
              src={img1}
              alt="Mockup 1"
              className="w-full h-auto rounded-[22px] object-cover"
            />
          </div>

          {/* CARD 2 */}
          <div className="rounded-[22px] overflow-hidden bg-transparent">
            <img
              src={img2}
              alt="Mockup 2"
              className="w-full h-auto rounded-[22px] object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}