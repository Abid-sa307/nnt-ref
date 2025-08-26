import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { PharmaceuticalMeta } from '../data/metaData'; 
import Pharmaceutical from '../static/images/Pharmaceutical-indus.png'
import CitircAcid from '../static/images/citric-acid.jpg';

const Pharmaceuticals = () => {
  return (
    <>
      <Seo meta={PharmaceuticalMeta} />

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
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                Pharmaceuticals & Nutraceuticals
              </h1>
              <p className="lead text-light">
                High-purity citric acid solutions designed for sensitive pharmaceutical formulations and advanced nutraceutical blends.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={Pharmaceutical}
                alt="Pharmaceuticals"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Product Info Section */}
      <section className="py-2 bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <h2 className="fw-bold mb-3" style={{ color: '#3366cc' }}>
                Citric Acid for Pharma Excellence
              </h2>
              <p className="text-secondary mb-4">
                Our pharmaceutical-grade citric acid is manufactured under strict quality protocols, ensuring superior performance in critical applications.
              </p>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">• <strong>Citric Acid (Pharma Grade)</strong>: Conforms to IP/BP/USP specifications</li>
                <li className="mb-3">• Used in: Effervescent tablets, pH buffering and as a preservative</li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={CitircAcid}
                alt="Citric Acid Pharma Grade"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '360px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

     {/* ✅ Key Benefits for Pharma & Nutra Use */}
<section
  className="py-5"
  style={{
    background: "linear-gradient(180deg, #f9fbff, #eef5ff)",
    fontFamily: "'Merriweather Sans', sans-serif",
  }}
>
  <Container>
    <h2
      className="text-center fw-bold mb-5"
      style={{
        color: "#3366cc",
        fontSize: "2.4rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Key Benefits for Pharma & Nutra Use
    </h2>

    <Row className="justify-content-center g-4">
      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png", // Capsules icon
          title: "Controlled Granule Size",
          desc: "Ensures uniform mixing and dissolution in effervescent and oral solid dosage forms, supporting consistent therapeutic results.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2966/2966489.png", // Moisture control icon
          title: "Low Moisture Content",
          desc: "Reduces the risk of degradation in moisture-sensitive APIs and excipients, enhancing shelf life and stability.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3197/3197959.png", // Compliance icon
          title: "API Compatibility",
          desc: "Fully compliant with pharmaceutical regulations and inert with active ingredients, making it suitable for direct formulation without risk of interaction.",
        },
      ].map((item, idx) => (
        <Col md={4} key={idx}>
          <div
            className="p-4 h-100 text-center rounded shadow-sm"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e6ecf5",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 3px 10px rgba(0,0,0,0.05)";
            }}
          >
            <img
              src={item.icon}
              alt={item.title}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "15px",
              }}
            />
            <h5
              style={{
                color: "#3366cc",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h5>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
              {item.desc}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* ✅ Why Industry Chooses Us */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-4" style={{ color: '#3366cc' }}>
            Why Pharma Companies Choose N&T
          </h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">• IP/BP/USP-compliant production standards</li>
                <li className="mb-3">• Particle size and moisture profiles tailored to application</li>
                <li className="mb-3">• Batch-to-batch consistency for GMP assurance</li>
                <li className="mb-3">• Strong documentation support (COA, MSDS, DQ/IQ/OQ/PQ if needed)</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Contact & Footer */}
      <Contact />
      <Footer />
    </>
  );
};

export default Pharmaceuticals;
