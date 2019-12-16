<?php


$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'music');


$name = mysqli_real_escape_string($con,$_POST['array']);

$sql = "INSERT INTO cart (id, song) VALUES (NULL, '$name');";

mysqli_query($con,$sql);





?>