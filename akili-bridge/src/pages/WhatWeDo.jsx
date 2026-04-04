import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const MotionLink = motion.create(Link);

export default function WhatWeDo() {
  const navigate = useNavigate();
  const programs = [
    {
      title: "Fellowship Program",
      description: "Our one-year researcher-in-training fellowship equips undergraduate students in East Africa with research skills, mentorship, and career development in STEM.",
      icon: "🎓",
      features: [
        "1:1 mentorship with leading researchers",
        "Hands-on research experience",
        "Career development workshops",
        "Publication opportunities"
      ],
      link: "/what-we-do/fellowship",
      color: "#ff6a00"
    },
    {
      title: "Training & Workshops",
      description: "We provide hands-on workshops and training sessions to strengthen research capacity and innovation across Africa.",
      icon: "📚",
      features: [
        "Research methodology training",
        "Data analysis workshops",
        "Scientific writing bootcamps",
        "Policy impact sessions"
      ],
      link: "/what-we-do/training",
      color: "#2ecc71"
    },
    {
      title: "For Fellows",
      description: "Our fellows gain access to mentorship, collaborative labs, and opportunities to publish and present their research.",
      icon: "🌟",
      features: [
        "Access to research labs",
        "Mentorship network",
        "Conference presentations",
        "Publication support"
      ],
      link: "/apply/fellows",
      color: "#3498db"
    },
    {
      title: "For Mentors",
      description: "Experienced researchers guide emerging scholars, sharing expertise and building the next generation of African scientists.",
      icon: "🤝",
      features: [
        "Shape future researchers",
        "Expand your network",
        "Collaborative opportunities",
        "Recognition and impact"
      ],
      link: "/apply/mentors",
      color: "#e74c3c"
    },
    {
      title: "Research Labs",
      description: "Cutting-edge research facilities focused on solving Africa's most pressing challenges in STEM fields.",
      icon: "🔬",
      features: [
        "AI & Data Science Lab",
        "Biotechnology Lab",
        "Renewable Energy Lab",
        "Nanotechnology Lab"
      ],
      link: "/labs",
      color: "#9b59b6"
    },
    {
      title: "Community Engagement",
      description: "Building a vibrant community of researchers, innovators, and change-makers across East Africa.",
      icon: "🌍",
      features: [
        "Networking events",
        "Research symposiums",
        "Collaborative projects",
        "Alumni network"
      ],
      link: "/news",
      color: "#f1c40f"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  return (
    <div className="whatwedo-page">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format')",
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
            <span className="badge-icon">🚀</span>
            Our Programs
          </div>
          <h1 className="page-title">
            What We Do
          </h1>
          <p className="hero-description">
            At AkiliBridge, we nurture the next generation of African researcher
            scholars through fellowship programs, training workshops, and
            mentorship opportunities. Our comprehensive approach empowers emerging
            researchers to drive innovation and create lasting impact across the continent.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Core Programs</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Fellows Trained</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Expert Mentors</span>
            </div>
          </div>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="program-card"
              style={{ borderTopColor: program.color }}
            >
              <div className="program-icon" style={{ background: `${program.color}20` }}>
                <span style={{ color: program.color }}>{program.icon}</span>
              </div>
              <h2 className="program-title" style={{ color: program.color }}>
                {program.title}
              </h2>
              <p className="program-description">{program.description}</p>
              <div className="program-features">
                <h4 className="features-title">Key Highlights:</h4>
                <ul className="features-list">
                  {program.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-marker" style={{ color: program.color }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <MotionLink
                to={program.link}
                className="program-link"
                style={{ color: program.color }}
                whileHover={{ x: 5 }}
              >
                Learn More →
              </MotionLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Section */}
        <motion.div
          className="impact-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-stats">
            <div className="impact-card">
              <div className="impact-number">12</div>
              <div className="impact-label">Months of Training</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">1:1</div>
              <div className="impact-label">Mentorship Ratio</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">8</div>
              <div className="impact-label">Research Labs</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">5+</div>
              <div className="impact-label">East African Countries</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 106, 0, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/careers/application")}
          >
            <span className="button-text">Join Our Community</span>
            <motion.span
              className="button-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
          <p className="cta-note">Be part of Africa's research revolution • Apply today</p>
        </motion.div>
      </div>

      <style>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        /* Main Container */
        .whatwedo-page {
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
          margin-bottom: 4rem;
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
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* Programs Grid */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .program-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          border-top: 4px solid;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .program-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .program-icon span {
          font-size: 2rem;
        }

        .program-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .program-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.2rem;
          opacity: 0.85;
        }

        .program-features {
          margin: 1rem 0;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
        }

        .features-title {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
          opacity: 0.7;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .feature-marker {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .program-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          transition: gap 0.3s ease;
        }

        /* Impact Section */
        .impact-section {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(1.6rem, 5vw, 2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        .impact-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          text-align: center;
        }

        .impact-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .impact-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 106, 0, 0.1);
        }

        .impact-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }

        .impact-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .hero-stats {
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .programs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .program-card {
            padding: 1.5rem;
          }

          .program-title {
            font-size: 1.2rem;
          }

          .impact-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 0.8rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .impact-stats {
            grid-template-columns: 1fr;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
