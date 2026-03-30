import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WhoWeAre() {
  const navigate = useNavigate();
  const milestones = [
    {
      year: "2024",
      title: "Akili Bridge Founded",
      description: "Established to bridge Africa's research gap and empower emerging scholars.",
    },
    {
      year: "2025",
      title: "First Fellowship Cohort",
      description: "Launched the STEM Fellowship, training and mentoring the first group of fellows.",
    },
    {
      year: "2026",
      title: "Virtual Research Labs",
      description: "Introduced labs in AI, renewable energy, and biotechnology to expand opportunities.",
    },
    {
      year: "Future",
      title: "Scaling Across Africa",
      description: "Expanding programs to reach more universities and researchers across the continent.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const timelineVariants = {
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
    <div className="who-we-are">
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
        {/* Title */}
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Who We Are
        </motion.h1>

        {/* Tagline */}
        <motion.div
          className="tagline-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="tagline">
            Building Africa's Research Future, One Scholar at a Time
          </h2>
          <div className="tagline-underline"></div>
        </motion.div>

        {/* Mission Statement */}
        <motion.section
          className="mission-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mission-card" variants={itemVariants}>
            <div className="mission-icon-wrapper">
              <span className="mission-icon">🌍</span>
            </div>
            <p className="mission-text">
              At Akili Bridge, we believe Africa's greatest potential lies in its people. Our mission
              is to bridge Africa's research gap by empowering emerging scholars to become world-class
              researchers and innovators.
            </p>
          </motion.div>

          <motion.div className="vision-card" variants={itemVariants}>
            <div className="vision-icon-wrapper">
              <span className="vision-icon">🎓</span>
            </div>
            <p className="vision-text">
              We provide comprehensive training, mentorship, and resources to nurture the next
              generation of African scientists, engineers, and thought leaders. By equipping students
              and early-career researchers with the skills and networks needed to excel, we help them
              generate solutions that address Africa's most pressing challenges and contribute to
              global knowledge.
            </p>
          </motion.div>

          <motion.div className="movement-card" variants={itemVariants}>
            <div className="movement-icon-wrapper">
              <span className="movement-icon">🚀</span>
            </div>
            <p className="movement-text">
              We are not just an educational program — we are a movement to create an Africa where
              research excellence drives social progress, technological advancement, and sustainable
              development.
            </p>
          </motion.div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          className="timeline-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={timelineVariants}
                  initial="hidden"
                  animate="visible"
                  className="timeline-item"
                >
                  <div className="timeline-dot">
                    <span className="dot-inner"></span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{milestone.year}</div>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
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
            <span className="button-text">Join the Movement</span>
            <motion.span
              className="button-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        /* Main Container */
        .who-we-are {
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
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.92) 0%, rgba(20, 30, 50, 0.88) 100%);
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
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        /* Tagline */
        .tagline-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tagline {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 600;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .tagline-underline {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          margin: 0.5rem auto 0;
          border-radius: 3px;
          animation: expandWidth 0.6s ease-out;
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        /* Mission Cards */
        .mission-section {
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mission-card,
        .vision-card,
        .movement-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mission-card:hover,
        .vision-card:hover,
        .movement-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .mission-icon-wrapper,
        .vision-icon-wrapper,
        .movement-icon-wrapper {
          text-align: center;
          margin-bottom: 1rem;
        }

        .mission-icon,
        .vision-icon,
        .movement-icon {
          font-size: 2.5rem;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .mission-text,
        .vision-text,
        .movement-text {
          font-size: 1.05rem;
          line-height: 1.7;
          text-align: center;
          margin: 0;
        }

        /* Timeline Section */
        .timeline-section {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2.5rem;
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

        .timeline-wrapper {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #ff6a00, #ffb347, rgba(255, 106, 0, 0.2));
        }

        .timeline-items {
          position: relative;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
          display: flex;
          gap: 1.5rem;
        }

        .timeline-dot {
          position: relative;
          width: 40px;
          flex-shrink: 0;
        }

        .dot-inner {
          position: absolute;
          left: -2px;
          top: 0;
          width: 12px;
          height: 12px;
          background: #ff6a00;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(255, 106, 0, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 106, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 106, 0, 0);
          }
        }

        .timeline-content {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateX(8px);
          border-color: rgba(255, 106, 0, 0.5);
        }

        .timeline-year {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .timeline-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffb347;
        }

        .timeline-description {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* CTA Button */
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .mission-card,
          .vision-card,
          .movement-card {
            padding: 1.5rem;
          }

          .mission-text,
          .vision-text,
          .movement-text {
            font-size: 0.95rem;
          }

          .timeline-wrapper {
            padding-left: 1rem;
          }

          .timeline-dot {
            width: 30px;
          }

          .dot-inner {
            width: 10px;
            height: 10px;
          }

          .timeline-content {
            padding: 1rem;
          }

          .timeline-title {
            font-size: 1.1rem;
          }

          .timeline-description {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .tagline {
            font-size: 1.1rem;
          }

          .timeline-item {
            gap: 1rem;
          }

          .timeline-content {
            padding: 0.8rem;
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
