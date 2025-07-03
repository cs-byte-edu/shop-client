import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

export const LayoutTwoColumn = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="basis-3/4">
        <Outlet />
      </section>
    </div>
  );
};

export default LayoutTwoColumn;
