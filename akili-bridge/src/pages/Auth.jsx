import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../utils/api";
import "./Auth.css";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login, register, forgot-password
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
    if (success) setSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Registration block
      if (mode === "register") {
        const res = await apiFetch("/api/auth/register/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        
        if (!res.ok) {
          const errorData = await res.json().catch(() => null);
          const message =
            errorData?.detail ||
            (errorData && typeof errorData === "object"
              ? Object.entries(errorData)
                  .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
                  .join("; ")
              : "Registration failed");
          throw new Error(message || "Registration failed");
        }
        
        const data = await res.json();
        
        // Show success message and switch to login
        setSuccess("Registration successful! Please check your email to confirm your account before logging in.");
        setMode("login");
        setForm({ username: "", email: "", password: "" });
        setLoading(false);
        return;
      }

      // Forgot Password block
      if (mode === "forgot-password") {
        const res = await apiFetch("/api/auth/request-password-reset/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email }),
        });
        
        if (!res.ok) {
          const errorData = await res.json().catch(() => null);
          throw new Error(errorData?.error || "Failed to send reset email");
        }
        
        setResetEmailSent(true);
        setSuccess("If an account exists with this email, you will receive a password reset link.");
        setLoading(false);
        return;
      }

      // Login block
      const loginRes = await apiFetch("/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: form.username, password: form.password }),
      });
      
      if (!loginRes.ok) {
        const errorData = await loginRes.json().catch(() => null);
        let message = errorData?.error || "Login failed";
        
        // Check if it's an unconfirmed email error
        if (errorData?.error?.toLowerCase().includes("confirm") || 
            errorData?.detail?.toLowerCase().includes("confirm")) {
          message = "Please confirm your email address before logging in. Check your inbox for the confirmation link.";
        }
        
        throw new Error(message);
      }

      const data = await loginRes.json();
      const accessToken = data.access || null;
      const legacyToken = data.token || null;

      localStorage.removeItem("access");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");

      if (accessToken) {
        localStorage.setItem("access", accessToken);
      }
      if (legacyToken) {
        localStorage.setItem("token", legacyToken);
      }
      if (data.refresh) {
        localStorage.setItem("refresh", data.refresh);
      }
      localStorage.setItem("user", JSON.stringify(data.user));

      // Check if email is confirmed
      if (!data.user.email_confirmed) {
        setSuccess("Please check your email to confirm your account. You can still access the dashboard, but some features may be limited.");
      }

      // Redirect after login
      setTimeout(() => {
        if (data.user.is_admin) {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      }, 800);
      
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleResendConfirmation = async () => {
    if (!form.email) {
      setError("Please enter your email address first");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const res = await apiFetch("/api/auth/request-email-confirmation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to resend confirmation email");
      }
      
      setSuccess("Confirmation email has been resent. Please check your inbox.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  // Forgot Password View
  if (mode === "forgot-password") {
    return (
      <div className="auth-container">
        <motion.form
          onSubmit={handleSubmit}
          className="auth-form"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="auth-title" variants={itemVariants}>
            Reset Password
          </motion.h2>

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

          {!resetEmailSent ? (
            <>
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="auth-input"
                variants={itemVariants}
                required
              />

              <motion.button
                type="submit"
                className="auth-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </motion.button>
            </>
          ) : (
            <motion.p variants={itemVariants} className="auth-info">
              {success}
            </motion.p>
          )}

          <motion.div className="auth-switch" variants={itemVariants}>
            <button type="button" onClick={() => {
              setMode("login");
              setResetEmailSent(false);
              setError(null);
              setSuccess(null);
            }} className="switch-btn">
              Back to Login
            </button>
          </motion.div>
        </motion.form>
      </div>
    );
  }

  // Login/Register View
  return (
    <div className="auth-container">
      <motion.form
        onSubmit={handleSubmit}
        className="auth-form"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="auth-title" variants={itemVariants}>
          {mode === "register" ? "Create Account" : "Login"}
        </motion.h2>

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

        <motion.input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="auth-input"
          variants={itemVariants}
          required={mode !== "forgot-password"}
        />

        {mode === "register" && (
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="auth-input"
            variants={itemVariants}
            required
          />
        )}

        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="auth-input"
          variants={itemVariants}
          required={mode !== "forgot-password"}
        />

        <motion.button
          type="submit"
          className="auth-submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
          disabled={loading}
        >
          {loading ? "Processing..." : mode === "register" ? "Register" : "Login"}
        </motion.button>

        {/* Resend Confirmation Button - only show on login mode when there's an error about confirmation */}
        {mode === "login" && error && error.includes("confirm") && (
          <motion.button
            type="button"
            onClick={handleResendConfirmation}
            className="auth-resend-btn"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            Resend Confirmation Email
          </motion.button>
        )}

        <motion.div className="auth-switch" variants={itemVariants}>
          {mode === "register" ? (
            <>
              Already have an account?{" "}
              <button type="button" onClick={() => {
                setMode("login");
                setError(null);
                setSuccess(null);
              }} className="switch-btn">
                Login
              </button>
            </>
          ) : (
            <>
              <div>
                Don’t have an account?{" "}
                <button type="button" onClick={() => {
                  setMode("register");
                  setError(null);
                  setSuccess(null);
                }} className="switch-btn">
                  Register
                </button>
              </div>
              <div style={{ marginTop: "10px" }}>
                <button 
                  type="button" 
                  onClick={() => {
                    setMode("forgot-password");
                    setError(null);
                    setSuccess(null);
                  }} 
                  className="switch-btn forgot-link"
                >
                  Forgot Password?
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.form>
    </div>
  );
}