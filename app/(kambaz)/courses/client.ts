import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;

export type Course = {
  _id: string;
  name: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  department?: string;
  credits?: number;
  description: string;
  image?: string;
  term?: string;
};

export type Lesson = {
  _id: string;
  name: string;
  description?: string;
  module?: string;
};

export type CourseModule = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

export type Enrollment = { _id: string; user: string; course: string };

// ---- Courses (§5.4.5) ----
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data as Course[];
};
export const findCourseById = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}`);
  return data as Course;
};
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data as Course[];
};
export const createCourse = async (course: Partial<Course>) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course,
  );
  return data as Course;
};
export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};
export const updateCourse = async (course: Course) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data as Course;
};

// ---- Enrollments (§5.4.8) ----
export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses/${courseId}`,
  );
  return data;
};
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/courses/${courseId}`,
  );
  return data;
};

// ---- Modules (§5.4.6) ----
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data as CourseModule[];
};
export const createModuleForCourse = async (
  courseId: string,
  module: Partial<CourseModule>,
) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data as CourseModule;
};
export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};
export const updateModule = async (module: CourseModule) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data as CourseModule;
};
