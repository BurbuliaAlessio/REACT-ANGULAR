import { Link } from "react-router-dom";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <Link to="/" className={styles.boxLogo}>
            <img src="/public/assets/logo.png" alt="logo image" />
          </Link>
          <div className={styles.navigation}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
