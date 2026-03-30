import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const MotionLink = motion(Link);

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // check if logged in

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenus = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    navigate("/auth"); // back to register/login page
  };

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background Gradient */}
        <div className="navbar-bg">
          <div className="navbar-gradient"></div>
          <div className="navbar-particles">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="navbar-particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * 100,
                  opacity: 0
                }}
                animate={{
                  y: [null, -50, -100],
                  opacity: [0, 0.5, 0],
                  x: [null, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>

        <div className="navbar-container">
          {/* Logo with Animation */}
          <MotionLink
            to="/"
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={closeMenus}
          >
            <motion.span
              className="logo-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Akili
            </motion.span>
            <motion.span
              className="logo-highlight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              BRIDGE
            </motion.span>
            <motion.div
              className="logo-dot"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            />
          </MotionLink>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {[
              { name: "Home", path: "/", hasDropdown: false },
              {
                name: "About",
                key: "about",
                items: [
                  { name: "Get to Know Us", path: "/about/get-to-know-us" },
                  { name: "Who We Are", path: "/about/who-we-are" },
                  { name: "Mission & Purpose", path: "/about/mission-purpose" }
                ]
              },
              {
                name: "What We Do",
                key: "whatwedo",
                items: [
                  { name: "Fellowship Program", path: "/what-we-do/fellowship" },
                  { name: "Training & Workshops", path: "/what-we-do/training" }
                ]
              },
              {
                name: "How to Apply",
                key: "apply",
                items: [
                  { name: "For Fellows", path: "/apply/fellows" },
                  { name: "For Mentors", path: "/apply/mentors" }
                ]
              },
              { name: "Labs", path: "/labs", hasDropdown: false },
              {
                name: "Careers",
                key: "careers",
                items: [
                  { name: "Undergraduate Research Assistant", path: "/careers/undergraduate" },
                  { name: "Careers Application Form", path: "/careers/application" }
                ]
              },
              { name: "What's New", path: "/news", hasDropdown: false },
              { name: "Dashboard", path: "/dashboard", hasDropdown: false },
              ...(user?.is_admin
                ? [{ name: "Admin Dashboard", path: "/admin-dashboard", hasDropdown: false }]
                : [])
            ].map((item, index) => (
              <motion.li
                key={item.name}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className={item.hasDropdown === false && !item.items ? "nav-item" : "dropdown"}
              >
                {item.items ? (
                  <>
                    <motion.button
                      className="dropdown-btn"
                      onClick={() => toggleMenu(item.key)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: openMenu === item.key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="dropdown-arrow"
                      >
                        ▼
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openMenu === item.key && (
                        <motion.ul
                          className="dropdown-menu"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {item.items.map((subItem) => (
                            <motion.li
                              key={subItem.name}
                              whileHover={{ x: 8 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link to={subItem.path} onClick={closeMenus}>{subItem.name}</Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <MotionLink
                    to={item.path}
                    onClick={closeMenus}
                    whileHover={{ scale: 1.05, color: "#ffd966" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </MotionLink>
                )}
              </motion.li>
            ))}
            
            {/* Authentication Section - Desktop */}
            {user ? (
              <>
                <motion.li
                  className="nav-item welcome-item"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={10}
                >
                  <span className="welcome-text">
                    Welcome, {user.username || user.email}
                  </span>
                </motion.li>
                <motion.li
                  className="nav-item"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={11}
                >
                  <motion.button
                    onClick={handleLogout}
                    className="logout-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Logout
                  </motion.button>
                </motion.li>
              </>
            ) : (
              <motion.li
                className="nav-item"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={10}
              >
                <MotionLink
                  to="/auth"
                  onClick={closeMenus}
                  className="auth-link"
                  whileHover={{ scale: 1.05, color: "#ffd966" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register / Login
                </MotionLink>
              </motion.li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeMenus}
          >
            <motion.div
              className="mobile-menu-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="mobile-menu-header">
                <div className="mobile-logo">Akili BRIDGE</div>
                <motion.button
                  className="mobile-close-btn"
                  onClick={closeMenus}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
              <ul className="mobile-nav-links">
                {[
                  { name: "Home", path: "/" },
                  { name: "Get to Know Us", path: "/about/get-to-know-us" },
                  { name: "Who We Are", path: "/about/who-we-are" },
                  { name: "Mission & Purpose", path: "/about/mission-purpose" },
                  { name: "Fellowship Program", path: "/what-we-do/fellowship" },
                  { name: "Training & Workshops", path: "/what-we-do/training" },
                  { name: "For Fellows", path: "/apply/fellows" },
                  { name: "For Mentors", path: "/apply/mentors" },
                  { name: "Labs", path: "/labs" },
                  { name: "Undergraduate Research Assistant", path: "/careers/undergraduate" },
                  { name: "Careers Application Form", path: "/careers/application" },
                  { name: "What's New", path: "/news" },
                  { name: "Dashboard", path: "/dashboard" },
                  ...(user?.is_admin ? [{ name: "Admin Dashboard", path: "/admin-dashboard" }] : [])
                ].map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link to={item.path} onClick={closeMenus}>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                
                {/* Authentication Section - Mobile */}
                {user ? (
                  <>
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="mobile-welcome-text">
                        Welcome, {user.username || user.email}
                      </div>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 }}
                    >
                      <button
                        onClick={() => {
                          handleLogout();
                          closeMenus();
                        }}
                        className="mobile-logout-btn"
                      >
                        Logout
                      </button>
                    </motion.li>
                  </>
                ) : (
                  <motion.li
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Link
                      to="/auth"
                      onClick={closeMenus}
                      className="mobile-auth-link"
                    >
                      Register / Login
                    </Link>
                  </motion.li>
                )}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
