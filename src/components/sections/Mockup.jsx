import img1 from "../../assets/mockup1.png";
import img2 from "../../assets/mockup2.png";

export default function Mockup() {
  return (
    <>
      <style>
        {`
        .fade-up{
          opacity:0;
          transform:translateY(22px);
          animation:fadeUp .8s ease forwards;
        }

        @keyframes fadeUp{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .mock-card{
          overflow:hidden;
          transition:all .4s ease;
        }

        .mock-card img{
          transition:transform .8s ease;
        }

        .mock-card:hover{
          transform:translateY(-4px);
        }

        .mock-card:hover img{
          transform:scale(1.03);
        }
        `}
      </style>

      <section className="py-[clamp(44px,8vw,70px)] bg-white dark:bg-[#111111] transition-all duration-500">

        {/* SAME WIDTH AS HEADER */}
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* heading */}
          <h2 className="fade-up text-[clamp(34px,7vw,58px)] font-semibold leading-[0.96] tracking-[-0.04em] text-center mb-[clamp(12px,2vw,18px)] text-black dark:text-white transition-all duration-500">
            Mockup Showcase
          </h2>

          {/* subheading */}
          <p className="fade-up text-center text-[clamp(15px,2vw,18px)] leading-[1.7] text-black/55 dark:text-white/60 mb-[clamp(28px,5vw,48px)] max-w-[720px] mx-auto transition-all duration-500">
            Explore our premium tablet and device mockup collection.
          </p>

          {/* images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(18px,3vw,28px)]">

            {/* CARD 1 */}
            <div className="fade-up mock-card rounded-[clamp(16px,3vw,22px)] bg-transparent">
              <img
                src={img1}
                alt="Mockup 1"
                className="w-full h-auto rounded-[clamp(16px,3vw,22px)] object-cover"
              />
            </div>

            {/* CARD 2 */}
            <div
              className="fade-up mock-card rounded-[clamp(16px,3vw,22px)] bg-transparent"
              style={{ animationDelay: "120ms" }}
            >
              <img
                src={img2}
                alt="Mockup 2"
                className="w-full h-auto rounded-[clamp(16px,3vw,22px)] object-cover"
              />
            </div>

          </div>

        </div>

      </section>
    </>
  );
}