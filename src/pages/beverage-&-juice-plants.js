import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { BeverageJuicePlantsMeta } from '../data/metaData'; // Don't forget to define this in metaData.js

const BeverageJuicePlants = () => {
  return (
    <>
      <Seo meta={BeverageJuicePlantsMeta} />

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
                Beverage & Juice Plants
              </h1>
              <p className="lead text-light">
                Enhance the taste, shelf life and appeal of your beverages with high-purity citric acid formulated for liquid refreshments.
              </p>
            </Col>

            <Col md={6} className="text-center">
              <img
                src="/assets/industries/beverages.jpg"
                alt="Beverage Processing"
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
                Citric Acid for Taste and Stability
              </h2>
              <p className="text-secondary mb-4">
                Our food-grade citric acid delivers the consistent tartness and preservation benefits essential for beverage production — from juices to carbonated drinks.
              </p>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">• <strong>Citric Acid (Food Grade)</strong>: For beverages, syrups and fruit concentrates</li>
              </ul>
            </Col>

            <Col md={6} className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1827/1827357.png"
                alt="Citric Acid in Juice"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Benefits in Beverage Formulations */}
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
      Benefits in Beverage Formulations
    </h2>

    <Row className="justify-content-center g-4">
      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/4150/4150914.png", // Flavor control
          title: "Consistent Tartness & Flavor",
          desc: "Ensures standardized taste across production batches, crucial for soft drinks and citrus-based juices.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", // Preservative shield
          title: "Natural Preservative",
          desc: "Helps lower pH, delaying microbial growth and reducing reliance on synthetic additives.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png", // Freshness
          title: "Enhances Shelf Stability",
          desc: "Acts as a chelating agent to prevent oxidation and discoloration, keeping beverages fresh and appealing.",
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

{/* ✅ Benefits to the Industry
<section
  className="py-5"
  style={{
    background: "#ffffff",
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
          icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          title: "Reduced Biological Oxygen Demand (BOD)",
          desc: "Lower BOD in treated water enhances biodegradability and reduces strain on natural water bodies, ensuring compliance and ecosystem protection.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
          title: "Effective Filtration with Lower Chemical Usage",
          desc: "Achieves superior clarity with minimal chemical dosage, lowering costs and reducing sludge output.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Scalable for All Systems",
          desc: "Suitable for both small beverage units and large bottling plants, offering flexibility and efficiency.",
        },
      ].map((item, idx) => (
        <Col md={4} key={idx}>
          <div
            className="p-4 h-100 text-center rounded shadow-sm"
            style={{
              backgroundColor: "#f9fbff",
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
</section> */}


      {/* ✅ Why Choose N&T */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-4" style={{ color: '#3366cc' }}>
            Why Beverage Plants Trust N&T
          </h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">• Food-safe processing and packaging</li>
                <li className="mb-3">• Complies with FSSAI, FDA and EFSA standards</li>
                <li className="mb-3">• Uniform granule size ensures consistent mixing</li>
                <li className="mb-3">• Fast dispatch and technical documentation support</li>
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

export default BeverageJuicePlants;
