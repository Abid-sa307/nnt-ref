import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Caustic = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-body p-5">
          <h2 className="mb-4 text-primary border-bottom pb-2">Caustic Soda Flakes</h2>

          <section className="mb-4">
            <h5 className="text-secondary">📌 Description</h5>
            <p className="text-muted">
              Caustic Soda Flakes (Sodium Hydroxide) are widely used in industries like textiles, paper, detergents, and chemical processing.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📄 Specifications / MSDS</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Purity: ≥ 99%</li>
              <li className="list-group-item">Appearance: White flakes</li>
              <li className="list-group-item">CAS No: 1310-73-2</li>
              <li className="list-group-item">HS Code: 2815.11</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">🛠️ Applications</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Textile processing</li>
              <li className="list-group-item">Soap and detergent manufacturing</li>
              <li className="list-group-item">Water treatment</li>
              <li className="list-group-item">Paper and pulp industry</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📦 Packaging & Delivery</h5>
            <p className="text-muted">
              25 kg PE-lined PP bags / 50 kg drums. Prompt delivery within 1–2 weeks.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">✅ Quality & Compliance</h5>
            <p className="text-muted">
              Manufactured under ISO-certified plants. Complies with REACH and SGS standards.
            </p>
          </section>

          <div className="text-center">
            <a href="/contact" className="btn btn-lg btn-primary px-5">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caustic;
