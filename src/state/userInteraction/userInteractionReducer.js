import { WishlistTypes, CompareTypes } from "./userInteractionTypes";

export const userInteractionReducer = (state, action) => {
  switch (action.type) {
    case WishlistTypes.ADD_TO_WISHLIST: {
      const existedWishlist = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      console.log("action.payload: ", action.payload);

      if (existedWishlist) return state;

      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    }

    case WishlistTypes.REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case WishlistTypes.CLEAR_WISHLIST: {
      return {
        ...state,
        wishlistItems: [],
      };
    }

    case CompareTypes.ADD_TO_COMPARE: {
      const existedCompareItem = state.compareItems.find(
        (item) => item.id === action.payload.id
      );
      if (existedCompareItem) {
        return state;
      }
      return {
        ...state,
        compareItems: [...state.compareItems, action.payload],
      };
    }

    case CompareTypes.REMOVE_FROM_COMPARE: {
      return {
        ...state,
        compareItems: state.compareItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case CompareTypes.CLEAR_COMPARE: {
      return {
        ...state,
        compareItems: [],
      };
    }

    default: {
      return state;
    }
  }
};
