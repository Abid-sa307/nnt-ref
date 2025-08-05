

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
      <section className="py-5 bg-light">
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

      {/* ✅ Packaging & Delivery */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Packaging & Delivery Options</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">20 kg PE-lined bags</li>
                <li className="list-group-item">Bulk jumbo bags (≥1 MT)</li>
                <li className="list-group-item">Custom packaging upon request</li>
                <li className="list-group-item">Delivery: 1–2 weeks globally</li>
              </ul>
            </div>
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

