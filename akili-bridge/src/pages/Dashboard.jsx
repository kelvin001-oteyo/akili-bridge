import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../utils/api";
import "./Dashboard.css";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 },
  },
};

const notificationVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.02,
    x: 5,
    transition: { duration: 0.2 },
  },
};

export default function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [applications, setApplications] = useState([]);
  const [user, setUser] = useState(null);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const token = localStorage.getItem("access") || localStorage.getItem("token");
    if (!token) return;

    const parseJsonSafely = async (response, label) => {
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json().catch(() => null)
        : null;

      if (!response.ok) {
        const message =
          data?.detail || data?.error || `${label} request failed (${response.status})`;
        throw new Error(message);
      }

      return Array.isArray(data) ? data : [];
    };

    const fetchDashboardData = async () => {
      try {
        setFetchError("");

        const [notificationsResponse, applicationsResponse] = await Promise.all([
          apiFetch("/api/fellowship/notifications/"),
          apiFetch("/api/fellowship/applications/"),
        ]);

        const [notificationsData, applicationsData] = await Promise.all([
          parseJsonSafely(notificationsResponse, "Notifications"),
          parseJsonSafely(applicationsResponse, "Applications"),
        ]);

        setNotifications(notificationsData);
        setApplications(applicationsData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (
          error.message.toLowerCase().includes("token") ||
          error.message.toLowerCase().includes("authentication") ||
          error.message.toLowerCase().includes("session expired")
        ) {
          localStorage.removeItem("access");
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
          localStorage.removeItem("user");
          window.location.href = "/login";
        } else {
          setFetchError(error.message || "Unable to load dashboard data.");
        }
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Welcome Banner with enhanced animation */}
      <motion.div
        className="welcome-banner"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 0.8,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {user ? `Welcome, ${user.username}` : "Welcome to Akili Bridge Dashboard"}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {user
            ? "Here is your personalized dashboard."
            : "Explore demo content below. Log in to see your applications and notifications."}
        </motion.p>
        
        <AnimatePresence>
          {fetchError && user && (
            <motion.p
              className="error-message"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              ⚠️ {fetchError}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Cards Grid with staggered animation */}
      <motion.div
        className="cards-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Applications Card */}
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Applications
          </motion.h2>
          
          {user ? (
            <AnimatePresence mode="wait">
              {applications.length > 0 ? (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <AnimatePresence>
                    {applications.map((app, index) => (
                      <motion.li
                        key={app.id}
                        custom={index}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {app.full_name} - 
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          style={{ display: "inline-block" }}
                        >
                          {app.status}
                        </motion.span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  No applications found.
                </motion.p>
              )}
            </AnimatePresence>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Demo: Track your fellowship or undergraduate applications here.
            </motion.p>
          )}
        </motion.div>

        {/* Latest News Card */}
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Latest News
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {user
              ? "Stay updated with announcements and events tailored for you."
              : "Demo: Latest announcements and events will appear here."}
          </motion.p>
          
          {/* Optional: Add a pulsing animation for new content indicator */}
          <motion.div
            className="news-indicator"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.4,
            }}
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              📰
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Notifications Card */}
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Notifications
            {notifications.length > 0 && user && (
              <motion.span
                className="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                {notifications.length}
              </motion.span>
            )}
          </motion.h2>
          
          {user ? (
            <AnimatePresence mode="wait">
              {notifications.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      custom={index}
                      variants={notificationVariants}
                      whileHover="hover"
                      className="notification-item"
                    >
                      <motion.div
                        className="notification-dot"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        >
                          ●
                        </motion.span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        {notification.message}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  No notifications yet.
                </motion.p>
              )}
            </AnimatePresence>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Demo: Notifications will appear here once you log in.
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      {/* Floating action button animation (optional) */}
      <motion.button
        className="floating-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 1,
        }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.span
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          ↑
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
