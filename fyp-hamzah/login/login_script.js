document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Example validation (replace with actual validation logic)
    if (username === 'user' && password === 'password') {
      // Redirect to index.html upon successful login
      window.location.href = 'index.html';
    } else {
      document.getElementById('loginError').textContent = 'Invalid username or password';
    }
  });

  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Example signup logic (replace with actual signup logic)
    // For demonstration, always redirect to index.html after signup
    window.location.href = 'index.html';
  });

  document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
  });

  document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
  });

  document.getElementById('adminButton').addEventListener('click', function() {
    window.location.href = 'admin_login.html';
  });
});
