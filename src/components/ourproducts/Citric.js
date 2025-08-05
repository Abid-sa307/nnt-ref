// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';

const Citric = () => {
  return (
    <>
      <Seo meta={{ title: "Citric Acid", description: "Citric Acid product page" }} />

      {/* ✅ Hero section with product description */}
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
                Citric Acid (C₆H₈O₇)
              </h1>
              <p className="lead text-light">
                Citric Acid is a natural preservative and flavoring agent used widely across food, pharmaceutical, and industrial applications. 
                Manufactured under GMP & ISO-certified facilities.
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
                Citric Acid Packaging Preview
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
                <li className="list-group-item">Form: White crystalline powder</li>
                <li className="list-group-item">Assay: ≥ 99.5%</li>
                <li className="list-group-item">CAS No: 77-92-9</li>
                <li className="list-group-item">Solubility: Highly soluble in water</li>
                <li className="list-group-item">MSDS: Available Upon Request</li>
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
                Citric Acid Packaging Visual
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
                <li className="list-group-item">Food and beverage additive</li>
                <li className="list-group-item">Cleaning agents</li>
                <li className="list-group-item">Cosmetics & personal care</li>
                <li className="list-group-item">Pharmaceutical excipient</li>
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
                <li className="list-group-item">25 kg kraft bags with inner liners</li>
                <li className="list-group-item">Shipment: Sea & Air available</li>
                <li className="list-group-item">Delivery Time: Within 1 week</li>
                <li className="list-group-item">Export Support: Full documentation</li>
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
                Our Citric Acid is produced under GMP conditions and meets FSSC 22000, Kosher, Halal, and ISO 9001 standards.
                Full traceability and regulatory documents available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact / Quote Button */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Citric;
