import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import Seo from '../components/seo';
import { BlogListMeta } from '../data/metaData';
import Footer from '../components/footer';
import Contact from '../components/contact';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function getSnippet(body, length = 120) {
  if (!body) return '';
  if (Array.isArray(body)) {
    const firstBlock = body.find(b => b._type === 'block');
    return firstBlock?.children?.map(c => c.text).join(' ').substring(0, length) + '...';
  }
  return body.substring(0, length) + '...';
}

const POSTS_QUERY = `*[_type=="post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body
}`;

const LatestBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await client.fetch(POSTS_QUERY);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Seo meta={BlogListMeta} />
      <section className="py-5">
        <div className="container">
          <h1 className="mb-5 fw-bold text-center" style={{ marginTop: '50px' }}>Our Blogs</h1>
          <div className="row g-4">
            {posts.map(post => (
              <div className="col-md-4" key={post._id}>
                <div className="card h-100 shadow-sm blog-card">
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage).width(400).height(250).url()}
                      className="card-img-top"
                      alt={post.title}
                      style={{
                        objectFit: 'cover',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        transition: 'transform 0.3s ease, filter 0.3s ease',
                      }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text flex-grow-1">{getSnippet(post.body)}</p>
                    <p className="text-muted mb-2" style={{ fontSize: '0.85rem' }}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Date not available'}
                    </p>
                    <Link to={`/blogdetail/${post.slug.current}`} className="btn btn-primary mt-auto">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Read All Blogs Button */}
          <div className="text-center mt-5">
            <Link
              to="/our-blog"
              className="btn btn-outline-primary rounded-pill px-5 py-2 read-all-btn"
              style={{
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
            >
              Read All Blogs
            </Link>
          </div>
        </div>

        <style>{`
          .blog-card:hover img {
            transform: scale(1.05);
            filter: brightness(1.1);
          }
          .blog-card {
            border-radius: 12px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
          .read-all-btn:hover {
           
            color: #fff;
            border-color: #3366cc;
            transform: translateY(-2px);
          }
        `}</style>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default LatestBlogs;
