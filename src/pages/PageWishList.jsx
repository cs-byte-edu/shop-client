import { ProductCart } from "../components/ProductCart";
import { useUserInteraction } from "../state/userInteraction/userInteractionContext";
import { ProductInfo } from "../components/ProductInfo";
import { ProductCartActions } from "../components/ProductCartActions";
const PageWishlist = () => {
  // const {
  //   wishlistItems,
  //   addItemToWishlist,
  //   removeItemFromWishlist,
  //   clearItemsWishlist,
  // } = useWishlist();

  const { wishlistItems, addItemToCart } = useUserInteraction();

  return (
    <section className="lg:pt-[60px] lg:pb-[60px] container">
      <h2 className="lg:text-3xl font-semibold mb-[20px]">PageWishlist</h2>
      {/* {console.log(wishlistItems)} */}
      {wishlistItems.map((item) => (
        <article key={item.documentId} className="flex gap-[32px] mb-[32px]">
          <ProductCart className="flex flex-col basis-1/3 shrink-0">
            <ProductInfo product={item} className="flex flex-col" />
            <ProductCartActions
              data={`${item?.final_price}`}
              onAddItemToCart={() => addItemToCart(item)}
            />
          </ProductCart>
          <div className="basis-1/2 shrink-0">
            <p>{item.description}</p>
            <ul className="py-[16px]">
              {item.attributes.map((item) => (
                <li key={item.id} className="capitalize not-last:mb-[8px]">
                  <b className="">{item.key}:</b>{" "}
                  <em className="not-italic text-[var(--c-green-500)]">
                    {item.value}
                  </em>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PageWishlist;
