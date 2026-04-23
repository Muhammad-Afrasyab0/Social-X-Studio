import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactInfoSection() {
  const items = [
    {
      icon: <FaPhoneAlt />,
      label: "Call Now:",
      value: "0123 456 7890",
    },
    {
      icon: <FaEnvelope />,
      label: "Email:",
      value: "info@domain.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Address:",
      value: (
        <>
          Address Line Dummy Here
          <br />
          Lorem Ipsum dollar
        </>
      ),
    },
  ];

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

        .info-card{
          transition:all .35s ease;
        }

        .info-card:hover{
          transform:translateY(-4px);
        }
        `}
      </style>

      <section className="bg-[#efefef] dark:bg-[#111111] py-[clamp(44px,8vw,80px)] transition-all duration-500">

        {/* HEADER ALIGNED */}
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          {/* TITLE */}
          <h2 className="fade-up text-center text-[clamp(34px,7vw,58px)] leading-[0.96] tracking-[-0.04em] font-semibold text-black dark:text-white transition-all duration-500">
            Get In Touch
          </h2>

          {/* GRID */}
          <div className="mt-[clamp(28px,5vw,52px)] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[clamp(18px,4vw,32px)] xl:gap-[60px]">

            {items.map((item, index) => (
              <div
                key={index}
                className="fade-up info-card flex items-start gap-[14px] rounded-[14px] bg-white/55 dark:bg-white/[0.03] p-[clamp(18px,3vw,24px)] transition-all duration-500"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* icon */}
                <div className="text-[#0a8fff] text-[clamp(18px,3vw,22px)] mt-[4px] shrink-0">
                  {item.icon}
                </div>

                {/* text */}
                <div className="min-w-0">
                  <p className="text-[clamp(13px,2vw,14px)] text-black/55 dark:text-white/55 transition-all duration-500">
                    {item.label}
                  </p>

                  <p className="mt-[8px] text-[clamp(18px,3vw,24px)] leading-[1.4] font-medium text-black dark:text-white break-words transition-all duration-500">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}