import React from "react";
import { motion } from "framer-motion";

const labs = [
  {
    title: "EdTech & Digital Learning Lab",
    description: "Learning technologies for equitable STEM education across Africa.",
    focus: "Adaptive learning; Gamification; Virtual Labs",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format",
    color: "#4a90e2",
  },
  {
    title: "Energy Storage & Battery Technology Lab",
    description: "Reliable storage solutions for mini-grids, mobility, and portable devices.",
    focus: "Battery chemistries; Grid integration; Sustainable materials",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format",
    color: "#e67e22",
  },
  {
    title: "Nanotechnology & Advanced Materials Lab",
    description: "Novel materials for energy, water purification, health, and construction.",
    focus: "Nanocoatings; Composites; Biomaterials",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format",
    color: "#2ecc71",
  },
  {
    title: "Artificial Intelligence & Data Science Lab",
    description: "Harnessing AI and machine learning to solve African development challenges.",
    focus: "Predictive analytics; Computer vision; NLP",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format",
    color: "#9b59b6",
  },
  {
    title: "Biotechnology & Health Innovations Lab",
    description: "Advancing healthcare solutions through cutting-edge biotech research.",
    focus: "Genomics; Drug discovery; Diagnostic tools",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070&auto=format",
    color: "#e74c3c",
  },
  {
    title: "Renewable Energy Systems Lab",
    description: "Developing sustainable energy solutions for off-grid communities.",
    focus: "Solar tech; Wind energy; Hybrid systems",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format",
    color: "#f1c40f",
  },
  {
    title: "Civil & Environmental Engineering Lab",
    description: "Infrastructure solutions for sustainable urban and rural development.",
    focus: "Smart materials; Water systems; Green construction",
    image: "https://images.unsplash.com/photo-1577972830832-2dd2c7b7f50c?q=80&w=2070&auto=format",
    color: "#3498db",
  },
  {
    title: "ICT & Emerging Technologies Lab",
    description: "Exploring next-gen technologies for digital transformation in Africa.",
    focus: "IoT; Blockchain; 5G; Cloud computing",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format",
    color: "#1abc9c",
  },
];

export default function Labs() {
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
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="labs-page">
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
            <span className="badge-icon">🔬</span>
            Innovation Hubs
          </div>
          <h1 className="page-title">
            Our Innovation Labs
          </h1>
          <p className="hero-description">
            Discover our cutting-edge research laboratories where African researchers are 
            developing innovative solutions to address the continent's most pressing challenges. 
            Each lab is equipped with state-of-the-art facilities and led by world-class experts.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Research Labs</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Active Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Researchers</span>
            </div>
          </div>
        </motion.div>

        {/* Labs Grid */}
        <motion.div
          className="labs-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {labs.map((lab, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="lab-card"
              style={{ borderTopColor: lab.color }}
            >
              <div className="lab-image-container">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="lab-image"
                />
                <div className="lab-overlay" style={{ background: `linear-gradient(135deg, ${lab.color}80, transparent)` }}></div>
                <div className="lab-badge" style={{ background: lab.color }}>{index + 1}</div>
              </div>
              <div className="lab-content">
                <h2 className="lab-title" style={{ color: lab.color }}>{lab.title}</h2>
                <p className="lab-description">{lab.description}</p>
                <div className="lab-focus">
                  <span className="focus-label">Focus Areas:</span>
                  <p className="focus-text">{lab.focus}</p>
                </div>
                <motion.a
                  href="#"
                  className="lab-link"
                  style={{ color: lab.color }}
                  whileHover={{ x: 5 }}
                >
                  Explore Lab →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
          >
            <span className="button-text">Join a Research Lab</span>
            <motion.span
              className="button-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
          <p className="cta-note">Collaborate with our researchers • Open positions available</p>
        </motion.div>
      </div>

      <style jsx>{`
        /* Main Container */
        .labs-page {
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
          max-width: 1400px;
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

        /* Labs Grid */
        .labs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .lab-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          border-top: 4px solid;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .lab-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .lab-image-container {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .lab-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .lab-card:hover .lab-image {
          transform: scale(1.1);
        }

        .lab-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .lab-card:hover .lab-overlay {
          opacity: 0.2;
        }

        .lab-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
          color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .lab-content {
          padding: 1.5rem;
        }

        .lab-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          transition: color 0.3s ease;
        }

        .lab-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          opacity: 0.85;
        }

        .lab-focus {
          margin-bottom: 1.2rem;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .focus-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.7;
          display: block;
          margin-bottom: 0.3rem;
        }

        .focus-text {
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.4;
        }

        .lab-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .lab-link:hover {
          gap: 0.8rem;
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

          .labs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .lab-image-container {
            height: 200px;
          }

          .lab-title {
            font-size: 1.2rem;
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

          .lab-content {
            padding: 1.2rem;
          }

          .lab-title {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 0.8rem 1.8rem;
            font-size: 0.9rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}