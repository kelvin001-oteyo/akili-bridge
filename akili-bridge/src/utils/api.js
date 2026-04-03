// src/utils/api.js

// Resolve API base:
// 1) explicit VITE_API_URL (recommended)
// 2) same-origin when running from a deployed domain
// 3) local Django dev server as sensible default
const API_URL =
  import.meta.env.VITE_API_URL ||
  (typeof window !== "undefined" && window.location.origin.includes("onrender.com")
    ? window.location.origin
    : "http://127.0.0.1:8000");

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
}

function getStoredTokens() {
  return {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    token: localStorage.getItem("token"),
  };
}

function buildAuthHeader() {
  const { access, token } = getStoredTokens();

  if (access) {
    return `Bearer ${access}`;
  }

  if (token) {
    return `Token ${token}`;
  }

  return null;
}

function withAuthHeaders(headers = {}) {
  const authHeader = buildAuthHeader();

  if (!authHeader) {
    return headers;
  }

  return {
    ...headers,
    Authorization: authHeader,
  };
}

function withCsrfHeaders(method = "GET", headers = {}) {
  const unsafeMethod = !["GET", "HEAD", "OPTIONS", "TRACE"].includes(
    method.toUpperCase()
  );

  if (!unsafeMethod || headers["X-CSRFToken"]) {
    return headers;
  }

  const csrfToken = getCookie("csrftoken");

  if (!csrfToken) {
    return headers;
  }

  return {
    ...headers,
    "X-CSRFToken": csrfToken,
  };
}

// Helper to clear all auth data
export function clearAuthData() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  sessionStorage.clear();
}

// Helper to check if user is authenticated
export function isAuthenticated() {
  const { access, token } = getStoredTokens();
  return !!(access || token);
}

// Helper to get current user
export function getCurrentUser() {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  }
  return null;
}

// Refresh token function
async function refreshAccessToken(refreshToken) {
  try {
    const response = await fetch(`${API_URL}/api/auth/refresh/`, {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Refresh failed");
    }

    const data = await response.json();
    
    if (data.access) {
      localStorage.setItem("access", data.access);
      return data.access;
    }
    
    throw new Error("No access token in response");
  } catch (error) {
    console.error("Token refresh failed:", error);
    clearAuthData();
    throw new Error("Session expired. Please log in again.");
  }
}

export async function apiFetch(endpoint, options = {}) {
  const method = options.method || "GET";
  const { refresh, access, token } = getStoredTokens();

  let requestOptions = {
    credentials: "omit",
    ...options,
  };

  // Don't add auth headers for auth endpoints to avoid conflicts
  const isAuthEndpoint = endpoint.includes("/api/auth/register/") || 
                         endpoint.includes("/api/auth/login/") ||
                         endpoint.includes("/api/auth/refresh/") ||
                         endpoint.includes("/api/auth/request-password-reset/") ||
                         endpoint.includes("/api/auth/verify-password-reset-token/") ||
                         endpoint.includes("/api/auth/reset-password/") ||
                         endpoint.includes("/api/auth/request-email-confirmation/") ||
                         endpoint.includes("/api/auth/confirm-email/");

  if (!isAuthEndpoint) {
    requestOptions.headers = withCsrfHeaders(
      method,
      withAuthHeaders(options.headers || {})
    );
  } else {
    requestOptions.headers = withCsrfHeaders(
      method,
      options.headers || {}
    );
  }

  let res = await fetch(`${API_URL}${endpoint}`, requestOptions);

  // Handle expired access token with refresh (only for non-auth endpoints)
  if (res.status === 401 && refresh && !isAuthEndpoint) {
    try {
      const newAccessToken = await refreshAccessToken(refresh);
      
      // Retry the original request with new token
      const newHeaders = {
        ...(requestOptions.headers || {}),
        Authorization: `Bearer ${newAccessToken}`,
      };
      
      // Remove old token headers if present
      if (newHeaders.Authorization === 'Bearer null') {
        delete newHeaders.Authorization;
      }
      
      const retryOptions = {
        ...requestOptions,
        headers: newHeaders,
      };
      
      res = await fetch(`${API_URL}${endpoint}`, retryOptions);
    } catch (refreshError) {
      // If refresh fails, clear auth and redirect to login
      clearAuthData();
      
      // Check if we're in a browser environment
      if (typeof window !== 'undefined') {
        // Don't redirect if we're already on auth page to avoid loops
        if (!window.location.pathname.includes('/auth') && 
            !window.location.pathname.includes('/login')) {
          window.location.href = '/auth';
        }
      }
      
      throw new Error(refreshError.message || "Session expired. Please log in again.");
    }
  }

  return res;
}

// Helper for GET requests
export async function apiGet(endpoint, options = {}) {
  return apiFetch(endpoint, { ...options, method: "GET" });
}

// Helper for POST requests
export async function apiPost(endpoint, data, options = {}) {
  return apiFetch(endpoint, {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: JSON.stringify(data),
  });
}

// Helper for PUT requests
export async function apiPut(endpoint, data, options = {}) {
  return apiFetch(endpoint, {
    ...options,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: JSON.stringify(data),
  });
}

// Helper for DELETE requests
export async function apiDelete(endpoint, options = {}) {
  return apiFetch(endpoint, { ...options, method: "DELETE" });
}

// Helper for file uploads (multipart/form-data)
export async function apiUpload(endpoint, formData, options = {}) {
  return apiFetch(endpoint, {
    ...options,
    method: "POST",
    body: formData,
    // Don't set Content-Type header, let browser set it with boundary
  });
}
