import { useEffect } from "react";
import { Tabs } from "radix-ui";
import ProductsGrid from "../components/ProductsGrid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { useCart } from "../state/cart/cartContext";

const BASE_URL = import.meta.env.VITE_API_URL;

const PopularProducts = ({ data }) => {
  // const { addItemToCart } = useCart();

  const tabs = data?.categories[0]?.products?.reduce((acc, curr) => {
    const mainCategory = curr?.category_main?.name;

    return !acc[mainCategory]
      ? ((acc[mainCategory] = []), acc[mainCategory].push(curr), acc)
      : (acc[mainCategory].push(curr), acc);
  }, {});

  // console.log("TABS: ", tabs);
  return (
    <section className="container lg:py-[70px]">
      <h2 className="lg:text-3xl font-semibold mb-[20px]">
        {data?.section_heading}
      </h2>
      {
        <Tabs.Root defaultValue="tab1">
          <Tabs.List aria-label="tabs" className="TabsList">
            {Object.keys(tabs).map((tab, idx) => (
              <Tabs.Trigger
                value={`tab${idx + 1}`}
                className="TabsTrigger"
                key={tab + idx + 1}
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {Object.values(tabs).map((product, idx) => (
            <Tabs.Content value={`tab${idx + 1}`} key={`tab${idx + 1}`}>
              <div className="flex gap-[20px]">
                {product?.map((data) => (
                  <div
                    key={data.name + idx}
                    className="flex-[1_1_20%] border border-[var(--c-gray-200)] rounded-[8px] px-[15px] py-[20px]"
                  >
                    <img
                      src={`${BASE_URL}${data?.image?.url}`}
                      alt={`${data?.alternativeText}`}
                      className="h-[200px] object-contain"
                    />
                    <h3 className="text-[.875rem] text-[var(--c-gray-500)] pt-[12px]">
                      {data.category}
                    </h3>
                    <h4 className="font-semibold text-xl">{data.name}</h4>
                    <p className="text-[var(--c-gray-500)]">
                      By{" "}
                      <a href="#" className="text-[var(--c-green-400)]">
                        {data.brand}
                      </a>
                    </p>
                    <div className="flex items-center justify-between gap-[15px] pt-[15px] font-semibold text-[var(--c-green-500)]">
                      <b className="text-xl font-semibold">
                        ${data.final_price}
                      </b>
                      <button
                        onClick={
                          () => {}
                          // addItemToCart({
                          //   id: data.documentId,
                          //   name: data.name,
                          //   brand: data.brand,
                          //   price: data.final_price,
                          //   category: data.category,
                          // })
                        }
                        className="flex items-center justify-center gap-[5px] py-[12px] px-[20px] rounded-[4px] bg-[var(--c-green-100)] cursor-pointer"
                      >
                        <ShoppingCartIcon className="size-5" />
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      }
    </section>
  );
};

export default PopularProducts;
