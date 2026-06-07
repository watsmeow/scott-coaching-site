import styles from "../styles/Pay.module.css";
import { billingLinks } from "../utilities/config";

function go(url) {
  if (!url) return;
  window.location.href = url;
}

export default function Pay() {
  const links = [
    {
      title: "Lifestyle Coaching - First Month",
      subtitle: "$275 one-time payment",
      text: "Use this for the first month of lifestyle coaching.",
      url: billingLinks.lifestyleFirstMonthOneTime,
    },
    {
      title: "Lifestyle Coaching - Single Month",
      subtitle: "$200 one-time payment",
      text: "Use this for a single month of lifestyle coaching.",
      url: billingLinks.lifestyleSingleMonthOneTime,
    },
    {
      title: "Lifestyle Coaching - Monthly Subscription",
      subtitle: "$200/month recurring",
      text: "Use this for automatic monthly lifestyle coaching billing.",
      url: billingLinks.lifestyleMonthlySubscription,
    },
    {
      title: "Lifestyle Coaching - 3 Months",
      subtitle: "$600 one-time payment",
      text: "Use this for three months of lifestyle coaching paid upfront.",
      url: billingLinks.lifestyleThreeMonthsOneTime,
    },
    {
      title: "Contest Prep - 2 Months Upfront",
      subtitle: "$500 one-time payment",
      text: "Use this for the required two-month contest prep upfront payment.",
      url: billingLinks.contestPrepTwoMonthsOneTime,
    },
    {
      title: "Contest Prep - Monthly Subscription",
      subtitle: "$250/month recurring",
      text: "Use this for automatic monthly contest prep billing.",
      url: billingLinks.contestPrepMonthlySubscription,
    },
    {
      title: "Contest Prep - Monthly Subscription 2",
      subtitle: "$250/month recurring",
      text: "Alternate monthly contest prep subscription link. Use only if Scott directed you to this option.",
      url: billingLinks.contestPrepMonthlySubscriptionOld,
    },
  ];

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
            Choose the payment option Scott directed you to use. If you are unsure,
            check with Scott before submitting payment.
          </p>

          <div className={styles.sectionLabel}>Pay for Services</div>

          <div className="grid3">
            {links.map((item) => (
              <div className={styles.payCard} key={item.title}>
                <div className={styles.payTitle}>{item.title}</div>
                <div className={styles.priceLine}>{item.subtitle}</div>
                <div className={styles.payText}>{item.text}</div>

                <button
                  className="btn btnPrimary"
                  style={{ width: "100%", marginTop: 12 }}
                  onClick={() => go(item.url)}
                  disabled={!item.url}
                  title={!item.url ? `Missing link for ${item.title}` : ""}
                >
                  PAY NOW
                </button>
              </div>
            ))}
          </div>

          <div className={styles.tip}>
            <strong>Note:</strong> payments are handled securely through Stripe.
            Use the option Scott specifically directed you to use.
          </div>
        </div>
      </section>
    </div>
  );
}