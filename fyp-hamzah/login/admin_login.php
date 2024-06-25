<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

// Replace with actual admin credentials check
if ($username == 'admin' && $password == 'password') {
  $_SESSION['admin_logged_in'] = true;
  header("Location: ../dashboard.html");
  exit();
} else {
  echo "Invalid username or password";
}
?>
