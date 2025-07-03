import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Про нас</h3>
            <p className="text-gray-300 text-sm">
              Ваш надійний партнер у світі онлайн покупок. Якісні товари за
              доступними цінами.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Швидкі посилання</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Головна
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-300 hover:text-white"
                >
                  Категорії
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-white">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Акаунт</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/account" className="text-gray-300 hover:text-white">
                  Мій акаунт
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">
                  Кошик
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-white">
                  Список бажань
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-gray-300 hover:text-white">
                  Порівняння
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 вул. Прикладна, 123, Київ</p>
              <p>📞 +380 (XX) XXX-XX-XX</p>
              <p>✉️ info@example.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 eCommerce App. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
