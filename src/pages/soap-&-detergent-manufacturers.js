import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { SoapAndDetergentMeta } from "../data/metaData";

const SoapAndDetergentManufacturers = () => {
  return (
    <>
      <Seo meta={SoapAndDetergentMeta} />

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
                Soap & Detergent Manufacturing
              </h1>
              <p className="lead text-light">
                Reliable chemical ingredients for effective, stable and high-performance cleaning formulations.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/assets/industries/soap-detergent.jpg"
                alt="Soap & Detergent"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

    <section className="py-5 bg-white">
  <Container>
    <Row className="align-items-center g-5">
      {/* Left - Content */}
      <Col md={6}>
        <h2 className="fw-bold mb-3" style={{ color: '#3366cc' }}>
          Key Products Used in Soap Manufacturing
        </h2>
        <p className="text-secondary mb-4">
          We provide premium-grade ingredients for safe, effective and consistent soap production.
          Our materials ensure optimal saponification, long-lasting quality and customer satisfaction.
        </p>
        <ul className="list-unstyled fs-5 text-secondary">
          <li className="mb-3">
            • <strong>Caustic Soda Flakes</strong>: Initiates saponification, converting fats & oils into soap and glycerin for strong cleansing and grease removal.
          </li>
          <li className="mb-3">
            • <strong>Citric Acid</strong>: Balances pH, neutralizes lye, softens water and improves texture for smoother lather while extending shelf life.
          </li>
        </ul>
      </Col>

      {/* Right - Image */}
      <Col md={6} className="text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
          alt="Soap Ingredients"
          className="img-fluid rounded-4 shadow"
          style={{
            maxHeight: '340px',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.07) translateY(-5px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1) translateY(0)"}
        />
      </Col>
    </Row>
  </Container>
</section>



    {/* ✅ Benefits to Industry */}
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
        color: "#3666cc", // Solid heading color like water.js
        fontSize: "2.4rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Benefits to the Industry
    </h2>

    <Row className="justify-content-center g-4">
      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
          title: "Stable Soap Formulation",
          desc: "Ensures consistent product quality by preventing separation of ingredients, resulting in longer shelf life and reliable performance.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1071/1071674.png",
          title: "Bright, High-Foaming Detergents",
          desc: "Produces visually appealing detergents with rich, dense foam that enhances cleaning efficiency and user satisfaction.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/609/609361.png",
          title: "Reduced Hardness in Finished Products",
          desc: "Minimizes mineral deposits, creating smoother, gentler products that are easier on skin and fabrics.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
          title: "Enhanced Cleansing & Lather Properties",
          desc: "Improves the soap’s ability to break down dirt, grease and oils while delivering a luxurious, creamy lather.",
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



    {/* ✅ Reliable Supply Importance */}
<section
  className="py-5"
  style={{
    backgroundColor: "#f9fbff",
    fontFamily: "'Merriweather Sans', sans-serif",
  }}
>
  <Container>
    <h2
      className="text-center fw-bold mb-4"
      style={{
        // background: "linear-gradient(90deg, #003366, #3399ff)",
        // WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        // fontSize: "2.4rem",
        // fontFamily: "'Poppins', sans-serif",
         color: "#3666cc", // ✅ Solid heading color
    fontSize: "2.4rem",
    fontFamily: "'Poppins', sans-serif",
      }}
    >
      Why Reliable Chemical Supply Is Crucial
    </h2>
    <Row className="justify-content-center">
      <Col md={10}>
        <ul
          className="list-unstyled"
          style={{
            fontSize: "1.1rem",
            color: "#444",
            lineHeight: "1.8",
          }}
        >
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
              title: "Prevents Costly Batch Rejections",
              desc: "Consistent quality in raw chemical supply ensures that every batch meets the required formulation standards. Inconsistent materials can alter chemical reactions, leading to subpar or unsafe end products that must be discarded—wasting both time and money.",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              title: "Enables Long, Uninterrupted Production Cycles",
              desc: "With a dependable supplier, manufacturers can operate for extended production runs without sudden stoppages. This stability allows for optimized workforce scheduling, reduced downtime and predictable order fulfillment.",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
              title: "Ensures Correct pH for Skin-Safe Formulations",
              desc: "Many personal care and cleaning products require precise pH levels for effectiveness and safety. A reliable supply guarantees that the chemical composition remains consistent, avoiding skin irritation or compromised cleaning performance.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="mb-4 p-4 rounded shadow-sm d-flex align-items-start"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6ecf5",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 3px 10px rgba(0,0,0,0.05)";
              }}
            >
              <img
                src={item.icon}
                alt="icon"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "15px",
                  flexShrink: 0,
                }}
              />
              <div>
                <strong
                  style={{
                    display: "block",
                    color: "#3666cc",
                    fontSize: "1.2rem",
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </strong>
                {item.desc}
              </div>
            </li>
          ))}
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

export default SoapAndDetergentManufacturers;
