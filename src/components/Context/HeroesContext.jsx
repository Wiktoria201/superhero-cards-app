import styles from "./HeroesContext.module.css";
import { createContext, useEffect, useState } from "react";
import { fetchRandomHero } from "../../services/api";

export const HeroesContext = createContext([]);

export const HeroesContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    Promise.all([fetchRandomHero(), fetchRandomHero(), fetchRandomHero()]).then(
      (data) => {
        setHeroes(data);
        if (data.some((hero) => hero === null)) {
          setShowError(true);
        }
      }
    );
  }, []);

  const addHero = (hero) => {
    setHeroes((prevState) => [...prevState, hero]);
  };

  const removeHero = (id) => {
    const updatedHeroes = heroes.filter((hero) => hero.id !== id);
    setHeroes(updatedHeroes);
  };

  const removeAllHeroes = () => {
    setHeroes([]);
  };

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        addHero,
        removeHero,
        removeAllHeroes,
      }}
    >
      {showError ? (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h1 className={`${styles.heading} ${styles.gradient}`}>
              This is a Superhero Card Generator.
            </h1>
            <p className={styles.paragraph}>
              This app allows you to search, add, remove cards of your favorite
              superheroes. Create your perfect collection of cards with maximum
              powers and stats.
            </p>
            <button
              className={`${styles.btn} ${styles.gradient}`}
              onClick={() => window.location.reload()}
            >
              Get started
            </button>
          </div>
        </div>
      ) : (
        children
      )}
    </HeroesContext.Provider>
  );
};
