import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanityClient";  // ✅ Correct import

export default function TestSanity() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Example query: fetch all blogs with title, slug, and mainImage
    client
      .fetch(`*[_type == "blog"]{title, slug, mainImage}`)
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Sanity Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          {blog.mainImage && (
            <img
              src={urlFor(blog.mainImage).width(400).url()}
              alt={blog.title}
              style={{ maxWidth: "400px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
