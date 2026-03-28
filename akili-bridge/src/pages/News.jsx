import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../utils/api";  // ✅ import your helper

export default function WhatsNew() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [subscribed, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "Fellow",
  });















useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await apiFetch("/api/blog/");   // ✅ use apiFetch
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();

      // Map backend fields to frontend structure
      const formatted = data.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt || (post.body ? post.body.substring(0, 120) + "..." : ""),
        date: new Date(post.created_at).toLocaleDateString(),
        category: post.category || "General",
        author: post.author || "Unknown",
        image: post.image ? post.image : "https://via.placeholder.com/600x400",
        link: `/blog/${post.id}`,
      }));

      setPosts(formatted);
      setFilteredPosts(formatted);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  fetchPosts();
}, []);




  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (formData.email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setFormData({ firstName: "", lastName: "", email: "", role: "Fellow" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  const getCategoryColor = (category) => {
    const colors = {
      Announcement: "#ff6a00",
      Event: "#2ecc71",
      Update: "#3498db",
      Partnership: "#9b59b6",
      Spotlight: "#e74c3c",
    };
    return colors[category] || "#ff6a00";
  };

  return (
    <div className="whats-new">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format')",
          }}
        />
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>

      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <span className="badge-icon">📰</span>
            Latest Updates
          </div>
          <h1 className="page-title">
            What's New
          </h1>
          <p className="hero-description">
            Stay updated with the latest news, announcements, and events from Akili Bridge.
            Discover opportunities, success stories, and groundbreaking research from our community.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="search-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search news, announcements, events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </div>
          <p className="search-results">
            {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"} found
          </p>
        </motion.div>

        {/* Posts Grid */}
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            <motion.div
              className="posts-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="post-card"
                >
                  <div className="post-image-container">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="post-image"
                    />
                    <div className="post-category" style={{ background: getCategoryColor(post.category) }}>
                      {post.category}
                    </div>
                    <div className="post-overlay"></div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-date">📅 {post.date}</span>
                      <span className="post-author">✍️ {post.author}</span>
                    </div>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <motion.a
                      href={post.link}
                      className="post-link"
                      whileHover={{ x: 5 }}
                    >
                      Read More →
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="no-posts"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="no-posts-icon">🔍</div>
              <h2>No Posts Found</h2>
              <p>We couldn't find any posts matching "{searchTerm}"</p>
              <button
                className="clear-search-btn"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subscription Form */}
        <motion.div
          className="subscription-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="subscription-card">
            <div className="subscription-header">
              <span className="subscription-icon">📧</span>
              <h2 className="subscription-title">Subscribe for Updates</h2>
              <p className="subscription-description">
                Get the latest news and announcements delivered straight to your inbox
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="subscription-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option>Fellow</option>
                    <option>Mentor</option>
                    <option>Researcher</option>
                    <option>Partner</option>
                  </select>
                </div>
              </div>
              <motion.button
                type="submit"
                className="subscribe-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now
                <span className="button-icon">→</span>
              </motion.button>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ✓ Successfully subscribed! Check your email for confirmation.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        /* Main Container */
        .whats-new {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .page-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.1rem);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Search Section */
        .search-section {
          margin-bottom: 3rem;
        }

        .search-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.1rem;
          opacity: 0.6;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #ff6a00;
          background: rgba(255, 106, 0, 0.1);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .search-clear {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .search-clear:hover {
          color: #ff6a00;
        }

        .search-results {
          text-align: center;
          margin-top: 0.8rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Posts Grid */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .post-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .post-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .post-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .post-card:hover .post-image {
          transform: scale(1.1);
        }

        .post-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
        }

        .post-content {
          padding: 1.5rem;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.8rem;
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .post-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .post-excerpt {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          opacity: 0.85;
        }

        .post-link {
          color: #ff6a00;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: gap 0.3s ease;
        }

        /* No Posts */
        .no-posts {
          text-align: center;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          margin-bottom: 4rem;
        }

        .no-posts-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .no-posts h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .no-posts p {
          margin-bottom: 1rem;
          opacity: 0.7;
        }

        .clear-search-btn {
          padding: 0.6rem 1.5rem;
          background: rgba(255, 106, 0, 0.2);
          border: 1px solid #ff6a00;
          border-radius: 25px;
          color: #ff6a00;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .clear-search-btn:hover {
          background: rgba(255, 106, 0, 0.4);
        }

        /* Subscription Section */
        .subscription-section {
          margin-top: 2rem;
        }

        .subscription-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .subscription-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .subscription-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .subscription-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .subscription-description {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .subscription-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          flex: 1;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #ff6a00;
          background: rgba(255, 106, 0, 0.1);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .subscribe-button {
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .button-icon {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .subscribe-button:hover .button-icon {
          transform: translateX(5px);
        }

        .success-message {
          margin-top: 1rem;
          padding: 0.8rem;
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid #4caf50;
          border-radius: 10px;
          color: #4caf50;
          text-align: center;
          font-size: 0.85rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .posts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }

          .subscription-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .post-title {
            font-size: 1.1rem;
          }

          .subscription-title {
            font-size: 1.3rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}