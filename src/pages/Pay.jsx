import styles from "../styles/Pay.module.css";

function go(url) {
  if (!url) return;
  window.location.href = url;
}

export default function Pay() {
  const coaching = import.meta.env.VITE_STRIPE_COACHING_LINK;
  const consult = import.meta.env.VITE_STRIPE_CONSULT_LINK;
  const custom = import.meta.env.VITE_STRIPE_CUSTOM_LINK;

  return (
    <div className={styles.stack}>
      <div className={styles.badges}>
        <span className="badge">Secure</span>
        <span className="badge">Stripe checkout</span>
        <span className="badge">Receipts included</span>
      </div>

      <section className="card">
        <div className="cardHeader">
          <div>
            <div className="kicker">Stripe</div>
            <h1 className="title">Payments</h1>
          </div>
          <div className={styles.note}>You’ll be redirected to Stripe</div>
        </div>

        <div className="cardBody">
          <p className={styles.lead}>
            Pick what you’re paying for. Stripe handles confirmation + receipt.
          </p>

          <div className="grid3">
            <div className={styles.payCard}>
              <div className={styles.payTitle}>Coaching</div>
              <div className={styles.payText}>Monthly coaching or agreed invoice.</div>
              <button
                className="btn btnPrimary"
                style={{ width: "100%", marginTop: 12 }}
                onClick={() => go(coaching)}
                disabled={!coaching}
                title={!coaching ? "Missing VITE_STRIPE_COACHING_LINK in .env" : ""}
              >
                PAY COACHING
              </button>
            </div>

            <div className={styles.payCard}>
              <div className={styles.payTitle}>Consult</div>
              <div className={styles.payText}>One-off consult or program review.</div>
              <button
                className="btn btnPrimary"
                style={{ width: "100%", marginTop: 12 }}
                onClick={() => go(consult)}
                disabled={!consult}
                title={!consult ? "Missing VITE_STRIPE_CONSULT_LINK in .env" : ""}
              >
                PAY CONSULT
              </button>
            </div>

            <div className={styles.payCard}>
              <div className={styles.payTitle}>Custom</div>
              <div className={styles.payText}>Anything else you agreed on.</div>
              <button
                className="btn"
                style={{ width: "100%", marginTop: 12 }}
                onClick={() => go(custom)}
                disabled={!custom}
                title={!custom ? "Missing VITE_STRIPE_CUSTOM_LINK in .env" : ""}
              >
                CUSTOM PAYMENT
              </button>
            </div>
          </div>

          <div className={styles.tip}>
            <strong>Reminders:</strong> use Stripe Invoicing or Subscriptions to automate payment
            reminders. Keep the site simple, let Stripe do the nagging.
          </div>
        </div>
      </section>
    </div>
  );
}