import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../components/seo';
import Footer from '../components/footer';
import Contact from '../components/contact';
import metadata from '../data/metaData';
import RefineryClaySupplier from '../assests/refinery-clay-supp.png';

const AboutUs = () => {
  return (
    <>
      
       {/* ✅ Meta Tags for SEO */}
      <Seo meta={metadata.aboutUs} />
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3">About N&T Refinery Clay Supplier</h1>
              <p className="lead text-light">
                A global leader in high-quality industrial clay solutions, driving sustainability and excellence
                across industries.
              </p>
            </div>
            <div className="col-md-6 text-center">
             <img
                       src={RefineryClaySupplier} 
                       alt="water treatment plant"
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

      {/* ✅ Company Background Section - Styled Attractively */}
<section
  className="py-5"
  style={{
    background: 'linear-gradient(135deg, #f4f8ff, #e6f0ff)',
    color: '#003366',
  }}
>
  <div className="container">
    <h2
      className="text-center fw-bold mb-4"
      style={{ fontSize: '2.2rem', color: '#3366cc' }}
    >
      Company Background
    </h2>

    <div
      className="mx-auto"
      style={{
        maxWidth: '900px',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        lineHeight: '1.8',
        fontSize: '1.1rem',
      }}
    >
      <p>
        <strong>N&T Refinery Clay Supplier</strong> has earned a reputation as a trusted name in
        industrial clay and specialty chemical products for over a decade. Our journey began with
        a vision to deliver high-quality solutions tailored to the needs of the refining,
        processing and environmental sectors.
      </p>
      <p>
        With a global footprint and operations in multiple countries, we proudly serve clients
        across industries such as edible oil refining, food processing, petrochemical manufacturing,
        and environmental remediation.
      </p>
      <p>
        Backed by a dedicated team of experts and a strong commitment to innovation, quality,
        and sustainability, we strive to exceed client expectations and build long-term partnerships
        based on trust and performance.
      </p>
    </div>
  </div>
</section>
 {/* ✅ Our Capabilities */}
<section className="py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-4" style={{ color: '#3366cc' }}>
      Our Capabilities
    </h2>
    <div className="table-responsive">
      <table className="table table-bordered table-striped bg-white rounded shadow-sm overflow-hidden">
        <thead className="table-light text-center">
          <tr>
            <th style={{ width: '35%' }}>Capability</th>
            <th>What It Means for You</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Certified Sourcing</td>
            <td>Products from ISO, REACH, FSSAI and HACCP-compliant factories</td>
          </tr>
          <tr>
            <td>Bulk Stockholding</td>
            <td>No production delays — ready-to-dispatch inventories</td>
          </tr>
          <tr>
            <td>Custom Branding & Packaging</td>
            <td>OEM and private label options for your brand’s global market</td>
          </tr>
          <tr>
            <td>End-to-End Logistics</td>
            <td>Door-to-port and port-to-port delivery across 60+ countries</td>
          </tr>
          <tr>
            <td>24/7 Support & After-Sales</td>
            <td>Direct access to your export manager for updates & coordination</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


     {/* ✅ Mission, Vision & Values */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: '#3366cc' }}>
      Our Values, Vision & Mission
    </h2>

    <div className="row justify-content-center text-center">
      {/* Card 1 - Values */}
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
        <div
          className="p-4 bg-white rounded-4 h-100 d-flex flex-column align-items-center w-100"
          style={{
            border: '1px solid #eee',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <div
            className="mb-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{
              backgroundColor: '#fff7e6',
              width: '100px',
              height: '100px',
            }}
          >
            {/* Example: Bootstrap Icon */}
            <i
              className="bi bi-heart-fill"
              style={{ fontSize: '40px', color: '#ff9800' }}
            ></i>
          </div>
          <h4 className="fw-bold mb-3">Our Values</h4>
          <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>
            We are committed to delivering superior quality and performance in every project we
            undertake. We prioritize our clients' needs and work collaboratively to achieve their
            goals.
          </p>
        </div>
      </div>

      {/* Card 2 - Vision */}
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
        <div
          className="p-4 bg-white rounded-4 h-100 d-flex flex-column align-items-center w-100"
          style={{
            border: '1px solid #eee',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <div
            className="mb-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{
              backgroundColor: '#e6f7ff',
              width: '100px',
              height: '100px',
            }}
          >
            <i
              className="bi bi-eye-fill"
              style={{ fontSize: '40px', color: '#2196f3' }}
            ></i>
          </div>
          <h4 className="fw-bold mb-3">Our Vision</h4>
          <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>
            To be the global leader in cement plant engineering and manufacturing, recognized for
            innovation, quality and sustainable practices while exceeding client expectations.
          </p>
        </div>
      </div>

      {/* Card 3 - Mission */}
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
        <div
          className="p-4 bg-white rounded-4 h-100 d-flex flex-column align-items-center w-100"
          style={{
            border: '1px solid #eee',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <div
            className="mb-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{
              backgroundColor: '#f0f5ff',
              width: '100px',
              height: '100px',
            }}
          >
            <i
              className="bi bi-flag-fill"
              style={{ fontSize: '40px', color: '#673ab7' }}
            ></i>
          </div>
          <h4 className="fw-bold mb-3">Our Mission</h4>
          <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>
            To provide comprehensive, high-quality turnkey cement plant solutions that enhance
            efficiency and effectiveness of cement production.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

 <section className="team-section py-5">
      <div className="container">
        {/* Section Heading & Intro */}
        <h2 className="text-center fw-bold mb-4" style={{ color: '#3666cc' }}>Our Leadership Team</h2>
        <p className="section-intro text-center">
          At N&T Refinery Clay Supplier, our leadership is the driving force behind our commitment to excellence. 
          With decades of combined experience in the chemical and refining industry, they bring vision, innovation, 
          and dedication to every project.
        </p>

        <div className="row justify-content-center">
          {/* Team Member 1 */}
          <div className="col-md-5 text-center mb-4">
            <div className="team-card">
              <div className="team-img-wrapper">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="John Smith"
                  className="team-img"
                />
              </div>
              <h5 className="team-name">John Smith</h5>
              <a href="#" className="linkedin-btn">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <p className="team-role">Managing Director</p>
              <p className="team-bio">
                John has over 20 years of experience leading large-scale industrial operations, 
            driving innovation and ensuring world-class quality. He has successfully led 
            projects across multiple continents, building strong client relationships and 
            implementing sustainable business practices. John's vision focuses on expanding 
            global presence while maintaining core values of trust, integrity and excellence.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-5 text-center mb-4">
            <div className="team-card">
              <div className="team-img-wrapper">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Sarah Johnson"
                  className="team-img"
                />
              </div>
              <h5 className="team-name">Sarah Johnson</h5>
              <a href="#" className="linkedin-btn">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <p className="team-role">Operations Head</p>
              <p className="team-bio">
                Sarah brings 15 years of expertise in quality management systems, ISO certifications, 
            and process optimization. She has led multiple teams in implementing advanced 
            laboratory testing procedures and compliance protocols. Sarah’s dedication ensures 
            that every product meets the highest safety, purity and performance standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Inside JSX */}
      <style>{`
        .section-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: #3366cc;
          margin-bottom: 10px;
          margin-left:400px
        }
        .section-intro {
          font-size: 1.1rem;
          color: #555;
          max-width: 750px;
          margin: 0 auto 50px;
          line-height: 1.7;
        }
        .team-card {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.12);
        }
        .team-img-wrapper {
          background: #c3cee8; /* colored background behind image */
          display: inline-block;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        .team-img {
          width: 100%;
          max-width: 230px;
          height: auto;
          border-radius: 10px;
        }
        .team-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #28a745; /* green name */
          margin-top: 10px;
          margin-bottom: 5px;
        }
        .linkedin-btn {
          display: inline-block;
          color: #28a745;
          border: 1px solid #28a745;
          padding: 5px 15px;
          border-radius: 25px;
          font-size: 0.9rem;
          text-decoration: none;
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }
        .linkedin-btn:hover {
          background: #28a745;
          color: #fff;
        }
        .team-role {
          color: #777;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .team-bio {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .team-img {
            max-width: 200px;
          }
        }
      `}</style>
    </section>

      {/* ✅ Global Presence Section */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-4" style={{ color: '#3666cc' }}>
      Global Presence
    </h2>
    <p className="lead text-center mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      N&T Refinery Clay Supplier has built a robust global supply chain and service network to support our clients worldwide.
      From Asia to Europe and the Middle East, our logistics, warehousing and distribution partners ensure that our
      high-quality clay products are delivered reliably and efficiently—on time, every time.
    </p>

    <div className="row text-center mt-5">
      <div className="col-md-4 mb-4">
        <div className="p-4 shadow-sm bg-white rounded h-100">
          <h5 className="fw-bold mb-2">Asia</h5>
          <p style={{ fontSize: '0.95rem' }}>
            Operational bases in India, Indonesia and UAE, serving refineries and manufacturers across Southeast and South Asia.
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="p-4 shadow-sm bg-white rounded h-100">
          <h5 className="fw-bold mb-2">Europe</h5>
          <p style={{ fontSize: '0.95rem' }}>
            Strategic distribution hubs in Germany and the Netherlands enable seamless delivery across the EU.
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="p-4 shadow-sm bg-white rounded h-100">
          <h5 className="fw-bold mb-2">Middle East</h5>
          <p style={{ fontSize: '0.95rem' }}>
            Strong partnerships in Saudi Arabia, Oman and Qatar allow us to meet the regional demand for high-performance clay.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* ✅ Factory & Logistics Capabilities */}
