import { useState } from "react";

export default function BlogListingSection() {

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("");

  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      title: "The Power of Strong Branding Strategy",
      date: "4 Day Ago",
      category: "Branding",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      title: "Content That Connects With Audience",
      date: "7 Day Ago",
      category: "Marketing",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      title: "Marketing Trends That Scale Fast",
      date: "9 Day Ago",
      category: "Marketing",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      title: "How Teams Build Better Products",
      date: "12 Day Ago",
      category: "Startup",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      title: "Modern UI Trends That Convert",
      date: "14 Day Ago",
      category: "UI / UX",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
      title: "SEO Growth For Smart Brands",
      date: "18 Day Ago",
      category: "SEO",
    },
  ];

  const tags = ["Experiment", "SEO", "Marketing", "Digital", "Technology"];

  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (activeCategory === "All" || post.category === activeCategory) &&
      (activeTag === "" || post.title.includes(activeTag))
    );
  });

  return (
    <>
      <style>
        {`
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

      <section className="bg-[#efefef] py-[clamp(45px,7vw,80px)]">
        <div className="max-w-[1880px] mx-auto px-[clamp(18px,4vw,42px)]">

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-[clamp(26px,4vw,42px)]">

            {/* LEFT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[28px] gap-y-[42px]">

              {filteredPosts.map((item) => (
                <article key={item.id} className="blog-card">

                  <div className="img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[260px] object-cover"
                    />
                  </div>

                  <div className="mt-[18px] flex items-center gap-[10px] text-[14px] text-black">
                    <span className="w-[7px] h-[7px] rounded-full bg-black"></span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="mt-[14px] text-[24px] font-medium text-black">
                    {item.title}
                  </h3>

                  <button className="mt-[20px] h-[50px] px-[24px] rounded-full bg-black text-white">
                    Read More ↗
                  </button>

                </article>
              ))}

            </div>

            {/* SIDEBAR */}
            <aside className="space-y-[24px]">

              {/* SEARCH */}
              <div className="bg-[#e7e7e7] rounded-[18px] p-[28px]">
                <h4 className="text-[28px] font-medium">Search</h4>

                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="mt-[20px] w-full h-[58px] rounded-[14px] border border-black/10 px-[18px] outline-none"
                />
              </div>

              {/* CATEGORIES */}
              <div className="bg-[#e7e7e7] rounded-[18px] p-[28px]">
                <h4 className="text-[28px] font-medium">Categories</h4>

                <div className="mt-[20px] space-y-[10px]">
                  {["All","Branding","Marketing","Startup","SEO","UI / UX"].map((cat) => (
                    <p
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`cursor-pointer ${
                        activeCategory === cat ? "font-bold" : "opacity-60"
                      }`}
                    >
                      • {cat}
                    </p>
                  ))}
                </div>
              </div>

              {/* TAGS */}
              <div className="bg-[#e7e7e7] rounded-[18px] p-[28px]">
                <h4 className="text-[28px] font-medium">Tags</h4>

                <div className="flex flex-wrap gap-[12px] mt-[20px]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`px-[14px] py-[6px] rounded-full border cursor-pointer ${
                        activeTag === tag
                          ? "bg-black text-white"
                          : "text-black/70"
                      }`}
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