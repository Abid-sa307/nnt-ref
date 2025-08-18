// import React from 'react';
// import {
//   Package,
//   FlaskConical,
//   BadgeDollarSign,
//   GraduationCap,
//   Clock,
//   Handshake
// } from 'lucide-react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBoxOpen, FaFlask, FaMoneyBillWave, FaUserGraduate, FaClock, FaHandshake } from 'react-icons/fa';

// const features = [
//   {
//     icon: <Package size={40} strokeWidth={2} className="text-primary" />,
//     title: 'Best-quality Products',
//     description: 'Delivering the finest in quality products, our commitment to excellence is your assurance of the best.',
//   },
//   {
//     icon: <FlaskConical size={40} strokeWidth={2} className="text-success" />,
//     title: 'Advance Research & Development',
//     description: 'Empowering progress through cutting-edge Research and Development, our commitment to innovation fuels the future.',
//   },
//   {
//     icon: <BadgeDollarSign size={40} strokeWidth={2} className="text-warning" />,
//     title: 'Cooperative Price',
//     description: 'Offering competitive pricing without compromising quality, we make your satisfaction affordable.',
//   },
//   {
//     icon: <GraduationCap size={40} strokeWidth={2} className="text-info" />,
//     title: 'Highly skilled & qualified team',
//     description: 'Our team comprises highly qualified and skilled personnel, ensuring precision and expertise in every aspect of your project.',
//   },
//   {
//     icon: <Clock size={40} strokeWidth={2} className="text-danger" />,
//     title: 'On-time Delivery',
//     description: 'We prioritize on-time delivery, so your projects stay on schedule and within deadlines.',
//   },
//   {
//     icon: <Handshake size={40} strokeWidth={2} className="text-secondary" />,
//     title: 'After sales support',
//     description: 'Our after-sales support ensures your ongoing satisfaction and success.',
//   },
// ];


// const WhyChooseUs = () => (
//   <section className="py-5 bg-light">
//     <div className="container text-center">
//       <h2 className="mb-5 fw-bold" style={{ color: '#3366cc' }}>Why Choose Us?</h2>
//       <div className="row g-4">
//         {features.map((item, index) => (
//           <div className="col-md-4" key={index}>
//             <div
//               className="p-4 rounded-4 shadow-sm h-100"
//               style={{
//                 backgroundColor: '#fff',
//                 borderRadius: '20px',
//                 boxShadow: '0 0 15px rgba(0, 0, 0, 0.06)',
//                 transition: 'all 0.3s ease',
//               }}
//             >
//               <div
//                 className="mb-3 mx-auto"
//                 style={{
//                   width: '80px',
//                   height: '80px',
//                   borderRadius: '50%',
//                   backgroundColor: '#f0f0f0',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {item.icon}
//               </div>
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


import React from 'react';
import { whyChooseUsMeta } from '../data/metaData';
import {
  Package,
  FlaskConical,
  BadgeDollarSign,
  GraduationCap,
  Clock,
  Handshake
} from 'lucide-react';

import 'bootstrap/dist/css/bootstrap.min.css';


const features = [
  {
    icon: <Package size={36} strokeWidth={2} className="text-primary" />,
    title: 'Best-quality Products',
    description: 'Delivering the finest in quality products, our commitment to excellence is your assurance of the best.',
  },
  {
    icon: <FlaskConical size={36} strokeWidth={2} className="text-success" />,
    title: 'Advance Research & Development',
    description: 'Empowering progress through cutting-edge Research and Development, our commitment to innovation fuels the future.',
  },
  {
    icon: <BadgeDollarSign size={36} strokeWidth={2} className="text-warning" />,
    title: 'Cooperative Price',
    description: 'Offering competitive pricing without compromising quality, we make your satisfaction affordable.',
  },
  {
    icon: <GraduationCap size={36} strokeWidth={2} className="text-info" />,
    title: 'Highly skilled & qualified team',
    description: 'Our team comprises highly qualified and skilled personnel, ensuring precision and expertise in every aspect of your project.',
  },
  {
    icon: <Clock size={36} strokeWidth={2} className="text-danger" />,
    title: 'On-time Delivery',
    description: 'We prioritize on-time delivery, so your projects stay on schedule and within deadlines.',
  },
  {
    icon: <Handshake size={36} strokeWidth={2} className="text-secondary" />,
    title: 'After sales support',
    description: 'Our after-sales support ensures your ongoing satisfaction and success.',
  },
];

const WhyChooseUs = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-5 fw-bold text-center" style={{ color: '#3366cc' }}>Why Choose Us?</h2>

      <div className="row g-4">
        {features.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div
              className="d-flex align-items-start p-4 rounded-4"
              style={{
                background: 'linear-gradient(to right, #fffdf5, #f5fefb)',
                borderRadius: '16px',
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  minWidth: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: '#eef3fc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

