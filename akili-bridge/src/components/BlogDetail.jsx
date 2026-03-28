import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./BlogDetail.css";


export default function BlogDetail() {
  const { id } = useParams(); // get post id from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/blog/${id}/`);
        if (!response.ok) throw new Error("Failed to fetch post");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div className="blog-detail">
      <motion.div
        className="blog-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="blog-title">{post.title}</h1>
        <div className="blog-meta">
          <span>📅 {new Date(post.created_at).toLocaleDateString()}</span>
          <span>✍️ {post.author}</span>
          <span className="blog-category">{post.category}</span>
        </div>
      </motion.div>

      {post.image && (
        <motion.img
          src={post.image}
          alt={post.title}
          className="blog-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      <motion.div
        className="blog-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>{post.body}</p>
      </motion.div>
    </div>
  );
}
