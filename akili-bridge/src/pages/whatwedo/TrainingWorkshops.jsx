import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function TrainingWorkshops() {
  const navigate = useNavigate();
  const focusAreas = [
    "Research methodologies & experimental design",
    "Scientific writing & publishing strategies",
    "Data analysis (qualitative & quantitative techniques)",
    "Policy research & impact-driven studies",
    "Laboratory techniques",
    "Career development (CV writing, networking, grant applications)",
  ];

  const upcomingSessions = [
    {
      title: "Scientific Writing Bootcamp",
      date: "April 10, 2026",
      description: "Learn how to structure papers, publish in journals, and improve clarity.",
      icon: "✍️",
      duration: "2 Days",
      format: "Virtual",
    },
    {
      title: "Data Analysis Workshop",
      date: "April 20, 2026",
      description: "Hands-on training in Python, R, and visualization tools for STEM research.",
      icon: "📊",
      duration: "3 Days",
      format: "Hybrid",
    },
    {
      title: "Policy Research & Impact Studies",
      date: "May 5, 2026",
      description: "Explore how research informs policy decisions and drives social change.",
      icon: "🏛️",
      duration: "1 Day",
      format: "Virtual",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const focusItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const sessionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="training-workshops">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')",
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
            <span className="badge-icon">🎓</span>
            Continuous Learning
          </div>
          <h1 className="page-title">
            Training & Workshops
          </h1>
          <p className="hero-description">
            Our program includes workshops, boot camps, and specialized training sessions
            to equip aspiring researchers with cutting-edge research skills across disciplines.
            Learn from world-class experts and connect with peers across East Africa.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Workshops Yearly</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Researchers Trained</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Focus Areas</span>
            </div>
          </div>
        </motion.div>

        {/* Focus Areas Section */}
        <motion.section
          className="focus-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">Key Focus Areas</h2>
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={focusItemVariants}
                className="focus-card"
              >
                <div className="focus-icon">
                  {index === 0 && "🔬"}
                  {index === 1 && "✍️"}
                  {index === 2 && "📊"}
                  {index === 3 && "🏛️"}
                  {index === 4 && "🧪"}
                  {index === 5 && "💼"}
                </div>
                <p className="focus-text">{area}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Sessions Section */}
        <motion.section
          className="sessions-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="section-title">Upcoming Workshops & Bootcamps</h2>
          <p className="section-subtitle">
            Join our transformative learning experiences designed to accelerate your research career
          </p>
          <div className="sessions-grid">
            {upcomingSessions.map((session, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={sessionVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="session-card"
              >
                <div className="session-icon">{session.icon}</div>
                <h3 className="session-title">{session.title}</h3>
                <div className="session-meta">
                  <span className="meta-item">
                    <span className="meta-icon">📅</span>
                    {session.date}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    {session.duration}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">💻</span>
                    {session.format}
                  </span>
                </div>
                <p className="session-description">{session.description}</p>
                <motion.button
                  className="register-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/careers/application")}
                >
                  Register Now →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Special Features Section */}
        <motion.section
          className="features-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">What You'll Gain</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Hands-on Experience</h3>
              <p>Practical exercises and real-world case studies</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Instructors</h3>
              <p>Learn from leading researchers and industry professionals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📜</div>
              <h3>Certification</h3>
              <p>Earn certificates recognized by partner institutions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Networking</h3>
              <p>Connect with peers and mentors across East Africa</p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 106, 0, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/careers/application")}
          >
            <span className="button-text">Join Our Upcoming Workshops & Bootcamps!</span>
            <motion.span
              className="button-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
          <p className="cta-note">Limited spots available • Early bird registration ends March 25, 2026</p>
        </motion.div>
      </div>

      <style jsx>{`
        /* Main Container */
        .training-workshops {
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
          background: linear-gradient(135deg, #ff6a00, #ffb347);
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

        /* Section Title */
        .section-title {
          font-size: clamp(1.6rem, 5vw, 2.2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        .section-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
        }

        /* Focus Areas */
        .focus-section {
          margin-bottom: 4rem;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
        }

        .focus-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .focus-card:hover {
          transform: translateX(8px);
          border-color: rgba(255, 106, 0, 0.5);
          background: rgba(255, 106, 0, 0.1);
        }

        .focus-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .focus-text {
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Sessions Grid */
        .sessions-section {
          margin-bottom: 4rem;
        }

        .sessions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .session-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .session-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .session-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .session-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ff6a00;
        }

        .session-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
        }

        .meta-icon {
          font-size: 0.8rem;
        }

        .session-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          opacity: 0.85;
        }

        .register-btn {
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .register-btn:hover {
          box-shadow: 0 5px 15px rgba(255, 106, 0, 0.4);
        }

        /* Features Section */
        .features-section {
          margin-bottom: 4rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #ff6a00;
        }

        .feature-card p {
          font-size: 0.85rem;
          line-height: 1.4;
          opacity: 0.8;
          margin: 0;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
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

          .focus-grid {
            grid-template-columns: 1fr;
          }

          .sessions-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .session-meta {
            justify-content: center;
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

          .session-title {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}
