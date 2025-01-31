import axios from "axios";
import { User } from "../components/user/types";

export const RegUser = async (user: User) => {
  const response = await axios.post(`/register`, user);
  return response.data;
};

export const LoginUser = async (values : User) => {
  const response = await axios.post(`/login`, values);
  return response.data;
};
