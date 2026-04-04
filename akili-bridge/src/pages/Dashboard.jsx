import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access") || localStorage.getItem("token");
    
    // If no token, we still load public content (blog posts)
    const parseJsonSafely = async (response, label) => {
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json().catch(() => null)
        : null;

      if (!response.ok) {
        // Handle 401 Unauthorized - token expired
        if (response.status === 401) {
          localStorage.removeItem("access");
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
          localStorage.removeItem("user");
          navigate("/auth");
          throw new Error("Session expired. Please login again.");
        }
        
        const message =
          data?.detail || data?.error || `${label} request failed (${response.status})`;
        throw new Error(message);
      }

      if (Array.isArray(data)) {
        return data;
      }

      if (data?.results && Array.isArray(data.results)) {
        return data.results;
      }

      if (data?.data && Array.isArray(data.data)) {
        return data.data;
      }

      return [];
    };

    const fetchDashboardData = async () => {
      try {
        setFetchError("");
        setLoading(true);
        
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
          
          // Log for debugging (remove in production)
          console.log(`Found ${applicationsData.length} applications for ${user?.username}`);
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
          // Don't redirect here, let the component handle it
          setFetchError("Session expired. Please login again.");
        } else {
          setFetchError(error.message || "Unable to load dashboard data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user, navigate]);

  // Helper function to get status color class
  const getStatusClass = (status) => {
    switch(status) {
      case 'accepted':
        return 'status-accepted';
      case 'rejected':
        return 'status-rejected';
      case 'reviewed':
        return 'status-reviewed';
      default:
        return 'status-pending';
    }
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
          {user ? `Welcome, ${user.username}` : "Welcome to AkiliBridge Dashboard"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {user
            ? `Track your applications, read the latest updates, and stay on top of notifications.`
            : `Read the latest updates and log in to view your applications and notifications.`}
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
              {fetchError.includes("Session expired") && (
                <button 
                  onClick={() => navigate("/auth")}
                  className="error-action-btn"
                >
                  Go to Login
                </button>
              )}
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
          <h2>
            My Applications
            {applications.length > 0 && user && (
              <span className="badge">{applications.length}</span>
            )}
          </h2>

          {user ? (
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="loading-spinner"
                >
                  Loading your applications...
                </motion.div>
              ) : applications.length > 0 ? (
                <motion.ul 
                  initial="hidden" 
                  animate="visible" 
                  variants={containerVariants}
                  className="applications-list"
                >
                  {applications.map((application, index) => (
                    <motion.li
                      key={application.id}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="application-item"
                    >
                      <div className="application-info">
                        <div className="application-name">
                          {application.full_name || application.applicant?.username || "Application"}
                        </div>
                        <div className="application-details">
                          <span className="application-discipline">
                            {application.discipline || "Fellowship"}
                          </span>
                          <span className={`application-status ${getStatusClass(application.status)}`}>
                            {application.status?.toUpperCase() || "PENDING"}
                          </span>
                        </div>
                        <div className="application-date">
                          Submitted: {formatDate(application.created_at)}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="empty-state"
                >
                  <p>You haven't submitted any applications yet.</p>
                  <Link to="/apply" className="apply-link">
                    Start Your Application →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="login-prompt"
            >
              <p>Log in to view your submitted fellowship or undergraduate applications.</p>
              <button 
                onClick={() => navigate("/auth")} 
                className="login-btn"
              >
                Login
              </button>
            </motion.div>
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
                    Read article →
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              No blog posts yet. Check back soon for updates!
            </motion.p>
          )}
        </motion.div>

        <motion.div className="card" variants={cardVariants} whileHover="hover">
          <h2>
            Notifications
            {notifications.length > 0 && user && (
              <span className="badge">{notifications.length}</span>
            )}
          </h2>

          {user ? (
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div className="loading-spinner">
                  Loading notifications...
                </motion.div>
              ) : notifications.length > 0 ? (
                <div className="notifications-list">
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
                      <div>
                        <p>{notification.message}</p>
                        <small className="notification-time">
                          {formatDate(notification.created_at)}
                        </small>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  No notifications yet. We'll notify you when there are updates to your applications.
                </motion.p>
              )}
            </AnimatePresence>
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