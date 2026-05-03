import React from "react";

export default function SocialMarketingBene() {
  const cards = [
    {
      title: "Audience Growth & Engagement",
      desc:
        "We create data-driven social media strategies that attract the right audience, increase engagement, and build strong brand communities.",
      points: [
        "Targeted audience reach",
        "Higher engagement rates",
        "Consistent brand interaction",
        "Stronger community building",
      ],
    },
    {
      title: "Conversion Focused Campaigns",
      desc:
        "Our campaigns are designed to turn followers into customers by optimizing content, ads, and user journeys for better results.",
      points: [
        "Optimized ad performance",
        "Higher lead generation",
        "Improved conversion rates",
        "Better ROI on campaigns",
      ],
    },
    {
      title: "Brand Visibility & Authority",
      desc:
        "We strengthen your brand presence across platforms with consistent content, creative strategy, and modern social media trends.",
      points: [
        "Strong brand identity",
        "Consistent visual presence",
        "Platform-specific strategies",
        "Increased brand awareness",
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
            Benefits of Our Social Marketing Services
          </h2>

          {/* Paragraphs */}
          <p className="fade-up mt-[clamp(18px,4vw,28px)] text-black/70 dark:text-white/70 text-[clamp(15px,2vw,17px)] leading-[1.95] max-w-[1780px] transition-all duration-500">
            Social media marketing is essential for modern businesses to build visibility, connect with audiences, and drive consistent growth. Our strategies help brands reach the right people and create meaningful engagement.
          </p>

          <p className="fade-up mt-[clamp(16px,3vw,24px)] text-black/70 dark:text-white/70 text-[clamp(15px,2vw,17px)] leading-[1.95] max-w-[1780px] transition-all duration-500">
            We combine creative content, performance marketing, and platform-specific strategies to deliver measurable results across Instagram, Facebook, LinkedIn, and other digital channels.
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