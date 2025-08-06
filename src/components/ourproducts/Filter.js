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

      {/* ✅ Informational Section for Filter Flow Aid */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left - Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4 text-primary">
          High-Performance Filter Flow Aid for Superior Filtration
        </h2>
        <p className="text-secondary mb-4">
          Our Filter Aid is a fine-grade filtration medium designed to enhance the clarity and purity of liquids across food, pharmaceutical, and industrial applications. It ensures efficient solid-liquid separation with minimal product loss.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• Neutral pH and low moisture content for consistent filtration.</li>
          <li className="mb-2">• Suitable for edible oil, beverage, and chemical filtration systems.</li>
          <li className="mb-2">• Compliant with ISO and Food Grade safety standards.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3039/3039427.png" // Replace with actual filter aid image
          alt="Filter Aid Product"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: '360px', objectFit: 'cover' }}
        />
      </div>

    </div>
  </div>
</section>


      {/* ✅ Specifications / MSDS
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
      </section> */}

{/* ✅ Specifications / MSDS */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Specifications & MSDS</h2>
    <div className="row g-4 align-items-center">
      
      {/* Left - Specs List */}
      <div className="col-md-6">
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body">
            <h4 className="text-secondary mb-4">Technical Specifications</h4>
            <ul className="list-group list-group-flush fs-6">
              <li className="list-group-item d-flex justify-content-between">
                <span>Product Name</span><strong>Filter Aid / Filter Flow Aid</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Form</span><strong>Fine White Powder</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>pH</span><strong>6.5 – 7.5 (Neutral)</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Bulk Density</span><strong>0.20 – 0.25 g/cm³</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Moisture</span><strong>≤ 1%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Solubility</span><strong>Insoluble in Water</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Appearance</span><strong>Odorless, Light White Powder</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Application</span><strong>Filtration & Clarification</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Certifications</span><strong>ISO, Food Grade (Optional)</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>MSDS</span><strong>Available Upon Request</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Packaging</span><strong>20kg / 25kg Paper or PP Bags</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Country of Origin</span><strong>India</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right - Visual Placeholder for MSDS / Packaging */}
      <div className="col-md-6">
        <div
          className="rounded-4 shadow-sm d-flex align-items-center justify-content-center"
          style={{
            height: '100%',
            minHeight: '480px',
            backgroundColor: '#f8f9fa',
            border: '2px dashed #0d6efd55',
            color: '#0d6efd',
            fontSize: '1.2rem',
            textAlign: 'center',
            padding: '30px'
          }}
        >
          Visual Placeholder for Product Packaging, MSDS Sheet, or Certificates (ISO / Food Grade)
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

     
      {/* ✅ Packaging & Delivery Options
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Packaging & Delivery Options</h2>

    <div className="row g-4 justify-content-center">
      {[
        "10 kg, 25 kg bags or custom bulk packaging",
        "Delivery Time: 7–10 days worldwide",
        "Packaging Type: PE-lined, moisture-protected",
        "Export Support: Customs & logistics included"
      ].map((item, idx) => (
        <div key={idx} className="col-md-6">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body d-flex align-items-center">
              <div
                className="me-3 d-flex justify-content-center align-items-center"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#0d6efd22',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  color: '#0d6efd'
                }}
              >
                📦
              </div>
              <h5 className="mb-0 text-secondary">{item}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
 */}

 {/* ✅ Packaging & Delivery Options - Filter Flow Aid */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">
      📦 Packaging & Delivery Options
    </h2>

    <div className="row g-4 justify-content-center">
      {[
        {
          icon: "🧃",
          text: "10 kg & 25 kg moisture-resistant PE-lined paper bags",
        },
        {
          icon: "🚚",
          text: "Prompt global delivery: 7–10 working days",
        },
        {
          icon: "🛡️",
          text: "Packaging designed for long shelf-life and protection",
        },
        {
          icon: "🌐",
          text: "Export documentation and worldwide logistics support",
        },
      ].map((item, idx) => (
        <div key={idx} className="col-lg-6 col-md-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 bg-white hover-effect">
            <div className="card-body d-flex align-items-center">
              <div
                className="me-4 d-flex justify-content-center align-items-center flex-shrink-0"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#e7f1ff',
                  borderRadius: '50%',
                  fontSize: '1.8rem',
                  color: '#0d6efd',
                }}
              >
                {item.icon}
              </div>
              <div>
                <p className="mb-0 fw-semibold text-secondary fs-5">{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
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
