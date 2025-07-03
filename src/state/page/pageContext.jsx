import {
  useMemo,
  useReducer,
  createContext,
  useContext,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { pageReducer } from "./pageReducer";
import { setPageLoading, setPageData, setPageError } from "./pageActions";

const initialState = {
  loading: false,
  error: null,
  pageData: null,
};

const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pageReducer, initialState);
  const abortRef = useRef(null);

  const loadPageData = useCallback(async (apiCallback) => {
    if (abortRef.current) {
      abortRef.current.abort(); // скасувати попередній запит
    }

    const controller = new AbortController();
    abortRef.current = controller;

    dispatch(setPageLoading(true));
    try {
      const result = await apiCallback({ signal: controller.signal });
      // console.log("RESULT: ", result.data.data);
      dispatch(setPageData(result.data.data));
    } catch (error) {
      let errorMessage;

      if (error.name === "CanceledError" || error.name === "AbortError") {
        // Запит було скасовано — не потрібно показувати помилку
        return;
      }

      if (error.response) {
        errorMessage =
          error.response.data?.message ||
          error.response.data?.error ||
          error.response.data ||
          `HTTP ${error.response.status}: ${error.response.statusText}`;
      } else if (error.request) {
        errorMessage =
          "Немає відповіді від сервера. Перевірте підключення до інтернету.";
      } else {
        errorMessage = error.message || "Невідома помилка";
      }

      dispatch(setPageError(errorMessage));
    }
  }, []);

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, []);

  const pageContextValue = useMemo(
    () => ({
      ...state,
      loadPageData,
    }),
    [state, loadPageData]
  );

  return (
    <PageContext.Provider value={pageContextValue}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within PageProvider");
  return context;
};
