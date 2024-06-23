import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { handleLogout } from '@/store/reducers/auth';

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const AxiosInterceptor: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  axiosConfig.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${ token }`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosConfig.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if(error?.response?.status === 403) {
        navigate('/403')
      }
      if (error?.response?.data?.code === 401) {
        if (error?.response?.data?.message === "Invalid JWT Token" || error?.response?.data?.message === "Expired JWT Token") {
          dispatch(handleLogout());
          toast.error("Session Expired");
        }
      }
      else {
        return Promise.reject(error);
      }
    }
  );

  return children;
}

export default axiosConfig;
export { AxiosInterceptor };
