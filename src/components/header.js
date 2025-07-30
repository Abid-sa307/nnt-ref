import React from "react";
// import Logo from "../../static/images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <header className="sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-md navbar-light bg-white container position-relative">

        {/* Logo on the left */}
        {/* <img src={Logo} className="Logo" alt="NNT Refinery Clay Supplier" height={51}/> */}

        {/* Hamburger button (mobile view) */}
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

        {/* Navigation menu & CTA button */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
  <ul
    className="navbar-nav align-items-center gap-3"
    style={{ position: "relative", left: "5px" }}
  >

            {/* Home */}
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            {/* Our Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><a className="dropdown-item" href="#">Caustic Soda Flakes</a></li>
                <li><a className="dropdown-item" href="#">Bleaching Earth</a></li>
                <li><a className="dropdown-item" href="#">Filter Flow Aid</a></li>
                <li><a className="dropdown-item" href="#">Citric Acid</a></li>
              </ul>
            </li>

            {/* Industries Served */}
            <li className="nav-item">
              <a className="nav-link" href="#">Industries Served</a>
            </li>

            {/* Quality Assurance */}
            <li className="nav-item">
              <a className="nav-link" href="#">Quality Assurance</a>
            </li>

            {/* Company Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="companyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="companyDropdown">
                <li><a className="dropdown-item" href="#">About Us</a></li>
                <li><a className="dropdown-item" href="#">Blog / Insights</a></li>
              </ul>
            </li>

            {/* CTA Button */}
            
<li className="nav-item">
  <button className="btn btn-primary">
    Contact Us
  </button>
</li>


            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;