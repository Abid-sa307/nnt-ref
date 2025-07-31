import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Citric = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-body p-5">
          <h2 className="mb-4 text-primary border-bottom pb-2">Citric Acid</h2>

          <section className="mb-4">
            <h5 className="text-secondary">📌 Description</h5>
            <p className="text-muted">
              Citric Acid is a natural preservative and flavoring agent used across food, pharmaceutical, and industrial applications.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📄 Specifications / MSDS</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Form: White crystalline powder</li>
              <li className="list-group-item">Assay: ≥ 99.5%</li>
              <li className="list-group-item">CAS No: 77-92-9</li>
              <li className="list-group-item">Solubility: Highly soluble in water</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">🛠️ Applications</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Food and beverage additive</li>
              <li className="list-group-item">Cleaning agents</li>
              <li className="list-group-item">Cosmetics & personal care</li>
              <li className="list-group-item">Pharmaceutical excipient</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📦 Packaging & Delivery</h5>
            <p className="text-muted">
              Supplied in 25 kg kraft bags with inner liners. Delivery within 1 week via air/sea cargo.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">✅ Quality & Compliance</h5>
            <p className="text-muted">
              Produced under GMP conditions. Certified by FSSC 22000, Kosher, Halal, and ISO 9001.
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

export default Citric;
