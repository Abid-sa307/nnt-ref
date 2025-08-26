import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { EdibleOilRefineriesMeta } from '../data/metaData';
import EdibleOil from '../static/images/edible.png';
import CausticSodaFlakes from "../static/images/caustic-soda.jpg";

const EdibleOilRefineries = () => {
  return (
    <>
      <Seo meta={EdibleOilRefineriesMeta} />

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
                Edible Oil Refineries
              </h1>
              <p className="lead text-light">
                High-performance chemical solutions for efficient refining, decolorizing and purification in edible oil industries.
              </p>
            </Col>

            {/* Right Image */}
            <Col md={6} className="text-center">
              <img
                src={EdibleOil}
                alt="Edible Oil Refinery"
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
        <h2 className="fw-bold mb-3 " style={{ color: '#3366cc' }}>Trusted Chemicals for Purity and Performance</h2>
        <p className="text-secondary mb-4">
          We supply quality-assured materials used to enhance the clarity, stability and safety of edible oils.
          Leading oil refineries choose our products for their proven efficiency and compliance.
        </p>
        <ul className="list-unstyled fs-5 text-secondary">
          <li className="mb-3">• <strong>Bleaching Earth</strong>: Removes color pigments & absorbs impurities</li>
          <li className="mb-3">• <strong>Caustic Soda Flakes</strong>: Used for neutralization and degumming</li>
          <li className="mb-3">• <strong>Filter Aid Powder</strong>: Ensures high filtration clarity & flow rate</li>
        </ul>
      </Col>

      {/* Right - Image */}
      <Col md={6} className="text-center">
        <img
          src={CausticSodaFlakes}
          alt="Oil Refinery Chemicals"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: '360px', objectFit: 'cover' }}
        />
      </Col>
    </Row>
  </Container>
</section>
    <section className="py-5 bg-light">
      <Container>
        <h2
          className="text-center fw-bold mb-4"
          style={{ color: '#3366cc', fontFamily: '"Segoe UI", "Roboto", "Helvetica", sans-serif' }}
        >
           Benefits to the Industry
        </h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <ul
              className="list-unstyled"
              style={{
                fontSize: '1.1rem',
                color: '#555',
                fontFamily: '"Segoe UI", "Roboto", "Helvetica", sans-serif',
                lineHeight: '1.8',
              }}
            >
              <li className="mb-4 d-flex">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    marginTop: '10px',
                    marginRight: '15px',
                    backgroundColor: '#3366cc',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                ></span>
                <div>
                  <strong>Significantly Improves Oil Clarity and Taste Profile:</strong>  
                  <br />
                  Our specialized chemical products like bleaching earth and caustic soda remove impurities, color pigments and unwanted odor compounds during the refining process. This results in crystal-clear oil with a neutral flavor, enhancing the final product's appeal for end consumers.
                </div>
              </li>

              <li className="mb-4 d-flex">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    marginTop: '10px',
                    marginRight: '15px',
                    backgroundColor: '#3366cc',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                ></span>
                <div>
                  <strong>Prolongs Shelf Life by Reducing Oxidative Compounds:</strong>  
                  <br />
                  By effectively reducing peroxides, free fatty acids and other oxidation-prone molecules, our products help slow down rancidity. This ensures the refined oil maintains freshness, stability and quality throughout extended storage and distribution.
                </div>
              </li>

              <li className="mb-4 d-flex">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    marginTop: '10px',
                    marginRight: '15px',
                    backgroundColor: '#3366cc',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                ></span>
                <div>
                  <strong>Helps Meet FSSAI and EU Regulatory Compliance:</strong>  
                  <br />
                  Our high-purity materials assist refineries in achieving the stringent safety, quality and purity standards set by food regulatory bodies like FSSAI (India) and EFSA (Europe). This ensures the refined edible oils are safe for consumption and export-ready.
                </div>
              </li>

              <li className="mb-4 d-flex">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    marginTop: '10px',
                    marginRight: '15px',
                    backgroundColor: '#3366cc',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                ></span>
                <div>
                  <strong>Enhances Throughput and Minimizes Processing Delays:</strong>  
                  <br />
                  Our products are engineered for fast filtration and high adsorption efficiency, minimizing downtime during processing. This helps increase production efficiency, reduces waste and lowers operational costs for refinery operators.
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>





      <section className="py-5 bg-white">
  <Container>
    <h2 className="text-center  fw-bold mb-4" style={{ color: '#3366cc' }}>Why Leading Refineries Choose N&T</h2>
    <Row className="justify-content-center">
      <Col md={10}>
        <ul className="list-unstyled fs-5 text-secondary">
          <li className="mb-3">• Consistent product quality across batches</li>
          <li className="mb-3">• Low-moisture Bleaching Earth ensures high absorption</li>
          <li className="mb-3">• Tailored pore structure captures specific impurities</li>
          <li className="mb-3">• Short lead times and responsive client support</li>
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

export default EdibleOilRefineries;
