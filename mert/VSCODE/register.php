<?php

if($_POST["sign-up"]){
session_start();
$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'login');

$name = $_POST['username'];
$pass = $_POST['password2'];

$s = " select * from users where username = '$name'";

$result = mysqli_query($con,$s);

$num = mysqli_num_rows($result);

if($num == 1){
    $prc = "username taken!";
}
else{
    $reg = "insert into users(username,password) values ('$name','$pass')";
    mysqli_query($con,$reg);
    header('Location: http://localhost/mert/VSCODE/main.php');
    
}
}
?>