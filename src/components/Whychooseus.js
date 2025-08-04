// // src/components/WhyChooseUs.js
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Whychooseus.css';

// const features = [
//   {
//     icon: '✅', // replace with image or icon
//     title: 'Best-quality Products',
//     description: 'Delivering the finest in quality products, our commitment to excellence is your assurance of the best.',
//   },
//   {
//     icon: '🔬',
//     title: 'Advance Research & Development',
//     description: 'Empowering progress through cutting-edge Research and Development, our commitment to innovation fuels the future.',
//   },
//   {
//     icon: '💰',
//     title: 'Cooperative Price',
//     description: 'Offering competitive pricing without compromising quality, we make your satisfaction affordable.',
//   },
//   {
//     icon: '🎓',
//     title: 'Highly skilled & qualified team',
//     description: 'Our team comprises highly qualified and skilled personnel, ensuring precision and expertise in every aspect of your project.',
//   },
//   {
//     icon: '⏱️',
//     title: 'On-time Delivery',
//     description: 'We prioritize on-time delivery, so your projects stay on schedule and within deadlines.',
//   },
//   {
//     icon: '🤝',
//     title: 'After sales support',
//     description: 'Our after-sales support ensures your ongoing satisfaction and success.',
//   },
// ];

// const WhyChooseUs = () => (
//   <section className="py-5 bg-light">
//     <div className="container text-center">
//       <h2 className="mb-4">Why Choose Us</h2>
//       <div className="row g-4">
//         {features.map((item, index) => (
//           <div className="col-md-4" key={index}>
//             <div className="card p-4 h-100 shadow-sm">
//               <div className="feature-icon mb-3">{item.icon}</div>
//               <h5 className="fw-bold">{item.title}</h5>
//               <p className="text-muted">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default WhyChooseUs;

// src/components/WhyChooseUs.js



// src/components/WhyChooseUs.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBoxOpen, FaFlask, FaMoneyBillWave, FaUserGraduate, FaClock, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaBoxOpen size={50} className="text-primary" />,
    title: 'Best-quality Products',
    description: 'Delivering the finest in quality products, our commitment to excellence is your assurance of the best.',
  },
  {
    icon: <FaFlask size={50} className="text-success" />,
    title: 'Advance Research & Development',
    description: 'Empowering progress through cutting-edge Research and Development, our commitment to innovation fuels the future.',
  },
  {
    icon: <FaMoneyBillWave size={50} className="text-warning" />,
    title: 'Cooperative Price',
    description: 'Offering competitive pricing without compromising quality, we make your satisfaction affordable.',
  },
  {
    icon: <FaUserGraduate size={50} className="text-info" />,
    title: 'Highly skilled & qualified team',
    description: 'Our team comprises highly qualified and skilled personnel, ensuring precision and expertise in every aspect of your project.',
  },
  {
    icon: <FaClock size={50} className="text-danger" />,
    title: 'On-time Delivery',
    description: 'We prioritize on-time delivery, so your projects stay on schedule and within deadlines.',
  },
  {
    icon: <FaHandshake size={50} className="text-secondary" />,
    title: 'After sales support',
    description: 'Our after-sales support ensures your ongoing satisfaction and success.',
  },
];

const WhyChooseUs = () => (
  <section className="py-5 bg-light">
    <div className="container text-center">
      <h2 className="mb-5 fw-bold">Why Choose Us?</h2>
      <div className="row g-4">
        {features.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                className="mb-3 mx-auto"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
