import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <div id="Layout-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
