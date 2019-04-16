<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
$content="From: $name\n"." Email: $email\n"." Message: $message\n";
$recipient = "CorstSam@gmail.com";
$mailheader = "From: $email \r\n";
$mailheader .= "Reply-To: $recipient \r\n";
echo $mailheader;
mail($recipient, $subject, $content, $mailheader);
echo "Email sent!";
?>
