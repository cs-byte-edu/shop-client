import { cartService } from "../../api/services/cartService";

export const createCartSlice = (set, get) => ({
  cartItems: [],
  cartLoad: false,
  cartError: null,
  cartTotal: 0,

  addToCart: async (product, quantity = 1) => {
    try {
      await cartService.addToCart(product.id, quantity);
    } catch (error) {
      console.log("Add to cart error: ", error);
    }
  },
  removeFromCart: () => {},
  updateCart: () => {},
  clearCart: () => {},
});
