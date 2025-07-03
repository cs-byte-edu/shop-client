import { useEffect } from "react";
import { useBoundStore } from "../store";

export const useAuthInit = () => {
  const isInitialized = useBoundStore((state) => state.isInitialized);
  const initializeAuth = useBoundStore((state) => state.initializeAuth);

  useEffect(() => {
    if (!isInitialized) {
      initializeAuth();
    }
  }, [isInitialized, initializeAuth]);
};
