import { post } from "./api.js";

export const auth = {
  async login(email, password) {
    return post("/auth/login", { email, password });
  },

  async register(userData) {
    return post("/auth/register", userData);
  },

  logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  },

  getCurrentUser() {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      return {
        token,
        user: JSON.parse(userData),
      };
    }

    return null;
  },

  isLoggedIn() {
    return !!localStorage.getItem("authToken");
  },

  saveUserData(token, user) {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(user));
  },
};
