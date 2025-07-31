import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-body p-5">
          <h2 className="mb-4 text-primary border-bottom pb-2">Filter Flow Aid</h2>

          <section className="mb-4">
            <h5 className="text-secondary">📌 Description</h5>
            <p className="text-muted">
              Filter Flow Aid is a high-purity filtration medium designed for precoat and body feed applications in liquid filtration systems.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📄 Specifications / MSDS</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Form: Fine white powder</li>
              <li className="list-group-item">pH: Neutral (6.5 – 7.5)</li>
              <li className="list-group-item">Bulk Density: 0.20–0.25 g/cm³</li>
              <li className="list-group-item">Moisture: ≤ 1%</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">🛠️ Applications</h5>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item">Edible oil filtration</li>
              <li className="list-group-item">Beverage and juice clarification</li>
              <li className="list-group-item">Pharmaceutical liquids</li>
              <li className="list-group-item">Wastewater treatment</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📦 Packaging & Delivery</h5>
            <p className="text-muted">
              Available in 10 kg, 25 kg, or custom bulk packaging. Ships globally within 7–10 days.
            </p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">✅ Quality & Compliance</h5>
            <p className="text-muted">
              Tested and certified for food-grade and industrial-grade compliance. Conforms to ISO and GMP norms.
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

export default Filter;
