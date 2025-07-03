import { useEffect } from "react";
import { useCart } from "../state/cart/cartContext";
import { useLocation } from "react-router";

const PageOrder = () => {
  const { clearUserCart } = useCart();
  const { state } = useLocation();
  useEffect(() => {
    clearUserCart();
  }, []);
  return (
    <div>
      <h2>Bаш номер замовлення: 987568</h2>
      <p>Наш менеджер звʼяжеться з Вами</p>

      <div className="border border-gray-200 rounded-[15px]">
        {state.map((item) => (
          <div
            key={item.id}
            className="flex px-[20px] py-[25px] not-last:border-b border-gray-200"
          >
            <div className="flex items-center gap-[16px] font-medium">
              <h2>
                <span className="font-bold">{item.name}</span>,{" "}
                <span className="text-[var(--c-green-500)]">{item.brand}</span>
              </h2>
            </div>

            <div className="">
              &nbsp;
              {item.quantity}
              &nbsp; одиниць
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PageOrder;
