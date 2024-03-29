import styles from "./HeroesList.module.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../../utils/Loader/Loader";

const HeroesList = () => {
  const { heroes, removeHero, fetching, showError, addToDeck } =
    useContext(HeroesContext);

  if (fetching) {
    return <Loader />;
  }

  if (showError) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.newCardContainer}>
        {heroes.length === 0 ? (
          <div className={styles.container}>
            <p className={styles.text}>
              You removed all of your cards. You can still search for new cards
              or click on the button below to generate 3 random superheroes.
            </p>
            <button
              className={styles.btn}
              onClick={() =>
                (window.location.href =
                  "https://clever-haupia-0a999e.netlify.app")
              }
            >
              Generate
            </button>
          </div>
        ) : (
          heroes.map((hero) => (
            <div key={hero.id}>
              <Card
                id={hero.id}
                name={hero.name}
                powerstats={hero.powerstats}
                image={hero.image}
                hero={hero}
              />
              <div className={styles.btnContainer}>
                <button
                  onClick={() => removeHero(hero.id)}
                  className={styles.deleteBtn}
                >
                  Delete
                </button>
                <button
                  onClick={() => addToDeck(hero)}
                  className={styles.deleteBtn}
                >
                  Add to Deck
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HeroesList;
