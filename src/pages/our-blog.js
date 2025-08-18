import React, { useState } from 'react';
import Footer from '../components/footer';
import Contact from '../components/contact';
import {Link} from 'react-router-dom';
import Seo from "../components/seo";
import { BlogListMeta } from "../data/metaData";
import 'bootstrap/dist/css/bootstrap.min.css';

const blogData = [
  { date: '12‑March‑2025', title: 'Common Challenges in Cement Factory Setup & How to Address Them', summary: 'Modern infrastructure and construction require cement. The yearly output is always impacted by logistics and cost...' },
  { date: '06‑March‑2025', title: 'Improving Productivity in Cement Plants with Advanced Technology', summary: 'The global cement output stands at around 4.1 billion metric tons annually. Here’s how you can optimize your setup...' },
  { date: '28‑February‑2025', title: 'Everything You Need to Know About Rotary Kiln Technology in Cement Plants', summary: 'Rotary kiln cement production heavily depends on heat transfer, rotation speed and consistent temperature management...' },
  { date: '20‑February‑2025', title: 'Why Quality Matters in Bleaching Earth', summary: 'Discover how the right bleaching earth impacts oil purity and production efficiency...' },
  { date: '10‑February‑2025', title: 'Top 5 Uses of Caustic Soda Flakes in Industry', summary: 'From water treatment to soaps, see why sodium hydroxide is critical in industrial workflows...' },
  { date: '01‑February‑2025', title: 'How to Choose a Global Chemical Supplier', summary: 'Certifications, logistics and consistency: the key factors you must consider...' },
  { date: '25‑January‑2025', title: 'Refinery Chemicals: What Every Buyer Should Know', summary: 'Safety, purity and delivery reliability – a checklist for refinery procurement teams...' },
  { date: '18‑January‑2025', title: 'How Filter Aids Improve Efficiency in Oil Refining', summary: 'Unlock better filtration and throughput in your edible oil processing plants...' },
  { date: '10‑January‑2025', title: 'Cement Kiln Heat Efficiency: Metrics That Matter', summary: 'Maximizing energy usage with rotary kilns, precalciners and modern heat recovery systems...' },
  { date: '02‑January‑2025', title: 'Sustainable Alternatives in Cement Manufacturing', summary: 'Reduce carbon emissions by adopting these sustainable cement technologies...' },
  { date: '24‑December‑2024', title: 'The Role of Catalysts in Chemical Reactions', summary: 'Boost production efficiency using modern catalytic agents...' },
  { date: '16‑December‑2024', title: 'Handling Caustic Soda Safely in Industrial Settings', summary: 'Best practices to protect personnel and ensure chemical integrity...' },
  { date: '09‑December‑2024', title: 'Bleaching Earth Regeneration Techniques', summary: 'Lower waste and cut costs by regenerating spent bleaching earth...' },
  { date: '01‑December‑2024', title: 'Heat Recovery in Rotary Kilns', summary: 'Explore heat recovery strategies in cement rotary kiln operations...' },
  { date: '25‑November‑2024', title: 'Minimizing Waste in Oil Refining', summary: 'Techniques and tools to reduce production waste in oil processing...' },
  { date: '17‑November‑2024', title: 'Smart Automation in Cement Production', summary: 'How IoT and AI are transforming plant operations...' },
  { date: '10‑November‑2024', title: 'Understanding Cement Hydration', summary: 'The chemistry behind hydration and how to control it for better performance...' },
];

const LatestBlogs = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogData : blogData.slice(0, 9); // Show 9 initially

  return (
    <>
     {/* ✅ SEO Metadata */}
      <Seo meta={BlogListMeta} />
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
        `}</style>

        <div className="container">
          {/* Header */}
          <div className="text-start mb-5" style={{ maxWidth: '900px' }}>
            <p
              className="text-uppercase text-muted fw-medium mb-2"
              style={{ letterSpacing: '1px', fontSize: '14px' }}
            >
              {/* Blogs */}
            </p>
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' ,marginTop: '50px' }}>
              Our Blog
            </h1>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Browse most recent blog & news from N&T. View Engineering Procurement Construction related news and articles.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
            {visibleBlogs.map((blog, i) => (
              <div key={i} className="col">
                <div className="card h-100 shadow-sm rounded-4">
                  <div className="bg-secondary rounded-top-4" style={{ height: '200px', backgroundColor: '#ccc' }}></div>
                  <div className="card-body text-start px-4 py-3">
                    <p className="text-muted mb-1">{blog.date}</p>
                    <h5 className="fw-semibold">{blog.title}</h5>
                    <p className="text-muted">{blog.summary}</p>
                    {/* <a href="#" className="text-primary fw-medium">
                      Read More &rarr;
                    </a> */}
                  <Link to={`/blogdetail/${i}`} className="text-primary fw-medium">
  Read More →
</Link>




                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAll && (
            <div className="text-center">
              <button
                className="btn btn-outline-primary rounded-pill px-4"
                onClick={() => setShowAll(true)}
              >
                View More Blogs
              </button>
            </div>
          )}
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default LatestBlogs;
