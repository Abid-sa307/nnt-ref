import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './QualityAssurance.css'; // Optional: add custom styling if needed
import isoImage from '../Assests/iso-cert.png'; // Replace with your actual image
import labTestImage from '../Assests/lab-testing.png'; // Replace with your actual image
import packagingImage from '../Assests/packaging.png'; // Replace with your actual image
import logisticsImage from '../Assests/logistics.png'; // Replace with your actual image
import msdsImage from '../Assests/msds-sample.png'; // Replace with your actual image

const QualityAssurance = () => {
  const sections = [
    {
      title: 'ISO & Compliance Certifications',
      content:
        'We are certified under ISO 9001:2015 and comply with international standards including REACH, RoHS, and GHS. Our certifications validate our consistent commitment to safety, sustainability, and quality.',
      image: isoImage,
    },
    {
      title: 'Lab Testing Process',
      content:
        'Every batch is tested in-house using high-precision instruments. Our QA lab ensures pH, purity, moisture, and other technical parameters are rigorously measured and documented.',
      image: labTestImage,
    },
    {
      title: 'Packaging Standards',
      content:
        'Our chemicals are packed in HDPE drums, fiber drums, or laminated bags depending on product sensitivity. All packaging meets export-grade safety protocols.',
      image: packagingImage,
    },
    {
      title: 'Logistics & Handling',
      content:
        'We ensure safe loading, international labeling compliance, MSDS attachments, and traceability through GPS-monitored shipping partners.',
      image: logisticsImage,
    },
    {
      title: 'MSDS & Safety Protocols',
      content:
        'Each shipment includes MSDS sheets and hazard communication labeling. Our team is trained to follow OSHA, IMDG, and IATA regulations for global exports.',
      image: msdsImage,
    },
  ];

  return (
    <section className="py-5 bg-light quality-page">
      <div className="container">
        <h2 className="text-center fw-bold text-primary mb-5">Quality Assurance</h2>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
          >
            <div className="col-md-6">
              <img
                src={section.image}
                alt={section.title}
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold text-secondary">{section.title}</h4>
              <p className="text-muted">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualityAssurance;
