import { Link } from "react-router";

export const ButtonAction = ({ url, onClick, children }) => {
  return (
    <Link
      to={url}
      onClick={onClick}
      className="bg-white py-[8px] px-[12px] border border-[var(--c-green-500)] rounded-[3px]"
    >
      {children}
    </Link>
  );
};
