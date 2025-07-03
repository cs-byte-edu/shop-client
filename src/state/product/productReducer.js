import { ProductTypes } from "./productTypes";

export const productReducer = (state, action) => {
  switch (action.type) {
    case ProductTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case ProductTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case ProductTypes.SET_PRODUCTS: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload.meta,
        },
        products: action.payload,
        loading: false,
        error: null,
      };
    }

    case ProductTypes.SET_CURRENT_PRODUCT: {
      return {
        ...state,
        currentProduct: action.payload,
        loading: false,
        error: null,
      };
    }

    case ProductTypes.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
        error: null,
        loading: false,
      };
    }

    case ProductTypes.UPDATE_FILTERS: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    }

    default: {
      return state;
    }
  }
};
