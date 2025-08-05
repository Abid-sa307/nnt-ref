

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Seo from '../../components/seo';
// import Footer from '../../components/footer';
// import Contact from '../../components/contact';
// import { CausticSodaFlakesMeta } from '../../data/metaData';

// const Caustic = () => {
//   return (
//     <>
//       <Seo meta={CausticSodaFlakesMeta} />

//       {/* ✅ Hero-style section */}
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
//             {/* Left - Content */}
//             <div className="col-md-6 text-white text-center text-md-start">
//               <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3', color: '#fff' }}>
//                 Caustic Soda Flakes (NaOH)
//               </h1>
//               <p className="lead" style={{ color: '#e0e0e0' }}>
//                 High-purity Sodium Hydroxide used in detergent, textile, water treatment, and paper industries. 
//                 Manufactured in ISO-certified facilities, compliant with REACH & SGS standards.
//               </p>
//               <ul className="text-start text-light fs-6 mt-3">
//                 <li>Soap & Detergent Manufacturing</li>
//                 <li>Water Purification and Treatment</li>
//                 <li>Textile Dyeing and Scouring</li>
//                 <li>Pulp and Paper Processing</li>
//               </ul>
//             </div>

//             {/* Right - Image */}
//             <div className="col-md-6 text-center">
//               <img
//                 src="https://via.placeholder.com/590x450?text=Caustic+Soda+Flakes"
//                 alt="Caustic Soda Flakes Packaging"
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

//       {/* ✅ Specifications & Packaging */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Product Specifications</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">Purity: ≥ 99%</li>
//                 <li className="list-group-item">Appearance: White Flakes</li>
//                 <li className="list-group-item">CAS No.: 1310-73-2</li>
//                 <li className="list-group-item">HS Code: 2815.11</li>
//               </ul>
//             </div>
//             <div className="col-md-6">
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">Packaging: 25 kg PE-lined PP bags / 50 kg drums</li>
//                 <li className="list-group-item">Delivery: Prompt dispatch in 1–2 weeks</li>
//                 <li className="list-group-item">Certifications: ISO, REACH, SGS Compliant</li>
//                 <li className="list-group-item">Support: Custom Formulations & Logistics</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Contact Section */}
//       <Contact />

//       {/* ✅ Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Caustic;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Seo from '../../components/seo';
// import Footer from '../../components/footer';
// import Contact from '../../components/contact';
// import { CausticSodaFlakesMeta } from '../../data/metaData';

// const Caustic = () => {
//   return (
//     <>
//       <Seo meta={CausticSodaFlakesMeta} />

//       {/* ✅ Hero-style section with description */}
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
//             {/* Left - Content */}
//             <div className="col-md-6 text-white text-center text-md-start">
//               <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
//                 Caustic Soda Flakes (NaOH)
//               </h1>
//               <p className="lead text-light">
//                 High-purity Sodium Hydroxide used in detergent, textile, water treatment, and paper industries. 
//                 Manufactured in ISO-certified facilities, compliant with REACH & SGS standards.
//               </p>
//             </div>

//             {/* Right - Image */}
//             <div className="col-md-6 text-center">
//               <img
//                 src="https://via.placeholder.com/590x450?text=Caustic+Soda+Flakes"
//                 alt="Caustic Soda Flakes Packaging"
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

//       {/* ✅ Specifications / MSDS */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Specifications & MSDS</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">Purity: ≥ 99%</li>
//                 <li className="list-group-item">Appearance: White Flakes</li>
//                 <li className="list-group-item">CAS No.: 1310-73-2</li>
//                 <li className="list-group-item">HS Code: 2815.11</li>
//               </ul>
//             </div>
//             <div className="col-md-6">
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">MSDS: Available Upon Request</li>
//                 <li className="list-group-item">Certifications: ISO, REACH, SGS Compliant</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Applications */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Applications</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               <ul className="list-group list-group-flush fs-5">
//                 <li className="list-group-item">Soap & Detergent Manufacturing</li>
//                 <li className="list-group-item">Water Purification and Treatment</li>
//                 <li className="list-group-item">Textile Dyeing and Scouring</li>
//                 <li className="list-group-item">Pulp and Paper Processing</li>
//                 <li className="list-group-item">Petrochemical Industry Processes</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Packaging & Delivery */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Packaging & Delivery Options</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               <ul className="list-group list-group-flush fs-5">
//                 <li className="list-group-item">25 kg PE-lined PP bags</li>
//                 <li className="list-group-item">50 kg UN-approved drums</li>
//                 <li className="list-group-item">Flexible loading: palletized or bulk</li>
//                 <li className="list-group-item">Delivery Time: 1–2 weeks globally</li>
//                 <li className="list-group-item">Logistics Support: Export documents & MSDS</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Quality & Compliance */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Quality & Compliance Notes</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-10">
//               <p className="lead text-center">
//                 Our Caustic Soda Flakes are manufactured under strict ISO-certified quality management systems.
//                 Each batch is tested for purity and consistency. We ensure compliance with international regulations including REACH and provide full traceability for export documentation and MSDS.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Request a Quote */}
//       <Contact />

//       {/* ✅ Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Caustic;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Seo from '../../components/seo';
// import Header from '../header';
// import Footer from '../../components/footer';
// import Contact from '../../components/contact';
// import { CausticSodaFlakesMeta } from '../../data/metaData';


// const Caustic = () => {
//   return (
//     <>
    
//       <Seo meta={CausticSodaFlakesMeta} />
      


