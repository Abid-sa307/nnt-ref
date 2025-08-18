import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Seo from './seo';
import Footer from './footer';
import Contact from './contact';

const industries = [
  {
    title: 'Edible Oil Refineries',
    image: '/assets/industries/edible-oil.jpg',
    description: 'Enhancing oil purification and removing impurities in edible oil production.',
    link: '/industries/edible-oil-refineries',
  },
  {
    title: 'Soap & Detergent Manufacturers',
    image: '/assets/industries/soap.jpg',
    description: 'Providing adsorbents for removing contaminants and improving clarity.',
    link: '/industries/soap-&-detergent-manufacturers',
  },
  {
    title: 'Water Treatment Plants',
    image: '/assets/industries/water-treatment.jpg',
    description: 'Used for filtration and contaminant removal in municipal and industrial water.',
    link: '/industries/water-treatment-plant',
  },
  {
    title: 'Food & Beverage Industry',
    image: '/assets/industries/food-beverage.jpg',
    description: 'Used in purification and clarification of juices, syrups and ingredients.',
    link: '/industries/food-&-beverage-industry',
  },
  {
    title: 'Petrochemical Industry',
    image: '/assets/industries/petrochemical.jpg',
    description: 'Refining support for catalyst treatment and impurity removal in hydrocarbons.',
    link: '/industries/petrochemical-industry',
  },
  {
    title: 'Pharmaceutical Manufacturing',
    image: '/assets/industries/pharmaceutical.jpg',
    description: 'Used as a filtration aid in drug synthesis and biological applications.',
    link: '/industries/pharmaceutical-manufacturing',
  },
  {
     title: 'Beverage & Juice Plants',
    image: '/assets/industries/Beverage.jpg',
    description: 'Used as a filtration aid in drug synthesis and biological applications.',
    link: '/industries/beverage-&-juice-plants',
  },
{
   title: 'Agriculture & Fertilizers',
    image: '/assets/industries/Agriculture.jpg',
    description: 'Used as a filtration aid in drug synthesis and biological applications.',
    link: '/industries/agriculture-&-fertilizers',
}
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
           Industries We Serve
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


     

     <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center  fw-bold mb-5" style={{ color: '#3366cc' }}>Explore Our Industrial Reach</h2>

    <div className="row g-4 justify-content-center">
      {industries.map((industry, index) => {
        const isInternalLink = industry.link.startsWith('/industries/');

        const CardContent = (
          <div
            className="card h-100 shadow-sm border-0 rounded-4"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              height: '100%',
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
            <div className="card-body text-center d-flex flex-column justify-content-between">
              <h5 className="card-title text-dark fw-semibold mb-2">{industry.title}</h5>
              <p className="small text-muted mb-3">{industry.description}</p>
            </div>
          </div>
        );

        // ✅ For last two cards, wrap in col with flex centering
        const isLastTwo = index >= industries.length - 2;
        return (
          <div
            key={index}
            className={`col-sm-6 col-lg-4 ${isLastTwo ? 'd-flex justify-content-center' : ''}`}
          >
            {isInternalLink ? (
              <Link to={industry.link} className="text-decoration-none">
                {CardContent}
              </Link>
            ) : (
              <a
                href={industry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {CardContent}
              </a>
            )}
          </div>
        );
      })}
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
