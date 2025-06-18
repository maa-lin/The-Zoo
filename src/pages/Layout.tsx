import { Outlet, useLocation } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { motion } from "framer-motion";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";

export const Layout = () => {

    const location = useLocation();

    return <>
        <ScrollToTop />
        <div className="hero-img"></div>
        <Header />
        <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ minHeight: "100vh" }}
      >
        <Outlet />
      </motion.main>
        <Footer />
    </>
}