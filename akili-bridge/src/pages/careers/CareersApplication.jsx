import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../../utils/api";

export default function CareersApplication() {
  const initialFormState = {
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
    labFirst: "",
    labSecond: "",
    portfolio: "",
    sampleWork: null,
    sop: null,
    cv: null,
    transcript: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Please fill out this field.";
    if (!formData.email) newErrors.email = "Please fill out this field.";
    if (!formData.phone) newErrors.phone = "Please fill out this field.";
    if (!formData.university) newErrors.university = "Please fill out this field.";
    if (!formData.degree) newErrors.degree = "Please fill out this field.";
    if (!formData.year) newErrors.year = "Please fill out this field.";
    if (!formData.country) newErrors.country = "Please fill out this field.";
    if (!formData.gpa) newErrors.gpa = "Please fill out this field.";
    if (!formData.availability) newErrors.availability = "Please fill out this field.";
    if (!formData.timezone) newErrors.timezone = "Please fill out this field.";
    if (!formData.cv) newErrors.cv = "Please upload your CV (PDF).";
    if (!formData.transcript) newErrors.transcript = "Please upload your transcript (PDF).";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitting(true);

    const submission = new FormData();
    submission.append("full_name", formData.fullName);
    submission.append("email", formData.email);
    submission.append("country", formData.country);
    submission.append("discipline", formData.degree);
    submission.append("phone", formData.phone);
    submission.append("university", formData.university);
    submission.append("degree", formData.degree);
    submission.append("year", formData.year);
    submission.append("gpa", formData.gpa);
    submission.append("availability", formData.availability);
    submission.append("timezone", formData.timezone);
    submission.append("lab1", formData.labFirst);
    if (formData.labSecond) submission.append("lab2", formData.labSecond);
    if (formData.portfolio) submission.append("portfolio", formData.portfolio);
    if (formData.sampleWork) submission.append("sampleWork", formData.sampleWork);
    if (formData.sop) submission.append("sop", formData.sop);
    if (formData.cv) submission.append("cv", formData.cv);
    if (formData.transcript) submission.append("transcript", formData.transcript);

    try {
      const res = await apiFetch("/api/fellowship/applications/", {
        method: "POST",
        body: submission,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const message =
          errorData?.detail ||
          (errorData && typeof errorData === "object"
            ? Object.entries(errorData)
                .map(([key, value]) =>
                  `${key}: ${Array.isArray(value) ? value.join(", ") : value}`
                )
                .join("; ")
            : "Error submitting application. Please try again.");
        throw new Error(message);
      }

      setSubmitted(true);
      setFormData(initialFormState);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      alert(err.message || "Error submitting application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const labs = [
    "EdTech & Digital Learning Lab",
    "Energy Storage & Battery Technology Lab",
    "Nanotechnology & Advanced Materials Lab",
    "Artificial Intelligence & Data Science Lab",
    "Biotechnology & Health Innovations Lab",
    "Renewable Energy Systems Lab",
    "Civil & Environmental Engineering Lab",
    "ICT & Emerging Technologies Lab"
  ];

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
            Careers Application Form
          </h1>
          <p className="header-description">
            Submit your application to join Akili Bridge and become part of Africa's research revolution.
            We're looking for passionate, driven individuals ready to make an impact.
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
          {/* Personal Information */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">👤</span>
              <h2 className="section-title">Personal Information</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full name *</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-input ${errors.fullName ? "error" : ""}`}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Your Email *</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? "error" : ""}`}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Phone *</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? "error" : ""}`}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
          </motion.div>

          {/* Academic Information */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">🎓</span>
              <h2 className="section-title">Academic Information</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">University and department *</label>
                <input
                  name="university"
                  type="text"
                  placeholder="Enter your University and department"
                  value={formData.university}
                  onChange={handleChange}
                  className={`form-input ${errors.university ? "error" : ""}`}
                />
                {errors.university && <span className="error-message">{errors.university}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Degree program *</label>
                <input
                  name="degree"
                  type="text"
                  placeholder="Enter your Degree program"
                  value={formData.degree}
                  onChange={handleChange}
                  className={`form-input ${errors.degree ? "error" : ""}`}
                />
                {errors.degree && <span className="error-message">{errors.degree}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Year of study *</label>
                <input
                  name="year"
                  type="text"
                  placeholder="Enter Year of study"
                  value={formData.year}
                  onChange={handleChange}
                  className={`form-input ${errors.year ? "error" : ""}`}
                />
                {errors.year && <span className="error-message">{errors.year}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Your Country *</label>
                <input
                  name="country"
                  type="text"
                  placeholder="Enter Your Country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`form-input ${errors.country ? "error" : ""}`}
                />
                {errors.country && <span className="error-message">{errors.country}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">GPA on a 4.0 scale or percentage mark *</label>
                <input
                  name="gpa"
                  type="text"
                  placeholder="Enter GPA on a 4.0 scale or percentage mark"
                  value={formData.gpa}
                  onChange={handleChange}
                  className={`form-input ${errors.gpa ? "error" : ""}`}
                />
                {errors.gpa && <span className="error-message">{errors.gpa}</span>}
              </div>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">⏰</span>
              <h2 className="section-title">Availability</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Weekly availability *</label>
                <input
                  name="availability"
                  type="text"
                  placeholder="e.g., 10-15 hours/week"
                  value={formData.availability}
                  onChange={handleChange}
                  className={`form-input ${errors.availability ? "error" : ""}`}
                />
                {errors.availability && <span className="error-message">{errors.availability}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Time zone *</label>
                <input
                  name="timezone"
                  type="text"
                  placeholder="Enter Time zone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className={`form-input ${errors.timezone ? "error" : ""}`}
                />
                {errors.timezone && <span className="error-message">{errors.timezone}</span>}
              </div>
            </div>
          </motion.div>

          {/* Lab Preferences */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">🔬</span>
              <h2 className="section-title">Lab Preferences</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Target lab preference first choice *</label>
                <select
                  name="labFirst"
                  value={formData.labFirst}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select your first choice lab</option>
                  {labs.map((lab, index) => (
                    <option key={index} value={lab}>{lab}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Target lab preference second choice *</label>
                <select
                  name="labSecond"
                  value={formData.labSecond}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select your second choice lab</option>
                  {labs.map((lab, index) => (
                    <option key={index} value={lab}>{lab}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Portfolio & Links */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">🔗</span>
              <h2 className="section-title">Portfolio & Links</h2>
            </div>
            <div className="form-group">
              <label className="form-label">Links to portfolio or GitHub</label>
              <input
                name="portfolio"
                type="url"
                placeholder="https://github.com/yourusername"
                value={formData.portfolio}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </motion.div>

          {/* File Uploads */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="section-header">
              <span className="section-icon">📄</span>
              <h2 className="section-title">Required Documents</h2>
            </div>
            <div className="uploads-grid">
              <div className="upload-group">
                <label className="upload-label">
                  <span className="upload-icon">📑</span>
                  Upload sample work file or link
                </label>
                <div className="file-input-wrapper">
                  <input
                    name="sampleWork"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="file-input"
                    id="sampleWork"
                  />
                  <label htmlFor="sampleWork" className="file-input-label">
                    Choose Files
                  </label>
                  <span className="file-name">
                    {formData.sampleWork ? formData.sampleWork.name : "No file chosen"}
                  </span>
                </div>
              </div>

              <div className="upload-group">
                <label className="upload-label">
                  <span className="upload-icon">✍️</span>
                  Upload Statement of Purpose
                </label>
                <div className="file-input-wrapper">
                  <input
                    name="sop"
                    type="file"
                    accept=".pdf"
                    onChange={handleChange}
                    className="file-input"
                    id="sop"
                  />
                  <label htmlFor="sop" className="file-input-label">
                    Choose Files
                  </label>
                  <span className="file-name">
                    {formData.sop ? formData.sop.name : "No file chosen"}
                  </span>
                </div>
              </div>

              <div className="upload-group">
                <label className="upload-label required">
                  <span className="upload-icon">📄</span>
                  Upload CV PDF *
                </label>
                <div className="file-input-wrapper">
                  <input
                    name="cv"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={handleChange}
                    className={`file-input ${errors.cv ? "error" : ""}`}
                    id="cv"
                  />
                  <label htmlFor="cv" className="file-input-label">
                    Choose Files
                  </label>
                  <span className="file-name">
                    {formData.cv ? formData.cv.name : "No file chosen"}
                  </span>
                </div>
                {errors.cv && <span className="error-message">{errors.cv}</span>}
              </div>

              <div className="upload-group">
                <label className="upload-label required">
                  <span className="upload-icon">📊</span>
                  Upload transcript PDF *
                </label>
                <div className="file-input-wrapper">
                  <input
                    name="transcript"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={handleChange}
                    className={`file-input ${errors.transcript ? "error" : ""}`}
                    id="transcript"
                  />
                  <label htmlFor="transcript" className="file-input-label">
                    Choose Files
                  </label>
                  <span className="file-name">
                    {formData.transcript ? formData.transcript.name : "No file chosen"}
                  </span>
                </div>
                {errors.transcript && <span className="error-message">{errors.transcript}</span>}
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
                  <span>Send</span>
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>
            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ✓ Application submitted successfully! We'll be in touch soon.
                </motion.div>
              )}
            </AnimatePresence>
            <p className="form-note">
              * Required fields. All documents should be in PDF format. 
              Maximum file size: 10MB per file.
            </p>
          </motion.div>
        </motion.form>
      </div>

      <style jsx>{`
        /* Main Container */
        .careers-application {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Header Section */
        .header-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 106, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .page-title {
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .header-description {
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.85;
        }

        /* Form Styles */
        .application-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-section {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-section:last-of-type {
          border-bottom: none;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .section-icon {
          font-size: 1.8rem;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #ffb347);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .form-input,
        .form-select {
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .form-input.error,
        .form-select.error {
          border-color: #e74c3c;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #ff6a00;
          background: rgba(255, 106, 0, 0.1);
          box-shadow: 0 0 0 2px rgba(255, 106, 0, 0.2);
        }

        .form-input::placeholder,
        .form-select::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .error-message {
          font-size: 0.7rem;
          color: #e74c3c;
          margin-top: 0.3rem;
        }

        /* Upload Section */
        .uploads-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
        }

        .upload-group {
          display: flex;
          flex-direction: column;
        }

        .upload-label {
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .upload-label.required::after {
          content: "*";
          color: #e74c3c;
          margin-left: 0.2rem;
        }

        .upload-icon {
          font-size: 1rem;
        }

        .file-input-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .file-input {
          display: none;
        }

        .file-input-label {
          padding: 0.6rem 1.2rem;
          background: rgba(255, 106, 0, 0.2);
          border: 1px solid rgba(255, 106, 0, 0.5);
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .file-input-label:hover {
          background: rgba(255, 106, 0, 0.4);
        }

        .file-name {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Submit Section */
        .submit-section {
          margin-top: 2rem;
          text-align: center;
        }

        .submit-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #ffb347);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .submit-button:hover:not(:disabled) {
          transform: scale(1.02);
          box-shadow: 0 5px 20px rgba(255, 106, 0, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-arrow {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .submit-button:hover:not(:disabled) .button-arrow {
          transform: translateX(5px);
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success-message {
          margin-top: 1rem;
          padding: 0.8rem;
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid #4caf50;
          border-radius: 10px;
          color: #4caf50;
          font-size: 0.9rem;
        }

        .form-note {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }

          .application-form {
            padding: 1.5rem;
          }

          .form-grid,
          .uploads-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.1rem;
          }

          .section-icon {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 1.8rem;
          }

          .header-description {
            font-size: 0.9rem;
          }

          .application-form {
            padding: 1rem;
          }

          .form-input,
          .form-select {
            padding: 0.6rem 0.8rem;
          }

          .submit-button {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }

          .file-input-label {
            padding: 0.5rem 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}
