// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Logo from '../Assests/RefineryLogoTransparent.png';
// import LogoWhiteBG from '../Assests/RefineryLogoWhiteBG.png';
// import { Navbar, Container, Offcanvas, Button, Nav, Image } from 'react-bootstrap';
// import { Whatsapp } from 'react-bootstrap-icons';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [show, setShow] = useState(false);
//   const [showDropdown1, setShowDropdown1] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);
//   const location = useLocation();

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     setScrolled(window.scrollY > 80);
//   //   };
//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);

//   // const isHomePage = location.pathname === '/';
//   // // const navbarClass = scrolled || !isHomePage ? 'navbar-solid' : 'navbar-transparent';
//   // const navbarClass = scrolled ? 'navbar-solid' : 'navbar-transparent';

//   useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 80);
//   };
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// const isHomePage = location.pathname === '/';
// const isBlogPage = location.pathname.startsWith('/our-blog');
// const isContactPage = location.pathname.startsWith('/contact');
// const isBlogDetail = location.pathname.startsWith('/blogdetail');

// // ✅ New Logic: solid navbar for Blog & Contact always
// const navbarClass = (isBlogPage || isContactPage || isBlogDetail || scrolled) ? 'navbar-solid' : 'navbar-transparent';


//   return (
//     <>
//       {/* Desktop Header */}
//       <header className={`fixed-top ${navbarClass} transition d-none d-lg-block`}>
//         <nav className="navbar navbar-expand-lg" style={{ minHeight: '70px', alignItems: 'center' }}>
//           <div className="container">
//             <Link to="/" className="navbar-brand position-relative">
//               <div style={{ position: 'absolute', top: '-45px', left: 0 }}>
//                 {/* <img
//                   src={Logo}
//                   alt="NNT Logo"
//                   style={{
//                     height: '70px',
//                     padding: '4px',
//                     marginTop: '16px',
//                     display: 'block'
//                   }}
//                 /> */}
//                 <img
//   src={navbarClass === 'navbar-solid' ? LogoWhiteBG : Logo}
//   alt="NNT Refinery Logo"
//   style={{
//     height: '70px',
//     marginTop: '16px',
//     display: 'block',
//     transition: 'all 0.3s ease'
//   }}
// />
//               </div>
//             </Link>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//               <ul className="navbar-nav gap-3 align-items-center">
//                 <li className="nav-item">
//                   <Link to="/" className="nav-link">Home</Link>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <button className="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                     Our Products
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link to="/our-products/caustic-soda" className="dropdown-item">Caustic Soda Flakes</Link></li>
//                     <li><Link to="/our-products/bleaching-earth" className="dropdown-item">Bleaching Earth</Link></li>
//                     <li><Link to="/our-products/filter-flow-aid" className="dropdown-item">Filter Flow Aid</Link></li>
//                     <li><Link to="/our-products/citric-acid" className="dropdown-item">Citric Acid</Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/industries" className="nav-link">Industries Served</Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/quality-assurance" className="nav-link">Quality Assurance</Link>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <button className="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                     Company
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><Link to="/about-us" className="dropdown-item">About Us</Link></li>
//                     <li><Link to="/our-blog" className="dropdown-item">Blog / Insights</Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/contact">
//                     <button className="btn btn-primary">Contact Us</button>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Navbar + Offcanvas */}
//       <Navbar expand="lg" className="d-lg-none fixed-top bg-white shadow-sm">
//         <Container>
//           <Navbar.Brand href="/" className="me-5">
//             <Image src={Logo} width={100} height={60} alt="NNT Logo" />
//           </Navbar.Brand>
//           <Button variant="light" onClick={handleShow} className="border-0">
//             <span className="navbar-toggler-icon"></span>
//           </Button>
//         </Container>
//       </Navbar>

//       <Offcanvas show={show} onHide={handleClose} placement="start">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title className="fw-bold">Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>

//             {/* Products Dropdown */}
//             <div className="mobile-dropdown">
//               <Button
//                 variant="link"
//                 onClick={() => setShowDropdown1(!showDropdown1)}
//                 className="text-start w-100 fw-bold text-primary ps-0"
//               >
//                 Our Products {showDropdown1 ? '▲' : '▼'}
//               </Button>
//               {showDropdown1 && (
//                 <div className="ps-3">
//                   <Nav.Link as={Link} to="/our-products/caustic-soda" onClick={handleClose}>Caustic Soda Flakes</Nav.Link>
//                   <Nav.Link as={Link} to="/our-products/bleaching-earth" onClick={handleClose}>Bleaching Earth</Nav.Link>
//                   <Nav.Link as={Link} to="/our-products/filter-flow-aid" onClick={handleClose}>Filter Flow Aid</Nav.Link>
//                   <Nav.Link as={Link} to="/our-products/citric-acid" onClick={handleClose}>Citric Acid</Nav.Link>
//                 </div>
//               )}
//             </div>

//             {/* Company Dropdown */}
//             <div className="mobile-dropdown mt-2">
//               <Button
//                 variant="link"
//                 onClick={() => setShowDropdown2(!showDropdown2)}
//                 className="text-start w-100 fw-bold text-primary ps-0"
//               >
//                 Company {showDropdown2 ? '▲' : '▼'}
//               </Button>
//               {showDropdown2 && (
//                 <div className="ps-3">
//                   <Nav.Link as={Link} to="/about-us" onClick={handleClose}>About Us</Nav.Link>
//                   <Nav.Link as={Link} to="/our-blog" onClick={handleClose}>Blog / Insights</Nav.Link>
//                 </div>
//               )}
//             </div>

