// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import WhyChooseUs from '../Whychooseus';
import CitricAcid from '../../static/images/citric-acid.jpg'
import Clinkerization from '../../static/images/clinkerization.png';
import MsdsImg from '../../assests/refinery-clay-supp.png';

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
                Citric Acid is a natural preservative and flavoring agent used widely across food, pharmaceutical and industrial applications. 
                Manufactured under GMP & ISO-certified facilities.
              </p>
            </div>

            {/* Right Box */}
            <div className="col-md-6 text-center">
              <img
                        src={CitricAcid} 
                        alt="Citric Acid Packaging Preview"
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

      {/* ✅ Informational Section for Citric Acid */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left - Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4 " style={{ color: '#3366cc' }}>
          Premium Citric Acid Monohydrate for Food & Industrial Use
        </h2>
        <p className="text-secondary mb-4">
          Our Citric Acid is a high-purity, food-grade compound used widely in the food, pharmaceutical and cleaning industries. Sourced from certified facilities, it ensures safe acidity regulation, preservation and chelation across a variety of applications.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• ≥ 99.5% assay purity for food and industrial applications.</li>
          <li className="mb-2">• GRAS certified and compliant with FCC, BP and USP standards.</li>
          <li className="mb-2">• Highly soluble, odorless and non-toxic — ideal for beverages, detergents and effervescent tablets.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src={Clinkerization} // You can replace this with your actual image
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
    <h2 className="text-center  fw-bold mb-5" style={{ color: '#3366cc' }}>Specifications & MSDS</h2>
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
      <img
          src={MsdsImg} // ✅ import your MSDS image at the top
          alt="MSDS Sheet - Citric Acid"
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
            "Food and beverage additive",
            "Cleaning agents",
            "Cosmetics & personal care",
            "Pharmaceutical excipient",
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
        "25 kg kraft bags with inner liners for moisture protection",
        "Flexible shipment modes: Sea & Air freight available",
        "Fast dispatch: Delivery within 7 working days",
        "Export-ready: Complete documentation & compliance",
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
          <h2 className="text-center  fw-bold mb-4"  style={{ color: '#3366cc' }}>Quality & Compliance Notes</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="lead text-center">
                Our Citric Acid is produced under GMP conditions and meets FSSC 22000, Kosher, Halal and ISO 9001 standards.
                Full traceability and regulatory documents available upon request.
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
      {/* ✅ Contact / Quote Button */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Citric;
