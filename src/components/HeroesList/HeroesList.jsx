import styles from "./HeroesList.module.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";

const HeroesList = () => {
  const { heroes, removeHero } = useContext(HeroesContext);

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
              onClick={() => window.location.reload()}
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
              />
              <button
                onClick={() => removeHero(hero.id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HeroesList;
