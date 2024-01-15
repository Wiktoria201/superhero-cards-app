import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, powerstats }) => {
  return (
    <Link to={`/heroes/${id}`} className={styles.linkStyle}>
      <div className={styles.card}>
        {image && (
          <img className={styles.heroImage} src={image.url} alt={name} />
        )}
        <h2 className={styles.heroName}>{name}</h2>
        <div className={styles.heroStats}>
          <p className={styles.statsNames}>
            Power:{" "}
            <span className={styles.statsNumbers}>
              {powerstats && powerstats.power}
            </span>
          </p>
          <p className={styles.statsNames}>
            Speed:{" "}
            <span className={styles.statsNumbers}>
              {powerstats && powerstats.speed}
            </span>
          </p>
          <p className={styles.statsNames}>
            Strength:{" "}
            <span className={styles.statsNumbers}>
              {powerstats && powerstats.strength}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
