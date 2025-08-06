

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Seo from '../../components/seo';
// import Footer from '../../components/footer';
// import Contact from '../../components/contact';
// import { BleachingEarthMeta } from '../../data/metaData';

// const BleachingEarth = () => {
//   return (
//     <>
//       <Seo meta={BleachingEarthMeta} />

//       {/* Hero-style section */}
//       <section
//         className="hero-section d-flex align-items-center"
//         style={{
//           paddingTop: '100px',
//           minHeight: '100vh',
//          // background: 'linear-gradient(135deg, #28a745, #6ebf8b)',
//          background: 'linear-gradient(135deg, #005b96, #6db3f2)',
//           paddingBottom: '60px',
//         }}
//       >
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Left - Description */}
//             <div className="col-md-6 text-white text-center text-md-start">
//               <h1 className="display‑5 fw-bold mb‑3" style={{ lineHeight: '1.3' }}>
//                 Bleaching Earth (Activated Clay)
//               </h1>
//               <p className="lead text-light">
//                 Premium‑grade regenerative bleaching earth, used in edible oil refining,
//                 industrial wastewater treatment, and petrochemical filtration applications.
//               </p>
//             </div>

//             {/* Right - Image placeholder */}
//             <div className="col-md-6 text-center">
//               <img
//                 src="https://via.placeholder.com/590x450?text=Bleaching+Earth"
//                 alt="Bleaching Earth Packaging"
//                 className="img-fluid"
//                 style={{
//                   maxHeight: '400px',
//                   objectFit: 'cover',
//                   borderRadius: '12px',
//                   boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
//                   width: '100%',
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Specifications / MSDS */}
//       <section className="py‑5 bg‑light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Specifications & MSDS</h2>
//           <div className="row align-items-center">
//             {/* Left column */}
//             <div className="col-md-6">
//               <ul className="list-group list-group-flush fs‑5">
//                 <li className="list-group-item">Grade: Activated Bleaching Earth</li>
//                 <li className="list-group-item">Moisture: ≤ 5%</li>
//                 <li className="list-group-item">pH (5% slurry): 6.5‑8.0</li>
//                 <li className="list-group-item">Color Value (Lovibond): ≤ 3.0</li>
//                 <li className="list-group-item">MSDS: Available Upon Request</li>
//                 <li className="list-group-item">Certifications: ISO, FDA, REACH Compliant</li>
//               </ul>
//             </div>
//             {/* Right column placeholder */}
//             <div className="col-md-6 text-center">
//               <div
//                 style={{
//                   height: '300px',
//                   backgroundColor: '#e0e0e0',
//                   borderRadius: '12px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: '#555',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                   fontSize: '1.2rem',
//                 }}
//               >
//                 Bleaching Earth Packaging (Alt Image)
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Applications */}
//       <section className="py‑5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Applications</h2>
//           <ul className="row list-unstyled fs‑5">
//             <li className="col-md-6 mb-2">• Edible Oil Refining</li>
//             <li className="col-md-6 mb-2">• Wastewater Treatment</li>
//             <li className="col-md-6 mb-2">• Industrial Filtration</li>
//             <li className="col-md-6 mb-2">• Bleaching & Deodorization</li>
//             <li className="col-md-6 mb-2">• Cosmetic & Oleochemical Industries</li>
//           </ul>
//         </div>
//       </section>

//       {/* Packaging & Delivery */}
//       <section className="py‑5 bg‑light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Packaging & Delivery Options</h2>
//           <div className="row fs‑5">
//             <div className="col-md-6">
//               <ul>
//                 <li>20 kg PE-lined bags</li>
//                 <li>Bulk jumbo bags (≥1 MT)</li>
//               </ul>
//             </div>
//             <div className="col-md-6">
//               <ul>
//                 <li>Custom packaging upon request</li>
//                 <li>Delivery: 1–2 weeks globally</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quality & Compliance */}
//       <section className="py‑5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Quality & Compliance</h2>
//           <p className="text-center fs‑5 lead">
//             Manufactured in ISO and FDA‑certified facilities. Each batch is tested for moisture, color value, and adsorption efficiency.
//             Full traceability is ensured with Certificates of Analysis and MSDS provided with every shipment.
//           </p>
//         </div>
//       </section>

//       {/* Request a Quote */}
//       <Contact />

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default BleachingEarth;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import { BleachingEarthMeta } from '../../data/metaData';

