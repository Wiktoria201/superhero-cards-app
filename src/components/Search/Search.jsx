import { useState } from "react";
import styles from "./Search.module.css";
import { searchByName } from "../../services/api";
import { redirect } from "react-router-dom";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";

let isDuplicate = false;

const Search = () => {
  const { heroes, addHero } = useContext(HeroesContext);
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await searchByName(userInput);
      const usersHero = data.results[0];

      if (usersHero) {
        isDuplicate = heroes.find((hero) => hero.id === usersHero.id);

        if (!isDuplicate) {
          addHero(usersHero);
          redirect("/heroses-list");
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
    </div>
  );
};

export default Search;
