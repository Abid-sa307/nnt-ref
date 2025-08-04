// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { ArrowRight } from 'react-bootstrap-icons';
// import * as yup from 'yup';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import emailjs from '@emailjs/browser';
// import countries from 'i18n-iso-countries';

// countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// const Contact = () => {
//   const formUrl = typeof window !== 'undefined' ? window.location.href : null;
//   const [curCountry, setCountry] = useState();
//   const [curCity, setCity] = useState();
//   const [successMsg, setSuccessMsg] = useState("");
//   const [disable, setDisable] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     axios.get('https://ipinfo.io/json').then((result) => {
//       const countryCode = result.data['country'];
//       const countryName = countries.getName(countryCode, 'en');
//       setCountry(countryName);
//       setCity(result.data['city']);
//     });
//   }, []);

//   const validationSchema = yup.object().shape({
//     full_name: yup.string().required('Name is required').matches(/^[aA-zZ\s]+$/, "Name is invalid"),
//     email: yup.string().required('Email is required').email('Email is invalid'),
//     mobile_number: yup.string().required("Mobile Number is required").min(4, "Mobile number is invalid"),
//     description: yup.string().required('This field is required')
//   });

//   const formik = useFormik({
//     initialValues: {
//       content: "",
//       full_name: "",
//       email: "",
//       mobile_number: "",
//       company_name: "",
//       description: "",
//     },
//     validationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       setDisable(true);
//       setIsLoading(true);

//       const serviceId = 'service_6zlhmj9';
//       const templateId = 'template_22xtlm9';
//       const publicKey = 'uMIUlIY9Rm6rN5PGo';

//       const formValues = {
//         to_email: 'info@nntcement.com',
//         content: "New enquiry from",
//         full_name: values.full_name,
//         email: values.email,
//         mobile_number: values.mobile_number,
//         company_name: values.company_name,
//         description: values.description,
//         Source: formUrl,
//         city: curCity,
//         country: curCountry
//       };

//       try {
//         const response = await emailjs.send(serviceId, templateId, formValues, publicKey);
//         if (response.status === 200) {
//           setSuccessMsg("Your message has been sent successfully");
//           resetForm();
//         } else {
//           setSuccessMsg("Some error occurred. Try again.");
//         }
//       } catch (error) {
//         console.error("EmailJS error:", error);
//         setSuccessMsg("Submission failed. Check console for error.");
//       } finally {
//         setDisable(false);
//         setIsLoading(false);
//       }
//     }
//   });

//   return (
//     <section className="py-5 bg-white">
//       <Container>
//         <Row className="align-items-start">
//           {/* LEFT - FORM */}
//           <Col lg={7}>
//             <h2 className="fw-bold text-primary mb-4">Ready to step forward</h2>
//             <Form onSubmit={formik.handleSubmit} className="row g-3">
//               <Col md={6}>
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="full_name"
//                   placeholder="Full Name*"
//                   value={formik.values.full_name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   isInvalid={!!formik.errors.full_name && formik.touched.full_name}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.full_name}
//                 </Form.Control.Feedback>
//               </Col>
//               <Col md={6}>
//                 <Form.Label>Email ID</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Email ID*"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   isInvalid={!!formik.errors.email && formik.touched.email}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>
//               </Col>
//               <Col md={6}>
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   name="mobile_number"
//                   placeholder="+91 Mobile Number*"
//                   value={formik.values.mobile_number}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   isInvalid={!!formik.errors.mobile_number && formik.touched.mobile_number}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.mobile_number}
//                 </Form.Control.Feedback>
//               </Col>
//               <Col md={6}>
//                 <Form.Label>Company Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="company_name"
//                   placeholder="Company Name"
//                   value={formik.values.company_name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//               </Col>
//               <Col md={12}>
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   name="description"
//                   placeholder="Enquiry*"
//                   value={formik.values.description}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   isInvalid={!!formik.errors.description && formik.touched.description}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.description}
//                 </Form.Control.Feedback>
//               </Col>
//               <Col md={12} className="text-start">
//                 <Button
//                   type="submit"
//                   className="rounded-pill px-5 py-2 d-flex align-items-center gap-2"
//                   disabled={disable}
//                   style={{ backgroundColor: '#00a86b', border: 'none' }}
//                 >
//                   {isLoading ? 'SUBMITTING...' : 'SUBMIT'} <ArrowRight />
//                 </Button>
//                 {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
//               </Col>
//             </Form>
//           </Col>

