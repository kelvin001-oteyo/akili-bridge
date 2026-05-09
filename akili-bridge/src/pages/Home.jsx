import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format')",
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Fellowship Section with Enhanced Animations */}
      <motion.section
        className="home-section fellowship-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format')",
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
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </motion.span>
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
              {[
                { name: "Research Skills", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
                { name: "Mentorship", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" },
                { name: "Career Development", icon: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" },
                { name: "Networking", icon: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" }
              ].map((feature, i) => (
                <motion.span
                  key={feature.name}
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
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d={feature.icon}/>
                    </svg>
                    {feature.name}
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section with Enhanced Animations - REMOVED THE BLUE UNDERLINE EFFECT */}
      <motion.section
        className="home-section stats-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format')",
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
              {/* REMOVED: The blue underline effect at the start of sentence */}
              Africa contributes less than 1% of global research output despite being home to 17% of the world's population. Without a strong research
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
              { 
                number: "100+", 
                label: "Researchers Trained", 
                icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                color: "#2fb3ff" 
              },
              { 
                number: "10+", 
                label: "Partner Institutions", 
                icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
                color: "#8a7ff7" 
              },
              { 
                number: "5+", 
                label: "African Countries", 
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
                color: "#ff6b9d" 
              },
              { 
                number: "100%", 
                label: "Commitment to Excellence", 
                icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                color: "#ffd93d" 
              }
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
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: item.color }}>
                    <path d={item.icon}/>
                  </svg>
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
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format')",
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
                  icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                { 
                  title: "Research Methods Workshop", 
                  date: "Apr 5, 2025", 
                  type: "Event",
                  color: "#8a7ff7",
                  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                { 
                  title: "New Mentorship Program Launch", 
                  date: "Apr 12, 2025", 
                  type: "Update",
                  color: "#ff6b9d",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }}>
                      <path d={news.icon}/>
                    </svg>
                    {news.type}
                  </motion.span>
                  
                  <h4>{news.title}</h4>
                  
                  <motion.span 
                    className="news-date"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "5px", display: "inline", verticalAlign: "middle" }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {news.date}
                  </motion.span>
                  
                  <motion.div
                    className="news-arrow"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
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
                  style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
                >
                  Subscribed
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </motion.span>
              ) : (
                <motion.span
                  whileHover={{ letterSpacing: "1px" }}
                  style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
                >
                  Subscribe
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ display: "inline-flex" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                {subscribeError}
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
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
            style={{ display: "inline-flex" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
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
