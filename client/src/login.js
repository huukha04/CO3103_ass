import { auth } from "./utils/auth.js";

function togglePassword(button) {
  const input = button.parentElement.querySelector("input");
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";

  const eyeOpen = button.querySelector(".eye-open");
  const eyeClosed = button.querySelector(".eye-closed");
  eyeOpen.classList.toggle("hidden");
  eyeClosed.classList.toggle("hidden");
}

async function loginUser(email, password) {
  try {
    const result = await auth.login(email, password);

    if (result.success) {
      auth.saveUserData(result.data.token, result.data.user);
      alert("Login successful! Redirecting...");
      window.location.href = "/index.html";
    } else {
      alert(result.error || "Login failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }
}

function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email) {
    alert("Please enter your email");
    return false;
  }

  if (!password) {
    alert("Please enter your password");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  loginUser(email, password);
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", validateForm);
  }

  const toggleButtons = document.querySelectorAll('button[type="button"]');
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      togglePassword(this);
    });
  });
});
