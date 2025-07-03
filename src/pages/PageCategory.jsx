import { memo, useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router";
import { useProducts } from "../state/product/productContext";
import { ProductCart } from "../components/ProductCart";
export const PageCategory = memo(() => {
  const { categoryId } = useParams();
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
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  useEffect(() => {
    if (categories.length > 0 && categoryId) {
      const category = categories.find(
        (cat) => cat.id === parseInt(categoryId)
      );
      setCurrentCategory(category);
      updateFilters({ category: categoryId });
    }
  }, [categories, categoryId, updateFilters]);

  useEffect(() => {
    if (categoryId) {
      const params = {
        category: categoryId,
        page: pagination.page,
        limit: pagination.limit,
        sortBy: filters.sortBy,
        ...(filters.search && { search: filters.search }),
        ...(filters.priceRange[0] > 0 && { minPrice: filters.priceRange[0] }),
        ...(filters.priceRange[1] < 1000 && {
          maxPrice: filters.priceRange[1],
        }),
      };
      loadProducts(params);
    }
  }, [categoryId, loadProducts, filters, pagination.page, pagination.limit]);

  const handleFilterChange = useCallback(
    (newFilters) => {
      updateFilters({ ...newFilters, page: 1 });
    },
    [updateFilters]
  );

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
      <div className="mb-6">
        <nav className="text-sm breadcrumbs mb-4">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/shop" className="text-gray-500 hover:text-gray-700">
            Shop
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">
            {currentCategory?.name || "Category"}
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">
          {currentCategory?.name || "Category"}
        </h1>
        {currentCategory?.description && (
          <p className="text-gray-600 mb-4">{currentCategory.description}</p>
        )}

        {/* Category Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search in category..."
              value={filters.search}
              onChange={(e) => handleFilterChange({ search: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="created_at">Newest First</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Products Grid */}
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>

          {/* Pagination */}
          {/* {pagination.totalPages > 1 && (
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={(page) => updateFilters({ page })}
            />
          )} */}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">
            No products found in this category
          </h3>
          <p className="text-gray-600">Check back later for new products</p>
        </div>
      )}
    </div>
  );
});

export default PageCategory;
