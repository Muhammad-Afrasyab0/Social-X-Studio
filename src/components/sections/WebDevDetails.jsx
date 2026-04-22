import React from "react";

export default function WebDevDetails() {
  const services = [
    {
      no: "1.",
      title: "Wordpress Development",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
    },
    {
      no: "2.",
      title: "Plugin Development",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
    },
    {
      no: "3.",
      title: "Shopify Development",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
    },
  ];

  return (
    <section className="w-full bg-[#efefef] pt-[58px] pb-[80px]">
      {/* Header aligned */}
      <div className="max-w-[1900px] mx-auto px-[42px]">

        {/* Top Banner */}
        <div className="w-full h-[430px] rounded-[6px] bg-black"></div>

        {/* Content */}
        <div className="pt-[54px]">

          <h2 className="text-black text-[58px] font-semibold leading-none">
            Web Developmment
          </h2>

          <p className="mt-[30px] text-black/70 text-[17px] leading-[2] max-w-[1750px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p className="mt-[28px] text-black/70 text-[17px] leading-[2] max-w-[1750px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

        </div>

        {/* Services List */}
        <div className="mt-[70px] border-t border-black/10">

          {services.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[70px_1fr] gap-[14px] py-[34px] border-b border-black/10"
            >

              <div className="text-black text-[34px] font-medium leading-none pt-[2px]">
                {item.no}
              </div>

              <div>
                <h3 className="text-black text-[38px] font-medium leading-none">
                  {item.title}
                </h3>

                <p className="mt-[18px] text-black/65 text-[16px] leading-[1.9] max-w-[760px]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}