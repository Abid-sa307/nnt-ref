// import React from 'react';
// import './Latestblog.css'; // Optional CSS file for styling
// import blog1Img from '../Assests/blog1.png'; // uploaded image
// import blog2Img from '../Assests/blog2.png'; // uploaded image
// import blog3Img from '../Assests/blog3.png'; // uploaded image

// const blogData = [
//   {
//     date: '12-March-2025',
//     title: 'Common Challenges in Cement Factory Setup and How to Address Them',
//     summary:
//       'Modern infrastructure and construction require cement. The yearly output is al...',
//     image: blog1Img,
//   },
//   {
//     date: '06-March-2025',
//     title:
//       'How to Improve Productivity in Cement Plants with Advanced Technology: A Complete Guide',
//     summary:
//       'The global cement output stands at around 4.1 billion metric tons annually, ma...',
//     image: blog2Img,
//   },
//   {
//     date: '28-February-2025',
//     title:
//       'Everything You Need to Know About Rotary Kiln Technology in Cement',
//     summary:
//       'Rotary Kiln Cement Plant Manufacturing relies heavily on rotary kiln technolog...',
//     image: blog3Img,
//   },
// ];

// const LatestBlogs = () => (
//   <section className="py-5 bg-light latest-blogs">
//     <div className="container text-center">
//       <h2 className="mb-4">Our Blog</h2>
//       <p className="mb-5">
//         Browse most recent blog & news from N&T. View Engineering Procurement Construction
//         related news, and articles.
//       </p>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {blogData.map((blog, index) => (
//           <div key={index} className="col">
//             <div className="card h-100 shadow-sm rounded-4">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="card-img-top rounded-top-4"
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body text-start px-4 py-3">
//                 <p className="text-muted mb-1">{blog.date}</p>
//                 <h5 className="fw-semibold">{blog.title}</h5>
//                 <p className="text-muted">{blog.summary}</p>
//                 <a href="#" className="text-primary fw-medium">
//                   Read More &rarr;
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default LatestBlogs;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const blogData = [
  {
    date: '12‑March‑2025',
    title: 'Common Challenges in Cement Factory Setup & How to Address Them',
    summary: 'Modern infrastructure and construction require cement. The yearly output is always impacted by logistics and cost...',
  },
  {
    date: '06‑March‑2025',
    title: 'Improving Productivity in Cement Plants with Advanced Technology',
    summary: 'The global cement output stands at around 4.1 billion metric tons annually. Here’s how you can optimize your setup...',
  },
  {
    date: '28‑February‑2025',
    title: 'Everything You Need to Know About Rotary Kiln Technology in Cement Plants',
    summary: 'Rotary kiln cement production heavily depends on heat transfer, rotation speed, and consistent temperature management...',
  },
];

const LatestBlogs = () => (
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
      <h2 className="mb-4">Our Blog</h2>
      <p className="mb-5">
        Browse the most recent blog & news from N&T. Engineering, Procurement, and Construction-related articles.
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {blogData.map((blog, i) => (
          <div key={i} className="col">
            <div className="card h-100 shadow-sm rounded-4">
              <div
                className="bg-secondary rounded-top-4"
                style={{ height: '200px', width: '100%', backgroundColor: '#ccc' }}
              ></div>
              <div className="card-body text-start px-4 py-3">
                <p className="text-muted mb-1">{blog.date}</p>
                <h5 className="fw-semibold">{blog.title}</h5>
                <p className="text-muted">{blog.summary}</p>
                <a href="#" className="text-primary fw-medium">
                  Read More &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="/blog" className="btn btn-outline-primary rounded-pill px-4">
          View More Blogs
        </a>
      </div>
    </div>
  </section>
);

export default LatestBlogs;
