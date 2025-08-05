import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import { FilterFlowAidMeta } from '../../data/metaData'; // Add this in your metadata file

const Filter = () => {
  return (
    <>
      <Seo meta={FilterFlowAidMeta} />

      {/* ✅ Hero Section */}
      <section
        className="hero-section d-flex align-items-center"
        style={{
          paddingTop: '100px',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #005b96, #6db3f2)',
          paddingBottom: '60px',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                Filter Flow Aid
              </h1>
              <p className="lead text-light">
                High-purity filtration medium for precoat and body feed applications in liquid filtration systems.
                Designed for industrial, food-grade, and pharmaceutical use.
              </p>
            </div>

            {/* Right Box */}
            <div className="col-md-6 text-center">
              <div
                style={{
                  height: '400px',
                  width: '100%',
                  backgroundColor: '#ffffff33',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: '500',
                }}
              >
                Filter Flow Aid Packaging Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Specifications / MSDS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Specifications & MSDS</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">Form: Fine white powder</li>
                <li className="list-group-item">pH: Neutral (6.5 – 7.5)</li>
                <li className="list-group-item">Bulk Density: 0.20–0.25 g/cm³</li>
                <li className="list-group-item">Moisture: ≤ 1%</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <div
                style={{
                  height: '300px',
                  backgroundColor: '#e0e0e0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  color: '#555',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                Filter Aid Specs Visual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Applications */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Applications</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">Edible oil filtration</li>
                <li className="list-group-item">Beverage and juice clarification</li>
                <li className="list-group-item">Pharmaceutical liquids</li>
                <li className="list-group-item">Wastewater treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Packaging & Delivery */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Packaging & Delivery Options</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">10 kg, 25 kg bags or custom bulk packaging</li>
                <li className="list-group-item">Delivery Time: 7–10 days worldwide</li>
                <li className="list-group-item">Packaging Type: PE-lined, moisture-protected</li>
                <li className="list-group-item">Export Support: Customs & logistics included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Quality & Compliance */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Quality & Compliance Notes</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="lead text-center">
                Filter Flow Aid is tested and certified for both food-grade and industrial-grade use.
                It complies with ISO and GMP standards and offers consistent performance across filtration applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact / Quote Form */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Filter;
