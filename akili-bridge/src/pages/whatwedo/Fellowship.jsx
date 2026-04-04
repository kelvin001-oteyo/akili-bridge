import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Fellowship() {
  const navigate = useNavigate();
  const phases = [
    {
      title: "Foundations & Orientation (Weeks 1–4)",
      description: "Introduction to research ethics, design, and methods; mentor matching",
      progress: 20,
      icon: "🌱",
    },
    {
      title: "Research Skills & Proposal Development (Weeks 5–10)",
      description: "Data collection, analysis techniques, literature review strategies, proposal drafting",
      progress: 40,
      icon: "📚",
    },
    {
      title: "Independent Research & Mentorship (Weeks 11–20)",
      description: "Conducting original research, weekly mentor check-ins, skill workshops",
      progress: 70,
      icon: "🔬",
    },
    {
      title: "Presentation & Career Readiness (Weeks 21–24)",
      description: "Final paper submission, presentation, graduate school prep, career guidance",
      progress: 100,
      icon: "🎓",
    },
  ];

  const focusAreas = [
    "Renewable Energy & Sustainability",
    "Artificial Intelligence & Data Science",
    "Civil & Environmental Engineering",
    "Biotechnology & Public Health",
    "ICT & Emerging Technologies",
  ];

  const benefits = [
    "1:1 mentorship from experienced researchers",
    "Research methodology and academic writing training",
    "Access to an East Africa-wide peer research network",
    "Certificate of completion",
    "Publication and conference opportunities",
  ];

  const whyJoin = [
    "World-Class Mentorship and Training – 1:1 guidance from top researchers",
    "Cutting-Edge Research Opportunities – contribute to real-world STEM solutions",
    "Career and Academic Development – workshops, scholarships, global pathways",
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const phaseVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="fellowship">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format')",
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
            Apply Now for 2025 Cohort
          </div>
          <h1 className="page-title">
            STEM Research Fellowship
          </h1>
          <p className="hero-description">
            The AkiliBridge STEM Fellowship is a one-year immersive program designed to nurture
            Africa's brightest and most driven undergraduate students into high-impact researchers
            and innovators. By combining advanced research training, personalized mentorship, and
            hands-on project execution, the fellowship empowers fellows to create solutions that
            address Africa's most pressing development challenges in STEM.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Months</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1:1</span>
              <span className="stat-label">Mentorship</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Remote</span>
            </div>
          </div>
        </motion.div>

        {/* Program Structure Section */}
        <motion.section
          className="structure-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">Program Structure</h2>
          <p className="section-subtitle">Duration: 6 months – fully remote</p>
          <div className="phases-container">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={phaseVariants}
                className="phase-card"
              >
                <div className="phase-header">
                  <div className="phase-icon">{phase.icon}</div>
                  <h3 className="phase-title">{phase.title}</h3>
                </div>
                <p className="phase-description">{phase.description}</p>
                <div className="progress-bar-container">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>{phase.progress}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${phase.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Join Section */}
        <motion.section
          className="why-join-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">Why Join the STEM Fellowship?</h2>
          <div className="why-join-grid">
            {whyJoin.map((item, index) => (
              <motion.div
                key={index}
                className="why-join-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="card-icon">
                  {index === 0 && "🎯"}
                  {index === 1 && "💡"}
                  {index === 2 && "🚀"}
                </div>
                <p className="card-text">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Focus Areas & Benefits Grid */}
        <div className="two-column-section">
          {/* Focus Areas */}
          <motion.section
            className="focus-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header">
              <span className="header-icon">🎯</span>
              <h2 className="section-title-left">Focus Areas</h2>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="focus-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                >
                  <span className="focus-marker">▹</span>
                  <span>{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Program Benefits */}
          <motion.section
            className="benefits-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header">
              <span className="header-icon">✨</span>
              <h2 className="section-title-left">Program Benefits</h2>
            </div>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                >
                  <span className="benefit-check">✓</span>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Call to Action */}
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 106, 0, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/careers/application")}
          >
            <span className="button-text">Apply Now</span>
            <motion.span
              className="button-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
          <p className="cta-note">Applications open until March 31, 2025 • Limited spots available</p>
        </motion.div>
      </div>

      <style>{`
        /* Main Container */
        .fellowship {
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
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        .section-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
        }

        /* Program Structure */
        .structure-section {
          margin-bottom: 4rem;
        }

        .phases-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .phase-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .phase-card:hover {
          transform: translateX(8px);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .phase-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .phase-icon {
          font-size: 2rem;
        }

        .phase-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          color: #ff6a00;
        }

        .phase-description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          opacity: 0.85;
        }

        .progress-bar-container {
          margin-top: 0.5rem;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.3rem;
          opacity: 0.7;
        }

        .progress-bar-bg {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          overflow: hidden;
          height: 8px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border-radius: 10px;
        }

        /* Why Join Section */
        .why-join-section {
          margin-bottom: 4rem;
        }

        .why-join-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .why-join-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .why-join-card:hover {
          background: rgba(255, 106, 0, 0.1);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .card-text {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Two Column Section */
        .two-column-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .focus-section,
        .benefits-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 106, 0, 0.3);
          padding-bottom: 0.8rem;
        }

        .header-icon {
          font-size: 1.8rem;
        }

        .section-title-left {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .focus-grid {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.5rem;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .focus-item:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(5px);
        }

        .focus-marker {
          color: #ff6a00;
          font-size: 1rem;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          padding: 0.5rem;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(5px);
        }

        .benefit-check {
          color: #4caf50;
          font-size: 1rem;
          font-weight: bold;
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
          font-size: 1.1rem;
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

          .phase-card {
            padding: 1.2rem;
          }

          .phase-title {
            font-size: 1rem;
          }

          .why-join-grid {
            grid-template-columns: 1fr;
          }

          .two-column-section {
            grid-template-columns: 1fr;
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

          .phase-header {
            flex-direction: column;
            text-align: center;
          }

          .phase-title {
            text-align: center;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}
