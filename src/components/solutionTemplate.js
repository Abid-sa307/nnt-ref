import React from "react";
//import "../../components/ProductPage.css";

const SolutionsTemplate = ({
  productName,
  bannerSection,
  aboutSection,
  verticalImages,
  specification,
  application,
  packaging,
  quality,
  otherServices,
}) => {
  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="fw-bold text-primary mb-3">{bannerSection.title}</h1>
          <p className="text-muted">{bannerSection.subtitle}</p>
        </div>
        <div className="col-md-6 text-center">
          <img src={bannerSection.img} alt={productName} className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* About Section */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <img src={aboutSection.img} alt={`${productName} main`} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold">{aboutSection.title}</h4>
          <p>{aboutSection.desc}</p>
          <ul>
            {aboutSection.bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vertical Images */}
      <div className="row my-4">
        {verticalImages.map((img, index) => (
          <div key={index} className="col-md-4 mb-3">
            <img src={img} alt={`Feature ${index + 1}`} className="img-fluid rounded shadow-sm" />
          </div>
        ))}
      </div>

      {/* Specs & Details */}
      <div className="card shadow-sm border-0 my-4">
        <div className="card-body">
          <section className="mb-4">
            <h5 className="text-secondary">📄 Specifications / MSDS</h5>
            <ul className="list-group list-group-flush mb-2">
              {specification.map((item, i) => (
                <li key={i} className="list-group-item">
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">🛠️ Applications</h5>
            <ul className="list-group list-group-flush mb-2">
              {application.map((app, i) => (
                <li key={i} className="list-group-item">{app}</li>
              ))}
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">📦 Packaging & Delivery</h5>
            <p className="text-muted">{packaging}</p>
          </section>

          <section className="mb-4">
            <h5 className="text-secondary">✅ Quality & Compliance</h5>
            <p className="text-muted">{quality}</p>
          </section>

          <div className="text-center my-4">
            <a href="/contact" className="btn btn-lg btn-primary px-5">
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Other Services */}
      <div className="row my-5">
        {otherServices.map((service, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <img src={service.img} alt={service.title} className="img-fluid mb-3" />
              <h6 className="fw-semibold">{service.title}</h6>
              <p className="text-muted">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsTemplate;
