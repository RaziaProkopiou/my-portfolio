import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-0 relative overflow-auto opacity-95">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}