//           {/* RIGHT - MAP + CONTACT + TESTIMONIAL */}
//           <Col lg={5}>
//             <div className="mb-4">
//               <iframe
//                 title="NNT Cement Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.592236993176!2d72.5133!3d23.9952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzQyLjciTiA3MsKwMzAnNDguMCJF!5e0!3m2!1sen!2sin!4v1661769700459!5m2!1sen!2sin"
//                 width="100%"
//                 height="250"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>

//             <div className="mb-4">
//               {/* <h5>What Our Customers Say</h5>
//               <div className="p-3 border rounded shadow-sm bg-light">
//                 <div className="text-warning mb-1">★★★★★</div>
//                 <strong>SANDIP_47</strong>
//                 <p className="mb-1">"Excellent product quality and support, even for small orders."</p>
//               </div>
//               <div className="mt-3 p-3 border rounded shadow-sm bg-light">
//                 <strong>Burhan Khan</strong>
//                 <p className="mb-1">"Trusted NNT Cement for turnkey solutions – reliable and professional."</p>
//               </div> */}
//             </div>

//             <div>
//               <div className="d-flex align-items-start mb-3">
//                 <div className="me-2">📞</div>
//                 <div>+91 9687431287</div>
//               </div>
//               <div className="d-flex align-items-start mb-3">
//                 <div className="me-2">✉️</div>
//                 <div>info@nntrefinery.com</div>
//               </div>
//               <div className="d-flex align-items-start">
//                 <div className="me-2">📍</div>
//                 <div>
//                   3rd Floor, Diamond Complex, SH 41, Industrial Area, Chhapi, North Gujarat, India. 385210
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Contact;


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
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
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-start">
          {/* LEFT - FORM */}
          <Col lg={7}>
            <h2 className="fw-bold text-primary mb-4">Ready to step forward</h2>
            <Form onSubmit={formik.handleSubmit} className="row g-3">
              <Col md={6}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="full_name"
                  placeholder="Full Name*"
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.full_name && formik.touched.full_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.full_name}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email ID*"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile_number"
                  placeholder="+91 Mobile Number*"
                  value={formik.values.mobile_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.mobile_number && formik.touched.mobile_number}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.mobile_number}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  value={formik.values.company_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col md={12}>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  placeholder="Enquiry*"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={!!formik.errors.description && formik.touched.description}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              </Col>
              <Col md={12} className="text-start">
                <Button
                  type="submit"
                  className="rounded-pill px-5 py-2 d-flex align-items-center gap-2"
                  disabled={disable}
                  style={{ backgroundColor: '#00a86b', border: 'none' }}
                >
                  {isLoading ? 'SUBMITTING...' : 'SUBMIT'} <ArrowRight />
                </Button>
                {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
              </Col>
            </Form>
          </Col>

          {/* RIGHT - MAP + TESTIMONIALS + CONTACT INFO */}
          <Col lg={5}>
            {/* Google Map */}
            <div className="mb-4">
              <iframe
                title="NNT Cement Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.592236993176!2d72.5133!3d23.9952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU5JzQyLjciTiA3MsKwMzAnNDguMCJF!5e0!3m2!1sen!2sin!4v1661769700459!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Testimonials
            <div className="mb-4">
              <h5 className="fw-bold mb-3">What Our Customers Say</h5>
              <Card className="mb-3 shadow-sm border-0">
                <Card.Body>
                  <div className="text-warning mb-1">★★★★★</div>
                  <strong>SANDIP_47</strong>
                  <p className="mb-1">"Excellent product quality and support, even for small orders."</p>
                </Card.Body>
              </Card>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <strong>Burhan Khan</strong>
                  <p className="mb-1">"Trusted NNT Cement for turnkey solutions – reliable and professional."</p>
                </Card.Body>
              </Card>
            </div> */}

            {/* Contact Info */}
            <div className="rounded shadow-sm p-3 bg-light">
              <div className="d-flex align-items-start mb-3">
                <div className="me-2">📞</div>
                <div>+91 9687431287</div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <div className="me-2">✉️</div>
                <div>info@nntrefinery.com</div>
              </div>
              <div className="d-flex align-items-start">
                <div className="me-2">📍</div>
                <div>
                  3rd Floor, Diamond Complex, SH 41, Industrial Area, Chhapi, North Gujarat, India. 385210
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
