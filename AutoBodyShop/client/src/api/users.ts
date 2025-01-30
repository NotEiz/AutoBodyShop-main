import axios from "axios";
import { User } from "../components/user/types";

export const RegUser = async (user: User) => {
  console.log(user)
  const response = await axios.post(`/register`, user);
  return response.data;
};

export const FindUser = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};
