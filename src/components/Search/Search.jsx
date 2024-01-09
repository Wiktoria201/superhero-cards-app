import { useState } from "react";
import styles from "./Search.module.css";
import { searchByName } from "../../services/api";
import Card from "../Card/Card";

let isDuplicate = false;

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [newHeroes, setNewHeroes] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await searchByName(userInput);
      const usersHero = data.results[0];

      if (usersHero) {
        isDuplicate = newHeroes.find((hero) => hero.id === usersHero.id);

        if (!isDuplicate) {
          setNewHeroes([...newHeroes, usersHero]);
        }
      }
    } catch (error) {
      console.log(error);
    }
    setUserInput("");
  };

  return (
    <div>
      <form className={styles.searchForm} onSubmit={handleFormSubmit}>
        <input
          className={styles.input}
          placeholder="character's name"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          name={userInput}
        ></input>
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
      {isDuplicate && (
        <p className={styles.duplicateError}>You already have this card.</p>
      )}
      <div className={styles.cardWrapper}>
        <div className={styles.newCardContainer}>
          {newHeroes.map((hero) => (
            <Card
              key={hero.id}
              id={hero.id}
              name={hero.name}
              powerstats={hero.powerstats}
              image={hero.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
