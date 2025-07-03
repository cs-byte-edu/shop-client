import { CartTypes } from "./cartTypes";

export const addToCart = (payload) => {
  return {
    type: CartTypes.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: CartTypes.REMOVE_FROM_CART,
    payload,
  };
};

export const updateQuantityCart = (payload) => {
  return {
    type: CartTypes.UPDATE_CART_QUANTITY,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CartTypes.CLEAR_CART,
  };
};

export const loadCart = (payload) => {
  return {
    type: CartTypes.LOAD_CART,
    payload,
  };
};

export const placeOrder = (payload) => {
  return {
    type: CartTypes.PLACE_ORDER,
    payload,
  };
};
