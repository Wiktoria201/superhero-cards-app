import { Outlet } from "react-router-dom";

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
// -no image
// -no stats
// -error message displaying after the first load

// After finish add env to gitignore
// #454545 as a background color for the hwole app, #39ff14 of neon
// - hero details
// - not displaying cards without an image or stats
// - add the deck functionality

// to fix:
// - same message after deleting and onthe 1st load

// animation after clicking on the card like heartstone
