import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-5 border-bottom pb-3">
        🌍 Industries We Serve
      </h2>

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
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.1)';
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
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-dark fw-semibold">
                    {industry.title}
                  </h5>
                  <p className="text-primary small mb-0">📄 View Brochure</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesServed;
