import React from "react";

export default function BlogsSection() {
  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        .blogs-section{
          width:100%;
          background:#f3f3f3;
          padding:90px 60px;
        }

        .blogs-container{
          max-width:1280px;
          margin:0 auto;
          display:grid;
          grid-template-columns:320px 1fr;
          gap:48px;
          align-items:start;
        }

        /* LEFT SIDE */
        .blogs-left{
          padding-top:6px;
        }

        .blogs-label{
          font-size:28px;
          color:#111;
          margin-bottom:18px;
          font-weight:500;
        }

        .blogs-title{
          font-size:68px;
          line-height:1.02;
          font-weight:600;
          color:#000;
          letter-spacing:-1.5px;
          margin-bottom:52px;
        }

        .blogs-btn{
          width:170px;
          height:52px;
          border:1.4px solid #111;
          border-radius:999px;
          background:transparent;
          font-size:17px;
          cursor:pointer;
        }

        .blogs-nav{
          margin-top:110px;
          display:flex;
          gap:14px;
        }

        .nav-btn{
          width:54px;
          height:54px;
          border:none;
          border-radius:50%;
          background:#e2e2e2;
          font-size:22px;
          cursor:pointer;
        }

        /* RIGHT SIDE */
        .blogs-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:28px;
        }

        .blog-card{
          width:100%;
        }

        .blog-image{
          width:100%;
          height:265px;
          border-radius:12px;
          object-fit:cover;
          display:block;
        }

        .blog-meta{
          margin-top:14px;
          font-size:20px;
          color:#111;
          display:flex;
          align-items:center;
          gap:10px;
        }

        .dot{
          width:8px;
          height:8px;
          background:#000;
          border-radius:50%;
        }

        .blog-title{
          margin-top:12px;
          font-size:52px;
          line-height:1.05;
          font-weight:600;
          color:#000;
          letter-spacing:-1px;
        }

        .blog-desc{
          margin-top:16px;
          font-size:18px;
          line-height:1.55;
          color:#444;
        }

        .read-more{
          margin-top:18px;
          font-size:24px;
          font-weight:500;
          color:#111;
          cursor:pointer;
        }

        @media(max-width:1100px){
          .blogs-container{
            grid-template-columns:1fr;
          }

          .blogs-grid{
            grid-template-columns:1fr;
          }

          .blogs-title{
            font-size:52px;
          }
        }

        @media(max-width:768px){
          .blogs-section{
            padding:60px 20px;
          }

          .blog-image{
            height:220px;
          }

          .blog-title{
            font-size:34px;
          }

          .blogs-title{
            font-size:42px;
          }
        }
      `}</style>

      <section className="blogs-section">
        <div className="container"></div>
        <div className="blogs-container">
          {/* LEFT */}
          <div className="blogs-left">
            <p className="blogs-label">Blogs</p>

            <h2 className="blogs-title">
              Insights That Drive Growth
            </h2>

            <button className="blogs-btn">
              View All Blogs ↗
            </button>

            <div className="blogs-nav">
              <button className="nav-btn">←</button>
              <button className="nav-btn">→</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="blogs-grid">
            <div className="blog-card">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                className="blog-image"
                alt=""
              />

              <div className="blog-meta">
                <span className="dot"></span>
                <span>4 Day Ago</span>
              </div>

              <h3 className="blog-title">
                The Power of Strong Branding Strategy
              </h3>

              <p className="blog-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt
              </p>

              <p className="read-more">Read More ↗</p>
            </div>

            <div className="blog-card">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                className="blog-image"
                alt=""
              />

              <div className="blog-meta">
                <span className="dot"></span>
                <span>7 Day Ago</span>
              </div>

              <h3 className="blog-title">
                Content That Connects With Audience
              </h3>

              <p className="blog-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt
              </p>

              <p className="read-more">Read More ↗</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}