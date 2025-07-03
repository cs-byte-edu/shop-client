import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import apiClient from "../api/apiClient";

const API_NAVIGATION_URL = import.meta.env.VITE_API_HEADER_NAV_URL;

const Layout = () => {
  const [navigation, setNavigation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNavigation = async () => {
      try {
        apiClient.get(API_NAVIGATION_URL).then((response) => {
          setNavigation(response.data);
          // console.log(response);
        });
      } catch (err) {
        console.error("Error loading navigation:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadNavigation();
  }, []);

  if (error) return <p className="text-blue-500">ERROR</p>;
  if (loading) return <p className="text-blue-500">Loading...</p>;

  return (
    <div>
      <ScrollToTop />
      <Header navItems={navigation} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
