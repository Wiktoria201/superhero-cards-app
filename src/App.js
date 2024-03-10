import { Outlet } from "react-router-dom";

import Search from "./components/Search/Search";
import { HeroesContextProvider } from "./components/Context/HeroesContext";
import Deck from "./components/Deck/Deck";

const App = () => {
  return (
    <HeroesContextProvider>
      <Deck />
      <Search />
      <Outlet />
    </HeroesContextProvider>
  );
};

export default App;