//       {/* ✅ Hero-style section with description */}
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
//             {/* Left - Content */}
//             <div className="col-md-6 text-white text-center text-md-start">
//               <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
//                 Caustic Soda Flakes (NaOH)
//               </h1>
//               <p className="lead text-light">
//                 High-purity Sodium Hydroxide used in detergent, textile, water treatment, and paper industries. 
//                 Manufactured in ISO-certified facilities, compliant with REACH & SGS standards.
//               </p>
//             </div>

//             {/* Right - Image */}
//             <div className="col-md-6 text-center">
//               <img
//                 src="https://via.placeholder.com/590x450?text=Caustic+Soda+Flakes"
//                 alt="Caustic Soda Flakes Packaging"
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

//       {/* ✅ Updated Specifications / MSDS */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Specifications & MSDS</h2>
//           <div className="row align-items-center">
//             {/* Left - Specs Text */}
//             <div className="col-md-6">
//               <ul className="list-group list-group-flush fs-5">
//                 <li className="list-group-item">Purity: ≥ 99%</li>
//                 <li className="list-group-item">Appearance: White Flakes</li>
//                 <li className="list-group-item">CAS No.: 1310-73-2</li>
//                 <li className="list-group-item">HS Code: 2815.11</li>
//                 <li className="list-group-item">MSDS: Available Upon Request</li>
//                 <li className="list-group-item">Certifications: ISO, REACH, SGS Compliant</li>
//               </ul>
//             </div>

//             {/* Right - Image Placeholder */}
//             <div className="col-md-6 text-center">
//               <div
//                 style={{
//                   height: '300px',
//                   backgroundColor: '#e0e0e0',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRadius: '12px',
//                   fontSize: '1.2rem',
//                   color: '#555',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 }}
//               >
//                 <span>Caustic Soda Flakes Packaging (Alt Image)</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Applications */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Applications</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               <ul className="list-group list-group-flush fs-5">
//                 <li className="list-group-item">Soap & Detergent Manufacturing</li>
//                 <li className="list-group-item">Water Purification and Treatment</li>
//                 <li className="list-group-item">Textile Dyeing and Scouring</li>
//                 <li className="list-group-item">Pulp and Paper Processing</li>
//                 <li className="list-group-item">Petrochemical Industry Processes</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Packaging & Delivery */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Packaging & Delivery Options</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               <ul className="list-group list-group-flush fs-5">
//                 <li className="list-group-item">25 kg PE-lined PP bags</li>
//                 <li className="list-group-item">50 kg UN-approved drums</li>
//                 <li className="list-group-item">Flexible loading: palletized or bulk</li>
//                 <li className="list-group-item">Delivery Time: 1–2 weeks globally</li>
//                 <li className="list-group-item">Logistics Support: Export documents & MSDS</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Quality & Compliance */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center text-primary fw-bold mb-4">Quality & Compliance Notes</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-10">
//               <p className="lead text-center">
//                 Our Caustic Soda Flakes are manufactured under strict ISO-certified quality management systems.
//                 Each batch is tested for purity and consistency. We ensure compliance with international regulations including REACH and provide full traceability for export documentation and MSDS.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Header/>
//       {/* ✅ Request a Quote */}
//       <Contact />

//       {/* ✅ Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Caustic;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from '../../components/seo';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import { CausticSodaFlakesMeta } from '../../data/metaData';

const Caustic = () => {
  return (
    <>
      <Seo meta={CausticSodaFlakesMeta} />
      

      {/* ✅ Hero-style section with description */}
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
            {/* Left - Content */}
            <div className="col-md-6 text-white text-center text-md-start">
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                Caustic Soda Flakes (NaOH)
              </h1>
              <p className="lead text-light">
                High-purity Sodium Hydroxide used in detergent, textile, water treatment, and paper industries.
                Manufactured in ISO-certified facilities, compliant with REACH & SGS standards.
              </p>
            </div>

            {/* Right - Styled Box Instead of Image */}
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
                Caustic Soda Flakes Packaging Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Specifications / MSDS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Specifications & MSDS</h2>
          <div className="row align-items-center">
            {/* Left - Specs */}
            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">Purity: ≥ 99%</li>
                <li className="list-group-item">Appearance: White Flakes</li>
                <li className="list-group-item">CAS No.: 1310-73-2</li>
                <li className="list-group-item">HS Code: 2815.11</li>
                <li className="list-group-item">MSDS: Available Upon Request</li>
                <li className="list-group-item">Certifications: ISO, REACH, SGS Compliant</li>
              </ul>
            </div>

            {/* Right - Styled Box Instead of Image */}
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
                Caustic Soda Packaging Visual
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
                <li className="list-group-item">Soap & Detergent Manufacturing</li>
                <li className="list-group-item">Water Purification and Treatment</li>
                <li className="list-group-item">Textile Dyeing and Scouring</li>
                <li className="list-group-item">Pulp and Paper Processing</li>
                <li className="list-group-item">Petrochemical Industry Processes</li>
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
                <li className="list-group-item">25 kg PE-lined PP bags</li>
                <li className="list-group-item">50 kg UN-approved drums</li>
                <li className="list-group-item">Flexible loading: palletized or bulk</li>
                <li className="list-group-item">Delivery Time: 1–2 weeks globally</li>
                <li className="list-group-item">Logistics Support: Export documents & MSDS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Quality & Compliance */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Quality & Compliance Notes</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="lead text-center">
                Our Caustic Soda Flakes are manufactured under strict ISO-certified quality management systems.
                Each batch is tested for purity and consistency. We ensure compliance with international regulations including REACH and provide full traceability for export documentation and MSDS.
              </p>
            </div>
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

export default Caustic;

