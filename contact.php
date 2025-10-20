<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    $date = date("Y-m-d H:i:s");

    // === (1) SAVE TO DATABASE ===
    // Uncomment this part if you have a database connection
    /*
    $conn = new mysqli("localhost", "root", "", "prodigy_db");
    if ($conn->connect_error) {
        die("Database connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message, date_submitted) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $message, $date);
    $stmt->execute();
    $stmt->close();
    $conn->close();
    */

    // === (2) SEND EMAIL ===
    $to = "aimudofrancis@gmail.com"; // Your admin email address
    $subject = "New Contact Message from $name";
    $body = "
      <h3>New Message from Prodigy Contact Form</h3>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Message:</strong><br>$message</p>
      <p><em>Sent on:</em> $date</p>
    ";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('✅ Thanks for reaching out to Prodigy Tech Hub! Our admin will get back to you in a giffy.'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('⚠️ Message failed to send. Please try again later.'); window.location.href='contact.html';</script>";
    }
}
?>
