import { useState, useEffect } from "react";
import { fetchRandomHeroes } from "../../services/api";
import Card from "../Card/Card";
import styles from "./RandomHeroes.module.css";

const RandomHeroes = ({ selectedHero }) => {
  const [randomHeroes, setRandomHeroes] = useState([]);

  const loadHeroes = () => {
    Promise.all([
      fetchRandomHeroes(),
      fetchRandomHeroes(),
      fetchRandomHeroes(),
    ]).then((data) => setRandomHeroes(data));
  };

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <div>
      {/* <h1>Three Random Superheroes</h1> */}
      {/* <button onClick={loadHeroes}>Generate</button> */}
      <div className={styles.cardsContainer}>
        {!selectedHero &&
          randomHeroes.map((hero) => (
            <Card
              key={hero.id}
              name={hero.name}
              powerstats={hero.powerstats}
              image={hero.image}
            />
          ))}
      </div>
    </div>
  );
};

export default RandomHeroes;
