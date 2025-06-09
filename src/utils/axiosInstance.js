import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST_NAME}/api/admin`,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
