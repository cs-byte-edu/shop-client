import { authService } from "../../api/services/authService";

export const createAuthSlice = (set, get) => ({
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  isInitialized: false,

  login: async (credentials) => {
    set({ loading: true, error: null });

    try {
      // логінимось і оновлюємо стан
      const { jwt, user } = await authService.login(credentials);

      set({
        user,
        token: jwt,
        isAuthenticated: true,
        loading: false,
        error: null,
        isInitialized: true,
      });

      // Логіка завантаження даних залишається, це добре
      // await Promise.all([
      //   get().loadCart(),
      //   get().loadWishlist(),
      //   get().loadAddresses(),
      // ]);

      return { success: true, user };
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        error.message ||
        "Помилка авторизації";
      set({
        loading: false,
        error: errorMessage,
        user: null,
        token: null,
        isAuthenticated: false,
        isInitialized: true,
      });
      return { success: false, error: errorMessage };
    }
  },

  logout: async () => {
    // try {
    //   await authService.logout();
    // } catch (error) {
    //   console.error("Logout error:", error);
    // } finally {
    // Просто очищуємо стан. Про заголовок axios подбає apiManager.
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
      isInitialized: true,
    });
    // get().clearCart();
    // get().clearWishlist();
    // get().clearAddresses();
    // get().clearCompare();
    // }
  },

  initializeAuth: async () => {
    const { token } = get();

    if (!token) {
      set({ isInitialized: true });
      return;
    }

    set({ loading: true });

    try {
      const user = await authService.getCurrentUser();

      set({
        user,
        isAuthenticated: true,
        loading: false,
        isInitialized: true,
      });
    } catch (error) {
      console.warn("Помилка при ініціалізації:", error);

      // Clear invalid token
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        isInitialized: true,
      });
    }
  },
});
