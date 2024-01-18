import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>This is a Superhero Card Generator.</h1>
        <p className={styles.paragraph}>
          This app allows you to search, add, remove cards of your favorite
          superheroes. Create your perfect collection of cards with maximum
          powers and stats.
        </p>
        <button className={styles.btn} onClick={() => window.location.reload()}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
