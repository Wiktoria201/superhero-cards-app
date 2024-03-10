import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";
import styles from "./HeroDetails.module.css";
import { getTotalPower } from "../../utils/getTotalPower";
import Card from "../Card/Card";

const HeroDetails = () => {
  const { id } = useParams();
  const { heroes, addToDeck } = useContext(HeroesContext);
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    return <p className={styles.errorMessage}>Hero not found</p>;
  }

  const { name, biography, appearance, work, connections, image, powerstats } =
    hero;
  const totalPower = getTotalPower(powerstats);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Card id={hero.id} name={name} image={image} powerstats={powerstats} />
        <div className={styles.heroInfo}>
          <div className={styles.infoContainer}>
            <div>
              <p className={styles.miniHeading}>Biography:</p>
              <div className={styles.details}>
                <p>Full Name:</p>
                <p className={styles.text}>{biography["full-name"]}</p>
              </div>

              <div className={styles.details}>
                <p>Alter Egos:</p>
                <p className={styles.text}>{biography["alter-egos"]}</p>
              </div>
            </div>

            <div>
              <div>
                <p className={styles.miniHeading}>Appearance:</p>
              </div>
              <div className={styles.details}>
                <p>Gender:</p>
                <p className={styles.text}>{appearance.gender}</p>
              </div>
              <div className={styles.details}>
                <p>Seen:</p>
                <p className={styles.text}>{biography["first-appearance"]}</p>
              </div>
            </div>

            <div>
              <p className={styles.miniHeading}>Work:</p>
              <div className={styles.details}>
                <p>Occupation:</p>
                <p className={styles.text}>{work.occupation}</p>
              </div>
            </div>

            <div>
              <p className={styles.miniHeading}>Connections:</p>
              <div className={styles.details}>
                <p>Relatives:</p>
                <p className={styles.text}>{connections.relatives}</p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.details}>
              <p className={styles.miniHeading}>Total Power:</p>
              <p className={styles.miniHeading}>{totalPower}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link to="/heroes-list">
          <button className={styles.btn}>Go Back</button>
        </Link>
        <button className={styles.btn} onClick={() => addToDeck(hero)}>
          Add to Deck
        </button>
      </div>
    </div>
  );
};

export default HeroDetails;
