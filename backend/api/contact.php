<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'functions.php'; // Include the common email sending file

// Get the posted data
$fullName = isset($_POST['fullName']) ? $_POST['fullName'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$mobile = isset($_POST['mobile']) ? $_POST['mobile'] : '';
$city = isset($_POST['city']) ? $_POST['city'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// Validate the input fields
if (empty($fullName) || empty($email) || empty($mobile) || empty($city) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

// Call the send_email function with the type 'contact'
$response = send_email($fullName, $email,  $message,$mobile, null, 'contact');
echo json_encode($response);
?>
