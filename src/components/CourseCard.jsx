import PropTypes from "prop-types";
import { useState } from "react";

const CourseCard = ({ course, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: course.title,
    instructor: course.instructor,
    price: course.price,
  });

  const formatPrice = (price) => {
    if (price >= 1_000_000) {
      return `Rp${price / 1_000_000}JT`;
    } else if (price >= 1_000) {
      return `Rp${price / 1_000}K`;
    }
    return `Rp${price}`;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    onUpdate(course.id, formData);
    setIsEditing(false);
  };

  return (
    <li className="border-other-border bg-other-primary flex h-full flex-col gap-4 rounded-lg border p-4 transition duration-300 hover:-translate-y-2">
      <div className="flex flex-row gap-4 md:flex-col">
        <img
          src={course.image}
          alt={course.title}
          className="w-[35%] rounded-md object-cover object-center md:w-full"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="text-text-dark-primary rounded border border-gray-300 p-2 text-sm"
                />
                <input
                  type="text"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  className="text-text-dark-primary rounded border border-gray-300 p-2 text-sm"
                />
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="text-text-dark-primary rounded border border-gray-300 p-2 text-sm"
                />
              </>
            ) : (
              <>
                <h2 className="text-text-dark-primary text-base leading-tight font-semibold tracking-tight md:text-lg">
                  {course.title}
                </h2>
                <span className="text-text-dark-secondary text-sm font-medium md:block">
                  {course.instructor}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <img
            src="/images/vector/Rating.svg"
            alt="Rating"
            className="h-4 w-4"
          />
          <span className="text-text-dark-secondary text-sm font-medium tracking-tight underline">
            {course.rating} ({course.reviews})
          </span>
        </div>
        <span className="text-primary text-2xl font-semibold tracking-tight">
          {formatPrice(course.price)}
        </span>
      </div>

      <div className="mt-2 flex justify-end gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-primary hover:bg-primary-400 rounded px-3 py-1 text-sm font-semibold text-white transition hover:cursor-pointer"
            >
              Simpan
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="rounded border border-gray-300 px-3 py-1 text-sm font-semibold transition hover:cursor-pointer hover:bg-gray-100"
            >
              Batal
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded border border-gray-300 px-3 py-1 text-sm font-semibold transition hover:cursor-pointer hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(course.id)}
              className="rounded border border-red-400 px-3 py-1 text-sm font-semibold text-red-500 transition hover:cursor-pointer hover:bg-red-100"
            >
              Hapus
            </button>
          </>
        )}
      </div>
    </li>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default CourseCard;
