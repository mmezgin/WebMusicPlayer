
<?php


session_start();
$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'login');

$name = $_POST['username'];
$pass = $_POST['password'];

$s = "select * from users where username = '$name' && password = '$pass'";

$result = mysqli_query($con,$s);

$num = mysqli_num_rows($result);

if($num == 1){
   
    $_SESSION['user'] = $username;
    header('Location: http://localhost/mert/VSCODE/main2.php');

}else{
    echo "Wrong Username or Password. You will be redirecting...";
    header( "refresh:4;url=http://localhost/mert/VSCODE/main.php" );
}


?>