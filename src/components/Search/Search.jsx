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
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setShowError(false);
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
      setShowError(true);
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
      {isDuplicate ? (
        <p className={styles.errorMessage}>You already have this card.</p>
      ) : null}
      {showError ? (
        <p className={styles.errorMessage}>
          We can't find the hero you were looking for. Please try again or enter
          a new hero.
        </p>
      ) : null}
    </div>
  );
};

export default Search;
