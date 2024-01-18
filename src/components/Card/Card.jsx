import { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const placeholderImage = "../../images/Placeholder.png";
const Card = ({ id, name, image, powerstats }) => {
  const [imageSrc, setImageSrc] = useState(image?.url || placeholderImage);

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
            <span className={styles.statsNumbers}>
              {powerstats && powerstats.power}
            </span>
          </p>
          <p className={styles.statsNames}>
            Speed:
            <span className={styles.statsNumbers}>
              {powerstats && powerstats.speed}
            </span>
          </p>
          <p className={styles.statsNames}>
            Strength:
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
