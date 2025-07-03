import { PageActionTypes } from "./pageTypes";

export const pageReducer = (state, action) => {
  switch (action.type) {
    case PageActionTypes.SET_LOADING: {
      // console.log("SET_LOADING");
      return { ...state, loading: true, error: null };
    }

    case PageActionTypes.SET_PAGE: {
      // console.log("SET_PAGE");
      return {
        ...state,
        error: null,
        loading: false,
        pageData: action.payload,
      };
    }

    case PageActionTypes.SET_ERROR: {
      // console.log("SET_ERROR");
      return { ...state, loading: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
};
