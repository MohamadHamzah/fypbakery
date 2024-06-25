document
  .getElementById("adminLoginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    // Example credentials check
    if (username === "admin" && password === "password") {
      // Store a flag in local storage to indicate admin is logged in
      localStorage.setItem("admin_logged_in", "true");
      // Redirect to the admin dashboard
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("adminLoginError").textContent =
        "Invalid username or password";
    }
  });
