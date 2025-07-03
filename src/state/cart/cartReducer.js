import { CartTypes } from "./cartTypes";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART: {
      const cartItemId = action.payload.id;

      const existCartItem = state.cartItems.find(
        (item) => item.id === cartItemId
      );

      if (existCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === existCartItem.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case CartTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case CartTypes.UPDATE_CART_QUANTITY: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.qty }
            : item
        ),
      };
    }

    case CartTypes.CLEAR_CART: {
      return { ...state, cartItems: [] };
    }

    case CartTypes.LOAD_CART: {
      console.log("LOAD: ", action.payload.cartItems);
      return {
        ...state,
        cartItems: [...action.payload.cartItems],
      };
    }

    case CartTypes.PLACE_ORDER: {
      return {
        ...state,
        // order: {
        //   ...state.cartItems,
        // },
        cartItems: [],
      };
    }

    default: {
      return state;
    }
  }
};
