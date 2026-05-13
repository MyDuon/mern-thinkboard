import axios from "axios";

// in production, there is no localhost so we have to make this dynamic
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5001";
const api = axios.create({ baseURL: `${BASE_URL}/api` });

export default api;
