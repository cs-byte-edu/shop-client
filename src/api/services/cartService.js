import api from "../apiClient";

export const cartService = {
  getCart: () => api.get("api/cart").then((res) => res.data),
  addToCart: async (id, qty) =>
    api.post("api/cart/add", { productId: id, quantity: qty }),
  removeItem: (id) => api.delete(`api/cart/${id}`),
  updateQuantity: (id, qty) => api.put(`api/cart/${id}`, { quantity: qty }),
};
