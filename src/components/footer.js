import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../static/Logo.png";
import phoneIcon from "../static/telephone-icon.svg";
import mailIcon from "../static/mail-icon.svg";
import locationIcon from "../static/location-icon.svg";
import footerMeta from "../data/metaData";
import Seo from "../components/seo";


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <Seo meta={footerMeta} />
    <footer className="bg-white text-dark pt-5 border-top">
      <Container>
        <Row className="gy-4 align-items-start">
          {/* Section 1: Logo & Description */}
          <Col md={4} className="d-flex flex-column justify-content-start" style={{ marginTop: "-50px" }}>
            <Link to="/" className="mb-3">
              <Image src={Logo} alt="N&T Refinery Logo" width={228} />
            </Link>
            <p className="text-muted" style={{ fontSize: "17px", lineHeight: "1.6", marginTop: "-90px" }}>
              Refinery chemicals homepage structure Refinery chemicals homepage structure Refinery chemicals homepage structure
            </p>
            <div className="d-flex gap-4 mt-2">
              <a href="https://www.facebook.com/people/Refinery-Clay-Supplier/61578785995761/" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-lg text-primary"></i>
              </a>
              {/* <a href="https://www.instagram.com/nnt_cement/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-lg text-danger"></i>
              </a>
              <a href="https://www.linkedin.com/in/yunus-khan-895335200/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-lg text-primary"></i>
              </a>
              <a href="https://www.youtube.com/@Divison-" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube fa-lg text-danger"></i>
              </a>*/}
            </div> 
          </Col>


       <div className="col-md-4">
  <h5 className="mb-3" style={{ color: "green", fontWeight: "600" }}>
    Useful links
  </h5>
  <ul className="list-unstyled" style={{ fontSize: "18px", lineHeight: "2" }}>
    <li>
      <a href="/" className="text-decoration-none text-dark">Home</a>
    </li>
    <li>
      <a href="/about-us" className="text-decoration-none text-dark">About</a>
    </li>
    <li>
      <a href="/#products" className="text-decoration-none text-dark">Products</a>
    </li>
    <li>
      <a href="/contact" className="text-decoration-none text-dark">Contact</a>
    </li>
  </ul>
</div>



          {/* Section 3: Contact Info */}
          <Col md={4} className="d-flex flex-column justify-content-start">
            <h5 className="text-success fw-semibold mb-3">Contact us</h5>

            <div className="mb-3">
              <a
                href="https://wa.me/919723392753"
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
              <a href="tel:+919723392753" className="text-decoration-none text-dark" style={{ fontSize: "17px" }}>
                +91 9723392753
              </a>
            </div>

            <div className="d-flex align-items-center mb-2">
              <Image src={mailIcon} alt="Email" width={20} className="me-2" />
              <a href="mailto:info@nntcement.com" className="text-decoration-none text-dark" style={{ fontSize: "17px" }}>
                mahemud@nandtengitech.com
              </a>
            </div>

            <div className="d-flex">
              <Image src={locationIcon} alt="Location" width={20} className="me-2 mt-1" />
              <p className="mb-0 text-muted" style={{ fontSize: "17px", lineHeight: "1.5" }}>
                {/* 3rd Floor, Diamond Complex, SH 41, <br />
                Industrial Area, Chhapi, North Gujarat, India. 385210 */}
                 3rd Floor, Sh 41 Industrial Area At Chhapi Palanpur Ahmedabad higheway, Vadgam, India. 385210 
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
    </>
  );
};

export default Footer;
