const CourseCategoryNav = () => {
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  return (
    <nav
      className="w-full overflow-x-auto md:px-4"
      aria-label="Kategori Video Pembelajaran"
    >
      <ul className="flex flex-row gap-8 text-nowrap whitespace-nowrap md:gap-10">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer pb-2 text-base font-medium transition duration-300 md:pb-4 ${
              index === 0
                ? "text-tertiary border-tertiary border-b-2 md:border-b-4"
                : "text-text-dark-secondary hover:text-tertiary"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CourseCategoryNav;
