import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import Footer from '../components/footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import countries from 'i18n-iso-countries';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Contact = () => {
  const formUrl = typeof window !== 'undefined' ? window.location.href : null;
  const [curCountry, setCountry] = useState();
  const [curCity, setCity] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get('https://ipinfo.io/json').then((result) => {
      const countryCode = result.data['country'];
      const countryName = countries.getName(countryCode, 'en');
      setCountry(countryName);
      setCity(result.data['city']);
    });
  }, []);

  const validationSchema = yup.object().shape({
    full_name: yup.string().required('Name is required').matches(/^[aA-zZ\s]+$/, "Name is invalid"),
    email: yup.string().required('Email is required').email('Email is invalid'),
    mobile_number: yup.string().required("Mobile Number is required").min(4, "Mobile number is invalid"),
    description: yup.string().required('This field is required')
  });

  const formik = useFormik({
    initialValues: {
      content: "",
      full_name: "",
      email: "",
      mobile_number: "",
      company_name: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDisable(true);
      setIsLoading(true);

      const serviceId = 'service_d40q2ns';
      const templateId = 'template_2ze2p5a';
      const publicKey = 'G1Fzsqj7dPy0VjcfQ';

      const formValues = {
        to_email: 'nntrefinaryclay.development@gmail.ccom',
      //  153a62bf2c322177efa5bff05f9eeedff8c31802
        content: "New enquiry from",
        full_name: values.full_name,
        email: values.email,
        mobile_number: values.mobile_number,
        company_name: values.company_name,
        description: values.description,
        Source: formUrl,
        city: curCity,
        country: curCountry
      };
      

      try {
        const response = await emailjs.send(serviceId, templateId, formValues, publicKey);
        if (response.status === 200) {
          setSuccessMsg("Your message has been sent successfully");
          resetForm();
        } else {
          setSuccessMsg("Some error occurred. Try again.");
        }
      } catch (error) {
        console.error("EmailJS error:", error);
        setSuccessMsg("Submission failed. Check console for error.");
      } finally {
        setDisable(false);
        setIsLoading(false);
      }
    }
  });

  return (
    
    <>
    //<section style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fff', padding: '3rem 0' }}></section>
    <section id="contact" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fff', padding: '3rem 0' }}>

      <Container>
        <Row className="align-items-start">
          {/* LEFT FORM */}
          <Col lg={7}>
            <h2 style={{ color: '#0d6efd', fontWeight: 700, fontSize: '2.2rem', marginBottom: '1.5rem' }}>
              Ready to step forward
            </h2>
            <Form onSubmit={formik.handleSubmit} className="row g-3">
              <Col md={6}>
                <Form.Label style={{ fontWeight: 500 }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="full_name"
                  placeholder="Full Name*"
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.full_name && formik.touched.full_name}
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.full_name}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label style={{ fontWeight: 500 }}>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email ID*"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.email && formik.touched.email}
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label style={{ fontWeight: 500 }}>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile_number"
                  placeholder="+91 Mobile Number*"
                  value={formik.values.mobile_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.mobile_number && formik.touched.mobile_number}
                  style={inputStyle}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.mobile_number}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label style={{ fontWeight: 500 }}>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  value={formik.values.company_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={inputStyle}
                />
              </Col>
              <Col md={12}>
                <Form.Label style={{ fontWeight: 500 }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  placeholder="Enquiry*"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.description && formik.touched.description}
                  style={{ ...inputStyle, minHeight: '120px' }}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              </Col>
              <Col md={12} className="text-start">
                <Button
                  type="submit"
                  disabled={disable}
                  className="rounded-pill px-5 py-2 d-flex align-items-center gap-2"
                  style={{ backgroundColor: '#00a86b', border: 'none', fontWeight: 600, color: '#fff' }}
                >
                  {isLoading ? 'SUBMITTING...' : 'SUBMIT'} <ArrowRight />
                </Button>
                {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
              </Col>
            </Form>
          </Col>

          {/* RIGHT SIDE: MAP & CONTACT */}
          <Col lg={5}>
            {/* Google Map */}
            <div className="mb-4">
              <iframe
                title="NNT Cement Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.592236993176!2d72.5133!3d23.9952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzQyLjciTiA3MsKwMzAnNDguMCJF!5e0!3m2!1sen!2sin!4v1661769700459!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{
                  border: 0,
                  borderRadius: 8,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="mb-5">
  <h5 className="mb-3 fw-bold">What Our Customers Say</h5>

  <div className="p-3 border rounded shadow-sm bg-light">
    <div className="text-warning mb-1">★★★★★</div>
    <strong>Rahul Jain – Oil Refinery Procurement Head</strong>
    <p className="mb-1">
      “We've been sourcing Caustic Soda and Bleaching Earth from N&T for over 2 years. Reliable delivery and consistent quality every time.”
    </p>
  </div>
packaging
  <div className="mt-3 p-3 border rounded shadow-sm bg-light">
    <div className="text-warning mb-1">★★★★★</div>
    <strong>Fatima Noor – Refining Plant Manager, UAE</strong>
    <p className="mb-1">
      “Excellent technical support and custom packaging solutions tailored to our refinery needs. Highly professional team.”
    </p>
  </div>

  
</div>


            {/* Clickable Contact Info */}
            <div className="rounded shadow-sm p-3 bg-light">
              <a href="tel:+919687431287" className="d-flex align-items-start mb-3 text-decoration-none text-dark">
                <div className="me-2 bg-success bg-opacity-10 p-2 rounded-circle">📞</div>
                <div className="fw-semibold">+91 9687431287</div>
              </a>
              <a href="mailto:info@nntrefinery.com" className="d-flex align-items-start mb-3 text-decoration-none text-dark">
                <div className="me-2 bg-success bg-opacity-10 p-2 rounded-circle">✉️</div>
                <div className="fw-semibold">info@nntrefinery.com</div>
              </a>
              <a
                href="https://www.google.com/maps?q=3rd+Floor,+Diamond+Complex,+SH+41,+Industrial+Area,+Chhapi,+North+Gujarat,+India+385210"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-start text-decoration-none text-dark"
              >
                <div className="me-2 bg-success bg-opacity-10 p-2 rounded-circle">📍</div>
                <div className="fw-semibold">
                  3rd Floor, Diamond Complex, SH 41, Industrial Area, Chhapi, North Gujarat, India. 385210
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer/>
    </>
  );
};

// 👇 Inline input style
const inputStyle = {
  backgroundColor: '#f5f7f6',
  border: '1px solid #e0e0e0',
  padding: '12px 16px',
  borderRadius: '8px',
  fontSize: '1rem'
};

export default Contact;

