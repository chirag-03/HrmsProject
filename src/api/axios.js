// === /src/api/axios.js ===
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if your backend uses a different port
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
