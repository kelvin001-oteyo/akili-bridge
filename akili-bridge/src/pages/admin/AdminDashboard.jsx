import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../../utils/api";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    reviewed: 0,
    accepted: 0,
    rejected: 0,
  });
  const [selectedApp, setSelectedApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await apiFetch("/api/fellowship/applications/");
      const data = await res.json();
      setApplications(data);

      const total = data.length;
      const pending = data.filter(app => app.status === "pending").length;
      const reviewed = data.filter(app => app.status === "reviewed").length;
      const accepted = data.filter(app => app.status === "accepted").length;
      const rejected = data.filter(app => app.status === "rejected").length;

      setStats({ total, pending, reviewed, accepted, rejected });
      setLoading(false);
    };
    fetchData();
  }, []);

  // Filter and search applications
  const filteredApplications = applications
    .filter(app => {
      const matchesSearch = 
        app.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.discipline?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || app.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      if (sortBy === "created_at") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleStatusChange = async (appId, newStatus) => {
    try {
      const res = await apiFetch(`/api/fellowship/applications/${appId}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setApplications(applications.map(app => 
          app.id === appId ? { ...app, status: newStatus } : app
        ));
        // Update stats
        const updatedApps = applications.map(app => 
          app.id === appId ? { ...app, status: newStatus } : app
        );
        const total = updatedApps.length;
        const pending = updatedApps.filter(app => app.status === "pending").length;
        const reviewed = updatedApps.filter(app => app.status === "reviewed").length;
        const accepted = updatedApps.filter(app => app.status === "accepted").length;
        const rejected = updatedApps.filter(app => app.status === "rejected").length;
        setStats({ total, pending, reviewed, accepted, rejected });
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const statCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Animated Background */}
      <div className="dashboard-bg">
        <div className="dashboard-gradient"></div>
        <div className="dashboard-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="dashboard-particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100, -200],
                x: [null, Math.random() * 200 - 100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="dashboard-container">
        {/* Header */}
        <motion.div
          className="dashboard-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="dashboard-title">
              Admin Dashboard
              <motion.span
                className="dashboard-title-glow"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </h1>
            <p className="dashboard-subtitle">
              Manage and review fellowship applications
            </p>
          </div>
          <motion.div
            className="dashboard-date"
            whileHover={{ scale: 1.05 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <StatCard 
            title="Total Applications" 
            value={stats.total} 
            color="gradient-blue"
            icon="📊"
            variants={statCardVariants}
          />
          <StatCard 
            title="Pending Review" 
            value={stats.pending} 
            color="gradient-yellow"
            icon="⏳"
            variants={statCardVariants}
          />
          <StatCard 
            title="Reviewed" 
            value={stats.reviewed} 
            color="gradient-gray"
            icon="👁️"
            variants={statCardVariants}
          />
          <StatCard 
            title="Accepted" 
            value={stats.accepted} 
            color="gradient-green"
            icon="✅"
            variants={statCardVariants}
          />
          <StatCard 
            title="Rejected" 
            value={stats.rejected} 
            color="gradient-red"
            icon="❌"
            variants={statCardVariants}
          />
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="filters-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, or discipline..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            {["all", "pending", "reviewed", "accepted", "rejected"].map(status => (
              <motion.button
                key={status}
                className={`filter-btn ${statusFilter === status ? 'active' : ''}`}
                onClick={() => setStatusFilter(status)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Applications Table */}
        <motion.div
          className="table-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {loading ? (
            <div className="loading-state">
              <motion.div
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p>Loading applications...</p>
            </div>
          ) : (
            <>
              <div className="table-wrapper">
                <table className="premium-table">
                  <thead>
                    <tr>
                      {["Name", "Email", "Country", "Discipline", "GPA", "Status", "Submitted", "Actions"].map((header, idx) => (
                        <th key={header}>
                          {header}
                          {header !== "Actions" && header !== "Status" && (
                            <motion.button
                              className="sort-btn"
                              onClick={() => {
                                const sortKey = header.toLowerCase();
                                if (sortBy === sortKey) {
                                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                                } else {
                                  setSortBy(sortKey);
                                  setSortOrder("asc");
                                }
                              }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M12 5L12 19M12 5L8 9M12 5L16 9" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </motion.button>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {paginatedApplications.map((app, index) => (
                        <motion.tr
                          key={app.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(59,130,246,0.05)" }}
                        >
                          <td data-label="Name">
                            <div className="applicant-name">
                              <div className="avatar">
                                {app.full_name?.charAt(0)}
                              </div>
                              {app.full_name}
                            </div>
                          </td>
                          <td data-label="Email">{app.email}</td>
                          <td data-label="Country">{app.country}</td>
                          <td data-label="Discipline">{app.discipline}</td>
                          <td data-label="GPA">
                            <span className="gpa-badge">{app.gpa}</span>
                          </td>
                          <td data-label="Status">
                            <select
                              value={app.status}
                              onChange={(e) => handleStatusChange(app.id, e.target.value)}
                              className={`status-select status-${app.status}`}
                            >
                              <option value="pending">Pending</option>
                              <option value="reviewed">Reviewed</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                          <td data-label="Submitted">
                            {new Date(app.created_at).toLocaleDateString()}
                          </td>
                          <td data-label="Actions">
                            <motion.button
                              className="view-btn"
                              onClick={() => setSelectedApp(app)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View Details
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <motion.button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Previous
                  </motion.button>
                  {[...Array(totalPages)].map((_, i) => (
                    <motion.button
                      key={i}
                      className={currentPage === i + 1 ? 'active' : ''}
                      onClick={() => setCurrentPage(i + 1)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {i + 1}
                    </motion.button>
                  ))}
                  <motion.button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next
                  </motion.button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-header-info">
                  <div className="modal-avatar">
                    {selectedApp.full_name?.charAt(0)}
                  </div>
                  <div>
                    <h2>{selectedApp.full_name}</h2>
                    <p>{selectedApp.discipline}</p>
                  </div>
                </div>
                <motion.button
                  className="modal-close"
                  onClick={() => setSelectedApp(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>

              <div className="modal-body">
                <div className="info-grid">
                  <InfoItem label="Email" value={selectedApp.email} icon="📧" />
                  <InfoItem label="Phone" value={selectedApp.phone} icon="📱" />
                  <InfoItem label="Country" value={selectedApp.country} icon="🌍" />
                  <InfoItem label="University" value={selectedApp.university} icon="🎓" />
                  <InfoItem label="Degree" value={selectedApp.degree} icon="📚" />
                  <InfoItem label="Year" value={selectedApp.year} icon="📅" />
                  <InfoItem label="GPA" value={selectedApp.gpa} icon="⭐" />
                  <InfoItem label="Availability" value={selectedApp.availability} icon="⏰" />
                  <InfoItem label="Timezone" value={selectedApp.timezone} icon="🌐" />
                  <InfoItem label="Lab 1" value={selectedApp.lab1} icon="🔬" />
                  <InfoItem label="Lab 2" value={selectedApp.lab2} icon="🧪" />
                </div>

                {selectedApp.portfolio && (
                  <div className="portfolio-link">
                    <h3>Portfolio</h3>
                    <a href={selectedApp.portfolio} target="_blank" rel="noreferrer">
                      {selectedApp.portfolio}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H11" stroke="currentColor" strokeWidth="2"/>
                        <path d="M15 3H21V9M21 3L10 14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </a>
                  </div>
                )}

                <div className="documents-section">
                  <h3>Documents</h3>
                  <div className="documents-grid">
                    <DocumentLink url={selectedApp.cv} title="Curriculum Vitae" icon="📄" />
                    <DocumentLink url={selectedApp.transcript} title="Academic Transcript" icon="📊" />
                    {selectedApp.sop && <DocumentLink url={selectedApp.sop} title="Statement of Purpose" icon="✍️" />}
                    {selectedApp.sampleWork && <DocumentLink url={selectedApp.sampleWork} title="Sample Work" icon="🎨" />}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <motion.button
                  className="btn-secondary"
                  onClick={() => setSelectedApp(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
                <motion.button
                  className="btn-primary"
                  onClick={() => handleStatusChange(selectedApp.id, "accepted")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Accept Application
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable Components
function StatCard({ title, value, color, icon, variants }) {
  return (
    <motion.div
      className={`stat-card ${color}`}
      variants={variants}
      whileHover="hover"
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-info">
        <h3>{title}</h3>
        <motion.p
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.p>
      </div>
    </motion.div>
  );
}

function InfoItem({ label, value, icon }) {
  return (
    <div className="info-item">
      <span className="info-icon">{icon}</span>
      <div>
        <strong>{label}</strong>
        <p>{value}</p>
      </div>
    </div>
  );
}

function DocumentLink({ url, title, icon }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="document-link"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="doc-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>Download</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 13V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H11" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 3H21V9M21 3L10 14" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </motion.a>
  );
}