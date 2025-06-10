import axios from "axios";

const axiosInstance = axios.create({
  //  const token = localStorage.getItem("token");
  baseURL: `${process.env.REACT_APP_HOST_NAME}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return (window.location = "/");
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  console.log(token);

  if (token) {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export default axiosInstance;
