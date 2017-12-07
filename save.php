<?php
$image = $_POST['image'];
$screenname = $_POST['screenname'];
file_put_contents('generated/' . $screenname . '.png', base64_decode($image));
?>
