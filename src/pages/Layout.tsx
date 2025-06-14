import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Layout = () => {

    return <>
        <div className="hero-img"></div>
        <Header />
        <main>
             <Outlet />
        </main>
        <Footer />
    </>
}