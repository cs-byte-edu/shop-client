// import { Link } from "react-router";
// import { ProductInfo } from "./ProductInfo";
// import { ProductCartOverlay } from "./ProductCartOverlay";
// import { ProductCartActions } from "./ProductCartActions";
// import { ButtonAction } from "./ButtonAction";

export const ProductCart = ({
  // data,
  // onAddItemToCart = () => {},
  // onAddCompareItem = () => {},
  // onAddWishlistItem = () => {},
  children,
  className,
}) => {
  return (
    <div
      className={`${className} relative border border-[var(--c-gray-200)] rounded-[8px] px-[15px] py-[20px] group`}
    >
      {children}
    </div>
  );
};
