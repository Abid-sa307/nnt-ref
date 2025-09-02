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
          className="img-fluid rounded-lg mb-6 d-block mx-auto"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      )}

      <div className="prose max-w-full mt-5">
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