//             <Nav.Link as={Link} to="/industries" onClick={handleClose} className="mt-2">Industries Served</Nav.Link>
//             <Nav.Link as={Link} to="/quality-assurance" onClick={handleClose}>Quality Assurance</Nav.Link>

//             {/* Contact & WhatsApp */}
//             <div className="d-flex align-items-center gap-3 mt-4">
//               <Link to="/contact" onClick={handleClose} className="btn navbar-button fw-bold w-100">Contact Us</Link>
//               <a
//                 href="https://wa.me/919687431287"
//                 className="btn d-flex align-items-center justify-content-center"
//                 style={{
//                   backgroundColor: '#25D366',
//                   color: 'white',
//                   width: '45px',
//                   height: '45px',
//                   borderRadius: '50%',
//                 }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Whatsapp className="fs-4" />
//               </a>
//             </div>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>

//       <style>{`
//         .navbar-transparent {
//           background: transparent !important;
//           transition: all 0.3s ease;
//         }
//         .navbar-solid {
//           background-color: white !important;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }
//         .navbar-transparent .nav-link {
//           color: white !important;
//         }
//         .navbar-solid .nav-link {
//           color: #212529 !important;
//         }
//         .transition {
//           transition: all 0.3s ease-in-out;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;




import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LogoGreen from '../Assests/LogoGreen.png'; // Green logo for solid navbar
import LogoWhite from '../Assests/LogoWhite.png';
import { Navbar, Container, Offcanvas, Button, Nav, Image } from 'react-bootstrap';
import { Whatsapp } from 'react-bootstrap-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname.startsWith('/our-blog');
  const isContactPage = location.pathname.startsWith('/contact');
  const isBlogDetail = location.pathname.startsWith('/blogdetail');

  // Solid navbar for Blog & Contact always
  const navbarClass = (isBlogPage || isContactPage || isBlogDetail || scrolled) ? 'navbar-solid' : 'navbar-transparent';

  return (
    <>
      {/* Desktop Header */}
      <header className={`fixed-top ${navbarClass} transition d-none d-lg-block`}>
        <nav className="navbar navbar-expand-lg" style={{ minHeight: '70px', alignItems: 'center' }}>
          <div className="container">
            <Link to="/" className="navbar-brand position-relative">
              <div style={{ position: 'absolute', top: '-45px', left: 0 }}>
                {/* ✅ Swap logo based on navbar style */}
                <img
                  src={navbarClass === 'navbar-solid' ?   LogoGreen:LogoWhite}
                  alt="NNT Refinery Logo"
                  style={{
                    height: '75px',
                    marginTop: '12px',
                    display: 'block',
                    transition: 'all 0.3s ease'
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
                    <li><Link to="/about-us" className="dropdown-item">About Us</Link></li>
                    <li><Link to="/our-blog" className="dropdown-item">Blog / Insights</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/contact">
                    <button className="btn btn-primary">Contact Us</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navbar + Offcanvas */}
      <Navbar expand="lg" className="d-lg-none fixed-top bg-white shadow-sm">
        <Container>
          <Navbar.Brand href="/" className="me-5">
            {/* ✅ Mobile can also swap if you want */}
            <Image
              src={navbarClass === 'navbar-solid' ?  LogoGreen:LogoWhite}
              width={100}
              height={60}
              alt="NNT Logo"
            />
          </Navbar.Brand>
          <Button variant="light" onClick={handleShow} className="border-0">
            <span className="navbar-toggler-icon"></span>
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>

            {/* Products Dropdown */}
            <div className="mobile-dropdown">
              <Button
                variant="link"
                onClick={() => setShowDropdown1(!showDropdown1)}
                className="text-start w-100 fw-bold text-primary ps-0"
              >
                Our Products {showDropdown1 ? '▲' : '▼'}
              </Button>
              {showDropdown1 && (
                <div className="ps-3">
                  <Nav.Link as={Link} to="/our-products/caustic-soda" onClick={handleClose}>Caustic Soda Flakes</Nav.Link>
                  <Nav.Link as={Link} to="/our-products/bleaching-earth" onClick={handleClose}>Bleaching Earth</Nav.Link>
                  <Nav.Link as={Link} to="/our-products/filter-flow-aid" onClick={handleClose}>Filter Flow Aid</Nav.Link>
                  <Nav.Link as={Link} to="/our-products/citric-acid" onClick={handleClose}>Citric Acid</Nav.Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="mobile-dropdown mt-2">
              <Button
                variant="link"
                onClick={() => setShowDropdown2(!showDropdown2)}
                className="text-start w-100 fw-bold text-primary ps-0"
              >
                Company {showDropdown2 ? '▲' : '▼'}
              </Button>
              {showDropdown2 && (
                <div className="ps-3">
                  <Nav.Link as={Link} to="/about-us" onClick={handleClose}>About Us</Nav.Link>
                  <Nav.Link as={Link} to="/our-blog" onClick={handleClose}>Blog / Insights</Nav.Link>
                </div>
              )}
            </div>

            <Nav.Link as={Link} to="/industries" onClick={handleClose} className="mt-2">Industries Served</Nav.Link>
            <Nav.Link as={Link} to="/quality-assurance" onClick={handleClose}>Quality Assurance</Nav.Link>

            {/* Contact & WhatsApp */}
            <div className="d-flex align-items-center gap-3 mt-4">
              <Link to="/contact" onClick={handleClose} className="btn navbar-button fw-bold w-100">Contact Us</Link>
              <a
                href="https://wa.me/919687431287"
                className="btn d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: '#25D366',
                  color: 'white',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp className="fs-4" />
              </a>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

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
