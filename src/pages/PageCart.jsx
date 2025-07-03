import { Qty } from "../components/Qty";
import { XCircleIcon } from "@heroicons/react/24/outline";
// import { ButtonAction } from "../components/ButtonAction";
import { useNavigate } from "react-router";
import { useBoundStore } from "../store";

const PageCart = () => {
  // const addToCart = useBoundStore((s) => s.addToCart);

  console.log(addToCart);

  const navigate = useNavigate();

  return (
    <section className="box lg:py-[70px]">
      <h2 className="lg:text-3xl font-semibold mb-[20px]">Shopping cart</h2>

      <div className="">
        {/* {cartItems.length > 0 && (
          <>
            <div className="flex bg-[var(--c-green-100)] rounded-[15px] px-[20px] py-[25px] mb-[20px] text-green-600 font-medium">
              <div className="basis-[40%] shrink-0">Product</div>
              <div className="basis-[20%] shrink-0 flex justify-center">
                Price
              </div>
              <div className="basis-[20%] shrink-0 flex justify-center">
                QTY
              </div>
              <div className="basis-[20%] shrink-0 flex justify-center">
                Subtotal
              </div>
            </div>
            <div className="border border-gray-200 rounded-[15px]">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex px-[20px] py-[25px] not-last:border-b border-gray-200"
                >
                  <div className="flex items-center gap-[16px] basis-[40%] shrink-0 font-medium">
                    <XCircleIcon
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-red-500 size-5 cursor-pointer"
                    />
                    <h2>
                      <span className="font-bold">{item.name}</span>,{" "}
                      <span className="text-gray-300">by</span>{" "}
                      <span className="text-[var(--c-green-500)]">
                        {item.brand}
                      </span>
                    </h2>
                  </div>
                  <div className="basis-[20%] shrink-0 flex justify-center">
                    <b className="font-normal">{item.price}</b>
                  </div>
                  <div className="basis-[20%] shrink-0 flex justify-center">
                    <Qty
                      qty={item.quantity}
                      onIncreaseQty={() =>
                        updateQtyCart({ id: item.id, qty: item.quantity + 1 })
                      }
                      onDecreaseQty={() =>
                        updateQtyCart({
                          id: item.id,
                          qty: Math.max(1, item.quantity - 1),
                        })
                      }
                    />
                  </div>
                  <div className="basis-[20%] shrink-0 flex justify-center">
                    {item.quantity * item.final_price}
                  </div>
                </div>
              ))}
            </div>
            <p className="p-[20px] font-bold">Total: {totalPrice}</p>
            <button
              onClick={() => {
                navigate("/order", { replace: true, state: [...cartItems] });
              }}
              className="border border-green-500 py-[12px] px-[20px] rounded-[3px]"
            >
              Оформити замовлення
            </button>
          </>
        )} */}
      </div>
    </section>
  );
};

export default PageCart;
