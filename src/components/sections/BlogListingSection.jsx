export default function BlogListingSection() {
  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      title: "The Power of Strong Branding Strategy",
      date: "4 Day Ago",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      title: "Content That Connects With Audience",
      date: "7 Day Ago",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      title: "Marketing Trends That Scale Fast",
      date: "9 Day Ago",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      title: "How Teams Build Better Products",
      date: "12 Day Ago",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      title: "Modern UI Trends That Convert",
      date: "14 Day Ago",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "SEO Growth For Smart Brands",
      date: "18 Day Ago",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "SEO Growth For Smart Brands",
      date: "18 Day Ago",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "SEO Growth For Smart Brands",
      date: "18 Day Ago",
    },
  ];

  const recentPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const tags = ["Experiment", "SEO", "Marketing", "Digital", "Technology"];

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

        .card-hover{
          transition:all .35s ease;
        }

        .card-hover:hover{
          transform:translateY(-4px);
        }

        .img-hover{
          overflow:hidden;
        }

        .img-hover img{
          transition:transform .8s ease;
        }

        .img-hover:hover img{
          transform:scale(1.04);
        }
        `}
      </style>

      <section className="bg-[#efefef] dark:bg-[#111111] py-[clamp(42px,7vw,70px)] transition-all duration-500">
        <div className="max-w-[1900px] mx-auto px-[clamp(16px,4vw,42px)]">

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-[clamp(28px,4vw,34px)]">

            {/* LEFT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(18px,3vw,22px)] gap-y-[clamp(28px,4vw,34px)]">

              {posts.map((item, idx) => (
                <div
                  key={item.id}
                  className="fade-up card-hover"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {/* IMAGE */}
                  <div className="img-hover rounded-[12px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[clamp(220px,28vw,210px)] md:h-[210px] xl:h-[210px] object-cover rounded-[12px]"
                    />
                  </div>

                  {/* META */}
                  <div className="mt-[12px] flex items-center gap-[8px] text-[13px] text-black dark:text-white">
                    <span className="w-[6px] h-[6px] rounded-full bg-black dark:bg-white"></span>
                    <span>{item.date}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-[10px] text-[clamp(26px,4vw,38px)] leading-[1.03] tracking-[-0.03em] font-medium text-black dark:text-white">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-[12px] text-[clamp(14px,2vw,15px)] leading-[1.7] text-black/65 dark:text-white/65 max-w-[95%]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>

                  {/* BUTTON */}
                  <a
                    href="#"
                    className="mt-[14px] inline-flex items-center gap-[6px] group"
                  >
                    <span className="text-[14px] font-medium text-black dark:text-white">
                      Read More
                    </span>

                    <span className="text-[18px] leading-none text-black dark:text-white transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[2px]">
                      ↗
                    </span>
                  </a>
                </div>
              ))}

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-[22px]">

              {/* SEARCH */}
              <div className="fade-up bg-[#e8e8e8] dark:bg-[#1a1a1a] rounded-[14px] p-[clamp(18px,3vw,22px)]">
                <h4 className="text-[clamp(22px,3vw,24px)] font-medium text-black dark:text-white">
                  Search
                </h4>

                <div className="mt-[18px] h-[48px] rounded-[10px] border border-black/10 dark:border-white/10 px-[16px] flex items-center justify-between">
                  <span className="text-[13px] text-black/45 dark:text-white/45">
                    Search...
                  </span>
                  <span>⌕</span>
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="fade-up bg-[#e8e8e8] dark:bg-[#1a1a1a] rounded-[14px] p-[clamp(18px,3vw,22px)]">
                <h4 className="text-[clamp(22px,3vw,24px)] font-medium text-black dark:text-white">
                  Categories
                </h4>

                <div className="grid grid-cols-2 gap-y-[12px] mt-[18px] text-[14px] text-black/75 dark:text-white/75">
                  <span>• Digital</span>
                  <span>• Branding</span>
                  <span>• SEO</span>
                  <span>• Startup</span>
                  <span>• Marketing</span>
                  <span>• UI / UX</span>
                </div>
              </div>

              {/* RECENT */}
              <div className="fade-up bg-[#e8e8e8] dark:bg-[#1a1a1a] rounded-[14px] p-[clamp(18px,3vw,22px)]">
                <h4 className="text-[clamp(22px,3vw,24px)] font-medium text-black dark:text-white">
                  Recent Post
                </h4>

                <div className="mt-[20px] space-y-[16px]">
                  {recentPosts.map((item, i) => (
                    <div key={i} className="flex gap-[14px]">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[58px] h-[58px] rounded-[8px] object-cover shrink-0"
                      />

                      <div>
                        <p className="text-[12px] text-black/45 dark:text-white/45">
                          Digital • March 26, 2024
                        </p>

                        <p className="mt-[4px] text-[13px] leading-[1.45] text-black dark:text-white">
                          How digital agencies transform online presence
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TAGS */}
              <div className="fade-up bg-[#e8e8e8] dark:bg-[#1a1a1a] rounded-[14px] p-[clamp(18px,3vw,22px)]">
                <h4 className="text-[clamp(22px,3vw,24px)] font-medium text-black dark:text-white">
                  Tags
                </h4>

                <div className="flex flex-wrap gap-[10px] mt-[18px]">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-[14px] h-[34px] rounded-full border border-black/15 dark:border-white/15 inline-flex items-center text-[13px] text-black/75 dark:text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}