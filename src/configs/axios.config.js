// axiosConfig.js
import axios from "axios";
import GlobalConfigs from "./GlobalConfig";


// Tạo instance của Axios với các cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: GlobalConfigs.BASE_URL_API, // URL cơ sở từ biến môi trường
  timeout: 5000, // thời gian timeout (ms)
  headers: {
    "Content-Type": "application/json",
  },
});

// (Tùy chọn) Thêm interceptors cho request và response
axiosInstance.interceptors.request.use(
  (config) => {
    // Ví dụ: thêm token xác thực nếu cần
    // config.headers.Authorization = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Xử lý lỗi toàn cục (ví dụ: chuyển hướng nếu 401 Unauthorized)
    return Promise.reject(error);
  }
);

export default axiosInstance;
