import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <p>© {new Date().getFullYear()} Scott Coaching</p>
          <p className={styles.muted}>Payments handled via Stripe.</p>
        </div>
      </div>
    </footer>
  );
}