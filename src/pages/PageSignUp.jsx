import { useEffect } from "react";
import { useAuth } from "../state/auth/authContext";
import { useNavigate, Link } from "react-router";
import { useForm } from "../hooks/useForm";
import FormField from "../components/FromField";

const validators = {
  required:
    (message = "Це поле обов'язkove") =>
    (value) => {
      return !value?.toString().trim() ? message : "";
    },

  email:
    (message = "Невірний формат email") =>
    (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return value && !emailRegex.test(value) ? message : "";
    },

  minLength: (min, message) => (value) => {
    const msg = message || `Мінімум ${min} символів`;
    return value && value.length < min ? msg : "";
  },
};

const PageSignUp = () => {
  const { register, loading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const validationRules = {
    username: [validators.required(), validators.minLength(3)],
    email: [validators.required(), validators.email()],
    password: [validators.required(), validators.minLength(6)],
  };

  const form = useForm(
    { username: "", email: "", password: "" },
    validationRules
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.validate()) {
      const result = await register(form.values);
      if (result.success) {
        navigate("/dashboard");
      }
    }
  };

  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  return (
    <form className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Реєстрація</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <FormField
            name="username"
            placeholder="Ім'я користувача"
            value={form.values.username}
            error={form.errors.username}
            touched={form.touched.username}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            disabled={loading}
          />

          <FormField
            name="email"
            type="email"
            placeholder="Email"
            value={form.values.email}
            error={form.errors.email}
            touched={form.touched.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            disabled={loading}
          />

          <FormField
            name="password"
            type="password"
            placeholder="Пароль"
            value={form.values.password}
            error={form.errors.password}
            touched={form.touched.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            disabled={loading}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-400 hover:bg-green-500 disabled:bg-green-300 disabled:cursor-not-allowed px-5 py-3 text-white rounded transition-colors"
          >
            {loading ? "Реєстрація..." : "Зареєструватись"}
          </button>
        </div>

        <div className="text-center mt-4">
          <Link
            to="/signin"
            className="text-green-500 hover:text-green-600 underline"
          >
            Вже є акаунт? Увійти
          </Link>
        </div>
      </div>
    </form>
  );
};

export default PageSignUp;
