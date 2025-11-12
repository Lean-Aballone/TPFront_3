import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
  const location = useLocation();

  return (
    <div id="Layout-container">
      <Sidebar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname + location.search}
            initial={{ opacity: 0.7, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;