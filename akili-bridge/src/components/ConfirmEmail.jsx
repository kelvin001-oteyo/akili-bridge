import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";
import "./Auth.css";

export default function ConfirmEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const res = await apiFetch(`/api/auth/confirm-email/${token}/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        
        if (res.ok) {
          const data = await res.json();
          setStatus("success");
          setMessage(data.message || "Email confirmed successfully! You can now log in.");
          setTimeout(() => {
            navigate("/auth");
          }, 3000);
        } else {
          const errorData = await res.json().catch(() => null);
          setStatus("error");
          setMessage(errorData?.error || "Failed to confirm email. The link may be invalid or expired.");
        }
      } catch (err) {
        setStatus("error");
        setMessage("An error occurred. Please try again.");
      }
    };
    
    confirmEmail();
  }, [token, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-form">
        {status === "verifying" && (
          <>
            <h2 className="auth-title">Verifying Email...</h2>
            <p>Please wait while we confirm your email address.</p>
            <div className="loading-spinner">Processing your confirmation...</div>
          </>
        )}
        
        {status === "success" && (
          <>
            <h2 className="auth-title" style={{ color: "#48bb78" }}>Email Confirmed!</h2>
            <p className="auth-success">{message}</p>
            <p>Redirecting to login page...</p>
          </>
        )}
        
        {status === "error" && (
          <>
            <h2 className="auth-title" style={{ color: "#f56565" }}>Confirmation Failed</h2>
            <p className="auth-error">{message}</p>
            <button
              onClick={() => navigate("/auth")}
              className="auth-submit"
              style={{ marginTop: "20px" }}
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}