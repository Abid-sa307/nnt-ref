// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Link } from "react-router-dom";
// import Logo from '../Assests/Logo.png';

// const Header = () => {
//   return (
//     <header className="sticky-top bg-white shadow-sm">
//       <nav className="navbar navbar-expand-md navbar-light bg-white container position-relative">

//         {/* ✅ Logo */}
//         <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
//           <img
//             src={Logo}
//             alt="Company Logo"
//             style={{ height: "60px", marginLeft: "160px", width: "auto" }}
//           />
//           NNT
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
//           <ul className="navbar-nav align-items-center gap-3" style={{ position: "relative", left: "5px" }}>
            
//             <li className="nav-item">
//               <Link to="/" className="nav-link">Home</Link>
//             </li>

//             {/* ✅ Our Products Dropdown */}
//             <li className="nav-item dropdown">
//               <button
//                 className="nav-link dropdown-toggle btn btn-link"
//                 id="productsDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Our Products
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="productsDropdown">
//                 <li><Link className="dropdown-item" to="/our-products/caustic-soda">Caustic Soda Flakes</Link></li>
//                 <li><Link className="dropdown-item" to="/our-products/bleaching-earth">Bleaching Earth</Link></li>
//                 <li><Link className="dropdown-item" to="/our-products/filter-flow-aid">Filter Flow Aid</Link></li>
//                 <li><Link className="dropdown-item" to="/our-products/citric-acid">Citric Acid</Link></li>
//               </ul>
//             </li>

//             {/* ✅ Industries Served */}
//             <li className="nav-item">
//               <Link to="/industries" className="nav-link">Industries Served</Link>
//             </li>

//             {/* ✅ Quality Assurance (create page later) */}
//             <li className="nav-item">
//               <Link to="/quality-assurance" className="nav-link">Quality Assurance</Link>
//             </li>

//             {/* ✅ Company Dropdown */}
//             <li className="nav-item dropdown">
//               <button
//                 className="nav-link dropdown-toggle btn btn-link"
//                 id="companyDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Company
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="companyDropdown">
//                 <li><Link className="dropdown-item" to="/about">About Us</Link></li>
//                 <li><Link className="dropdown-item" to="/blog">Blog / Insights</Link></li>
//               </ul>
//             </li>

//             {/* ✅ Contact Us */}
//             <li className="nav-item">
//               <Link to="/contact" className="btn btn-primary">Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Logo from '../Assests/Logo.png'; // ✅ Your logo image
// import './header.css'; // ✅ Custom styles

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed-top ${scrolled ? 'navbar-solid' : 'navbar-transparent'} transition`}>
//       <nav className="navbar navbar-expand-lg">
//         <div className="container">
//           <Link to="/" className="navbar-brand position-relative">
//   <div className="logo-wrapper">
//     <img src={Logo} alt="NNT Logo" className="logo-img" />
//   </div>
// </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav gap-3 align-items-center">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link text-white">Home</Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <button className="btn btn-link nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">
//                   Our Products
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li><Link to="/our-products/caustic-soda" className="dropdown-item">Caustic Soda Flakes</Link></li>
//                   <li><Link to="/our-products/bleaching-earth" className="dropdown-item">Bleaching Earth</Link></li>
//                   <li><Link to="/our-products/filter-flow-aid" className="dropdown-item">Filter Flow Aid</Link></li>
//                   <li><Link to="/our-products/citric-acid" className="dropdown-item">Citric Acid</Link></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link to="/industries" className="nav-link text-white">Industries Served</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/quality-assurance" className="nav-link text-white">Quality Assurance</Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <button className="btn btn-link nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">
//                   Company
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li><Link to="/about" className="dropdown-item">About Us</Link></li>
//                   <li><Link to="/blog" className="dropdown-item">Blog / Insights</Link></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className="btn btn-light text-primary fw-semibold px-4">Contact Us</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../Assests/Logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const navbarClass = scrolled || !isHomePage ? 'navbar-solid' : 'navbar-transparent';

  return (
    <>
      <header className={`fixed-top ${navbarClass} transition`}>
        <nav className="navbar navbar-expand-lg" style={{ minHeight: '70px', overflow: 'visible', alignItems: 'center' }}>
          <div className="container">
            <Link to="/" className="navbar-brand position-relative">
              <div style={{ position: 'absolute', top: '-45px', left: 0 }}>
                <img
                  src={Logo}
                  alt="NNT Logo"
                  style={{
                    height: '120px',
                    width: 'auto',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}
                />
              </div>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav gap-3 align-items-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <button className="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Our Products
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link to="/our-products/caustic-soda" className="dropdown-item">Caustic Soda Flakes</Link></li>
                    <li><Link to="/our-products/bleaching-earth" className="dropdown-item">Bleaching Earth</Link></li>
                    <li><Link to="/our-products/filter-flow-aid" className="dropdown-item">Filter Flow Aid</Link></li>
                    <li><Link to="/our-products/citric-acid" className="dropdown-item">Citric Acid</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/industries" className="nav-link">Industries Served</Link>
                </li>
                <li className="nav-item">
                  <Link to="/quality-assurance" className="nav-link">Quality Assurance</Link>
                </li>
                <li className="nav-item dropdown">
                  <button className="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Company
                  </button>
                  <ul className="dropdown-menu">
                    {/* <li><Link to="/about" className="dropdown-item">About Us</Link></li> */}
                    <li className="nav-item">
                  <Link to="/about-us" className="dropdown-item">AboutUs</Link>
                </li>
                    <li><Link to="/blog" className="dropdown-item">Blog / Insights</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
  {/* <a className="btn btn-light text-primary fw-semibold px-4" href="#contact">Contact Us</a> */}

  
  <Link to="/contact">
    <button className="btn btn-primary">Contact Us</button>
  </Link>
</li>


              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Inline styles to mimic the previous CSS behavior */}
      <style>{`
        .navbar-transparent {
          background: transparent !important;
          transition: all 0.3s ease;
        }

        .navbar-solid {
          background-color: white !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .navbar-transparent .nav-link {
          color: white !important;
        }

        .navbar-solid .nav-link {
          color: #212529 !important;
        }

        .transition {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Header;
