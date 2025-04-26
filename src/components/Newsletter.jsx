const Newsletter = () => {
  return (
    <section
      className="w-full"
      role="region"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-8 py-4 md:py-16">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/cc34e79e1f52284620dbea34fb453966.jpg')",
          }}
        >
          <div
            className="bg-greyscale-900/90 absolute inset-0"
            aria-hidden="true"
          ></div>
          <div className="relative flex flex-col items-center gap-12 px-4 py-16 text-center md:py-24">
            <div className="flex flex-col items-center gap-2">
              <span className="text-text-light-secondary text-xs font-medium tracking-tight uppercase md:text-lg">
                Newsletter
              </span>
              <h1
                id="newsletter-heading"
                className="text-text-light-primary text-3xl font-semibold tracking-tight md:text-4xl md:leading-[1.3]"
              >
                Mau Belajar Lebih Banyak?
              </h1>
              <p className="text-other-base w-full text-center text-sm font-light md:w-3/4 md:text-base">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik hariesok.id
              </p>
            </div>
            <form
              action="#"
              className="relative flex w-full max-w-md flex-col gap-3"
              aria-label="Newsletter Subscription"
            >
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan Emailmu"
                className="focus:ring-secondary w-full rounded-lg border border-gray-300 px-4 py-2 text-center placeholder:text-gray-400 focus:ring-2 focus:outline-none md:py-3 md:text-left"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-primary w-full rounded-lg px-4 pb-0.5 text-base leading-[1.75] font-bold text-white transition duration-300 hover:cursor-pointer md:absolute md:top-1/2 md:right-[1em] md:w-max md:-translate-y-1/2 md:transform md:rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
