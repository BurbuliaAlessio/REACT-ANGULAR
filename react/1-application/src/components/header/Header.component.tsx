import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Search from "../search/search.component";

type HeaderProps = {
  title: string;
  subtitle: string;
  background: string;
};

const Header = ({ title, subtitle, background }: HeaderProps) => {
  return (
    <>
      <header className={styles.headers}>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <Search />
        </div>
        <div>
          <img src={background} alt="background image about something" />
          <Link to="/about">More info</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
