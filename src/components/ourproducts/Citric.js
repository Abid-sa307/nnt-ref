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

      {/* ✅ Informational Section for Citric Acid */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left - Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4 text-primary">
          Premium Citric Acid Monohydrate for Food & Industrial Use
        </h2>
        <p className="text-secondary mb-4">
          Our Citric Acid is a high-purity, food-grade compound used widely in the food, pharmaceutical, and cleaning industries. Sourced from certified facilities, it ensures safe acidity regulation, preservation, and chelation across a variety of applications.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• ≥ 99.5% assay purity for food and industrial applications.</li>
          <li className="mb-2">• GRAS certified and compliant with FCC, BP, and USP standards.</li>
          <li className="mb-2">• Highly soluble, odorless, and non-toxic — ideal for beverages, detergents, and effervescent tablets.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2812/2812471.png" // You can replace this with your actual image
          alt="Citric Acid Powder"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: '360px', objectFit: 'cover' }}
        />
      </div>

    </div>
  </div>
</section>

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
                <span>Product Name</span><strong>Citric Acid</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Chemical Name</span><strong>2-Hydroxypropane-1,2,3-tricarboxylic acid</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Formula</span><strong>C₆H₈O₇</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Form</span><strong>White Crystalline Powder</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Assay</span><strong>≥ 99.5%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>CAS No.</span><strong>77-92-9</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>HS Code</span><strong>2918.14</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Solubility</span><strong>Highly Soluble in Water</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>pH (1% Sol.)</span><strong>~2.2</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Melting Point</span><strong>153°C</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Boiling Point</span><strong>Decomposes</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Density</span><strong>1.665 g/cm³</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Certifications</span><strong>FCC, USP, ISO</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>MSDS</span><strong>Available on Request</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Packaging</span><strong>25kg Bags or Customized</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Country of Origin</span><strong>India</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right - Visual Placeholder */}
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
          Visual Placeholder for Product Packaging, MSDS Sheet, or Certificates (FCC / ISO / USP)
        </div>
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
      </section> */}

     
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

      

      {/* ✅ Packaging & Delivery Options
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Packaging & Delivery Options</h2>

    <div className="row g-4 justify-content-center">
      {[
        "25 kg kraft bags with inner liners",
        "Shipment: Sea & Air available",
        "Delivery Time: Within 1 week",
        "Export Support: Full documentation"
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
</section> */}


{/* ✅ Packaging & Delivery Options - Enhanced UI */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">
      📦 Packaging & Delivery Options
    </h2>

    <div className="row g-4 justify-content-center">
      {[
        {
          icon: "🧃",
          text: "25 kg kraft bags with inner liners for moisture protection",
        },
        {
          icon: "🚢",
          text: "Flexible shipment modes: Sea & Air freight available",
        },
        {
          icon: "⏱️",
          text: "Fast dispatch: Delivery within 7 working days",
        },
        {
          icon: "📝",
          text: "Export-ready: Complete documentation & compliance",
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
