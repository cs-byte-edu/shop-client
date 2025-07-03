import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { PageProvider } from "./state/page/pageContext";
import { AuthProvider } from "./state/auth/authContext";
import { UserInteractionProvider } from "./state/userInteraction/userInteractionContext";
import { CartProvider } from "./state/cart/cartContext";
import { ProductProvider } from "./state/product/productContext";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <UserInteractionProvider>
        <CartProvider>
          <PageProvider>
            <ProductProvider>
              <BrowserRouter basename="/shop-client">
                <AppRouter />
              </BrowserRouter>
            </ProductProvider>
          </PageProvider>
        </CartProvider>
      </UserInteractionProvider>
    </AuthProvider>
  );
}

export default App;
