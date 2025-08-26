
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsPreview from './Productpreview.js';
import WhyChooseUs from './Whychooseus.js';
import LatestBlogs from './Latestblog.js';
//import HeroImage from '../Assests/hero-image.png';
import HeroImage from '../assests/refinery-clay-supp.png';
import Footer from './footer.js';
import Contact from './contact.js';
import Seo from '../components/seo';
import { HomeMeta } from '../data/metaData';
import EdibleOil from '../static/images/edible.png';
import WaterTreatment from '../static/images/water-treatment.png';
import SoapDetergent from '../static/images/soap-&-detergent.png';

// ✅ Hero Banner
const HeroBanner = () => (
  <section
    className="hero-section d-flex align-items-center"
    style={{
      paddingTop: '100px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #005b96, #6db3f2)',
      paddingBottom: '60px',
      position: 'relative',
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        {/* Left side - Text */}
        <div className="col-md-6 text-white text-center text-md-start">
          <h1 className="display-5 fw-bold mb-5" style={{ lineHeight: '1.3', color: '#fff' }}>
            Global Supplier of Caustic Soda, Bleaching Earth & High-Purity Industrial Chemicals
          </h1>
          <p className="lead" style={{ color: '#e0e0e0' }}>
            Your reliable source for premium-grade refinery chemicals and raw materials with a proven global logistics network. Trusted by partners in 50+ countries.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="col-md-6 text-center">
          <img
            src={HeroImage}
            alt="Refinery Chemical Plant"
            className="img-fluid hero-img"
            style={{
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

// ✅ Industries Served
const IndustriesServed = () => (
  <section className="py-5 industries-section">
    <div className="container text-center">
      <h2 className="mb-4 fw-bold section-heading">
        Industries That Rely on Our Products
      </h2>

      {/* ✅ Industry Cards with Images */}
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card industry-card h-100">
            <img
              src= {EdibleOil}
              className="card-img-top"
              alt="Edible Oil Refineries"
            />
            <div className="card-body">
              <h5 className="card-title">Edible Oil Refineries</h5>
              <p className="card-text">
                Supplying high-purity chemicals that ensure maximum oil yield,
                enhanced clarity and long shelf life in edible oil processing plants.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card industry-card h-100">
            <img
              src={WaterTreatment}
              className="card-img-top"
              alt="Water Treatment Plants"
            />
            <div className="card-body">
              <h5 className="card-title">Water Treatment Plants</h5>
              <p className="card-text">
                Providing safe and effective solutions for industrial and municipal
                water treatment to meet global purity standards.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card industry-card h-100">
            <img
              src={SoapDetergent}
              className="card-img-top"
              alt="Soap & Detergent Manufacturing"
            />
            <div className="card-body">
              <h5 className="card-title">Soap & Detergent Manufacturing</h5>
              <p className="card-text">
                Delivering essential raw materials for producing high-quality soaps
                and detergents with superior cleansing properties.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="/industries" className="btn btn-outline-primary mt-3">
        View more Industries
      </a>
    </div>

    {/* 🎨 Inline CSS */}
    <style>{`
      .industries-section {
        background: #f8faff;
      }
      .section-heading {
        color: #3666cc;
        font-size: 2rem;
      }
      .industry-card {
        border: none;
        border-radius: 15px;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        background: #fff;
      }
      .industry-card img {
        height: 200px;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      .industry-card:hover img {
        transform: scale(1.05);
      }
      .industry-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      }
      .industry-card .card-title {
        color: #3666cc;
        font-weight: 700;
        margin-bottom: 10px;
        font-size: 1.2rem;
      }
      .industry-card .card-text {
        color: #555;
        font-size: 0.95rem;
        line-height: 1.6;
      }
    `}</style>
  </section>
);






const QualityCommitment = () => {
  const paragraphs = [
    "We adhere to international standards including ISO certifications, providing consistent quality with full compliance and traceability.",
    "Our quality management system is designed to ensure that every product meets stringent safety, purity and performance criteria. We continually monitor and optimize our manufacturing processes to maintain excellence.",
    "Through rigorous testing protocols, state-of-the-art laboratory facilities and dedicated quality assurance teams, we guarantee product integrity from raw materials to final delivery.",
    "We embrace continuous improvement by incorporating customer feedback, adopting cutting-edge technologies and complying with evolving regulatory requirements across global markets.",
    "Our commitment extends beyond compliance — it’s about building trust, fostering transparency and delivering reliable solutions that empower our clients and partners worldwide."
  ];

  return (
    <section
      style={{
        padding: "3rem 0",
        backgroundColor: "#f8f9fa"
      }}
    >
      <div className="container">
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "3rem",
            textAlign: "center",
            color: "#3666cc"
          }}
        >
          Our Quality Commitment
        </h2>

        {paragraphs.map((text, index) => (
          <div
            key={index}
            className="row mb-4"
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              animation: "fadeIn 0.8s ease-in-out"
            }}
          >
            <div className="col-md-6">
              <div
                className="quality-card"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  textAlign: index % 2 === 0 ? "left" : "right",
                  transition: "all 0.3s ease"
                }}
              >
                <p
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0",
                    lineHeight: "1.6",
                    color: "#555"
                  }}
                >
                  {text}
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .quality-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
            background-color: #f0f6ff;
          }
        `}
      </style>
    </section>
  );
};





// ✅ Client Testimonials
// const Testimonials = () => (
//   <section className="bg-light py-5">
//     <div className="container text-center">
//       <h2 className="mb-4">What Our Clients Say</h2>
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <blockquote className="blockquote">
//             <p className="mb-3">"Outstanding service and consistent product quality. We've trusted them for years."</p>
//             <footer className="blockquote-footer">John Doe, CEO of IndustryCorp</footer>
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   </section>
// )

const Testimonials = () => (
  <>
    <style>
      {`
        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .testimonial-stars {
          font-size: 1.2rem;
          color: #ffc107;
        }

        .testimonial-footer {
          font-weight: 500;
          font-size: 0.9rem;
          color: #555;
        }

        .testimonial-text {
          font-style: italic;
          color: #333;
        }
      `}
    </style>

   <section className="bg-light py-5 position-relative overflow-hidden">
  <style>
    {`
      /* Heading Styling */
      .testimonial-heading {
        font-size: 2.7rem;
        font-weight: 700;
        background: linear-gradient(90deg, #3366cc, #003366);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        position: relative;
        padding-bottom: 12px;
        margin-bottom: 40px;
      }

      .testimonial-heading::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 70px;
        height: 4px;
        background-color: #3366cc;
        border-radius: 2px;
      }

      /* Card Styling */
      .testimonial-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(4px);
        border-radius: 16px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .testimonial-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
      }

      .testimonial-stars {
        font-size: 1.25rem;
        color: #ffc107;
        display: flex;
        justify-content: center;
        margin-bottom: 0.75rem;
        filter: drop-shadow(0 0 3px rgba(255, 193, 7, 0.5));
      }

      .testimonial-text {
        font-style: italic;
        color: #333;
        font-size: 1rem;
        text-align: center;
      }

      .testimonial-footer {
        font-weight: 600;
        font-size: 0.9rem;
        color: #666;
        text-align: center;
        margin-top: 15px;
      }

      /* Star Icons */
      .star-icon {
        margin: 0 2px;
      }

      /* Fade In Animation */
      .testimonial-card {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.6s forwards;
      }

      .testimonial-card:nth-child(1) { animation-delay: 0.2s; }
      .testimonial-card:nth-child(2) { animation-delay: 0.4s; }
      .testimonial-card:nth-child(3) { animation-delay: 0.6s; }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>

  <div className="container">
    <h2 className="text-center fw-bold mb-5"
  style={{ color: '#3366cc' }}>What Our Refinery Clients Say</h2>

    <div className="row justify-content-center g-4">
      {[
        {
          text: "We've been sourcing Caustic Soda and Bleaching Earth from N&T for over 2 years. Reliable delivery and consistent quality every time.",
          footer: "Rahul Jain, Procurement Head – Sunrise Oil Refinery",
        },
        {
          text: "Excellent technical support and custom packaging solutions tailored to our refinery needs. Highly professional team.",
          footer: "Fatima Noor, Plant Manager – GulfRef UAE",
        },
        {
          text: "N&T is our trusted partner for bulk chemical shipments. Their REACH-compliant materials meet all our regulatory needs.",
          footer: "Jacob Mensah, Head Chemist – Ghana Petrochemicals",
        },
      ].map((testimonial, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="p-4 testimonial-card h-100">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <i className="bi bi-star-fill star-icon" key={i}></i>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <footer className="testimonial-footer">{testimonial.footer}</footer>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  </>
);


// ✅ Chat Widget Placeholder
const ChatWidget = () => (
  <div className="chat-widget position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="Chat" width={48} />
    </a>
  </div>
);

// ✅ Main Home Component
const Home = () => (
  <>
     <Seo meta={HomeMeta} />
    <HeroBanner />
    <ProductsPreview />
    <IndustriesServed />
    <WhyChooseUs />
    <LatestBlogs />
    <QualityCommitment />
    <Testimonials />
    <Contact />
    
    <Footer />
  </>
);

export default Home;
