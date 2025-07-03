import { memo, useState, useEffect, useCallback } from "react";
import { useProducts } from "../state/product/productContext";
import ProductsGrid from "../components/ProductsGrid";
import { Select } from "radix-ui";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useParams, useSearchParams } from "react-router";

export const PageCatalog = memo(() => {
  // const [searchParams] = useSearchParams();
  // const categoryIdFromParams = searchParams.get("category");
  const { id: categoryId } = useParams();

  const {
    products,
    loading,
    error,
    loadProducts,
    categories,
    loadCategories,
    filters,
    updateFilters,
    pagination,
  } = useProducts();

  const [viewMode, setViewMode] = useState("grid");
  const [currentCategory, setCurrentCategory] = useState(null);

  console.log("categoryId ", categoryId);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentCategory(categoryId);
      updateFilters({ category: categoryId });
    } else {
      setCurrentCategory(null);
      updateFilters({ category: null });
    }
  }, [categoryId, categories, updateFilters]);

  // ...

  // export const PageCatalog = memo(() => {
  //   const {
  //     products,
  //     loading,
  //     error,
  //     loadProducts,
  //     categories,
  //     loadCategories,
  //     filters,
  //     updateFilters,
  //     pagination,
  //   } = useProducts();
  //   const [viewMode, setViewMode] = useState("grid");

  //   const { id: categoryId } = useParams();

  const productsGridClass =
    viewMode === "grid"
      ? "grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-[20px]"
      : "flex flex-col gap-[20px]";

  //   useEffect(() => {
  //     loadCategories();
  //   }, [loadCategories]);

  useEffect(() => {
    const query = new URLSearchParams();

    // Пагінація
    // query.set("pagination[page]", pagination.page.toString());
    // query.set("pagination[pageSize]", pagination.limit.toString());

    // Сортування
    if (filters.sort) {
      query.set("sort", filters.sort); // Напр., "price:asc" або "createdAt:desc"
    }

    // Фільтри
    if (filters.category) {
      query.set("filters[category_main][slug][$eq]", filters.category);
    }

    if (filters.search) {
      query.set("filters[name][$containsi]", filters.search);
    }

    // if (filters.priceRange[0] > 0) {
    //   query.set("filters[price][$gte]", filters.priceRange[0].toString());
    // }

    // if (filters.priceRange[1] < 1000) {
    //   query.set("filters[price][$lte]", filters.priceRange[1].toString());
    // }

    query.set("populate", "image");

    console.log("QUERY: ", query.toString());
    // Завантаження
    // loadProducts(`populate=*&filters[category_main][slug][$eq]=${categoryId}`);
    loadProducts(query);
  }, [loadProducts, filters, pagination.page, pagination.limit, categoryId]);

  // const handlePageChange = useCallback(
  //   (page) => {
  //     updateFilters({ page });
  //   },
  //   [updateFilters]
  // );

  const handleFilterChange = (newFilters) => {
    updateFilters({ ...newFilters, page: 1 });
  };

  if (loading && products.length === 0) {
    return (
      <div className="container mx-auto py-8">
        {/* <CatalogSkeleton /> */}
        LOADING...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      <div className="flex gap-[32px]">
        <Select.Root
          value={filters.sort}
          onValueChange={(value) => handleFilterChange({ sort: value })}
        >
          <Select.Trigger className="SelectTrigger" aria-label="Sort">
            <Select.Value placeholder="Sort By" />
            <Select.Icon className="SelectIcon">
              <ChevronDownIcon className="size-3.5" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className="SelectContent">
              <Select.ScrollUpButton className="SelectScrollButton">
                <ChevronUpIcon className="size-3.5" />
              </Select.ScrollUpButton>

              <Select.Viewport className="SelectViewport">
                <Select.Group>
                  <Select.Item value="final_price:asc">
                    <Select.ItemText>Price: Low to High</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="final_price:desc">
                    <Select.ItemText>Price: High to Low</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="createdAt:desc">
                    <Select.ItemText>Newest First</Select.ItemText>
                  </Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 ${
              viewMode === "grid"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 ${
              viewMode === "list"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* {products.length > 0 ? (
        <>

          
          {pagination.totalPages > 1 && (
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )} */}
      <ProductsGrid
        data={products.data}
        productsGridClass={productsGridClass}
      />
    </div>
  );
});

export default PageCatalog;
