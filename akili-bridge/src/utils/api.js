// src/utils/api.js

// Use environment variable if configured; fallback to local backend in development and production backend otherwise.
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development"
    ? "http://127.0.0.1:8000"
    : "https://akili-bridge.onrender.com");

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

export async function apiFetch(endpoint, options = {}) {
  const method = options.method || "GET";
  const { refresh } = getStoredTokens();

  let requestOptions = {
    credentials: "omit",
    ...options,
  };

  requestOptions.headers = withCsrfHeaders(
    method,
    withAuthHeaders(options.headers || {})
  );

  let res = await fetch(`${API_URL}${endpoint}`, requestOptions);

  // Handle expired access token with refresh
  if (res.status === 401 && refresh) {
    const refreshRes = await fetch(`${API_URL}/api/auth/refresh/`, {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh }),
    });

    if (!refreshRes.ok) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("token");
      throw new Error("Session expired. Please log in again.");
    }

    const data = await refreshRes.json();

    if (data.access) {
      localStorage.setItem("access", data.access);
    }

    requestOptions = {
      ...requestOptions,
      headers: withCsrfHeaders(
        method,
        withAuthHeaders(options.headers || {})
      ),
    };

    res = await fetch(`${API_URL}${endpoint}`, requestOptions);
  }

  return res;
}
