<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Music Store</title>
    <script src="https://kit.fontawesome.com/9164f11355.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all">
    <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css" media="all">
    <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css" media="all">
   
</head>
<link rel="stylesheet" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="script.js"></script>


<body>
<div  id="leftSide">
    <div class="icon">
      <h1 id="logo"> 𝄞</h1> 
    </div>
    
    <div class="leftTexts">
     
            <div class="login">
            <div id="a1">
                <h3  class="fas fa-sign-in-alt">User</h3>  
            </div>
          </div>
          <div class="hot">
            <h3 class="fas fa-fire-alt">Hot</h3>
         </div>
    <div class="trending">
        <h3 class="fas fa-trophy">Trending</h3>
    </div>

    </div>
</div>

<div id="log" class="flex-wrap">
                <fieldset>
                    <form action="selection.php" method="post">
                        <input type="radio" name="rg" id="sign-in" value="signin" checked/>
                        <input type="radio" name="rg" id="sign-up" value="signup" />
                        <input type="radio" name="rg" id="reset" />        
            
                        <label for="sign-in">Sign in</label>
                        <label for="sign-up">Sign up</label>
                        <label for="reset">Password Reset</label>  
            
                        <input class="sign-up sign-in reset" name="username" type="username" placeholder="Username/email" />
                        <input class="sign-up sign-in" name="password" type="password" placeholder ="Password" />
                        <input class="sign-up" name="password2" type="password" placeholder ="Repeat Password" />
                        <button id="sign-in">Submit</button>        
                        
                       
                    </form>
                </fieldset>
            </div>


<div class="wrapper" id="center">
    <div class="box a" id="rock">
        <img class="forBlur" src="rock.png" alt="Rocky" width="150" height="150">
        <div id="rockText"><strong></strong></div>
    </div>
    <div class="box b" id="hiphop">
            <img class="forBlur2" src="rap.png" alt="hiphopy" width="150" height="150">
            <div id="hiphopText"><strong></strong></div>
        </div>
        <div class="box c" id="pop">
                <img class="forBlur3" src="blues.png" alt="popy" width="150" height="150">
                <div id="popText"><strong></strong></div>
            </div>
            <div class="box d" id="classic">
                <img class="forBlur4" src="jazz.png" alt="classicy" width="150" height="150">
                <div id="classicText"><strong></strong></div>
            </div>
            <div class="box e" id="edm">
                    <img class="forBlur5" src="edm.png" alt="edmy" width="150" height="150">
                    <div id="edmText"><strong></strong></div>
                </div>
                 <div class="box f" id="metal">
                    <img class="forBlur6" src="metal.png" alt="metaly" width="150" height="150">
                    <div id="metalText"><strong></strong></div>
                </div>
    </div>
    <div class="bottomFooter">
        <audio controls >

            <source class="player" src="" type= "audio/mpeg" />
            </audio>
            
    </div>
</body>
</html>