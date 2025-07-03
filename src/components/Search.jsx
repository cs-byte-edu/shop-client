import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Search = ({ onChange }) => {
  return (
    <form className="flex items-center p-[3px] rounded-[4px] border-[2px] border-[var(--c-green-200)] shadow-brand-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-[260px] h-[45px] pr-[15px] pl-[15px]"
        onChange={onChange}
      />
      <button className="flex items-center justify-center w-[45px] h-[45px] rounded-[4px] bg-[var(--c-green-500)] cursor-pointer">
        <MagnifyingGlassIcon className="size-5 text-white" />
      </button>
    </form>
  );
};
