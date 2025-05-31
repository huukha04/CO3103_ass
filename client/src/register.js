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

function checkPasswordMatch() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorElement = document.getElementById("passwordMatchError");
  const confirmInput = document.getElementById("confirmPassword");

  if (password !== confirmPassword && confirmPassword.length > 0) {
    errorElement.classList.remove("hidden");
    confirmInput.classList.remove("outline-neutral-200");
    confirmInput.classList.add("outline-red-500", "outline-2");
  } else {
    errorElement.classList.add("hidden");
    confirmInput.classList.remove("outline-red-500", "outline-2");
    confirmInput.classList.add("outline-neutral-200");
  }
}

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name) {
    alert("Please enter your name");
    return false;
  }

  if (!email) {
    alert("Please enter your email");
    return false;
  }

  if (!phone) {
    alert("Please enter your phone number");
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

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  registerUser();
  return false;
}

async function registerUser() {
  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    phone: document.getElementById("phone").value.trim(),
  };

  try {
    const result = await auth.register(formData);

    if (result.success) {
      alert("Account created successfully!");
      window.location.href = "login.html";
    } else {
      alert(result.error || "Registration failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", validateForm);
  }

  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  if (passwordInput) {
    passwordInput.addEventListener("input", checkPasswordMatch);
  }

  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", checkPasswordMatch);
  }

  const toggleButtons = document.querySelectorAll('button[type="button"]');
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      togglePassword(this);
    });
  });
});
