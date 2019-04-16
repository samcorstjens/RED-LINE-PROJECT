<!doctype html>
<html  lang="nl">
<head>
<title>Website Sam</title>
    <meta charset="UTF-8">
    <meta name="bootstrap" content="bootstrap">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="assets/css/style.css">
  <script src="assets/js/index.js"></script>
</head>
<body>
  <?php
include ('assets/inc/header.php') ?>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 imgafstand" src="assets/img/becode.png" alt="First slide">
      <div class="carousel-caption  d-md-block">
    <h5>Wanna know more about Becode?</h5>
    <button type="submit" class="btn btn-primary" onclick="location.href = 'https://www.becode.org/index_nl.html';">Check it out!</button>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 imgafstand" src="assets/img/code.jpg" alt="Second slide">
      <div class="carousel-caption d-md-block">
    <h5>Wanna learn some code by yourself?</h5>
    <button type="submit" class="btn btn-primary" onclick="location.href = 'https://www.sololearn.com/';">Check out SoloLearn!</button>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 imgafstand" src="assets/img/contact-us.jpg" alt="Third slide">
      <div class="carousel-caption d-md-block text-secondary">
      <h5>Wanna make contact?</h5>
      <button type="submit" class="btn btn-primary" onclick="location.href = 'Contact.php';">Check out my contact page!</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br/></br>
  <div class="container">
    <div class="row text-center ">
        <div class="col-md-6">
            <div class="card text-white bg-info">
              <div id="folder1">
                <img class="card-img-top" id="af" src="assets/img/logo_Becode.png" alt="Becode logo" onmouseover="foto()" onmouseout="foto2()"height="300px";></img>
              </div>
                <div class="card-body">
                    <h4 class="card-title">Becode</h4>
                    <p class="card-text">Becode is een opleiding die zicht specialiseerd in Soft-skills and Tech-skills. De opleiding is volledig gratis en zeker aan te raden voor hen die graag nog in de IT-sector willen werken!</p>
                    <button type="submit" class="btn btn-primary" onclick="location.href = 'https://www.becode.org/index_nl.html';">Website Becode</button>
                </div>
            </div>
            <br/></br>
        </div>
            <div class="col-md-6">
                <div class="card text-white bg-warning">
                    <img class="card-img-top" src="assets/img/gamemania.jpg" alt="mania" id="af2" onmouseover="foto3()" onmouseout="foto4()" height="300px">
                    <div class="card-body">
                        <h4 class="card-title">Game-Mania</h4>
                        <p class="card-text">De best gaming-site around. Check out the newest games in a shop near you or buy them online at reasonable prises!</p>
                        <button type="submit" class="btn btn-primary" onclick="location.href = 'https://www.gamemania.be/';">Website Game-Mania</button>
                    </div>
                </div>
  </div>
</div>
</div>
<?php
include ('assets/inc/footer.php') ?>
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>
