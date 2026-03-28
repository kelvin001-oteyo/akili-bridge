import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "../utils/api";
import "./Auth.css";

export default function Auth() {
  const [mode, setMode] = useState("login"); // default to login
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // ✅ Registration block
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
        await res.json();
      }

      // ✅ Login block
      const loginRes = await apiFetch("/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: form.username, password: form.password }),
      });
      if (!loginRes.ok) {
        const errorData = await loginRes.json().catch(() => null);
        const message =
          errorData?.detail ||
          (errorData?.error && typeof errorData.error === "string"
            ? errorData.error
            : "Login failed");
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

      // ✅ Redirect after login
      setTimeout(() => {
        if (data.user.is_admin) {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
      }, 800);
    } catch (err) {
      setError(err.message);
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
        </AnimatePresence>

        <motion.input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="auth-input"
          variants={itemVariants}
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
        />

        <motion.button
          type="submit"
          className="auth-submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          {loading ? "Processing..." : mode === "register" ? "Register & Login" : "Login"}
        </motion.button>

        <motion.p className="auth-switch" variants={itemVariants}>
          {mode === "register" ? (
            <>
              Already have an account?{" "}
              <button type="button" onClick={() => setMode("login")} className="switch-btn">
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button type="button" onClick={() => setMode("register")} className="switch-btn">
                Register
              </button>
            </>
          )}
        </motion.p>
      </motion.form>
    </div>
  );
}
