<?php 

$answer = $_POST['rg']; 

if ($answer == "signin") {          
    
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
    

}
if ($answer == "signup") {


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
    echo "Username is in already use, Please select diffrent. You will be redirecting...";
    header( "refresh:5;url=http://localhost/mert/VSCODE/main.php" );
}
    
}




?>