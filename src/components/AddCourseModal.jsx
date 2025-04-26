import PropTypes from "prop-types";
import { useState } from "react";

const AddCourseModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    role: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.instructor &&
      formData.role &&
      formData.price
    ) {
      onSave(formData);
      setFormData({ title: "", instructor: "", role: "", price: "" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-other-primary w-full max-w-md rounded-lg p-6">
        <h2 className="text-text-dark-primary mb-4 text-xl font-semibold">
          Tambah Kursus Baru
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Judul Kursus"
            className="focus:ring-primary rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:outline-none"
          />
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            placeholder="Nama Instruktur"
            className="focus:ring-primary rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:outline-none"
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role Instruktur"
            className="focus:ring-primary rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:outline-none"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Harga (contoh: 500000)"
            className="focus:ring-primary rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:cursor-pointer hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-primary hover:bg-primary-400 rounded-md px-4 py-2 text-sm font-semibold text-white hover:cursor-pointer"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddCourseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddCourseModal;
