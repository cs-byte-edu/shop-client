import {
  createContext,
  useReducer,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { productReducer } from "./productReducer";
import api from "../../api/apiClient";

const CATEGORIES_URL =
  "/api/categories?fields[0]=name&fields[1]=slug&fields[2]=description&filters[type][$eqi]=product&populate[parent][fields][0]=name&populate[parent][fields][1]=slug&populate[parent][fields][2]=description";

const productAPI = {
  getProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/api/products${queryString ? `?${queryString}` : ""}`);
  },

  getProduct: (id) => api.get(`/api/products/${id}`),

  getProductsByCategory: (categoryId, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return api.get(
      `/api/products?category=${categoryId}${
        queryString ? `&${queryString}` : ""
      }`
    );
  },

  searchProducts: (query, params = {}) => {
    const queryString = new URLSearchParams({
      ...params,
      search: query,
    }).toString();
    return api.get(`/api/products?${queryString}`);
  },
};

const categoryAPI = {
  // getCategories: () => api.get("/api/categories"),
  getCategories: () => api.get(CATEGORIES_URL),
  getCategory: (id) => api.get(`/api/categories/${id}`),
  getCategoryTree: () => api.get("/api/categories/tree"),
};

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    currentProduct: null,
    categories: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      priceRange: [0, 1000],
      sort: "",
      // sort: "name",
      search: "",
    },
    pagination: {
      page: 1,
      limit: 12,
      total: 0,
      totalPages: 0,
    },
  });

  //   const { execute } = useApi();

  const loadProducts = useCallback(async (params = {}) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await productAPI.getProducts(params);
      dispatch({ type: "SET_PRODUCTS", payload: response.data });
      console.log("SET_PRODUCTS: ", response.data);
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, []);

  const loadProduct = useCallback(async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const product = await productAPI.getProduct(id);
      dispatch({ type: "SET_CURRENT_PRODUCT", payload: product.data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, []);

  const loadCategories = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const categories = await categoryAPI.getCategories();
      console.log("CATEGORY: ", categories);
      dispatch({ type: "SET_CATEGORIES", payload: categories.data.data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, []);

  const updateFilters = useCallback((newFilters) => {
    dispatch({ type: "UPDATE_FILTERS", payload: newFilters });
  }, []);

  const contextValue = useMemo(
    () => ({
      ...state,
      loadProducts,
      loadProduct,
      loadCategories,
      updateFilters,
    }),
    [state, loadProducts, loadProduct, loadCategories, updateFilters]
  );

  return <ProductContext value={contextValue}>{children}</ProductContext>;
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within ProductProvider");
  }
  return context;
};
