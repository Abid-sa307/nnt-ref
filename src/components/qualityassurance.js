import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import isoImage from '../Assests/iso-cert.png';
import labTestImage from '../Assests/lab-testing.png';
import packagingImage from '../Assests/packaging.png';
import logisticsImage from '../Assests/logistics.png';
import msdsImage from '../Assests/msds-sample.png';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Seo from '../components/seo';

const QualityAssurance = () => {
  return (
    <>
      <Seo meta={{ title: 'Quality Assurance - N&T', description: 'Our Certifications, Testing, Packaging, and Safety Protocols.' }} />

      {/* ✅ Hero Section */}
      <section
        className="hero-section d-flex align-items-center"
        style={{
          paddingTop: '100px',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0072b1, #74c0fc)',
          paddingBottom: '60px',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left - Text */}
            <div className="col-md-6 text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3">Quality Assurance</h1>
              <p className="lead">
                Certified quality processes including ISO, lab testing, global packaging, and safety documentation ensure trust in every shipment.
              </p>
            </div>

            {/* Right - Box */}
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
                Testing Lab & Certification Visuals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ISO & Certifications */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Certifications & Standards</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={isoImage} alt="ISO Certification" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">ISO 9001:2015 Certified</li>
                <li className="list-group-item">REACH, RoHS, and GHS Compliance</li>
                <li className="list-group-item">Global safety & environmental protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Lab Testing */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Lab Testing Process</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">In-house lab with high-precision instruments</li>
                <li className="list-group-item">Parameters tested: pH, purity, moisture, etc.</li>
                <li className="list-group-item">Batch-wise reports & technical documentation</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src={labTestImage} alt="Lab Testing" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Packaging Standards */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Packaging Standards</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={packagingImage} alt="Packaging" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">HDPE drums, fiber drums, laminated bags</li>
                <li className="list-group-item">Customized for chemical sensitivity</li>
                <li className="list-group-item">Export-grade materials used</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Logistics & Handling */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Logistics & Handling</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">Safe loading & labeling protocols</li>
                <li className="list-group-item">GPS-enabled logistics tracking</li>
                <li className="list-group-item">Export-ready with complete documentation</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src={logisticsImage} alt="Logistics" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ MSDS & Safety */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">MSDS & Safety Protocols</h2>
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={msdsImage} alt="MSDS" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">MSDS provided with all shipments</li>
                <li className="list-group-item">OSHA, IMDG, and IATA compliant handling</li>
                <li className="list-group-item">Safety-first trained export team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default QualityAssurance;
