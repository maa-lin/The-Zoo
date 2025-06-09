import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/animals",
            element: <Animals />
        },
        {
            path: "/animals/:id",
            element: <Animal />
        }
    ]
}]);