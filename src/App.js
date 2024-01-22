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
