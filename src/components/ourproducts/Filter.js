import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import { FilterFlowAidMeta } from '../../data/metaData'; // Add this in your metadata file
import WhyChooseUs from '../Whychooseus';
import FilterFlowAid from '../../static/images/filter-aid.jpg'
import Clinkerization from '../../static/images/clinkerization.png';
import MsdsImg from '../../assests/refinery-clay-supp.png';
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
                Designed for industrial, food-grade and pharmaceutical use.
              </p>
            </div>

            {/* Right Box */}
            <div className="col-md-6 text-center">
              <img
                        src={FilterFlowAid} 
                        alt="Filter Flow Aid  Packaging Preview"
                        style={{
                          height: '400px',
                          width: '100%',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                        }}
                      />
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
        <h2 className="fw-bold mb-4 " style={{ color: '#3366cc' }}>
          High-Performance Filter Flow Aid for Superior Filtration
        </h2>
        <p className="text-secondary mb-4">
          Our Filter Aid is a fine-grade filtration medium designed to enhance the clarity and purity of liquids across food, pharmaceutical and industrial applications. It ensures efficient solid-liquid separation with minimal product loss.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• Neutral pH and low moisture content for consistent filtration.</li>
          <li className="mb-2">• Suitable for edible oil, beverage and chemical filtration systems.</li>
          <li className="mb-2">• Compliant with ISO and Food Grade safety standards.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src={Clinkerization} // Replace with actual filter aid image
          alt="Filter Aid Product Plant"
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
    <h2 className="text-center  fw-bold mb-5" style={{ color: '#3366cc' }}>Specifications & MSDS</h2>
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
        <img
            src={MsdsImg} // ✅ import your MSDS image at the top
            alt="MSDS Sheet - Filter Flow Aid"
            className="img-fluid rounded-4 shadow"
            style={{
              maxHeight: '1000px',
              objectFit: 'contain',
              width: '100%',
            }}
          />
      </div>

    </div>
  </div>
</section>

    {/* ✅ Applications - Styled UI */}
<section className="py-5 bg-light">
  <style>
    {`
      .custom-list-item {
        background-color: #ffffff;
        padding: 15px 20px;
        transition: all 0.3s ease;
        position: relative;
      }

      .custom-list-item:hover {
        background-color: #f0f8ff;
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(0, 123, 255, 0.1);
        cursor: default;
      }

      .custom-list .list-group-item {
        font-size: 1.05rem;
        font-weight: 500;
        color: #333;
        border-left: 4px solid #007bff;
      }

      .custom-list-item::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #007bff;
        border-radius: 50%;
        margin-right: 12px;
      }
    `}
  </style>

  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: '#3366cc' }}>
      Applications
    </h2>

    <div className="row justify-content-center">
      <div className="col-md-10 col-lg-8">
        <ul className="list-group list-group-flush custom-list">
          {[
            "Edible oil filtration",
            "Beverage and juice clarification",
            "Pharmaceutical liquids",
            "Wastewater treatment",
          ].map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center shadow-sm mb-3 rounded border-0 custom-list-item"
            >
              <span className="fs-5">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ✅ Packaging & Delivery Options - Styled UI */}
<section className="py-5 bg-light">
  <style>
    {`
      .package-card {
        transition: all 0.3s ease;
        border-left: 5px solid #0d6efd;
        background-color: #fff;
        padding: 20px 25px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }

      .package-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(13, 110, 253, 0.1);
        background-color: #f8faff;
      }

      .package-text {
        font-size: 1.1rem;
        color: #444;
        font-weight: 500;
      }
    `}
  </style>

  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: '#3366cc' }}>
      Packaging & Delivery Options
    </h2>

    <div className="row g-4 justify-content-center">
      {[
        "10 kg & 25 kg moisture-resistant PE-lined paper bags",
        "Prompt global delivery: 7–10 working days",
        "Packaging designed for long shelf-life and protection",
        "Export documentation and worldwide logistics support",
      ].map((text, idx) => (
        <div key={idx} className="col-md-6">
          <div className="package-card h-100">
            <p className="package-text mb-0">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ✅ Quality & Compliance */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center  fw-bold mb-4" style={{ color: '#3366cc' }}>Quality & Compliance Notes</h2>
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

      {/* ✅ Checklist Before You Buy */}
<section className="py-5" style={{ background: '#f8fafd' }}>
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: "#3366cc" }}>
      Checklist Before You Buy
    </h2>

    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card border-0 shadow-sm p-4 rounded-4" style={{ background: '#ffffff' }}>
          {[
            { label: "FCC / BP / USP compliance" },
            { label: "Purity", value: "≥ 99.5%" },
            { label: "Granule type", value: "Coarse or fine mesh" },
            { label: "Certification", value: "Allergen-free" },
          ].map((item, index) => (
            <div key={index} className="d-flex align-items-start gap-3 mb-4">
              <div
                className="rounded-circle flex-shrink-0"
                style={{
                  width: '12px',
                  height: '12px',
                  marginTop: '6px',
                  backgroundColor: '#3366cc',
                }}
              ></div>
              <div>
                <h6 className="mb-1 fw-semibold text-dark">{item.label}</h6>
                {item.value && <p className="mb-0 text-muted">{item.value}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      <WhyChooseUs />

      {/* ✅ Contact / Quote Form */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Filter;
