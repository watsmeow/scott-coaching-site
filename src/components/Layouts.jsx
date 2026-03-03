import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import styles from "../styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.shell}>
      <Nav />
      <main className="container" style={{ paddingTop: 18, paddingBottom: 50 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}