import styles from "../styles/Pay.module.css";
import { billingLinks } from "../utilities/config";

function go(url) {
  if (!url) return;
  window.location.href = url;
}

export default function Pay() {
  const {
    standard,
    prep,
    inDepth,
    custom,
    portal,
  } = billingLinks;

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
            <h1 className="title">Payments & Billing</h1>
          </div>
          <div className={styles.note}>You’ll be redirected to Stripe</div>
        </div>

        <div className="cardBody">
          <p className={styles.lead}>
            Use the options below to pay for services or manage your existing billing.
            All payments and billing details are handled securely through Stripe.
          </p>

          <div className={styles.sectionLabel}>Pay for Services</div>

          <div className="grid3">
            <div className={styles.payCard}>
              <div className={styles.payTitle}>Standard Coaching</div>
              <div className={styles.payText}>
                Ongoing coaching with weekly check-ins, plan adjustments, and support.
              </div>
              <button
                className="btn btnPrimary"
                style={{ width: "100%", marginTop: 12 }}
                onClick={() => go(standard)}
                disabled={!standard}
                title={!standard ? "Missing VITE_STRIPE_STANDARD_LINK" : ""}
              >
                PAY STANDARD COACHING
              </button>
            </div>

            <div className={styles.payCard}>
              <div className={styles.payTitle}>Contest Prep</div>
              <div className={styles.payText}>
                Prep coaching with more frequent check-ins as show day approaches.
              </div>
              <button
                className="btn btnPrimary"
                style={{ width: "100%", marginTop: 12 }}
                onClick={() => go(prep)}
                disabled={!prep}
                title={!prep ? "Missing VITE_STRIPE_PREP_LINK" : ""}
              >
                PAY CONTEST PREP
              </button>
            </div>

            <div className={styles.payCard}>
              <div className={styles.payTitle}>In-Depth Training</div>
              <div className={styles.payText}>
                Advanced training analysis, exercise selection, technique review, and video feedback.
              </div>
              <button
                className="btn btnPrimary"
                style={{ width: "100%", marginTop: 12 }}
                onClick={() => go(inDepth)}
                disabled={!inDepth}
                title={!inDepth ? "Missing VITE_STRIPE_IN_DEPTH_LINK" : ""}
              >
                PAY IN-DEPTH TRAINING
              </button>
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <div className={styles.payCard}>
              <div className={styles.payTitle}>Custom Payment</div>
              <div className={styles.payText}>
                Use this only if Scott has told you to make a custom payment.
              </div>
              <button
                className="btn"
                style={{ width: "100%", marginTop: 12 }}
                onClick={() => go(custom)}
                disabled={!custom}
                title={!custom ? "Missing VITE_STRIPE_CUSTOM_LINK" : ""}
              >
                MAKE CUSTOM PAYMENT
              </button>
            </div>
          </div>

          <div className={styles.sectionLabel} style={{ marginTop: 20 }}>
            Manage Billing
          </div>

          <div className={styles.portalCard}>
            <div>
              <div className={styles.payTitle}>Existing Client Billing</div>
              <div className={styles.payText}>
                Update payment methods, review invoices, and manage active billing through Stripe.
              </div>
            </div>

            <button
              className="btn"
              style={{ marginTop: 12 }}
              onClick={() => go(portal)}
              disabled={!portal}
              title={!portal ? "Missing VITE_STRIPE_CLIENT_PORTAL_LINK" : ""}
            >
              MANAGE BILLING
            </button>
          </div>

          <div className={styles.tip}>
            <strong>Note:</strong> recurring billing, invoice emails, reminders, and self-service billing
            management are configured in Stripe. The website stays simple and sends you to the right Stripe page.
          </div>
        </div>
      </section>
    </div>
  );
}