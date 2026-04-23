import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="bg-[#efefef] dark:bg-[#111111] py-[80px] transition-all duration-500">

      {/* HEADER ALIGNED */}
      <div className="max-w-[1900px] mx-auto px-[3px]">

        <div className="px-[42px]">

          {/* TITLE */}
          <h2 className="text-center text-[58px] leading-none tracking-[-1.5px] font-semibold text-black dark:text-white transition-all duration-500">
            Get In Touch
          </h2>

          {/* GRID */}
          <div className="mt-[52px] grid grid-cols-3 gap-[60px]">

            {/* PHONE */}
            <div className="flex items-start gap-[14px]">
              <FaPhoneAlt className="text-[#0a8fff] text-[22px] mt-[5px]" />

              <div>
                <p className="text-[14px] text-black/55 dark:text-white/55">
                  Call Now:
                </p>

                <p className="text-[24px] leading-none mt-[8px] font-medium text-black dark:text-white">
                  0123 456 7890
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-[14px]">
              <FaEnvelope className="text-[#0a8fff] text-[22px] mt-[5px]" />

              <div>
                <p className="text-[14px] text-black/55 dark:text-white/55">
                  Email:
                </p>

                <p className="text-[24px] mt-[8px] font-medium text-black dark:text-white">
                  info@domain.com
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-[14px]">
              <FaMapMarkerAlt className="text-[#0a8fff] text-[22px] mt-[5px]" />

              <div>
                <p className="text-[14px] text-black/55 dark:text-white/55">
                  Address:
                </p>

                <p className="text-[24px] leading-[1.45] mt-[8px] font-medium text-black dark:text-white">
                  Address Line Dummy Here
                  <br />
                  Lorem Ipsum dollar
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}