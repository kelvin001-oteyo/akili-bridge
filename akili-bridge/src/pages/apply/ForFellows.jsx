import React from "react";
import { motion } from "framer-motion";

export default function ForFellows() {
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

  const listItemVariants = {
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

  const highlightCards = [
    { icon: "🎓", title: "12 Months", description: "Intensive training and research program" },
    { icon: "🤝", title: "1-on-1 Mentorship", description: "With world-class researchers" },
    { icon: "🌍", title: "Africa Focus", description: "100% focus on Africa's development priorities" },
    { icon: "📚", title: "Research Skills", description: "Comprehensive research methodology training" },
  ];

  const faqs = [
    { q: "Who can apply?", a: "Eligible STEM undergraduates from East Africa (3rd or final year students)" },
    { q: "Will the fellowship interfere with my university studies?", a: "No, it is designed to complement your coursework and enhance your academic experience" },
    { q: "Is the fellowship fully funded?", a: "Yes, selected fellows receive full support including mentorship, resources, and training materials" },
    { q: "What is the time commitment?", a: "Approximately 5-8 hours per week, flexible around your academic schedule" },
  ];

  return (
    <div className="for-fellows">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format')",
          }}
        />
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>

      <div className="container">
        {/* Title */}
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Fellowship Program
          <span className="title-sub">For Fellows</span>
        </motion.h1>

        {/* Main Content Grid */}
        <motion.div
          className="content-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eligibility Section */}
          <motion.section className="info-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-icon">✅</span>
              <h2 className="card-title">Eligibility</h2>
            </div>
            <ul className="styled-list">
              {[
                "Third or final-year undergraduate students in STEM disciplines",
                "Citizen of an East African country (Kenya, Uganda, Tanzania, Rwanda, Burundi, South Sudan, Ethiopia, Somalia)",
                "Demonstrated academic excellence and commitment to research"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="list-marker">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Application Requirements Section */}
          <motion.section className="info-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-icon">📋</span>
              <h2 className="card-title">Application Requirements</h2>
            </div>
            <ul className="styled-list">
              {[
                "Completed application form",
                "Academic CV or résumé",
                "Transcript or proof of enrollment",
                "Letter of recommendation from a faculty member",
                "Statement of Purpose (max 500 words)"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="list-marker">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Application Process Section */}
          <motion.section className="info-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-icon">🔄</span>
              <h2 className="card-title">Application Process</h2>
            </div>
            <div className="process-steps">
              {[
                { step: 1, title: "Application Screening", icon: "📝" },
                { step: 2, title: "Shortlist Interviews", icon: "🎤" },
                { step: 3, title: "Final Selection & Mentor Matching", icon: "🤝" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="process-step"
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <span className="step-icon">{step.icon}</span>
                    <span className="step-title">{step.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Highlights Cards */}
        <motion.section
          className="highlights-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">Program Highlights</h2>
          <div className="highlights-grid">
            {highlightCards.map((card, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="highlight-icon">{card.icon}</div>
                <h3 className="highlight-title">{card.title}</h3>
                <p className="highlight-description">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section
          className="impact-section"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="impact-wrapper">
            <div className="impact-icon">📊</div>
            <h2 className="section-title">Impact at a Glance</h2>
            <div className="impact-stats">
              <div className="stat">
                <motion.span
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  12
                </motion.span>
                <span className="stat-label">Months of Intensive Training</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <motion.span
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  100%
                </motion.span>
                <span className="stat-label">Africa-Focused Research</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <motion.section
          className="faq-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <h3>{faq.q}</h3>
                </div>
                <p className="faq-answer">{faq.a}</p>
              </motion.div>
            ))}
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
          <p className="cta-note">Applications open until March 31, 2025</p>
        </motion.div>
      </div>

      <style jsx>{`
        /* Main Container */
        .for-fellows {
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

        /* Page Title */
        .page-title {
          font-size: clamp(2rem, 7vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .title-sub {
          display: block;
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 500;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-top: 0.5rem;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 106, 0, 0.3);
          padding-bottom: 0.8rem;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Styled List */
        .styled-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .styled-list li {
          padding: 0.6rem 0;
          font-size: 0.95rem;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .list-marker {
          color: #ff6a00;
          font-size: 1rem;
          margin-right: 0.5rem;
        }

        /* Process Steps */
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .process-step {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(5px);
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
        }

        .step-content {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex: 1;
        }

        .step-icon {
          font-size: 1.2rem;
        }

        .step-title {
          font-size: 0.95rem;
          font-weight: 500;
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

        /* Highlights Section */
        .highlights-section {
          margin-bottom: 4rem;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .highlight-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .highlight-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ff6a00;
        }

        .highlight-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
        }

        /* Impact Section */
        .impact-section {
          margin-bottom: 4rem;
        }

        .impact-wrapper {
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.15), rgba(255, 180, 71, 0.1));
          border-radius: 30px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid rgba(255, 106, 0, 0.3);
        }

        .impact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .impact-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.85;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.3);
        }

        /* FAQ Section */
        .faq-section {
          margin-bottom: 4rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .faq-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .faq-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .faq-icon {
          font-size: 1.3rem;
        }

        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: #ffb347;
        }

        .faq-answer {
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          padding-left: 2rem;
          opacity: 0.85;
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

          .content-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .info-card {
            padding: 1.3rem;
          }

          .highlights-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .impact-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .faq-question h3 {
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

          .card-title {
            font-size: 1.2rem;
          }

          .highlight-card {
            padding: 1.2rem;
          }

          .stat-number {
            font-size: 2.5rem;
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