import { createContext, useReducer } from "react";
import moviesReducer from "../../reducers/MoviesReducer/moviesReducer";

const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {

   const [moviesContext, dispatch] = useReducer(moviesReducer, []);
  
   return (
   <MoviesContext.Provider value={{moviesContext, dispatch}}>
        {children}
    </MoviesContext.Provider>);
};

export {MoviesContext, MoviesContextProvider }
