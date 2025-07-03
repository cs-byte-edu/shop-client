const BASE_URL = import.meta.env.VITE_API_URL;

export const ProductInfo = ({ product, className }) => {
  // console.log("product info: ", product);
  return (
    <div className={`${className}`}>
      <img
        src={`${BASE_URL}${product?.image?.url}`}
        alt={`${product?.alternativeText}`}
        className="h-[200px] object-contain"
      />

      <h3 className="capitalize text-[.875rem] text-[var(--c-gray-500)] pt-[12px]">
        {product?.category_main?.name}
      </h3>
      <h4 className="font-semibold text-xl">{product?.name}</h4>
      <p className="text-[var(--c-gray-500)]">
        By{" "}
        <a href="#" className="text-[var(--c-green-400)]">
          {product?.brand}
        </a>
      </p>
    </div>
  );
};
