import { RouterProvider } from "react-router";
import { router } from "./Router";
import { AnimalContext } from "./contexts/AnimalContext";
import { useEffect, useReducer } from "react";
import { AnimalReducer } from "./reducers/AnimalReducer";
import type { IAnimal } from "./models/IAnimal";

function App() {
  const animalsFromLocalStorage = () => {
    const foundData = localStorage.getItem("animals");

    if (foundData) {
      const parsedAnimals = JSON.parse(foundData) as IAnimal[];
      const now = Date.now();

      return parsedAnimals.map((p) => {
        const lastFed = new Date(p.lastFed).getTime();
        const isFed = now - lastFed < 2 * 60 * 1000;
        return { ...p, isFed };
      });
    }
    return [];
  };

  const [animals, dispatch] = useReducer(
    AnimalReducer,
    animalsFromLocalStorage()
  );

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  return (
    <>
      <AnimalContext.Provider value={{ animals, dispatch }}>
        <RouterProvider router={router} />
      </AnimalContext.Provider>
    </>
  );
}

export default App;
