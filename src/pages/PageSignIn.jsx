import { FormLogin } from "../components/FormLogin";
import { useLocation, useNavigate } from "react-router";
// import { useEffect } from "react";
// import { useBoundStore } from "../store";

export const PageSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  console.log("location page sign in: ", location);

  return (
    <div className="box">
      <FormLogin onSuccess={() => navigate(from, { replace: true })} />
    </div>
  );
};
