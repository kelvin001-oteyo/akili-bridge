import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../../utils/api";
import "./AdminDashboard.css";

const ITEMS_PER_PAGE = 10;

const STATUS_OPTIONS = ["all", "pending", "reviewed", "accepted", "rejected"];

const TAB_CONFIG = {
  fellowship: {
    label: "Fellowship Applications",
    endpoint: "/api/fellowship/applications/",
    dateField: "created_at",
    searchFields: ["full_name", "email", "country", "discipline", "university"],
    statusField: "status",
    statusEndpoint: (id) => `/api/fellowship/applications/${id}/`,
    defaultSortBy: "created_at",
    columns: [
      { label: "Name", key: "full_name" },
      { label: "Email", key: "email" },
      { label: "Country", key: "country" },
      { label: "Discipline", key: "discipline" },
      { label: "Status", key: "status" },
      { label: "Submitted", key: "created_at" },
      { label: "Actions", key: "actions" },
    ],
  },
  undergraduate: {
    label: "Undergraduate Applications",
    endpoint: "/api/fellowship/undergraduate-applications/",
    dateField: "submitted_at",
    searchFields: ["full_name", "email", "country", "university", "degree_program"],
    statusField: "status",
    statusEndpoint: (id) => `/api/fellowship/undergraduate-applications/${id}/`,
    defaultSortBy: "submitted_at",
    columns: [
      { label: "Name", key: "full_name" },
      { label: "Email", key: "email" },
      { label: "Country", key: "country" },
      { label: "University", key: "university" },
      { label: "Status", key: "status" },
      { label: "Submitted", key: "submitted_at" },
      { label: "Actions", key: "actions" },
    ],
  },
  newsletter: {
    label: "Newsletter Subscriptions",
    endpoint: "/api/fellowship/newsletter-subscriptions/",
    dateField: "created_at",
    searchFields: ["email", "first_name", "last_name", "role", "source"],
    defaultSortBy: "created_at",
    columns: [
      { label: "Email", key: "email" },
      { label: "Name", key: "full_name" },
      { label: "Role", key: "role" },
      { label: "Source", key: "source" },
      { label: "Joined", key: "created_at" },
      { label: "Actions", key: "actions" },
    ],
  },
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.98 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 20 } },
  exit: { opacity: 0, x: 20, scale: 0.98, transition: { duration: 0.2 } },
};

