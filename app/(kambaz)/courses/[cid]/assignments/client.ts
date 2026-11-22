import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  availableUntil?: string;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data as Assignment[];
};
export const findAssignmentById = async (assignmentId: string) => {
  const { data } = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data as Assignment;
};
export const createAssignmentForCourse = async (
  courseId: string,
  assignment: Partial<Assignment>,
) => {
  const { data } = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment,
  );
  return data as Assignment;
};
export const updateAssignment = async (assignment: Assignment) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment,
  );
  return data as Assignment;
};
export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};
