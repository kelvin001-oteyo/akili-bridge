import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function GetToKnowUs() {
  const navigate = useNavigate();
  const challenges = [
    {
      title: "Limited Indigenous Research Investment and Training",
      description:
        "There is a notable shortfall in quality research training and resources at the university level. Underinvestment in local institutions means many emerging scholars lack robust, ethical, and practical training to develop high-caliber, contextually relevant research.",
    },
    {
      title: "Brain Drain",
      description:
        "The scarcity of local opportunities has led many of Africa's brightest minds to seek prospects abroad. Approximately 30% of African scientists leave the continent each year, further depleting research capacity.",
    },
    {
      title: "Over-Reliance on Western Collaboration and Funding",
      description:
        "Much of Africa's research is funded by foreign donors with their own agendas, often sidelining issues most pertinent to local development. This reliance sometimes produces outputs misaligned with Africa's needs.",
    },
    {
      title: "Policy and Infrastructure Gaps",
      description:
        "A lack of strong policy frameworks and dedicated funding exacerbates challenges. Without cohesive institutional support, efforts to transform knowledge into sustainable development outcomes remain fragmented.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="get-to-know-us">
      {/* Animated Background Gradient */}
      <div className="page-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        {/* Title */}
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Us
        </motion.h1>

        {/* Tagline */}
        <motion.div
          className="tagline-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="tagline">
            Bridging Africa's Research Gap
          </h2>
          <div className="tagline-underline"></div>
        </motion.div>

        {/* Intro Section */}
        <motion.section
          className="intro-section"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="stat-badge">
            <span className="stat-number">17%</span>
            <span className="stat-label">of global population</span>
            <div className="stat-divider"></div>
            <span className="stat-number">&#60;2%</span>
            <span className="stat-label">of research output</span>
          </div>
          <p className="intro-text">
            Despite representing roughly 17% of the global population, Africa contributes less than
            2% to the world's research output — a stark indicator of underdeveloped research capacity.
            This imbalance is compounded by concentration of efforts in just a few countries, leaving
            many regions with limited representation and opportunity.
          </p>
        </motion.section>

        {/* Challenges Section */}
        <motion.section
          className="challenges-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Challenges We Address
          </motion.h2>
          <div className="challenges-grid">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="challenge-card"
              >
                <div className="card-icon">
                  <span className="icon-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-hover-effect"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="mission-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="mission-content">
            <div className="mission-icon">🎯</div>
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              At Akili Bridge, we are committed to reversing these trends. Our mission is to empower
              emerging African researchers by providing comprehensive training, mentorship, and
              resources. By fostering a vibrant, indigenous research culture, we aim to catalyze
              innovative solutions directly aligned with Africa's unique challenges and opportunities.
            </p>
          </div>
        </motion.section>

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
            <span className="button-text">Get Involved</span>
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
        .get-to-know-us {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0f1a 0%, #0a1a2f 100%);
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Animated Background Orbs */
        .page-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.4), rgba(255, 106, 0, 0));
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 114, 255, 0.3), rgba(0, 114, 255, 0));
          bottom: -250px;
          right: -250px;
          animation-delay: 5s;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(238, 9, 121, 0.3), rgba(238, 9, 121, 0));
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Title Styles */
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

        /* Tagline Styles */
        .tagline-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tagline {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 600;
          color: #ff6a00;
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

        /* Intro Section */
        .intro-section {
          margin-bottom: 4rem;
        }

        .stat-badge {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 1.5rem 2rem;
          border-radius: 60px;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffd966, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255, 255, 255, 0.3);
        }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          opacity: 0.9;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
          width: 100%;
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

        /* Challenges Grid */
        .challenges-section {
          margin-bottom: 4rem;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .challenge-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .challenge-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          margin-bottom: 1rem;
        }

        .icon-number {
          display: inline-block;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          opacity: 0.5;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ff6a00;
          line-height: 1.4;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.8;
        }

        .card-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .challenge-card:hover .card-hover-effect {
          transform: scaleX(1);
        }

        /* Mission Section */
        .mission-section {
          margin-bottom: 3rem;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.1), rgba(0, 114, 255, 0.1));
          border-radius: 30px;
          padding: 3rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mission-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .mission-text {
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }

          .stat-badge {
            flex-direction: column;
            gap: 0.8rem;
            border-radius: 30px;
            padding: 1rem;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .challenges-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .mission-section {
            padding: 2rem 1rem;
          }

          .intro-text {
            font-size: 1rem;
          }

          .mission-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 2rem;
          }

          .tagline {
            font-size: 1.2rem;
          }

          .card-title {
            font-size: 1.1rem;
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
