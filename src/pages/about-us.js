// import React from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import Contact from '../components/contact';
//  import Seo from '../component/seo';
// import Brand from '../component/Brand';

//  import bannerImage from '../Assests/about-us-banner.jpg'; // make sure this file exists
//  import AboutMainImg from '../Assests/about-main.jpg'; // make sure this file exists

//  import { AboutUsMeta } from '../data/metaData';

// import { FaBullseye, FaEye, FaFlag, FaCheckDouble } from 'react-icons/fa';

// const OurValuesIcon = <FaCheckDouble size={40} className="text-primary" />;
// const OurVisionIcon = <FaEye size={40} className="text-success" />;
// const OurMissionIcon = <FaFlag size={40} className="text-danger" />;
// const WhyChoseIcon = <FaBullseye size={40} className="text-warning" />;

// const AboutUs = () => {
//   return (
//     <>
//       {/* <Seo
//         title={AboutUsMeta.title}
//         description={AboutUsMeta.description}
//         keywords={AboutUsMeta.keywords}
//         url={AboutUsMeta.url}
//       /> */}

//       <Header />

//       {/* Banner */}
//       {/* <div
//         className="hero-section d-flex align-items-center text-white"
//         style={{
//           backgroundImage: `url(${bannerImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '50vh',
//         }}
//       > */}
//         <div className="container text-center">
//           <h1 className="display-4 fw-bold">About Us</h1>
//           <p className="lead">Delivering quality industrial solutions across the globe.</p>
//         </div>
//       </div>

//       {/* About Main Section */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h2 className="fw-bold mb-3">Who We Are</h2>
//               <p className="lead">
//                 N&T is a trusted global supplier of industrial chemicals, raw materials, and cementitious solutions. With a legacy of excellence, we serve over 50 countries, providing quality products and unmatched logistics support.
//               </p>
//             </div>
//             <div className="col-md-6">
//               <img
//                 src={AboutMainImg}
//                 alt="Global supplier of industrial chemicals"
//                 className="img-fluid rounded shadow"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Vision, Mission, Values */}
//       <section className="py-5">
//         <div className="container text-center">
//           <div className="row g-4">
//             <div className="col-md-4">
//               {OurVisionIcon}
//               <h4 className="mt-3">Our Vision</h4>
//               <p>To be a globally recognized brand for reliability and sustainability in industrial supply.</p>
//             </div>
//             <div className="col-md-4">
//               {OurMissionIcon}
//               <h4 className="mt-3">Our Mission</h4>
//               <p>To deliver superior products and services while exceeding client expectations every time.</p>
//             </div>
//             <div className="col-md-4">
//               {OurValuesIcon}
//               <h4 className="mt-3">Our Values</h4>
//               <p>Integrity, innovation, quality, and long-term partnerships guide all our actions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-5 bg-light">
//         <div className="container text-center">
//           <h2 className="mb-5 fw-bold">Why Choose Us</h2>
//           <div className="row g-4">
//             {[
//               '50+ Countries Served',
//               'ISO-Certified Processes',
//               'Customized Packaging',
//               'Reliable Logistics Network',
//               'Prompt Support & Response',
//               'Decades of Industry Experience',
//             ].map((point, idx) => (
//               <div className="col-md-4" key={idx}>
//                 {WhyChoseIcon}
//                 <h5 className="mt-3">{point}</h5>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Brand Logos */}
//       <Brand />

//       {/* Contact CTA */}
//       <Contact />

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default AboutUs;
