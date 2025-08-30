import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import isoImage1 from '../static/images/certification-1.png';
import isoImage2 from '../static/images/certification-2.png';
import isoImage3 from '../static/images/certification-3.png';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Seo from '../components/seo';
import Whychooseus from '../components/Whychooseus';
import RefineryClaySupplier from '../assets/refinery-clay-supp.png';

const QualityAssurance = () => {
  return (
    <>
      <Seo meta={{ title: 'Quality Assurance - N&T', description: 'Our Certifications, Testing, Packaging and Safety Protocols.' }} />

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
                Certified quality processes including ISO, lab testing, global packaging and safety documentation ensure trust in every shipment.
              </p>
            </div>

           {/* Right - Box with Image */}
<div className="col-md-6 text-center">
  <div
    style={{
      height: '400px',
      width: '100%',
      //backgroundColor: '#ffffff33',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px',
     // boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      overflow: 'hidden', // ✅ Prevent image overflow
    }}
  >
    <img
      src={RefineryClaySupplier} // 👉 Replace with your image path
      alt="Water Treatment Plant"
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
       // objectFit: 'cover', // ✅ Ensures image fills nicely
        borderRadius: '12px',
      }}
    />
  </div>
</div>

            </div>
          </div>
        
      </section>

   
      {/* ✅ Multi-Layer QC Process */}
      <section className="py-5" style={{ background: "linear-gradient(180deg, #f8faff, #ffffff)" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#3666cc" }}>
            Our Multi-Layer Quality Control Process
          </h2>
          <div className="row g-4">
            {[
              {
                title: "Raw Material Inspection",
                items: [
                  "Moisture content",
                  "pH level",
                  "Granule size / mesh",
                  "Heavy metal traces",
                  "Purity (% composition)"
                ]
              },
              {
                title: "In-Process Checks",
                items: [
                  "pH & surface area in bleaching earth activation",
                  "Flake shape, moisture & color in caustic soda",
                  "Citric acid purity >99.5% during crystallization",
                  "Filter aid flow rate & efficiency"
                ]
              },
              {
                title: "Final Product Testing",
                items: [
                  "Color, odor, appearance",
                  "Moisture & particle size",
                  "Residue on ignition",
                  "Solubility, pH, density",
                  "Microbial load (food/pharma grade)"
                ]
              }
            ].map((block, idx) => (
              <div className="col-md-4" key={idx}>
                <div
                  className="p-4 bg-white rounded shadow-sm h-100 hover-shadow"
                  style={{
                    transition: "all 0.3s ease",
                    borderTop: "4px solid #3666cc"
                  }}
                >
                  <h5 className="fw-bold mb-3">{block.title}</h5>
                  <ul>
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Certifications */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#3666cc" }}>
            Certifications & Global Compliance
          </h2>
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center" >
              <img
                src={isoImage1}
                alt="ISO Certification"
                className="img-fluid rounded shadow" style={{ marginRight: '60px' }}
              />
              <img
                src={isoImage2}
                alt="ISO Certification"
                className="img-fluid rounded shadow" style={{ marginRight: '60px' }}
              />
              <img
                src={isoImage3}
                alt="ISO Certification"
                className="img-fluid rounded shadow" style={{ marginRight: '10px' }}
              />
            </div>
            <div className="col-lg-6">
              <table className="table table-bordered table-hover">
                <thead className="table-primary">
                  <tr>
                    <th>Standard</th>
                    <th>Scope</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ISO 9001:2015</td>
                    <td>Quality Management</td>
                    <td>Assures manufacturing & QC integrity</td>
                  </tr>
                  <tr>
                    <td>REACH</td>
                    <td>EU Regulation</td>
                    <td>Safe usage & environmental standards</td>
                  </tr>
                  <tr>
                    <td>FSSAI / HACCP</td>
                    <td>Food-Grade</td>
                    <td>Hygiene & food safety</td>
                  </tr>
                  <tr>
                    <td>COA + MSDS</td>
                    <td>All Batches</td>
                    <td>Full transparency</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FAQs */}
      <section className="py-5" style={{ background: "#f8faff" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#3666cc" }}>
            Most-Asked Questions on Google
          </h2>
          <div className="accordion" id="faqAccordion">
            {[
              [
                "How to check the quality of bleaching earth?",
                "Ask for surface area analysis (m²/g), pH, bulk density. We provide full lab reports."
              ],
              [
                "How to verify industrial chemical suppliers?",
                "Look for REACH compliance, ISO certification, COA and client references."
              ],
              [
                "What purity is good for caustic soda flakes?",
                "Industrial grade: 98–99% NaOH. Our flakes are 99% minimum."
              ],
              [
                "Is citric acid safe for food?",
                "Only food-grade (FCC/USP) citric acid is safe. We provide GRAS certified quality."
              ],
              [
                "How to test filter aid quality?",
                "Test bulk density, flow rate and clarity index. We provide in-lab testing."
              ]
            ].map(([q, a], idx) => (
              <div className="accordion-item" key={idx}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${idx}`}
                  >
                    {q}
                  </button>
                </h2>
                <div
                  id={`faq${idx}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌐 Why Global Buyers Choose Our Quality */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#3666cc" }}>
             Why Global Buyers Choose Our Quality
          </h2>
          <div className="row g-4">
            {[
              " Zero-Defect Shipping – We double-inspect every container",
              " Consistent Batches – Same specs every reorder",
              " Custom Solutions – Tailored mesh size, bulk density, moisture control",
              " Fast Lab Support – Pre-shipment test reports shared with clients",
              " Global References – Trusted by buyers in UAE, Nigeria, Indonesia and Europe"
            ].map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div
                  className="p-3 bg-light rounded shadow-sm"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "500",
                    borderLeft: "4px solid #3666cc",
                    transition: "0.3s"
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📦 Packing Integrity & Custom Options */}
      <section className="py-5" style={{ background: "#f8faff" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#3666cc" }}>
             Packing Integrity & Custom Options
          </h2>
          <p
            className="text-center mb-4"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "#555"
            }}
          >
            We protect product quality with strong, moisture-proof, export-ready
            packaging:
          </p>
          <div className="row g-4">
            {[
              "25kg / 50kg HDPE or Kraft Bags (inner liner optional)",
              "Jumbo Bags (500kg–1200kg)",
              "Custom palletization available",
              "Vacuum-sealed options for food/pharma use"
            ].map((text, idx) => (
              <div className="col-md-6" key={idx}>
                <div
                  className="p-4 rounded shadow-sm"
                  style={{
                    background: "white",
                    fontWeight: "500",
                    borderLeft: "4px solid #3666cc",
                    transition: "0.3s"
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* 🛠 Lab Infrastructure Highlights */}
<section className="py-5" style={{ background: "#f8faff" }}>
  <div className="container">
    <h2
      className="text-center fw-bold mb-5"
      style={{
        color: "#3666cc",
        fontSize: "2rem",
        letterSpacing: "0.5px",
      }}
    >
       Lab Infrastructure Highlights
    </h2>
    <div className="row g-4 text-center">
      {[
        "UV-Vis Spectrophotometer",
        "Digital Moisture Analyzer",
        "Particle Size Analyzer",
        "Flame Photometer",
        "Karl Fischer Titrator",
        "Microbial Lab (for food-grade testing)",
      ].map((item, idx) => (
        <div className="col-sm-6 col-lg-4" key={idx}>
          <div
            className="p-4 bg-white rounded shadow-sm h-100 d-flex align-items-center justify-content-center"
            style={{
              border: "1px solid #e3e7ed",
              borderTop: "4px solid #e3e7ed",
              transition: "all 0.3s ease",
              cursor: "pointer",
              minHeight: "140px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(0, 0, 0, 0.05)";
            }}
          >
            <p
              className="fw-bold mb-0"
              style={{
                color: "#333",
                fontSize: "1.05rem",
                lineHeight: "1.4",
              }}
            >
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      

  
      
    

      <Whychooseus/>
      {/* ✅ Contact Section */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default QualityAssurance;


