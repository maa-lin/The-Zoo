import { useLoaderData } from "react-router";
import { AnimalPresentation } from "../components/AnimalPresentation/AnimalPresentation";
import { useContext, useEffect } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import type { IAnimal } from "../models/IAnimal";

type AnimalList = {
  animalList: IAnimal[];
}

export const Animals = () => {

    const { animalList } = useLoaderData() as AnimalList;
    const { dispatch } = useContext(AnimalContext);

    useEffect( () => {
        dispatch({
            type: "SET_ANIMALS",
            payload: JSON.stringify(animalList)
        });
    }, [dispatch, animalList]
    );

    return <>
        <AnimalPresentation />
    </>
}