<?php
$json = file_get_contents("https://graph.facebook.com/160487437900700/events?access_token=1633445220011171|4b55bd7e097dfb8b1523f3c50c3ef13e");
$obj = json_decode($json);
echo json_encode($obj);

?>
