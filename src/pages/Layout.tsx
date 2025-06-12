import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {

    return <>
        <main>
             <Outlet />
        </main>
        <Footer />
    </>
}