import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../images/costs_logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Safe Money" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/main">Safe Money</Link>
          </li>
          <li className={styles.item}>
            <Link to="/team">Equipe</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
