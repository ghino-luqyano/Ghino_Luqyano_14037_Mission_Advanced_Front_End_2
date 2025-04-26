const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-8 py-8 md:py-16">
        <div
          className="relative w-full rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/d25fa2121b31a4ad14c9ebd02127f629.jpg')",
          }}
        >
          <div
            className="bg-greyscale-900/90 absolute inset-0 rounded-xl"
            aria-hidden="true"
          ></div>
          <div className="relative flex flex-col items-center gap-8 p-4 text-center md:py-24">
            <h1 className="text-text-light-primary text-3xl font-bold tracking-tight text-balance md:text-5xl md:leading-[1.3]">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="text-text-light-primary text-sm font-medium text-balance md:text-base">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <button className="bg-primary text-text-light-primary hover:bg-primary-400 max-w-[fit-content] rounded-md px-6 py-3 text-base font-semibold transition">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
