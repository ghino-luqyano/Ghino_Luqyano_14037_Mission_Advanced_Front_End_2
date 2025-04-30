import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/redux/courseSlice";

const categories = ["Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

const CourseCategoryNav = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.courses.category);

  const handleClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <nav
      className="w-full overflow-x-auto md:px-4"
      aria-label="Kategori Video Pembelajaran"
    >
      <ul className="flex flex-row gap-8 text-nowrap whitespace-nowrap md:gap-10">
        <li
          className={`cursor-pointer pb-2 text-base font-medium transition duration-300 md:pb-4 ${
            selectedCategory === null
              ? "text-tertiary border-tertiary border-b-2 md:border-b-4"
              : "text-text-dark-secondary hover:text-tertiary"
          }`}
          onClick={() => handleClick(null)}
        >
          Semua Kelas
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer pb-2 text-base font-medium transition duration-300 md:pb-4 ${
              selectedCategory === category
                ? "text-tertiary border-tertiary border-b-2 md:border-b-4"
                : "text-text-dark-secondary hover:text-tertiary"
            }`}
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CourseCategoryNav;
