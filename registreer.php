<?php
require('connect.php');
if(isset($_POST['submit'])){
$Firstname = mysqli_real_escape_string($connection, $_POST['Firstname']);
$Lastname = mysqli_real_escape_string($connection, $_POST['Lastname']);
$Username = mysqli_real_escape_string($connection, $_POST['Username']);
$email = mysqli_real_escape_string($connection, $_POST['email']);
$Phonenumber = mysqli_real_escape_string($connection, $_POST['Phonenumber']);
$password = mysqli_real_escape_string($connection, $_POST['Password']);
$herhaalpas = mysqli_real_escape_string($connection, $_POST['herhaalwachtwoord']);
$sql = "";
if(empty($Firstname) || empty($Lastname) || empty($Username) || empty($email) || empty($Phonenumber) || empty($password) || empty($herhaalpas)){
  echo "<p>Make sure to put a value in every input!</p>";
}else{
  if($password != $herhaalpas){
echo "<p>Passwords must be the same!</p>";
}else if(strlen($password)<8){
echo "<p>Password must exist out of at least 8 characters!";
}else if(!is_numeric($Phonenumber)){
  echo "<p>Phonenumber must exist only out of numbers!</p>";
}else{
  $sql = "INSERT INTO login(ID, Username, Firstname, Lastname, Email, Phone, Password, Repeat_Password) VALUES (NULL,'$Username','$Firstname', '$Lastname', '$email', '$Phonenumber','$password', '$herhaalpas')";
}
}
if($sql != ""){
   $result = mysqli_query($connection, $sql);
 $count = mysqli_num_rows($result);
echo $count;
}else{
  $result = 0;
}
  if($result>0){
  echo "<script> window.location.assign('index.php'); </script>";
}
}
 ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registreer</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<link rel="stylesheet" href="assets/css/reg.css">
</head>
<body>
<div class="container regist">
<div class="col-md-12 text-center">
<form class="form-signin" method="post" name="data">
<h3>Register yourself here!</h3>
<div class="col-md-12">
  <div class="col-md-12">
<input type="text" placeholder="Firstname" id="Firstname" name="Firstname" value="<?php if(isset($Firstname)){echo $Firstname;};?>"></input>
</div>
<br></br>
<div class="col-md-12">
<input type="text" placeholder="Lastname" id="Lastname" name="Lastname" value="<?php if(isset($Lastname)){echo $Lastname;};?>"></input>
</div>
<br></br>
<div class="col-md-12">
<input type="text" placeholder="Username" id="Username" name="Username" value="<?php if(isset($Username)){echo $Username;};?>"></input>
</div>
<br></br>
<div class="col-md-12">
<input type="email" placeholder="Email" name="email" id="email" value ="<?php if(isset($email)){echo $email;};?>"></input>
</div>
<br></br>
<div class="col-md-12">
<input type="text" placeholder="Phonenumber" id="Phonenumber" name="Phonenumber" value="<?php if(isset($Phonenumber)){echo $Phonenumber;};?>"></input>
</div>
<br></br>
<div class="col-md-12">
<input type="password" placeholder="Password" name="Password" id="Password" value="<?php if(isset($password)){echo $password;};?>"></input>
</div>
<br></br>
<div class="col-md-12">
<input type="password" placeholder="Password-repeat" name = "herhaalwachtwoord" id="herhaalwachtwoord" value="<?php if(isset($herhaalpas)){echo $herhaalpas;};?>"></input>
</div>
<br></br>
<input type="submit" name="submit" id="submit" value="Registreer"></input>
</form>
</div>
</div>
<?php  include('assets/inc/footer.php')?>
</body>
</html>
