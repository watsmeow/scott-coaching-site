import { NavLink } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMain}>SCOTT</span>
          <span className={styles.brandAccent}>COACHING</span>
          <span className={styles.brandTag}>strength • physique • accountability</span>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>
            ABOUT
          </NavLink>
          <NavLink to="/pay" className={({ isActive }) => isActive ? styles.active : styles.link}>
            PAY
          </NavLink>
        </nav>
      </div>
    </header>
  );
}