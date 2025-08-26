import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { CitricAcidMeta } from "../data/metaData";
import FoodAndBeverage from '../static/images/foodandbeverage.png'
import CitricAcid from '../static/images/citric-acid.jpg'

const FoodAndBeverageIndustry = () => {
  return (
    <>
      <Seo meta={CitricAcidMeta} />

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
                Food & Beverage Processing
              </h1>
              <p className="lead text-light">
                Quality-assured ingredients for taste, safety and shelf life in the food and beverage industry.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={FoodAndBeverage}
                alt="Food Processing"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Key Product */}
<section className="py-5 bg-white">
  <Container>
    <Row className="align-items-center g-5">
      {/* Text Section */}
      <Col md={6}>
        <h2
          className="fw-bold mb-4"
          style={{
            color: "#3666cc",
            fontSize: "2rem",
            letterSpacing: "0.5px",
          }}
        >
          Key Product: Citric Acid (Food Grade)
        </h2>
        <p className="text-secondary mb-4" style={{ fontSize: "1.1rem" }}>
          Citric Acid is one of the most versatile and widely used food
          additives in the industry. Known for its natural sour taste, it is
          used across beverages, confectionery, sauces and bakery products.
          Beyond flavor, it serves as a preservative, emulsifier and pH
          stabilizer—making it an essential ingredient for both quality and
          safety.
        </p>
        <ul className="list-unstyled fs-5 text-dark">
          <li className="mb-4 d-flex align-items-start">
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                backgroundColor: "#3666cc",
                borderRadius: "50%",
                marginTop: "10px",
                marginRight: "15px",
                flexShrink: 0,
              }}
            ></span>
            <div>
              <strong>Multi-Purpose Functionality:</strong> Works as a flavor
              enhancer, preservative, acidulant and emulsifier in a single
              ingredient.
            </div>
          </li>
          <li className="mb-4 d-flex align-items-start">
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                backgroundColor: "#3666cc",
                borderRadius: "50%",
                marginTop: "10px",
                marginRight: "15px",
                flexShrink: 0,
              }}
            ></span>
            <div>
              <strong>Safe & Approved:</strong> GRAS certified, meeting
              stringent food safety standards worldwide.
            </div>
          </li>
        </ul>
      </Col>

      {/* Image Section */}
      <Col md={6} className="text-center">
        <img
          src={CitricAcid}
          alt="Citric Acid"
          className="img-fluid rounded-4 shadow"
          style={{
            maxHeight: "340px",
            objectFit: "cover",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
        />
      </Col>
    </Row>
  </Container>
</section>

{/* ✅ Benefits to the Food Industry */}
<section
  className="py-5"
  style={{
    background: "linear-gradient(180deg, #f9fbff, #eef5ff)",
    fontFamily: "'Merriweather Sans', sans-serif",
  }}
>
  <Container>
    {/* Heading */}
    <h2
      className="text-center fw-bold mb-5"
      style={{
        color: "#3666cc",
        fontSize: "2.4rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Benefits to the Food Industry
    </h2>

    <Row className="justify-content-center g-4">
      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
          title: "Refreshing Tangy Flavor",
          desc: "Adds a pleasant tangy taste to beverages, candies, sauces and baked goods, enhancing overall flavor profiles.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2909/2909763.png",
          title: "Natural Preservative",
          desc: "Inhibits microbial growth naturally, extending product shelf life without synthetic additives.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3570/3570168.png",
          title: "pH Balance & Stability",
          desc: "Maintains optimal acidity to ensure consistent taste, texture and product quality.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
          title: "GRAS Certified",
          desc: "Recognized as safe for consumption, ensuring full compliance with food safety regulations.",
        },
      ].map((item, idx) => (
        <Col md={3} sm={6} key={idx}>
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

{/* ✅ Certifications */}
<section className="py-5 bg-white">
  <Container>
    <h2
      className="text-center fw-bold mb-4"
      style={{
        color: "#3666cc",
        fontSize: "2rem",
        letterSpacing: "0.5px",
      }}
    >
      Importance of Certified Food-Grade Supply
    </h2>
    <p className="text-center text-secondary mb-5" style={{ fontSize: "1.1rem" }}>
      Quality assurance in food manufacturing starts with certified
      ingredients. Our food-grade citric acid undergoes strict safety testing
      and meets international compliance standards to ensure purity,
      consistency and consumer trust.
    </p>
    <Row className="justify-content-center">
      <Col md={10}>
        <ul className="list-unstyled fs-5 text-dark" style={{ lineHeight: "1.8" }}>
          <li className="mb-3">✔ Batch-tested for microbial and heavy metal content</li>
          <li className="mb-3">✔ Allergen-free, non-GMO, Halal and Kosher certified</li>
          <li className="mb-3">✔ Available in custom granulation for powders, crystals and tablets</li>
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

const dotStyle = {
  width: "8px",
  height: "8px",
  marginTop: "10px",
  marginRight: "15px",
  backgroundColor: "#558b2f",
  borderRadius: "50%",
  display: "inline-block",
  flexShrink: 0,
};

export default FoodAndBeverageIndustry;
