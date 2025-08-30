// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Contact from './contact-us';
// import Footer from '../components/footer';
// import blogData from '../pages/blogData';
// // import Seo from '../components/seo'; // Make sure you have this
// // import metadata from '../data/metaData';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const blogIndex = parseInt(id, 10);

//   if (!blogData || isNaN(blogIndex) || !blogData[blogIndex]) {
//     return (
//       <div className="container py-5 text-center">
//         <h2>Blog not found</h2>
//       </div>
//     );
//   }

//   const blog = blogData[blogIndex];

//   return (
//     <div>
//       {/* ✅ Add Meta */}
//       {/* <Seo meta={metadata.blogDetail} /> */}
//       <div className="container py-5">
//         <div className="text-center mb-5">
//   <h4
//   className="fw- display-5"
//   style={{
//     lineHeight: '1.0',
//     marginBottom: '1rem',
//     marginTop: '50px',
//     color: '#1a1a1a',
//     letterSpacing: '-0.5px'
//   }}
// >
//   {blog.title}
// </h4>

//   <div 
//     className=" fw-semibold" 
//     style={{ fontSize: '1rem', marginBottom: '1rem', color: '#3366cc' }}
//   >
//     {blog.date}
//   </div>
//   <hr style={{ width: '80px', height: '3px', backgroundColor: '#3666cc', border: 'none', margin: '0 auto' }} />
// </div>


//         {blog.image && (
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="img-fluid rounded shadow mb-4"
//           />
//         )}

//         {/* <div
//           className="blog-content"
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//         />
//       </div> */}

//       <div
//   className="blog-content"
//   style={{
//     fontSize: '1.1rem',
//     lineHeight: '1.8',
//     color: '#444',
//   }}
//   dangerouslySetInnerHTML={{ __html: blog.content }}
// /> </div>

//       <Contact />
      
//     </div>
//   );
// };

// export default BlogDetail;



import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanityClient";
import { PortableText } from "@portabletext/react";
import Footer from '../components/footer';
import Contact from '../components/contact';
import Seo from "../components/seo";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          publishedAt,
          mainImage,
          body
        }`;
        const data = await client.fetch(query, { slug });
        setPost(data || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading blog post...</p>;
  if (!post) return <p className="text-center py-10">Post not found</p>;

  return (
    <main className="container mx-auto my-5">
      <Seo meta={{ title: post.title }} />

      <h1 style={{ marginTop: '100px' }} className="text-3xl font-bold">{post.title}</h1>

      <p className="text-gray-500 mb-4">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          className="w-full rounded-lg mb-6"
        />
      )}

      <div className="prose max-w-full">
        <PortableText value={post.body} />
      </div>

      <Link to="/our-blog" className="btn btn-outline-primary mt-5">
        ← Back to Blogs
      </Link>
      <>
        <Contact />
        <Footer />
      </>
    </main>
    
  );
};

export default BlogDetail;
