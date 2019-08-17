<?php

  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phoneNumber'];
    $msg = $_POST['message'];

    $to = '-----';
    $subject = 'Form Submission';
    $message = "Name : ".$name."\n"."Phone : ".$phone."\n"."Message is : "."\n\n".$msg;
    $header = "From : ".$email;

    if (mail($to, $subject, $message, $header)) {
      alert('Thankyou! Your message has been sent successfully');
    }
  }

 ?>
