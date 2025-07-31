import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Logo from '../Assests/Logo.png';

const Header = () => {
  return (
    <header className="sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-md navbar-light bg-white container position-relative">

        {/* ✅ Logo */}
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
          <img
            src={Logo}
            alt="Company Logo"
            style={{ height: "60px", marginLeft: "160px", width: "auto" }}
          />
          NNT
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav align-items-center gap-3" style={{ position: "relative", left: "5px" }}>
            
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            {/* ✅ Our Products Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="productsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><Link className="dropdown-item" to="/our-products/caustic-soda">Caustic Soda Flakes</Link></li>
                <li><Link className="dropdown-item" to="/our-products/bleaching-earth">Bleaching Earth</Link></li>
                <li><Link className="dropdown-item" to="/our-products/filter-flow-aid">Filter Flow Aid</Link></li>
                <li><Link className="dropdown-item" to="/our-products/citric-acid">Citric Acid</Link></li>
              </ul>
            </li>

            {/* ✅ Industries Served */}
            <li className="nav-item">
              <Link to="/industries" className="nav-link">Industries Served</Link>
            </li>

            {/* ✅ Quality Assurance (create page later) */}
            <li className="nav-item">
              <Link to="/quality-assurance" className="nav-link">Quality Assurance</Link>
            </li>

            {/* ✅ Company Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="companyDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </button>
              <ul className="dropdown-menu" aria-labelledby="companyDropdown">
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/blog">Blog / Insights</Link></li>
              </ul>
            </li>

            {/* ✅ Contact Us */}
            <li className="nav-item">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
