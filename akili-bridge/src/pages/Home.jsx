import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroScale = useTransform(springScroll, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(springScroll, [0, 0.3], [1, 0.7]);

  // Parallax backgrounds for each section
  const bgY1 = useTransform(springScroll, [0, 1], ["0%", "20%"]);
  const bgY2 = useTransform(springScroll, [0, 1], ["0%", "15%"]);
  const bgY3 = useTransform(springScroll, [0, 1], ["0%", "25%"]);

  return (
    <div className="home-page" ref={containerRef}>
      {/* Hero Section with Animated Background Image */}
      <motion.section
        className="home-hero"
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Akili BRIDGE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Nurturing the Next Generation of African Researcher Scholars
          </motion.p>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="stat">
              <motion.span
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                17%
              </motion.span>
              <span>of global population</span>
            </div>
            <div className="stat">
              <motion.span
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                &lt;1%
              </motion.span>
              <span>of global research</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Fellowship Highlight with Background Image */}
      <motion.section
        className="home-section fellowship-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="section-overlay" />
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="section-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              ✨ First Cohort 2025
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              STEM Fellowship Program
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join the first cohort of our one-year researcher-in-training fellowship
              for undergraduate students in Rwanda, focusing on research skills,
              mentorship, and career development in STEM.
            </motion.p>
            <motion.div className="fellowship-features">
              {["Research Skills", "Mentorship", "Career Development", "Networking"].map((feature, i) => (
                <motion.span
                  key={feature}
                  className="feature-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#2c3e66" }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
            <motion.button
              className="home-btn primary-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => navigate("/careers/application")}
            >
              <span>Learn More</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Africa Needs More Researchers with Background Image */}
      <motion.section
        className="home-section stats-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="section-overlay dark" />
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Why Africa Needs More Researchers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="highlight-text"
            >
              Africa contributes less than 1% of global research output despite being
              home to 17% of the world's population. Without a strong research
              foundation, scientific breakthroughs, innovation, and technological
              advancements will remain out of reach.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              At Akili Bridge, we believe Africa needs more researchers — not just in
              numbers, but in quality, innovation, and impact.
            </motion.p>
          </motion.div>

          <motion.div
            className="impact-cards"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { number: "100+", label: "Researchers Trained", icon: "🎓" },
              { number: "10+", label: "Partner Institutions", icon: "🤝" },
              { number: "5+", label: "African Countries", icon: "🌍" },
              { number: "100%", label: "Commitment to Excellence", icon: "⭐" }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="impact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <span className="impact-icon">{item.icon}</span>
                <motion.span
                  className="impact-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  {item.number}
                </motion.span>
                <span className="impact-label">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* What's New Teaser with Background Image */}
      <motion.section
        className="home-section news-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="section-overlay gradient" />
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              What's New
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Stay updated with the latest from Akili Bridge — workshops, fellowship
              updates, and announcements.
            </motion.p>

            <motion.div
              className="news-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { title: "Application Deadline Extended", date: "Mar 30, 2025", type: "Announcement" },
                { title: "Research Methods Workshop", date: "Apr 5, 2025", type: "Event" },
                { title: "New Mentorship Program Launch", date: "Apr 12, 2025", type: "Update" }
              ].map((news, i) => (
                <motion.div
                  key={news.title}
                  className="news-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <span className="news-type">{news.type}</span>
                  <h4>{news.title}</h4>
                  <span className="news-date">{news.date}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="home-btn secondary-btn"
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#1e2a47" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              onClick={() => navigate("/careers/application")}
            >
              Discover More
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ marginLeft: "8px" }}
              >
                ✨
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Action Button */}
      <motion.button
        className="floating-btn"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↑
        </motion.span>
      </motion.button>
    </div>
  );
}
