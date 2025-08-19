import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { AgricultureFertilizersMeta } from '../data/metaData'; // Make sure this exists

const AgricultureFertilizers = () => {
  return (
    <>
      <Seo meta={AgricultureFertilizersMeta} />

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
            {/* Left Content */}
            <Col md={6} className="text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                Agriculture & Fertilizers
              </h1>
              <p className="lead text-light">
                Boost plant health and yield with scientifically formulated chelating agents and pH regulators.
              </p>
            </Col>

            {/* Right Image */}
            <Col md={6} className="text-center">
              <img
                src="/assets/industries/agriculture.jpg"
                alt="Agricultural Application"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Key Product Section */}
      <section className="py-2 bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <h2 className="fw-bold mb-3" style={{ color: '#3666cc' }}>
                Key Product Used
              </h2>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">
                  • <strong>Citric Acid (Chelating Agent)</strong>: Enhances micronutrient availability and improves nutrient uptake efficiency in crops.
                </li>
              </ul>
              <h5 className="fw-semibold text-dark mt-4 mb-2">Used In:</h5>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">• Micronutrient fertilizer blends (chelates iron, zinc, magnesium, etc.)</li>
                <li className="mb-3">• Soil conditioners & hydroponic nutrient solutions</li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2942/2942927.png"
                alt="Fertilizer Application"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '360px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

     

      {/* ✅ Key Benefits for Agriculture */}
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
        color: "#3666cc",
        fontSize: "2.4rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Key Benefits for Agriculture
    </h2>

    <Row className="justify-content-center g-4">
      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2909/2909763.png",
          title: "Increases Nutrient Uptake Efficiency",
          desc: "Citric acid binds with micronutrients like Fe, Zn, Mn and Mg to form chelates, which are more readily absorbed by plant roots.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
          title: "Acts as a Natural pH Regulator",
          desc: "Helps maintain optimal soil pH levels for better nutrient availability, particularly in hydroponic systems and alkaline soils.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png",
          title: "Biodegradable & Eco-Friendly",
          desc: "Citric acid is naturally occurring and safe for the environment—ideal for sustainable and organic farming practices.",
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
                color: "#3666cc",
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


      {/* ✅ Contact & Footer */}
      <Contact />
      <Footer />
    </>
  );
};

export default AgricultureFertilizers;
