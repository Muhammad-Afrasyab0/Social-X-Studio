import React from "react";

export default function WebDevBenefits() {
  const cards = [
    {
      title: "Industry Expert",
      desc:
        "Lorem Ipsum Dollar consectetur nisi montes eu mauris congue. Eget penatibus cum amet",
      points: [
        "Industry-specific design strategies",
        "UX research informs design decision",
        "Tailored solution for unique challenges",
        "Client involvement at every stage",
      ],
    },
    {
      title: "Data-driven approach",
      desc:
        "Lorem Ipsum Dollar consectetur nisi montes eu mauris congue. Eget penatibus cum amet",
      points: [
        "Industry-specific design strategies",
        "UX research informs design decision",
        "Tailored solution for unique challenges",
        "Client involvement at every stage",
      ],
    },
    {
      title: "In-time Result",
      desc:
        "Lorem Ipsum Dollar consectetur nisi montes eu mauris congue. Eget penatibus cum amet",
      points: [
        "Industry-specific design strategies",
        "UX research informs design decision",
        "Tailored solution for unique challenges",
        "Client involvement at every stage",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#efefef] pb-[90px]">
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* Heading */}
        <h2 className="text-black text-[56px] font-semibold leading-none">
          Benefits of Our Development Services
        </h2>

        {/* Paragraphs */}
        <p className="mt-[28px] text-black/70 text-[17px] leading-[2] max-w-[1780px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <p className="mt-[24px] text-black/70 text-[17px] leading-[2] max-w-[1780px]">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-[28px] mt-[52px]">

          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#e7e7e7] rounded-[8px] p-[34px]"
            >

              <h3 className="text-black text-[34px] font-medium leading-none">
                {item.title}
              </h3>

              <p className="mt-[18px] text-black/65 text-[16px] leading-[1.9]">
                {item.desc}
              </p>

              <div className="mt-[28px] space-y-[16px]">
                {item.points.map((point, i) => (
                  <p
                    key={i}
                    className="text-black/70 text-[15px] leading-none"
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
  );
}