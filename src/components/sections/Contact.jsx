import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Camera,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-section{
          min-height:100vh;
          padding:70px 40px;
          background:
            radial-gradient(circle at 50% 8%, #2f80ff 0%, rgba(47,128,255,.35) 18%, transparent 42%),
            radial-gradient(circle at 50% 45%, rgba(44,117,255,.12) 0%, transparent 55%),
            linear-gradient(90deg,#031452 0%,#0d2f9d 50%,#031452 100%);
          position:relative;
          overflow:hidden;
        }

        .contact-section::before{
          content:"";
          position:absolute;
          inset:0;
          background-image:radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px);
          background-size:3px 3px;
          opacity:.18;
          pointer-events:none;
        }

        .contact-container{
          max-width:1280px;
          margin:auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:center;
          position:relative;
          z-index:2;
        }

        .contact-left{color:#fff;}

        .contact-label{
          font-size:15px;
          margin-bottom:18px;
        }

        .contact-title{
          font-size:74px;
          line-height:1;
          font-weight:600;
          margin-bottom:28px;
        }

        .contact-desc{
          width:430px;
          font-size:17px;
          line-height:1.7;
          color:rgba(255,255,255,.82);
        }

        .contact-info{
          margin-top:55px;
          display:flex;
          flex-direction:column;
          gap:34px;
        }

        .info-row{
          display:flex;
          gap:16px;
        }

        .info-icon{margin-top:4px;}

        .info-title{
          font-size:14px;
          color:rgba(255,255,255,.75);
          margin-bottom:4px;
        }

        .info-text{
          font-size:18px;
          line-height:1.45;
        }

        .social-row{
          margin-top:55px;
          display:flex;
          align-items:center;
          gap:14px;
          color:#fff;
          flex-wrap:wrap;
        }

        .social-btn{
          width:46px;
          height:46px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,.45);
          background:transparent;
          color:#fff;
          display:grid;
          place-items:center;
          cursor:pointer;
        }

        .contact-card{
          padding:42px;
          border-radius:34px;
          background:rgba(255,255,255,.10);
          border:1px solid rgba(255,255,255,.12);
        }

        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:34px 26px;
        }

        .full-field{margin-top:34px;}

        .field{
          width:100%;
          background:transparent;
          border:none;
          border-bottom:1px solid rgba(255,255,255,.28);
          padding-bottom:14px;
          color:#fff;
          outline:none;
          font-size:15px;
        }

        .field::placeholder{
          color:rgba(255,255,255,.72);
        }

        .checkbox-row{
          margin-top:28px;
          display:flex;
          align-items:center;
          gap:10px;
          color:rgba(255,255,255,.85);
          font-size:14px;
        }

        .send-btn{
          margin-top:48px;
          width:160px;
          height:52px;
          border-radius:999px;
          border:1px solid #fff;
          background:transparent;
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          cursor:pointer;
        }

        .reply-text{
          margin-top:18px;
          color:rgba(255,255,255,.72);
          font-size:14px;
        }

        @media(max-width:1024px){
          .contact-container{
            grid-template-columns:1fr;
          }

          .contact-title{
            font-size:56px;
          }

          .contact-desc{
            width:100%;
          }
        }

        @media(max-width:768px){
          .contact-section{
            padding:50px 20px;
          }

          .form-grid{
            grid-template-columns:1fr;
          }

          .contact-title{
            font-size:44px;
          }

          .contact-card{
            padding:28px;
          }
        }
      `}</style>

      <section className="contact-section">
        <div className="container"></div>
        <div className="contact-container">
          {/* LEFT */}
          <div className="contact-left">
            <p className="contact-label">Contact Us</p>

            <h2 className="contact-title">Get In Touch</h2>

            <p className="contact-desc">
              Have a question or project in mind? We'd love to hear from you.
            </p>

            <div className="contact-info">
              <Info
                icon={<Phone size={22} />}
                title="Call Now:"
                text="0123 456 7890"
              />

              <Info
                icon={<Mail size={22} />}
                title="Email:"
                text="info@domain.com"
              />

              <Info
                icon={<MapPin size={22} />}
                title="Address:"
                text="Address Line Dummy Here Lorem Ipsum dollar"
              />
            </div>

            <div className="social-row">
              <span>Follow Us on</span>

              <Social icon={<Globe size={18} />} />
              <Social icon={<Camera size={18} />} />
              <Social icon={<Briefcase size={18} />} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-card">
            <div className="form-grid">
              <Field placeholder="First Name*" />
              <Field placeholder="Last Name*" />
              <Field placeholder="Phone*" />
              <Field placeholder="Email*" />
            </div>

            <div className="full-field">
              <Field placeholder="Message.." />
            </div>

            <label className="checkbox-row">
              <input type="checkbox" />
              <span>I agree to the privacy policy</span>
            </label>

            <button className="send-btn">
              Send Now <ArrowUpRight size={18} />
            </button>

            <p className="reply-text">
              You will get a response from us within 5 minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ placeholder }) {
  return <input className="field" type="text" placeholder={placeholder} />;
}

function Social({ icon }) {
  return <button className="social-btn">{icon}</button>;
}

function Info({ icon, title, text }) {
  return (
    <div className="info-row">
      <div className="info-icon">{icon}</div>

      <div>
        <p className="info-title">{title}</p>
        <p className="info-text">{text}</p>
      </div>
    </div>
  );
}