import { createContext, useContext, useEffect, useReducer } from "react";
import {
  addToCompare,
  removeFromCompare,
  clearCompare,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} from "./userInteraction";

import { userInteractionReducer } from "./userInteractionReducer";

const setInitialState = () => {
  const savedCompareItems = localStorage.getItem("compare");
  const savedWishlistItems = localStorage.getItem("wishlist");

  let compareItems = [];
  let wishlistItems = [];

  if (savedCompareItems) {
    compareItems = JSON.parse(savedCompareItems);
  }

  if (savedWishlistItems) {
    wishlistItems = JSON.parse(savedWishlistItems);
  }

  return {
    compareItems,
    wishlistItems,
  };
};

// console.log("TEST STORAGE: ", setInitialState());

const UserInteractionContext = createContext();

export const UserInteractionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userInteractionReducer,
    undefined,
    setInitialState
  );

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(state.compareItems));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
  }, [state]);

  const addCompareItem = (payload) => {
    dispatch(addToCompare(payload));
  };

  const removeItemFromCompare = (payload) => {
    dispatch(removeFromCompare(payload));
  };

  const clearCompareList = () => {
    dispatch(clearCompare());
  };

  const addItemToWishlist = (payload) => {
    // console.log("addItemToWishlist: ", payload);
    dispatch(addToWishlist(payload));
  };

  const removeItemFromWishlist = (payload) => {
    dispatch(removeFromWishlist(payload));
  };

  const clearItemsWishlist = () => {
    dispatch(clearWishlist());
  };

  const UserInteractionValue = {
    ...state,
    addCompareItem,
    removeItemFromCompare,
    clearCompareList,
    addItemToWishlist,
    removeItemFromWishlist,
    clearItemsWishlist,
  };

  return (
    <UserInteractionContext value={UserInteractionValue}>
      {children}
    </UserInteractionContext>
  );
};

export const useUserInteraction = () => {
  const context = useContext(UserInteractionContext);
  if (!context)
    throw new Error(
      "useUserInteraction must be used within UserInteractionProvider"
    );
  return context;
};
