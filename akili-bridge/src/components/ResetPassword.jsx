import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../utils/api";
import "./Auth.css";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    new_password: "",
    confirm_password: ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validToken, setValidToken] = useState(false);
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    // Verify token is valid
    const verifyToken = async () => {
      try {
        const res = await apiFetch("/api/auth/verify-password-reset-token/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.valid) {
            setValidToken(true);
          } else {
            setError(data.error || "Invalid or expired reset link");
          }
        } else {
          const errorData = await res.json().catch(() => null);
          setError(errorData?.error || "Invalid or expired reset link. Please request a new one.");
        }
      } catch (err) {
        setError("Failed to verify reset link. Please try again.");
      } finally {
        setVerifying(false);
      }
    };
    
    verifyToken();
  }, [token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (form.new_password !== form.confirm_password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    
    if (form.new_password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }
    
    try {
      const res = await apiFetch("/api/auth/reset-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          new_password: form.new_password,
          confirm_password: form.confirm_password,
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to reset password");
      }
      
      setSuccess("Password reset successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/auth");
      }, 3000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (verifying) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2 className="auth-title">Verifying Reset Link...</h2>
          <div className="loading-spinner">Please wait while we verify your request.</div>
        </div>
      </div>
    );
  }

  if (!validToken && error) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2 className="auth-title">Invalid Reset Link</h2>
          <p className="auth-error">{error}</p>
          <button
            onClick={() => navigate("/auth")}
            className="auth-submit"
            style={{ marginTop: "20px" }}
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <motion.form
        onSubmit={handleSubmit}
        className="auth-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="auth-title">Reset Password</h2>
        
        <AnimatePresence>
          {error && (
            <motion.p
              className="auth-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {error}
            </motion.p>
          )}
          {success && (
            <motion.p
              className="auth-success"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {success}
            </motion.p>
          )}
        </AnimatePresence>
        
        <input
          type="password"
          name="new_password"
          placeholder="New Password"
          value={form.new_password}
          onChange={handleChange}
          className="auth-input"
          required
        />
        
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm New Password"
          value={form.confirm_password}
          onChange={handleChange}
          className="auth-input"
          required
        />
        
        <button
          type="submit"
          className="auth-submit"
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
        
        <div className="auth-switch">
          <button type="button" onClick={() => navigate("/auth")} className="switch-btn">
            Back to Login
          </button>
        </div>
      </motion.form>
    </div>
  );
}