const BleachingEarth = () => {
  return (
    <>
      <Seo meta={BleachingEarthMeta} />

      {/* ✅ Hero-style section */}
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
            {/* Left - Description */}
            <div className="col-md-6 text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                Bleaching Earth (Activated Clay)
              </h1>
              <p className="lead text-light">
                Premium-grade regenerative bleaching earth, used in edible oil refining,
                industrial wastewater treatment, and petrochemical filtration applications.
              </p>
            </div>

            {/* Right - Placeholder box */}
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
                Bleaching Earth Packaging Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Specifications & MSDS */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Specifications & MSDS</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">Grade: Activated Bleaching Earth</li>
                <li className="list-group-item">Moisture: ≤ 5%</li>
                <li className="list-group-item">pH (5% slurry): 6.5‑8.0</li>
                <li className="list-group-item">Color Value (Lovibond): ≤ 3.0</li>
                <li className="list-group-item">MSDS: Available Upon Request</li>
                <li className="list-group-item">Certifications: ISO, FDA, REACH Compliant</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <div
                style={{
                  height: '300px',
                  backgroundColor: '#e0e0e0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  color: '#555',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                Bleaching Earth Packaging Visual
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ✅ Informational Section for Bleaching Earth */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left - Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4 text-primary">
          Premium-Grade Bleaching Earth for Oil Purification
        </h2>
        <p className="text-secondary mb-4">
          Our Activated Bleaching Earth is processed from high-quality bentonite clay, ensuring maximum adsorption efficiency and consistent decolorization in edible oil refining and industrial applications.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• Superior adsorption for removing color, impurities & trace metals.</li>
          <li className="mb-2">• Optimized moisture content and neutral pH for safe handling.</li>
          <li className="mb-2">• Widely used in edible oil refineries, cosmetics, and pharmaceuticals.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920364.png" // Replace with actual product/factory image
          alt="Bleaching Earth Powder"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: '360px', objectFit: 'cover' }}
        />
      </div>

    </div>
  </div>
</section>


      {/* ✅ Specifications & MSDS */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Specifications & MSDS</h2>
    <div className="row g-4 align-items-center">
      
      {/* Left - Specs List */}
      <div className="col-md-6">
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body">
            <h4 className="text-secondary mb-4">Technical Specifications</h4>
            <ul className="list-group list-group-flush fs-6">
              <li className="list-group-item d-flex justify-content-between">
                <span>Product Name</span><strong>Activated Bleaching Earth</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Moisture Content</span><strong>≤ 5%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>pH (5% slurry)</span><strong>6.5 – 8.0</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Color Value (Lovibond)</span><strong>≤ 3.0</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Appearance</span><strong>Fine Light Gray/Beige Powder</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Oil Retention</span><strong>≥ 100%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Surface Area</span><strong>200-250 m²/g</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Bulk Density</span><strong>0.6 – 0.8 g/cm³</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Certifications</span><strong>ISO, FDA, REACH</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>MSDS</span><strong>Available Upon Request</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Packaging</span><strong>25kg / 50kg PP Bags with Liners</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Country of Origin</span><strong>India</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right - Visual Placeholder for MSDS / Packaging */}
      <div className="col-md-6">
        <div
          className="rounded-4 shadow-sm d-flex align-items-center justify-content-center"
          style={{
            height: '100%',
            minHeight: '480px',
            backgroundColor: '#f8f9fa',
            border: '2px dashed #0d6efd55',
            color: '#0d6efd',
            fontSize: '1.2rem',
            textAlign: 'center',
            padding: '30px'
          }}
        >
          Visual Placeholder for Product Packaging, MSDS Sheet, or Certificates (ISO / FDA / REACH)
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ✅ Applications */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Applications</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">Edible Oil Refining</li>
                <li className="list-group-item">Wastewater Treatment</li>
                <li className="list-group-item">Industrial Filtration</li>
                <li className="list-group-item">Bleaching & Deodorization</li>
                <li className="list-group-item">Cosmetic & Oleochemical Industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* ✅ Packaging & Delivery Options
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Packaging & Delivery Options</h2>

    <div className="row g-4 justify-content-center">
      {[
        "20 kg PE-lined bags",
        "Bulk jumbo bags (≥1 MT)",
        "Custom packaging upon request",
        "Delivery: 1–2 weeks globally"
      ].map((item, idx) => (
        <div key={idx} className="col-md-6">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body d-flex align-items-center">
              <div
                className="me-3 d-flex justify-content-center align-items-center"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#0d6efd22',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  color: '#0d6efd'
                }}
              >
                📦
              </div>
              <h5 className="mb-0 text-secondary">{item}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
 */}

 {/* ✅ Packaging & Delivery Options - Bleaching Earth */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">
      📦 Packaging & Delivery Options
    </h2>

    <div className="row g-4 justify-content-center">
      {[
        {
          icon: "🧃",
          text: "20 kg PE-lined kraft paper bags with inner moisture barrier",
        },
        {
          icon: "🚚",
          text: "Standard global delivery in 1–2 weeks",
        },
        {
          icon: "🧳",
          text: "Bulk jumbo bags (≥1 MT) available for industrial use",
        },
        {
          icon: "🛡️",
          text: "Customized labeling & documentation support on request",
        },
      ].map((item, idx) => (
        <div key={idx} className="col-lg-6 col-md-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 bg-white hover-effect">
            <div className="card-body d-flex align-items-center">
              <div
                className="me-4 d-flex justify-content-center align-items-center flex-shrink-0"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#e7f1ff',
                  borderRadius: '50%',
                  fontSize: '1.8rem',
                  color: '#0d6efd',
                }}
              >
                {item.icon}
              </div>
              <div>
                <p className="mb-0 fw-semibold text-secondary fs-5">{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ✅ Quality & Compliance */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Quality & Compliance</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="lead text-center">
                Manufactured in ISO and FDA‑certified facilities. Each batch is tested for moisture, color value, and adsorption efficiency.
                Full traceability is ensured with Certificates of Analysis and MSDS provided with every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default BleachingEarth;

