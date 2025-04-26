import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const COURSES_ENDPOINT = `${API_BASE_URL}/courses`;

// GET all courses
export const fetchCourses = async () => {
  const response = await axios.get(COURSES_ENDPOINT);
  return response.data;
};

// ADD course
export const addCourse = async (course) => {
  const response = await axios.post(COURSES_ENDPOINT, course);
  return response.data;
};

// UPDATE course
export const updateCourse = async (id, updatedCourse) => {
  const response = await axios.put(`${COURSES_ENDPOINT}/${id}`, updatedCourse);
  return response.data;
};

// DELETE course
export const deleteCourse = async (id) => {
  const response = await axios.delete(`${COURSES_ENDPOINT}/${id}`);
  return response.data;
};
