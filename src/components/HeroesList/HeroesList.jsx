import styles from "./HeroesList.module.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";

const HeroesList = () => {
  const { heroes, removeHero } = useContext(HeroesContext);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.newCardContainer}>
        {heroes.map((hero) => (
          <div>
            <Card
              key={hero.id}
              id={hero.id}
              name={hero.name}
              powerstats={hero.powerstats}
              image={hero.image}
            />
            <button onClick={() => removeHero(hero.id)}>Usuń</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroesList;
