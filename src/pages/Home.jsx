import styles from "../styles/Home.module.css";

function Service({ title, summary, children }) {
  return (
    <details className={styles.service}>
      <summary className={styles.serviceSummary}>
        <div>
          <div className={styles.serviceTitle}>{title}</div>
          <div className={styles.serviceDesc}>{summary}</div>
        </div>
        <span className={styles.chev} aria-hidden="true">▾</span>
      </summary>
      <div className={styles.serviceBody}>{children}</div>
    </details>
  );
}

export default function Home() {
  return (
    <div className={styles.stack}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.badges}>
            <span className="badge">Online coaching</span>
            <span className="badge">No fluff</span>
            <span className="badge">Structure + accountability</span>
          </div>

          <h1 className={styles.h1}>
            BUILD A PHYSIQUE <span className={styles.yellow}>YOU TRUST</span>
          </h1>

          <p className={styles.p}>
            Coaching built around your goals, your lifestyle, and what you can realistically execute.
            You’ll get clear direction, fast feedback, and a plan you actually stick to.
          </p>

          <div className={styles.actions}>
            <a className="btn btnPrimary" href="/pay">MAKE A PAYMENT</a>
            <a className="btn" href="mailto:mcnallydiets@gmail.com">CONTACT</a>
          </div>

          <div className={styles.cards}>
            {[
              ["Plan", "We build a plan that fits your goals and logistics."],
              ["Check-ins", "Weekly minimum. More often when your body needs it."],
              ["Adjustments", "Training + nutrition refined based on real feedback."],
            ].map(([t, d]) => (
              <div key={t} className={styles.miniCard}>
                <div className={styles.miniTitle}>{t}</div>
                <div className={styles.miniText}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="card">
        <div className="cardHeader">
          <div>
            <div className="kicker">Coach</div>
            <h2 className="title">About</h2>
          </div>
        </div>

        <div className="cardBody">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                I coach through a partnership approach. I’ll write the plan, but the plan has to be something
                you can execute and agree with. You may not love every part of a diet plan, but I’m not here
                to force you to eat foods you hate or follow a routine you’ll quit in a week.
              </p>

              <p>
                Check-ins are primarily through email. You’ll send your weight, new photos, and how things are going.
                I’ll respond the same day with adjustments and answers to your questions.
                For quick questions between check-ins, I prefer WhatsApp.
              </p>

              <div className={styles.aboutPoints}>
                <div className={styles.point}>
                  <div className={styles.pointTitle}>Communication</div>
                  <div className={styles.pointText}>Email check-ins + WhatsApp for quick questions.</div>
                </div>
                <div className={styles.point}>
                  <div className={styles.pointTitle}>Feedback speed</div>
                  <div className={styles.pointText}>Same-day responses after check-ins.</div>
                </div>
                <div className={styles.point}>
                  <div className={styles.pointTitle}>Personalization</div>
                  <div className={styles.pointText}>Built around your preferences and logistics.</div>
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarTitle}>Get started</div>
              <p className={styles.sidebarText}>
                Email to talk goals, timeline, and what service fits you best.
              </p>
              <a className={styles.email} href="mailto:mcnallydiets@gmail.com">
                mcnallydiets@gmail.com
              </a>

              <div className={styles.sidebarDivider} />

              <div className={styles.smallNote}>
                <strong>Check-ins:</strong> weekly minimum. More frequent when needed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="card">
        <div className="cardHeader">
          <div>
            <div className="kicker">Services</div>
            <h2 className="title">Coaching Options</h2>
          </div>
          <div className={styles.noteRight}>Tap to expand details</div>
        </div>

        <div className="cardBody">
          <div className={styles.servicesGrid}>
            <Service
              title="Standard Coaching"
              summary="Diet plan + check-ins (weekly minimum) + basic training adjustments."
            >
              <p>
                We build a plan to move you toward your goals, taking into account your experience and logistics
                (work, schedule, preferences). I say “we” because I want this to be a partnership.
                I’m writing the plan, but I want it to be something you approve of.
              </p>
              <p>
                Once we’ve gone over the plan and you are ready to start, we decide how many days you’ll follow the plan
                before checking back in. This varies per situation, but we check in no less often than weekly.
                Sometimes we check in more frequently depending on what your body needs.
              </p>
              <p>
                Check-ins are through email: you’ll send new weight, new photos, and how things are going.
                I will get back to you the same day with adjustments and answers.
                You can reach out between check-ins any time you need. For quick questions I like WhatsApp.
              </p>
              <p>
                This program also includes basic training insights and adjustments. If you’re willing to send video
                of specific exercises, that helps me make smarter adjustments. Training should still be something you enjoy,
                so we factor in your preferences and training style.
              </p>
            </Service>

            <Service
              title="Supplementation"
              summary="Individualized health + performance supplement suggestions."
            >
              <p>
                In each diet plan, I include individualized suggestions for health and performance supplements,
                including over-the-counter and otherwise.
              </p>
            </Service>

            <Service
              title="Diet for Contest Prep"
              summary="Prep dieting with increasingly frequent check-ins as the show approaches."
            >
              <p>
                Prep is the same structure as Standard Coaching, but as we progress check-ins become more frequent.
                Eventually we shift to faster communication through text. By the end, we’re talking daily.
              </p>
            </Service>

            <Service
              title="In-Depth Training"
              summary="Advanced athletes only. Learn how to build your own training long-term."
            >
              <p>
                Standard programs include adjustments to your split as needed. In-Depth Training is different:
                the goal is not just to hand you a plan, but to teach you how to build your own training and get more out of every exercise.
                I don’t want you to depend on me long-term. I want to give you tools you can use forever.
              </p>
              <p>
                I provide a split template designed for your needs, and I explain what we’re trying to achieve from each exercise.
                From there, you choose exercises that work best for you. Then we focus heavily on technique.
              </p>
              <p>
                You’ll send video of key exercises. I reply with cues to improve activation of the target muscle,
                and sometimes I’ll send my own videos to demonstrate. We keep evaluating weekly as technique evolves,
                and we adjust the split based on your recovery needs.
              </p>
              <div className={styles.numberList}>
                <div className={styles.numRow}>
                  <div className={styles.num}>1</div>
                  <div>Understand what you’re trying to get out of each movement.</div>
                </div>
                <div className={styles.numRow}>
                  <div className={styles.num}>2</div>
                  <div>Improve your ability to activate the target muscle and get more out of your effort.</div>
                </div>
                <div className={styles.numRow}>
                  <div className={styles.num}>3</div>
                  <div>Learn how and when to rotate exercises as needed.</div>
                </div>
              </div>
              <p className={styles.smallMut}>
                Typically this is done for 1 month. After that you should have the tools to keep progressing on your own.
                Later on, we can do another focused month if needed.
              </p>
            </Service>

            <Service
              title="Training for Contest Prep"
              summary="Keep training stable 16–18 weeks out. Small changes only when truly needed."
            >
              <p>
                If someone comes to me at 16–18 weeks out, it’s usually not the best time to overhaul everything.
                Training in prep is extremely important. If there are changes that clearly benefit you, I’ll suggest them,
                but generally those final 16 weeks should be a groove based on what worked in the off-season.
              </p>
              <p>
                The goal is to minimize risk and keep you in a strong psychological rhythm while pushing toward stage condition.
              </p>
            </Service>
          </div>

          <div className={styles.ctaRow}>
            <a className="btn btnPrimary" href="/pay">PAY / START</a>
            <a className="btn" href="mailto:mcnallydiets@gmail.com">ASK A QUESTION</a>
          </div>
        </div>
      </section>
    </div>
  );
}