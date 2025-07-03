import { ProductInfo } from "../components/ProductInfo";
import { useEffect } from "react";
import { useUserInteraction } from "../state/userInteraction/userInteractionContext";

const PageCompare = () => {
  const { compareItems } = useUserInteraction();
  const sortedByCategory = compareItems.reduce(
    (acc, curr) =>
      acc[curr?.category_main?.name]
        ? (acc[curr?.category_main?.name].push(curr), acc)
        : ((acc[curr?.category_main?.name] = []),
          acc[curr?.category_main?.name].push(curr),
          acc),
    {}
  );
  useEffect(() => {
    console.log("sorted: ", sortedByCategory);
  });
  return (
    <section className="lg:pt-[60px] lg:pb-[60px] container">
      {/* PageCompare */}

      {Object.entries(sortedByCategory).map((item, idx) => {
        const [category, products] = item;
        return (
          <div key={idx} className="border-green-500 border-b pb-[30px]">
            <h3 className="py-[30px] uppercase text-center text-green-500 text-xl font-semibold">
              {category}
            </h3>
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">
              {products.map((product) => (
                <ProductInfo product={product} key={product.documentId} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PageCompare;
