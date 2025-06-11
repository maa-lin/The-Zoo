import { RouterProvider } from "react-router";
import { router } from "./Router";
import { AnimalContext } from "./contexts/AnimalContext";
import { useReducer } from "react";
import { AnimalReducer } from "./reducers/AnimalReducer";

function App() {
  const [animals, dispatch] = useReducer(AnimalReducer, []);
  
  return <>
    <AnimalContext.Provider value={{animals, dispatch}}>
      <RouterProvider router={router} />
    </AnimalContext.Provider>
  </>;
}

export default App;
