export const Qty = ({ qty = 0, onIncreaseQty, onDecreaseQty }) => {
  return (
    <div className="flex items-center gap-[8px]">
      <button
        className="bg-[var(--c-green-100)] text-green-600 py-[5px] px-[12px] rounded-[3px] cursor-pointer"
        onClick={onDecreaseQty}
      >
        -
      </button>
      {qty}
      <button
        className="bg-[var(--c-green-100)] text-green-600 py-[5px] px-[12px] rounded-[3px] cursor-pointer"
        onClick={onIncreaseQty}
      >
        +
      </button>
    </div>
  );
};
