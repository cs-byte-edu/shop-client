import { PageActionTypes } from "./pageTypes";

export const setPageData = (payload) => {
  return {
    type: PageActionTypes.SET_PAGE,
    payload,
  };
};

export const setPageLoading = () => {
  return {
    type: PageActionTypes.SET_LOADING,
  };
};

export const setPageError = (payload) => {
  return {
    type: PageActionTypes.SET_ERROR,
    payload,
  };
};
