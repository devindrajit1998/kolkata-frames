"use client";

export const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "kolkata2026",
};

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("kf_admin_auth") === "true";
}

export function login(username, password) {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem("kf_admin_auth", "true");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("kf_admin_auth");
}

export function checkAuth(redirect = "/admin/login") {
  if (!isAuthenticated()) {
    if (typeof window !== "undefined") window.location.href = redirect;
    return false;
  }
  return true;
}
