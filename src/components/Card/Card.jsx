import { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const placeholderImage = "/images/Placeholder.png";
const Card = ({ id, name, image, powerstats }) => {
  const [imageSrc, setImageSrc] = useState(image?.url || placeholderImage);
  const power =
    powerstats?.power && powerstats.power !== "null" ? powerstats.power : "-";
  const speed =
    powerstats?.speed && powerstats.speed !== "null" ? powerstats.speed : "-";
  const strength =
    powerstats?.strength && powerstats.strength !== "null"
      ? powerstats.strength
      : "-";

  return (
    <Link to={`/heroes/${id}`} className={styles.linkStyle}>
      <div className={styles.card}>
        {image && (
          <img
            className={styles.heroImage}
            src={imageSrc}
            alt={name}
            onError={() => {
              setImageSrc(placeholderImage);
            }}
          />
        )}
        <h2 className={styles.heroName}>{name}</h2>
        <div className={styles.heroStats}>
          <p className={styles.statsNames}>
            Power:
            <span className={styles.statsNumbers}>{power}</span>
          </p>
          <p className={styles.statsNames}>
            Speed:
            <span className={styles.statsNumbers}>{speed}</span>
          </p>
          <p className={styles.statsNames}>
            Strength:
            <span className={styles.statsNumbers}>{strength}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
