import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
