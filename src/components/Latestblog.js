
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo';
import { OurBlogsMeta } from '../data/metaData';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogImg1 from '../static/images/blogimg1.png';
//import BlogImg2 from "../static/images/";
//import BlogImg3 from "../static/images/";

const blogData = [
  {
    date: '12‑March‑2025',
    title: 'Common Challenges in Cement Factory Setup & How to Address Them',
    summary: 'Modern infrastructure and construction require cement. The yearly output is always impacted by logistics and cost...',
    image: BlogImg1,
  },
  {
    date: '06‑March‑2025',
    title: 'Improving Productivity in Cement Plants with Advanced Technology',
    summary: 'The global cement output stands at around 4.1 billion metric tons annually. Here’s how you can optimize your setup...',
    //image: BlogImg2,
  },
  {
    date: '28‑February‑2025',
    title: 'Everything You Need to Know About Rotary Kiln Technology in Cement Plants',
    summary: 'Rotary kiln cement production heavily depends on heat transfer, rotation speed and consistent temperature management...',
    //image: BlogImg3,
  },
];

const OurBlogs = () => (
  <>
  <Seo meta={OurBlogsMeta} />
  <section className="py-5 bg-light latest-blogs">
    <style>{`
      .latest-blogs .card {
        border: none;
        transition: transform 0.3s ease;
      }
      .latest-blogs .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      }
      .latest-blogs .card-title {
        font-size: 1.1rem;
      }
      .latest-blogs .card-text {
        font-size: 0.95rem;
        color: #555;
      }
    `}</style>

    <div className="container text-center">
      <h2 className="fw-bold mb-4"  style={{ color: '#3366cc' }}>Our Blog</h2>
      <p className="mb-5">
        Browse the most recent blog & news from N&T. Engineering, Procurement and Construction-related articles.
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {blogData.map((blog, i) => (
          <div key={i} className="col">
            <div className="card h-100 shadow-sm rounded-4">
              <img
  src={blog.image}
  alt={blog.title}
  className="card-img-top rounded-top-4"
  style={{ height: '200px', objectFit: 'cover' }}
/>

              <div className="card-body text-start px-4 py-3">
                <p className="text-muted mb-1">{blog.date}</p>
                <h5 className="fw-semibold">{blog.title}</h5>
                <p className="text-muted">{blog.summary}</p>
                {/* <a href="#" className="text-primary fw-medium">
                  Read More &rarr;
                </a> */}
                <Link to={`/blogdetail/${i}`} className="text-primary fw-medium">
          Read More &rarr;
        </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/our-blog" className="btn btn-outline-primary rounded-pill px-4">
  View More Blogs
</Link>

      </div>
    </div>
  </section>
  </>
);

export default OurBlogs;
