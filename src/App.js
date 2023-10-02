import MoviesScreen from "./containers/screens/MoviesScreen/MoviesScreen";
import { MoviesContextProvider } from "./context/MoviesContext/MoviesContext";

function App() {
  return (
    <>
    <MoviesContextProvider>
      <MoviesScreen />
    </MoviesContextProvider>
    </>
  );
}

export default App;
