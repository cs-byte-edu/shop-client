import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const ProductPurchase = ({
  productPrice,
  onAddItemToCart = () => {},
}) => {
  return (
    <div className="flex items-center justify-between gap-[15px] pt-[15px] font-semibold text-[var(--c-green-500)]">
      <b className="text-xl font-semibold">${productPrice}</b>
      <button
        onClick={onAddItemToCart}
        className="z-10 flex items-center justify-center gap-[5px] py-[12px] px-[20px] rounded-[4px] bg-[var(--c-green-100)] hover:bg-[var(--c-green-400)] hover:text-white cursor-pointer"
      >
        <ShoppingCartIcon className="size-5" />
        Add
      </button>
    </div>
  );
};
