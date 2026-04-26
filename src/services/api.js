import axios from "axios";

const api = axios.create({
  baseURL: "https://blog_vue.test/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;