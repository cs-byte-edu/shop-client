import { useMemo, memo, lazy, Suspense } from "react";
import { Skeleton } from "../components/Skeleton";
import { ErrorBoundary } from "./ErrorBoundary";

// import { useApp} from '../context/AppContext';
// import { useApi } from "../hooks/useApi";
// import { HeroBlock } from "./blocks/HeroBlock";
// import { TextBlock } from "./blocks/TextBlock";
// import { GalleryBlock } from "./blocks/GalleryBlock";
// import { ProductsBlock } from "./blocks/ProductsBlock";
// import { CategoriesBlock } from "./blocks/CategoriesBlock";
// import { ContactBlock } from "./blocks/ContactBlock";
// import { LoadingSpinner } from "./LoadingSpinner";
// import { ErrorMessage } from "./ErrorMessage";
// import { useEffect } from "react";
// import { FeaturedProducts } from "./FeaturedProducts";
// import { ProductsGrid } from "./ProductsGrid";
// import { Benefits } from "./Benefits";
// import { PopularProducts } from "./PopularProducts";

// Мапа компонентів для різних типів блоків
// const blockMap = {
// benefits: Benefits,
// featured_products: FeaturedProducts,
// new_products: ProductsGrid,
// deals: ProductsGrid,
// products_popular: PopularProducts,
// "page.hero": HeroBlock,
// "gallery.grid": GalleryBlock,
// "categories.grid": CategoriesBlock,
// "contact.info": ContactBlock,
// };

const BLOCK_COMPONENTS = {
  benefits: lazy(() => import("./Benefits")),
  featured_products: lazy(() => import("./FeaturedProducts")),
  deals: lazy(() => import("./ProductsGrid")),
  products_popular: lazy(() => import("./PopularProducts")),
  // products_popular: lazy(() => import("./blocks/PopularProducts")),
  // hero: lazy(() => import("./blocks/HeroBlock")),
  // gallery: lazy(() => import("./blocks/GalleryBlock")),
  // categories: lazy(() => import("./blocks/CategoriesBlock")),
  // contact: lazy(() => import("./blocks/ContactBlock")),
};

export const PageBuilder = memo(({ pageData = {} }) => {
  const page = pageData ?? {};
  const blocks = useMemo(() => {
    return Object?.entries(page)
      .map(([blockType, blockData], index) => {
        const Component = BLOCK_COMPONENTS[blockType];

        if (!Component) {
          console.warn(`Block component "${blockType}" not found`);
          return null;
        }

        return (
          <Suspense key={`${blockType}-${index}`} fallback={<Skeleton />}>
            <Component data={blockData} />
          </Suspense>
        );
      })
      .filter(Boolean);
  }, [pageData]);

  if (!pageData || Object.keys(pageData).length === 0) {
    return <div className="text-center py-8">No content available</div>;
  }

  return (
    <div className="page-builder">
      <ErrorBoundary>{blocks}</ErrorBoundary>
    </div>
  );
});
