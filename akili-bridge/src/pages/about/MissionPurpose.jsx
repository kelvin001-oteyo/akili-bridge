import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MissionPurpose() {
  const navigate = useNavigate();
  const commitments = [
    { title: "Excellence", description: "We uphold the highest standards in research and innovation." },
    { title: "Collaboration", description: "We believe mentorship and teamwork accelerate impact." },
    { title: "Equity", description: "We create opportunities for talented students regardless of background." },
    { title: "Innovation", description: "We encourage bold thinking and creative problem-solving." },
    { title: "Integrity", description: "We maintain transparency and ethical standards in all our work." },
  ];

  const values = [
    { title: "Ethical Research Excellence", description: "Upholding the highest standards of integrity, transparency, and responsibility." },
    { title: "Collaboration", description: "Working together across disciplines and borders to accelerate impact." },
    { title: "Leadership and Lifelong Learning", description: "Fostering curiosity, continuous learning, and mentorship." },
    { title: "Innovation", description: "Encouraging groundbreaking research that leads to practical solutions." },
    { title: "Research for Impact", description: "Focusing on studies directly addressing Africa's health, technology, and economics." },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const valueCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="mission-purpose">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format')",
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
          Mission & Purpose
        </motion.h1>

        {/* Mission and Vision Cards */}
        <motion.div
          className="mission-vision-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mission-card" variants={itemVariants}>
            <div className="card-icon">🎯</div>
            <h2 className="card-title">Our Mission</h2>
            <p className="card-text">
              To create a thriving ecosystem of African researchers who drive innovation and solve local
              and global challenges through STEM excellence.
            </p>
          </motion.div>

          <motion.div className="vision-card" variants={itemVariants}>
            <div className="card-icon">👁️</div>
            <h2 className="card-title">Vision</h2>
            <p className="card-text">
              We empower East Africa's top undergraduate students with the skills, mentorship, and
              networks they need to produce high-quality, impactful research that transforms their
              communities and beyond.
            </p>
          </motion.div>
        </motion.div>

        {/* Commitment Section */}
        <motion.section
          className="commitment-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">Our Commitment</h2>
          <div className="commitment-intro">
            <p className="commitment-text">
              Akili Bridge is not just an initiative; it is a movement to empower Africa's next
              generation of innovators, thinkers, and changemakers. Together, we are building a future
              where African research drives solutions that transform communities and influence the world.
            </p>
          </div>
          <div className="commitments-grid">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="commitment-card"
              >
                <div className="commitment-header">
                  <span className="commitment-icon">
                    {index === 0 && "⭐"}
                    {index === 1 && "🤝"}
                    {index === 2 && "⚖️"}
                    {index === 3 && "💡"}
                    {index === 4 && "🔒"}
                  </span>
                  <strong className="commitment-title">{item.title}</strong>
                </div>
                <p className="commitment-description">{item.description}</p>
                <div className="card-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="values-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={valueCardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="value-card"
              >
                <div className="value-number">0{index + 1}</div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-description">{item.description}</p>
              </motion.div>
            ))}
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
            <span className="button-text">Be Part of the Mission</span>
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
        .mission-purpose {
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
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        /* Mission & Vision Grid */
        .mission-vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .mission-card,
        .vision-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mission-card:hover,
        .vision-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .card-text {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
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

        /* Commitment Section */
        .commitment-section {
          margin-bottom: 4rem;
        }

        .commitment-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .commitment-text {
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
        }

        .commitments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .commitment-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .commitment-card:hover {
          border-color: rgba(255, 106, 0, 0.5);
        }

        .commitment-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
        }

        .commitment-icon {
          font-size: 1.5rem;
        }

        .commitment-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ff6a00;
        }

        .commitment-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
          margin: 0;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 106, 0, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .commitment-card:hover .card-glow {
          left: 100%;
        }

        /* Values Section */
        .values-section {
          margin-bottom: 4rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(77, 166, 255, 0.5);
        }

        .value-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, rgba(77, 166, 255, 0.3), rgba(77, 166, 255, 0.1));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .value-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #4da6ff;
        }

        .value-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
          margin: 0;
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

          .mission-vision-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .mission-card,
          .vision-card {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .commitments-grid,
          .values-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .commitment-text {
            font-size: 1rem;
          }

          .value-card {
            padding: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .card-icon {
            font-size: 2.5rem;
          }

          .card-title {
            font-size: 1.3rem;
          }

          .commitment-title {
            font-size: 1rem;
          }

          .value-title {
            font-size: 1rem;
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
