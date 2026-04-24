import React from "react";

export default function UiUxBene() {
  const cards = [
    {
      title: "User-Centered Design",
      desc:
        "We create intuitive UI/UX experiences focused on user behavior, engagement, and smooth digital interactions.",
      points: [
        "Easy and clear user journeys",
        "Designs built around user needs",
        "Higher engagement and retention",
        "Improved satisfaction across devices",
      ],
    },
    {
      title: "Conversion Focused",
      desc:
        "Every layout, section, and interaction is strategically designed to increase leads, clicks, and sales.",
      points: [
        "Better call-to-action placement",
        "Optimized landing page flow",
        "Reduced bounce rates",
        "Higher conversion opportunities",
      ],
    },
    {
      title: "Modern Visual Impact",
      desc:
        "We build modern interfaces that strengthen brand identity and create a premium first impression.",
      points: [
        "Clean and professional aesthetics",
        "Consistent brand visuals",
        "Responsive mobile-first design",
        "Memorable customer experience",
      ],
    },
  ];

  return (
    <>
      <style>
        {`
        .fade-up{
          opacity:0;
          transform:translateY(24px);
          animation:fadeUp .8s ease forwards;
        }

        @keyframes fadeUp{
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .benefit-card{
          transition:all .35s ease;
        }

        .benefit-card:hover{
          transform:translateY(-5px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] pb-[clamp(54px,8vw,90px)] transition-all duration-500">
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* Heading */}
          <h2 className="fade-up text-black dark:text-white text-[clamp(34px,7vw,56px)] font-semibold leading-[1] tracking-[-0.04em] max-w-[980px] transition-all duration-500">
            Benefits of Our UI/UX Design Services
          </h2>

          {/* Paragraphs */}
          <p className="fade-up mt-[clamp(18px,4vw,28px)] text-black/70 dark:text-white/70 text-[clamp(15px,2vw,17px)] leading-[1.95] max-w-[1780px] transition-all duration-500">
            Great design is more than appearance. Our UI/UX design services help
            businesses create smooth digital experiences that attract users,
            build trust, and guide visitors toward action.
          </p>

          <p className="fade-up mt-[clamp(16px,3vw,24px)] text-black/70 dark:text-white/70 text-[clamp(15px,2vw,17px)] leading-[1.95] max-w-[1780px] transition-all duration-500">
            We combine usability, visual strategy, and modern design systems to
            craft websites and applications that are intuitive, engaging, and
            optimized for long-term growth.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(18px,3vw,28px)] mt-[clamp(30px,5vw,52px)]">

            {cards.map((item, index) => (
              <div
                key={index}
                className="fade-up benefit-card bg-[#e7e7e7] dark:bg-[#1a1a1a] rounded-[14px] p-[clamp(22px,4vw,34px)] transition-all duration-500"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* title */}
                <h3 className="text-black dark:text-white text-[clamp(28px,5vw,34px)] font-medium leading-[1.02] tracking-[-0.03em] transition-all duration-500">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="mt-[clamp(14px,2vw,18px)] text-black/65 dark:text-white/65 text-[clamp(14px,2vw,16px)] leading-[1.9] transition-all duration-500">
                  {item.desc}
                </p>

                {/* points */}
                <div className="mt-[clamp(20px,3vw,28px)] space-y-[14px] sm:space-y-[16px]">
                  {item.points.map((point, i) => (
                    <p
                      key={i}
                      className="text-black/70 dark:text-white/70 text-[clamp(14px,2vw,15px)] leading-[1.5] transition-all duration-500"
                    >
                      {point}
                    </p>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}