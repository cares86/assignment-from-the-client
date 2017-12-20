<?php

$con = mysqli_connect('localhost','root','usbw');

if(!$con) {
  echo 'Not Connected To Server';
}

if (!mysqli_select_db ($con,'joris')) {
  echo 'Database Not Selected';
}

$result = mysqli_query($conn,"SELECT maand FROM action_page WHERE maand='2017-12-14'");
while ()
{

     header("Location: ../index.php");
     exit();

}
mysqli_free_result($result);


?>
