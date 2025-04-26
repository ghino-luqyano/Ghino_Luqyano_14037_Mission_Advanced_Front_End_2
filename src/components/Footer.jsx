const Footer = () => {
  return (
    <footer role="contentinfo">
      <section className="border-other-border bg-other-primary w-full border-t shadow-xl md:shadow-none">
        <div className="mx-auto flex max-w-[1200px] flex-col items-stretch justify-between gap-6 px-8 py-6 md:gap-12 md:py-16">
          <div className="flex w-full flex-col gap-8 md:flex-row md:gap-4">
            <div className="flex w-full flex-col gap-8 md:w-2/4">
              <a href="/" className="block" aria-label="Home">
                <img
                  src="/images/vector/Logo.svg"
                  alt="Video Belajar Logo"
                  className="h-auto w-30 md:w-40"
                />
              </a>
              <div className="flex h-full flex-col justify-between gap-3 md:gap-2">
                <span className="text-text-dark-primary text-base leading-none font-semibold tracking-tight md:text-lg">
                  Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                </span>
                <address className="text-text-dark-primary text-sm leading-none font-light tracking-tight not-italic md:text-base">
                  Jl. Usman Effendi No. 50 Lowokwaru, Malang
                </address>
                <a
                  href="tel:+628777123124"
                  className="text-text-dark-primary hover:text-tertiary text-sm leading-none font-light tracking-tight transition duration-300 ease-in-out md:text-base"
                >
                  +62-877-7123-1234
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col justify-end gap-4 md:flex-row md:gap-12">
              {[
                {
                  title: "Kategori",
                  links: [
                    "Digital & Teknologi",
                    "Pemasaran",
                    "Manajemen Bisnis",
                    "Pengembangan Diri",
                    "Desain",
                  ],
                },
                {
                  title: "Perusahaan",
                  links: [
                    "Tentang Kami",
                    "FAQ",
                    "Kebijakan Privasi",
                    "Ketentuan Layanan",
                    "Bantuan",
                  ],
                },
                { title: "Komunitas", links: ["Tips Sukses", "Blog"] },
              ].map((section, index) => (
                <nav
                  key={index}
                  className="flex flex-col gap-2"
                  aria-label={section.title}
                >
                  <span className="text-text-dark-primary text-sm leading-none font-semibold tracking-tight md:text-base">
                    {section.title}
                  </span>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-text-dark-secondary hover:text-tertiary text-xs leading-none font-normal tracking-tight transition duration-300 ease-in-out md:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div
              aria-hidden="true"
              className="bg-other-border h-px w-full"
            ></div>
            <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
              <span className="text-text-dark-secondary order-1 text-xs leading-none font-normal tracking-tight md:order-0 md:text-sm">
                &copy;2023 Gerobak Sayur All Rights Reserved.
              </span>
              <ul
                className="flex flex-row gap-2 md:gap-4"
                aria-label="Social Media Links"
              >
                {[
                  { name: "logo-linkedin", url: "https://linkedin.com" },
                  { name: "logo-facebook", url: "https://facebook.com" },
                  { name: "logo-instagram", url: "https://instagram.com" },
                  { name: "logo-twitter", url: "https://twitter.com" },
                ].map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-other-border hover:bg-other-secondary rounded-full border px-[9px] pt-[5px] pb-1 transition duration-300 ease-in-out md:px-[8px] md:pt-2"
                    >
                      <ion-icon
                        name={social.name}
                        class="text-sm md:text-lg"
                        aria-hidden="true"
                      ></ion-icon>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
