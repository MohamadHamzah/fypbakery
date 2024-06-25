<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

// Replace with actual user authentication logic
if ($username == 'user' && $password == 'password') {
  $_SESSION['user_logged_in'] = true;
  echo "Success";
} else {
  echo "Invalid username or password";
}
?>
