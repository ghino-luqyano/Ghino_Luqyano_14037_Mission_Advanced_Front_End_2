import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  addCourse as apiAddCourse,
  deleteCourse as apiDeleteCourse,
  updateCourse as apiUpdateCourse,
} from "../services/api";
import {
  setCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../store/redux/courseSlice";
import CourseCard from "./CourseCard";
import SkeletonCard from "./SkeletonCard";
import AddCourseModal from "./AddCourseModal";

const ITEMS_PER_PAGE = 6;

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses, category } = useSelector((state) => state.courses);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        dispatch(setCourses(data));
      } catch (error) {
        console.error("Gagal memuat data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [dispatch]);

  const handleAdd = async (newCourse) => {
    try {
      const added = await apiAddCourse({
        ...newCourse,
        rating: 4,
        reviews: 10,
        image: "/images/poster/Poster1.png",
        avatar: "/images/avatar/Avatar1.png",
      });
      dispatch(addCourse(added));
      setCurrentPage(1);
    } catch (err) {
      console.error("Gagal menambahkan kursus.\n", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiDeleteCourse(id);
      dispatch(deleteCourse(id));
    } catch (err) {
      console.error("Gagal menghapus kursus.\n", err);
    }
  };

  const handleUpdate = async (id, updatedCourse) => {
    try {
      const updated = await apiUpdateCourse(id, updatedCourse);
      dispatch(updateCourse(updated));
    } catch (err) {
      console.error("Gagal memperbarui kursus.\n", err);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category ? course.category === category : true;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <section className="w-full py-4">
      <div className="mb-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <input
          type="text"
          placeholder="Cari kursus atau instruktur..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="focus:ring-primary bg-other-primary w-full max-w-md rounded border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:outline-none"
        />
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-400 rounded px-4 py-2 text-sm font-semibold text-white transition hover:cursor-pointer"
        >
          Tambah Course
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      ) : paginatedCourses.length === 0 ? (
        <p className="text-text-dark-secondary text-center text-sm">
          Tidak ada kursus yang ditemukan.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="text-text-dark-secondary hover:text-text-light-primary rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold hover:cursor-pointer hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-text-dark-secondary hover:text-text-light-primary rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold hover:cursor-pointer hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      <AddCourseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAdd}
      />
    </section>
  );
};

export default CourseList;
