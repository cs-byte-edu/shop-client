// hooks/useAxiosInterceptors.ts
import { useEffect, useRef } from "react";
import { axiosInstance } from "../api/apiClient";
import { useBoundStore } from "../store";

export const useAxiosInterceptors = () => {
  const token = useBoundStore((state) => state.token);
  const logout = useBoundStore((state) => state.logout);

  const interceptorIdRef = useRef(null);

  // ✅ Заголовок Authorization
  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // ✅ Перехоплювач помилок
  useEffect(() => {
    // Видаляємо старий перехоплювач, якщо був
    if (interceptorIdRef.current !== null) {
      axiosInstance.interceptors.response.eject(interceptorIdRef.current);
    }

    interceptorIdRef.current = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.warn("401 — logout");
          logout();
        }
        return Promise.reject(error);
      }
    );

    // 💡 Очищення при unmount (опціонально)
    return () => {
      if (interceptorIdRef.current !== null) {
        axiosInstance.interceptors.response.eject(interceptorIdRef.current);
      }
    };
  }, [logout]);
};
