import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

const Layout = lazy(() => import("../layouts/Layout"));
const LayoutTwoColumn = lazy(() => import("../layouts/LayoutTwoColumn"));
const PageHome = lazy(() => import("../pages/PageHome"));
const PageCart = lazy(() => import("../pages/PageCart"));
const PageWishlist = lazy(() => import("../pages/PageWishlist"));
const PageCompare = lazy(() => import("../pages/PageCompare"));
const PageSignIn = lazy(() => import("../pages/PageSignIn"));
const PageSignUp = lazy(() => import("../pages/PageSignUp"));
const PageUserDashboard = lazy(() => import("../pages/PageUserDashboard"));
const PageContacts = lazy(() => import("../pages/PageContacts"));
const PageAbout = lazy(() => import("../pages/PageAbout"));
const PageOrder = lazy(() => import("../pages/PageOrder"));
const PageCategory = lazy(() => import("../pages/PageCategory"));
const PageCatalog = lazy(() => import("../pages/PageCatalog"));

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="contacts" element={<PageContacts />} />
          <Route path="about-us" element={<PageAbout />} />
          <Route path="wishlist" element={<PageWishlist />} />
          <Route path="compare" element={<PageCompare />} />
          <Route path="cart" element={<PageCart />} />
          <Route path="order" element={<PageOrder />} />
          <Route path="shop" element={<LayoutTwoColumn />}>
            {/* <Route path="category/:id" element={<PageCategory />} /> */}
            <Route path="catalog" element={<PageCatalog />} />
            <Route path="catalog/:id" element={<PageCatalog />} />
          </Route>
          <Route path="product/:id" element={<div>Product Page</div>} />
          <Route path="dashboard" element={<PageUserDashboard />} />
        </Route>

        <Route path="signin" element={<PageSignIn />} />
        <Route path="signup" element={<PageSignUp />} />

        <Route path="*" element={<div>Page NOT FOUND</div>} />
      </Routes>
    </Suspense>
  );
};
