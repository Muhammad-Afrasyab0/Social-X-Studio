export default function BlogDetailsGallery() {
  return (
    <section className="bg-[#efefef] dark:bg-[#111111] py-[40px] transition-all duration-500">

      {/* HEADER ALIGNED */}
      <div className="max-w-[1900px] mx-auto px-[3px]">

        <div className="px-[42px]">

          {/* TWO IMAGE GRID */}
          <div className="grid md:grid-cols-2 gap-[28px]">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
              alt="Gallery 1"
              className="w-full h-[720px] object-cover rounded-[8px]"
            />

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
              alt="Gallery 2"
              className="w-full h-[720px] object-cover rounded-[8px]"
            />

          </div>

          {/* CONTENT */}
          <div className="pt-[42px] max-w-[1750px]">

            <p className="text-[20px] leading-[1.9] text-black/70 dark:text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla id quam at justo ullamcorper vulputate. Donec mattis
              aliquam urna, sed placerat dolor volutpat vel. Maecenas
              posuere sem purus, quis feugiat.
            </p>

            <p className="mt-[32px] text-[20px] leading-[1.9] text-black/70 dark:text-white/70">
              As discussed in the introduction post, one of the best things
              about Ghost is just how much you can customize to turn your
              site into something unique. Everything about your layout and
              design can be changed, so you’re not stuck with yet another
              clone of a social network profile.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}