import { Outlet } from "react-router";
import { AnimalContext } from "../contexts/AnimalContext";
import { useReducer } from "react";
import { AnimalReducer } from "../reducers/AnimalReducer";

export const Layout = () => {

    const [animals, dispatch] = useReducer(AnimalReducer, []);

    return <>
        <main>
            <AnimalContext.Provider value={{animals, dispatch}}>
                <Outlet />
            </AnimalContext.Provider>
        </main>
    </>
}