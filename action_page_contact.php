<?php 

/* 	require 'PHPmailer.php';

	$mail = new PHPMailer(true);


    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
    $mail->Port = 465; // set the SMTP port for the GMAIL server
    $mail->Username = "lekkeranders7@gmail.com"; // GMAIL username
    $mail->Password = "Alyaassen7"; // GMAIL password  */

	
	
	$con = mysqli_connect('localhost','root','usbw'); 
	
	if(!$con) { 
		echo 'Not Connected To Server'; 
	} 
	
	if (!mysqli_select_db ($con,'joris')) {		
		echo 'Database Not Selected'; 
	}
	
	$firstname = (isset($_POST['firstname'])) ? $_POST['firstname'] : '';
	$email = (isset($_POST['email'])) ? $_POST['email'] : '';
	$subject = (isset($_POST['subject'])) ? $_POST['subject'] : '';

	



	$sql = "insert into contact (firstname,email,subject) values ('$firstname','$email','$subject')"; 

	if (!mysqli_query($con,$sql)) { 

		echo "<script> alert('Uw bericht is niet verzonden'); </script>";
	}
 
 
	else { 
	
/*      $from = $_POST['email'];
	echo $from."\n";
	$to = "jorisgengler@hotmail.com";
	$subject = "subject";
	$txt = "Hello world!";
	$headers = "From: <".$from.">";

	echo $headers;

	mail($to,$subject,$txt,$headers); */

		

echo "<script> alert('Uw bericht is verzonden'); </script>";
	
	} 

   	 header("refresh:1; url=index.php#contact");
 
 
 
?>﻿