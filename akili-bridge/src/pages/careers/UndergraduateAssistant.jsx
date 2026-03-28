import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CareersApplication.css";
import { apiFetch } from "../../utils/api";

export default function CareersApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    year: "",
    country: "",
    gpa: "",
    availability: "",
    timezone: "",
    lab1: "",
    lab2: "",
    portfolio: "",
    cv: null,
    transcript: null,
    sop: null,
    sampleWork: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };




  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  const submission = new FormData();
  submission.append("full_name", formData.fullName);
  submission.append("email", formData.email);
  submission.append("phone_number", formData.phone);
  submission.append("country", formData.country);
  submission.append("university", formData.university);
  submission.append("degree_program", formData.degree);
  submission.append("year_of_study", formData.year);
  submission.append("gpa", formData.gpa);
  submission.append("availability", formData.availability);
  submission.append("time_zone", formData.timezone);
  submission.append("target_lab_first", formData.lab1);
  if (formData.lab2) submission.append("target_lab_second", formData.lab2);
  if (formData.portfolio) submission.append("portfolio_link", formData.portfolio);
  if (formData.cv) submission.append("cv", formData.cv);
  if (formData.transcript) submission.append("transcript", formData.transcript);
  if (formData.sop) submission.append("statement", formData.sop);
  if (formData.sampleWork) submission.append("sample_work", formData.sampleWork);

  try {
    const res = await apiFetch("/api/fellowship/undergraduate-applications/", {
  method: "POST",
  body: submission,
});
    

    if (res.ok) {
      setSubmitted(true);
      alert("Application submitted successfully!");
    } else {
      const errorData = await res.json().catch(() => null);
      console.error("Backend error:", errorData);
      alert(
        errorData?.detail ||
          errorData?.message ||
          "Error submitting application. Please try again."
      );
    }
  } catch (err) {
    console.error("Network error:", err);
    alert("Network error. Please try again later.");
  } finally {
    setSubmitting(false);
  }
};



  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="careers-application">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format')",
          }}
        />
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div
          className="header-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="header-badge">
            <span className="badge-icon">🚀</span>
            Join Our Team
          </div>
          <h1 className="page-title">
            Career Application Form
          </h1>
          <p className="header-description">
            Take the next step in your research career. Apply to join the Akili Bridge community
            and contribute to groundbreaking research that shapes Africa's future.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          className="application-form"
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Basic Information Section */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">👤</span>
              <h2 className="section-title">Personal Information</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+250 788 123 456"
                  value={formData.phone}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Country *</label>
                <input
                  name="country"
                  type="text"
                  placeholder="Your country"
                  value={formData.country}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
          </motion.div>

          {/* Academic Information Section */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">🎓</span>
              <h2 className="section-title">Academic Information</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">University & Department *</label>
                <input
                  name="university"
                  type="text"
                  placeholder="University name and department"
                  value={formData.university}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Degree Program *</label>
                <input
                  name="degree"
                  type="text"
                  placeholder="Bachelor of Science in ..."
                  value={formData.degree}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Year of Study *</label>
                <input
                  name="year"
                  type="text"
                  placeholder="3rd Year / Final Year"
                  value={formData.year}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">GPA (on 4.0 scale or %) *</label>
                <input
                  name="gpa"
                  type="text"
                  placeholder="3.5 / 85%"
                  value={formData.gpa}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
          </motion.div>

          {/* Availability Section */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">⏰</span>
              <h2 className="section-title">Availability</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Weekly Availability *</label>
                <input
                  name="availability"
                  type="text"
                  placeholder="e.g., 10-15 hours/week"
                  value={formData.availability}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Time Zone *</label>
                <input
                  name="timezone"
                  type="text"
                  placeholder="e.g., EAT (UTC+3)"
                  value={formData.timezone}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
          </motion.div>

          {/* Lab Preferences Section */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">🔬</span>
              <h2 className="section-title">Research Preferences</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Target Lab (First Choice) *</label>
                <input
                  name="lab1"
                  type="text"
                  placeholder="AI Research Lab / Biotech Lab"
                  value={formData.lab1}
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Target Lab (Second Choice)</label>
                <input
                  name="lab2"
                  type="text"
                  placeholder="Alternative lab preference"
                  value={formData.lab2}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group full-width">
                <label className="form-label">Portfolio / GitHub Link</label>
                <input
                  name="portfolio"
                  type="text"
                  placeholder="https://github.com/yourusername"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
          </motion.div>

          {/* Document Upload Section */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">📄</span>
              <h2 className="section-title">Required Documents</h2>
            </div>
            <div className="uploads-grid">
              <div className="upload-group">
                <label className="upload-label">
                  <span className="upload-icon">📑</span>
                  CV / Résumé *
                  <span className="file-info">(PDF, max 5MB)</span>
                </label>
                <input
                  name="cv"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={handleChange}
                  className="file-input"
                />
              </div>
              <div className="upload-group">
                <label className="upload-label">
                  <span className="upload-icon">📊</span>
                  Academic Transcript *
                  <span className="file-info">(PDF, max 5MB)</span>
                </label>
                <input
                  name="transcript"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={handleChange}
                  className="file-input"
                />
              </div>
              <div className="upload-group">
                <label className="upload-label">
                  <span className="upload-icon">✍️</span>
                  Statement of Purpose *
                  <span className="file-info">(PDF, max 5MB)</span>
                </label>
                <input
                  name="sop"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={handleChange}
                  className="file-input"
                />
              </div>
              <div className="upload-group">
                <label className="upload-label">
                  <span className="upload-icon">🎨</span>
                  Sample Work (Optional)
                  <span className="file-info">(PDF, max 10MB)</span>
                </label>
                <input
                  name="sampleWork"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="file-input"
                />
              </div>
            </div>
          </motion.div>

          {/* Submit Section */}
          <motion.div className="submit-section" variants={itemVariants}>
            <button
              type="submit"
              className="submit-button"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>
            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✓ Application submitted successfully! We'll be in touch soon.
              </motion.div>
            )}
            <p className="form-note">
              * Required fields. All documents should be in PDF format. 
              Maximum file size: 10MB per file.
            </p>
          </motion.div>
        </motion.form>
      </div>

    </div>
  );
}
