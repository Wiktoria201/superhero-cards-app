// import styles from "./HeroDetails.module.css";
// import { Link, useParams } from "react-router-dom";
// import { useContext } from "react";
// import { HeroesContext } from "../Context/HeroesContext";

// const HeroDetails = () => {
//   const { id } = useParams();
//   const { heroes } = useContext(HeroesContext);
//   const hero = heroes.find((hero) => hero.id === id);

//   // redirect("/heroes-list");
//   return (
//     <div>
//       <h1>{hero.name}</h1>
//       <h1>Details for Hero {id}</h1>
//       <Link to="/heroes-list">
//         <button className={styles.btn}>Go Back</button>
//       </Link>
//     </div>
//   );
// };

// export default HeroDetails;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";
import styles from "./HeroDetails.module.css";

const HeroDetails = () => {
  const { id } = useParams();
  const { heroes } = useContext(HeroesContext);
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    return <div>Hero not found</div>;
  }

  const { name, biography, appearance, work, connections, image, powerstats } =
    hero;

  return (
    // <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.hero}>
        <img className={styles.image} src={image.url} alt={name} />
        <h1 className={styles.heroName}>{name}</h1>
      </div>
      <div className={styles.heroInfo}>
        <div>
          <h3>Biography:</h3>
          <p>Full Name: {biography.fullName}</p>
          <p>Alter Egos: {biography.alterEgos}</p>
        </div>

        <div>
          <h3>Appearance:</h3>
          <p>Gender: {appearance.gender}</p>
          <p>Eye Color: {appearance.eyeColor}</p>
        </div>

        <div>
          <h3>Work:</h3>
          <p>Occupation: {work.occupation}</p>
        </div>

        <div>
          <h3>Connections:</h3>
          <p>Relatives: {connections.relatives}</p>
        </div>

        <div className={styles.heroStats}>
          <p className={styles.statsNames}>
            Power:{" "}
            <span className={styles.statsNumbers}>{powerstats.power}</span>
          </p>
        </div>
        <Link to="/heroes-list">
          <button className={styles.btn}>Go Back</button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default HeroDetails;
