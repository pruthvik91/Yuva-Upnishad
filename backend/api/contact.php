<?php
// Include PHPMailer (adjust the path as needed)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Adjust the path to PHPMailer's autoload

// Get the posted data
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// Validate the input fields
if(empty($name) || empty($email) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

// Create the PHPMailer instance
$mail = new PHPMailer(true);
try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'pruthvikdhamecha@gmail.com';  // Your email
    $mail->Password = 'cijbcafcotqbcfaj';  // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('pruthvikdhamecha@gmail.com', 'Pruthvik');  // Add a recipient

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Message from ' . $name;
    $mail->Body    = '<p><strong>Name:</strong> ' . $name . '</p>
                      <p><strong>Email:</strong> ' . $email . '</p>
                      <p><strong>Message:</strong></p>
                      <p>' . nl2br($message) . '</p>';

    // Send the email
    if ($mail->send()) {
        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Message could not be sent.']);
    }
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
