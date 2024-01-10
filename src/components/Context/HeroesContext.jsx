import { createContext, useEffect, useState } from "react";
import { fetchRandomHeroes } from "../../services/api";

export const HeroesContext = createContext([]);

export const HeroesContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchRandomHeroes(),
      fetchRandomHeroes(),
      fetchRandomHeroes(),
    ]).then((data) => setHeroes(data));
  }, []);

  const addHero = (hero) => {
    setHeroes((prevState) => [...prevState, hero]);
  };

  const removeHero = (id) => {
    const updatedHeroes = heroes.filter((hero) => hero.id !== id);
    setHeroes(updatedHeroes);
  };

  const removeallHeroes = () => {
    setHeroes([]);
  };

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        addHero,
        removeHero,
        removeallHeroes,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
