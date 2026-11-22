import axios from "axios";
import type { User } from "./AccountContext";

// Every signed-in request must send the session cookie (§5.4.3.2).
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const signin = async (credentials: { username: string; password: string }) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data as User;
};
export const signup = async (user: { username: string; password: string }) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data as User;
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data as User;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};
export const updateUser = async (user: User) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data as User;
};

// People table (§5.4.9)
export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/courses/${courseId}/users`,
  );
  return response.data as User[];
};
