import { Outlet } from "react-router-dom";
import ScrollToTop from "@/util/scroll-to-top";

const Layout = () => (
  <>
    <ScrollToTop />
    <div className="font-lato">
      <Outlet />
    </div>
  </>
);

export default Layout;
