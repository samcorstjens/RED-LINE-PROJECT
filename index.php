<?php
require('connect.php');
if(isset($_POST['loginhier'])){
$username = $_POST['username'];
$password = $_POST['password'];
$sql = "SELECT * FROM login WHERE Username = '$username' AND Password = '$password'";
$result = mysqli_query($connection, $sql);
$count = mysqli_num_rows($result);
if($count > 0){
echo "<script> window.location.assign('main.php'); </script>";
}
else{
}
}
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Log-in
    </title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
    </script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <link rel="stylesheet" href="assets/css/reg.css">
  </head>
  <body>
    <br>
    <div class="container">
      <div class="col-md-12 text-center">
        <img class="responsiveimg" width = "200px" height = "200px" src="assets/img/memory/img1.png" alt="becode">
      </div>
      <div class="col-md-12 text-center">
        <form class="form-signin" method="post">
          <h3 class="from-signin-heading">Welcome to Becode! Please log-in or register.
          </h3>
          <div class="col-md-12">
            <input class ="form-control-sm"type="text" placeholder="Username" name="username">
            </input>
          <input class="form-control-sm" type="password" placeholder="Password" name="password">
          </input>
      </div>
      <br>
      </br>
    <a href="registreer.php">Register
    </a>
    <input type="submit" name="loginhier" value="log-in">
    </input>
  </form>
</div>
</div>
</body>
</html>
