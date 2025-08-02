// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import Logo from "../static/Logo.png";
// import phoneIcon from "../static/telephone-icon.svg";
// import mailIcon from "../static/mail-icon.svg";
// import locationIcon from "../static/location-icon.svg";
// import { Link } from "react-router-dom"; // Or 'gatsby' if using Gatsby

// const Footer = () => {
//   return (
//     <footer className="bg-light text-dark pt-5 border-top">
//       <Container>
//         <Row>
//           {/* Logo and Description */}
//           <Col md={4}>
//             <Link to="/">
//               <Image src={Logo} alt="Company Logo" width={200} className="mb-3" />
//             </Link>
//             <p className="fw-medium text-muted">
//               Refinery chemicals homepage structure Refinery chemicals homepage structure Refinery chemicals homepage structure
//             </p>
//             <div className="d-flex gap-3">
//               <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//                 <i className="fab fa-facebook fa-lg text-primary"></i>
//               </a>
//               <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
//                 <i className="fab fa-instagram fa-lg text-danger"></i>
//               </a>
//               <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
//                 <i className="fab fa-linkedin fa-lg text-info"></i>
//               </a>
//               <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
//                 <i className="fab fa-youtube fa-lg text-danger"></i>
//               </a>
//             </div>
//           </Col>

//           {/* Useful Links */}
//           <Col md={4}>
//             <h5 className="text-success mb-3">Useful Links</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
//               <li><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
//               <li><Link to="/services" className="text-decoration-none text-dark">Services</Link></li>
//               <li><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
//             </ul>
//           </Col>

//           {/* Contact Info */}
//           <Col md={4}>
//             <h5 className="text-success mb-3">Contact Us</h5>
//             <div className="mb-2">
//               <a
//                 href="https://wa.me/919687431287"
//                 className="btn btn-success btn-sm d-inline-flex align-items-center gap-2"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <i className="fab fa-whatsapp"></i>
//                 Project Inquiry on WhatsApp
//               </a>
//             </div>
//             <div className="d-flex align-items-center mb-2">
//               <Image src={phoneIcon} alt="Phone" width={20} className="me-2" />
//               <a href="tel:+919687431287" className="text-decoration-none text-dark">+91 96874 31287</a>
//             </div>
//             <div className="d-flex align-items-center mb-2">
//               <Image src={mailIcon} alt="Email" width={20} className="me-2" />
//               <a href="mailto:info@nntcement.com" className="text-decoration-none text-dark">info@nntrefinery.com</a>
//             </div>
//             <div className="d-flex">
//               <Image src={locationIcon} alt="Location" width={20} className="me-2" />
//               <p className="mb-0 text-muted">
//                 3rd Floor, Diamond Complex, SH 41,<br />
//                 Industrial Area, Chhapi, North Gujarat, India. 385210
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <div className="bg-white border-top mt-4">
//         <Container>
//           <p className="text-center py-3 mb-0 small text-muted">
//             © 2025 Your Company Name. All Rights Reserved. | Developed by NNT Software
//           </p>
//         </Container>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../static/Logo.png";
import phoneIcon from "../static/telephone-icon.svg";
import mailIcon from "../static/mail-icon.svg";
import locationIcon from "../static/location-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-dark pt-5 border-top">
      <Container>
        <Row className="gy-4 align-items-start">
          {/* Section 1: Logo & Description */}
          <Col md={4} className="d-flex flex-column justify-content-start" style={{ marginTop: "-50px" }}>
            <Link to="/" className="mb-3">
              <Image src={Logo} alt="N&T Cement Logo" width={228} />
            </Link>
            <p className="text-muted" style={{ fontSize: "17px", lineHeight: "1.6", marginTop: "-90px" }}>
              Cement plant Home page structure Cement plant Home page structure Cement plant Home page structure
            </p>
            <div className="d-flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-lg text-primary"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-lg text-danger"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-lg text-primary"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube fa-lg text-danger"></i>
              </a>
            </div>
          </Col>

          {/* Section 2: Useful Links */}
          <Col md={4} className="d-flex flex-column justify-content-start">
            <h5 className="text-success fw-semibold mb-3">Useful links</h5>
            <ul className="list-unstyled" style={{ fontSize: "20px", lineHeight: "1.9" }}>
              <li>
                <Link to="/" className="text-decoration-none text-dark">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-dark">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-decoration-none text-dark">Service</Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-dark">Contact</Link>
              </li>
            </ul>
          </Col>

          {/* Section 3: Contact Info */}
          <Col md={4} className="d-flex flex-column justify-content-start">
            <h5 className="text-success fw-semibold mb-3">Contact us</h5>

            <div className="mb-3">
              <a
                href="https://wa.me/919687431287"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success d-inline-flex align-items-center gap-2 px-3 py-2"
              >
                <i className="fab fa-whatsapp fa-lg"></i>
                <span style={{ fontSize: "16px" }}>Project Inquiry on WhatsApp</span>
              </a>
            </div>

            <div className="d-flex align-items-center mb-2">
              <Image src={phoneIcon} alt="Phone" width={20} className="me-2" />
              <a href="tel:+919687431287" className="text-decoration-none text-dark" style={{ fontSize: "17px" }}>
                +91 96874 31287
              </a>
            </div>

            <div className="d-flex align-items-center mb-2">
              <Image src={mailIcon} alt="Email" width={20} className="me-2" />
              <a href="mailto:info@nntcement.com" className="text-decoration-none text-dark" style={{ fontSize: "17px" }}>
                info@nntrefinery.com
              </a>
            </div>

            <div className="d-flex">
              <Image src={locationIcon} alt="Location" width={20} className="me-2 mt-1" />
              <p className="mb-0 text-muted" style={{ fontSize: "17px", lineHeight: "1.5" }}>
                3rd Floor, Diamond Complex, SH 41, <br />
                Industrial Area, Chhapi, North Gujarat, India. 385210
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom Copyright */}
      <div className="border-top mt-4">
        <Container>
          <p className="text-center py-3 mb-0 text-muted small" style={{ fontSize: "15px" }}>
            Copyright © 2025 N&T Engitech Pvt. Ltd. All Rights Reserved. | Developed by NNT Software.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
