import { Link } from "react-router";
import {
  ShoppingCartIcon,
  HeartIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Search } from "./Search";
import { Nav } from "./Nav";
import { Badge } from "./Badge";
import { useUserInteraction } from "../state/userInteraction/userInteractionContext";
import { useCart } from "../state/cart/cartContext";
import { useProducts } from "../state/product/productContext";
import { useCallback } from "react";

export const NavBar = ({ navItems }) => {
  const { totalItems: totalItemsCart } = useCart();
  const { wishlistItems, compareItems } = useUserInteraction();
  const { updateFilters } = useProducts();

  const handleFilterChange = useCallback(
    (newFilters) => {
      updateFilters({ ...newFilters, page: 1 });
    },
    [updateFilters]
  );

  const totalItemsCompare = compareItems.length;
  const totalItemsWishlist = wishlistItems.length;

  return (
    <>
      <div className="border-t border-b border-gray-300 lg:pt-[30px] lg:pb-[30px]">
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="uppercase text-[var(--c-green-500)] text-2xl font-bold"
          >
            Nutrition
          </Link>
          {/* SEARCH */}
          <Search
            onChange={(e) => handleFilterChange({ search: e.target.value })}
          />
          <div className="flex items-center gap-[20px] text-base font-semibold">
            <Link
              to="/compare"
              className="flex items-center gap-[20px] font-normal cursor-pointer text-gray-400 hover:text-[var(--c-green-500)]"
            >
              <Badge title="Compare" content={totalItemsCompare}>
                <ArrowPathIcon className="rotate-45 size-8 text-gray-500" />
              </Badge>
            </Link>

            <Link
              to="/wishlist"
              className="flex items-center gap-[20px] font-normal cursor-pointer text-gray-400 hover:text-[var(--c-green-500)]"
            >
              <Badge title="Wishlist" content={totalItemsWishlist}>
                <HeartIcon className="size-8 text-gray-500" />
              </Badge>
            </Link>

            <Link to="/cart" className="">
              <Badge title="Cart" content={totalItemsCart}>
                <ShoppingCartIcon className="size-8 text-gray-500" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="border-b border-gray-300 lg:pt-[15px] lg:pb-[15px]">
        <div className="container">
          <Nav navItems={navItems} />
        </div>
      </div>
    </>
  );
};
