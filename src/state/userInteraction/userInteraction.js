import { WishlistTypes, CompareTypes } from "./userInteractionTypes";

export const addToWishlist = (payload) => {
  return {
    type: WishlistTypes.ADD_TO_WISHLIST,
    payload,
  };
};

export const removeFromWishlist = (payload) => {
  return {
    type: WishlistTypes.REMOVE_FROM_WISHLIST,
    payload,
  };
};

export const clearWishlist = () => {
  return {
    type: WishlistTypes.CLEAR_WISHLIST,
  };
};

export const addToCompare = (payload) => {
  return {
    type: CompareTypes.ADD_TO_COMPARE,
    payload,
  };
};

export const removeFromCompare = (payload) => {
  return {
    type: CompareTypes.REMOVE_FROM_COMPARE,
    payload,
  };
};

export const clearCompare = () => {
  return {
    type: CompareTypes.CLEAR_COMPARE,
  };
};
