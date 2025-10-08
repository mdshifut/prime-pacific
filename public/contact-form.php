<?php
// contact.php

// Allow requests from any origin (for frontend requests)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Only allow POST method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only POST requests are allowed."]);
    exit;
}

// Get raw input (for JSON requests)
$input = json_decode(file_get_contents("php://input"), true);

// If not JSON, fallback to normal POST form data
$name = $input['name'] ?? $_POST['name'] ?? '';
$email = $input['email'] ?? $_POST['email'] ?? '';
$phone = $input['phone'] ?? $_POST['phone'] ?? '';
$subject = $input['subject'] ?? $_POST['subject'] ?? '';
$message = $input['message'] ?? $_POST['message'] ?? '';

// Validate required fields
if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "All fields are required."]);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($name));
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags($phone));
$subject = htmlspecialchars(strip_tags($subject));
$message = htmlspecialchars(strip_tags($message));

// Recipient email
// $to = "admin@primepacificconsultancy.com.au";
$to = "mdshifut@gmail.com";

// Email subject and body
$email_subject = "New Contact Form Submission: $subject";
$email_body = "
You have received a new message from the contact form on your website:

Name: $name
Email: $email
Phone: $phone
Subject: $subject
Message: 
$message
";

// Headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send message. Please try again later."]);
}
?>
