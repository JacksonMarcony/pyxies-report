import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/v01",
});

export default api;
