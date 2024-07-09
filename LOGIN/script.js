function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // E-posta kontrolü
  const emailError = document.getElementById("emailError");
  if (!isValidEmail(email)) {
    emailError.innerText = "Invalid email address.";
    return;
  } else {
    emailError.innerText = ""; // Hata yoksa hata mesajını temizle
  }

  // Şifre kontrolü
  const passwordHelp = document.getElementById("passwordHelp");
  if (!isValidPassword(password)) {
    errorMessage.innerText = "Password must be at least 8 characters.";
    passwordHelp.style.color = "#ff6347";
    return;
  }

  if (email === "user@example.com" && password === "Password123!") {
    alert("Login successful!");
  } else {
    errorMessage.innerText = "Invalid email or password.";
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");

  if (!isValidEmail(email)) {
    emailError.innerText = "Invalid email address.";
  } else {
    emailError.innerText = ""; // Hata yoksa hata mesajını temizle
  }
}

function toggleDarkMode() {
  const body = document.body;
  const loginContainer = document.getElementById("loginContainer");
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    loginContainer.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    loginContainer.classList.remove("dark-mode");
  }
}

function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signUpForm").style.display = "none";
}

function showSignUpForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signUpForm").style.display = "block";
}
function signUp() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const birthDate = document.getElementById("birthDate").value;
  const signupErrorMessage = document.getElementById("signupErrorMessage");

  // E-posta kontrolü
  const signupEmailError = document.getElementById("signupEmailError");
  if (!isValidEmail(email)) {
    signupEmailError.innerText = "Invalid email address.";
    return;
  } else {
    signupEmailError.innerText = ""; // Hata yoksa hata mesajını temizle
  }

  // Şifre kontrolü
  const signupPasswordHelp = document.getElementById("signupPasswordHelp");
  if (!isValidPassword(password)) {
    signupErrorMessage.innerText = "Password must be at least 8 characters.";
    signupPasswordHelp.style.color = "#ff6347";
    return;
  }

  // Diğer kontrol ve işlemleri ekleyebilirsiniz

  alert("Sign up successful!");
}

function validateSignUpEmail() {
  const email = document.getElementById("signupEmail").value;
  const signupEmailError = document.getElementById("signupEmailError");

  if (!isValidEmail(email)) {
    signupEmailError.innerText = "Invalid email address.";
  } else {
    signupEmailError.innerText = ""; // Hata yoksa hata mesajını temizle
  }
}

function validateSignUpPassword() {
  const password = document.getElementById("signupPassword").value;
  const signupPasswordHelp = document.getElementById("signupPasswordHelp");

  if (!isValidPassword(password)) {
    signupErrorMessage.innerText = "Password must be at least 8 characters.";
    signupPasswordHelp.style.color = "#ff6347";
  } else {
    signupErrorMessage.innerText = ""; // Hata yoksa hata mesajını temizle
  }
}
