import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="card">
      <div className="cardHeader">
        <div>
          <div className="kicker">Error</div>
          <h1 className="title">404</h1>
        </div>
      </div>
      <div className="cardBody">
        <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 1.6 }}>
          This page doesn’t exist. Which is honestly relatable.
        </p>
        <Link className="btn btnPrimary" to="/" style={{ marginTop: 12 }}>
          BACK HOME
        </Link>
      </div>
    </section>
  );
}