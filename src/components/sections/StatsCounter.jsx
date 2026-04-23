import React, { useEffect, useState } from "react";

export default function StatsCounter() {
  const stats = [
    {
      value: 120,
      suffix: "+",
      label: "Project Delivered",
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Satisfaction Rate",
    },
    {
      value: 15,
      suffix: "+",
      label: "Years Of Experience",
    },
    {
      value: 22,
      suffix: "+",
      label: "Trusted Companies",
    },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;

      const updated = stats.map((item) =>
        Math.floor(item.value * progress)
      );

      setCounts(updated);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(stats.map((item) => item.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

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

        .stat-card{
          transition:all .35s ease;
        }

        .stat-card:hover{
          transform:translateY(-4px);
        }
        `}
      </style>

      <section className="w-full bg-[#efefef] dark:bg-[#111111] py-[clamp(34px,5vw,46px)] transition-all duration-500">
        {/* header aligned */}
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* border top */}
          <div className="border-t border-black/10 dark:border-white/10 pt-[clamp(24px,4vw,34px)]">

            {/* fluid responsive grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[clamp(18px,3vw,26px)] gap-y-[clamp(28px,4vw,36px)]">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="fade-up stat-card text-center"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* value */}
                  <h2 className="text-black dark:text-white text-[clamp(42px,8vw,74px)] leading-none font-medium tracking-[-0.04em] transition-all duration-500">
                    {counts[index]}
                    {item.suffix}
                  </h2>

                  {/* label */}
                  <p className="mt-[clamp(10px,2vw,14px)] text-black/80 dark:text-white/70 text-[clamp(13px,2vw,18px)] leading-[1.25] max-w-[220px] mx-auto transition-all duration-500">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}