import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const MotionLink = motion(Link);

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      x: 8,
      color: "#ffd966",
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer
      ref={footerRef}
      className="footer"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative"
      }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        className="footer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(10, 20, 40, 0.95) 0%, rgba(5, 15, 30, 0.92) 100%)",
          zIndex: 0
        }}
      />

      <div className="footer-content" style={{ position: "relative", zIndex: 1 }}>
        {/* Logo Section with Animation */}
        <motion.div
          className="footer-logo-section"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ textShadow: "0 0 20px rgba(255,217,102,0.5)" }}
          >
            Akili <span style={{ color: "#ffd966" }}>BRIDGE</span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ lineHeight: 1.6 }}
          >
            As a result, the continent struggles to cultivate a new generation of
            Indigenous researchers who can effectively address local challenges.
          </motion.p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          className="quick-links"
          variants={itemVariants}
        >
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: "1.2rem",
              marginBottom: "1rem",
              color: "#ffd966",
              position: "relative",
              display: "inline-block"
            }}
          >
            Quick Links
            <motion.span
              className="link-underline"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: -5,
                left: 0,
                height: "2px",
                background: "#ffd966",
                borderRadius: "2px"
              }}
            />
          </motion.h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              { name: "Who We Are", path: "/about/who-we-are" },
              { name: "Get to Know Us", path: "/about/get-to-know-us" },
              { name: "Fellowship Program", path: "/what-we-do/fellowship" },
              { name: "Training & Workshops", path: "/what-we-do/training" },
              { name: "For Fellows", path: "/apply/fellows" }
            ].map((link, index) => (
              <motion.li
                key={link.name}
                variants={linkVariants}
                whileHover="hover"
                custom={index}
                style={{ marginBottom: "0.75rem" }}
              >
                <MotionLink
                  to={link.path}
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "inline-block"
                  }}
                  whileHover={{ color: "#ffd966" }}
                >
                  {link.name}
                </MotionLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter Section with Animation */}
        <motion.div
          className="newsletter"
          variants={itemVariants}
        >
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ marginBottom: "1rem", color: "#ffd966" }}
          >
            Don't miss out — subscribe here!
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ delay: 1, duration: 0.5, repeat: 2 }}
              style={{ display: "inline-block", marginLeft: "8px" }}
            >
              📧
            </motion.span>
          </motion.h4>
          <motion.form
            onSubmit={handleSubscribe}
            style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
          >
            <motion.input
              type="email"
              placeholder="Enter your official email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #ffd966" }}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "8px",
                border: "none",
                background: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontSize: "0.9rem",
                outline: "none",
                transition: "all 0.2s"
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#ffd966", color: "#1a2a3a" }}
              whileTap={{ scale: 0.95 }}
              animate={subscribed ? { scale: [1, 1.1, 1] } : {}}
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                background: "#ffd966",
                color: "#1a2a3a",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {subscribed ? "✓ Subscribed!" : "Subscribe"}
            </motion.button>
          </motion.form>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: "10px", color: "#ffd966", fontSize: "0.85rem" }}
            >
              Thanks for subscribing! 🎉
            </motion.p>
          )}
        </motion.div>

        {/* Socials Section with Icons */}
        <motion.div
          className="socials"
          variants={itemVariants}
        >
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ marginBottom: "1rem", color: "#ffd966" }}
          >
            Connect With Us
          </motion.h4>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[
              { name: "Facebook", icon: "📘", link: "#" },
              { name: "Instagram", icon: "📸", link: "#" },
              { name: "Twitter", icon: "🐦", link: "#" },
              { name: "LinkedIn", icon: "🔗", link: "#" }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                variants={socialVariants}
                whileHover="hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "25px",
                  background: "rgba(255,255,255,0.1)",
                  transition: "all 0.2s"
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ fontSize: "1.2rem" }}
                >
                  {social.icon}
                </motion.span>
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom with Animated Border */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(255,217,102,0.2)",
          marginTop: "2rem",
          paddingTop: "1.5rem",
          textAlign: "center"
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "0%",
            height: "1px",
            background: "#ffd966"
          }}
          animate={{ width: "50%" }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", fontSize: "0.85rem" }}>
          <motion.p whileHover={{ color: "#ffd966" }}>© 2025 | All Rights Reserved.</motion.p>
          <motion.p whileHover={{ color: "#ffd966" }}>StaffWEBMAIL | WebAdmin</motion.p>
          <motion.p whileHover={{ color: "#ffd966" }}>Designer Eon Promaxfy Ltd</motion.p>
        </div>
      </motion.div>

      {/* Animated Background Particles Effect */}
      <motion.div
        className="footer-particles"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100%",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(255,217,102,${Math.random() * 0.3 + 0.1})`,
              borderRadius: "50%",
              bottom: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.div>
    </motion.footer>
  );
}
