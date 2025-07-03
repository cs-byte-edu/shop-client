import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { PageProvider } from "./state/page/PageContext";
// import { CartProvider } from "./state/cart/cartContext";
// import { CompareProvider } from "./state/compare/compareContext";
// import { WishlistProvider } from "./state/wishlist/wishlistContext";
// import { AuthProvider } from "./state/auth/authContext";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <AuthProvider>
//       <PageProvider>
//         <CartProvider>
//           <CompareProvider>
//             <WishlistProvider> */}
//     <App />
//     {/* </WishlistProvider>
//           </CompareProvider>
//         </CartProvider>
//       </PageProvider>
//     </AuthProvider> */}
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(<App />);
