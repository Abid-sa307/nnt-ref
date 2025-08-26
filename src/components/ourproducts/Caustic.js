

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import WhyChooseUs from '../Whychooseus';
import { CausticSodaFlakesMeta } from '../../data/metaData';
import CausticSodaFlakes from '../../static/images/caustic-soda.jpg';
import Clinkerization from '../../static/images/clinkerization.png';
//import MsdsImg from '../../static/images/specification-causticsoda.png';
import MsdsImg from '../../assests/refinery-clay-supp.png';

const Caustic = () => {
  return (
    <>
      <Seo meta={CausticSodaFlakesMeta} />
      

      {/* ✅ Hero-style section with description */}
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
            {/* Left - Content */}
            <div className="col-md-6 text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                Caustic Soda Flakes (NaOH)
              </h1>
              <p className="lead text-light">
                High-purity Sodium Hydroxide used in detergent, textile, water treatment and paper industries.
                Manufactured in ISO-certified facilities, compliant with REACH & SGS standards.
              </p>
            </div>

           {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src={CausticSodaFlakes} 
          alt="Caustic Soda Flakes Packaging Preview"
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

      {/* ✅ Clinkerization-style Informational Section */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left - Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4 " style={{ color: '#3366cc' }}
>
          High-Quality Caustic Soda Flakes From Trusted Manufacturers
        </h2>
        <p className="text-secondary mb-4">
          Our Caustic Soda Flakes are manufactured using advanced purification processes to ensure consistent performance across industries. As a leading supplier, we provide top-grade sodium hydroxide that meets stringent global standards.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• Exceptional purity (≥ 99%) for industrial-grade applications.</li>
          <li className="mb-2">• Compliant with ISO, REACH and SGS quality benchmarks.</li>
          <li className="mb-2">• Ideal for textile, water treatment and detergent sectors.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src={Clinkerization}
          alt="Caustic Soda Plant"
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
    <h2 className="text-center  fw-bold mb-5" style={{ color: '#3366cc' }}
>Specifications & MSDS</h2>
    <div className="row g-4 align-items-center">
      
      {/* Left - Specs List */}
      <div className="col-md-6">
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body">
            <h4 className="text-secondary mb-4">Technical Specifications</h4>
            <ul className="list-group list-group-flush fs-6">
              <li className="list-group-item d-flex justify-content-between">
                <span>Product Name</span><strong>Caustic Soda Flakes</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Chemical Name</span><strong>Sodium Hydroxide</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Formula</span><strong>NaOH</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Purity</span><strong>≥ 99%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Appearance</span><strong>White Flakes</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>CAS No.</span><strong>1310-73-2</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>HS Code</span><strong>2815.11</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Melting Point</span><strong>318°C</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Boiling Point</span><strong>1390°C</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Density</span><strong>2.13 g/cm³</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>PH (1% Sol.)</span><strong>13</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Solubility</span><strong>Completely Soluble in Water</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Certifications</span><strong>ISO, REACH, SGS</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>MSDS</span><strong>Available on Request</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Packaging</span><strong>25kg PP Bags with PE Liners</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Country of Origin</span><strong>India</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right - Visual Placeholder replaced with Image */}
<div className="col-md-6 text-center">
  <img
    src={MsdsImg} // ✅ import your MSDS image at the top
    alt="MSDS Sheet - Caustic Soda Flakes"
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



     {/* ✅ Applications - Beautiful Styled */}
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
    {/* <h2 className="text-center text-primary fw-bold mb-5">
      Applications
    </h2> */}

    <h2
  className="text-center fw-bold mb-5"
  style={{ color: '#3366cc' }}
>
  Applications
</h2>

    <div className="row justify-content-center">
      <div className="col-md-10 col-lg-8">
        <ul className="list-group list-group-flush custom-list">
          {[
            "Soap & Detergent Manufacturing",
            "Water Purification and Treatment",
            "Textile Dyeing and Scouring",
            "Pulp and Paper Processing",
            "Petrochemical Industry Processes",
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

      
      

{/* ✅ Packaging & Delivery Options - Styled (No Icons) */}
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
    <h2 className="text-center  fw-bold mb-5" style={{ color: '#3366cc' }}
>Packaging & Delivery Options
    </h2>
  
    <div className="row g-4 justify-content-center">
      {[
        "25 kg PE-lined PP bags with double-layer moisture protection",
        "Fast international delivery within 7–14 days",
        "Jumbo bags (500kg–1 MT) available for bulk supply",
        "Export-compliant labeling & safety documents (MSDS)",
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
          <h2 className="text-center  fw-bold mb-4" style={{ color: '#3366cc' }}
>Quality & Compliance Notes</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="lead text-center">
                Our Caustic Soda Flakes are manufactured under strict ISO-certified quality management systems.
                Each batch is tested for purity and consistency. We ensure compliance with international regulations including REACH and provide full traceability for export documentation and MSDS.
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
            { label: "Low residual acid", value: "(pH 4–6)" },
            { label: "Custom particle size" },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-start gap-3 mb-4"
            >
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

export default Caustic;

