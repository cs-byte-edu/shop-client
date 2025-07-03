export const Badge = ({ title, content, children }) => {
  return (
    <div className="flex items-center gap-[20px] font-normal cursor-pointer text-gray-400 hover:text-[var(--c-green-500)]">
      <div className="relative">
        {children}
        <div className="absolute top-[-10px] right-[-15px] w-[25px] h-[25px] flex items-center justify-center rounded-full bg-[var(--c-green-500)] text-white">
          {content}
        </div>
      </div>
      <span className="">{title}</span>
    </div>
  );
};
