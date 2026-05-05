import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";
import "./Home.css";
import brandIcon from "../assets/images/akili_bridge_logo_32.png";

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

  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  // Particle effect for hero section
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeError("");

    if (!subscribeEmail || !subscribeEmail.includes("@")) {
      setSubscribeError("Enter a valid email address.");
      return;
    }

    try {
      const res = await apiFetch("/api/fellowship/newsletter-subscriptions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: subscribeEmail,
          role: "Subscriber",
          source: "homepage",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const emailErrors = Array.isArray(errorData?.email) ? errorData.email.join(", ") : null;
        throw new Error(emailErrors || errorData?.detail || "Subscription failed.");
      }

      setSubscribed(true);
      setSubscribeEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      setSubscribeError(error.message || "Subscription failed.");
    }
  };

  const heroScale = useTransform(springScroll, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(springScroll, [0, 0.3], [1, 0.7]);

  // Parallax backgrounds for each section
  const bgY1 = useTransform(springScroll, [0, 1], ["0%", "20%"]);
  const bgY2 = useTransform(springScroll, [0, 1], ["0%", "15%"]);
  const bgY3 = useTransform(springScroll, [0, 1], ["0%", "25%"]);

  // Staggered text animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="home-page" ref={containerRef}>
      {/* Hero Section with Enhanced Animations */}
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
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              position: "absolute",
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.4)",
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="hero-overlay" />
        
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="hero-logo-container"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={brandIcon}
              alt="AkiliBridge"
              className="hero-logo"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          <motion.h1 variants={fadeInUp}>
            <motion.span
              className="hero-title-word"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Akili
            </motion.span>
            <motion.span
              className="hero-title-word accent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Bridge
            </motion.span>
          </motion.h1>
          
          <motion.p variants={fadeInUp}>
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #2fb3ff, #8a7ff7, #2fb3ff)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nurturing the Next Generation of African Researcher Scholars
            </motion.span>
          </motion.p>

          <motion.div
            className="hero-stats"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="stat"
              variants={scaleIn}
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 0.9 
                }}
              >
                17%
              </motion.span>
              <span>of global population</span>
            </motion.div>
            
            <motion.div className="stat-divider" />
            
            <motion.div 
              className="stat"
              variants={scaleIn}
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 1.1 
                }}
              >
                &lt;1%
              </motion.span>
              <span>of global research</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="scroll-arrow"
            >
              ↓
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Fellowship Section with Enhanced Animations */}
      <motion.section
        className="home-section fellowship-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="section-overlay" />
        <div className="section-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span
              className="section-badge"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(47, 179, 255, 0.5)"
              }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ display: "inline-block" }}
              >
                ✨
              </motion.span>{" "}
              First Cohort 2025
            </motion.span>

            <motion.h2 variants={fadeInUp}>
              <motion.span
                whileHover={{ 
                  color: "#2fb3ff",
                  transition: { duration: 0.3 }
                }}
              >
                STEM Fellowship Program
              </motion.span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="section-description">
              Join the first cohort of our one-year researcher-in-training fellowship
              for undergraduate students in Rwanda, focusing on research skills,
              mentorship, and career development in STEM.
            </motion.p>

            <motion.div 
              className="fellowship-features"
              variants={staggerContainer}
            >
              {["Research Skills", "Mentorship", "Career Development", "Networking"].map((feature, i) => (
                <motion.span
                  key={feature}
                  className="feature-tag"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#2c3e66",
                    boxShadow: "0 5px 15px rgba(47, 179, 255, 0.3)",
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {feature === "Research Skills" && "🔬 "}
                    {feature === "Mentorship" && "👥 "}
                    {feature === "Career Development" && "📈 "}
                    {feature === "Networking" && "🌐 "}
                    {feature}
                  </motion.span>
                </motion.span>
              ))}
            </motion.div>

            <motion.button
              className="home-btn primary-btn"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(47, 179, 255, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/careers/undergraduate")}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <motion.img 
                src={brandIcon} 
                alt="AkiliBridge logo" 
                className="btn-icon"
                animate={isHovering ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              <span>Learn More</span>
              <motion.span
                animate={isHovering ? { x: [0, 8, 0] } : { x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity,
                  duration: isHovering ? 0.8 : 1.5
                }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section with Enhanced Animations */}
      <motion.section
        className="home-section stats-section"
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>
              Why Africa Needs More Researchers
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="highlight-text"
            >
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                whileInView={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  background: "linear-gradient(120deg, #2fb3ff 0%, #2fb3ff 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "0% 100%",
                  backgroundPosition: "0 90%",
                  transition: "background-size 0.3s",
                  padding: "0 4px",
                }}
              >
                Africa contributes less than 1% of global research output
              </motion.span>{" "}
              despite being home to 17% of the world's population. Without a strong research
              foundation, scientific breakthroughs, innovation, and technological
              advancements will remain out of reach.
            </motion.p>
            
            <motion.p variants={fadeInUp}>
              At AkiliBridge, we believe Africa needs more researchers — not just in
              numbers, but in quality, innovation, and impact.
            </motion.p>
          </motion.div>

          <motion.div
            className="impact-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: "100+", label: "Researchers Trained", icon: "🎓", color: "#2fb3ff" },
              { number: "10+", label: "Partner Institutions", icon: "🤝", color: "#8a7ff7" },
              { number: "5+", label: "African Countries", icon: "🌍", color: "#ff6b9d" },
              { number: "100%", label: "Commitment to Excellence", icon: "⭐", color: "#ffd93d" }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="impact-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -12,
                  scale: 1.05,
                  boxShadow: `0 20px 40px -10px ${item.color}40`,
                  borderColor: item.color,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="impact-icon"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: i * 0.5,
                  }}
                >
                  {item.icon}
                </motion.span>
                
                <motion.span
                  className="impact-number"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.9 + i * 0.1,
                  }}
                >
                  {item.number}
                </motion.span>
                
                <span className="impact-label">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* News Section with Enhanced Animations */}
      <motion.section
        className="home-section news-section"
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>
              What's New
            </motion.h2>
            
            <motion.p variants={fadeInUp}>
              Stay updated with the latest from AkiliBridge — workshops, fellowship
              updates, and announcements.
            </motion.p>

            <motion.div
              className="news-grid"
              variants={staggerContainer}
            >
              {[
                { 
                  title: "Application Deadline Extended", 
                  date: "Mar 30, 2025", 
                  type: "Announcement",
                  color: "#2fb3ff",
                  icon: "📢"
                },
                { 
                  title: "Research Methods Workshop", 
                  date: "Apr 5, 2025", 
                  type: "Event",
                  color: "#8a7ff7",
                  icon: "🎯"
                },
                { 
                  title: "New Mentorship Program Launch", 
                  date: "Apr 12, 2025", 
                  type: "Update",
                  color: "#ff6b9d",
                  icon: "🚀"
                }
              ].map((news, i) => (
                <motion.div
                  key={news.title}
                  className="news-card"
                  variants={fadeInUp}
                  whileHover={{ 
                    x: 12,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    boxShadow: `0 10px 30px -10px ${news.color}40`,
                    borderLeft: `4px solid ${news.color}`,
                  }}
                  style={{
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <motion.span 
                    className="news-type"
                    style={{ color: news.color }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {news.icon} {news.type}
                  </motion.span>
                  
                  <h4>{news.title}</h4>
                  
                  <motion.span 
                    className="news-date"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ display: "inline-block", marginRight: "5px" }}
                    >
                      📅
                    </motion.span>
                    {news.date}
                  </motion.span>
                  
                  <motion.div
                    className="news-arrow"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="home-btn secondary-btn"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#1e2a47",
                boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/careers/application")}
            >
              <motion.img 
                src={brandIcon} 
                alt="AkiliBridge logo" 
                className="btn-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              Discover More
              <motion.span
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ marginLeft: "8px" }}
              >
                ✨
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Subscribe Section with Enhanced Animations */}
      <motion.section
        className="home-section subscribe-section"
        style={{ backgroundColor: "#152238", color: "#ffffff" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section-content"
          style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}
        >
          <motion.div
            variants={fadeInUp}
            style={{ marginBottom: "1rem" }}
          >
            <motion.h2
              whileHover={{ scale: 1.02 }}
              style={{ 
                background: "linear-gradient(135deg, #2fb3ff, #8a7ff7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stay In The Loop
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            style={{ maxWidth: "720px", margin: "0 auto 1.5rem", lineHeight: 1.8 }}
          >
            <motion.span
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Subscribe to AkiliBridge announcements and receive the latest fellowship,
              events, and research updates straight to your inbox.
            </motion.span>
          </motion.p>

          <motion.form
            onSubmit={handleSubscribe}
            variants={fadeInUp}
            style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "12px", 
              justifyContent: "center", 
              margin: "0 auto" 
            }}
          >
            <motion.input
              type="email"
              placeholder="Enter your email address"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              whileFocus={{ 
                scale: 1.02,
                borderColor: "#2fb3ff",
                boxShadow: "0 0 20px rgba(47, 179, 255, 0.3)",
              }}
              style={{
                flex: "1 1 280px",
                minWidth: "260px",
                padding: "14px 18px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                outline: "none",
                transition: "all 0.3s ease",
              }}
            />
            
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(135deg, #2fb3ff, #8a7ff7)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={subscribed ? {
                background: ["#2fb3ff", "#4CAF50", "#2fb3ff"],
              } : {}}
              transition={{ duration: 0.5 }}
              style={{
                padding: "14px 26px",
                borderRadius: "8px",
                border: "none",
                background: "#2fb3ff",
                color: "#1e2a47",
                fontWeight: "700",
                cursor: "pointer",
                minWidth: "160px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background 0.3s ease",
              }}
            >
              <motion.img 
                src={brandIcon} 
                alt="AkiliBridge logo" 
                className="btn-icon"
                animate={subscribed ? { rotate: 360 } : {}}
                transition={{ duration: 0.6 }}
              />
              {subscribed ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Subscribed ✓
                </motion.span>
              ) : (
                <motion.span
                  whileHover={{ letterSpacing: "1px" }}
                >
                  Subscribe
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ marginLeft: "5px" }}
                  >
                    →
                  </motion.span>
                </motion.span>
              )}
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {subscribeError && (
              <motion.p
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                style={{ color: "#ff7a7a", marginTop: "1rem" }}
              >
                ⚠️ {subscribeError}
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ 
                  marginTop: "1rem",
                  padding: "10px 20px",
                  background: "rgba(76, 175, 80, 0.2)",
                  borderRadius: "8px",
                  color: "#4CAF50",
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2 }}
                  style={{ display: "inline-block", marginRight: "8px" }}
                >
                  🎉
                </motion.span>
                Successfully subscribed! Check your inbox.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Enhanced Floating Action Button */}
      <AnimatePresence>
        <motion.button
          className="floating-btn"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0,
          }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ 
            delay: 1.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ 
            scale: 1.15,
            boxShadow: "0 15px 30px -10px rgba(47, 179, 255, 0.5)",
          }}
          whileTap={{ scale: 0.85 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2fb3ff, #8a7ff7)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "white",
          }}
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            ↑
          </motion.span>
          
          {/* Ripple effect */}
          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.3, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
