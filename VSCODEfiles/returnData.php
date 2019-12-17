<?php

$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'music');



$sql = 'SELECT * FROM cart';

$result = mysqli_query($con,$sql);

$data = array();

while($row = mysqli_fetch_assoc($result)){
    $data[] = $row;

}

echo json_encode($data);

?>