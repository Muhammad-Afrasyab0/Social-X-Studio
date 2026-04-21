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
    <section className="w-full bg-[#efefef] py-[46px]">
      {/* Header aligned */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* top border */}
        <div className="border-t border-black/10 pt-[34px]">

          {/* grid */}
          <div className="grid grid-cols-4 gap-[20px]">

            {stats.map((item, index) => (
              <div key={index} className="text-center">

                <h2 className="text-black text-[74px] leading-none font-medium tracking-[-2px]">
                  {counts[index]}
                  {item.suffix}
                </h2>

                <p className="mt-[14px] text-black/80 text-[18px] leading-none">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}