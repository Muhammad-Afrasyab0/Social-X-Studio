import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      date: "4 Days Ago",
      isoDate: "2026-01-10",
      title: "The Power of Strong Branding Strategy",
      desc:
        "Discover how a strong branding strategy builds trust, improves recognition, and drives long-term business growth.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      slug: "power-of-strong-branding-strategy",
    },
    {
      id: 2,
      date: "7 Days Ago",
      isoDate: "2026-01-07",
      title: "Content That Connects With Audience",
      desc:
        "Learn how to create engaging content that resonates with your audience and boosts conversions.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      slug: "content-that-connects-with-audience",
    },
    {
      id: 3,
      date: "9 Days Ago",
      isoDate: "2026-01-05",
      title: "Marketing Trends That Scale Fast",
      desc:
        "Explore the latest digital marketing trends that help businesses scale faster.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      slug: "marketing-trends-that-scale-fast",
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
    <>
      <style>
        {`
        .fade-up{
          animation:fadeUp .8s ease forwards;
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(26px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .img-hover{
          overflow:hidden;
          border-radius:12px;
        }

        .img-hover img{
          transition:transform .7s ease;
        }

        .img-hover:hover img{
          transform:scale(1.05);
        }

        .btn-hover{
          transition:all .3s ease;
        }

        .btn-hover:hover{
          transform:translateY(-2px);
        }

        .btn-arrow{
          transition:transform .3s ease;
        }

        .btn-hover:hover .btn-arrow{
          transform:translate(4px,-4px);
        }

        .title-hover{
          transition:all .3s ease;
        }

        .title-hover:hover{
          transform:translateX(4px);
        }
        `}
      </style>

      <section className="w-full bg-[#f3f3f3] dark:bg-[#111111] py-[60px] sm:py-[75px] md:py-[90px] transition-all duration-500 overflow-hidden">
        
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[42px] lg:gap-[60px]">
          
          {/* LEFT */}
          <div className="pt-[6px] fade-up">
            <p className="text-[15px] sm:text-[16px] text-black dark:text-white mb-[14px] font-medium">
              Blogs
            </p>

            <h2 className="text-[34px] sm:text-[46px] md:text-[58px] leading-[1.02] font-semibold tracking-[-1.8px] text-black dark:text-white mb-[32px] md:mb-[42px]">
              Insights That Drive Growth
            </h2>

            {/* BUTTON 1 */}
            <button
              onClick={() => (window.location.href = "/blog")}
              className="btn-hover h-[48px] px-[28px] md:px-[30px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 transition-all duration-500"
            >
              View All Blogs
              <span className="btn-arrow text-[18px] leading-none font-normal">
                ↗
              </span>
            </button>

            <div className="mt-[42px] md:mt-[90px] flex gap-[14px]">
              <button
                onClick={prevSlide}
                className="btn-hover w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#1f1f1f] text-black dark:text-white flex items-center justify-center transition-all duration-500"
              >
                <ArrowLeft size={18} strokeWidth={2.1} />
              </button>

              <button
                onClick={nextSlide}
                className="btn-hover w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-full bg-[#d9d9d9] dark:bg-[#1f1f1f] text-black dark:text-white flex items-center justify-center transition-all duration-500"
              >
                <ArrowRight size={18} strokeWidth={2.1} />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[34px] md:gap-[28px]">
            {visibleBlogs.map((item, i) => (
              <div
                key={item.id}
                className="fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="img-hover">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[230px] sm:h-[280px] md:h-[300px] object-cover"
                  />
                </div>

                <div className="mt-[16px] flex items-center gap-[10px] text-[15px] sm:text-[16px] text-black dark:text-white">
                  <span className="w-[8px] h-[8px] bg-black dark:bg-white rounded-full"></span>
                  <time dateTime={item.isoDate}>{item.date}</time>
                </div>

                <h3 className="title-hover mt-[14px] text-[22px] sm:text-[24px] md:text-[26px] leading-[1.2] font-semibold tracking-[-0.5px] text-black dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-[14px] md:mt-[16px] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-black/70 dark:text-white/70">
                  {item.desc}
                </p>

                {/* BUTTON 2 & 3 (dynamic links) */}
                <button
                  onClick={() => (window.location.href = `/blog/${item.slug}`)}
                  className="btn-hover mt-[20px] md:mt-[22px] h-[48px] px-[28px] md:px-[30px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium inline-flex items-center justify-center gap-3 transition-all duration-500"
                >
                  Read More
                  <span className="btn-arrow text-[18px] leading-none font-normal">
                    ↗
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}