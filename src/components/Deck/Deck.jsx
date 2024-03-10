import styles from "./Deck.module.css";
import { CgCardSpades } from "react-icons/cg";
import { CiSquareMinus } from "react-icons/ci";
import { useState, useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";

const Deck = () => {
  const { deck, removeHeroFromDeck, removeAllHeroesFromDeck } =
    useContext(HeroesContext);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className={styles.container}></div>
      <CgCardSpades className={styles.deckIcon} onClick={toggleVisibility} />
      {isVisible && (
        <div className={styles.heroList}>
          <p className={styles.deckHeading}>My Deck</p>
          {deck.map(
            (hero, index) =>
              index < 6 && (
                <div key={hero.id} className={styles.herolistContainer}>
                  <p className={styles.heroItem}>{hero.name}</p>
                  <CiSquareMinus
                    className={styles.deleteIcon}
                    onClick={() => removeHeroFromDeck(hero.id)}
                  />
                </div>
              )
          )}
          {deck.length >= 6 && (
            <p className={styles.errorMessage}>Your deck is ready!</p>
          )}

          {deck.length === 0 && (
            <p className={styles.errorMessage}>
              Your deck is currently empty. You can add a maximum of 6 cards to
              Your Deck.
            </p>
          )}

          {deck.length > 0 && (
            <button
              className={styles.clearBtn}
              onClick={removeAllHeroesFromDeck}
            >
              Delete All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Deck;
