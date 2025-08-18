import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { WaterTreatmentMeta } from '../data/metaData';

const WaterTreatmentPlant = () => {
  return (
    <>
      <Seo meta={WaterTreatmentMeta} />

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
                Water Treatment & Effluent Plants
              </h1>
              <p className="lead text-light">
                High-efficiency solutions for safe water recycling, wastewater management and environmental compliance.
              </p>
            </Col>

            {/* Right Image */}
            <Col md={6} className="text-center">
              <img
                src="/assets/industries/water-treatment.jpg"
                alt="Water Treatment Plant"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

    {/* ✅ Key Products Used */}
<section
  className="py-5"
  style={{
    backgroundColor: "#f9fbff",
    fontFamily: "'Merriweather Sans', sans-serif",
  }}
>
  <Container>
    <Row className="align-items-center g-5">
      {/* ✅ Left Side - Detailed Text */}
      <Col md={6}>
        <h2
          className="fw-bold mb-4"
          style={{
            // background: "linear-gradient(90deg, #0077b6, #00b4d8)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            // fontSize: "2.4rem",
            // fontFamily: "'Poppins', sans-serif",
            color: "#3666cc", // ✅ Solid heading color
    fontSize: "2.4rem",
    fontFamily: "'Poppins', sans-serif",
          }}
        >
          Key Products Used
        </h2>
        <ul className="list-unstyled">
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2913/2913461.png",
              title: "Citric Acid",
              desc: "A naturally occurring organic acid widely used in water treatment for its ability to chelate heavy metals and dissolve mineral deposits. It helps remove limescale from pipes and heat exchangers, improving efficiency and prolonging equipment lifespan.",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2821/2821637.png",
              title: "Filter Aid Powder",
              desc: "A fine powder used in filtration systems to enhance solid-liquid separation. It improves sludge dewatering, clarifies liquids and increases filter capacity, ensuring smoother and faster processing in industrial operations.",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2913/2913461.png",
              title: "Caustic Soda Flakes",
              desc: "A strong alkaline compound essential for pH adjustment and effluent alkalinity control. It plays a crucial role in neutralizing acids, breaking down organic matter and optimizing water chemistry for safe discharge.",
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
                alt={item.title}
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

      {/* ✅ Right Side - Image */}
      <Col md={6} className="text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2167/2167735.png"
          alt="Water Treatment Chemicals"
          className="img-fluid rounded-4 shadow"
          style={{
            maxHeight: "360px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Col>
    </Row>
  </Container>
</section>

{ /* Industry Benefits */}
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
        // background: "linear-gradient(90deg, #0077b6, #00b4d8)",
        // WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        // fontSize: "2.4rem",
        // fontFamily: "'Poppins', sans-serif",
         color: "#3666cc", // ✅ Solid heading color
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
          desc: "Lower BOD in treated water enhances biodegradability and reduces the strain on natural water bodies. This ensures regulatory compliance while protecting aquatic ecosystems from oxygen depletion.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
          title: "Effective Filtration with Lower Chemical Usage",
          desc: "Advanced treatment processes achieve superior clarity while minimizing chemical dosage, resulting in lower operational costs, reduced sludge production and improved sustainability.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Scalable for All Systems",
          desc: "Formulations can be tailored for small-scale industrial units or large municipal plants, offering flexibility to meet varied flow capacities and water quality requirements.",
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

    {/* ✅ Why Purchase From N&T */}
<section
  className="py-5"
  style={{
    backgroundColor: "#ffffff",
    fontFamily: "'Merriweather Sans', sans-serif",
  }}
>
  <Container>
    <h2
      className="text-center fw-bold mb-5"
      style={{
        // background: "linear-gradient(90deg, #0077b6, #00b4d8)",
        // WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        // fontSize: "2.4rem",
        // fontFamily: "'Poppins', sans-serif",
         color: "#3666cc", // ✅ Solid heading color
    fontSize: "2.4rem",
    fontFamily: "'Poppins', sans-serif",

      }}
    >
      Why Choose N&T for Water Treatment
    </h2>

    <Row className="justify-content-center g-4">
      {[
        {
          icon: "https://cdn-icons-png.flaticon.com/512/4303/4303661.png",
          title: "Tailored Dosages",
          desc: "We analyze your water chemistry reports to provide precise dosing recommendations, ensuring optimal treatment performance without chemical wastage.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3643/3643914.png",
          title: "Reliable 24/7 Supply",
          desc: "Our logistics network ensures timely delivery so your plant never experiences downtime due to chemical shortages.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3514/3514579.png",
          title: "High-Purity Chemicals",
          desc: "We supply only top-grade chemicals, eliminating the risk of downstream contamination and maintaining consistent product quality.",
        },
      ].map((item, idx) => (
        <Col md={4} key={idx}>
          <div
            className="p-4 h-100 text-center rounded shadow-sm"
            style={{
              backgroundColor: "#f9fbfd",
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
                width: "55px",
                height: "55px",
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

export default WaterTreatmentPlant;
