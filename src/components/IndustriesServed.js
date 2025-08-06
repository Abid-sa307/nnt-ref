import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../components/seo';
import Footer from '../components/footer';
import Contact from '../components/contact';

const industries = [
  {
    title: 'Edible Oil Refineries',
    image: '/assets/industries/edible-oil.jpg',
    link: '/brochures/edible-oil.pdf',
  },
  {
    title: 'Soap & Detergent Manufacturers',
    image: '/assets/industries/soap.jpg',
    link: '/brochures/soap-detergent.pdf',
  },
  {
    title: 'Water Treatment Plants',
    image: '/assets/industries/water-treatment.jpg',
    link: '/brochures/water-treatment.pdf',
  },
  {
    title: 'Food & Beverage Industry',
    image: '/assets/industries/food-beverage.jpg',
    link: '/brochures/food-beverage.pdf',
  },
  {
    title: 'Petrochemical Industry',
    image: '/assets/industries/petrochemical.jpg',
    link: '/brochures/petrochemical.pdf',
  },
  {
    title: 'Pharmaceutical Manufacturing',
    image: '/assets/industries/pharmaceutical.jpg',
    link: '/brochures/pharmaceutical.pdf',
  },
];

const IndustriesServed = () => {

  
  return (
    <>
      <Seo meta={{ title: 'Industries Served | N&T Refinery Chemicals' }} />

      {/* ✅ Industries Served Hero Section */}
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
      {/* ✅ Left Side - Content */}
      <div className="col-md-6 text-white text-center text-md-start">
        <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
          🌍 Industries We Serve
        </h1>
        <p className="lead text-light">
          Delivering high-performance chemical solutions across diverse sectors — from edible oil refineries to pharmaceutical manufacturing. Trusted by partners in 50+ countries.
        </p>
      </div>

      {/* ✅ Right Side - Styled Placeholder Box */}
      <div className="col-md-6 text-center">
        <div
          className="rounded-4 shadow-sm d-flex align-items-center justify-content-center"
          style={{
            height: '400px',
            backgroundColor: '#ffffff33',
            color: '#fff',
            fontSize: '1.25rem',
            fontWeight: '500',
          }}
        >
          Industry Applications Visual Preview
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ✅ Industry Cards Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-5">Explore Our Industrial Reach</h2>
          <div className="row g-4">
            {industries.map((industry, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                <a
                  href={industry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div
                    className="card h-100 shadow-sm border-0 rounded-4"
                    style={{
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,0.05)';
                    }}
                  >
                    <img
                      src={industry.image}
                      className="card-img-top"
                      alt={industry.title}
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '1rem',
                        borderTopRightRadius: '1rem',
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title text-dark fw-semibold">{industry.title}</h5>
                      <p className="text-primary small mb-0">📄 View Brochure</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Contact / Quote Form */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default IndustriesServed;
