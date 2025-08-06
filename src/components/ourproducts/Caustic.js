

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

      {/* ✅ Clinkerization-style Informational Section */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left - Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4 text-primary">
          High-Quality Caustic Soda Flakes From Trusted Manufacturers
        </h2>
        <p className="text-secondary mb-4">
          Our Caustic Soda Flakes are manufactured using advanced purification processes to ensure consistent performance across industries. As a leading supplier, we provide top-grade sodium hydroxide that meets stringent global standards.
        </p>
        <ul className="list-unstyled text-secondary fs-5">
          <li className="mb-2">• Exceptional purity (≥ 99%) for industrial-grade applications.</li>
          <li className="mb-2">• Compliant with ISO, REACH, and SGS quality benchmarks.</li>
          <li className="mb-2">• Ideal for textile, water treatment, and detergent sectors.</li>
        </ul>
      </div>

      {/* Right - Image */}
      <div className="col-md-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1726/1726347.png" // Replace this with your factory/product image
          alt="Caustic Soda Plant"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: '360px', objectFit: 'cover' }}
        />
      </div>

    </div>
  </div>
</section>





      {/* ✅ Specifications / MSDS */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">Specifications & MSDS</h2>
          <div className="row align-items-center"> */}
            {/* Left - Specs */}
            {/* <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">Purity: ≥ 99%</li>
                <li className="list-group-item">Appearance: White Flakes</li>
                <li className="list-group-item">CAS No.: 1310-73-2</li>
                <li className="list-group-item">HS Code: 2815.11</li>
                <li className="list-group-item">MSDS: Available Upon Request</li>
                <li className="list-group-item">Certifications: ISO, REACH, SGS Compliant</li>
              </ul>
            </div> */}

            {/* Right - Styled Box Instead of Image */}
            {/* <div className="col-md-6 text-center">
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
      </section> */}


    {/* ✅ Specifications / MSDS */}
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
                <span>Product Name</span><strong>Caustic Soda Flakes</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Chemical Name</span><strong>Sodium Hydroxide</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Formula</span><strong>NaOH</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Purity</span><strong>≥ 99%</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Appearance</span><strong>White Flakes</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>CAS No.</span><strong>1310-73-2</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>HS Code</span><strong>2815.11</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Melting Point</span><strong>318°C</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Boiling Point</span><strong>1390°C</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Density</span><strong>2.13 g/cm³</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>PH (1% Sol.)</span><strong>>13</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Solubility</span><strong>Completely Soluble in Water</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Certifications</span><strong>ISO, REACH, SGS</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>MSDS</span><strong>Available on Request</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Packaging</span><strong>25kg PP Bags with PE Liners</strong>
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
          Visual Placeholder for Product Packaging, MSDS Sheet, or Certificates (ISO / SGS / REACH)
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

      
      {/* ✅ Packaging & Delivery Options
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Packaging & Delivery Options</h2>

    <div className="row g-4 justify-content-center">
      {[
        "25 kg PE-lined PP bags",
        "50 kg UN-approved drums",
        "Flexible loading: palletized or bulk",
        "Delivery Time: 1–2 weeks globally",
        "Logistics Support: Export documents & MSDS"
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
</section> */}

{/* ✅ Packaging & Delivery Options - Caustic Soda Flakes */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">
      📦 Packaging & Delivery Options
    </h2>

    <div className="row g-4 justify-content-center">
      {[
        {
          icon: "🧃",
          text: "25 kg PE-lined PP bags with double-layer moisture protection",
        },
        {
          icon: "🚚",
          text: "Fast international delivery within 7–14 days",
        },
        {
          icon: "🧳",
          text: "Jumbo bags (500kg–1 MT) available for bulk supply",
        },
        {
          icon: "🛡️",
          text: "Export-compliant labeling & safety documents (MSDS)",
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

