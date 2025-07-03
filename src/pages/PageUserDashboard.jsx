import { useAuth } from "../state/auth/authContext";
import { useNavigate } from "react-router";

const PageUserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Профіль користувача
        </h2>

        <div className="mb-6 space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">ID:</span>
            <span>{user?.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Ім'я:</span>
            <span>{user?.username}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Підтверджено:</span>
            <span
              className={user?.confirmed ? "text-green-600" : "text-red-600"}
            >
              {user?.confirmed ? "Так" : "Ні"}
            </span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-400 hover:bg-red-500 px-5 py-3 text-white rounded transition-colors"
        >
          Вийти
        </button>
      </div>
    </div>
  );
};

export default PageUserDashboard;
