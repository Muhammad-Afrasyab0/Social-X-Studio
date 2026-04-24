export default function BlogListingSection() {
  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      title: "The Power of Strong Branding Strategy",
      date: "4 Day Ago",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      title: "Content That Connects With Audience",
      date: "7 Day Ago",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      title: "Marketing Trends That Scale Fast",
      date: "9 Day Ago",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      title: "How Teams Build Better Products",
      date: "12 Day Ago",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      title: "Modern UI Trends That Convert",
      date: "14 Day Ago",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
      title: "SEO Growth For Smart Brands",
      date: "18 Day Ago",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      title: "Creative Campaign Ideas That Work",
      date: "21 Day Ago",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      title: "Social Media Strategy For Brands",
      date: "24 Day Ago",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      title: "How Design Builds Trust Online",
      date: "27 Day Ago",
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
            transform:translateY(30px);
            animation:fadeUp .9s ease forwards;
          }

          @keyframes fadeUp{
            to{
              opacity:1;
              transform:translateY(0);
            }
          }

          .blog-card{
            transition:all .45s ease;
          }

          .blog-card:hover{
            transform:translateY(-6px);
          }

          .img-wrap{
            overflow:hidden;
            border-radius:18px;
          }

          .img-wrap img{
            transition:transform .9s ease;
          }

          .blog-card:hover .img-wrap img{
            transform:scale(1.06);
          }
        `}
      </style>

      <section className="bg-[#efefef] py-[clamp(45px,7vw,80px)] overflow-hidden">
        <div className="max-w-[1880px] mx-auto px-[clamp(18px,4vw,42px)]">

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-[clamp(26px,4vw,42px)]">

            {/* LEFT BLOG GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[28px] gap-y-[42px]">

              {posts.map((item, idx) => (
                <article
                  key={item.id}
                  className="fade-up blog-card"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <div className="img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[260px] sm:h-[320px] lg:h-[340px] object-cover"
                    />
                  </div>

                  <div className="mt-[18px] flex items-center gap-[10px] text-[14px] text-black">
                    <span className="w-[7px] h-[7px] rounded-full bg-black"></span>
                    <span>{item.date}</span>
                  </div>

                  {/* ONLY FONT SIZE REDUCED */}
                  <h3 className="mt-[14px] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] leading-[1.04] tracking-[-0.04em] font-medium text-black max-w-[95%]">     {item.title}
                  </h3>

                  <p className="mt-[16px] text-[15px] sm:text-[16px] leading-[1.8] text-black/60 max-w-[92%]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>

                  <button className="mt-[24px] h-[54px] px-[28px] rounded-full bg-black text-white inline-flex items-center gap-[10px] text-[15px] font-medium">
                    Read More ↗
                  </button>
                </article>
              ))}

            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-[24px]">

              <div className="bg-[#e7e7e7] rounded-[18px] p-[28px]">
                <h4 className="text-[28px] font-medium text-black">Search</h4>
                <div className="mt-[22px] h-[58px] rounded-[14px] border border-black/10 px-[18px] flex items-center justify-between">
                  <span className="text-[15px] text-black/40">Search...</span>
                  <span>⌕</span>
                </div>
              </div>

              <div className="bg-[#e7e7e7] rounded-[18px] p-[28px]">
                <h4 className="text-[28px] font-medium text-black">Categories</h4>
                <div className="grid grid-cols-2 gap-y-[16px] mt-[24px] text-[16px] text-black/75">
                  <span>• Digital</span>
                  <span>• Branding</span>
                  <span>• SEO</span>
                  <span>• Startup</span>
                  <span>• Marketing</span>
                  <span>• UI / UX</span>
                </div>
              </div>

              <div className="bg-[#e7e7e7] rounded-[18px] p-[28px]">
                <h4 className="text-[28px] font-medium text-black">Recent Post</h4>
                <div className="mt-[24px] space-y-[18px]">
                  {recentPosts.map((item, i) => (
                    <div key={i} className="flex gap-[16px]">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[74px] h-[74px] rounded-[12px] object-cover"
                      />
                      <div>
                        <p className="text-[13px] text-black/45">
                          Digital • March 26, 2024
                        </p>
                        <p className="mt-[6px] text-[15px] leading-[1.55] text-black">
                          How digital agencies transform online presence
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#e7e7e7] rounded-[18px] p-[28px]">
                <h4 className="text-[28px] font-medium text-black">Tags</h4>
                <div className="flex flex-wrap gap-[12px] mt-[22px]">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-[16px] h-[40px] rounded-full border border-black/10 inline-flex items-center text-[14px] text-black/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
}