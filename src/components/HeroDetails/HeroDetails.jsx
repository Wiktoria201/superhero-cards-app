import styles from "./HeroDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";

const HeroDetails = () => {
  const { id } = useParams();
  const { heroes } = useContext(HeroesContext);
  const hero = heroes.find((hero) => hero.id === id);

  // redirect("/heroes-list");
  return (
    <div>
      <h1>{hero.name}</h1>
      <h1>Details for Hero {id}</h1>
      <Link to="/heroes-list">
        <button className={styles.btn}>Go Back</button>
      </Link>
    </div>
  );
};

export default HeroDetails;
