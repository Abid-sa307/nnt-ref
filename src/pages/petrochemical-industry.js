import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { PetrochemicalIndustryMeta } from '../data/metaData'; // Make sure this exists
import Petrochemical from '../static/images/Petrochemical-indus.png';
import CausticSodaFlakes from '../static/images/caustic-soda.jpg';

const PetrochemicalIndustry = () => {
  return (
    <>
      <Seo meta={PetrochemicalIndustryMeta} />

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
                Petrochemicals & General Chemical Manufacturing
              </h1>
              <p className="lead text-light">
                Supporting chemical industries with essential raw materials that ensure consistent processing, safe operations and high-purity outputs.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={Petrochemical}
                alt="Petrochemical Industry"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Key Products Used */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <h2 className="fw-bold mb-3" style={{ color: '#3366cc' }}>Key Products Used</h2>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">• <strong>Caustic Soda Flakes</strong>: Used for neutralization, pH regulation and chemical stripping in various reactions.</li>
                <li className="mb-3">• <strong>Citric Acid</strong>: Acts as a pH buffer and helps in metal passivation to prevent corrosion in process pipelines and vessels.</li>
                <li className="mb-3">• <strong>Filter Aids</strong>: Ensures impurity-free process streams by enhancing filtration clarity.</li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={CausticSodaFlakes}
                alt="Chemical Products"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '360px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Benefits to the Industry - Petrochemical */}
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
      Benefits to the Industry
    </h2>

    <Row className="justify-content-center g-4">
      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
          title: "High-Purity Inputs",
          desc: "Impurities in chemicals can severely affect reaction consistency. Our high-purity offerings improve product stability and reduce variability in manufacturing outcomes.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Better Process Yield",
          desc: "Optimized pH control and enhanced filtration performance reduce waste, maximize production efficiency and improve throughput.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
          title: "Safer Chemical Environments",
          desc: "Proper use of citric acid and filter aids reduces corrosion risks, ensuring safer handling during critical operations.",
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


      {/* ✅ Why Industrial Buyers Choose Us */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-4" style={{ color: '#3366cc' }}>
            Why Industrial Buyers Prefer Reliable Suppliers
          </h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">• Full documentation (MSDS, COA, REACH compliance)</li>
                <li className="mb-3">• Consistency with global chemical compatibility standards</li>
                <li className="mb-3">• Timely delivery for uninterrupted production</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default PetrochemicalIndustry;
