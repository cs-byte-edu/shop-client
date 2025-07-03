const ProductGrid = ({ data, renderContent }) => {
  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-[20px]">
      {renderContent(data)}
    </div>
  );
};

export default ProductGrid;
