import { useProducts } from "../state/product/productContext";
import { categoriesBuilder } from "../utils/categories-builder";
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
// import { useEffect } from "react";

/*         <select
            value={filters.category || ""}
            onChange={(e) =>
              handleFilterChange({ category: e.target.value || null })
            }
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select> */

export const Sidebar = () => {
  const { categories, updateFilters, loadProducts, filters, pagination } =
    useProducts();

  const categoriesTree = categoriesBuilder(categories);

  const renderCategoriesAccordion = (accordionItems) => {
    return (
      <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {accordionItems.map((item, idx) => (
          <Accordion.Item
            className="AccordionItem"
            value={`value-${idx}`}
            key={item.documentId}
          >
            {item.children.length > 0 ? (
              <>
                <Accordion.Trigger className="AccordionTrigger">
                  {item.name}
                  <ChevronDownIcon className="AccordionChevron" aria-hidden />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent">
                  {/* {item.children[0].name} */}
                  {renderCategoriesAccordion(item.children)}
                </Accordion.Content>
              </>
            ) : (
              <Accordion.Trigger className="AccordionTrigger">
                <Link
                  to={`catalog/${item.slug}`}
                  onClick={() => {
                    console.log("IIITEM: ", item);
                    updateFilters({ category: item.slug });
                  }}
                >
                  {item.name}
                </Link>
              </Accordion.Trigger>
            )}
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  };

  // useEffect(() => {
  //   const query = new URLSearchParams();

  //   // Пагінація
  //   // query.set("pagination[page]", pagination.page.toString());
  //   // query.set("pagination[pageSize]", pagination.limit.toString());
  //   query.set("populate", "*");
  //   // Сортування
  //   // if (filters.sort) {
  //   //   query.set("sort", filters.sort); // Напр., "price:asc" або "createdAt:desc"
  //   // }

  //   // Фільтри
  //   if (filters.category) {
  //     query.set("filters[category_main][slug][$eq]", filters.category);
  //     // http://localhost:1337/api/products?populate=*&filters[category_main][slug][$eq]=whey_protein
  //   }

  //   // if (filters.search) {
  //   //   query.set("filters[name][$containsi]", filters.search); // або інше поле для пошуку
  //   // }

  //   // if (filters.priceRange[0] > 0) {
  //   //   query.set("filters[price][$gte]", filters.priceRange[0].toString());
  //   // }

  //   // if (filters.priceRange[1] < 1000) {
  //   //   query.set("filters[price][$lte]", filters.priceRange[1].toString());
  //   // }

  //   // Завантаження
  //   loadProducts(query.toString());
  // }, [loadProducts, filters]);

  return (
    <aside className="basis-1/4 shrink-0 pl-[16px]">
      <div className="mb-6">
        {/* Filters and Controls */}
        <div className="flex flex-col gap-4 mb-6">
          {/* <input
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          /> */}

          {/* <select
            value={filters.category || ""}
            onChange={(e) =>
              handleFilterChange({ category: e.target.value || null })
            }
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select> */}
        </div>
        {renderCategoriesAccordion(categoriesTree)}
      </div>
    </aside>
  );
};