<section className="section-wrapper bg-light">
  <div className="container-custom">
    <h2 className="text-center fw-bold mb-4" style={{ color: '#3666cc' }}>Factory & Logistics Capabilities</h2>
    <p className="section-lead">
      Our advanced manufacturing plant is equipped with modern technology and automated processes to ensure consistent
      product quality. Located strategically near major ports and industrial zones, our facility supports high-volume
      output with minimal lead times.
    </p>
    <p className="section-text">
      Our in-house logistics team works with certified freight partners and global shipping lines to guarantee on-time
      deliveries across continents. With robust warehousing infrastructure, real-time tracking and export-ready
      documentation (ISO, MSDS, COA), we handle every step from production to delivery with precision and compliance.
    </p>
  </div>
</section>

{/* ✅ Leadership Team */}
<section className="section-wrapper">
  <div className="container-custom">
    <h2 className="text-center fw-bold mb-4" style={{ color: '#3666cc' }}>Leadership Team</h2>
    <p className="section-lead">
      The driving force behind N&T Refinery Clay Supplier is a dynamic team of professionals with a shared passion for
      excellence. Our founders bring 20+ years of experience in the chemical and refining sectors, combining technical
      know-how with strategic global vision.
    </p>
    <p className="section-text">
      Our leadership promotes a culture of innovation, safety and sustainability. They continuously invest in R&D,
      employee development and global partnerships to ensure N&T remains a leading force in industrial supply chains.
    </p>
  </div>
