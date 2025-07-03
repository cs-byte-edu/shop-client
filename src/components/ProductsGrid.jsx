import {
  ShoppingCartIcon,
  HeartIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";
import { useUserInteraction } from "../state/userInteraction/userInteractionContext";
import { ProductCart } from "./ProductCart";
import { ProductCartOverlay } from "./ProductCartOverlay";
import { ButtonAction } from "./ButtonAction";
import { ProductInfo } from "./ProductInfo";
import { ProductCartActions } from "./ProductCartActions";
import { useCart } from "../state/cart/cartContext";

const ProductsGrid = ({
  data = [],
  productsGridClass = "grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-[20px]",
}) => {
  const { addCompareItem, addItemToWishlist } = useUserInteraction();

  const { addItemToCart } = useCart();

  console.log(data);

  if (!data) return null;

  return (
    // <section className="lg:pt-[60px] lg:pb-[60px] container">
    //   <h2 className="lg:text-3xl font-semibold mb-[20px]">
    //     {data?.categories?.[0]?.name || data.name}
    //   </h2>
    //   <p className="text-xl font-semibold mb-[36px]">
    //     {data?.categories?.[0]?.description || data.description}
    //   </p>
    //   <div className="grid grid-cols-4 gap-[20px]">
    //     {data?.categories?.[0]?.products.map((data) => (
    //       <ProductCart key={data.id}>
    //         <ProductCartOverlay>
    //           <ButtonAction url="cart" onClick={() => addItemToCart(data)}>
    //             <ShoppingCartIcon className="size-5 text-[var(--c-green-500)]" />
    //           </ButtonAction>
    //           <ButtonAction
    //             url="wishlist"
    //             onClick={() => addItemToWishlist(data)}
    //           >
    //             <HeartIcon className="size-5 text-[var(--c-green-500)]" />
    //           </ButtonAction>
    //           <ButtonAction url="compare" onClick={() => addCompareItem(data)}>
    //             <ArrowPathRoundedSquareIcon className="size-5 text-[var(--c-green-500)]" />
    //           </ButtonAction>
    //         </ProductCartOverlay>
    //         <ProductInfo product={data} />
    //         <ProductCartActions
    //           data={data?.final_price}
    //           onAddItemToCart={() => addItemToCart(data)}
    //         />
    //       </ProductCart>
    //     ))}
    //   </div>
    // </section>
    <section className="lg:pt-[60px] lg:pb-[60px] container">
      <h2 className="lg:text-3xl font-semibold mb-[20px]">{data?.name}</h2>
      <p className="text-xl font-semibold mb-[36px]">{data?.description}</p>
      <div className={`${productsGridClass}`}>
        {data?.categories?.[0].products?.map((data) => (
          <ProductCart key={data.id}>
            <ProductCartOverlay>
              <ButtonAction url="cart" onClick={() => addItemToCart(data)}>
                <ShoppingCartIcon className="size-5 text-[var(--c-green-500)]" />
              </ButtonAction>
              <ButtonAction
                url="wishlist"
                onClick={() => addItemToWishlist(data)}
              >
                <HeartIcon className="size-5 text-[var(--c-green-500)]" />
              </ButtonAction>
              <ButtonAction url="compare" onClick={() => addCompareItem(data)}>
                <ArrowPathRoundedSquareIcon className="size-5 text-[var(--c-green-500)]" />
              </ButtonAction>
            </ProductCartOverlay>
            <ProductInfo product={data} />
            <ProductCartActions
              data={data?.final_price}
              onAddItemToCart={() => addItemToCart(data)}
            />
          </ProductCart>
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
