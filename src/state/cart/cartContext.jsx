import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  addToCart,
  loadCart,
  removeFromCart,
  updateQuantityCart,
  placeOrder,
} from "./cartActions";
import { cartReducer } from "./cartReducer";
import { CartTypes } from "./cartTypes";

const CartContext = createContext([]);

const getInitialCart = () => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : { cartItems: [] };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {}, getInitialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addItemToCart = useCallback((payload) => {
    dispatch(addToCart(payload));
  }, []);

  const removeItemFromCart = useCallback((payload) => {
    dispatch(removeFromCart(payload));
  }, []);

  const updateQtyCart = useCallback((payload) => {
    dispatch(updateQuantityCart(payload));
  }, []);

  // const placeUserOrder = useCallback((payload) => {
  //   dispatch(placeOrder(payload));
  // }, []);

  const clearUserCart = useCallback(() => {
    dispatch({
      type: CartTypes.CLEAR_CART,
    });
  }, []);

  const totalItems = useMemo(
    () => state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [state.cartItems]
  );

  const totalPrice = useMemo(
    () =>
      state.cartItems
        .reduce((sum, item) => sum + item.final_price * item.quantity, 0)
        .toFixed(2),
    [state.cartItems]
  );

  const cartContextValue = useMemo(
    () => ({
      cartItems: state.cartItems,
      // order: state.order,
      addItemToCart,
      removeItemFromCart,
      updateQtyCart,
      // placeUserOrder,
      totalPrice,
      clearUserCart,
      totalItems,
    }),
    [
      state.cartItems,
      // state.order,
      addItemToCart,
      removeItemFromCart,
      updateQtyCart,
      // placeUserOrder,
      totalPrice,
      clearUserCart,
      totalItems,
    ]
  );

  return <CartContext value={cartContextValue}>{children}</CartContext>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
