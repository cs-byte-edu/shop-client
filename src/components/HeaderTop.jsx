import { Link, useNavigate } from "react-router";
import { UserIcon, TruckIcon } from "@heroicons/react/24/outline";
import { useBoundStore } from "../store";

export const HeaderTop = () => {
  const { isAuthenticated, logout, user } = useBoundStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="box flex items-center justify-between lg:pt-4 lg:pb-4 text-gray-500">
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link
              to="/dashboard"
              className="relative flex items-center gap-2 pr-4 hover:text-gray-800 cursor-pointer after:absolute after:right-0 after:top-1/2 after:-mt-2.5 after:content-[''] after:w-px after:h-5 after:bg-green-200"
            >
              <UserIcon className="w-5 h-5 text-green-500" />
              <span>{user?.username}</span>
            </Link>

            <Link
              to="/track"
              className="flex items-center gap-2 px-4 hover:text-gray-800 cursor-pointer"
            >
              <TruckIcon className="w-5 h-5 text-green-500" />
              <span>Order Tracking</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 pl-4 hover:text-gray-800 cursor-pointer text-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="border border-green-500 px-4 py-2 cursor-pointer hover:bg-green-50 rounded"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="border border-green-500 px-4 py-2 cursor-pointer hover:bg-green-50 rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      <div>
        Need help? Call Us: <span className="text-green-500">+1800900122</span>
      </div>
    </div>
  );
};