export default function AdminDashboard() {
  const [datasets, setDatasets] = useState({
    fellowship: [],
    undergraduate: [],
    newsletter: [],
  });
  const [activeTab, setActiveTab] = useState("fellowship");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(TAB_CONFIG.fellowship.defaultSortBy);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError("");

      try {
        const [fellowshipRes, undergraduateRes, newsletterRes] = await Promise.all([
          apiFetch(TAB_CONFIG.fellowship.endpoint),
          apiFetch(TAB_CONFIG.undergraduate.endpoint),
          apiFetch(TAB_CONFIG.newsletter.endpoint),
        ]);

        const responses = [fellowshipRes, undergraduateRes, newsletterRes];

        for (const response of responses) {
          if (!response.ok) {
            throw new Error("Unable to load admin dashboard data.");
          }
        }

        const [fellowship, undergraduate, newsletter] = await Promise.all(
          responses.map((response) => response.json())
        );

        setDatasets({
          fellowship,
          undergraduate,
          newsletter,
        });
      } catch (fetchError) {
        console.error(fetchError);
        setError(fetchError.message || "Unable to load admin dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setSearchTerm("");
    setStatusFilter("all");
    setSortBy(TAB_CONFIG[activeTab].defaultSortBy);
    setSortOrder("desc");
  }, [activeTab]);

  const activeConfig = TAB_CONFIG[activeTab];
  const activeRecords = datasets[activeTab] || [];
  const supportsStatus = Boolean(activeConfig.statusField);

  const statSummary = useMemo(() => {
    const fellowshipPending = datasets.fellowship.filter((item) => item.status === "pending").length;
    const undergraduatePending = datasets.undergraduate.filter((item) => item.status === "pending").length;

    return [
      {
        title: "Fellowship",
        value: datasets.fellowship.length,
        color: "gradient-blue",
        icon: "FG",
      },
      {
        title: "Undergraduate",
        value: datasets.undergraduate.length,
        color: "gradient-green",
        icon: "UG",
      },
      {
        title: "Newsletter",
        value: datasets.newsletter.length,
        color: "gradient-gray",
        icon: "NL",
      },
      {
        title: "Pending Reviews",
        value: fellowshipPending + undergraduatePending,
        color: "gradient-yellow",
        icon: "RV",
      },
    ];
  }, [datasets]);

  const filteredRecords = useMemo(() => {
    return activeRecords
      .filter((record) => {
        const normalizedSearch = searchTerm.toLowerCase();
        const matchesSearch =
          !normalizedSearch ||
          activeConfig.searchFields.some((field) => {
            const value = record[field];
            return value && String(value).toLowerCase().includes(normalizedSearch);
          }) ||
          (activeTab === "newsletter" &&
            `${record.first_name || ""} ${record.last_name || ""}`
              .trim()
              .toLowerCase()
              .includes(normalizedSearch));

        const matchesStatus =
          !supportsStatus || statusFilter === "all" || record.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .sort((first, second) => compareValues(first, second, sortBy, sortOrder));
  }, [activeConfig.searchFields, activeRecords, activeTab, searchTerm, sortBy, sortOrder, statusFilter, supportsStatus]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / ITEMS_PER_PAGE));
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (columnKey) => {
    if (columnKey === "actions" || columnKey === "status") {
      return;
    }

    if (sortBy === columnKey) {
      setSortOrder((previous) => (previous === "asc" ? "desc" : "asc"));
      return;
    }

    setSortBy(columnKey);
    setSortOrder("asc");
  };

  const handleStatusChange = async (recordId, newStatus) => {
    const endpointBuilder = activeConfig.statusEndpoint;

    if (!endpointBuilder) {
      return;
    }

    try {
      const response = await apiFetch(endpointBuilder(recordId), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Could not update application status.");
      }

      setDatasets((previous) => ({
        ...previous,
        [activeTab]: previous[activeTab].map((item) =>
          item.id === recordId ? { ...item, status: newStatus } : item
        ),
      }));

      setSelectedRecord((previous) =>
        previous && previous.id === recordId ? { ...previous, status: newStatus } : previous
      );
    } catch (statusError) {
      console.error(statusError);
      alert(statusError.message || "Could not update application status.");
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-bg">
        <div className="dashboard-gradient"></div>
        <div className="dashboard-particles">
          {[...Array(30)].map((_, index) => (
            <motion.div
              key={index}
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
              Review fellowship applications, undergraduate applications, and newsletter subscribers.
            </p>
          </div>
          <motion.div className="dashboard-date" whileHover={{ scale: 1.05 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4Z" stroke="currentColor" strokeWidth="2" />
              <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {statSummary.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </motion.div>

        <motion.div
          className="filters-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="section-tabs">
            {Object.entries(TAB_CONFIG).map(([key, config]) => (
              <motion.button
                key={key}
                className={`filter-btn ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {config.label}
              </motion.button>
            ))}
          </div>

          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" />
            </svg>
            <input
              type="text"
              placeholder={`Search ${activeConfig.label.toLowerCase()}...`}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          {supportsStatus && (
            <div className="filter-buttons">
              {STATUS_OPTIONS.map((status) => (
                <motion.button
                  key={status}
                  className={`filter-btn ${statusFilter === status ? "active" : ""}`}
                  onClick={() => setStatusFilter(status)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          className="table-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="table-heading">
            <div>
              <h2 className="table-title">{activeConfig.label}</h2>
              <p className="table-subtitle">
                {filteredRecords.length} record{filteredRecords.length === 1 ? "" : "s"} match the current view.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="loading-state">
              <motion.div
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p>Loading dashboard data...</p>
            </div>
          ) : error ? (
            <div className="empty-state">
              <h3>Could not load dashboard data</h3>
              <p>{error}</p>
            </div>
          ) : paginatedRecords.length === 0 ? (
            <div className="empty-state">
              <h3>No records found</h3>
              <p>Try a different search or filter for this section.</p>
            </div>
          ) : (
            <>
              <div className="table-wrapper">
                <table className="premium-table">
                  <thead>
                    <tr>
                      {activeConfig.columns.map((column) => (
                        <th key={column.key}>
                          {column.label}
                          {column.key !== "actions" && column.key !== "status" && (
                            <motion.button
                              className="sort-btn"
                              onClick={() => handleSort(column.key)}
                              whileHover={{ scale: 1.1 }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M12 5L12 19M12 5L8 9M12 5L16 9" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </motion.button>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {paginatedRecords.map((record, index) => (
                        <motion.tr
                          key={`${activeTab}-${record.id}`}
                          layout
                          variants={tableRowVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(102, 126, 234, 0.12)" }}
                          transition={{ delay: index * 0.03 }}
                        >
                          {renderTableCells({
                            activeTab,
                            record,
                            onOpen: () => setSelectedRecord({ ...record, __type: activeTab }),
                            onStatusChange: handleStatusChange,
                          })}
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <motion.button
                    onClick={() => setCurrentPage((previous) => Math.max(1, previous - 1))}
                    disabled={currentPage === 1}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Previous
                  </motion.button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <motion.button
                      key={page}
                      className={currentPage === page ? "active" : ""}
                      onClick={() => setCurrentPage(page)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {page}
                    </motion.button>
                  ))}
                  <motion.button
                    onClick={() => setCurrentPage((previous) => Math.min(totalPages, previous + 1))}
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

      <AnimatePresence>
        {selectedRecord && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRecord(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-header-info">
                  <div className="modal-avatar">
                    {getDisplayName(selectedRecord).charAt(0)}
                  </div>
                  <div>
                    <h2>{getDisplayName(selectedRecord)}</h2>
                    <p>{TAB_CONFIG[selectedRecord.__type].label}</p>
                  </div>
                </div>
                <motion.button
                  className="modal-close"
                  onClick={() => setSelectedRecord(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  x
                </motion.button>
              </div>

              <div className="modal-body">
                <div className="info-grid">
                  {buildInfoItems(selectedRecord).map((item) => (
                    <InfoItem key={`${item.label}-${item.value}`} label={item.label} value={item.value} icon={item.icon} />
                  ))}
                </div>

                {selectedRecord.portfolio && (
                  <div className="portfolio-link">
                    <h3>Portfolio</h3>
                    <a href={selectedRecord.portfolio} target="_blank" rel="noreferrer">
                      {selectedRecord.portfolio}
                    </a>
                  </div>
                )}

                {selectedRecord.portfolio_link && (
                  <div className="portfolio-link">
                    <h3>Portfolio</h3>
                    <a href={selectedRecord.portfolio_link} target="_blank" rel="noreferrer">
                      {selectedRecord.portfolio_link}
                    </a>
                  </div>
                )}

                {buildDocuments(selectedRecord).length > 0 && (
                  <div className="documents-section">
                    <h3>Documents</h3>
                    <div className="documents-grid">
                      {buildDocuments(selectedRecord).map((document) => (
                        <DocumentLink
                          key={document.title}
                          url={document.url}
                          title={document.title}
                          icon={document.icon}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <motion.button
                  className="btn-secondary"
                  onClick={() => setSelectedRecord(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
                {selectedRecord.__type !== "newsletter" && (
                  <motion.button
                    className="btn-primary"
                    onClick={() => handleStatusChange(selectedRecord.id, "accepted")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Accept Application
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function renderTableCells({ activeTab, record, onOpen, onStatusChange }) {
  if (activeTab === "newsletter") {
    return (
      <>
        <td data-label="Email">{record.email}</td>
        <td data-label="Name">
          <div className="applicant-name">
            <div className="avatar">{getDisplayName(record).charAt(0)}</div>
            {getDisplayName(record)}
          </div>
        </td>
        <td data-label="Role">
          <span className="meta-badge">{record.role || "Subscriber"}</span>
        </td>
        <td data-label="Source">{record.source || "Unknown"}</td>
        <td data-label="Joined">{formatDate(record.created_at)}</td>
        <td data-label="Actions">
          <motion.button className="view-btn" onClick={onOpen} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View Details
          </motion.button>
        </td>
      </>
    );
  }

  if (activeTab === "undergraduate") {
    return (
      <>
        <td data-label="Name">
          <div className="applicant-name">
            <div className="avatar">{record.full_name?.charAt(0)}</div>
            {record.full_name}
          </div>
        </td>
        <td data-label="Email">{record.email}</td>
        <td data-label="Country">{record.country}</td>
        <td data-label="University">{record.university}</td>
        <td data-label="Status">
          <select
            value={record.status}
            onChange={(event) => onStatusChange(record.id, event.target.value)}
            className={`status-select status-${record.status}`}
          >
            {STATUS_OPTIONS.filter((status) => status !== "all").map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </td>
        <td data-label="Submitted">{formatDate(record.submitted_at)}</td>
        <td data-label="Actions">
          <motion.button className="view-btn" onClick={onOpen} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View Details
          </motion.button>
        </td>
      </>
    );
  }

  return (
    <>
      <td data-label="Name">
        <div className="applicant-name">
          <div className="avatar">{record.full_name?.charAt(0)}</div>
          {record.full_name}
        </div>
      </td>
      <td data-label="Email">{record.email}</td>
      <td data-label="Country">{record.country}</td>
      <td data-label="Discipline">{record.discipline}</td>
      <td data-label="Status">
        <select
          value={record.status}
          onChange={(event) => onStatusChange(record.id, event.target.value)}
          className={`status-select status-${record.status}`}
        >
          {STATUS_OPTIONS.filter((status) => status !== "all").map((status) => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </td>
      <td data-label="Submitted">{formatDate(record.created_at)}</td>
      <td data-label="Actions">
        <motion.button className="view-btn" onClick={onOpen} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          View Details
        </motion.button>
      </td>
    </>
  );
}

function buildInfoItems(record) {
  if (record.__type === "newsletter") {
    return [
      { label: "Email", value: record.email, icon: "@" },
      { label: "First Name", value: record.first_name || "-", icon: "FN" },
      { label: "Last Name", value: record.last_name || "-", icon: "LN" },
      { label: "Role", value: record.role || "Subscriber", icon: "RL" },
      { label: "Source", value: record.source || "Unknown", icon: "SC" },
      { label: "Joined", value: formatDate(record.created_at), icon: "DT" },
    ];
  }

  if (record.__type === "undergraduate") {
    return [
      { label: "Email", value: record.email, icon: "@" },
      { label: "Phone", value: record.phone_number, icon: "PH" },
      { label: "Country", value: record.country, icon: "CT" },
      { label: "University", value: record.university, icon: "UN" },
      { label: "Degree Program", value: record.degree_program, icon: "DG" },
      { label: "Year of Study", value: record.year_of_study, icon: "YR" },
      { label: "GPA", value: record.gpa, icon: "GP" },
      { label: "Availability", value: record.availability, icon: "AV" },
      { label: "Time Zone", value: record.time_zone, icon: "TZ" },
      { label: "First Lab Choice", value: record.target_lab_first, icon: "L1" },
      { label: "Second Lab Choice", value: record.target_lab_second || "-", icon: "L2" },
      { label: "Status", value: record.status, icon: "ST" },
    ];
  }

  return [
    { label: "Email", value: record.email, icon: "@" },
    { label: "Phone", value: record.phone || "-", icon: "PH" },
    { label: "Country", value: record.country, icon: "CT" },
    { label: "Discipline", value: record.discipline || "-", icon: "DS" },
    { label: "University", value: record.university || "-", icon: "UN" },
    { label: "Degree", value: record.degree || "-", icon: "DG" },
    { label: "Year", value: record.year || "-", icon: "YR" },
    { label: "GPA", value: record.gpa || "-", icon: "GP" },
    { label: "Availability", value: record.availability || "-", icon: "AV" },
    { label: "Time Zone", value: record.timezone || "-", icon: "TZ" },
    { label: "First Lab Choice", value: record.lab1 || "-", icon: "L1" },
    { label: "Second Lab Choice", value: record.lab2 || "-", icon: "L2" },
    { label: "Status", value: record.status, icon: "ST" },
  ];
}

function buildDocuments(record) {
  if (record.__type === "undergraduate") {
    return [
      { title: "Curriculum Vitae", url: record.cv, icon: "CV" },
      { title: "Academic Transcript", url: record.transcript, icon: "TR" },
      { title: "Statement", url: record.statement, icon: "ST" },
      record.sample_work ? { title: "Sample Work", url: record.sample_work, icon: "SW" } : null,
    ].filter(Boolean);
  }

  if (record.__type === "fellowship") {
    return [
      { title: "Curriculum Vitae", url: record.cv, icon: "CV" },
      { title: "Academic Transcript", url: record.transcript, icon: "TR" },
      record.sop ? { title: "Statement of Purpose", url: record.sop, icon: "SP" } : null,
      record.sampleWork ? { title: "Sample Work", url: record.sampleWork, icon: "SW" } : null,
    ].filter(Boolean);
  }

  return [];
}

function getDisplayName(record) {
  if (record.full_name) {
    return record.full_name;
  }

  const combined = `${record.first_name || ""} ${record.last_name || ""}`.trim();
  return combined || record.email || "Record";
}

function formatDate(value) {
  if (!value) {
    return "-";
  }

  return new Date(value).toLocaleDateString();
}

function compareValues(first, second, sortBy, sortOrder) {
  const firstValue = normalizeSortValue(first, sortBy);
  const secondValue = normalizeSortValue(second, sortBy);

  if (firstValue < secondValue) {
    return sortOrder === "asc" ? -1 : 1;
  }

  if (firstValue > secondValue) {
    return sortOrder === "asc" ? 1 : -1;
  }

  return 0;
}

function normalizeSortValue(record, sortBy) {
  if (sortBy === "full_name") {
    return getDisplayName(record).toLowerCase();
  }

  if (sortBy.includes("created_at") || sortBy.includes("submitted_at")) {
    return new Date(record[sortBy] || 0).getTime();
  }

  return String(record[sortBy] || "").toLowerCase();
}

function StatCard({ title, value, color, icon }) {
  return (
    <motion.div
      className={`stat-card ${color}`}
      variants={{
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 180 } },
      }}
      whileHover={{ scale: 1.03, y: -4 }}
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-info">
        <h3>{title}</h3>
        <p>{value}</p>
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
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="doc-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>Open file</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 13V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H11" stroke="currentColor" strokeWidth="2" />
        <path d="M15 3H21V9M21 3L10 14" stroke="currentColor" strokeWidth="2" />
      </svg>
    </motion.a>
  );
}
