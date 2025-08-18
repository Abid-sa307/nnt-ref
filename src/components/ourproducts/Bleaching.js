import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import WhyChooseUs from '../Whychooseus';
import { BleachingEarthMeta } from '../../data/metaData';

const BleachingEarth = () => {
  return (
    <>
      <Seo meta={BleachingEarthMeta} />

      {/* ✅ Hero-style section */}
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
            {/* Left - Description */}
            <div className="col-md-6 text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                Bleaching Earth (Activated Clay)
              </h1>
              <p className="lead text-light" style={{ color: '#3366cc' }}>
                Premium-grade regenerative bleaching earth, used in edible oil refining,
                industrial wastewater treatment and petrochemical filtration applications.
              </p>
            </div>

            {/* Right - Placeholder box */}
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
                Bleaching Earth Packaging Preview
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* ✅ Informational Section for Bleaching Earth */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left - Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4 " style={{ color: '#3366cc' }}>
          Premium-Grade Bleaching Earth for Oil Purification
        </h2>
        <p className="text-secondary mb-4">
          Our Activated Bleaching Earth is processed from high-quality bentonite clay, ensuring maximum adsorption efficiency and consistent decolorization in edible oil refining and industrial applications.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• Superior adsorption for removing color, impurities & trace metals.</li>
          <li className="mb-2">• Optimized moisture content and neutral pH for safe handling.</li>
          <li className="mb-2">• Widely used in edible oil refineries, cosmetics and pharmaceuticals.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920364.png" // Replace with actual product/factory image
          alt="Bleaching Earth Powder"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: '360px', objectFit: 'cover' }}
        />
      </div>

    </div>
  </div>
</section>


      {/* ✅ Specifications & MSDS */}
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
                <span>Product Name</span><strong>Activated Bleaching Earth</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Moisture Content</span><strong>≤ 5%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>pH (5% slurry)</span><strong>6.5 – 8.0</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Color Value (Lovibond)</span><strong>≤ 3.0</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Appearance</span><strong>Fine Light Gray/Beige Powder</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Oil Retention</span><strong>≥ 100%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Surface Area</span><strong>200-250 m²/g</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Bulk Density</span><strong>0.6 – 0.8 g/cm³</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Certifications</span><strong>ISO, FDA, REACH</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>MSDS</span><strong>Available Upon Request</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Packaging</span><strong>25kg / 50kg PP Bags with Liners</strong>
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
          Visual Placeholder for Product Packaging, MSDS Sheet, or Certificates (ISO / FDA / REACH)
        </div>
      </div>

    </div>
  </div>
</section>


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
            "Edible Oil Refining",
            "Wastewater Treatment",
            "Industrial Filtration",
            "Bleaching & Deodorization",
            "Cosmetic & Oleochemical Industries",
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
        "20 kg PE-lined kraft paper bags with inner moisture barrier",
        "Standard global delivery in 1–2 weeks",
        "Bulk jumbo bags (≥1 MT) available for industrial use",
        "Customized labeling & documentation support on request",
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
          <h2 className="text-center  fw-bold mb-4" style={{ color: '#3366cc' }}>Quality & Compliance</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="lead text-center">
                Manufactured in ISO and FDA‑certified facilities. Each batch is tested for moisture, color value and adsorption efficiency.
                Full traceability is ensured with Certificates of Analysis and MSDS provided with every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" style={{ background: '#f8fafd' }}>
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: "#3366cc" }}>
    Checklist Before You Buy
    </h2>

    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card border-0 shadow-sm p-4 rounded-4" style={{ background: '#ffffff' }}>
          {[
            { label: "Surface area", value: "> 200 m²/g" },
            { label: "Moisture", value: "< 8%" },
            { label: "Low residual acid", value: "pH 4–6" },
            { label: "Custom particle size" },
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
      {/* ✅ Contact Section */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default BleachingEarth;

