import { createContext, useEffect, useState } from "react";
import { fetchRandomHero } from "../../services/api";

export const HeroesContext = createContext([]);

export const HeroesContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [showError, setShowError] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    Promise.all([fetchRandomHero(), fetchRandomHero(), fetchRandomHero()])
      .then((data) => {
        setHeroes(data);
        if (data.some((hero) => hero === null)) {
          setShowError(true);
        }
      })
      .catch(() => {
        setShowError(true);
      })
      .finally(() => {
        setFetching(false);
      });
  }, []);

  const addHero = (hero) => {
    setHeroes((prevState) => [...prevState, hero]);
  };

  const removeHero = (id) => {
    const updatedHeroes = heroes.filter((hero) => hero.id !== id);
    setHeroes(updatedHeroes);
  };

  const removeHeroFromDeck = (id) => {
    const updatedDeck = deck.filter((hero) => hero.id !== id);
    setDeck(updatedDeck);
  };

  const removeAllHeroesFromDeck = () => {
    setDeck([]);
  };

  const removeAllHeroes = () => {
    setHeroes([]);
  };

  const addToDeck = (hero) => {
    if (!deck.some((deckHero) => deckHero.id === hero.id)) {
      setDeck((prevState) => [...prevState, hero]);
    }
  };

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        fetching,
        showError,
        deck,
        addHero,
        removeHero,
        removeAllHeroes,
        addToDeck,
        removeHeroFromDeck,
        removeAllHeroesFromDeck,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
