<?php


$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'music');


$name = mysqli_real_escape_string($con,$_POST['array2']);

$sql = "INSERT INTO cart2 (id, song) VALUES (NULL, '$name');";

mysqli_query($con,$sql);




?>