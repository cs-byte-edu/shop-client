import { create } from "zustand";
import { persist, subscribeWithSelector, devtools } from "zustand/middleware";
import { createAuthSlice } from "./slices/createAuthSlice";
import { createCartSlice } from "./slices/createCartSlice";
import { createWishlistSlice } from "./slices/createWishlistSlice";
import { createCompareSlice } from "./slices/createCompareSlice";
import { createPageSlice } from "./slices/createPageSlice";
// import { createAddressSlice } from "./slices/createAddressSlice";

// Створюємо стор, як і раніше
export const useBoundStore = create(
  devtools(
    subscribeWithSelector(
      persist(
        (...args) => ({
          ...createAuthSlice(...args),
          ...createCartSlice(...args),
          ...createPageSlice(...args),
          // ...createWishlistSlice(...args),
          // ...createCompareSlice(...args),
          // ...createAddressSlice(...args),
        }),
        {
          name: "ecommerce-store",
          partialize: (state) => ({
            user: state.user,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            // compare: state.compare,
          }),
          onRehydrateStorage: () => (state) => {
            // Initialize auth after rehydration
            if (state) {
              state.initializeAuth();
            }
          },
        }
      )
    )
  )
);
