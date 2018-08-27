<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $subject = "Email from Landing Page";
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = 'mike@mike-silverman.com';
  $headers = "From: ".$mailFrom;
  $txt = "You have recieved an email from ".$name.".\n\n".$message."\n\nEmail: ".$mailFrom;



  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");

}
