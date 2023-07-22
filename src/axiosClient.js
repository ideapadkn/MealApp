import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, //www.themealdb.com/api/json/v1/1/list.php?i=list
});

export default axiosClient;