// Check if the admin is logged in
if (localStorage.getItem('admin_logged_in') !== 'true') {
    // If not logged in, redirect to the admin login page
    window.location.href = 'admin_login.html';
  }
  
  document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear the local storage flag
    localStorage.removeItem('admin_logged_in');
    // Redirect to the admin login page
    window.location.href = 'admin_login.html';
  });
  