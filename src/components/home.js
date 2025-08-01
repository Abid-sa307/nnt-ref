// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Hero Banner Section
// const HeroBanner = () => (
//   <section className="bg-primary text-white text-center py-5">
//     <div className="container">
//       <h1 className="display-5 fw-bold">Global Supplier of Quality Products</h1>
//       <p className="lead">Delivering excellence across industries worldwide.</p>
//       <a href="#quote" className="btn btn-light mt-3">Request a Quote</a>
//     </div>
//   </section>
// );

// // Products Preview Section
// const ProductsPreview = () => (
//   <section className="py-5 bg-light">
//     <div className="container">
//       <h2 className="text-center mb-4">Our Products</h2>
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         {[
//           { title: "Caustic Soda Flakes", text: "Used in paper, textiles, detergents." },
//           { title: "Bleaching Earth", text: "Ideal for purifying oils and fats." },
//           { title: "Filter Flow Aid", text: "Helps improve filtration systems." },
//           { title: "Citric Acid", text: "Common in food & pharmaceuticals." },
//         ].map((product, idx) => (
//           <div key={idx} className="col">
//             <div className="card h-100 shadow-sm">
//               <img src={`https://via.placeholder.com/300x200?text=${product.title.replace(/\s+/g, '+')}`} className="card-img-top" alt={product.title} />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.text}</p>
//                 <a href={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline-primary mt-2">View Details</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Industries Served Section
// const IndustriesServed = () => (
//   <section className="py-5">
//     <div className="container text-center">
//       <h2 className="mb-3">Industries We Serve</h2>
//       <p className="lead">Automotive, Construction, Oil & Gas, Agriculture, Textiles, Food & Beverages, Water Treatment, and more.</p>
//     </div>
//   </section>
// );

// // Why Choose Us Section
// const WhyChooseUs = () => (
//   <section className="bg-light py-5">
//     <div className="container text-center">
//       <h2 className="mb-4">Why Choose Us</h2>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {["Trusted Global Supplier", "ISO Certified", "Strict Quality Control", "Reliable Delivery", "Competitive Pricing", "Customer Satisfaction"].map((item, idx) => (
//           <div key={idx} className="col">
//             <div className="card border-0 h-100 bg-transparent">
//               <div className="card-body">
//                 <span className="fs-3">✅</span>
//                 <p className="card-text mt-2">{item}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Quality Commitment Section
// const QualityCommitment = () => (
//   <section className="py-5">
//     <div className="container text-center">
//       <h2 className="mb-3">Our Quality Commitment</h2>
//       <p className="lead">We adhere to international standards including ISO certifications, providing consistent quality with full compliance and traceability.</p>
//     </div>
//   </section>
// );

// // Client Testimonials Section
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
// );

// // Request a Quote Section
// const RequestQuote = () => (
//   <section id="quote" className="py-5 bg-primary text-white">
//     <div className="container">
//       <h2 className="text-center mb-4">Request a Quote</h2>
//       <form className="row g-3">
//         <div className="col-md-6">
//           <input type="text" className="form-control" placeholder="Your Name" required />
//         </div>
//         <div className="col-md-6">
//           <input type="email" className="form-control" placeholder="Your Email" required />
//         </div>
//         <div className="col-12">
//           <textarea className="form-control" rows="4" placeholder="Your Requirements" required></textarea>
//         </div>
//         <div className="col-12 text-center">
//           <button type="submit" className="btn btn-light">Submit</button>
//         </div>
//       </form>
//     </div>
//   </section>
// );

// // Latest Blogs Section
// const LatestBlogs = () => (
//   <section className="py-5 bg-light">
//     <div className="container text-center">
//       <h2 className="mb-4">Latest Blogs</h2>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {[1, 2, 3].map((num) => (
//           <div key={num} className="col">
//             <div className="card h-100 shadow-sm">
//               <img src={`https://via.placeholder.com/300x180?text=Blog+${num}`} className="card-img-top" alt={`Blog ${num}`} />
//               <div className="card-body">
//                 <h5 className="card-title">Blog Title {num}</h5>
//                 <p className="card-text">A short summary of blog post {num} to engage users and provide value.</p>
//                 <a href="#" className="btn btn-outline-primary">Read More</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // WhatsApp / Live Chat Widget
// const ChatWidget = () => (
//   <a
//     href="https://wa.me/yourwhatsapplink"
//     className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle d-flex justify-content-center align-items-center"
//     style={{ width: '60px', height: '60px', zIndex: 999 }}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     💬
//   </a>
// );

// // Footer Section
// const Footer = () => (
//   <footer className="bg-dark text-white py-4">
//     <div className="container text-center">
//       <p className="mb-2">© 2025 Your Company Name. All Rights Reserved.</p>
//       <p className="mb-0">
//         <span>ISO Certified | </span>
//         <a href="#" className="text-white text-decoration-none mx-1">Sitemap</a> | 
//         <a href="#" className="text-white text-decoration-none mx-1">Contact</a> | 
//         <a href="#" className="text-white text-decoration-none mx-1">Facebook</a> | 
//         <a href="#" className="text-white text-decoration-none mx-1">LinkedIn</a>
//       </p>
//     </div>
//   </footer>
// );

// // Main Home Component
// const Home = () => {
//   return (
//     <>
//       <HeroBanner />
//       <ProductsPreview />
//       <IndustriesServed />
//       <WhyChooseUs />
//       <QualityCommitment />
//       <Testimonials />
//       <RequestQuote />
//       <LatestBlogs />
//       <ChatWidget />
//       <Footer />
//     </>
//   );
// };

// export default Home;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/home.css';
import HeroImage from '../Assests/hero-image.png';

// ✅ Hero Banner
const HeroBanner = () => (
  <section className="hero-section d-flex align-items-center text-white" style={{ paddingTop: '100px', minHeight: '100vh' }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">
            Global Supplier of Caustic Soda, Bleaching Earth & High-Purity Industrial Chemicals
          </h1>
          <p className="lead mt-3">
            Your reliable source for premium-grade refinery chemicals and raw materials with a proven global logistics network. Trusted by partners in 50+ countries.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={HeroImage} alt="Hero Visual" className="img-fluid hero-img" />
        </div>
      </div>
    </div>
  </section>
);

// ✅ Products Preview
const ProductsPreview = () => (
  <section id="products" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center text-primary fw-bold mb-5">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {[
          { title: 'Caustic Soda Flakes', text: 'Used in paper, textiles, detergents.' },
          { title: 'Bleaching Earth', text: 'Ideal for purifying oils and fats.' },
          { title: 'Filter Flow Aid', text: 'Helps improve filtration systems.' },
          { title: 'Citric Acid', text: 'Common in food & pharmaceuticals.' },
        ].map((product, idx) => (
          <div key={idx} className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={`https://via.placeholder.com/300x200?text=${product.title.replace(/\s+/g, '+')}`}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.text}</p>
                <a href={`/our-products/${product.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ✅ Industries Served
const IndustriesServed = () => (
  <section className="py-5">
    <div className="container text-center">
      <h2 className="text-primary mb-4 fw-bold">Industries We Serve</h2>
      <p className="lead">
        Edible Oil Refineries, Soap & Detergent Manufacturers, Water Treatment, Food & Beverage Industry,
        Petrochemical & Pharmaceutical Manufacturing.
      </p>
      <a href="/industries" className="btn btn-outline-primary mt-3">View Industries</a>
    </div>
  </section>
);

// ✅ Why Choose Us
const WhyChooseUs = () => (
  <section className="bg-light py-5">
    <div className="container text-center">
      <h2 className="mb-4">Why Choose Us</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[
          "Trusted Global Supplier",
          "ISO Certified",
          "Strict Quality Control",
          "Reliable Delivery",
          "Competitive Pricing",
          "Customer Satisfaction"
        ].map((item, idx) => (
          <div key={idx} className="col">
            <div className="card border-0 h-100 bg-transparent">
              <div className="card-body">
                <span className="fs-3">✅</span>
                <p className="card-text mt-2">{item}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ✅ Quality Commitment
const QualityCommitment = () => (
  <section className="py-5">
    <div className="container text-center">
      <h2 className="mb-3">Our Quality Commitment</h2>
      <p className="lead">
        We adhere to international standards including ISO certifications, providing consistent quality with full compliance and traceability.
      </p>
    </div>
  </section>
);

// ✅ Client Testimonials
const Testimonials = () => (
  <section className="bg-light py-5">
    <div className="container text-center">
      <h2 className="mb-4">What Our Clients Say</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <blockquote className="blockquote">
            <p className="mb-3">"Outstanding service and consistent product quality. We've trusted them for years."</p>
            <footer className="blockquote-footer">John Doe, CEO of IndustryCorp</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

/// ✅ Ready to Step Forward Section (No Map)
const ReadyToStepForward = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <h2 className="text-center fw-bold text-primary mb-4">Ready to step forward</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Full Name*" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email ID*" required />
            </div>
            <div className="col-md-6">
              <input type="tel" className="form-control" placeholder="+91 Mobile Number*" required />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Company Name" />
            </div>
            <div className="col-12">
              <textarea className="form-control" rows="4" placeholder="Enquiry*" required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);


// ✅ Latest Blogs
const LatestBlogs = () => (
  <section className="py-5 bg-light">
    <div className="container text-center">
      <h2 className="mb-4">Latest Blogs</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[1, 2, 3].map((num) => (
          <div key={num} className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={`https://via.placeholder.com/300x180?text=Blog+${num}`}
                className="card-img-top"
                alt={`Blog ${num}`}
              />
              <div className="card-body">
                <h5 className="card-title">Blog Title {num}</h5>
                <p className="card-text">A short summary of blog post {num} to engage users and provide value.</p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ✅ Chat Widget Placeholder (Re-enabled)
const ChatWidget = () => (
  <div className="chat-widget position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="Chat" width={48} />
    </a>
  </div>
);

// ✅ Footer
const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <div className="container text-center">
      <p className="mb-2">© 2025 Your Company Name. All Rights Reserved.</p>
      <p className="mb-0">
        ISO Certified |
        <a href="#" className="text-white text-decoration-none mx-1"> Sitemap </a>|
        <a href="#" className="text-white text-decoration-none mx-1"> Contact </a>|
        <a href="#" className="text-white text-decoration-none mx-1"> Facebook </a>|
        <a href="#" className="text-white text-decoration-none mx-1"> LinkedIn </a>
      </p>
    </div>
  </footer>
);

// ✅ Main Home Component
const Home = () => (
  <>
    <HeroBanner />
    <ProductsPreview />
    <IndustriesServed />
    <WhyChooseUs />
    <QualityCommitment />
    <Testimonials />
    <ReadyToStepForward />
    <LatestBlogs />
    <ChatWidget />
    <Footer />
  </>
);

export default Home;
