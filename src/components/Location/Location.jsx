import { useEffect, useState } from "react";
import mosqueDark from "../../assets/faisalmosquedark.png";
import mosqueLight from "../../assets/faisalmosquelight.png";

export default function Location() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#ECECEC] dark:bg-black text-[#111] dark:text-white py-[clamp(30px,5vw,60px)] text-center transition-all duration-500">

      {/* 🔽 Fluid Heading */}
      <h2 className="text-[clamp(1.8rem,2.5vw,2.4rem)] font-semibold mb-[clamp(20px,3vw,35px)]">
        Our Presence
      </h2>

      <div className="flex flex-col items-center justify-center">

        {/* 🔽 Fluid Image */}
        <img
          src={isDark ? mosqueLight : mosqueDark}
          alt="Islamabad"
          className="w-[clamp(70px,8vw,100px)] mb-[8px]"
        />

        {/* 🔽 Text tighter + responsive */}
        <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] leading-tight">
          Islamabad
        </h3>

        <p className="opacity-60 text-[clamp(0.8rem,1.2vw,0.95rem)] mt-[2px]">
          Pakistan
        </p>

      </div>

    </section>
  );
}