// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Seo from '../components/seo';
// import Footer from '../components/footer';
// import Contact from '../components/contact';

// const AboutUs = () => {
//   return (
//     <>
//       <Seo meta={{ title: "About Us - N&T Refinery Clay Supplier" }} />

//       {/* ✅ Hero Section */}
//       <section
//         className="hero-section d-flex align-items-center"
//         style={{
//           paddingTop: '100px',
//           minHeight: '100vh',
//           background: 'linear-gradient(135deg, #005b96, #6db3f2)',
//           paddingBottom: '60px',
//         }}
//       >
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Left Content */}
//             <div className="col-md-6 text-white text-center text-md-start">
//               <h1 className="display-5 fw-bold mb-3">About N&T Refinery Clay Supplier</h1>
//               <p className="lead text-light">
//                 A global leader in high-quality industrial clay solutions, driving sustainability and excellence
//                 across industries.
//               </p>
//             </div>

//             {/* Right Box */}
//             <div className="col-md-6 text-center">
//               <div
//                 style={{
//                   height: '400px',
//                   width: '100%',
//                   backgroundColor: '#ffffff33',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRadius: '12px',
//                   boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
//                   color: '#fff',
//                   fontSize: '1.25rem',
//                   fontWeight: '500',
//                 }}
//               >
//                 Company Overview Visual
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Company Background */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Company Background</h2>
//           <p className="lead text-center">
//             N&T Refinery Clay Supplier has been a trusted name in industrial clay products for over a decade.
//             With a presence in multiple countries, we serve clients across various sectors including oil refining,
//             food processing, and environmental remediation.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Mission & Vision */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Mission & Vision</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <h5 className="fw-bold">Our Mission</h5>
//               <p>
//                 To deliver premium quality refinery clay products that enhance industrial processes while promoting
//                 environmental responsibility.
//               </p>
//             </div>
//             <div className="col-md-6">
//               <h5 className="fw-bold">Our Vision</h5>
//               <p>
//                 To be the world’s most reliable and innovative supplier of sustainable clay-based solutions for
//                 industrial and environmental use.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Global Presence */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Global Presence</h2>
//           <p className="lead text-center">
//             With operational hubs and partners across Asia, Europe, and the Middle East, we ensure timely delivery
//             and local expertise wherever our clients are located.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Factory/Logistics Capabilities */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Factory & Logistics Capabilities</h2>
//           <p className="lead text-center">
//             Our state-of-the-art manufacturing facility and logistics network allow for scalable production and
//             efficient global distribution. We maintain ISO-certified processes and export-compliant documentation.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Leadership Team */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Leadership Team</h2>
//           <p className="lead text-center">
//             N&T is led by industry veterans with decades of experience in industrial chemistry, operations, and
//             international business. Our team is driven by innovation and customer-centric values.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Partner Brands */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Partner Brands</h2>
//           <p className="lead text-center">
//             We collaborate with globally recognized brands in refining and environmental sectors to deliver
//             best-in-class solutions. Our strategic alliances enable shared growth and sustainable impact.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Contact Form */}
//       <Contact />

//       {/* ✅ Footer */}
//       <Footer />
//     </>
//   );
// };

// export default AboutUs;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../components/seo';
import Footer from '../components/footer';
import Contact from '../components/contact';

const AboutUs = () => {
  return (
    <>
      {/* ✅ Meta Tags for SEO */}
      <Seo
        meta={{
          title: 'About Us - N&T Refinery Clay Supplier',
          description: 'Learn about N&T Refinery Clay Supplier: our mission, global reach, factory logistics, leadership, and partnerships driving innovation in industrial clay solutions.',
          keywords: 'N&T Refinery Clay, industrial clay supplier, refinery clay, bleaching earth, global supplier, logistics, ISO certified, partner brands',
        }}
      />

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
              <div
                style={{
                  height: '400px',
                  width: '100%',
                  backgroundColor: '#ffffff33',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: '500',
                }}
              >
                Company Overview Visual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Company Background */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Company Background</h2>
          <p className="lead text-center">
            N&T Refinery Clay Supplier has been a trusted name in industrial clay products for over a decade.
            With a presence in multiple countries, we serve clients across various sectors including oil refining,
            food processing, and environmental remediation.
          </p>
        </div>
      </section>

      {/* ✅ Mission & Vision */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Mission & Vision</h2>
          <div className="row">
            <div className="col-md-6">
              <h5 className="fw-bold">Our Mission</h5>
              <p>
                To deliver premium quality refinery clay products that enhance industrial processes while promoting
                environmental responsibility.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">Our Vision</h5>
              <p>
                To be the world’s most reliable and innovative supplier of sustainable clay-based solutions for
                industrial and environmental use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Global Presence */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Global Presence</h2>
          <p className="lead text-center">
            With operational hubs and partners across Asia, Europe, and the Middle East, we ensure timely delivery
            and local expertise wherever our clients are located.
          </p>
        </div>
      </section>

      {/* ✅ Factory/Logistics Capabilities */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Factory & Logistics Capabilities</h2>
          <p className="lead text-center">
            Our state-of-the-art manufacturing facility and logistics network allow for scalable production and
            efficient global distribution. We maintain ISO-certified processes and export-compliant documentation.
          </p>
        </div>
      </section>

      {/* ✅ Leadership Team */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Leadership Team</h2>
          <p className="lead text-center">
            N&T is led by industry veterans with decades of experience in industrial chemistry, operations, and
            international business. Our team is driven by innovation and customer-centric values.
          </p>
        </div>
      </section>

      {/* ✅ Partner Brands */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Partner Brands</h2>
          <p className="lead text-center">
            We collaborate with globally recognized brands in refining and environmental sectors to deliver
            best-in-class solutions. Our strategic alliances enable shared growth and sustainable impact.
          </p>
        </div>
      </section>

      {/* ✅ Contact Form */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
