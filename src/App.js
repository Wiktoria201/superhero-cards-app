import { Outlet } from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";
import { HeroesContextProvider } from "./components/Context/HeroesContext";

const App = () => {
  return (
    <HeroesContextProvider>
      <Search />
      <Outlet />
    </HeroesContextProvider>
  );
};

export default App;

// to do:
// - not displaying cards without an image or stats
// - add the deck functionality

// to fix:
// - same message after deleting and onthe 1st load

// animation after clicking on the card like heartstone
