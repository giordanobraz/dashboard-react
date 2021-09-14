import axios from "axios";

export const user_api = axios.create({
  baseURL: "https://randomuser.me/api/",
});
