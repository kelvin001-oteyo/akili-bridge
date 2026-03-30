import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeHero.css";

export default function HomeHero() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <motion.section
      ref={containerRef}
      className="hero-section"
      style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }}
    >
      {/* Animated Background Overlay with Particles */}
      <div className="hero-bg-overlay">
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.3
              }}
              animate={{
                y: [null, -100, -200],
                x: [null, Math.random() * 200 - 100, Math.random() * 200 - 100],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              style={{
                position: "absolute",
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: `radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,255,255,0))`,
                borderRadius: "50%",
                pointerEvents: "none"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="badge-icon">✨</span>
          Empowering African Scholars
          <span className="badge-icon">🚀</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Building Africa’s Next Generation of
          <motion.span
            className="highlight-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Researchers
          </motion.span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Nurturing innovation, mentorship, and STEM excellence across the continent
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            className="hero-btn primary-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/careers/application")}
          >
            Learn More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{ marginLeft: "8px" }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            className="hero-btn secondary-btn"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/careers/application")}
          >
            <span>🎓</span>
            Apply Now
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            className="mouse"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="wheel"></div>
          </motion.div>
          <p>Scroll to explore</p>
        </motion.div>
      </motion.div>

      {/* Floating Shapes Decoration */}
      <div className="floating-shapes">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`shape shape-${i + 1}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0.5],
              y: [0, -100, -200],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
