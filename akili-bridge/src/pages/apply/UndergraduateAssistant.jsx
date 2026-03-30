import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function UndergraduateAssistant() {
  const navigate = useNavigate();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  const opportunities = [
    {
      icon: "🔬",
      title: "Research Support",
      description: "Assist senior researchers in conducting experiments, data collection, and literature reviews",
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Learn and apply statistical methods to analyze research data using modern tools",
    },
    {
      icon: "✍️",
      title: "Academic Writing",
      description: "Contribute to research papers, reports, and presentations with guidance from experts",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Work alongside experienced researchers and build valuable professional networks",
    },
  ];

  const benefits = [
    { icon: "🎓", title: "Hands-on Experience", description: "Gain practical research skills before graduation" },
    { icon: "👥", title: "Expert Mentorship", description: "Learn directly from experienced researchers and academics" },
    { icon: "📝", title: "Publication Opportunities", description: "Co-author research papers and conference presentations" },
    { icon: "🌍", title: "Career Development", description: "Build a strong foundation for graduate studies or research careers" },
    { icon: "💡", title: "Innovation Exposure", description: "Work on cutting-edge research addressing African challenges" },
    { icon: "🔗", title: "Network Building", description: "Connect with researchers across East Africa and beyond" },
  ];

  const eligibility = [
    "Current undergraduate student in STEM field (2nd year or above)",
    "Strong academic record (minimum GPA of 3.0 or equivalent)",
    "Demonstrated interest in research and innovation",
    "Good communication and teamwork skills",
    "Available to commit 10-15 hours per week",
  ];

  const applicationSteps = [
    { step: 1, title: "Submit Application", description: "Complete the online application form with your details" },
    { step: 2, title: "Academic Review", description: "Your academic records and research interest will be reviewed" },
    { step: 3, title: "Interview", description: "Selected candidates will be invited for a virtual interview" },
    { step: 4, title: "Placement", description: "Successful applicants will be matched with research projects" },
  ];

  return (
    <div className="undergraduate-assistant">
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
            <span className="badge-icon">🎓</span>
            Career Opportunity
          </div>
          <h1 className="page-title">
            Undergraduate Research Assistant
          </h1>
          <p className="hero-description">
            Gain hands-on research experience, work alongside world-class researchers, 
            and contribute to groundbreaking discoveries that shape Africa's future.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10-15</span>
              <span className="stat-label">Hours/Week</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Months Duration</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Research Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Opportunities Grid */}
        <motion.section
          className="opportunities-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">What You'll Do</h2>
          <div className="opportunities-grid">
            {opportunities.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="opportunity-card"
              >
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="benefits-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="section-title">Why Join Us?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Eligibility & Process Section */}
        <div className="two-column-section">
          {/* Eligibility */}
          <motion.section
            className="eligibility-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="section-header">
              <span className="header-icon">✅</span>
              <h2 className="section-title-left">Eligibility Criteria</h2>
            </div>
            <ul className="eligibility-list">
              {eligibility.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                >
                  <span className="list-check">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Application Process */}
          <motion.section
            className="process-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="section-header">
              <span className="header-icon">📋</span>
              <h2 className="section-title-left">Application Process</h2>
            </div>
            <div className="process-timeline">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="process-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  <div className="step-number-circle">{step.step}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Testimonial / Quote Section */}
        <motion.section
          className="quote-section"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="quote-content">
            <span className="quote-icon">"</span>
            <p className="quote-text">
              This program transformed my understanding of research. I gained skills that 
              I never thought possible as an undergraduate, and the mentorship I received 
              was invaluable for my academic journey.
            </p>
            <div className="quote-author">
              <span className="author-name">— Sarah M., Former Research Assistant</span>
              <span className="author-title">Now pursuing PhD at University of Nairobi</span>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
          <p className="cta-note">Applications open until April 15, 2025 • Limited positions available</p>
        </motion.div>
      </div>

      <style jsx>{`
        /* Main Container */
        .undergraduate-assistant {
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
          font-size: clamp(1rem, 3vw, 1.2rem);
          max-width: 700px;
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
          margin-bottom: 2rem;
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

        .section-title-left {
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Opportunities Section */
        .opportunities-section {
          margin-bottom: 4rem;
        }

        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .opportunity-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .opportunity-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ff6a00;
        }

        .card-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
        }

        /* Benefits Section */
        .benefits-section {
          margin-bottom: 4rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          background: rgba(255, 106, 0, 0.1);
          border-color: rgba(255, 106, 0, 0.3);
        }

        .benefit-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .benefit-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .benefit-description {
          font-size: 0.85rem;
          line-height: 1.4;
          opacity: 0.8;
        }

        /* Two Column Section */
        .two-column-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .eligibility-section,
        .process-section {
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

        .eligibility-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .eligibility-list li {
          padding: 0.6rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .list-check {
          color: #ff6a00;
          font-size: 1.1rem;
          font-weight: bold;
        }

        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .process-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .step-number-circle {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .step-description {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Quote Section */
        .quote-section {
          margin-bottom: 4rem;
        }

        .quote-content {
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.15), rgba(255, 180, 71, 0.05));
          border-radius: 30px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid rgba(255, 106, 0, 0.3);
        }

        .quote-icon {
          font-size: 4rem;
          color: #ff6a00;
          opacity: 0.5;
          font-family: serif;
          line-height: 1;
        }

        .quote-text {
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 700px;
          margin: 1rem auto;
          font-style: italic;
        }

        .quote-author {
          margin-top: 1rem;
        }

        .author-name {
          display: block;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .author-title {
          font-size: 0.85rem;
          opacity: 0.7;
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

          .opportunities-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .two-column-section {
            grid-template-columns: 1fr;
          }

          .quote-content {
            padding: 1.5rem;
          }

          .quote-text {
            font-size: 1rem;
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

          .benefit-card {
            flex-direction: column;
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
