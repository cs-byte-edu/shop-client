import { useEffect } from "react";
import { usePage } from "../state/page/pageContext";
import { PageBuilder } from "../components/PageBuilder";
import api from "../api/apiClient";

// const pageHomeUrl = import.meta.env.VITE_API_PAGE_HOME_URL;

const PageHome = () => {
  const { pageData, loadPageData } = usePage();

  useEffect(() => {
    loadPageData(() => api.get("api/page-home"));
  }, []);

  return (
    <div>
      {/* PageHome */}
      <PageBuilder pageData={pageData} />
    </div>
  );
};

export default PageHome;
