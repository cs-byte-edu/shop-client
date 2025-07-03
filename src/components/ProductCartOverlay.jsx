import {
  ShoppingCartIcon,
  HeartIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";

export const ProductCartOverlay = ({
  // onAddItemToCart,
  // onAddWishlistItem,
  // onAddCompareItem,
  children,
}) => {
  return (
    <div className="absolute hidden group-hover:flex items-center justify-center gap-[10px] top-0 right-0 bottom-0 left-0 bg-[var(--c-green-50)]">
      {/* <Link
        to="/cart"
        onClick={onAddItemToCart}
        className="bg-white py-[8px] px-[12px] border border-[var(--c-green-500)] rounded-[3px]"
      >
        <ShoppingCartIcon className="size-5 text-[var(--c-green-500)]" />
      </Link>
      <Link
        to="/wishlist"
        onClick={onAddWishlistItem}
        className="bg-white py-[8px] px-[12px] border border-[var(--c-green-500)] rounded-[3px]"
      >
        <HeartIcon className="size-5 text-[var(--c-green-500)]" />
      </Link>
      <Link
        to="/compare"
        onClick={onAddCompareItem}
        className="bg-white py-[8px] px-[12px] border border-[var(--c-green-500)] rounded-[3px]"
      >
        <ArrowPathRoundedSquareIcon className="size-5 text-[var(--c-green-500)]" />
      </Link> */}
      {children}
    </div>
  );
};
