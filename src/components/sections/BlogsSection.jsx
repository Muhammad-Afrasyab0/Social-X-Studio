import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      date: "4 Day Ago",
      title: "The Power of Strong Branding Strategy",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      date: "7 Day Ago",
      title: "Content That Connects With Audience",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      date: "9 Day Ago",
      title: "Marketing Trends That Scale Fast",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const visibleBlogs = [
    blogs[index],
    blogs[(index + 1) % blogs.length],
  ];

  return (
    <section className="w-full bg-[#f3f3f3] dark:bg-[#111111] py-[90px] transition-all duration-500">
      <div className="max-w-[1900px] mx-auto px-[42px] grid grid-cols-[420px_1fr] gap-[60px]">

        {/* LEFT */}
        <div className="pt-[6px]">

          <p className="text-[16px] text-black dark:text-white mb-[14px] font-medium transition-all duration-500">
            Blogs
          </p>

          <h2 className="text-[58px] leading-[1.02] font-semibold tracking-[-1.8px] text-black dark:text-white mb-[42px] transition-all duration-500">
            Insights That Drive Growth
          </h2>

          <a
            href="#"
            className="h-[48px] px-[30px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 transition-all duration-500"
          >
            View All Blogs

            <span className="text-[18px] leading-none font-normal">
              ↗
            </span>
          </a>

          <div className="mt-[90px] flex gap-[14px]">

            <button
              onClick={prevSlide}
              className="w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#1f1f1f] text-black dark:text-white flex items-center justify-center transition-all duration-500"
            >
              <ArrowLeft size={18} strokeWidth={2.1} />
            </button>

            <button
              onClick={nextSlide}
              className="w-[46px] h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#1f1f1f] text-black dark:text-white flex items-center justify-center transition-all duration-500"
            >
              <ArrowRight size={18} strokeWidth={2.1} />
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-[28px]">

          {visibleBlogs.map((item) => (
            <div key={item.id}>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] rounded-[12px] object-cover"
              />

              <div className="mt-[16px] flex items-center gap-[10px] text-[16px] text-black dark:text-white transition-all duration-500">
                <span className="w-[8px] h-[8px] bg-black dark:bg-white rounded-full transition-all duration-500"></span>
                <span>{item.date}</span>
              </div>

              {/* UPDATED HEADING FONT SAME AS FOOTER */}
              <h3 className="mt-[14px] text-[26px] leading-[1.2] font-semibold tracking-[-0.5px] text-black dark:text-white transition-all duration-500">
                {item.title}
              </h3>

              <p className="mt-[16px] text-[17px] leading-[1.7] text-black/70 dark:text-white/70 transition-all duration-500">
                {item.desc}
              </p>

              <a
                href="#"
                className="mt-[22px] h-[48px] px-[30px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 transition-all duration-500"
              >
                Read More

                <span className="text-[18px] leading-none font-normal">
                  ↗
                </span>
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}