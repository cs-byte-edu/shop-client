import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import { authReducer } from "./authReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { axiosInstance } from "../../api/apiClient";
import { AUTH_ACTIONS } from "./authTypes";
import { authService } from "../../services/authService";

const initialAuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const [token, setToken] = useLocalStorage("strapi_jwt", null);
  const isInitializing = useRef(true);
  // Setup API interceptors
  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          dispatch({ type: AUTH_ACTIONS.LOGOUT });
          setToken(null);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [token, setToken]);

  // Initialize auth on mount
  // useEffect(() => {
  //   const initializeAuth = async () => {
  //     if (token) {
  //       try {
  //         dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
  //         const user = await authService.getCurrentUser();

  //         dispatch({
  //           type: AUTH_ACTIONS.LOGIN_SUCCESS,
  //           payload: { jwt: token, user },
  //         });
  //       } catch (error) {
  //         setToken(null);
  //         dispatch({ type: AUTH_ACTIONS.LOGOUT });
  //         console.warn(error);
  //       } finally {
  //         dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
  //       }
  //     }
  //   };

  //   initializeAuth();
  // }, [token, setToken]);

  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
          const user = await authService.getCurrentUser();
          dispatch({
            type: AUTH_ACTIONS.LOGIN_SUCCESS,
            payload: { jwt: token, user },
          });
        } catch (error) {
          // не викликаємо logout тут
          setToken(null);
          console.warn("Помилка при ініціалізації:", error);
        } finally {
          dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
          isInitializing.current = false;
        }
      } else {
        isInitializing.current = false;
      }
    };

    initializeAuth();
  }, [token]);

  const login = useCallback(
    async (credentials) => {
      dispatch({ type: AUTH_ACTIONS.LOGIN_START });

      try {
        const { jwt, user } = await authService.login(credentials);
        setToken(jwt);

        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: { jwt, user },
        });

        return { success: true, user };
      } catch (error) {
        const errorMessage =
          error.response?.data?.error?.message ||
          error.message ||
          "Помилка авторизації";

        dispatch({
          type: AUTH_ACTIONS.LOGIN_FAILURE,
          payload: errorMessage,
        });

        return { success: false, error: errorMessage };
      }
    },
    [setToken]
  );

  const register = useCallback(
    async (userData) => {
      dispatch({ type: AUTH_ACTIONS.REGISTER_START });

      try {
        const { jwt, user } = await authService.register(userData);
        setToken(jwt);

        dispatch({
          type: AUTH_ACTIONS.REGISTER_SUCCESS,
          payload: { jwt, user },
        });

        return { success: true, user };
      } catch (error) {
        const errorMessage =
          error.response?.data?.error?.message ||
          error.message ||
          "Помилка реєстрації";

        dispatch({
          type: AUTH_ACTIONS.REGISTER_FAILURE,
          payload: errorMessage,
        });

        return { success: false, error: errorMessage };
      }
    },
    [setToken]
  );

  const logout = useCallback(() => {
    setToken(null);
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  }, [setToken]);

  const clearError = useCallback(() => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  }, []);

  const value = {
    ...state,
    login,
    register,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// useAuth Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
