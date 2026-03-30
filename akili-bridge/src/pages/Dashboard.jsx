import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { apiFetch } from "../utils/api";
import "./Dashboard.css";

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
    scale: 1.03,
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
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.06,
      type: "spring",
      stiffness: 180,
      damping: 20,
    },
  }),
};

export default function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [applications, setApplications] = useState([]);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access") || localStorage.getItem("token");

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

        const requests = [apiFetch("/api/blog/")];

        if (token) {
          requests.push(apiFetch("/api/fellowship/notifications/"));
          requests.push(apiFetch("/api/fellowship/applications/"));
        }

        const responses = await Promise.all(requests);
        const [postsResponse, notificationsResponse, applicationsResponse] = responses;

        const postsData = await parseJsonSafely(postsResponse, "Blog posts");
        setPosts(postsData.slice(0, 3));

        if (token) {
          const [notificationsData, applicationsData] = await Promise.all([
            parseJsonSafely(notificationsResponse, "Notifications"),
            parseJsonSafely(applicationsResponse, "Applications"),
          ]);

          setNotifications(notificationsData);
          setApplications(applicationsData);
        } else {
          setNotifications([]);
          setApplications([]);
        }
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
  }, [user]);

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="welcome-banner"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.8 }}
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
            ? "Track your applications, read the latest updates, and stay on top of notifications."
            : "Read the latest updates and log in to view your applications and notifications."}
        </motion.p>

        <AnimatePresence>
          {fetchError && (
            <motion.p
              className="error-message"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {fetchError}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="cards-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card" variants={cardVariants} whileHover="hover">
          <h2>Applications</h2>

          {user ? (
            <AnimatePresence mode="wait">
              {applications.length > 0 ? (
                <motion.ul initial="hidden" animate="visible" variants={containerVariants}>
                  {applications.map((application, index) => (
                    <motion.li
                      key={application.id}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {application.full_name}
                      <span className={`application-status status-${application.status}`}>
                        {application.status}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  No applications found yet.
                </motion.p>
              )}
            </AnimatePresence>
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Log in to view your submitted fellowship or undergraduate applications.
            </motion.p>
          )}
        </motion.div>

        <motion.div className="card" variants={cardVariants} whileHover="hover">
          <h2>Latest News</h2>

          {posts.length > 0 ? (
            <div className="news-list">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="news-item"
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="news-item-header">
                    <span className="news-category">{post.category || "Announcement"}</span>
                    <span className="news-date">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>
                    {post.excerpt ||
                      `${post.body?.slice(0, 120) || ""}${post.body?.length > 120 ? "..." : ""}`}
                  </p>
                  <Link to={`/blog/${post.id}`} className="news-link">
                    Read article
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              No blog posts yet. Anything published from Django admin will appear here automatically.
            </motion.p>
          )}
        </motion.div>

        <motion.div className="card" variants={cardVariants} whileHover="hover">
          <h2>
            Notifications
            {notifications.length > 0 && user && <span className="badge">{notifications.length}</span>}
          </h2>

          {user ? (
            notifications.length > 0 ? (
              <div>
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    className="notification-item"
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="notification-dot">•</span>
                    <p>{notification.message}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                No notifications yet.
              </motion.p>
            )
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Log in to see your notifications here.
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      <motion.button
        className="floating-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          ↑
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