</section>

{/* ✅ Partner Brands */}
<section className="section-wrapper bg-light">
  <div className="container-custom">
    <h2 className="text-center fw-bold mb-4" style={{ color: '#3666cc' }}>Partner Brands</h2>
    <p className="section-lead">
      We proudly partner with some of the most trusted brands in the refining, food processing and environmental
      industries. These collaborations allow us to offer a diverse portfolio of high-performance products and tailored
      solutions to our clients worldwide.
    </p>
    <p className="section-text">
      By aligning with market leaders and innovators, N&T strengthens its capabilities, shares technical insights and
      drives mutual growth. Our partners trust us for our consistent quality, ethical standards and long-term vision.
    </p>
  </div>
</section>

{/* 🎨 Premium Inline CSS */}
<style>{`
  .section-wrapper {
    padding: 70px 20px;
    transition: background 0.4s ease, transform 0.3s ease;
  }
  .bg-light {
    background: linear-gradient(145deg, #f9fafc, #ffffff);
  }
  .container-custom {
    max-width: 900px;
    margin: auto;
    text-align: center;
    background: #ffffff;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .container-custom:hover {
    box-shadow: 0 12px 35px rgba(0,0,0,0.08);
    transform: translateY(-5px);
  }
  .section-title {
  
  font-weight: bold;
  margin-bottom: 1.5rem; /* same as mb-4 in Bootstrap */
  color: #3666cc;
  font-size: 2rem;
}

.section-title::after {
  content: none; /* remove the underline animation */
}
  }
  @keyframes underlineExpand {
    from { width: 0; }
    to { width: 80px; }
  }
  .section-lead {
    font-size: 1.25rem;
    font-weight: 500;
    color: #444;
    margin-bottom: 20px;
    line-height: 1.7;
  }
  .section-text {
    font-size: 1.05rem;
    color: #666;
    line-height: 1.8;
  }
  .section-wrapper:hover {
    background: linear-gradient(145deg, #eef4ff, #ffffff);
  }
`}</style>



      {/* ✅ Contact Form */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
