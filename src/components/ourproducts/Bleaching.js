import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bleaching = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-body p-5">
          <h2 className="mb-4 text-primary border-bottom pb-2">Bleaching Earth</h2>

          <section className="mb-4">
            <h5 className="text-secondary">📌 Description</h5>
            <p className="text-muted">
              Bleaching Earth is a natural clay used in refining edible oils, waste oils, and fats by removing impurities and color.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📄 Specifications / MSDS</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Moisture: ≤ 10%</li>
              <li className="list-group-item">pH: 3.0 – 4.5</li>
              <li className="list-group-item">Color: Light Cream</li>
              <li className="list-group-item">Oil Retention: ≤ 30%</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">🛠️ Applications</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Edible oil refining</li>
              <li className="list-group-item">Petroleum waste oil recovery</li>
              <li className="list-group-item">Animal fat purification</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📦 Packaging & Delivery</h5>
            <p className="text-muted">
              25 kg HDPE bags / Jumbo bags. Bulk shipments available globally.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">✅ Quality & Compliance</h5>
            <p className="text-muted">
              Safe for food-grade applications. Meets FSSAI and HACCP guidelines.
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

export default Bleaching;
