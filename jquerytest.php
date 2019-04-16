<!doctype html>
<html  lang="nl">
<head>
<title>Website Sam</title>
    <meta charset="UTF-8">
    <meta name="bootstrap" content="bootstrap">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<link rel="stylesheet" href="assets/css/stylequiz.css">
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/jquery/jqueryquiz.js"></script>
</head>
<body>
  <?php  include('assets/inc/header.php')?>
  <br>
  <h1>Jquery Quiz</h1>
  <div class="container col-md-10">
  <br/>
  <br/>
  <a href="#" id="start" class="btn btn-primary btn-lg">Let's Begin</a>
  <br/>
  <div class="well jumbotron">
    <h3 id="question"></h3>
    <br/><br/>
    <form id="form">
    </form>
    <br/>
    <a href="#" id="next" class="btn btn-primary btn-lg">Next</a><br/>
  </div>
  <div id="result"></div>
  <div id="continue"></div>
  <div id="redo"><a href="jquerytest.php" class="btn btn-primary btn-lg">Retry the test</a></div>
  <div id="finished"><a href="Leren.php" class="btn btn-primary btn-lg">Return</a>
<br>
<br>
<a href="https://www.sololearn.com/Course/JQuery/" class="btn btn-primary btn-lg">Learn more on Sololearn</a>
  </div>
</div>
<?php include('assets/inc/footer.php')?>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  </body>
</html>
