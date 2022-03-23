import styles from "../styles/Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.title}>
        Web
        <span>Dev</span>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, natus.
      </p>
    </>
  );
}

export default Header;
