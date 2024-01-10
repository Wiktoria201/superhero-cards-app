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
// - if the user deletes all the cards display a message with a button / generate 3 new or search
// - add the deck functionality

// animation after clicking on the card like heartstone
