import { AuthTypes } from "./authTypes";

export const setUser = (payload) => {
  return {
    type: AuthTypes.SET_USER,
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: AuthTypes.SET_LOADING,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: AuthTypes.SET_ERROR,
    payload,
  };
};
