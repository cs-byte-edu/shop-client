import { Routes, Route } from "react-router";
import { Layout } from "../layouts/Layout";
import { PageHome } from "../pages/PageHome";
import { PageSignIn } from "../pages/PageSignIn";
import { AuthGuard } from "../components/AuthGuard";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageHome />} />
        <Route
          path="dashboard"
          element={
            <AuthGuard>
              <p>DASHBOARD</p>
            </AuthGuard>
          }
        />
      </Route>
      <Route path="signin" element={<PageSignIn />} />
    </Routes>
  );
};
