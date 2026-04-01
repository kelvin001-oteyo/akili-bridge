// src/components/admin/AdminLayout.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { clearAuthData, getCurrentUser } from "../../utils/api";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import "./AdminLayout.css";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();

  // Auto-open on first load (optional - you can set to false to keep hidden)
  useEffect(() => {
    // You can set this to false to start collapsed
    setIsOpen(true);
  }, []);

  // Check if user is admin, if not redirect
  useEffect(() => {
    if (!user?.is_admin) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    clearAuthData();
    navigate("/auth");
  };

  // Subtle toggle button
  const AdminToggleButton = () => (
    <motion.button
      className="admin-toggle-btn"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
      title={isOpen ? "Close Admin Panel" : "Open Admin Panel"}
    >
      <span className="toggle-icon">{isOpen ? "✕" : "⚙️"}</span>
    </motion.button>
  );

  return (
    <>
      {/* Always visible toggle button */}
      <AdminToggleButton />

      {/* Admin Panel - Slides in/out */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="admin-panel-wrapper"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="admin-panel">
              {/* Minimal Header */}
              <div className="admin-panel-header">
                <div className="admin-header-content">
                  <div className="admin-avatar">
                    <span>👑</span>
                  </div>
                  <div className="admin-info">
                    <h3>Admin Panel</h3>
                    <p>{user?.username || "Admin"}</p>
                  </div>
                  <button 
                    className="admin-minimize-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    _
                  </button>
                </div>
              </div>

              {/* Quick Stats Bar - Minimal */}
              <div className="admin-quick-stats">
                <div className="quick-stat">
                  <span className="stat-label">👥 Users</span>
                  <span className="stat-value">-</span>
                </div>
                <div className="quick-stat">
                  <span className="stat-label">📝 Apps</span>
                  <span className="stat-value">-</span>
                </div>
                <div className="quick-stat">
                  <span className="stat-label">⏳ Pending</span>
                  <span className="stat-value">-</span>
                </div>
              </div>

              {/* Main Content - Your Existing AdminDashboard */}
              <div className="admin-content">
                <AdminDashboard />
              </div>

              {/* Footer with Logout */}
              <div className="admin-panel-footer">
                <button 
                  className="admin-logout-btn"
                  onClick={() => setShowLogoutConfirm(true)}
                >
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            className="admin-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLogoutConfirm(false)}
          >
            <motion.div
              className="admin-modal"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Confirm Logout</h3>
              <p>Are you sure you want to logout from Admin Panel?</p>
              <div className="admin-modal-actions">
                <button onClick={() => setShowLogoutConfirm(false)} className="modal-cancel">
                  Cancel
                </button>
                <button onClick={handleLogout} className="modal-confirm">
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}